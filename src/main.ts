const CONTEXT_MENU_ID = "image_downloader"
const CONTEXT_MENU_TEXT = "Quick Save Image"

const DISCORD_SAVE_FOLDER = "Discord"

browser.menus.create({
    id: CONTEXT_MENU_ID,
    title: CONTEXT_MENU_TEXT,
  });

function tabLoadFailed() {
    console.error("Failed to get current tab")
}

browser.menus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == CONTEXT_MENU_ID) {
        browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
            let tab = tabs[0];
            let currentURL = tab.url;
            if (currentURL == undefined) {
                console.log("Tab URL was undefined");
                return;
            }
            currentURL = <string>currentURL;
            if (isDiscordLink(currentURL)) {
                let linkParts : DiscordLinkParts = processDiscordLink(currentURL);
                let savePath : string = `${DISCORD_SAVE_FOLDER}/${linkParts.channelID}`;
                download(savePath, linkParts.fileName, currentURL);
            }
            else {
                console.log(`Unsupported tab: ${currentURL}`);
            }
        }, tabLoadFailed)
    }
 });

