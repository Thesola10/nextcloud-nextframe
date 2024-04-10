<template>
    <!--
    SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
    SPDX-License-Identifier: AGPL-3.0-or-later
    -->
    <div id="nextframe" class="section">
        <h2>{{ t('nextframe', 'Nextframe embedding clients') }}</h2>
        <p class="settings-hint">
        {{ t('nextframe', 'Nextframe allows external sites to embed the {instanceName} top bar.', { instanceName: OC.theme.name }) }}
        </p>
        <p class="settings-hint">
        <vue-markdown>
{{ t('nextframe', 'Add an HTML `object` tag to your website pointing to the following address:') }} `{{ OC.getProtocol() }}://{{ OC.getHost() }}/{{ OC.getRootPath() }}apps/nextframe/disp/(token)`
        </vue-markdown>
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
import { translate as t } from '@nextcloud/l10n'
import VueMarkdown from '@adapttive/vue-markdown'

export default {
    name: 'AdminSettings',
    components: {
        NextframeItem,
        VueMarkdown
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
        t,
        deleteAncestorUri(id) {
            axios.delete(generateUrl('apps/nextframe/clients/ancestor/{id}', { id }))
                .then(response => {
                    this.clients.splice(0, this.clients.length)
                    for (let i = 0; i < response.data.length; i++) {
                        this.clients.push(response.data[i])
                    }
                    this.version += 1
                }).catch(reason => {
                    this.error = true
                    this.errorMsg = reason
                })
        },
        addAncestorUri(id, uri) {
            this.error = false

            axios.post(generateUrl('apps/nextframe/clients/{id}/ancestor'),
                        { id, ancestorUri: uri })
                .then(response => {
                    this.clients.splice(0, this.clients.length)
                    for (let i = 0; i < response.data.length; i++) {
                        this.clients.push(response.data[i])
                    }
                    this.version += 1
                }).catch(reason => {
                    this.error = true
                    this.errorMsg = reason
                })
        },
        deleteClient(id) {
            axios.delete(generateUrl('apps/nextframe/clients/{id}', { id }))
                .then(response => {
                    this.clients = this.clients.filter(client => client.id !== id)
                })
        },
        addClient() {
            this.newClient.error = false

            axios.post(generateUrl('apps/nextframe/clients'),
                        { name: this.newClient.name
                        , ancestorUri: this.newClient.ancestorUri
                        })
                .then(response => {
                    this.clients.push(response.data)

                    this.newClient.name = ''
                    this.newClient.ancestorUri = ''
                }).catch(reason => {
                    this.newClient.error = true
                    this.newClient.errorMsg = reason.response.data.message
                })
        }
    },
}
</script>
<style scoped>
    table {
        max-width: 800px;
    }
</style>
