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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_27_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR6SjFwNnRsbDArZW5oSVRsK0ZCd3RZUU5mTThVMTRPUlhJb0pqRXNPSjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTkzNzg5MjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NjU0QjhGNzkwNjkyOTNCRjQwMDkxQzlDMjEwODAxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyOTEyMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTM3ODkyMzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREODlBRUYxMjNFRkMwMTIzQzU1MDcxQkE4NTg0OUQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI5MTIyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJva3dZdmVhU1JYMlNrRUJTd0d5NVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyMDJjNGE0LTJmMDEtNGIxMS04OTYzLWIxNGFiYjJlMzQ1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxMzQsXG4gICAgICAxNDUsXG4gICAgICAxMDEsXG4gICAgICAxMixcbiAgICAgIDI0NixcbiAgICAgIDE3OCxcbiAgICAgIDcwLFxuICAgICAgMTQ0LFxuICAgICAgMjE3LFxuICAgICAgOTIsXG4gICAgICAxMTQsXG4gICAgICAyNDUsXG4gICAgICA3NSxcbiAgICAgIDIyMSxcbiAgICAgIDg2LFxuICAgICAgMTcxLFxuICAgICAgNDEsXG4gICAgICAyMTYsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICA4MyxcbiAgICAgIDE4MyxcbiAgICAgIDEzMSxcbiAgICAgIDIyNixcbiAgICAgIDg4LFxuICAgICAgMTIzLFxuICAgICAgMTg3LFxuICAgICAgMTU2LFxuICAgICAgNDMsXG4gICAgICAxOTMsXG4gICAgICAxNjksXG4gICAgICAxNDgsXG4gICAgICAyMDYsXG4gICAgICAxMzEsXG4gICAgICA2MixcbiAgICAgIDkwLFxuICAgICAgMTc2LFxuICAgICAgMTA0LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpKNEpMMzdXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTM3ODkyMzU6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmPzaLNofCdmZ3YuSDwk4apQsOgVG3DgMORKvCThqog44CGzY4uU8Ogw6Biw64uY29tICAg4ouGICAg4ouGICAg4ouGICAg4ouGICAg4ouGICAg4ouGICAg4ouGICAg4ouGICAg4ouGICDwk4apPPCdn5F+XCIsXG4gICAgXCJsaWRcIjogXCIxMDU0MTE4NTIxMzY2NDE6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmIxODd3QkVOR2o0N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWdXllRHFTUGF4ek85S0xrZ0EveGV5NFNnVkVqaDR3ZkN6RmlPQzZLV0NvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZQN3ZtNU5oQ28rU2g1R3dvdjVnZzJGRFp1SHVraGt4UEZhaVlZNEp0eGdBUjU1NW1MY1VVb01JMFdFUlNWZ2NhdWNGclRIc0RWaWhTeTY0VldPN0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNpVThqMWs1N25MMENUcEp6eEJPZm5XUkx0eEVNbWFldlRUNkVheUhZbjBVVTZRWGpwcUY4bUl3aUEyVXBick5ONnlwdzJsNGlJUEZvNEJkZmF5ZGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5Mzc4OTIzNToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjkxMjIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSE1HXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRWHpuOXprQXp1OUZIUmtZNTExTHRJQUVPdjBzMm1OVzNsUFNaMXVyMHRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5NjE2Mzc5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjkxMjIzMzczXCJ9Igp9"  // PUT your SESSION_ID 


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
