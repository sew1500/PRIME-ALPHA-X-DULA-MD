const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nCBS2YBI#QNquJpLlFXfPc_lfSxcOU_LRDW6Z0VPmy6gXKQBavLQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dula9x/PRIME-ALPHA-X-DULA-MD/blob/main/images/PRIME%20ALPHA%20X%20DULA%20MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*I'am Alive Now!! PRIME-ALPHA-X-DULA-MD 🤭💗 ආහ් පැටියෝ කොහොමද ?🌝*",
BOT_OWNER: '94752978237/94770349867', 



};
