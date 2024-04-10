<?php

declare(strict_types=1);

namespace OCA\NextFrame\Settings;

use OCA\NextFrame\AppInfo\Application;
use OCA\NextFrame\Db\ClientMapper;
use OCA\NextFrame\Db\AncestorUriMapper;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\Settings\ISettings;
use OCP\IConfig;
use OCP\IInitialStateService;
use OCP\AppFramework\Services\IAppConfig;
use OCP\Util;

class Admin implements ISettings {

    private IConfig $config;
    private IInitialStateService $initialStateService;
    private ClientMapper $clientMapper;
    private AncestorUriMapper $ancestorMapper;

    public function __construct(IInitialStateService $initialStateService,
                                IConfig $config,
                                ClientMapper $clientMapper,
                                AncestorUriMapper $ancestorMapper)
    {
        $this->config = $config;
        $this->initialStateService = $initialStateService;
        $this->clientMapper = $clientMapper;
        $this->ancestorMapper = $ancestorMapper;
    }

    public function getSection(): string
    {
        return "security";
    }

    public function getPriority(): int
    {
        return 165;
    }


    public function getForm(): TemplateResponse
    {
        $clients = $this->clientMapper->getClients();
        $result = [];

        foreach ($clients as $client) {
            $ancestorUris = $this->ancestorMapper->findByClient($client->getId());
            $resultAncestors = [];

            foreach($ancestorUris as $uri) {
                $resultAncestors[] = [
                    'id' => $uri->getId(),
                    'client_id' => $uri->getClientId(),
                    'ancestor_uri' => $uri->getAncestorUri(),
                ];
            }
            $result[] = [
                'id' => $client->getId(),
                'name' => $client->getName(),
                'ancestorUri' => $resultAncestors,
                'clientId' => $client->getClientId(),
            ];
        }

        $this->initialStateService->provideInitialState('nextframe', 'clients', $result);
        Util::addScript(Application::APP_ID, 'nextframe-main');
        return new TemplateResponse(Application::APP_ID, 'settings');
    }
}
