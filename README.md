<!--
SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
SPDX-License-Identifier: CC0-1.0
-->

# NextFrame

> “External Sites' evil twin” -- me, probably

NextFrame is a simple app based around the idea that actually, the Nextcloud topbar _is_ pretty cool after all.

When installed, this app will create a new settings entry under `/settings/admin/additional` where you can generate a new "view token", which will be bound to a specific list of ancestors authorized by CSP.

You can then embed the Nextcloud top bar onto another website, preferably on the same domain to guarantee shared login cookies.

Here's an example of a recommended `iframe` tag making full use of Nextframe's features (requires [`iframeResizer.min.js`](https://raw.githubusercontent.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js)):

```html
<script src="/path/to/iframeResizer.min.js"></script>

<iframe src="https://nextcloud/apps/nextframe/disp/TOKEN" id="nextframe" style="position: absolute; border: none; width: 100%; height: 60px; overflow: hidden;" scrolling="no"></iframe>

<script>iFrameResize({autoSize: false}, "#nextframe")</script>
```

## Features

Nextframe is explicitly compatible with [iFrame Resizer](davidjbradshaw.github.io/iframe-resizer/) and [Custom Menu](https://apps.nextcloud.com/apps/side_menu).

When a popover or Custom Menu is opened and iFrame Resizer is loaded, the `iframe` will grow to the size of the browser's viewport, allowing the entire UI to show properly. It shrinks back to its original height when the popover is closed.
