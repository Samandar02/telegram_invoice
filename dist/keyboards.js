"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.States = exports.date_keyboard = exports.merchant_keyboard = exports.home_keyboard = void 0;
const back_key = { text: "<< Ortga", callback_data: 'back' };
exports.home_keyboard = {
    inline_keyboard: [
        [
            { text: "birinchi", callback_data: '1' },
            { text: "ikkinchi", callback_data: '2' },
            { text: "uchinchi", callback_data: '3' }
        ]
    ]
};
exports.merchant_keyboard = {
    inline_keyboard: [
        [
            { text: "Hammasi", callback_data: 'all' },
            { text: "Artel", callback_data: 'artel' },
            { text: "Mediyapark", callback_data: 'mediya' }
        ], [back_key]
    ]
};
exports.date_keyboard = {
    inline_keyboard: [
        [
            { text: "Bugungi", callback_data: 'today' },
            { text: "Boshqa", callback_data: 'costume' },
        ], [back_key]
    ]
};
var States;
(function (States) {
    States[States["REPORT"] = 0] = "REPORT";
    States[States["CHOOSE_MERCHANT"] = 1] = "CHOOSE_MERCHANT";
    States[States["GET_DATE"] = 2] = "GET_DATE";
})(States = exports.States || (exports.States = {}));
//# sourceMappingURL=keyboards.js.map