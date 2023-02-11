import TelegramBot from 'node-telegram-bot-api';
import express from 'express';
import { config } from 'dotenv'
// import EventEmitter from 'events';
import { home_keyboard } from './keyboards';
// const controller = new EventEmitter()
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/robots.html")
})
config()

console.log('-----------------------------------')
console.log('| Bot has been listening messages1 |')
console.log('-----------------------------------')
const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true })

bot.onText(/\/report/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Qanday turdagi so\'rov kerak', {
        reply_markup: home_keyboard
    });
});

bot.on('message', (msg) => {

});

bot.on('callback_query', query => {

})

app.listen(2300,()=>{
    console.log(2300+" portni eshitilmoqda")
})