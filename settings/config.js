import { Colors } from "discord.js";

const settings = {
  TOKEN: process.env.TOKEN || "Bot_Token",
  PREFIX: process.env.PREFIX || ".",
  Owners: ["1111521016796168192", "OwnersId"],
  Slash: {
    Global: false,
    GuildID: process.env.GuildID || "1036288434643406848",
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },
  emoji: {
    success: "✅",
    error: "❌",
  },
};

export default settings;
