// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

require('iframe-resizer').contentWindow

if ('parentIFrame' in window) {

if (! 'getFrameInfo' in window.parentIFrame) {
    let style = "font-size: 1.5em;"
    console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page!", style)
}

/*
 * Grows frame to cover parent document
 */
function growFrame() {
    window.parentIFrame.getPageInfo(info => {
        window.parentIFrame.size(info.documentHeight)
    })
}

/*
 * Shrinks frame back to reasonable size
 */
function shrinkFrame() {
    window.parentIFrame.size(80);
}

const popupsObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                growFrame();
            } else {
                shrinkFrame();
            }
        })
    })

document.getElementsByClassName("header-menu__wrapper")
        .forEach(el => {
            console.log("Registering %o for size change", el);
            popupsObserver.observe(el);
        })

// Bonus! Support for Custom Menu
let sidemenu = document.getElementById("side-menu")
if (sidemenu !== null) {
    console.log("Found Custom Menu!")
    popupsObserver.observe(sidemenu)
}


} else {
    console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page in an iframe!")
}
