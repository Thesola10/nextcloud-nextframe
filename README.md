<!--
SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
SPDX-License-Identifier: CC0-1.0
-->

# NextFrame

> “External Sites' evil twin” -- me, probably

NextFrame is a simple app based around the idea that actually, the Nextcloud topbar _is_ pretty cool after all.

When installed, this app will create a new settings entry under `/settings/admin/additional` where you can generate a new "view token", which will be bound to a specific list of ancestors authorized by CSP. You should also configure reverse proxy, for nginx instructions see the [Configuring nginx](./README.md#Configuring-nginx) section below.

You can then embed the Nextcloud top bar onto another website, preferably on the same domain to guarantee shared login cookies.

Here's an example of a recommended `iframe` tag making full use of Nextframe's features (requires [`iframeResizer.min.js`](https://github.com/davidjbradshaw/iframe-resizer/raw/dc27ef6028523950cfa422f403f94882634caba7/js/iframeResizer.min.js)):

```html
<script src="/path/to/iframeResizer.min.js"></script>

<iframe src="https://nextcloud/apps/nextframe/disp/TOKEN" id="nextframe" style="position: absolute; border: none; width: 100%; height: 60px; overflow: hidden;" scrolling="no"></iframe>

<script>iFrameResize({autoSize: false}, "#nextframe")</script>
```

## Configuring nginx
You should add following lines to your Nextcloud config:
```nginx
server {
  ...
  # Remove X-Frame-Options, as it's needed for embedding Nextcloud topbar on another domains.
  fastcgi_hide_header X-Frame-Options;
  ...
}
```

## Features

Nextframe is explicitly compatible with [iFrame Resizer](https://davidjbradshaw.github.io/iframe-resizer/) and [Custom Menu](https://apps.nextcloud.com/apps/side_menu).

When a popover or Custom Menu is opened and iFrame Resizer is loaded, the `iframe` will grow to the size of the browser's viewport, allowing the entire UI to show properly. It shrinks back to its original height when the popover is closed.
