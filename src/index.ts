<<<<<<< HEAD
import TelegramBot  from 'node-telegram-bot-api';
import express  from 'express';

const app = express()

const token = '{{your-telegram-bot-token-here}}';

const bot = new TelegramBot(token, {polling: true});

app.use(express.static(__dirname+'public'))

app.get('/',(req,res)=>{
  res.writeHead(302, {
    'Location': 'index.html'
  });
  res.end();
})
app.get('/get',(req,res)=>{
  res.send('hello woeld')
  let s:WebSocket = new WebSocket('ws:/localhost',['http','https'])
  // res.assignSocket({})
})

app.listen(2300,()=>{
  console.log('listening',__dirname)
})

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
//   bot.sendInvoice(chatId,'title','description','payload=123','teken','start','UZS',[{amount:12,label:'label'},{amount:12,label:'label'}])
});


=======
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
>>>>>>> dbc0604dcd7639a207b00924c36cf7698af7b8d7
