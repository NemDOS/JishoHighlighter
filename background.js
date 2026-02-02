browser.contextMenus.create({
  id: "search-word-on-jisho",
  title: "Search Word on Jisho",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-word-on-jisho" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const url = `https://jisho.org/search/${query}`;
    browser.tabs.create({ url });
  }
});