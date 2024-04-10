<?php

// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\NextFrame\Controller;

use OCA\NextFrame\AppInfo\Application;
use OCA\NextFrame\Db\Client;
use OCA\NextFrame\Db\ClientMapper;
use OCA\NextFrame\Db\AncestorUri;
use OCA\NextFrame\Db\AncestorUriMapper;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\AppFramework\Http\Template\PublicTemplateResponse;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\ISession;
use OCP\Util;
use OCP\AppFramework\PublicShareController;

class PublicDisplayController extends PublicShareController {
    private $userSession;
    private $clientMapper;
    private $ancestorMapper;

    public function __construct(IRequest $request,
                                IUserSession $userSession,
                                ISession $session,
                                ClientMapper $clientMapper,
                                AncestorUriMapper $ancestorMapper) {
        parent::__construct(Application::APP_ID, $request, $session);
        $this->userSession = $userSession;
        $this->clientMapper = $clientMapper;
        $this->ancestorMapper = $ancestorMapper;
    }

    /**
     * Check that we are using a valid view token
     */
    public function isValidToken(): bool {
        try {
            $this->clientMapper->findByToken($this->getToken());
            return true;
        } catch (DoesNotExistException $e) {
            return false;
        }
    }

    /**
     * Display the frame view with populated CSP headers for the token
     * @NoAdminRequired
     * @NoCSRFRequired
     * @PublicPage
     */
    public function get() {
        $csp = new ContentSecurityPolicy();

        // If this fails, isValidToken() wrongly let us through.
        $client = $this->clientMapper->findByToken($this->getToken());
        $uris = $this->ancestorMapper->findByClient($client->getId());

        foreach ($uris as $uri) {
            $csp->addAllowedFrameAncestorDomain($uri->getAncestorUri());
        }

        if ($this->userSession->getUser() === null) {
            $resp = new PublicTemplateResponse(Application::APP_ID, 'main');
            $resp->setHeaderTitle("");
        } else {
            $resp = new TemplateResponse(Application::APP_ID, 'main');
        }

        $resp->setContentSecurityPolicy($csp);

        return $resp;
    }

    public function getPasswordHash(): string { return ""; }
    public function isPasswordProtected(): bool { return false; }
}
