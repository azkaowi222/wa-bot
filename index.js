const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const answer = require("./testing");

const client = new Client();

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message", async (message) => {
  console.log(message.body);
  answer(message.body)
    .then((answer) => {
      message.reply(answer);
    })
    .catch((error) => {
      console.error(error);
    });
});

client.initialize();
