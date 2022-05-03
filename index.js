const { Telegraf } = require('telegraf')
const fs = require('fs')
require('dotenv')



const token = process.env.BOT_TOKEN;
const bot = new Telegraf(process.env.BOT_TOKEN);



//welcome us every time we start the bot.
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})


//method that displays the inline keyboard buttons 

bot.hears('animals', ctx => {
    console.log(ctx.from)
    let animalMessage = `great, here are pictures of animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "bitcoin",
                        callback_data: 'bitcoin'
                    },
                    {
                        text: "ethereum",
                        callback_data: 'ethereum'
                    }
                ],

            ]
        }
    })
})

//method that returns image of a dog

bot.action('bitcoin', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "https://images.app.goo.gl/VbMLeU4zAhpfws5J9"
    })

})

//method that returns image of a cat 

bot.action('ethereum', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "https://images.app.goo.gl/W9vi8bgxMvchTUZNA"
    })

})
