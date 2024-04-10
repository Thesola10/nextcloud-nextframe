<?php

namespace OCA\NextFrame\Db;

use OCP\AppFramework\Db\Entity;

/**
 * @method int getId()
 * @method string getClientId()
 * @method string getName()
 * @method void setName(string $name)
 * @method string getAncestorUri()
 * @method void setAncestorUri(string $ancestorUri)
 */
class Client extends Entity {
    public $id;
    protected string $name = '';
    protected string $clientId = '';

    public function __construct() {
        $this->addType('client_id', 'string');
        $this->addType('name', 'string');
    }
}
