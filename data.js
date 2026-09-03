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
  },
  {
    "id": 2,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
    "images": [],
    "title": {
      "en": "Pink tee with the cover of Marcel Proust's Swann's Way — size L",
      "de": "Rosa T-Shirt mit dem Cover von Marcel Prousts „In Swanns Welt\" — Größe L",
      "ru": "Футболка с обложкой «В сторону Свана» Марселя Пруста — размер L",
      "uk": "Футболка з обкладинкою «На Сваннову сторону» Марселя Пруста — розмір L",
      "es": "Camiseta rosa con la portada de \"Por el camino de Swann\" de Marcel Proust — talla L",
      "zh": "粉色T恤，普鲁斯特《在斯万家这边》封面印花 —— L码"
    },
    "desc": {
      "en": "A tee with the cover of Swann's Way — the first of the seven volumes of Marcel Proust's In Search of Lost Time. For anyone who, like me, dreams of one day reading all 7 volumes of the greatest novel of the 20th century 👨🏻‍🏫\n\nSize L, unisex, 100% cotton. Practically new, worn a couple of times. Wrong size for me.\n\nHandover at U-/S-Bahn stations in central Hamburg 🪻",
      "de": "T-Shirt mit dem Cover von „In Swanns Welt\" — dem ersten der sieben Bände von Marcel Prousts „Auf der Suche nach der verlorenen Zeit\". Für alle, die wie ich davon träumen, irgendwann alle 7 Bände dieses größten Romans des 20. Jahrhunderts zu lesen 👨🏻‍🏫\n\nGröße L, Unisex, 100 % Baumwolle. Praktisch neu, nur ein paar Mal getragen. Größe hat nicht gepasst.\n\nÜbergabe an U-/S-Bahn-Stationen in der Hamburger Innenstadt 🪻",
      "ru": "Розовая футболка с обложкой «В сторону Свана» — первой из семи книг романа «В поисках утраченного времени» Марселя Пруста. Для тех, кто, как я, мечтает однажды прочитать все 7 книг этой величайшей книги XX века 👨🏻‍🏫\n\nРазмер L, унисекс, 100% хлопок. Практически новая, надевал пару раз. Не подошёл размер.\n\nПередача на станциях U-/S-Bahn в центральной части Гамбурга 🪻",
      "uk": "Рожева футболка з обкладинкою «На Сваннову сторону» — першої з семи книг роману «У пошуках втраченого часу» Марселя Пруста. Для тих, хто, як і я, мріє колись прочитати всі 7 книг цієї найвеличнішої книги XX століття 👨🏻‍🏫\n\nРозмір L, унісекс, 100% бавовна. Практично нова, вдягав пару разів. Не підійшов розмір.\n\nПередача на станціях U-/S-Bahn у центральній частині Гамбурга 🪻",
      "es": "Camiseta con la portada de \"Por el camino de Swann\", el primero de los siete volúmenes de \"En busca del tiempo perdido\" de Marcel Proust. Para quienes, como yo, sueñan con leer algún día los 7 volúmenes de la novela más grande del siglo XX 👨🏻‍🏫\n\nTalla L, unisex, 100% algodón. Prácticamente nueva, la usé un par de veces. No me quedó bien la talla.\n\nEntrega en estaciones de U-/S-Bahn en el centro de Hamburgo 🪻",
      "zh": "印的是《在斯万家这边》的封面 —— 普鲁斯特《追忆似水年华》七卷本中的第一卷。送给和我一样、梦想有一天读完这部20世纪最伟大小说全部7卷的人 👨🏻‍🏫\n\nL码，男女同款，100% 纯棉。几乎全新，只穿过两三次。尺码不合适。\n\n可在汉堡市中心的地铁（U-/S-Bahn）站面交 🪻"
    }
  }
];
