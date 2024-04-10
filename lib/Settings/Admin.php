<?php

declare(strict_types=1);

namespace OCA\NextFrame\Settings;

use OCA\NextFrame\AppInfo\Application;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\Settings\ISettings;
use OCP\IConfig;
use OCP\IInitialStateService;
use OCP\AppFramework\Services\IAppConfig;
use OCP\Util;

class Admin implements ISettings {

    private IConfig $config;
    private IInitialStateService $initialStateService;

    public function __construct(IInitialStateService $initialStateService,
                                IConfig $config)
    {
        $this->config = $config;
        $this->initialStateService = $initialStateService;
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
        $clients = [
            'demo' => [
                'name' => "Demo",
                'ancestorUri' => [ 
                    0 =>
                    [ 'id' => 0,
                      'ancestor_uri' => 'http://127.0.0.1:8081'
                    ]
                ]
            ],
        ];
        $this->initialStateService->provideInitialState('nextframe', 'clients', $clients);
        Util::addScript(Application::APP_ID, 'nextframe-main');
        return new TemplateResponse(Application::APP_ID, 'settings');
    }
}
