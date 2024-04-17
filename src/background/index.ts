import "webextension-polyfill";

// /**
//  * Extension reloading is necessary because the browser automatically caches the css.
//  * If you do not use the css of the content script, please delete it.
//  */
// reloadOnUpdate('pages/content/style.scss');

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
console.log("background loaded.");
