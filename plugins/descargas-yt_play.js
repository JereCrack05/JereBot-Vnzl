/*import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ šš®šš®šš¼š-š š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}ššš¾ššš½š¼ šš šššš½šš š šššššš\nššššššš\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nššššš ššš šš¼šš šš ššššš\nššš¼šššš\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}šš šš šššæš ššš¾ššššš¼š šš š¼ššæšš/šššæšš. ššššššš š¾šš šššš šššš½šš š šššššš\n\nššš š¼ššæšš/šššæšš š¾ššššæ ššš š½š šššššæ. ššš š¼šššššš šš¼šš šš ššššš`
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*š© š  šŖ ā§āāā ${vs} āāāā§ š© š  šŖ*

ą¦ *TĆTULO | TITLE*
Ā» ${title}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ *DESCRIPCIĆN | DESCRIPTION*
Ā» ${description}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ *PUBLICADO | PUBLISHED*
Ā» ${publishedTime}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ *DURACION | DURATION*
Ā» ${durationH}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ *VISTAS| VIEWS*
Ā» ${viewH}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ *URL*
Ā» ${url}

*š© š  šŖ ā§āāā ${vs} āāāā§ š© š  šŖ*`, thumbnail, [['š  š š” šØ āļø', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' š” š§šš£š¢š¦ šš ššš¦ššš„ššš¦ ' + fin,
rows: [
{title: "š  š šØ š š š¢ (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "š  š šØ š š š¢ (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "š  š šØ š š š¢   š š¢ š", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢ (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢ (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢   š š¢ š", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' š ššØš¦š¤šØššš šš©šš”š­ššš ' + fin,
rows: [
{title: "š  š  š š¦   š„ š š¦ šØ š š§ š š š¢ š¦", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*ššššš¼ ššš šš¼ šš¼š¾šš š¾šš  ${text}*`,
  footer: global.wm,
  title: `${htki} *ā»ļø šæššš¾š¼ššš¼š* ${htka}`,
  buttonText: `š ššššššš š`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `ą¦ *TĆTULO | TITLE:* ${title}\ną¦ *PUBLICADO | PUBLISHED:* ${published}\ną¦ *VISTAS| VIEWS:* ${views}\ną¦ *URL:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'š  š  š š¦   š„ š š¦ šØ š š§ š š š¢ š¦'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*į“É“į“ ÉŖį“É“į“į“ į“į“į“ÉŖį“, į“É¢į“į“Źį“į“ į“É“ į“į“į“į“É“į“į“...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw 'ā°ā±āā± *šš¼šššĢ | ššššš* ā±āā±ā®\n\n ERROR, SERVIDOR CAIDO, INTENTA DEL NUEVO POR FAVOR'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.limit = 1
handler.level = 2
export default handler*/


/*==========CĆDIGO PRIVADO, SI LO QUIERES EDITAR USA EL DE ARRIBA========*/

function _0x3f00(){const _0x1f48d7=['sender','š \x20š\x20šØ\x20š\x20š\x20š¢\x20\x20\x20š\x20š¢\x20š','š»\x20š¦šš½š²šæ\x20šš®šš®šš¼š-š š','287QtGWbY','š \x20š©\x20š\x20š\x20š\x20š¢\x20\x20\x20š\x20š¢\x20š','pdocaudio\x20','BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=','4eVQNbU','0@s.whatsapp.net','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','random','sendMessage','š \x20š©\x20š\x20š\x20š\x20š¢','\x0aļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹\x0aą¦\x20*VISTAS|\x20VIEWS*\x0aĀ»\x20','chat','\x0a*š©\x20š \x20šŖ\x20ā§āāā\x20','āā\x20','split','133880gvfDmZ','*ššššš¼\x20ššš\x20šš¼\x20šš¼š¾šš\x20š¾šš\x20\x20','level','log','šš\x20šš\x20šššæš\x20ššš¾ššššš¼š\x20šš\x20š¼ššæšš/šššæšš.\x20ššššššš\x20š¾šš\x20šššš\x20šššš½šš\x20š\x20šššššš\x0a\x0aššš\x20š¼ššæšš/šššæšš\x20š¾ššššæ\x20ššš\x20š½š\x20šššššæ.\x20ššš\x20š¼šššššš\x20šš¼šš\x20šš\x20ššššš','sendButton','š \x20š\x20šØ\x20š\x20š\x20š¢\x20(Opcion\x201)','audio','1628427quWdzl','smsAvisoFG','*š©\x20š \x20šŖ\x20ā§āāā\x20','smsMensError2','9507Eckxpd','\x0aļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹\x0aą¦\x20*URL*\x0aĀ»\x20','dpdf','7668320HzifFK','š\x20Enviando\x20Audio...','getFile','\x20āā','\x0aļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹\x0aą¦\x20*PUBLICADO\x20|\x20PUBLISHED*\x0aĀ»\x20','ššš¾ššš½š¼\x20šš\x20šššš½šš\x20š\x20šššššš\x0aššššššš\x0a*','\x20š”\x20š§šš£š¢š¦\x20šš\x20ššš¦ššš„ššš¦\x20','https://wa.me/18059196237','length','š \x20š©\x20š\x20š\x20š\x20š¢\x20(Opcion\x202)','yta\x20','download','\x20Billie\x20Eilish\x20-\x20Bellyache*','\x20āāāā§\x20š©\x20š \x20šŖ*','11vZLmnW','ytsearch\x20','\x20š\x20ššØš¦š¤šØššš\x20šš©šš”š­ššš\x20','data','#reporte\x20','\x0aļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹\x0aą¦\x20*DESCRIPCIĆN\x20|\x20DESCRIPTION*\x0aĀ»\x20','š\x20ššššššš\x20š','command','ytv\x20','134HVyorP','catch','469134nttmRc','\x20Billie\x20Eilish\x20-\x20Bellyache*\x0a\x0aššššš\x20ššš\x20šš¼šš\x20šš\x20ššššš\x0aššš¼šššš\x0a*','play.2\x20','1962305YUXdJR','audio/mp4','play.1\x20','6738624SONpsf','limit'];_0x3f00=function(){return _0x1f48d7;};return _0x3f00();}const _0x4ece9e=_0x2a89;function _0x2a89(_0x7c2704,_0x1feb41){const _0x3f00e7=_0x3f00();return _0x2a89=function(_0x2a898f,_0x4c4345){_0x2a898f=_0x2a898f-0xd1;let _0x2b3f40=_0x3f00e7[_0x2a898f];return _0x2b3f40;},_0x2a89(_0x7c2704,_0x1feb41);}(function(_0x462fe9,_0x8e8d6b){const _0xa23b66=_0x2a89,_0x373bac=_0x462fe9();while(!![]){try{const _0xf219d4=-parseInt(_0xa23b66(0x101))/0x1*(-parseInt(_0xa23b66(0xd9))/0x2)+parseInt(_0xa23b66(0xfd))/0x3+-parseInt(_0xa23b66(0xea))/0x4*(-parseInt(_0xa23b66(0xde))/0x5)+-parseInt(_0xa23b66(0xdb))/0x6+-parseInt(_0xa23b66(0xe6))/0x7*(parseInt(_0xa23b66(0xf5))/0x8)+-parseInt(_0xa23b66(0xe1))/0x9+-parseInt(_0xa23b66(0x104))/0xa*(-parseInt(_0xa23b66(0x112))/0xb);if(_0xf219d4===_0x8e8d6b)break;else _0x373bac['push'](_0x373bac['shift']());}catch(_0x1be17a){_0x373bac['push'](_0x373bac['shift']());}}}(_0x3f00,0xc9a9b));import{youtubeSearch,youtubedl,youtubedlv2,youtubedlv3}from'@bochilteam/scraper';let handler=async(_0x2353c4,{conn:_0x5354c9,command:_0x2e1d95,text:_0x5bd64a,usedPrefix:_0x2d78cd})=>{const _0x25eeb8=_0x2a89;let _0x4b9479={'key':{'participants':_0x25eeb8(0xeb),'remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':_0x25eeb8(0xe9)+_0x2353c4[_0x25eeb8(0xe3)][_0x25eeb8(0xf4)]('@')[0x0]+':'+_0x2353c4[_0x25eeb8(0xe3)][_0x25eeb8(0xf4)]('@')[0x0]+_0x25eeb8(0xec)}},'participant':'0@s.whatsapp.net'};if(!_0x5bd64a)throw lenguajeGB['smsAvisoMG']()+_0x25eeb8(0x109)+(_0x2d78cd+_0x2e1d95)+_0x25eeb8(0xdc)+(_0x2d78cd+_0x2e1d95)+_0x25eeb8(0x110);try{let _0x125305=(await youtubeSearch(_0x5bd64a))['video'][0x0];if(!_0x125305)throw lenguajeGB[_0x25eeb8(0xfe)]()+_0x25eeb8(0xf9);let {title:_0x40d0d7,description:_0x586f93,thumbnail:_0x2f335a,videoId:_0x3e84e2,durationH:_0x495680,viewH:_0x1a6de2,publishedTime:_0x4cf216}=_0x125305;const _0x3c5f06='https://www.youtube.com/watch?v='+_0x3e84e2;await _0x5354c9[_0x25eeb8(0xfa)](_0x2353c4[_0x25eeb8(0xf1)],wm,_0x25eeb8(0xff)+vs+'\x20āāāā§\x20š©\x20š \x20šŖ*\x0aą¦\x20*TĆTULO\x20|\x20TITLE*\x0aĀ»\x20'+_0x40d0d7+_0x25eeb8(0xd5)+_0x586f93+_0x25eeb8(0x108)+_0x4cf216+'\x0aļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹\x0aą¦\x20*DURACION\x20|\x20DURATION*\x0aĀ»\x20'+_0x495680+_0x25eeb8(0xf0)+_0x1a6de2+_0x25eeb8(0x102)+_0x3c5f06+_0x25eeb8(0xf2)+vs+_0x25eeb8(0x111),await(await _0x5354c9[_0x25eeb8(0x106)](_0x2f335a))['data'],[_0x25eeb8(0xef),_0x2d78cd+_0x25eeb8(0xd8)+_0x3c5f06],![],{'quoted':_0x2353c4,'document':{'url':_0x25eeb8(0x10b)},'mimetype':global[_0x25eeb8(0x103)],'fileName':_0x25eeb8(0xe5),'fileLength':0x25e546dd9aaaa,'pageCount':0x29a,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':''+_0x3c5f06,'title':_0x25eeb8(0x105),'body':wm,'sourceUrl':md,'thumbnail':await(await _0x5354c9[_0x25eeb8(0x106)](_0x2f335a))['data']}}});const _0x30c26b=[{'title':comienzo+_0x25eeb8(0x10a)+fin,'rows':[{'title':_0x25eeb8(0xfb),'rowId':_0x2d78cd+_0x25eeb8(0x10e)+_0x3c5f06,'description':_0x40d0d7+'\x0a'},{'title':'š \x20š\x20šØ\x20š\x20š\x20š¢\x20(Opcion\x202)','rowId':_0x2d78cd+_0x25eeb8(0xe0)+_0x3c5f06,'description':_0x40d0d7+'\x0a'},{'title':_0x25eeb8(0xe4),'rowId':_0x2d78cd+_0x25eeb8(0xe8)+_0x3c5f06,'description':_0x40d0d7+'\x0a'},{'title':'š \x20š©\x20š\x20š\x20š\x20š¢\x20(Opcion\x201)','rowId':_0x2d78cd+_0x25eeb8(0xd8)+_0x3c5f06,'description':_0x40d0d7+'\x0a'},{'title':_0x25eeb8(0x10d),'rowId':_0x2d78cd+_0x25eeb8(0xdd)+_0x3c5f06,'description':_0x40d0d7+'\x0a'},{'title':_0x25eeb8(0xe7),'rowId':_0x2d78cd+'pdocvieo\x20'+_0x3c5f06,'description':_0x40d0d7+'\x0a'}]},{'title':comienzo+_0x25eeb8(0xd2)+fin,'rows':[{'title':'š \x20š \x20š\x20š¦\x20\x20\x20š„\x20š\x20š¦\x20šØ\x20š\x20š§\x20š\x20š\x20š¢\x20š¦','rowId':_0x2d78cd+_0x25eeb8(0xd1)+_0x5bd64a}]}],_0x13f80a={'text':_0x25eeb8(0xf6)+_0x5bd64a+'*','footer':global['wm'],'title':htki+'\x20*ā»ļø\x20šæššš¾š¼ššš¼š*\x20'+htka,'buttonText':_0x25eeb8(0xd6),'sections':_0x30c26b};await _0x5354c9[_0x25eeb8(0xee)](_0x2353c4[_0x25eeb8(0xf1)],_0x13f80a,{'quoted':_0x4b9479});const _0x3b00bf=await await youtubedlv2(_0x3c5f06)[_0x25eeb8(0xda)](async _0x30f847=>await youtubedl(_0x3c5f06))['catch'](async _0x1b2056=>await youtubedlv3(_0x3c5f06)),_0x337653=await _0x3b00bf[_0x25eeb8(0xfc)]['128kbps'][_0x25eeb8(0x10f)]();let _0xc3ce1b={'audio':{'url':_0x337653},'mimetype':_0x25eeb8(0xdf),'fileName':''+_0x40d0d7,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x3c5f06,'title':_0x40d0d7,'body':wm,'sourceUrl':_0x3c5f06,'thumbnail':await(await _0x5354c9[_0x25eeb8(0x106)](_0x2f335a))[_0x25eeb8(0xd3)]}}};return _0x5354c9['sendMessage'](_0x2353c4[_0x25eeb8(0xf1)],_0xc3ce1b,{'quoted':_0x2353c4});}catch(_0x20d543){await _0x5354c9[_0x25eeb8(0xfa)](_0x2353c4['chat'],'\x0a'+wm,lenguajeGB['smsMalError3']()+'#report\x20'+_0x2d78cd+_0x2e1d95,null,[[lenguajeGB['smsMensError1'](),_0x25eeb8(0xd4)+lenguajeGB[_0x25eeb8(0x100)]()+'\x20*'+(_0x2d78cd+_0x2e1d95)+'*']],_0x2353c4),console[_0x25eeb8(0xf8)](_0x25eeb8(0xf3)+lenguajeGB[_0x25eeb8(0x100)]()+'\x20'+(_0x2d78cd+_0x2e1d95)+_0x25eeb8(0x107)),console[_0x25eeb8(0xf8)](_0x20d543);}};handler[_0x4ece9e(0xd7)]=/^play$/i,handler[_0x4ece9e(0xe2)]=0x2,handler[_0x4ece9e(0xf7)]=0x3;export default handler;function pickRandom(_0x4d22d7){const _0x32b7f1=_0x4ece9e;return _0x4d22d7[Math['floor'](_0x4d22d7[_0x32b7f1(0x10c)]*Math[_0x32b7f1(0xed)]())];}
