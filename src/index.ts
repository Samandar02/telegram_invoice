import TelegramBot  from 'node-telegram-bot-api';
import express  from 'express';

const app = express()

const token = '5851802288:AAF-XIsQFD_h67l6B09kKVY9LqQXZ7TvoeM';

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


