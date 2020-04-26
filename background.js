console.log("Sql Sniper in position")
chrome.browserAction.onClicked.addListener(IconClicked);

function IconClicked(tab)
{
    let msg = {
        txt : "BANG! Awaiting next target"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}