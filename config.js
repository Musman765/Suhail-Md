const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_37_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldXZXpHcEd5YUdlU0FtM09Yd0d5RUJRYVRKdHZnK2tNOG9zeFE3OVh0TDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTkzNzg5MjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RThFMUVDQ0FERTZCNjU5MEI0RTI3OEUwRTQzRjRBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMzA2MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSW55TEhLeHhSRmU5Y2pMU2lvMDVOQVwiLFxuICBcInBob25lSWRcIjogXCJjMDI0MGI2MS00MWNmLTQ4ZjgtYjE1ZC0yYjE0YzE1OWU1ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTksXG4gICAgICAxNDUsXG4gICAgICAxNjUsXG4gICAgICAxMjcsXG4gICAgICAyMjgsXG4gICAgICAxNDYsXG4gICAgICA2NyxcbiAgICAgIDIwMyxcbiAgICAgIDEzMyxcbiAgICAgIDE2MixcbiAgICAgIDEzNCxcbiAgICAgIDUyLFxuICAgICAgMTU4LFxuICAgICAgMTg2LFxuICAgICAgMjA1LFxuICAgICAgOTAsXG4gICAgICA4OSxcbiAgICAgIDEyOSxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDM4LFxuICAgICAgMTE2LFxuICAgICAgMTQwLFxuICAgICAgMjM5LFxuICAgICAgMTY4LFxuICAgICAgMjExLFxuICAgICAgMjM5LFxuICAgICAgMTgyLFxuICAgICAgMTY2LFxuICAgICAgMTEsXG4gICAgICAzOSxcbiAgICAgIDksXG4gICAgICAxMDQsXG4gICAgICAzNixcbiAgICAgIDE3MyxcbiAgICAgIDIxNixcbiAgICAgIDg1LFxuICAgICAgOTAsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0VCMUROTUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5Mzc4OTIzNToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn4t2ZHZks2i4riZIPCdmY/Nos2h8J2Zndi5IPCThqlCw6BUbcOAw5Eq8JOGqiDjgIbNjiAgICAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgIOKLhiAgICAgICDwk4apPPCdn5F+XCIsXG4gICAgXCJsaWRcIjogXCIxMDU0MTE4NTIxMzY2NDE6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG1ya2RNR0VQSFNxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLalFSeFFkZFZtYnZ6cTFaZ1ZQai9PR0hJQlZmVkRmRTB3YXdOQVhJS2xNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxSQjdUV1B6cmpmWWtlbnliaFJucTBIbG03YjZKMS9SWXZUbHdheTJ2TzB1dk83cHdrRXhrVTY3bEtGTktMTzdJVGxCL0pnVHhTaDBndlZscTB3WkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVmWHY0d1krMFZNSGxvYWJSQ0doR0dINExsZ1hpaTNnQWM2MGtpYUh3TU10NFQ0all0S0dBSmp1Mit3U0hWdmZtYWpJYm1JSG9makVIOEd1Lzk2U0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5Mzc4OTIzNToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMzMDYxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUExQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTFDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2EwYjhWTE5WNEQ4Mmw2ZkhGMDVEWmx2cVJZam1tRnRQWjdoR3pvcWlIdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg0OTYwNDQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzMzA2MTY2ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Batman",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟbatman-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
