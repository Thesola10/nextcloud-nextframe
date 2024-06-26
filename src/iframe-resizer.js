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

/*
 * Hooks HTML elements to popup observer
 */
function hookObserver() {
    try {
      const els = document.getElementsByClassName("header-menu__wrapper");
      for (var i = 0; i < els.length; i++) {
        const el = els.item(i);
        console.log("Registering %o for size change", el);
        popupsObserver.observe(el);
      }
    } catch {}

    // Bonus! Support for Custom Menu
    try {
      let sidemenu = document.getElementById("side-menu")
      if (sidemenu !== null) {
          console.log("Found Custom Menu!")
          popupsObserver.observe(sidemenu)
      }
    } catch {}
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

window.addEventListener("load", () => {
    hookObserver();
    // Unfortunately I couldn't find a way to wait for everything to render,
    // so just try again later
    setTimeout(hookObserver, 6000);
})



if (!('parentIFrame' in window)) {
    let style = "font-size: 1.5em;"
    console.info("%cNextFrame supports iframeResizer! Get it from https://davidjbradshaw.github.io/iframe-resizer/ and try attaching it to this page!", style)
}
