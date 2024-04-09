<template>
    <!--
    SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
    SPDX-License-Identifier: AGPL-3.0-or-later
    -->
	<div id="content" class="app-nextframe">
	</div>
</template>

<script>
import ActionButton from '@nextcloud/vue/dist/Components/ActionButton'
import AppContent from '@nextcloud/vue/dist/Components/AppContent'
import AppNavigation from '@nextcloud/vue/dist/Components/AppNavigation'
import AppNavigationItem from '@nextcloud/vue/dist/Components/AppNavigationItem'
import AppNavigationNew from '@nextcloud/vue/dist/Components/AppNavigationNew'

import '@nextcloud/dialogs/styles/toast.scss'
import { generateUrl } from '@nextcloud/router'
import { showError, showSuccess } from '@nextcloud/dialogs'
import axios from '@nextcloud/axios'

export default {
	name: 'App',
	computed: {
	},
	async mounted() {
		try {
			const response = await axios.get(generateUrl('/apps/nextframe'))
		} catch (e) {
			console.error(e)
			showError(t('nextframe', 'error'))
		}
		this.loading = false
	},

	methods: {
	},
}
</script>
<style>
    html, body {
        background: none !important;
    }

    #unified-search, footer {
        display: none !important;
    }

	#app-content > div {
		width: 100%;
		height: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	input[type='text'] {
		width: 100%;
	}

	textarea {
		flex-grow: 1;
		width: 100%;
	}
</style>
