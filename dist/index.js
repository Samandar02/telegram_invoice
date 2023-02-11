"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
// import EventEmitter from 'events';
const keyboards_1 = require("./keyboards");
// const controller = new EventEmitter()
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/robots.html");
});
(0, dotenv_1.config)();
console.log('-----------------------------------');
console.log('| Bot has been listening messages |');
console.log('-----------------------------------');
const bot = new node_telegram_bot_api_1.default(process.env.BOT_API_TOKEN, { polling: true });
bot.onText(/\/report/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Qanday turdagi so\'rov kerak', {
        reply_markup: keyboards_1.home_keyboard
    });
});
bot.on('message', (msg) => {
});
bot.on('callback_query', query => {
});
app.listen(2300, () => {
    console.log(2300 + " portni eshitilmoqda");
});
//# sourceMappingURL=index.js.map