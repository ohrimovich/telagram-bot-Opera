const TelegramApi = require('node-telegram-bot-api')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')

const token = '5097611643:AAFCp4h_REGImBb4-_DIfqYFAFFHGYkDYpU'

const bot = new TelegramApi(token, { polling: true })

const start = () => {


bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/info') {
       bot.sendMessage(chatId, 'ммммм.... хуета')
    }

/////////////// KEYBORDS//////////////////////////
    
    switch (text) {
        case kb.home.rooms:
            bot.sendMessage(chatId,'НОМЕРИ', {
                reply_markup: {keyboard: keyboard.rooms}
            }
            )
            break
        case kb.home.reception:
             bot.sendMessage(chatId,'РЕЦЕПЦІЯ', {
                reply_markup: {keyboard: keyboard.reception}
            }
            )
            break
        case kb.home.fnb:
             bot.sendMessage(chatId,'РЕСТОРАН ТА БАР', {
                reply_markup: {keyboard: keyboard.fnb}
            }
            )
            break
        case kb.home.events:
               bot.sendMessage(chatId,'ЗАХОДИ', {
                reply_markup: {keyboard: keyboard.events}
            }
            )
            
            break
        case kb.home.offers:
               bot.sendMessage(chatId,'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ', {
                reply_markup: {keyboard: keyboard.offers}
            }
            )
            break
        case kb.home.spa:
               bot.sendMessage(chatId,'СПА DIVA', {
                reply_markup: {keyboard: keyboard.spa}
            }
            )
            break
        case kb.back:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboard.home}
            })
            break

/////////////ROOMS REQUEST BUTTONS//////////////

        case kb.rooms.reserv:
            bot.sendMessage(chatId, `Відділ бронювання:\nТел: +380 44 581 75 38\nМоб (Viber/WhatsApp):\n+380 98 581 70 70\n e-mail: reservations@opera-hotel.com\nПосилання на бронювання:\nhttps://be.synxis.com/?&chain=24447&hotel=7038&SRC=30?Hotel=7038`)
            break
        case kb.rooms.superior:
            await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-f201oespah5bh5m19mw8o8ep2/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
           await bot.sendMessage(chatId,
                `Номер категорії покращений\nПлоща: 35 м2 в середньому\nВид з номера: на вулицю або на внутрішній двір\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/superior-rooms`
            )
            break
                case kb.rooms.standart:
            bot.sendMessage(chatId, 'НОМЕРИ КАТЕГОРІЇ СТАНДАРТ', {
                reply_markup: {keyboard: keyboard.standartRooms}
            })
            break
        case kb.rooms.stadartKing:
             await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8ux4gcanuj66tbdndcnlpycdc/standard.jpg?crop=114%2C0%2C1773%2C1330&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії стандарт KING\nПлоща: 22 м2 в середньому\nЛіжко: 180/200 см\nВид з номера: на внутрішній двір або атріум\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/standard-king-room`
            )
            break
        case kb.rooms.stadartTwin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-djz2uovueix2y4cnfzl35jiro/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії стандарт TWIN\nПлоща: 22 м2 в середньому\nВид з номера: на внутрішній двір або атріум\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/standard-twin-rooms`
            )
            break
        case kb.rooms.suites:
            bot.sendMessage(chatId, 'НОМЕРИ КАТЕГОРІЇ ЛЮКС', {
                reply_markup: {keyboard: keyboard.suites}
            })
            break

                case kb.rooms.suiteJp:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3ljwph71n0smvaszmcv09ruhy/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 63 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-japanese-suite`
            )
            break
                case kb.rooms.suiteEg:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-989ob542payjpxauwwyxj9olc/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-egyptian-suite`
            )
            break
            case kb.rooms.suiteKr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1tr804e9dw1xokf9mi6lbq4ig/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-russian-suite`
            )
            break
             case kb.rooms.suiteAm:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-7npr08837vexngcom2491kbwj/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-american-suite`
            )
            break
        case kb.rooms.suiteMr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-eaezld71ow42qu5kxsypoy36s/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 45 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/junior-moroccan-suite`
            )
            break
        case kb.rooms.suiteFr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-bafxs8a3skk7zmj91j2ekhsvv/standard.jpg?crop=113%2C0%2C1775%2C1331&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 45 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/junior-french-suite`
            )
            break
        case kb.rooms.backToRooms:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboard.rooms}
            })
            break

/////////////FnB REQUEST BUTTONS//////////////

        case kb.FnB.teatro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8j0hkb78mse5xfle471tygndf/standard.jpg?crop=56%2C0%2C868%2C651&width=1140')
            await bot.sendMessage(chatId,
                `Ресторан Teatro\nПрацюємо кожного дня з 07:00 до 23:00\nЩоб забронювати столик, телефонуйте: +38 044 581 74 34 (вн. 1434)\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/restaurants-bars/teatro-restaurant`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/635/769/teatro-nov-2021.pdf')
            break
        case kb.FnB.rs:
            await bot.sendMessage(chatId,
                `Обслуговування в номерах\nПрацюємо кожного дня з 07:00 до 01:00\nЩоб зробити замовлення телефонуйте: +38 044 581 74 35 (вн. 1435)`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/635/769/teatro-nov-2021.pdf')
            break
        case kb.FnB.bar:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8iuugxuc1y7iq2cwidxank44i/standard.jpg?crop=55%2C0%2C871%2C653&width=1140')
            await bot.sendMessage(chatId,
                `Лобі Лаунж \nПрацюємо кожного дня з 07:00 до 00:00\nЩоб забронювати столик, телефонуйте: +38 044 581 74 44 (вн. 1444)\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/restaurants-bars/lobby-lounge`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/638/188/llb-menu-nov-2021-ukr.pdf')
            break

/////////////SPA REQUEST BUTTONS//////////////
        
                case kb.spa.price:
            bot.sendMessage(chatId, `Посилання на прайс лист:\nhttps://www.spasalon.kiev.ua/price-list/`)
            break
                case kb.spa.call:
            bot.sendMessage(chatId, `Контакти:\nТел: +380 66 000 11 34\nemail: spadivaopera@gmail.com`)
            break
                case kb.spa.site:
            bot.sendMessage(chatId, `Посилання на сайт:\nhttps://www.spasalon.kiev.ua/`)
            break

/////////////Events REQUEST BUTTONS//////////////
    
        case kb.events.symph:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1k9hj2nuomqtd9lxsrn8r0z5d/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Зал Симфонія може прийняти до 250 гостей і також може бути поділеним розсувними стінами на окремі зони. Декорований у світлих кольорах, обладнаний вбудованими проекторами, екранами, системою управління світлом і доступом до безкоштовного Wi-Fi.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/rfp`
            )
            break
        case kb.events.maestro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-a9nah6d9aqkpsvj9mn1ne2zo5/standard.jpg?crop=55%2C0%2C871%2C653&width=1140')
            await bot.sendMessage(chatId, `Він вміщує до 200 людей та має окремий вхід з вулиці. Зал поділений на окремі зони, а саме просторий основний зал та дві менші кімнати, які роблять його зручною локацією для проведення тренінгів, де необхідні окремі кімнати для роботи в групах.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/rfp`
            )
            break
        case kb.events.bussiness:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3lfw4c6x7jtx3a7vf5mh3g2r1/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Бізнес Лаунж готелю є втіленням стилю і комфорту та підходить як для бізнес зустрічей, так і для неформальних корпоративних презентацій, коктейльних вечірок та приватних вечерь у самому серці Києва.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/rfp`
            )
            break
         
      /////////////Events OFFERS BUTTONS//////////////  

        case kb.offers.romantic:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-2d0jydew80yx5jt235eky1t9i/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Готель «Опера» пропонує Вам можливість насолодитися романтичним перебуванням в одному з наших номерів та апартаментів, що стане незабутнім подарунком близькій людині.\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/romantic-package`
            )
            break
        case kb.offers.wedding:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8z4bgc13yn94x1f8upfi3uegn/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Насолоджуйтесь спеціальною пропозицією для молодят в готелі «Опера». Комфортні та затишні номери, смачна європейська кухня та професійний персонал привнесуть родзинку у найщасливіший день у Вашому житті.\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/wedding-package`
            )
            break
        case kb.offers.group:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-63nd50nwmldv8e76a6pedv1b6/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Отримуйте особливі переваги, при бронюванні груп в готелі «Опера»\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/group-offer`
            )
            break
        case kb.offers.coravin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-cam95ebvjmszwbxs410bd8642/standard.jpg?crop=0%2C500%2C1333%2C1000&width=1140')
            await bot.sendMessage(chatId, `Ми раді запропонувати Вам унікальну можливість спробувати вінтажні та рідкісні вина в готелі Опера, заощадивши на покупці цілої пляшки і заплативши тільки за келих. Ми використовуємо спеціальну систему збереження смакових якостей напоїв від Coravin, і ви можете бути впевнені, що вино у вашому келиху буде ідеальним.\nМи будемо раді вітати вас в Лобі Лаунж Барі і ресторані Teatro, щоб представити нашу вийняткову винну карту, відзначену нагородою Wine Spectator.`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/638/187/wine-list-nov-21.pdf')
            break
         
    }
})
    
    bot.onText(/\/start/, msg => {
      const chatId = msg.chat.id;
        bot.sendMessage(chatId , `Вітаємо вас в телеграм боті Opera Hotel!\n Виберіть опцію, яка вас цікавить`, {
            reply_markup: {
                keyboard: keyboard.home
            }
       }
        )
    })
}

start();
