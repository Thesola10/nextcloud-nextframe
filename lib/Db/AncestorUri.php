<?php

namespace OCA\NextFrame\Db;

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
