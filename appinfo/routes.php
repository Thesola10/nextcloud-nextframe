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
        # Demo (only logged in, no embedding)
        [ 'name' => 'page#index'
        , 'url'  => '/'
        , 'verb' => 'GET'],
        # Actual embed page
        [ 'name' => 'PublicDisplay#get'
        , 'url'  => '/disp/{token}'
        , 'verb' => 'GET'],

        # Settings endpoints
        [ 'name' => 'Settings#addClient'
        , 'url'  => '/clients'
        , 'verb' => 'POST'],
        [ 'name' => 'Settings#deleteClient'
        , 'url'  => '/clients/{id}'
        , 'verb' => 'DELETE'],

        [ 'name' => 'Settings#addAncestorUri'
        , 'url'  => '/clients/{id}/ancestor'
        , 'verb' => 'POST'],
        [ 'name' => 'Settings#deleteAncestorUri'
        , 'url'  => '/clients/ancestor/{id}'
        , 'verb' => 'DELETE']
    ]
];
