// ЗАПОЛНЕНИЕ САЙТА — редактируй здесь (или через admin.html)
// -----------------------------------------------------------------
// Твой WhatsApp номер в международном формате, без + и без пробелов
// Например: 79991234567
const WHATSAPP_NUMBER = "4917623657623";

// Список товаров. Порядок в массиве = порядок на сайте.
// images: первая картинка — превью в списке, все — доступны в галерее.
// reserved: true — товар помечается как "забронирован".
const PRODUCTS = [
  {
    "id": 1,
    "price": "7 ",
    "reserved": false,
    "images": [
      "images/item1-1788278718433-n8gn.png",
      "images/item1-1788278721055-x4nb.png"
    ],
    "title": {
      "ru": "Поясная ретро-сумка с принтом в стиле Ван Гога",
      "en": "Retro Belt Bag with Van Gogh Print",
      "de": "Bauchtasche mit Van-Gogh-Print",
      "zh": "黑胶唱片机"
    },
    "desc": {
      "ru": "Немного вайба 90-х, немного барахолки, немного инди 🌙\n\nЧёрный регулируемый ремень, одно отделение на молнии. Помещаются телефон, паспорт или кошелёк, ключи и всякая мелочь.\n\nХорошее состояние, носилась аккуратно.\nПередача на станции U-/S-Bahn в центральной части Гамбурга и в разумных пределах вокруг центра 🌻",
      "en": "A little 90s vibe, a little flea market, a little indie 🌙\nBlack adjustable strap, one zippered compartment. Fits a phone, passport or wallet, keys and various small essentials.\n\nGood condition, carefully used.\nMeet-up at an U-/S-Bahn station in central Hamburg or the surrounding central area. Shipping also possible 🌻",
      "de": "Ein bisschen 90er-Vibe, ein bisschen Flohmarkt, ein bisschen Indie 🌙\nSchwarzer verstellbarer Gurt, ein Fach mit Reißverschluss. Platz für Handy, Reisepass oder Portemonnaie, Schlüssel und allerlei Kleinkram.\n\nGuter Zustand, sorgfältig getragen.\nÜbergabe an einer U-Bahn-Station im erweiterten Hamburger Zentrum. Versand auch möglich 🌻",
      "zh": "功能完好,音色温暖。盖子上有小划痕,不影响播放。"
    }
  }
];
