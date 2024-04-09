<?php

namespace OCA\NextFrame\Controller;

use OCA\NextFrame\AppInfo\Application;

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

    public function __construct(IRequest $request, IUserSession $userSession, ISession $session) {
        parent::__construct(Application::APP_ID, $request, $session);
        $this->userSession = $userSession;
    }

    /**
     * Check that we are using a valid view token
     */
    public function isValidToken(): bool {
        return $this->getToken() === 'test';
    }

    /**
     * uh, get the view I guess
     */
    #[NoAdminRequired]
    #[NoCSRFRequired]
    #[PublicPage]
    public function get() {
        Util::addScript(Application::APP_ID, 'nextframe-main');

        $csp = new ContentSecurityPolicy();
        $csp->addAllowedFrameAncestorDomain("https://ceou.thesola.io");
        //TODO: pull AllowedFrameAncestor from config

        if ($this->userSession->getUser() === null) {
            $resp = new PublicTemplateResponse(Application::APP_ID, 'public');
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
