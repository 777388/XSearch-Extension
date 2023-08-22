chrome.contextMenus.create({
  id: "XSearch",
  title: "XSearch",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "XSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://twitter.com/search?q=${selectedText}&src=typed_query`
    chrome.tabs.create({ url: archiveUrl });
  }
});
