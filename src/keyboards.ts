import TelegramBot from "node-telegram-bot-api"

const back_key = { text: "<< Ortga", callback_data: 'back' }

export const home_keyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [
        [
            { text: "birinchi",   callback_data: '1' },
            { text: "ikkinchi",   callback_data: '2' },
            { text: "uchinchi",   callback_data: '3' }
        ]
    ]
}
export const merchant_keyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [
        [
            { text: "Hammasi",    callback_data: 'all' },
            { text: "Artel",      callback_data: 'artel' },
            { text: "Mediyapark", callback_data: 'mediya' }
        ],[back_key]
    ]
}
export const date_keyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [
        [
            { text: "Bugungi",    callback_data: 'today' },
            { text: "Boshqa",     callback_data: 'costume' },
        ],[back_key]
    ]
}
export enum States {REPORT,CHOOSE_MERCHANT,GET_DATE}