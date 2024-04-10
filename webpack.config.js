// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later
const path = require('path');
const webpackConfig = require('@nextcloud/webpack-vue-config')

webpackConfig.entry['iframe-resizer'] = path.join(__dirname, 'src', 'iframe-resizer.js');

module.exports = webpackConfig
