function handleInstalled(details) {
    console.log(details.reason);
    browser.contextMenus.create(
        {
          id: "12ft",
          title: "Open on 12ft.io",
          contexts: ["all"],
        }
      );
  }
  

browser.runtime.onInstalled.addListener(handleInstalled)
