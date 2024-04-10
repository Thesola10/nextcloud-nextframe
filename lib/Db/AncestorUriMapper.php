<?php

namespace OCA\NextFrame\Db;

// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\AppFramework\Db\QBMapper;

class AncestorUriMapper extends QBMapper {
    public function __construct(IDBConnection $db) {
        parent::__construct($db, 'nextframe_ancestors');
    }

    public function find(int $id) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from($this->tableName)
           ->where(
               $qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT))
           );
        return $this->findEntity($qb);
    }

    public function findByClient(int $clientId) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
           ->from($this->tableName)
           ->where(
               $qb->expr()->eq('client_id', $qb->createNamedParameter($clientId, IQueryBuilder::PARAM_INT))
           );
        return $this->findEntities($qb);
    }
}
