module.exports = async(x, msg, store) => {
  const type = Object.keys(msg.message)[0]
  const body = type === "conversation" ? msg.message.conversation : type === "extendedTextMessage" ? msg.message.extendedTextMessage.text : type === "imageMessage" ? msg.message.imageMessage.caption : type === "videoMessage" ? msg.message.videoMessage.caption : ''
  const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
  const isCmd = body.startsWith(prefix)
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const from = msg.key.remoteJid
  
if (isCmd) {
  console.log(require("chalk").black(require("chalk").bgGreen(`Command ${prefix+command} `)), require("chalk").black(require("chalk").bgWhite(`Dari ${msg.pushName}`)))
}

const reply = (teks) => {
  x.sendMessage(from, { text: teks }, { quoted: msg })
}

switch (command) {
case "menu":
       case "help":
       await loading()
       var mnn = fs.readFileSync('./baseikal/video/menupt2.mp4')
       haikal.sendMessage(from, { video: mnn, caption: `

*ʜᴀʟʟᴏ ᴋᴀᴋ ${pushname}👋.* 
sᴇʟᴀᴍᴀᴛ ${salam}😄
ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *ʀʏᴏ ʏᴀᴍᴀᴅᴀ*

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇʙᴀɢᴀɪ *ᴇᴅᴜᴋᴀsɪ ᴘᴇʟᴀᴊᴀʀᴀɴ*, *ᴜɴᴅᴜʜᴀɴ ᴍᴇᴅɪᴀ*, *ɢᴀᴍᴇ*, *ᴘᴇɴᴊᴀɢᴀ ɢʀᴜᴘ*, *ᴅᴀɴ ʟᴀɪɴɴʏᴀ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ᴋᴀᴍᴜ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪ ʜᴀʀɪ-ʜᴀʀɪ:>

 *✎ ᴏᴡɴᴇʀ : ᴏᴋᴛᴀ*
 
ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

┌ ◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ: *.ᴛᴀᴀʟʟ*
└ ◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sɪᴍᴘᴇʟ ᴍᴇɴᴜ: *sɪᴍᴘᴇʟ*

copyright *©TaaOfc* and all rights reserved`, gifPlayback: true }, { quoted: m })
break
//=================================================
case 'tiktokvideo':{
if (!isCreator) return m.reply('*khusus Premium*')
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await loading ()
require('./lib/tiktok').Tiktok(q).then( data => {
haikal.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================      
}
}
