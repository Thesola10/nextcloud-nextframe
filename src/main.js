/**
 * SPDX-FileCopyrightText: 2018 John Molakvoæ <skjnldsv@protonmail.com>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { generateFilePath } from '@nextcloud/router'

import Vue from 'vue'
import AdminSettings from './AdminSettings'
import { loadState } from '@nextcloud/initial-state'

Vue.prototype.t = t
Vue.prototype.OC = OC

// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')

const clients = loadState('nextframe', 'clients')

const View = Vue.extend(AdminSettings);
const nextframe = new View({
    propsData: {
        clients
    }
})

nextframe.$mount('#nextframe')
