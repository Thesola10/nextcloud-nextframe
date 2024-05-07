// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

require('iframe-resizer').contentWindow;

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
            } else {
                shrinkFrame();
            }
        })
    })

window.addEventListener("load", (ev) => {
    try {
      document.getElementsByClassName("header-menu__wrapper")
              .forEach(el => {
                  console.log("Registering %o for size change", el);
                  popupsObserver.observe(el);
              })
    } catch {}
    // Case for Nextcloud >=28
    try {
      document.getElementsByClassName("header-menu")
              .forEach(el => {
                  console.log("Registering %o for size change", el);
                  popupsObserver.observe(el);
              })
    } catch {}

    // Bonus! Support for Custom Menu
    try {
      let sidemenu = document.getElementById("side-menu")
      if (sidemenu !== null) {
          console.log("Found Custom Menu!")
          popupsObserver.observe(sidemenu)
      }
    } catch {}
})

if (!('parentIFrame' in window)) {
    let style = "font-size: 1.5em;"
    console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page!", style)
}
