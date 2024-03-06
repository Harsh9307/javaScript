const {Telegraf} = require('telegraf')
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN)

const binarySearchString = `
const binarySearch = function search(arr,x){
    let lo=0,hi = arr.length-1;
    while(lo<=hi){
        let mid = lo+Math.floor((hi-lo) / 2);
        if(arr[mid]==x) return mid;
        else if(arr[mid]<x){
            lo =mid+1;
        }
        else{
            hi = mid-1;
        }
    }
    return undefined;
`

try{
    bot.start((ctx)=> ctx.reply('Welcome to Harsh\'s bot '));
    bot.command('binarySearch', (ctx)=> ctx.reply(binarySearchString))  ///binarySearch

    bot.on('sticker',(ctx)=>ctx.reply('😡'))

    bot.launch();
    bot.command('quit', async (ctx) => {
        // Explicit usage
        await ctx.telegram.leaveChat(ctx.message.chat.id)
      
        // Using context shortcut
        await ctx.leaveChat()
      })
    bot.on('text',(ctx)=> ctx.reply('I dont understand humans'))
}
catch{
    console.log("Unexpected Command")
}