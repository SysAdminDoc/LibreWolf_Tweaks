// ==UserScript==
// @name         Reddit Hide AutoModerator / Automod
// @namespace    https://github.com/xcloudx01
// @version      1
// @description  Hides stickied posts that were made by AutoModerator.
// @author       xcloudx01
// @match        *://*.reddit.com/r/*/comments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license MIT
// ==/UserScript==

// TODO: Auto-delete AutoModerator private messages (May need reddit API), (Don't need to know video converted successfully)

(function() {
    'use strict';
    var element_list = document.querySelectorAll('[class^="thing id"],[class*=" thing id"]')

    for (let i = 0; i < element_list.length; i++) {
        if (element_list[i].dataset.author == 'AutoModerator') {
            element_list[i].style.display = 'none'
        }
    }
})();