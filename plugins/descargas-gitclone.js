import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππΌπΎπ πΏπ ππππππ½\nπππππππ\n*${usedPrefix + command} https://github.com/GataNina-Li/GataBot-MD*\n\nπππππ πππ ππππππ½ ππππ\nπππΌππππ\n*${usedPrefix + command} https://github.com/GataNina-Li/GataBotV2*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}ππππΌπΎπ ππ ππΌπππΏπ. πΏππ½π πΏπ πππ ππ ππππΌπΎπ πΏπ ππππππ½\n\nππππΌπππΏ ππππ. ππππ π½π πΌ ππππππ½ ππππ`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${lenguajeGB['smsAvisoEG']()}πππππΌππΏπ πΌππΎππππ, ππ πππππππ π\nππ ππ ππ πππππΌ ππ πΌππΎππππ ππ πΏππ½ππΏπ πΌ πππ ππ πππππππππππ ππ ππππΌπΏπ.\n\nππππΏπππ ππππ, ππππ πΌ ππππππ π\nππ πππ ππππ πΏπππ πππ πΌπππππ, ππ ππ π½ππΎπΌπππ πππ ππππππππππ ππ πππΌππ.`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)  
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 2
export default handler
