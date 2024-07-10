createRootMenuItems();

browser.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId === "12ft") {
        browser.tabs.create({
            url: "https://12ft.io/" + info.linkUrl
        });
    }
});

browser.contextMenus.onShown.addListener(async (info) => {
    if (info.linkUrl.match(/12ft.io/g)) {
        let updating = browser.contextMenus.update("12ft", {enabled: false});
        updating.then(onUpdated, onError);
    } else {
        let updating = browser.contextMenus.update("12ft", {enabled: true});
        updating.then(onUpdated, onError);
    }
    browser.contextMenus.refresh();
});

function createRootMenuItems() {
    browser.contextMenus.create(
        {
            id: "12ft",
            title: "Open on 12ft.io",
            contexts: ["link"],
        }
    );
}

function onUpdated() {
    console.log("item updated successfully");
}
  
  function onError() {
    console.log("error updating item:", browser.runtime.lastError);
}
