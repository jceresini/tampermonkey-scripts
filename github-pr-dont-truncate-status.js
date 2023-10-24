// ==UserScript==
// @name         Don't truncate actions on PR summary tab
// @description  What I said above
// @version      1
// @match        https://github.com/*/pull/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle(".branch-action-item.open > .merge-status-list {max-height: none;} ");
    console.log("Removed max-height from actions on PR page");
})();
