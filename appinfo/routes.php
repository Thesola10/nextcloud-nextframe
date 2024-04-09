<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\NextFrame\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
	'resources' => [
	],
	'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'PublicDisplay#get', 'url' => '/disp/{token}', 'verb' => 'GET']
	]
];
