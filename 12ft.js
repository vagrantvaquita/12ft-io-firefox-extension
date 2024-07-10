function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }

function handleInstalled(details) {
    browser.contextMenus.create(
        {
            id: "12ft",
            title: "Open on 12ft.io",
            contexts: ["link"],
        }
        );

    browser.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === "12ft") {
            let creating = browser.tabs.create({
            url: "https://12ft.io/" + info.linkUrl
            });
            creating.then(onCreated, onError);
        }
    });        
}
  

browser.runtime.onInstalled.addListener(handleInstalled)