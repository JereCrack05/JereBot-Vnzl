let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
β’ @${wm.split`@`[0]} β’
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `
πππ©ππ½π€π©-ππΏ ππ
*Wa.me/51993485767*

πππ©ππ½π€π©-ππΏ *2* ππ
*Wa.me/573028555763*

πππ©ππ½π€π©-ππΏ *3* ππ
*Wa.me/18134031777*

*---------------------*

*CENTER GATABOT*
*centergatabot@gmail.com*

ππΌππΌ πΏπππ - πΌπππππππΎππΌ
*${asistencia}*

*Sr. Pablo* - πΌπππππππΎππΌ
*Wa.me/51993042301*
`
  let teks = ' '
const sections = [
   {
	title: `PROPIETARIO/OWNER`,
	rows: [
	    {title: "π± β’ NOMBRE", rowId: ".owner nomor"},
	{title: "π β’ NUMERO", rowId: ".owner bio"},
	{title: "π β’ CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "πΈ β’ GRUPOS", rowId: ".grupos"},
	{title: "π β’ SCRIPT", rowId: ".sc"},
	]
    },{
	title: `βββββββΒ·β’ APOYA AL BOT βββββββΒ·β’`,
	rows: [
	    {title: "πΉ β’ DONAS", rowId: ".paypal"},
	{title: "π€ β’ INSTALARBOT", rowId: ".instalarbot"},
	{title: "π β’ PREMIUM", rowId: ".pasepremium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `β­ββββ¦ *OWNER β¦βββββ¬£
βα HOLA π ${name}
ββββββββββββββββββββββββ
β${wm}
β°ββββββ¦ *${vs}* β¦βββββ¬£`,
  buttonText: "HAGA CLICK AQUI",
  sections
}

  try {
    if (/(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, "Nombre del bot : GataBot-MD π", m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://www.instagram.com/gata_dios", "Instagram",null, [null, null], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`β?β° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i

export default handler
