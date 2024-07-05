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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_26_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRWGdrMUJzMlBwNEhadGQ4YUlOU2pRK1lhMkJldUc5Z2FKT1UvditxZndvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1TUxBaFFtS1JleUotRkNpY05ROFB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjNGEyNDQ2LTg0YzgtNGNiYi05YzIwLTBiNWNlZmJlNWEzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAxNixcbiAgICAgIDE0MyxcbiAgICAgIDYxLFxuICAgICAgMTI1LFxuICAgICAgMjE4LFxuICAgICAgMTYzLFxuICAgICAgMjU1LFxuICAgICAgNDUsXG4gICAgICAyNDksXG4gICAgICAxNTksXG4gICAgICAxNTIsXG4gICAgICAyMyxcbiAgICAgIDIyMCxcbiAgICAgIDIyNCxcbiAgICAgIDgsXG4gICAgICAxNTQsXG4gICAgICA4MyxcbiAgICAgIDIyLFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgNjQsXG4gICAgICAyMzYsXG4gICAgICAxLFxuICAgICAgNDYsXG4gICAgICAyNSxcbiAgICAgIDEwOCxcbiAgICAgIDIxMyxcbiAgICAgIDcsXG4gICAgICAxMzksXG4gICAgICAyNTAsXG4gICAgICAxNDQsXG4gICAgICAyNTEsXG4gICAgICAxMzQsXG4gICAgICAxNjMsXG4gICAgICAxNzEsXG4gICAgICAxMDMsXG4gICAgICAxMjksXG4gICAgICA0LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpQVjYzN0Q2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTM3ODkyMzU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+LdmR2ZLNouK4mSDwnZmPzaLNofCdmZ3YuSDwk4apQsOgVG3DgMORKvCThqog44CGzY4gICAgICDii4YgICDii4YgICDii4YgICDii4YgICDii4YgICDii4YgICDii4YgICDii4YgICDii4YgICAgICAg8JOGqTzwnZ+RflwiLFxuICAgIFwibGlkXCI6IFwiMTA1NDExODUyMTM2NjQxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlcmtkTUdFT0N3bjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS2pRUnhRZGRWbWJ2enExWmdWUGovT0dISUJWZlZEZkUwd2F3TkFYSUtsTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTThoUU1oSXRLazZuNm4ycGY5M3RtRkkyelo3SjVoaG5xbFhwVjRHMjg3Vi9xeHVvR0lWME1sbXVsYUlDbC94eGhtY2lWU3NkblozNHVrNHhrSEVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5T2JqNm1TQS9PaTI0M28rZ2dmWVkxNnhuSC9KVmd3WmtmaXlvazJYcmVqZVJCSis2T1ZjUXhZY2loVWMyY25DY3A4VmM2YTNnenRqT01GT0NlVVhBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTM3ODkyMzU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNzg3ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBMDNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEwMy5qc29uIjogIntcImtleURhdGFcIjpcIlIvSzY3RXFKQWRIVjlybUJDUzRIeEdmZk9ZZkxSaUV0ZXBVdXJKQnRPVHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4NDk2MDQzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
