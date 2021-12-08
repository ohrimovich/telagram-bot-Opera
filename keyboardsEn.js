const kbEn = require('./keyboard-buttonsEn')

module.exports = {

    language: [
        [kbEn.lang.eng],
        [kbEn.lang.ukr]
    ],
    home: [
        [kbEn.home.rooms, kbEn.home.reception],
        [kbEn.home.fnb, kbEn.home.events],
        [kbEn.home.offers, kbEn.home.spa]
    ],
    rooms: [
        [kbEn.rooms.reserv],
        [kbEn.rooms.standart, kbEn.rooms.superior],
        [kbEn.rooms.suites],
        [kbEn.back]
    ],
    reception: [
        [kbEn.reception.contacts],
        [kbEn.reception.services, kbEn.reception.info],
        [kbEn.back]
    ],
    fnb: [
        [kbEn.FnB.teatro],
        [kbEn.FnB.bar],
        [kbEn.FnB.rs],
        [kbEn.back]

    ],
    events: [
        [kbEn.events.symph],
        [kbEn.events.maestro, kbEn.events.bussiness],
        [kbEn.back]

    ],
    offers: [
        [kbEn.offers.romantic, kbEn.offers.wedding],
        [kbEn.offers.group, kbEn.offers.coravin],
        [kbEn.back]

    ],
    spa: [
        [kbEn.spa.price, kbEn.spa.site],
        [kbEn.spa.call, kbEn.spa.gym],
        [kbEn.back]

    ],
    standartRooms: [
        [kbEn.rooms.reserv],
        [kbEn.rooms.stadartKing, kbEn.rooms.stadartTwin],
        [kbEn.rooms.backToRooms]
    ],
    suites: [
        [kbEn.rooms.reserv],
        [kbEn.rooms.suiteFr, kbEn.rooms.suiteMr],
        [kbEn.rooms.suiteJp, kbEn.rooms.suiteEg],
        [kbEn.rooms.suiteKr, kbEn.rooms.suiteAm],
        [kbEn.rooms.backToRooms]
    ],
    info: [
        [kbEn.reception.lhw],
        [kbEn.reception.covid],
        [kbEn.reception.location],
        [kbEn.reception.backToRec]
    ],
    services: [
        [kbEn.reception.gd, kbEn.reception.trans],
        [kbEn.reception.cons, kbEn.reception.pillow],
        [kbEn.reception.backToRec]
    ]

}