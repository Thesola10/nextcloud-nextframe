<template>
    <!--
    SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
    SPDX-License-Identifier: AGPL-3.0-or-later
    -->
	<div id="nextframe" class="section">
        <h2>{{ t('nextframe', 'Nextframe embedding clients') }}</h2>
        <p class="settings-hint">
        {{ t('nextframe', 'Nextframe allows external sites to embed the {instanceName} top bar.') }}
        </p>
        <span v-if="error" class="msg error">{{errorMsg}}</span>
        <table v-if="clients.length > 0" class="grid">
            <thead>
                <tr>
                    <th id="headerContent" />
                    <th id="headerRemove">
&nbsp;
                    </th>
                </tr>
            </thead>
            <tbody v-if="clients"
                   :key="version">
                <NextframeItem v-for="client in clients"
                    :key="client.id"
                    :client="client"
                    @addancestor="addAncestorUri"
                    @deleteancestor="deleteAncestorUri"
                    @delete="deleteClient" />
            </tbody>
        </table>

        <br>
        <h3>{{ t('nextframe', 'Add client') }}</h3>
        <span v-if="newClient.error" class="msg error">{{newClient.errorMsg}}</span>
        <form @submit.prevent="addClient">
            <input id="name"
                v-model="newClient.name"
                type="text"
                name="name"
                :placeholder="t('nextframe', 'Name')">
            <input id="ancestorUri"
                v-model="newClient.ancestorUri"
                type="url"
                name="ancestorUri"
                :placeholder="t('nextframe', 'Permitted frame ancestor URI')">
            <input type="submit" class="button" :value="t('nextframe', 'Add')">
        </form>
	</div>
</template>

<script>
import '@nextcloud/dialogs/styles/toast.scss'
import { generateUrl } from '@nextcloud/router'
import { showError, showSuccess } from '@nextcloud/dialogs'
import axios from '@nextcloud/axios'
import NextframeItem from './components/NextframeItem.vue'

export default {
	name: 'AdminSettings',
	computed: {
        NextframeItem
	},
    props: {
        clients: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            newClient: {
                name: '',
                ancestorUri: '',
                errorMsg: '',
                error: false,
            },
            error: false,
            errorMsg: '',
            version: 0,
        }
    },
	methods: {
        deleteAncestorUri(id) {

        },
        addAncestorUri(id, uri) {

        },
        deleteClient(id) {

        },
        addClient() {

        }
	},
}
</script>
<style scoped>
    table {
        max-width: 800px;
    }
</style>
