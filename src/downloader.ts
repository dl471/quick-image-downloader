// Parts of this file are taken from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download

function onStartedDownload(id : number) {
    console.log(`Started downloading: ${id}`);
  }
  
function onFailed(error : string) {
    console.log(`Download failed: ${error}`);
  }
  
function download(directory : string, filename : string, url : string) {
    var downloader = browser.downloads.download({
        url : url,
        filename : `${directory}/${filename}`,
        conflictAction : 'uniquify'
      });
}