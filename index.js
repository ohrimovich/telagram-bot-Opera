const TelegramApi = require('node-telegram-bot-api')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
const kbEn = require('./keyboard-buttonsEn.js')
const keyboardEn = require('./keyboardsEn')

const token = '5097611643:AAFCp4h_REGImBb4-_DIfqYFAFFHGYkDYpU'

const bot = new TelegramApi(token, { polling: true })

const start = () => {


bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/info') {
       bot.sendMessage(chatId, 'Opera Hotel Kyiv, Intern LLC')
    }

/////////////// KEYBORDS//////////////////////////
    
    switch (text) {
        case kbEn.lang.ukr:
            bot.sendMessage(chatId,'Українська', {
                reply_markup: {keyboard: keyboard.home}
            }
            )
            break
         case kbEn.lang.eng:
            bot.sendMessage(chatId,'English', {
                reply_markup: {keyboard: keyboardEn.home}
            }
            )
            break
        case kb.home.rooms:
            bot.sendMessage(chatId,'НОМЕРИ', {
                reply_markup: {keyboard: keyboard.rooms}
            }
            )
            break
                case kbEn.home.rooms:
            bot.sendMessage(chatId,'ROOMS', {
                reply_markup: {keyboard: keyboardEn.rooms}
            }
            )
            break
        case kb.home.reception:
             bot.sendMessage(chatId,'РЕЦЕПЦІЯ', {
                reply_markup: {keyboard: keyboard.reception}
            }
            )
            break
        
        case kbEn.home.reception:
             bot.sendMessage(chatId,'RECEPTION', {
                reply_markup: {keyboard: keyboardEn.reception}
            }
            )
            break
        
        case kb.home.fnb:
             bot.sendMessage(chatId,'ЇЖА ТА НАПОЇ', {
                reply_markup: {keyboard: keyboard.fnb}
            }
            )
            break
                case kbEn.home.fnb:
             bot.sendMessage(chatId,'EAT AND DRINKS', {
                reply_markup: {keyboard: keyboardEn.fnb}
            }
            )
            break
        
        case kb.home.events:
               bot.sendMessage(chatId,'ЗАХОДИ', {
                reply_markup: {keyboard: keyboard.events}
            }
            )
            break
        
         case kbEn.home.events:
               bot.sendMessage(chatId,'EVENTS', {
                reply_markup: {keyboard: keyboardEn.events}
            }
            )
            break
        
        case kb.home.offers:
               bot.sendMessage(chatId,'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ', {
                reply_markup: {keyboard: keyboard.offers}
            }
            )
            break
        
        case kbEn.home.offers:
               bot.sendMessage(chatId,'SPECIAL OFFERS', {
                reply_markup: {keyboard: keyboardEn.offers}
            }
            )
            break
        
        case kb.home.spa:
               bot.sendMessage(chatId,'СПА DIVA', {
                reply_markup: {keyboard: keyboard.spa}
            }
            )
            break
        
        case kbEn.home.spa:
               bot.sendMessage(chatId,'SPA DIVA', {
                reply_markup: {keyboard: keyboardEn.spa}
            }
            )
            break
        
        case kb.back:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        
        case kbEn.back:
            bot.sendMessage(chatId, 'BACK', {
                reply_markup: {keyboard: keyboardEn.home}
            })
            break

/////////////ROOMS REQUEST BUTTONS//////////////

        case kb.rooms.reserv:
            bot.sendMessage(chatId, `Відділ бронювання:\nТел: +380 44 581 75 38\nМоб (Viber/WhatsApp):\n+380 98 581 70 70\n e-mail: reservations@opera-hotel.com\nПосилання на бронювання:\nhttps://be.synxis.com/?&chain=24447&hotel=7038&SRC=30?Hotel=7038`)
            break
        
                case kbEn.rooms.reserv:
            bot.sendMessage(chatId, `Reservation department:\nTel: +380 44 581 75 38\nMob (Viber/WhatsApp):\n+380 98 581 70 70\n e-mail: reservations@opera-hotel.com\nLink to booking:\nhttps://be.synxis.com/?&chain=24447&hotel=7038&SRC=30?Hotel=7038`)
            break
        
        case kb.rooms.superior:
            await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-f201oespah5bh5m19mw8o8ep2/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
           await bot.sendMessage(chatId,
                `Номер категорії покращений\nПлоща: 35 м2 в середньому\nВид з номера: на вулицю або на внутрішній двір\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/superior-rooms`
            )
            break
        
        case kbEn.rooms.superior:
            await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-f201oespah5bh5m19mw8o8ep2/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
           await bot.sendMessage(chatId,
                `Superior Room\nSize: 35 m2 in average\nKingsize bed: 180/200 cm or converted bed 220/200 cm\nRoom view: courtyard view or street view\nMore information:\nhttps://www.opera-hotel.com/rooms/superior-room`
            )
            break
        
                case kb.rooms.standart:
            bot.sendMessage(chatId, 'НОМЕРИ КАТЕГОРІЇ СТАНДАРТ', {
                reply_markup: {keyboard: keyboard.standartRooms}
            })
            break
        
                        case kbEn.rooms.standart:
            bot.sendMessage(chatId, 'STANDART ROOMS', {
                reply_markup: {keyboard: keyboardEn.standartRooms}
            })
            break
        
        case kb.rooms.stadartKing:
             await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8ux4gcanuj66tbdndcnlpycdc/standard.jpg?crop=114%2C0%2C1773%2C1330&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії стандарт KING\nПлоща: 22 м2 в середньому\nЛіжко: 180/200 см\nВид з номера: на внутрішній двір або атріум\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/standard-king-room`
            )
            break
        
         case kbEn.rooms.stadartKing:
             await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8ux4gcanuj66tbdndcnlpycdc/standard.jpg?crop=114%2C0%2C1773%2C1330&width=1140')
            await bot.sendMessage(chatId,
                `STANDART KING ROOM\nSize: 22 m2 in average\nKingsize bed: 180/200 cm\nRoom view: courtyard view or atrium view\nMore information:\nhttps://www.opera-hotel.com/rooms/standard-king-room`
            )
            break
        case kb.rooms.stadartTwin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-djz2uovueix2y4cnfzl35jiro/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії стандарт TWIN\nПлоща: 22 м2 в середньому\nВид з номера: на внутрішній двір або атріум\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/standard-twin-rooms`
            )
            
        case kbEn.rooms.stadartTwin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-djz2uovueix2y4cnfzl35jiro/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `STANDART TWIN ROOM\nSize: 22 m2 in average\nTwin room equipped with either twin-sized converted bed or two separate beds that are 100 cm wide.\nRoom view: courtyard view, street view or atrium view\nMore information:\nhttps://www.opera-hotel.com/rooms/standard-twin-room`
            )
            break
        case kb.rooms.suites:
            bot.sendMessage(chatId, 'НОМЕРИ КАТЕГОРІЇ ЛЮКС', {
                reply_markup: {keyboard: keyboard.suites}
            })
            break
        
        case kbEn.rooms.suites:
            bot.sendMessage(chatId, 'SUITES', {
                reply_markup: {keyboard: keyboardEn.suites}
            })
            break

        case kb.rooms.suiteJp:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3ljwph71n0smvaszmcv09ruhy/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 63 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-japanese-suite`
            )
            break
        
        case kbEn.rooms.suiteJp:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3ljwph71n0smvaszmcv09ruhy/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `EXECUTIVE JAPANESE SUITE\nSize: 63 m2 in average\nKing size bed: 180/200 cm\nRoom view: street view\nMore information:\nhttps://www.opera-hotel.com/rooms/executive-japanese-suite`
            )
            break
        
        case kb.rooms.suiteEg:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-989ob542payjpxauwwyxj9olc/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-egyptian-suite`
            )
            break
        
        case kbEn.rooms.suiteEg:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-989ob542payjpxauwwyxj9olc/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `EXECUTIVE EGYPTIAN SUITE\nSize: 65.3 m2 in average\nKing size bed: 180/200 cm\nRoom view: street view\nMore information:\nhttps://www.opera-hotel.com/rooms/executive-egyptian-suite`
            )
            break
        
        case kb.rooms.suiteKr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1tr804e9dw1xokf9mi6lbq4ig/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-russian-suite`
            )
            break
        
        case kbEn.rooms.suiteKr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1tr804e9dw1xokf9mi6lbq4ig/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `EXECUTIVE KYIVSKA RUS SUITE\nSize: 63.2 m2 in average\nRoom view: street view\nKing size bed: 180/200 cm\nMore information:\nhttps://www.opera-hotel.com/rooms/executive-russian-suite`
            )
            break
        
        case kb.rooms.suiteAm:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-7npr08837vexngcom2491kbwj/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 65,3 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/executive-american-suite`
            )
            break
        
        case kbEn.rooms.suiteAm:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-7npr08837vexngcom2491kbwj/standard.jpg?crop=112%2C0%2C1777%2C1333&width=1140')
            await bot.sendMessage(chatId,
                `EXECUTIVE AMERICAN SUITE\nSize: 65.3 m2 in average\nKing size bed: 180/200 cm\nRoom view: street view\nMore information:\nhttps://www.opera-hotel.com/rooms/executive-american-suite`
            )
            break
        
        case kb.rooms.suiteMr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-eaezld71ow42qu5kxsypoy36s/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 45 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/junior-moroccan-suite`
            )
            break
        
        case kbEn.rooms.suiteMr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-eaezld71ow42qu5kxsypoy36s/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId,
                `JUNIOR MOROCCAN SUITE\nSize: 45 m2 in average\nRoom view: street view\nMore information:\nhttps://www.opera-hotel.com/rooms/moroccan-suite`
            )
            break
        
        
        case kb.rooms.suiteFr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-bafxs8a3skk7zmj91j2ekhsvv/standard.jpg?crop=113%2C0%2C1775%2C1331&width=1140')
            await bot.sendMessage(chatId,
                `Номер категорії Люкс\nПлоща: 45 м2 в середньому\nВид з номера: на вулицю\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/accommodation/junior-french-suite`
            )
            break
        
        case kbEn.rooms.suiteFr:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-bafxs8a3skk7zmj91j2ekhsvv/standard.jpg?crop=113%2C0%2C1775%2C1331&width=1140')
            await bot.sendMessage(chatId,
                `JUNIOR FRENCH SUITE\nSize: 45 m2 in average\nRoom view: street view\nMore information:\nhttps://www.opera-hotel.com/rooms/french-suite`
            )
            break
        
        case kb.rooms.backToRooms:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboard.rooms}
            })
            break
        
                case kbEn.rooms.backToRooms:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboardEn.rooms}
            })
            break

/////////////FnB REQUEST BUTTONS//////////////

        case kb.FnB.teatro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8j0hkb78mse5xfle471tygndf/standard.jpg?crop=56%2C0%2C868%2C651&width=1140')
            await bot.sendMessage(chatId,
                `Ресторан Teatro\nПрацюємо кожного дня з 07:00 до 23:00\nСніданок з 07:00 до 11:00\nЩоб забронювати столик, телефонуйте: +38 044 581 74 34 (вн. 1434)\nДетальныше за посиланням:\nhttps://www.opera-hotel.com/uk/restaurants-bars/teatro-restaurant`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/635/769/teatro-nov-2021.pdf')
            break
        
        case kbEn.FnB.teatro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8j0hkb78mse5xfle471tygndf/standard.jpg?crop=56%2C0%2C868%2C651&width=1140')
            await bot.sendMessage(chatId,
                `Teatro Restauran\nOpen 7 days a week, 07.00 am — 11.00 pm.\nBreakfast from 07:00 am till 11:00 am\nFor booking: +38 044 581 74 34 (int. 1434)\nMore information:\nhttps://www.opera-hotel.com/eat-drink/teatro-restaurant`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/635/769/teatro-nov-2021.pdf')
            break
        
        case kb.FnB.rs:
            await bot.sendMessage(chatId,
                `Обслуговування в номерах\nПрацюємо кожного дня з 07:00 до 01:00\nЩоб зробити замовлення телефонуйте: +38 044 581 74 35 (вн. 1435)`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/635/769/teatro-nov-2021.pdf')
            break
        
                case kbEn.FnB.rs:
            await bot.sendMessage(chatId,
                `Room Service\nOpen 7 days a week, 07.00 am — 01.00 am\nFor ordering: +38 044 581 74 35 (int. 1435)`
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
        
        case kbEn.FnB.bar:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8iuugxuc1y7iq2cwidxank44i/standard.jpg?crop=55%2C0%2C871%2C653&width=1140')
            await bot.sendMessage(chatId,
                `Lobby Lounge Bar \nOpen 7 days a week, 07.00 am — 12.00 pm\nFor booking: +38 044 581 74 44 (int. 1444)\nMore information:\nhttps://www.opera-hotel.com/eat-drink/lobby-lounge`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/638/187/llb-menu-nov-2021-en.pdf')
            break

/////////////SPA REQUEST BUTTONS//////////////
        
        case kb.spa.price:
            bot.sendMessage(chatId, `Посилання на прайс лист:\nhttps://www.spasalon.kiev.ua/ua/price-list-ua/`)
            break
        
        case kbEn.spa.price:
            bot.sendMessage(chatId, `Price list:\nhttps://www.spasalon.kiev.ua/en/price-list-en/`)
            break
        
        case kb.spa.call:
            bot.sendMessage(chatId, `Контакти:\nТел: +380 66 000 11 34\nemail: spadivaopera@gmail.com`)
            break
        
        case kbEn.spa.call:
            bot.sendMessage(chatId, `Contacts:\nTel: +380 66 000 11 34\nemail: spadivaopera@gmail.com`)
            break
        
        case kb.spa.site:
            bot.sendMessage(chatId, `Посилання на сайт:\nhttps://www.spasalon.kiev.ua/ua/mainpage-ua/`)
            break
        
        case kbEn.spa.site:
            bot.sendMessage(chatId, `Link to web site:\nhttps://www.spasalon.kiev.ua/en/mainpage-en/`)
            break
        
        case kb.spa.gym:
            await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-di1uym594hzruffqzawsvrsgo/file.jpg?width=1920')
            bot.sendMessage(chatId, `Наш фітнес-центр обладнаний професійними тренажерами TehnoGym. Кардіо та силові тренування допоможуть підтримати Вашу фізичну форму й відновити сили.\nПрацює цілодобово\n\nТакож Ви можете насолодитися фінською сауною, збадьоритись під крижаним душем та відпочити в джакузі\nПрацює з 09:00 до 21:00 за попереднім бронюванням`)
            break
        
        case kbEn.spa.gym:
            await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-di1uym594hzruffqzawsvrsgo/file.jpg?width=1920')
            bot.sendMessage(chatId, `We are proud to offer a top quality gym with TehnoGym equipment. Cardio and power trainings will shape your body and lift your spirit.\nWorking hours 24/7\n\nYou are welcome to enjoy our Finnish sauna, shock your senses with an ice-cold circular shower and then relax in a Jacuzzi.\nWorking at 09:00 am till 09:00 pm by prior reservation`)
            break

/////////////Events REQUEST BUTTONS//////////////
    
        case kb.events.symph:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1k9hj2nuomqtd9lxsrn8r0z5d/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Зал Симфонія може прийняти до 250 гостей і також може бути поділеним розсувними стінами на окремі зони. Декорований у світлих кольорах, обладнаний вбудованими проекторами, екранами, системою управління світлом і доступом до безкоштовного Wi-Fi.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/uk/rfp`
            )
            break
        
        case kbEn.events.symph:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-1k9hj2nuomqtd9lxsrn8r0z5d/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `The Symphony Grand Hall is our biggest venue. this hall can accommodate up to 250 people and at the same time can be divided into independent conference areas with sliding walls. Decorated in light colours, equipped with built-in projectors, screens and light management system it becomes an ideal spot for arranging any kind of event.\nYou may contact via:\ne-mail: conference@opera-hotel.com\nTel. +380 44 581 70 70.\nTo send a request, please fill in the RFP form:\nhttps://www.opera-hotel.com/rfp`
            )
            break
        
        case kb.events.maestro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-a9nah6d9aqkpsvj9mn1ne2zo5/standard.jpg?crop=55%2C0%2C871%2C653&width=1140')
            await bot.sendMessage(chatId, `Він вміщує до 200 людей та має окремий вхід з вулиці. Зал поділений на окремі зони, а саме просторий основний зал та дві менші кімнати, які роблять його зручною локацією для проведення тренінгів, де необхідні окремі кімнати для роботи в групах.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/uk/rfp`
            )
            break
        
        case kbEn.events.maestro:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-a9nah6d9aqkpsvj9mn1ne2zo5/standard.jpg?crop=55%2C0%2C871%2C653&width=1140')
            await bot.sendMessage(chatId, `Maestro Hall, an ornate styled meeting room with big windows and bar area, is the best option for any kind of receptions, black-tie events, and banquets. It can hold up to 200 people and has a separate entrance from the street. The venue is divided into separate areas with one spacious hall and 2 smaller rooms which make it also very comfortable for trainings where separate breakout rooms are needed. \nYou may contact via e-mail:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nTo send a request, please fill in the RFP form :\nhttps://www.opera-hotel.com/rfp`
            )
            break
        
        case kb.events.bussiness:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3lfw4c6x7jtx3a7vf5mh3g2r1/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Бізнес Лаунж готелю є втіленням стилю і комфорту та підходить як для бізнес зустрічей, так і для неформальних корпоративних презентацій, коктейльних вечірок та приватних вечерь у самому серці Києва.\nВи можете зв'язатися з нами за допомогою:\ne-mail: conference@opera-hotel.com\nТел. +380 44 581 70 70.\nАбо заповніть RFP форму за посиланням:\nhttps://www.opera-hotel.com/uk/rfp`
            )
            break
        
        case kbEn.events.bussiness:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-3lfw4c6x7jtx3a7vf5mh3g2r1/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `The Hotel’s Business Lounge venue is the embodiment of style and comfort and is suitable for events ranging from business meetings to informal corporate presentations, cocktail events and private dinners in the heart of Kyiv city\nYou may contact via:\ne-mail: conference@opera-hotel.com\nTel. +380 44 581 70 70.\nTo send a request, please fill in the RFP form:\nhttps://www.opera-hotel.com/rfp`
            )
            break
         
      /////////////SPECIAL OFFERS BUTTONS//////////////  

        case kbEn.offers.romantic:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-2d0jydew80yx5jt235eky1t9i/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `We offer You to enjoy a romantic escape to the world of elegance and luxury.\nBook Now:\ne-mail: reservations@opera-hotel.com\nTel. +380 44 581 58 38.\nMore information:\nhttps://www.opera-hotel.com/offers-news/romantic-package`
            )
            break
        case kbEn.offers.romantic:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-2d0jydew80yx5jt235eky1t9i/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Готель «Опера» пропонує Вам можливість насолодитися романтичним перебуванням в одному з наших номерів та апартаментів, що стане незабутнім подарунком близькій людині.\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/romantic-package`
            )
            break
        case kb.offers.wedding:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8z4bgc13yn94x1f8upfi3uegn/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Насолоджуйтесь спеціальною пропозицією для молодят в готелі «Опера». Комфортні та затишні номери, смачна європейська кухня та професійний персонал привнесуть родзинку у найщасливіший день у Вашому житті.\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/wedding-package`
            )
            break
        case kbEn.offers.wedding:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-8z4bgc13yn94x1f8upfi3uegn/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Enjoy our special offer for the newlyweds at the Opera Hotel. With luxury surroundings and personalised service, we’ll do our best to lace your special day with more magic moments.\nBook Now:\ne-mail: reservations@opera-hotel.com\nTel. +380 44 581 58 38.\nMore information:\nhttps://www.opera-hotel.com/offers-news/wedding-package`
            )
            break
        case kb.offers.group:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-63nd50nwmldv8e76a6pedv1b6/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Отримуйте особливі переваги, при бронюванні груп в готелі «Опера»\nВи можете зв'язатися з нами за допомогою:\ne-mail: reservations@opera-hotel.com\nТел. +380 44 581 58 38.\nДетальніше за посиланням:\nhttps://www.opera-hotel.com/uk/offers/group-offer`
            )
            break
        case kbEn.offers.group:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-63nd50nwmldv8e76a6pedv1b6/standard.jpg?crop=56%2C0%2C869%2C652&width=1140')
            await bot.sendMessage(chatId, `Enjoy special advantages while booking groups in the Opera Hotel\nBook Now:\ne-mail: reservations@opera-hotel.com\nTel. +380 44 581 58 38.\nMore information:\nhttps://www.opera-hotel.com/offers-news/group-offer`
            )
            break
        case kb.offers.coravin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-cam95ebvjmszwbxs410bd8642/standard.jpg?crop=0%2C500%2C1333%2C1000&width=1140')
            await bot.sendMessage(chatId, `Ми раді запропонувати Вам унікальну можливість спробувати вінтажні та рідкісні вина в готелі Опера, заощадивши на покупці цілої пляшки і заплативши тільки за келих. Ми використовуємо спеціальну систему збереження смакових якостей напоїв від Coravin, і ви можете бути впевнені, що вино у вашому келиху буде ідеальним.\nМи будемо раді вітати вас в Лобі Лаунж Барі і ресторані Teatro, щоб представити нашу вийняткову винну карту, відзначену нагородою Wine Spectator.`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/638/187/wine-list-nov-21.pdf')
            break
        case kbEn.offers.coravin:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-cam95ebvjmszwbxs410bd8642/standard.jpg?crop=0%2C500%2C1333%2C1000&width=1140')
            await bot.sendMessage(chatId, `We are proud to offer you an excellent opportunity to try fine and rare wines by the glass at the Opera Hotel. We use Coravin preservation system to deliver fine wine by glass in its absolute condition.\nWe will be happy to welcome you to our Lobby Lounge Bar and Teatro restaurant to unveil our outstanding wine list, certificates by Wine Spectator.`
            )
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/638/187/wine-list-nov-21.pdf')
            break
        
        /////////////Receptions Request BUTTONS//////////////  
        case kb.reception.contacts:
            bot.sendMessage(chatId, `Рецепція:\nТел: +380 44 581 70 70 (вн. 1117)\nМоб (Viber/WhatsApp):\n+380 98 581 70 70\n e-mail: reсeption@opera-hotel.com`)
            break
        case kbEn.reception.contacts:
            bot.sendMessage(chatId, `Reception:\nTel: +380 44 581 70 70 (Int. 1117)\nMob (Viber/WhatsApp):\n+380 98 581 70 70\n e-mail: reсeption@opera-hotel.com`)
            break
         case kb.reception.info:
            bot.sendMessage(chatId, 'Інформація про готель', {
                reply_markup: {keyboard: keyboard.info}
            })
            break
         case kbEn.reception.info:
            bot.sendMessage(chatId, 'Information about Hotel', {
                reply_markup: {keyboard: keyboardEn.info}
            })
            break
        case kb.reception.backToRec:
            bot.sendMessage(chatId, 'НАЗАД', {
                reply_markup: {keyboard: keyboard.reception}
            })
            break
        case kbEn.reception.backToRec:
            bot.sendMessage(chatId, 'BACK', {
                reply_markup: {keyboard: keyboardEn.reception}
            })
            break
        case kb.reception.services:
            bot.sendMessage(chatId, 'ПОСЛУГИ', {
                reply_markup: {keyboard: keyboard.services}
            })
            break
        case kbEn.reception.services:
            bot.sendMessage(chatId, 'SERVICES', {
                reply_markup: {keyboard: keyboardEn.services}
            })
            break   
        case kb.reception.lhw:
            bot.sendMessage(chatId, `The Leading Hotels of the World, Ltd - це плеяда автентичних та незвичайних готелів. Асоціація, що створена  з понад 400 готелів, які розташовані в 80 країнах  світу. Готелі, що входять до асоціації, своєю сутністю  підкреслюють особливості кожного окремого регіону.\nДетальніше за посиланням:\nhttps://www.lhw.com/`)
            break
        case kbEn.reception.lhw:
            bot.sendMessage(chatId, `The Leading Hotels of the World, Ltd. is a collection of authentic and uncommon luxury hotels. Comprised of more than 400 hotels in over 80 countries, our hotels embody the very essence of their destinations.\nMore information:\nhttps://www.lhw.com/`)
            break
         case kb.reception.covid:
            await bot.sendMessage(chatId, `Основним пріоритетом готелю Опера завжди були безпека наших гостей та працівників готелю. Тому для того, щоб зупинити розповсюдження коронавірусної хвороби COVID-19 та захистити наших гостей на усіх етапах перебування в готелі Опера, ми оновили всі наші політики та процедури, використовуючи кращі практики та напрацювання з усього світу. Будь ласка, ознайомтеся з відповідними санітарно-гігієнічними нормами.\nЗалишайтеся в безпеці в готелі Опера.`)
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/593/000/covid-19-ua.pdf')
            break
         case kbEn.reception.covid:
            await bot.sendMessage(chatId, `First priority at Opera Hotel has always been the safety of our guests and team members, therefore in order to stop spreading of COVID-19 and allow our guests to rest easily, we upgraded our cleaning protocols using the best practices from all over the world. Please scan QR-code to familiarize yourself with the relevant Hygienic & Cleaning Standards.\nStay safe with Opera Hotel.`)
            await bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/593/000/covid-19.pdf')
            break
        case kb.reception.location:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wipng-gyao4tf82b47qocfzbbuf34n/file.png?width=1920')
           await bot.sendMessage(chatId, `Готель "Опера" розташований у тихому районі центральної частини Києва, за 10 хвилин від Національної Опери України та собору Святого Володимира. Гарна та затишна вулиця Богдана Хмельницького з великою кількістю історичних будівель, вишуканими ресторанами та кав’ярнями веде до головної вулиці міста - Хрещатика.\nhttps://goo.gl/maps/BpXeAnSYiJQZrQmf8`)
            break
        case kbEn.reception.location:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wipng-gyao4tf82b47qocfzbbuf34n/file.png?width=1920')
           await bot.sendMessage(chatId, `Opera hotel is located in a quiet Kyiv downtown, within 10 minutes walk from the National Opera House and St. Volodymyr’s Cathedral. Beautiful & cosy Bogdana Kmelnytskogo Street with plenty of historical buildings, nice restaurants & coffee shops leads directly to The Khreshchatyk – the main street of the city.\nhttps://goo.gl/maps/BpXeAnSYiJQZrQmf8`)
            break
        case kb.reception.gd:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-b6do2pzx3un2m39egdboisgkr/file.jpg?width=1920')
           await bot.sendMessage(chatId, `Наша команда прагне надати Вам сервіс міжнародного рівня, щоб перевершити Ваші очікування та продемонструвати традиційну українську гостинність.\nЩоб дізнатися більше інформації про перелік послуги, які ми прагнемо запропонувати нашим гостям, будь ласка, зверніться до Довідника готельних послуг.`)
                bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/634/882/direktoria-ua-covid-21.pdf')
            break
        case kbEn.reception.gd:
           await bot.sendPhoto(chatId, 'https://image-tc.galaxy.tf/wijpeg-b6do2pzx3un2m39egdboisgkr/file.jpg?width=1920')
           await bot.sendMessage(chatId, `Our Team is committed to providing the international level of service that you expect with an authentic Ukrainian touch.\nTo find out more information about an extensive list of the services that we aim to provide for your comfort please go through Hotel Directory.`)
                bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/636/456/direktoria-eng-covid-21v2.pdf')
            break
        case kb.reception.trans:
           await bot.sendPhoto(chatId, 'https://sales.mercedes-izmaylovo.ru/upload/resize_cache/iblock/80a/0qo8zbeyinkjqklnayfzhmxqiq8nrvi8/360_270_1/61548a556375c5.59890997_11486de07b793338cd84ee9453967544.jpg')
           await bot.sendMessage(chatId, `Готель «Опера» пропонує послуги організації трансферів від/до Міжнародного Аеропорту «Бориспіль», Міжнародного Аеропорту «Київ» (Жуляни), Центрального залізничного вокзалу та інших напрямків.\nВартість трансферу на автомобілі бізнес-класу складає:\n\nМіжнародний Аеропорт «Бориспіль» - Готель (35 км, близько 45 хвилин на таксі) «Опера» - 85 евро.\n\nМіжнародний Аеропорт «Київ» - Готель (15 км, близько 25 хвилин на таксі) «Опера» - 45 евро.\n\nЦентральний залізничний вокзал - Готель (3 км, близько 15 хвилин на таксі) «Опера» - 20 евро.\n\nЩоб замовити послугу або дізнатися більше інформації, будь ласка, зв'яжіться з нашим консьєрж сервісом:\nconcierge@opera-hotel.com`)
            break
        case kbEn.reception.trans:
           await bot.sendPhoto(chatId, 'https://sales.mercedes-izmaylovo.ru/upload/resize_cache/iblock/80a/0qo8zbeyinkjqklnayfzhmxqiq8nrvi8/360_270_1/61548a556375c5.59890997_11486de07b793338cd84ee9453967544.jpg')
           await bot.sendMessage(chatId, `Opera Hotel offers transportation services from/to Boryspil International Airport (KBP), International Airport Kyiv (Zhuliany), Central Railway station and other destinations.\n\nEnjoy your own private transfer with the business class car:\n\nBoryspil International Airport – Opera Hotel (35 km, around 40 minutes drive) – 85 EUR.\n\nInternational Airport Kyiv - Opera Hotel (15 km, around 25 minutes drive) – 45 EUR.\n\nCentral railway station - Opera Hotel (3 km, 15 minutes by car) – 20 EUR.\n\nFor further assistance please contact our concierge service:\nconcierge@opera-hotel.com`)
            break
         case kb.reception.pillow:
           await bot.sendMessage(chatId, `Щоб задовольнити ваші індивідуальні потреби та побалувати вас під час перебування в готелі «Опера», ми підготували спеціальне Меню Подушок. Оберіть свою особливу подушку і відчуйте розкіш відпочинку далеко від дому.\nЗв’яжіться з рецепцією за номером 1117, щоб зробити замовлення.\n\nСолодких снів!`)
                bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/591/374/pillow-ua.pdf')
            break
         case kbEn.reception.pillow:
           await bot.sendMessage(chatId, `In order to cater your individual needs and indulge you during your stay with Opera Hotel we offer you to choose your special pillow from our Pillow Menu and enjoy your night sleep away from home.\nPlease go through the Hotel Pillow Menu and contact our reception team on 1117 to place your order.`)
                bot.sendDocument(chatId, 'https://www.travelclick-websolutions.com/uploads/applications/documents/001/591/374/pillow-eng.pdf')
            break
        case kb.reception.cons:
           await bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-a2gybp4eVOcx_xUY0PwA_mvdL9mmPj1LtQ&usqp=CAU')
           await bot.sendMessage(chatId, `Наша професійна команда консьєржів завжди до Ваших послуг.\nМи будемо раді допомогти вам з рекомендаціями про те, що подивитися в Києві і за його межами, організувати транспортні послуги, забронювати столик в ресторані, купити квитки на культурні та спортивні заходи, тощо.\nБудь-то ділова поїздка або відпустка, все буде організовано за найвищими стандартами, і ваше перебування стане незабутнім і приємним.\n\nЯкщо бажаєте дізнатися більше інформації, будь ласка, зв'яжіться з нашим консьєрж сервісом:\nconcierge@opera-hotel.com`)
            break
        case kbEn.reception.cons:
           await bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-a2gybp4eVOcx_xUY0PwA_mvdL9mmPj1LtQ&usqp=CAU')
           await bot.sendMessage(chatId, `Our professional concierge team is always at your disposal in daily pursuits.\nWe will be more than happy to assist you with recommendations on what to see in Kyiv and outside the city, transportation arrangements, restaurant table reservations, arranging tickets for cultural and sports events etc. Whether it’s for business or pleasure, everything will be arranged to the highest of standards to ensure our guests enjoy a pleasant, eventful stay and memorable travel experiences.\nContact Concierge team:\nconcierge@opera-hotel.com`)
            break
         
    }
})
    
    bot.onText(/\/start/, msg => {
      const chatId = msg.chat.id;
        bot.sendMessage(chatId , `Welcome to Opera Hotel Telegram Bot!\n`, {
            reply_markup: {
                keyboard: keyboardEn.language
            }
       }
        )
    })
}

start();
