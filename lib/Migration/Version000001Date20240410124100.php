<?php

declare(strict_types=1);

// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\NextFrame\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000001Date20240410124100 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
        $schema = $schemaClosure();

        if ($schema->hasTable('nextframe_clients')) {
            $schema->dropTable('nextframe_clients');
        }

        if ($schema->hasTable('nextframe_ancestors')) {
            $schema->dropTable('nextframe_ancestors');
        }

        if (!$schema->hasTable('nextframe_clients')) {
            $table = $schema->createTable('nextframe_clients');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('name', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('client_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->setPrimaryKey(['id']);
            $table->addUniqueIndex(['client_id'], 'nextframe_client_id_idx');
        }

        if (!$schema->hasTable('nextframe_ancestors')) {
            $table = $schema->createTable('nextframe_ancestors');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('client_id', 'integer', [
                'notnull' => true,
            ]);
            $table->addColumn('ancestor_uri', 'string', [
                'notnull' => true,
                'length' => 2000,
            ]);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['client_id'], 'nextframe_ancestor_client_idx');
        }
        return $schema;
    }
}
