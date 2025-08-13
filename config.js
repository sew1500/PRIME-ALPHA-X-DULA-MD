const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your sesson id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dula9x/PRIME-ALPHA-X-DULA-MD/blob/main/images/PRIME%20ALPHA%20X%20DULA%20MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "* 👋 Hellow I'am Alive Now!! DARK NOVA XMD V1.0.0 simple wa user bot",
BOT_OWNER: '94752978237/94770349867', 



};
