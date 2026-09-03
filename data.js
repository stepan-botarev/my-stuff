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
    "price": "7 €",
    "reserved": false,
    "images": [
      "images/item1-1788278718433-n8gn.png",
      "images/item1-1788278721055-x4nb.png"
    ],
    "title": {
      "ru": "Поясная ретро-сумка с принтом в стиле Ван Гога",
      "en": "Retro belt bag with a Van Gogh print",
      "de": "Retro-Bauchtasche mit Van-Gogh-Print",
      "zh": "复古腰包，梵高风格印花",
      "uk": "Ретро поясна сумка з принтом у стилі Ван Гога",
      "es": "Bolso de cintura retro con estampado estilo Van Gogh"
    },
    "desc": {
      "ru": "Немного вайба 90-х, немного барахолки, немного инди 🌙\n\nЧёрный регулируемый ремень, одно отделение на молнии. Помещаются телефон, паспорт или кошелёк, ключи и всякая мелочь. Носилась аккуратно.\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 🌻",
      "en": "A bit of 90s vibe, a bit of flea market, a bit of indie 🌙\n\nBlack adjustable strap, one zip compartment. Fits a phone, ID or wallet, keys and small bits. Gently worn.\n\nHandover at U-/S-Bahn stations in central Hamburg 🌻",
      "de": "Ein bisschen 90er-Vibe, ein bisschen Flohmarkt, ein bisschen Indie 🌙\n\nSchwarzer verstellbarer Gurt, ein Reißverschlussfach. Handy, Ausweis oder Portemonnaie, Schlüssel und Kleinkram passen rein. Wurde sorgsam getragen.\n\nÜbergabe an U-/S-Bahn-Stationen in der Hamburger Innenstadt 🌻",
      "zh": "一点90年代的味道，一点旧货市场的感觉，一点独立风 🌙\n\n黑色可调节腰带，一个拉链隔层。可放手机、证件或钱包、钥匙和零碎小物。使用爱惜，成色良好。\n\n可在汉堡市中心的地铁（U-/S-Bahn）站面交 🌻",
      "uk": "Трохи вайбу 90-х, трохи барахолки, трохи інді 🌙\n\nЧорний регульований ремінь, одне відділення на змійці. Вміщаються телефон, паспорт або гаманець, ключі та різні дрібнички. Носилася обережно.\n\nПередача на станціях U-/S-Bahn у центральній частині Гамбурга 🌻",
      "es": "Un poco de vibra noventera, un poco de mercadillo, un poco de indie 🌙\n\nCorrea negra ajustable, un compartimento con cremallera. Caben el móvil, el DNI o la cartera, las llaves y pequeñas cosas. Usado con cuidado.\n\nEntrega en estaciones de U-/S-Bahn en el centro de Hamburgo 🌻"
    },
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
    "condition": "good"
  }
];
