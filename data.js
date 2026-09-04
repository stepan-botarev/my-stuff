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
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "de": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "ru": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "es": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus"
    },
    "condition": "good"
  },
  {
    "id": 2,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "de": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "ru": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "es": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus"
    },
    "images": [
      "images/item2-1788459617597-lrtp.jpg",
      "images/item2-1788459617726-1ora.jpg"
    ],
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
  },
  {
    "id": 3,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item3-1788459661665-wy2p.jpg",
      "images/item3-1788459661751-hahs.jpg"
    ],
    "title": {
      "en": "Striped viscose short-sleeve shirt — size M",
      "de": "Gestreiftes Kurzarmhemd aus Viskose — Größe M",
      "ru": "Полосатая рубашка из вискозы с коротким рукавом — размер M",
      "uk": "Смугаста сорочка з віскози з коротким рукавом — розмір M",
      "es": "Camisa de manga corta de viscosa a rayas — talla M",
      "zh": "条纹短袖衬衫，粘胶纤维 —— M码"
    },
    "desc": {
      "en": "Cream with autumn-leaf orange, sea green and a touch of black vertical stripes. For some reason it always reminded me of something Italian. Played more than one gig in it with my indie band 🇮🇹\n\nSize M, unisex, 100% viscose. Well looked after.\n\nHandover at U-/S-Bahn stations in central Hamburg 🌸",
      "de": "Creme mit herbstlaub-orangen, seegrünen Streifen und etwas Schwarz. Irgendwie hat es mich immer an etwas Italienisches erinnert. Habe darin mehr als ein Konzert mit meiner Indie-Band gespielt 🇮🇹\nGröße M, Unisex, 100 % Viskose. Gut gepflegt.\n\nÜbergabe an U-/S-Bahn-Stationen in der Hamburger Innenstadt 🌸",
      "ru": "Кремовая, с полосками цвета осенних листьев (оранжевый), sea green и немного чёрного. Почему-то всегда напоминала мне что-то итальянское. Сыграл в ней не один концерт с моей инди-группой 🇮🇹\n\nРазмер M, унисекс, 100% вискоза. Ухоженная.\n\nПередача на станциях U-/S-Bahn в центральной части Гамбурга 🌸",
      "uk": "Кремова, зі смужками кольору осіннього листя (оранжевий), sea green і трохи чорного. Чомусь завжди нагадувала мені щось італійське. Зіграв у ній не один концерт зі своєю інді-групою 🇮🇹\n\nРозмір M, унісекс, 100% віскоза. Доглянута.\n\nПередача на станціях U-/S-Bahn у центральній частині Гамбурга 🌸",
      "es": "Color crema con rayas verticales naranja de hojas de otoño, verde mar y un toque de negro. Por alguna razón siempre me recordó a algo italiano. Toqué más de un concierto con ella con mi grupo indie 🇮🇹\n\nTalla M, unisex, 100% viscosa. Bien cuidada.\n\nEntrega en estaciones de U-/S-Bahn en el centro de Hamburgo 🌸",
      "zh": "米白底色，配秋叶橙、海洋绿和一点黑色竖条纹。不知为何总让我想起某种意大利的感觉。我穿着它和我的独立乐队演过不止一场。🇮🇹\nM码，男女同款，100% 粘胶纤维。保养良好。\n可在汉堡市中心的地铁（U-/S-Bahn）站面交 🌸"
    }
  },
  {
    "id": 4,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item4-1788516681636-oam5.jpg",
      "images/item4-1788516681752-vk9b.jpg"
    ],
    "title": {
      "en": "Floral short-sleeve shirt — United Colors of Benetton, size L",
      "de": "Blumenhemd mit Kurzarm — United Colors of Benetton, Größe L",
      "ru": "Рубашка с цветочным принтом с коротким рукавом — United Colors of Benetton, размер L",
      "uk": "Сорочка з квітковим принтом з коротким рукавом — United Colors of Benetton, розмір L",
      "es": "Camisa floral de manga corta — United Colors of Benetton, talla L",
      "zh": "碎花短袖衬衫 —— United Colors of Benetton，L码"
    },
    "desc": {
      "en": "Cream shirt with a small pink and green floral print. Worn well with both jeans and trousers 🌺\nSize L, unisex, 100% cotton. Well looked after",
      "de": "Cremefarbenes Hemd mit kleinem rosa-grünem Blumenmuster. Sah gut aus zu Jeans genauso wie zu Stoffhosen 🌺\nGröße L, Unisex, 100 % Baumwolle. Gut gepflegt",
      "ru": "Кремовая рубашка с мелким розово-зелёным цветочным принтом. Хорошо носилась и с джинсами, и с брюками 🌺\nРазмер L, унисекс, 100% хлопок. Ухоженная",
      "uk": "Кремова сорочка з дрібним рожево-зеленим квітковим принтом. Добре носилась і з джинсами, і з брюками 🌺\nРозмір L, унісекс, 100% бавовна. Доглянута",
      "es": "Camisa color crema con un pequeño estampado floral rosa y verde. Combinaba bien tanto con vaqueros como con pantalones de vestir 🌺\nTalla L, unisex, 100% algodón. Bien cuidada",
      "zh": "米白色衬衫，粉绿碎花印花。搭配牛仔裤或西裤都好看 🌺\nL码，男女同款，100% 纯棉。保养良好"
    }
  },
  {
    "id": 5,
    "price": "13 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus"
    },
    "images": [
      "images/item5-1788517053870-yj7m.jpg",
      "images/item5-1788517053998-4wmk.jpg"
    ],
    "title": {
      "en": "Corduroy overshirt jacket — H&M Relaxed Fit, size M",
      "de": "Cord-Overshirt-Jacke — H&M Relaxed Fit, Größe M",
      "ru": "Вельветовая куртка-рубашка — H&M Relaxed Fit, размер M",
      "uk": "Вельветова куртка-сорочка — H&M Relaxed Fit, розмір M",
      "es": "Chaqueta camisera de pana — H&M Relaxed Fit, talla M",
      "zh": "灯芯绒衬衫夹克 —— H&M Relaxed Fit，M码"
    },
    "desc": {
      "en": "Olive green corduroy, cotton, with two flap chest pockets. Walked through a sunny but still cool spring Belgrade in it 🌿\nSize M, unisex, cotton/corduroy. Well looked after",
      "de": "Olivgrüner Cord, Baumwolle, mit zwei Brusttaschen mit Klappe. Bin damit durch ein sonniges, aber noch kühles Frühlings-Belgrad spaziert 🌿\nGröße M, Unisex, Baumwolle/Cord. Gut gepflegt",
      "ru": "Оливковый вельвет, хлопок, два накладных кармана с клапанами. Гулял в ней по солнечному, но ещё прохладному весеннему Белграду 🌿\nРазмер M, унисекс, хлопок/вельвет. Ухоженная",
      "uk": "Оливковий вельвет, бавовна, два накладні кармани з клапанами. Гуляв у ній по сонячному, але ще прохолодному весняному Белграду 🌿\nРозмір M, унісекс, бавовна/вельвет. Доглянута",
      "es": "Pana verde oliva, algodón, con dos bolsillos de pecho con solapa. La usé para caminar por un Belgrado primaveral, soleado pero aún fresco 🌿\nTalla M, unisex, algodón/pana. Bien cuidada",
      "zh": "橄榄绿灯芯绒，棉质，胸前两个带盖口袋。穿着它走过阳光明媚但还有些凉的贝尔格莱德春天 🌿\nM码，男女同款，棉/灯芯绒。保养良好"
    }
  },
  {
    "id": 6,
    "price": "5 €",
    "reserved": false,
    "condition": "fair",
    "location": {
      "en": "",
      "de": "",
      "ru": "",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item6-1788517567444-vmsa.jpg",
      "images/item6-1788517567566-ir3w.jpg"
    ],
    "title": {
      "en": "Retro jeans — slightly wider on top, slightly narrower at the bottom",
      "de": "Retro-Jeans — oben etwas weiter, unten etwas schmaler",
      "ru": "Ретро-джинсы — чуть шире сверху, чуть уже снизу",
      "uk": "Ретро-джинси — трохи ширші зверху, трохи вужчі знизу",
      "es": "Jeans retro — un poco más anchos arriba, un poco más estrechos abajo",
      "zh": "复古牛仔裤 —— 上宽下窄"
    },
    "desc": {
      "en": "Jeans I swiped from my dad 🤫\n\nSlightly worn at the very bottom of the legs, otherwise in good shape.\n\nProbably unisex, 100% cotton 👖",
      "de": "Jeans, die ich meinem Vater geklaut habe 🤫\n\nGanz unten an den Beinen leicht abgetragen, sonst in gutem Zustand \n\nWahrscheinlich Unisex, 100 % Baumwolle 👖",
      "ru": "Джинсы, которые я стащил у отца 🤫\n\nНемножко потёрты в самом низу, но в целом в порядке.\n\nНаверное, унисекс, 100% хлопок 👖",
      "uk": "Джинси, які я стягнув у батька 🤫\n\nТрохи потерті у самому низу, але загалом в порядку.\n\nМабуть, унісекс, 100% бавовна 👖",
      "es": "Jeans que le robé a mi padre 🤫\n\nUn poco desgastados en la parte más baja de las piernas, pero en buen estado en general.\n\nProbablemente unisex, 100% algodón 👖",
      "zh": "从爸爸那里顺来的牛仔裤 🤫\n\n裤脚最下方略有磨损，整体状态不错。 \n\n应该是男女同款，100% 纯棉 👖"
    }
  }
];
