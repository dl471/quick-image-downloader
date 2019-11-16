// Quick sanity check for Discord links, ensuring there is a server number, channel number and filename without forward slash
const DISCORD_LINK_REGEX = new RegExp(
    "https:\/\/cdn\.discordapp\.com\/attachments\/\\d+\/\\d+\/[^\/]+");

const EXPECTED_LINK_PIECES = 7;
const FILENAME_PIECE = EXPECTED_LINK_PIECES - 1;
const CHANNELID_PIECE = EXPECTED_LINK_PIECES - 3;

class DiscordLinkParts {
    constructor(link) {
        var pieces = link.split("/");
        var numPieces = pieces.length;
        if (numPieces == EXPECTED_LINK_PIECES) {
            console.log("Got expected number of link pieces");
        }
        else {
            console.log(`Expected ${EXPECTED_LINK_PIECES} pieces but got ${numPieces} pieces - download will probably fail`);
        }
        this.fileName = pieces[FILENAME_PIECE];
        this.channelID = pieces[CHANNELID_PIECE];
        console.log("Filename: " + this.fileName);
        console.log("Channel ID: " + this.channelID);
    }
}

function isValidDiscordAttachment(link) {
    return DISCORD_LINK_REGEX.test(link);
}

function isDiscordLink() {
    if (isValidDiscordAttachment(url)) {
        console.log("Detected Discord attachment in " + url)
        return true;
    }
    else {
        console.log("Could not detect Discord attachment in " + url);
        return false;
    }
}

function processDiscordLink(link) {
    var linkParts = new DiscordLinkParts(url);
}