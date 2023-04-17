import fs from "fs";

let handler = async (m, {usedPrefix, command, text}) => {
  let ar = Object.keys(comandos);
  let ar1 = ar.map((v) => v.replace(".js", ""));
  if (!text) throw `*[❕] INGRESA EL TEXTO DEL PLUGIN\nejemplo:\n${usedPrefix + command} menu`;
  if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map((v) => " " + v).join`\n`}`);
  m.reply(fs.readFileSync("./comandos/" + text + ".js", "utf-8"));
};
handler.help = ["getplugin"].map((v) => v + " <teks>");
handler.tags = ["host"];
handler.command = /^(getplugin|gp)$/i;

handler.rowner = true;

export default handler;

//By https://github.com/DIEGO-OFC
