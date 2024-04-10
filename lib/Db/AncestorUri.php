<?php

namespace OCA\NextFrame\Db;

// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

use OCP\AppFramework\Db\Entity;

/**
 * @method int getId()
 * @method string getClientId()
 * @method void setClientId(int $identifier)
 * @method string getAncestorUri()
 * @method void setAncestorUri(string $ancestorUri)
 */
class AncestorUri extends Entity {
    public $id;
    protected int $clientId = -1;
    protected string $ancestorUri = '';

    public function __construct() {
        $this->addType('client_id', 'int');
        $this->addType('ancestor_uri', 'string');
    }
}
