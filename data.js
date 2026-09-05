// ЗАПОЛНЕНИЕ САЙТА — редактируй здесь (или через admin.html)
// -----------------------------------------------------------------
// Твой WhatsApp номер в международном формате, без + и без пробелов
// Например: 79991234567
const WHATSAPP_NUMBER = "4917623657623";

// Список товаров. Порядок в массиве = порядок на сайте.
// images: первая картинка — превью в списке, все — доступны в галерее.
// reserved: true — товар помечается как "забронирован".
// hidden: true — товар скрыт с сайта, но остаётся в списке для повторной публикации.
// category: одна из tech / furniture / clothing / misc (или пусто).
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
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "ru": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "es": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus"
    },
    "condition": "good",
    "category": "misc"
  },
  {
    "id": 2,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
    },
    "size": "M",
    "material": "",
    "category": "clothing"
  },
  {
    "id": 3,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
    },
    "size": "M",
    "category": "clothing"
  },
  {
    "id": 4,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
    },
    "size": "L",
    "category": "clothing"
  },
  {
    "id": 5,
    "price": "13 €",
    "reserved": false,
    "condition": "good",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
    },
    "size": "M",
    "category": "clothing"
  },
  {
    "id": 7,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item7-1788518334841-c8nd.jpg",
      "images/item7-1788518334936-drk9.jpg"
    ],
    "title": {
      "en": "Faux leather oversized overshirt jacket — Zara, size XL",
      "de": "Oversize-Overshirt aus Kunstleder — Zara, Größe XL",
      "ru": "Оверсайз-рубашка-куртка из искусственной кожи — Zara, размер XL",
      "uk": "Оверсайз-сорочка-куртка зі штучної шкіри — Zara, розмір XL",
      "es": "Camisa-chaqueta oversize de piel sintética — Zara, talla XL",
      "zh": "仿皮oversize衬衫外套 —— Zara，XL码"
    },
    "desc": {
      "en": "Brand new, never worn. Really cool piece, just didn't get the size right.\n\nFaded/distressed vintage-look faux leather, oversized fit, chest pocket, half-sleeve 🤎\n\nUnisex, size XL",
      "de": "Ganz neu, nie getragen. Richtig schönes Teil, nur die Größe hat nicht gepasst.\n\nKunstleder im Used-Look, Oversize-Schnitt, Brusttasche, Halbarm 🤎\n\nUnisex, Größe XL",
      "ru": "Новая, не носил. Классная, но не угадал с размером.\n\nИскусственная кожа с эффектом потёртости, оверсайз-крой, накладной карман, укороченный рукав 🤎\n\nУнисекс, размер XL\n\n",
      "uk": "Нова, не носив. Класна, але не вгадав з розміром.\n\nШтучна шкіра з ефектом потертості, оверсайз-крій, накладна кишеня, укорочений рукав 🤎\n\nУнісекс, розмір XL",
      "es": "Nueva, sin usar. Es una pieza genial, solo que no acerté con la talla.\n\nPiel sintética con efecto vintage/desgastado, corte oversize, bolsillo en el pecho, manga media 🤎\n\nUnisex, talla XL",
      "zh": "全新未穿。款式很酷，就是尺码没选对。\n\n做旧仿皮质感，oversize版型，胸前口袋，中袖 🤎\n\n男女同款，XL码"
    },
    "category": "clothing"
  },
  {
    "id": 6,
    "price": "5 €",
    "reserved": false,
    "condition": "fair",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
    },
    "category": "clothing"
  },
  {
    "id": 8,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item8-1788520644119-6jey.jpg",
      "images/item8-1788520644221-n43l.jpg",
      "images/item8-1788520644289-imiy.jpg"
    ],
    "title": {
      "en": "Odd but handy \"Game of Threats\" drawstring bag by Kaspersky",
      "de": "Seltsamer, aber praktischer Turnbeutel mit „Game of Threats\"-Print von Kaspersky",
      "ru": "Странный, но удобный мешок-рюкзак с принтом \"Game of Threats\" от Kaspersky",
      "uk": "Дивний, але зручний мішок-рюкзак з принтом \"Game of Threats\" від Kaspersky",
      "es": "Mochila rara pero práctica con estampado \"Game of Threats\" de Kaspersky",
      "zh": "怪但好用的 Kaspersky \"Game of Threats\" 印花束口包"
    },
    "desc": {
      "en": "Eye-catching retro design in petrol, black and red — for collectors of quirky merch, or anyone who just needs a practical bag for shoes, a t-shirt and sweatpants.\n\nDrawstring closure, light and practical for everyday use, sport or festivals.\n\nGood used condition 🎴",
      "de": "Auffälliges Retro-Design in Petrol, Schwarz und Rot – für Sammler von schrägem Merch oder einfach für alle, die einen praktischen Beutel für Schuhe, ein T-Shirt und eine Trainingshose brauchen.\n\nKordelzug, leicht und praktisch für Alltag, Sport oder Festivals.\n\nGuter gebrauchter Zustand 🎴",
      "ru": "Яркий ретро-дизайн в цветах петроль, чёрный и красный — для коллекционеров странноватого мерча или просто для тех, кому нужен практичный мешок для кроссовок, футболки и спортивных штанов.\n\nЗатяжной шнурок, лёгкий и удобный для повседневной жизни, спорта или фестивалей.\n\nХорошее состояние, б/у 🎴",
      "uk": "Яскравий ретро-дизайн у кольорах петроль, чорний та червоний — для колекціонерів дивнуватого мерчу або просто для тих, кому потрібен практичний мішок для кросівок, футболки та спортивних штанів.\n\nЗатягувальний шнурок, легкий і практичний для повсякдення, спорту чи фестивалів.\n\nХороший стан, б/у 🎴",
      "es": "Diseño retro llamativo en petróleo, negro y rojo — para coleccionistas de merchandising rarito, o para quienes simplemente necesitan una mochila práctica para zapatillas, una camiseta y pantalones de deporte.\n\nCierre con cordón, ligera y práctica para el día a día, deporte o festivales.\n\nBuen estado de uso 🎴",
      "zh": "复古设计，孔雀蓝、黑色与红色搭配，十分抢眼 —— 适合收藏稀奇周边的人，也适合只是需要一个实用袋子装鞋子、T恤和运动裤的人。\n\n束口设计，轻便实用，适合日常、运动或音乐节使用。\n\n二手良好状态 🎴"
    },
    "category": "clothing"
  },
  {
    "id": 11,
    "price": "7 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item11-1788528434514-o2nb.jpg"
    ],
    "title": {
      "en": "Rosmarino thermal bottle, black",
      "de": "Rosmarino Thermosflasche, schwarz",
      "ru": "Термобутылка Rosmarino, чёрная",
      "uk": "Термобутилка Rosmarino, чорна",
      "es": "Botella térmica Rosmarino, negra",
      "zh": "Rosmarino保温瓶，黑色"
    },
    "desc": {
      "en": "In good condition. A couple of barely noticeable scratches, touched up with a special marker. Giving it up because I want fewer black things in my life — but for anyone who loves black 🖤, this is a great find.\n\nStainless steel, keeps drinks hot/cold, practically like new",
      "de": "In gutem Zustand. Ein paar kaum sichtbare Kratzer, mit einem speziellen Stift ausgebessert. Ich gebe sie ab, weil ich weniger schwarze Sachen will — aber für alle, die Schwarz lieben 🖤, ist das ein echter Fund.\n\nEdelstahl, hält Getränke warm/kalt, praktisch wie neu",
      "ru": "В нормальном состоянии. Есть пара незаметных царапин, замазанных специальным фломастером. Отказываюсь от неё, потому что хочу меньше чёрных вещей, но для тех, у кого цвет настроения чёрный 🖤 — хорошая находка.\n\nНержавеющая сталь, держит горячее/холодное, практически как новая",
      "uk": "У нормальному стані. Є пара непомітних подряпин, замазаних спеціальним фломастером. Відмовляюсь від неї, бо хочу менше чорних речей, але для тих, у кого колір настрою чорний 🖤 — це гарна знахідка.\n\nНержавіюча сталь, тримає гаряче/холодне, практично як нова",
      "es": "En buen estado. Tiene un par de rayones casi imperceptibles, retocados con un marcador especial. Me deshago de ella porque quiero menos cosas negras en mi vida, pero para quienes aman el negro 🖤, es un buen hallazgo.\n\nAcero inoxidable, mantiene bebidas frías/calientes, prácticamente como nueva",
      "zh": "状态良好。有几处几乎看不出的划痕，用专用记号笔修补过了。我想少一些黑色的东西所以出手 —— 但对于喜欢黑色的人 🖤，这绝对是个好东西。\n\n不锈钢材质，保温保冷，几乎和新的一样"
    },
    "category": "misc"
  },
  {
    "id": 9,
    "price": "3 €",
    "reserved": false,
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item9-1788521005707-n6x9.jpg"
    ],
    "title": {
      "en": "Hot water bottle with fleece cover — Fashy, from DM",
      "de": "Wärmflasche mit Fleecebezug — Fashy, von DM",
      "ru": "Грелка с флисовым чехлом — Fashy, из DM",
      "uk": "Грілка з флісовим чохлом — Fashy, з DM",
      "es": "Bolsa de agua caliente con funda de forro polar — Fashy, de DM",
      "zh": "绒面暖水袋 —— Fashy，购自DM"
    },
    "desc": {
      "en": "Used literally once. Selling because I'm into minimalism. But if you want to get cozy in bed under a blanket, with tea, cookies and Netflix, this bottle is exactly what you're missing!\n\nAnd if, like me, you love Majorelle blue 💙\n\nFleece cover, good condition, practically new",
      "de": "Buchstäblich einmal benutzt. Verkaufe sie, weil ich den Minimalismus liebe. Aber wenn du dich gemütlich ins Bett kuscheln willst, mit Decke, Tee, Keksen und Netflix, dann ist diese Wärmflasche genau das, was dir fehlt!\n\nUnd falls du, wie ich, Majorelle-Blau liebst 💙\n\nFleecebezug, guter Zustand, praktisch neu",
      "ru": "Использовал буквально один раз. Продаю, потому что люблю минимализм. Но если вам хочется уютно устроиться на кроватке под пледом, с чаем, печеньками и нетфликсом, эта грелка — как раз то, чего вам не хватает!\n\nА ещё — если вы, как я, любите мажорелево-синий 💙\n\nФлисовый чехол, хорошее состояние, практически новая",
      "uk": "Використав буквально один раз. Продаю, бо люблю мінімалізм. Але якщо вам хочеться затишно влаштуватись у ліжку під ковдрою, з чаєм, печивом і нетфліксом, ця грілка — саме те, чого вам не вистачає!\n\nА ще — якщо ви, як і я, любите мажорелевий синій 💙\n\nФліосвий чохол, хороший стан, практично нова",
      "es": "La usé literalmente una vez. La vendo porque me gusta el minimalismo. Pero si quieres acurrucarte en la cama bajo una manta, con té, galletas y Netflix, esta bolsa es justo lo que te falta!\n\nY si, como yo, te encanta el azul Majorelle 💙\n\nFunda de forro polar, buen estado, prácticamente nueva",
      "zh": "真的只用过一次。因为喜欢极简主义所以出售。但如果你想窝在床上，裹着毯子，配一杯茶、几块饼干和Netflix，这个暖水袋正是你缺的那一件！\n\n而且，如果你像我一样喜欢马约雷勒蓝 💙\n\n绒面外套，状态良好，几乎全新"
    },
    "category": "misc"
  },
  {
    "id": 10,
    "price": "2 €",
    "reserved": false,
    "condition": "new",
    "material": "",
    "size": "80x80 cm",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item10-1788523462109-chna.jpg"
    ],
    "title": {
      "en": "IKEA striped pillowcase, cotton",
      "de": "IKEA-Kissenbezug mit Streifen, Baumwolle",
      "ru": "Полосатая наволочка IKEA, хлопок",
      "uk": "Смугаста наволочка IKEA, бавовна",
      "es": "Funda de almohada a rayas de IKEA, algodón",
      "zh": "IKEA条纹枕套，纯棉"
    },
    "desc": {
      "en": "Almost new. Bought it right before moving from Lübeck to Hamburg — had a whole room layout planned in my head, and this pillowcase just didn't fit into it.\n\nColorful stripes: blue, pink, black, green, orange, beige 🌈\n\n100% cotton, practically unused",
      "de": "Fast neu. Gekauft kurz vor dem Umzug von Lübeck nach Hamburg — hatte mir das ganze Zimmer schon im Kopf ausgemalt, und dieser Kissenbezug hat einfach nicht dazu gepasst.\n\nBunte Streifen: Blau, Rosa, Schwarz, Grün, Orange, Beige 🌈\n\n100 % Baumwolle, praktisch ungenutzt",
      "ru": "Почти новая. Купил перед переездом из Любека в Гамбург, придумал в голове, как обустрою комнату, и эта наволочка в него не вписалась.\n\nЯркие полосы: синий, розовый, чёрный, зелёный, оранжевый, бежевый 🌈\n\n100% хлопок, практически не использовалась",
      "uk": "Майже нова. Купив перед переїздом з Любека до Гамбурга, придумав у голові, як облаштую кімнату, і ця наволочка в нього не вписалась.\n\nЯскраві смуги: синій, рожевий, чорний, зелений, оранжевий, бежевий 🌈\n\n100% бавовна, практично не використовувалась",
      "es": "Casi nueva. La compré justo antes de mudarme de Lübeck a Hamburgo — ya tenía toda la habitación planeada en mi cabeza, y esta funda simplemente no encajaba.\n\nRayas coloridas: azul, rosa, negro, verde, naranja, beige 🌈\n\n100% algodón, prácticamente sin usar",
      "zh": "几乎全新。是在从吕贝克搬到汉堡之前买的 —— 当时脑子里已经把房间布置好了，结果这个枕套没能融入进去。\n\n彩色条纹：蓝、粉、黑、绿、橙、米色 🌈\n\n100% 纯棉，几乎没用过"
    },
    "category": "misc"
  },
  {
    "id": 14,
    "price": "175 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Glinde, Möllner Landstraße 89  ",
      "de": "",
      "ru": "",
      "uk": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item14-1788543649832-xdkh.jpg",
      "images/item14-1788543649955-zqf8.jpg",
      "images/item14-1788543650035-u8nm.jpg"
    ],
    "title": {
      "en": "Bomann WA 7175 washing machine, 7 kg, 1400 rpm",
      "de": "Bomann WA 7175 Waschmaschine, 7 kg, 1400 U/min",
      "ru": "Стиральная машина Bomann WA 7175, 7 кг, 1400 об/мин",
      "uk": "Пральна машина Bomann WA 7175, 7 кг, 1400 об/хв",
      "es": "Lavadora Bomann WA 7175, 7 kg, 1400 rpm",
      "zh": "Bomann WA 7175 洗衣机，7公斤，1400转/分钟"
    },
    "desc": {
      "en": "Bought a year ago. In excellent condition, though there are a couple of scratches on the housing — otherwise a great machine.\n\nComes with an anti-vibration mat that keeps it from shaking and shifting during the spin cycle.\n\nBought for €300, letting it go for €175 🧺\n\nPickup only, from Glinde (10 minutes from Hamburg).",
      "de": "Vor einem Jahr gekauft. In sehr gutem Zustand, ein paar Kratzer am Gehäuse, sonst eine tolle Maschine.\n\nInklusive Antivibrationsmatte, die dafür sorgt, dass sie beim Schleudern nicht wandert und wackelt.\n\nGekauft für 300 €, gebe sie für 175 € ab 🧺\n\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Купил год назад. В отличном состоянии, есть пара царапин на корпусе, в остальном отличная машинка.\n\nОтдаю вместе с антивибрационным ковриком (Antivibrationsmatte) — он защищает от дрожания и \"сползания\" машинки при отжиме.\n\nКупил за 300 €, отдам за 175 € 🧺\n\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Купив рік тому. У відмінному стані, є пара подряпин на корпусі, в іншому чудова машинка.\n\nВіддаю разом з антивібраційним килимком (Antivibrationsmatte) — він захищає від тремтіння і \"сповзання\" машинки під час віджиму.\n\nКупив за 300 €, віддам за 175 € 🧺\n\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "La compré hace un año. En excelente estado, tiene un par de rayones en la carcasa, por lo demás es una máquina estupenda.\n\nSe entrega con una alfombra antivibración que evita que se mueva o vibre durante el centrifugado.\n\nLa compré por 300 €, la dejo en 175 € 🧺\n\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "一年前买的。状态非常好，外壳上有几处划痕，其他方面都很棒。\n\n附赠一块防震垫（Antivibrationsmatte），可以防止甩干时机器晃动和\"走位\"。\n\n购买价300欧元，现在175欧元出手 🧺\n\n仅限自取，地点在Glinde，Möllner Landstraße 89（距汉堡10分钟车程）。"
    },
    "category": "tech"
  },
  {
    "id": 13,
    "price": "25 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item13-1788541995741-trtu.jpg",
      "images/item13-1788541995838-30d6.jpg",
      "images/item13-1788541995905-ncn9.jpg",
      "images/item13-1788541995967-623t.jpg",
      "images/item13-1788542004842-vv94.jpg"
    ],
    "title": {
      "en": "Phone lock box for focused work — against getting sucked into Instagram and doomscrolling",
      "de": "Handy-Schließbox für fokussiertes Arbeiten — gegen Instagram-Sog und Doomscrolling",
      "ru": "Локер для телефона для сфокусированной работы — против залипания в инстаграме и думскроллинга",
      "uk": "Локер для телефону для сфокусованої роботи — проти залипання в інстаграмі та думскролінгу",
      "es": "Caja bloqueadora para el móvil, para trabajo enfocado — contra el enganche a Instagram y el doomscrolling",
      "zh": "专注工作手机锁盒 —— 对抗刷Instagram停不下来和无尽刷屏（doomscrolling）"
    },
    "desc": {
      "en": "A locker for your phone from the British brand Virtus Project. Genius, really: you put your phone in, set a time from 5 minutes to several hours, and it locks. If an urgent call comes in, there's a little pad you can push out to answer it — but against distractions like messengers, TikTok and reels, it's iron-clad. No expensive apps or extensions you end up bypassing anyway — this actually works!\n\nIf you're ADHD like me, this thing will finally help you find some zen. And if you have a TikTok-addicted kid, it's a solid nudge toward homework.\n\nIf I didn't need the cash right now, I wouldn't be selling it. Cost me €70 shipped from the UK, worth every cent. Letting it go for €25! 🐈‍⬛",
      "de": "Eine Sperrbox für dein Handy von der britischen Marke Virtus Project. Wirklich genial: Handy rein, Zeit einstellen (5 Minuten bis mehrere Stunden), und es ist gesperrt. Kommt ein dringender Anruf rein, gibt es ein kleines Pad, das man raushebeln kann, um ranzugehen — aber gegen Ablenkungen wie Messenger, TikTok und Reels ist es eisenhart. Keine teuren Apps oder Erweiterungen, die man am Ende doch umgeht — das funktioniert wirklich!\n\nWenn du auch ADHS hast wie ich, wird dir das Ding endlich zu etwas Zen im Kopf verhelfen. Und falls du ein TikTok-süchtiges Kind hast, ist es ein guter Anstoß Richtung Lernen.\n\nWenn ich das Geld jetzt nicht bräuchte, würde ich es nicht verkaufen. Mit Versand aus Großbritannien hat es 70 € gekostet, war's aber wert. Für 25 € gebe ich es ab! 🐈‍⬛",
      "ru": "Локер для телефона от британской фирмы Virtus Project. Классная штука: кладёшь телефон, ставишь время от 5 минут до нескольких часов — и локер блокирует его. Если будет срочный звонок, там есть подушечка, которую можно вытолкнуть и ответить. А вот от отвлечений типа мессенджеров, тиктока и рилсов защищает железно. Никаких дорогих приложений и расширений, которые всё равно можно обойти — тут реально работает!\n\nЕсли вы такой же СДВГшник, как я, эта штука наконец поможет обрести дзен. А если у вас тикток-зависимый ребёнок — хороший способ подтолкнуть его к учёбе.\n\nЕсли бы не нужны были деньги прямо сейчас, не продавал бы. С доставкой из Британии обошлось в 70 евро, но того стоило. Отдам за 25! 🐈‍⬛",
      "uk": "Локер для телефону від британської фірми Virtus Project. Класна річ: кладеш телефон, ставиш час від 5 хвилин до кількох годин — і локер блокує його. Якщо буде терміновий дзвінок, там є подушечка, яку можна виштовхнути і відповісти. А от від відволікань типу месенджерів, тіктоку та рілсів захищає залізно. Ніяких дорогих застосунків і розширень, які все одно можна обійти — тут реально працює!\n\nЯкщо ви такий же СДУГшник, як я, ця штука нарешті допоможе знайти дзен. А якщо у вас тікток-залежна дитина — хороший спосіб підштовхнути її до навчання.\n\nЯкби не потрібні були гроші прямо зараз, не продавав би. З доставкою з Британії вийшло 70 євро, але воно того вартувало. Віддам за 25! 🐈‍⬛",
      "es": "Una caja bloqueadora para el móvil de la marca británica Virtus Project. Genial de verdad: metes el móvil, pones un tiempo de entre 5 minutos y varias horas, y se bloquea. Si entra una llamada urgente, hay una pequeña almohadilla que puedes empujar hacia fuera para contestar — pero contra distracciones como mensajería, TikTok y reels, es de hierro. Nada de apps o extensiones caras que al final siempre acabas evitando — esto sí funciona!\n\nSi eres TDAH como yo, esto por fin te va a ayudar a encontrar algo de paz mental. Y si tienes un hijo adicto a TikTok, es un buen empujón hacia los estudios.\n\nSi no necesitara el dinero ahora mismo, no lo vendería. Con el envío desde Reino Unido me costó 70 €, pero mereció la pena. ¡Lo dejo en 25 €! 🐈‍⬛",
      "zh": "一个来自英国品牌 Virtus Project 的手机锁盒。真的很好用：把手机放进去，设定5分钟到几个小时的时间，它就会锁住。如果有紧急电话，上面有个小垫可以顶出来接听 —— 但对于消息软件、抖音、reels这类干扰，它是铁面无私的。不用买昂贵的App或插件、最后还是会被绕过去 —— 这个真的管用！\n\n如果你也像我一样有多动症/注意力不集中的问题，这东西终于能帮你找回一点平静。如果你家孩子沉迷抖音/TikTok，这也是推他去学习的好办法。\n\n如果不是现在急需用钱，我是不会卖的。从英国寄过来花了70欧元，但真的值。现在25欧元出手！🐈‍⬛"
    },
    "category": "tech"
  },
  {
    "id": 12,
    "price": "6 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item12-1788531104777-phxc.jpg",
      "images/item12-1788531104896-4s5m.jpg"
    ],
    "title": {
      "en": "USB-C hub — Deppa",
      "de": "USB-C-Hub — Deppa",
      "ru": "USB-C-хаб — Deppa",
      "uk": "USB-C-хаб — Deppa",
      "es": "Hub USB-C — Deppa",
      "zh": "USB-C 扩展器 —— Deppa"
    },
    "desc": {
      "en": "Compact USB-C hub with plenty of extra ports for a laptop that's a bit too minimalist.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× memory card slot (SD/microSD)\n\nWorks perfectly, good condition ",
      "de": "Kompakter USB-C-Hub mit genug zusätzlichen Anschlüssen für einen Laptop, der es mit dem Minimalismus etwas übertrieben hat.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× Speicherkartenslot (SD/microSD)\n\nFunktioniert einwandfrei, guter Zustand",
      "ru": "Компактный USB-C хаб с набором портов для макбука\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× слот для карты памяти (SD/microSD)\n\nРаботает исправно, хорошее состояние",
      "uk": "Компактний USB-C хаб з набором портів для макбука\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× слот для картки пам'яті (SD/microSD)\n\nПрацює справно, хороший стан",
      "es": "Hub USB-C compacto con varios puertos extra, para ese portátil que se pasó de minimalista.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× ranura para tarjeta de memoria (SD/microSD)\n\nFunciona perfectamente, buen estado",
      "zh": "小巧的USB-C扩展器，为那些接口太\"极简\"的笔记本电脑补上急需的端口。\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× 存储卡插槽（SD/microSD）\n\n功能正常，状态良好"
    },
    "category": "tech"
  },
  {
    "id": 15,
    "price": "45 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item15-1788546428704-2t1f.jpg",
      "images/item15-1788546428804-lvwr.jpg",
      "images/item15-1788546428872-egpr.jpg",
      "images/item15-1788546428937-9t8c.jpg"
    ],
    "title": {
      "en": "IKEA BRUKSVARA wardrobe with sliding doors, 80×191 cm",
      "de": "IKEA BRUKSVARA Kleiderschrank mit Schiebetüren, 80×191 cm",
      "ru": "Шкаф IKEA BRUKSVARA с раздвижными дверями, 80×191 см",
      "uk": "Шафа IKEA BRUKSVARA з розсувними дверима, 80×191 см",
      "es": "Armario IKEA BRUKSVARA con puertas correderas, 80×191 cm",
      "zh": "IKEA BRUKSVARA 推拉门衣柜，80×191厘米"
    },
    "desc": {
      "en": "Great wardrobe, plenty of storage space. Comes with a bonus: a fabric insert with compartments for storing things, for free.\n\nOnly downside: I chipped the back panel slightly during assembly, but I painted over it with white paint and you really can't see it.\n\nNew price is €99, letting it go for €45 📦\n\nPickup only, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg).",
      "de": "Toller Schrank mit viel Stauraum. Dazu gibt's als Bonus einen Stoffeinsatz mit Fächern zur Aufbewahrung von Sachen, gratis dazu.\n\nEinziges Manko: Beim Aufbau habe ich die Rückwand leicht beschädigt, aber mit weißer Farbe übermalt — man sieht wirklich nichts mehr davon.\n\nNeupreis liegt bei 99 €, gebe ihn für 45 € ab 📦\n\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Отличный шкаф, много места для хранения. В подарок идёт тканая вставка с отсеками для вещей.\n\nЕдинственный минус: при сборке чуть повредил заднюю стенку, но замазал белой краской — вообще ничего не заметно.\n\nНовый стоит 99 €, отдам за 45 € 📦\n\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Чудова шафа, багато місця для зберігання. У подарунок йде тканинна вставка з відсіками для речей.\n\nЄдиний мінус: під час збирання трохи пошкодив задню стінку, але замазав білою фарбою — взагалі непомітно.\n\nНова коштує 99 €, віддам за 45 € 📦\n\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "Armario estupendo, con mucho espacio de almacenamiento. Incluye de regalo un organizador de tela con compartimentos para guardar cosas.\n\nÚnico inconveniente: durante el montaje dañé un poco el panel trasero, pero lo tapé con pintura blanca — de verdad no se nota nada.\n\nEl precio nuevo es de 99 €, lo dejo en 45 € 📦\n\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "很棒的衣柜，收纳空间很大。附赠一个带收纳格的布艺插件，可以分类放东西。\n\n唯一的小瑕疵：组装时不小心碰坏了一点背板，但用白色油漆涂了一下，基本看不出来。\n\n全新售价99欧元，现在45欧元出手 📦\n\n仅限自取，地点在Glinde，Möllner Landstraße 89（距汉堡10分钟车程）。"
    },
    "category": "furniture"
  },
  {
    "id": 16,
    "price": "25 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "",
    "size": "140×60 cm",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item16-1788597103301-1icf.jpg",
      "images/item16-1788597103403-u80m.jpg",
      "images/item16-1788597103538-b984.jpg"
    ],
    "title": {
      "en": "IKEA LAGKAPTEN / ADILS desk, oak effect/white",
      "de": "IKEA LAGKAPTEN / ADILS Schreibtisch, Eicheneffekt/weiß ",
      "ru": "Стол IKEA LAGKAPTEN / ADILS, эффект дуба/белый ",
      "uk": "Стіл IKEA LAGKAPTEN / ADILS, ефект дуба/білий ",
      "es": "Escritorio IKEA LAGKAPTEN / ADILS, efecto roble/blanco ",
      "zh": "IKEA LAGKAPTEN / ADILS 书桌，橡木纹/白色，140×60厘米"
    },
    "desc": {
      "en": "Solid, spacious desk — great for a home office or study setup. In perfect condition, no scratches or marks.\n\nNew price is €45, letting it go for €25 📦\n\nPickup only, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg).",
      "de": "Stabiler, geräumiger Schreibtisch — super fürs Homeoffice oder zum Lernen. In einwandfreiem Zustand, keine Kratzer oder Macken.\n\nNeupreis liegt bei 45 €, gebe ihn für 25 € ab 📦\n\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Прочный, просторный стол — отлично подойдёт для домашнего офиса или учёбы. В идеальном состоянии, без царапин и следов использования.\n\nНовый стоит 45 €, отдам за 25 € 📦\n\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Міцний, просторий стіл — чудово підійде для домашнього офісу або навчання. У ідеальному стані, без подряпин і слідів використання.\n\nНовий коштує 45 €, віддам за 25 € 📦\n\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "Escritorio resistente y espacioso — perfecto para teletrabajo o estudio. En perfecto estado, sin rayones ni marcas.\n\nEl precio nuevo es de 45 €, lo dejo en 25 € 📦\n\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "结实宽敞的书桌，非常适合居家办公或学习。状态完美，没有划痕或使用痕迹。\n\n全新售价45欧元，现在25欧元出手 📦\n\n仅限自取，地点在Glinde，Möllner Landstraße 89（距汉堡10分钟车程）。"
    }
  },
  {
    "id": 17,
    "price": "10 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "",
    "size": "45×45×79 cm",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item17-1788599078203-gvk6.jpg"
    ],
    "title": {
      "en": "IKEA VIHALS chair, white",
      "de": "IKEA VIHALS Stuhl, weiß",
      "ru": "Стул IKEA VIHALS, белый",
      "uk": "Стілець IKEA VIHALS, білий",
      "es": "Silla IKEA VIHALS, blanca",
      "zh": "IKEA VIHALS 白色椅子"
    },
    "desc": {
      "en": "Comfortable and minimalist IKEA chair — works well both at a dining table and at a desk. I used it for both, and in my new apartment I didn’t even buy an office chair: this chair naturally keeps your back straight, while still being comfortable to sit on 🦦\nDimensions: 45×45×79 cm; seat height 45 cm, seat width 39 cm, seat depth 40 cm.\nNew price is €19.99, letting it go for €10 🪑\nPickup only, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg).",
      "de": "Bequemer und minimalistischer IKEA-Stuhl — passt sowohl an den Esstisch als auch an den Schreibtisch. Ich habe ihn für beides benutzt und mir in der neuen Wohnung nicht einmal einen Bürostuhl gekauft: Auf diesem Stuhl bleibt der Rücken ganz natürlich gerade, und trotzdem sitzt man immer bequem 🦦\nMaße: 45×45×79 cm; Sitzhöhe 45 cm, Sitzbreite 39 cm, Sitztiefe 40 cm.\nNeupreis liegt bei 19,99 €, gebe ihn für 10 € ab 🪑\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Удобный и минималистичный стул IKEA — хорошо подойдёт и к обеденному, и к рабочему столу. Я сидел на нём и там, и там, и в новой квартире даже не стал покупать рабочее кресло: спина на этом стуле сама держится прямо, а сидеть всегда как-то удобно 🦦\nГабариты: 45×45×79 см; высота сиденья — 45 см, ширина сиденья — 39 см, глубина сиденья — 40 см.\nНовый стоит 19,99 €, отдам за 10 € 🪑\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Зручний і мінімалістичний стілець IKEA — добре підійде і до обіднього, і до робочого столу. Я сидів на ньому і там, і там, і в новій квартирі навіть не став купувати офісне крісло: спина на цьому стільці сама тримається рівно, а сидіти завжди якось зручно 🦦\nГабарити: 45×45×79 см; висота сидіння — 45 см, ширина сидіння — 39 см, глибина сидіння — 40 см.\nНовий коштує 19,99 €, віддам за 10 € 🪑\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "Silla IKEA cómoda y minimalista — funciona muy bien tanto con una mesa de comedor como con un escritorio. La usé para ambas cosas y, en mi nuevo piso, ni siquiera compré una silla de oficina: en esta silla la espalda se mantiene recta de manera natural y sigue siendo cómoda para sentarse 🦦\nMedidas: 45×45×79 cm; altura del asiento 45 cm, ancho del asiento 39 cm y fondo del asiento 40 cm.\nEl precio nuevo es de 19,99 €, la dejo en 10 € 🪑\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "舒适又简约的 IKEA 椅子，放在餐桌或书桌旁都很合适。我两种场景都坐过；搬进新公寓后，我甚至没有买办公椅，因为坐在这把椅子上背部会自然保持挺直，同时一直坐得很舒服 🦦\n尺寸：45×45×79 厘米；座高 45 厘米，座宽 39 厘米，座深 40 厘米。\n全新售价 19.99 欧元，现在 10 欧元出手 🪑\n仅限自取，地点在 Glinde，Möllner Landstraße 89（距汉堡 10 分钟车程）。"
    }
  },
  {
    "id": 18,
    "price": "100 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "",
    "size": "140×200 cm",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item18-1788600758779-o7d1.jpg",
      "images/item18-1788600758886-9l8g.jpg",
      "images/item18-1788600758962-wchq.jpg"
    ],
    "title": {
      "en": "IKEA ASKVOLL bed frame, white, 140×200 cm",
      "de": "IKEA ASKVOLL Bettgestell, weiß, 140×200 cm",
      "ru": "Кровать IKEA ASKVOLL, белая, 140×200 см",
      "uk": "Ліжко IKEA ASKVOLL, біле, 140×200 см",
      "es": "Estructura de cama IKEA ASKVOLL, blanca, 140×200 cm",
      "zh": "IKEA ASKVOLL 白色床架，140×200 厘米"
    },
    "desc": {
      "en": "Simple and minimalist white IKEA bed — it looks light in the room and fits well even in a smaller bedroom. In my small studio, it served both as a place to rest and as extra storage: there was plenty of room underneath for winter clothes. Selling it together with two slatted bed bases. Mattress is not for sale (for now) 💤\nDimensions: mattress size 140×200 cm. Headboard height 77 cm, footboard height 43 cm.\nThe bed frame costs €99 new, and the two slatted bed bases cost almost €100 — selling everything together for €100 🛏️\nPickup only, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg).",
      "de": "Schlichtes und minimalistisches IKEA-Bett in Weiß — es wirkt leicht im Raum und passt auch gut in ein kleineres Schlafzimmer. In meinem kleinen Studio war es sowohl ein Ort zum Ausruhen als auch zusätzlicher Stauraum: Unter dem Bett war viel Platz für Wintersachen. Verkauft wird es zusammen mit zwei Lattenrosten. Die Matratze verkaufe ich (vorerst) nicht 💤\nMaße: Matratzengröße 140×200 cm. Kopfteilhöhe 77 cm, Fußteilhöhe 43 cm.\nDas Bettgestell kostet neu 99 €, die beiden Lattenroste fast 100 € — alles zusammen für 100 € 🛏️\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Простая и минималистичная белая кровать IKEA — выглядит легко в комнате и хорошо подойдёт даже для небольшой спальни. В моей маленькой студии она служила мне и местом отдыха, и кладовкой — под кроватью поместилось много зимних вещей. Продаю вместе с двумя ламельными основаниями. Матрас — (пока) не продаю 💤\nГабариты: спальное место 140×200 см. Высота изголовья — 77 см, изножья — 43 см.\nНовая кровать стоит 99 €, а две пары ламелей — почти 100 €; отдам всё вместе за 100 € 🛏️\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Просте й мінімалістичне біле ліжко IKEA — виглядає легко в кімнаті та добре підійде навіть для невеликої спальні. У моїй маленькій студії воно було і місцем для відпочинку, і додатковим місцем для зберігання: під ліжком помістилося багато зимових речей. Продаю разом із двома ламельними основами. Матрац — (поки що) не продаю 💤\nГабарити: спальне місце 140×200 см. Висота узголів’я — 77 см, узніжжя — 43 см.\nНове ліжко коштує 99 €, а дві ламельні основи — майже 100 €; віддам усе разом за 100 € 🛏️\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "Cama IKEA blanca, sencilla y minimalista — se ve ligera en la habitación y queda bien incluso en un dormitorio pequeño. En mi pequeño estudio, servía tanto como lugar de descanso como espacio de almacenamiento: debajo de la cama cabían muchas cosas de invierno. La vendo junto con dos somieres de láminas. El colchón (por ahora) no está a la venta 💤\nMedidas: tamaño de colchón 140×200 cm. Altura del cabecero: 77 cm; altura del pie de cama: 43 cm.\nLa estructura nueva cuesta 99 € y los dos somieres de láminas casi 100 € — lo dejo todo junto por 100 € 🛏️\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "简约、极简风格的白色 IKEA 床，在房间里看起来很轻盈，即使是较小的卧室也很适合。在我的小型单间公寓里，它既是休息的地方，也是额外的储物空间：床下可以放下很多冬季衣物。床架与两套排骨架一起出售。床垫**（暂时）不出售** 💤\n尺寸：适用床垫尺寸为 140×200 厘米。床头板高 77 厘米，床尾板高 43 厘米。\n全新床架售价 99 欧元，两套排骨架接近 100 欧元；现在全部一起 100 欧元出手 🛏️\n仅限自取，地点在 Glinde，Möllner Landstraße 89（距汉堡 10 分钟车程）。"
    }
  },
  {
    "id": 19,
    "price": "49 €",
    "reserved": false,
    "hidden": false,
    "category": "tech",
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item19-1788602683882-f6wb.jpg",
      "images/item19-1788602684050-5yk9.jpg"
    ],
    "title": {
      "en": "IKEA TILLREDA microwave, white",
      "de": "IKEA TILLREDA Mikrowelle, weiß",
      "ru": "Микроволновка IKEA TILLREDA, белая",
      "uk": "Мікрохвильовка IKEA TILLREDA, біла",
      "es": "Microondas IKEA TILLREDA, blanco",
      "zh": "IKEA TILLREDA 白色微波炉"
    },
    "desc": {
      "en": "Minimalist white IKEA microwave with very simple controls — just two knobs, so nothing extra to figure out. It is around a year old and looks almost new. Great for reheating food, making a quick meal, or warming up tea or coffee.\nDimensions: 43.9×34×25.8 cm. Capacity: 20 L. Power: 700 W.\nNew price is €69, letting it go for €49 🍽️\nPickup is preferred, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg). I can try to bring it to central Hamburg if needed.",
      "de": "Minimalistische weiße IKEA-Mikrowelle mit sehr einfacher Bedienung — nur zwei Drehknöpfe, also kein unnötiger Schnickschnack. Sie ist etwa ein Jahr alt und sieht fast wie neu aus. Super zum Aufwärmen von Essen, für eine schnelle Mahlzeit oder um Tee und Kaffee warm zu machen.\nMaße: 43,9×34×25,8 cm. Fassungsvermögen: 20 l. Leistung: 700 W.\nNeupreis liegt bei 69 €, gebe sie für 49 € ab 🍽️\nAbholung in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt), ist am besten. Falls nötig, kann ich versuchen, sie bis in die Hamburger Innenstadt zu bringen.",
      "ru": "Белая минималистичная микроволновка IKEA с очень простым управлением — всего две крутилки, ничего лишнего. Ей около года, выглядит почти как новая. Хорошо подойдёт, чтобы разогревать еду, быстро что-то приготовить или согреть чай и кофе.\nГабариты: 43,9×34×25,8 см. Объём: 20 л. Мощность: 700 Вт.\nНовая стоит 69 €, отдам за 49 € 🍽️\nЛучше самовывоз из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга). Но при необходимости могу постараться довезти до центра Гамбурга.",
      "uk": "Біла мінімалістична мікрохвильовка IKEA з дуже простим керуванням — лише дві ручки, нічого зайвого. Їй близько року, виглядає майже як нова. Добре підійде, щоб розігрівати їжу, швидко щось приготувати або підігріти чай чи каву.\nГабарити: 43,9×34×25,8 см. Об’єм: 20 л. Потужність: 700 Вт.\nНова коштує 69 €, віддам за 49 € 🍽️\nКраще самовивіз із Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга). Але за потреби можу спробувати привезти до центру Гамбурга.",
      "es": "Microondas IKEA blanco y minimalista, con controles muy sencillos: solo dos mandos, sin nada innecesario. Tiene alrededor de un año y parece casi nuevo. Va muy bien para calentar comida, preparar algo rápido o recalentar té y café.\nMedidas: 43,9×34×25,8 cm. Capacidad: 20 L. Potencia: 700 W.\nEl precio nuevo es de 69 €, lo dejo en 49 € 🍽️\nEs preferible recogerlo en Glinde, Möllner Landstraße 89 (a 10 minutos de Hamburgo). Pero, si hace falta, puedo intentar llevarlo al centro de Hamburgo.",
      "zh": "白色极简风格的 IKEA 微波炉，操作非常简单——只有两个旋钮，没有多余的功能需要研究。使用约一年，看起来几乎像新的一样。很适合加热饭菜、快速准备食物，或加热茶和咖啡。\n尺寸：43.9×34×25.8 厘米。容量：20 升。功率：700 瓦。\n全新售价 69 欧元，现在 49 欧元出手 🍽️\n最好在 Glinde 的 Möllner Landstraße 89 自取（距汉堡约 10 分钟）。如有需要，我也可以尽量送到汉堡市中心。"
    }
  },
  {
    "id": 20,
    "price": "35 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item20-1788602888826-hx6z.jpg",
      "images/item20-1788602888958-ht2p.jpg",
      "images/item20-1788602889087-phjp.jpg",
      "images/item20-1788603098967-fqyw.jpg"
    ],
    "title": {
      "en": "IKEA VIHALS table, white/white, 125×74 cm",
      "de": "IKEA VIHALS Tisch, weiß/weiß, 125×74 cm",
      "ru": "Стол IKEA VIHALS, белый, 125×74 см",
      "uk": "Стіл IKEA VIHALS, білий, 125×74 см",
      "es": "Mesa IKEA VIHALS, blanca, 125×74 cm",
      "zh": "IKEA VIHALS 白色桌子，125×74 厘米"
    },
    "desc": {
      "en": "A great, spacious desk in clean white — minimalist, sturdy, and just the right height. I could sit at it for a long time without getting tired. The length and width are honestly excellent: it comfortably fit my computer, keyboard, large speakers, phone stand, books, notebooks, and plenty of other things at the same time. In short, a really great table for work. There are a couple of small, barely noticeable scratches near the edges, but overall it is in excellent condition.\nDimensions: 125×74 cm, height 75 cm.\nNew price is €59.99, letting it go for €35 🖥️\nPickup only, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg).",
      "de": "Ein toller, geräumiger Tisch in schlichtem Weiß — minimalistisch, stabil und genau in der richtigen Höhe. Ich konnte lange daran sitzen, ohne müde zu werden. Die Länge und Breite sind wirklich super: Computer, Tastatur, große Lautsprecher, Handyhalterung, Bücher, Hefte und noch viele andere Sachen hatten gleichzeitig bequem Platz. Kurz gesagt: ein richtig guter Tisch zum Arbeiten. An den Kanten gibt es ein paar kleine, kaum sichtbare Kratzer, aber insgesamt ist er in sehr gutem Zustand.\nMaße: 125×74 cm, Höhe 75 cm.\nNeupreis liegt bei 59,99 €, gebe ihn für 35 € ab 🖥️\nNur Abholung, in Glinde, Möllner Landstraße 89 (10 Minuten von Hamburg entfernt).",
      "ru": "Классный просторный белый стол — минималистичный, устойчивый и идеальной высоты. Я мог долго сидеть за ним и не уставать. Длина и ширина вообще отличные: спокойно помещались компьютер, клавиатура, большие колонки, подставка для телефона, книги, тетради и ещё куча всего одновременно. Короче, прекрасный стол для работы. Есть пара небольших, почти незаметных царапин у кромок, но в целом стол в отличном состоянии.\nГабариты: 125×74 см, высота — 75 см.\nНовый стоит 59,99 €, отдам за 35 € 🖥️\nТолько самовывоз, из Глинде, Möllner Landstraße 89 (10 минут от Гамбурга).",
      "uk": "Класний просторий білий стіл — мінімалістичний, стійкий і ідеальної висоти. Я міг довго сидіти за ним і не втомлюватися. Довжина та ширина взагалі чудові: спокійно поміщалися комп’ютер, клавіатура, великі колонки, підставка для телефона, книжки, зошити та ще купа всього одночасно. Коротко кажучи, чудовий стіл для роботи. Біля країв є кілька невеликих, майже непомітних подряпин, але загалом стіл у чудовому стані.\nГабарити: 125×74 см, висота — 75 см.\nНовий коштує 59,99 €, віддам за 35 € 🖥️\nЛише самовивіз, з Глінде, Möllner Landstraße 89 (10 хвилин від Гамбурга).",
      "es": "Una mesa blanca, amplia y genial — minimalista, estable y con la altura perfecta. Podía sentarme a trabajar en ella durante mucho tiempo sin cansarme. El largo y el ancho son realmente muy buenos: cabían cómodamente el ordenador, el teclado, altavoces grandes, un soporte para el móvil, libros, cuadernos y muchas otras cosas al mismo tiempo. En resumen, es una mesa estupenda para trabajar. Tiene un par de rayones pequeños y apenas visibles cerca de los bordes, pero en general está en muy buen estado.\nMedidas: 125×74 cm, altura 75 cm.\nEl precio nuevo es de 59,99 €, la dejo en 35 € 🖥️\nSolo recogida en persona, en Glinde, Möllner Landstraße 89 (10 minutos de Hamburgo).",
      "zh": "很棒、宽敞的白色桌子——极简、稳固，高度也刚刚好。我可以在这里久坐工作也不会觉得累。桌面的长宽真的非常实用：电脑、键盘、大音箱、手机支架、书、本子以及很多其他东西都能同时轻松放下。总之，这是一张非常适合工作的桌子。边缘有几处很小、几乎不明显的划痕，但整体状态非常好。\n尺寸：125×74 厘米，高 75 厘米。\n全新售价 59.99 欧元，现在 35 欧元出手 🖥️\n仅限自取，地点在 Glinde，Möllner Landstraße 89（距汉堡 10 分钟车程）。\n\nСтол IKEA VIHALS действительно имеет размеры 125×74 см и высоту 75 см; текущая цена новой модели — 59,99 €. У модели меламиновая столешница, которую легко протирать, и стальное основание."
    }
  },
  {
    "id": 21,
    "price": "25 €",
    "reserved": false,
    "hidden": false,
    "category": "misc",
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt"
    },
    "images": [
      "images/item21-1788604125432-q21x.jpg",
      "images/item21-1788604125540-ua8a.jpg",
      "images/item21-1788604125629-a0ip.jpg"
    ],
    "title": {
      "en": "Camping set: Quechua sleeping bag + foam mat + blue mug",
      "de": "Camping-Set: Quechua Schlafsack + Isomatte + blaue Tasse",
      "ru": "Походный набор: спальник Quechua + пенка + синяя кружка",
      "uk": "Похідний набір: спальник Quechua + пінка + синя кружка",
      "es": "Set de camping: saco Quechua + esterilla de espuma + taza azul",
      "zh": "露营套装：Quechua 睡袋 + 泡沫垫 + 蓝色杯子"
    },
    "desc": {
      "en": "If you are a Dharma Bum like me and, after watching Into The Wild, wanted to leave everything behind and live in the forest forever, this camping set is for you. It also works perfectly well for festivals, trips, or unexpected overnight stays. Everything is in excellent condition 🎒\n\nThe sleeping bag is a QUECHUA Basic 20 °C model (190×72 cm). It can be fully opened and used as a blanket when it gets warm. The foam mat is thick yet lightweight and rolls up easily; it measures 180×50 cm. The sturdy blue metal camping mug comes in a lovely majorelle-blue shade, perfect for tea or coffee outdoors 🍵\n\nNew prices at Decathlon: sleeping bag €15, foam mat €9, mug around €10 — €34 for everything. I’m letting the full set go for €20 🏕️  \nAlso available separately: sleeping bag €10, foam mat €5, mug €5.  \nHandover at a U-Bahn or S-Bahn station in central Hamburg 🌿",
      "de": "Wenn du genauso ein Dharma-Bum bist wie ich und nach Into The Wild für immer in die Wälder ziehen wolltest, ist dieses Camping-Set genau das Richtige für dich. Natürlich eignet es sich auch einfach für Festivals, Ausflüge oder spontane Übernachtungen. Alles ist in ausgezeichnetem Zustand 🎒\n\nDer Schlafsack ist ein QUECHUA Basic 20 °C (190×72 cm). Er lässt sich komplett öffnen und bei Wärme auch als Decke benutzen. Die Schaumstoff-Isomatte ist dick, dabei leicht und lässt sich genauso einfach zusammenrollen; sie ist 180×50 cm groß. Die robuste blaue Metall-Campingtasse hat ein schönes Majorelle-Blau und passt perfekt für Tee oder Kaffee draußen 🍵\n\nNeupreise bei Decathlon: Schlafsack 15 €, Isomatte 9 €, Tasse etwa 10 € — zusammen also 34 €. Das ganze Set gebe ich für 20 € ab 🏕️  \nAuch einzeln erhältlich: Schlafsack 10 €, Isomatte 5 €, Tasse 5 €.  \nÜbergabe an einer U- oder S-Bahn-Station in der Hamburger Innenstadt 🌿",
      "ru": "Если вы такой же бродяга Дхармы, как я, и после просмотра «В диких условиях» хотели навсегда уйти в леса, этот походный набор для вас. Впрочем, подойдёт и просто для фестивалей, поездок или внезапных ночёвок. Всё в отличном состоянии 🎒\n\nСпальник — QUECHUA Basic 20 °C (190×72 см), его можно полностью расстегнуть и использовать как одеяло, если жарко. Пенка толстая, при этом лёгкая и так же легко сворачивается, размер — 180×50 см. Синяя металлическая походная кружка прочная, приятного мажорелевого цвета для чая или кофе на природе 🍵\n\nЦены на новое в Decathlon: спальник — 15 €, пенка — 9 €, кружка — около 10 € (то есть за всё 34 €). Я отдам весь набор за 20 € 🏕️  \nМожно и по отдельности: спальник — 10 €, пенка — 5 €, кружка — 5 €.  \nПередача на станции U-/S-Bahn в центральной части Гамбурга 🌿",
      "uk": "Якщо ви такий самий бродяга Дхарми, як і я, і після перегляду «У диких умовах» хотіли назавжди піти в ліси, цей похідний набір для вас. Утім, він також добре підійде для фестивалів, поїздок або несподіваних ночівель. Усе у відмінному стані 🎒\n\nСпальник — QUECHUA Basic 20 °C (190×72 см), його можна повністю розстебнути й використовувати як ковдру, якщо спекотно. Пінка товста, водночас легка й так само легко згортається, розмір — 180×50 см. Синя металева похідна кружка міцна, приємного мажорелевого кольору, для чаю або кави на природі ☕\n\nЦіни на нове в Decathlon: спальник — 15 €, пінка — 9 €, кружка — близько 10 € (тобто за все 34 €). Віддам увесь набір за 20 € 🏕️  \nМожна й окремо: спальник — 10 €, пінка — 5 €, кружка — 5 €.  \nПередача на станції U-/S-Bahn у центральній частині Гамбурга 🌿",
      "es": "Si eres un vagabundo del Dharma como yo y, después de ver Hacia rutas salvajes, quisiste irte a vivir para siempre en los bosques, este set de camping es para ti. También viene muy bien para festivales, viajes o noches improvisadas fuera de casa. Todo está en excelente estado 🎒\n\nEl saco de dormir es un QUECHUA Basic 20 °C (190×72 cm); se puede abrir completamente y utilizar como manta cuando hace calor. La esterilla de espuma es gruesa, pero ligera y fácil de enrollar; mide 180×50 cm. La resistente taza de camping azul de metal tiene un agradable color azul Majorelle, perfecta para té o café al aire libre 🍵\n\nPrecios nuevos en Decathlon: saco 15 €, esterilla 9 € y taza alrededor de 10 € — en total 34 €. Dejo todo el set por 20 € 🏕️  \nTambién se puede comprar por separado: saco 10 €, esterilla 5 € y taza 5 €.  \nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 🌿",
      "zh": "如果你和我一样是个“达摩流浪者”，看完《荒野生存》后曾想永远走进森林，那么这套露营装备就是为你准备的。当然，它也很适合音乐节、旅行或临时过夜。所有物品都处于极佳状态 🎒\n\n睡袋是 QUECHUA Basic 20 °C 款（190×72 厘米），天气暖和时可以完全打开，当作毯子使用。泡沫防潮垫较厚，同时轻便且容易卷起，尺寸为 180×50 厘米。蓝色金属露营杯结实耐用，是很舒服的马若雷勒蓝色，适合在户外喝茶或咖啡 🍵\n\nDecathlon 的全新价格：睡袋 15 欧元、泡沫垫 9 欧元、杯子约 10 欧元——总计 34 欧元。整套一起 20 欧元出手 🏕️  \n也可以单独购买：睡袋 10 欧元、泡沫垫 5 欧元、杯子 5 欧元。  \n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 🌿"
    }
  },
  {
    "id": 22,
    "price": "7 €",
    "reserved": false,
    "hidden": false,
    "category": "misc",
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt"
    },
    "images": [
      "images/item22-1788605535389-76ry.jpg",
      "images/item22-1788605535506-jqp1.jpg"
    ],
    "title": {
      "en": "Rare Spanish-language book: La otra voz: Poesía y fin de siglo — Octavio Paz 🇲🇽",
      "de": "Seltenes spanischsprachiges Buch: La otra voz: Poesía y fin de siglo — Octavio Paz 🇲🇽",
      "ru": "Книга на испанском: La otra voz: Poesía y fin de siglo — Октавио Пас 🇲🇽",
      "uk": "Книга іспанською: La otra voz: Poesía y fin de siglo — Октавіо Пас 🇲🇽",
      "es": "Libro raro en español: La otra voz: Poesía y fin de siglo — Octavio Paz 🇲🇽",
      "zh": "珍稀西班牙语书籍：La otra voz: Poesía y fin de siglo《另一种声音：诗歌与世纪末》— 奥克塔维奥·帕斯 🇲🇽"
    },
    "desc": {
      "en": "A rare Spanish-language edition by Octavio Paz — one of the most important Spanish-language thinkers and writers of the 20th century, a Mexican poet, essayist, and Nobel Prize winner in Literature. This is a collection of essays about poetry, modernity, and the end of the century; a thoughtful find for anyone interested in literature, philosophy, and the Spanish-speaking world 📚\n\nPublished by Seix Barral in 1990, the same year Paz received the Nobel Prize in Literature. Paperback, 141 pages, in good condition. A beautiful small book to keep on a shelf, take on a trip, or give to someone who reads Spanish 🇲🇽\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg 📖",
      "de": "Eine seltene spanischsprachige Ausgabe von Octavio Paz — einem der wichtigsten spanischsprachigen Denker und Schriftsteller des 20. Jahrhunderts, mexikanischem Dichter und Essayisten sowie Literaturnobelpreisträger. Es ist eine Essaysammlung über Poesie, Moderne und das Ende des Jahrhunderts; für alle, die sich für Literatur, Philosophie und die spanischsprachige Welt interessieren 📚\n\nErschienen bei Seix Barral im Jahr 1990 — im selben Jahr, in dem Paz den Nobelpreis für Literatur erhielt. Taschenbuch mit 141 Seiten, in gutem Zustand. Eine schöne kleine Ausgabe fürs Regal, für unterwegs oder als Geschenk für jemanden, der Spanisch liest 🇲🇽\n\nÜbergabe an einer U- oder S-Bahn-Station in der Hamburger Innenstadt 📖",
      "ru": "Раритетное испаноязычное издание Октавио Паса — одного из важнейших испаноязычных мыслителей и писателей XX века, мексиканского поэта, эссеиста и нобелевского лауреата по литературе. Это сборник эссе о поэзии и конце XX века — для тех, кому интересны литература, философия и испаноязычный мир 📚\n\nИздана Seix Barral в 1990 году — в том же году, когда Пас получил Нобелевскую премию по литературе. Мягкая обложка, 141 страница, хорошее состояние. Красивое небольшое издание для полки, поездки или в подарок тому, кто читает по-испански 🇲🇽\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 📖",
      "uk": "Раритетне іспаномовне видання Октавіо Паса — одного з найважливіших іспаномовних мислителів і письменників XX століття, мексиканського поета, есеїста та нобелівського лауреата з літератури. Це збірка есеїв про поезію і кінець століття — для тих, кому цікаві література, філософія та іспаномовний світ 📚\n\nВидана Seix Barral у 1990 році — того ж року, коли Пас отримав Нобелівську премію з літератури. М’яка обкладинка, 141 сторінка, хороший стан. Гарне невелике видання для полиці, подорожі або як подарунок тому, хто читає іспанською 🇲🇽\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга 📖",
      "es": "Una edición poco común en español de Octavio Paz, uno de los pensadores y escritores más importantes de la lengua española del siglo XX: poeta y ensayista mexicano, ganador del Premio Nobel de Literatura. Es una colección de ensayos sobre la poesía, la modernidad y el fin de siglo; para quienes se interesan por la literatura, la filosofía y el mundo hispanohablante 📚\n\nPublicado por Seix Barral en 1990, el mismo año en que Paz recibió el Premio Nobel de Literatura. Tapa blanda, 141 páginas y en buen estado. Una edición bonita y compacta para tener en la estantería, llevar de viaje o regalar a alguien que lee en español 🇲🇽\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 📖",
      "zh": "奥克塔维奥·帕斯的珍稀西班牙语版本。他是 20 世纪最重要的西班牙语思想家和作家之一，也是墨西哥诗人、散文家及诺贝尔文学奖得主。这是一本关于诗歌、现代性与世纪末的随笔集，是喜爱文学、哲学和西班牙语世界读者的一次特别发现 📚\n\n由 Seix Barral 于 1990 年出版——同一年帕斯获得诺贝尔文学奖。平装本，共 141 页，保存良好。一本适合放在书架上、旅行时随身携带，或送给阅读西班牙语的朋友的小书 🇲🇽\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 📖"
    }
  },
  {
    "id": 23,
    "price": "8 €",
    "reserved": false,
    "hidden": false,
    "category": "misc",
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item23-1788606261187-ntwk.jpg",
      "images/item23-1788606261297-dah8.jpg"
    ],
    "title": {
      "en": "España, sueño y verdad — María Zambrano 🇪🇸",
      "de": "España, sueño y verdad — María Zambrano 🇪🇸",
      "ru": "España, sueño y verdad — Мария Самбрано 🇪🇸",
      "uk": "España, sueño y verdad — Марія Самбрано 🇪🇸",
      "es": "España, sueño y verdad — María Zambrano 🇪🇸",
      "zh": "España, sueño y verdad《西班牙：梦与真实》— 玛丽亚·桑布拉诺 🇪🇸"
    },
    "desc": {
      "en": "A book by one of my favourite philosophers, María Zambrano. Here she reflects on what Spain is — both imagined and real — through its literature, myths, art, and thinkers. Zambrano is a very serious thinker, yet she gently accompanies you into the depth of her thought 🧘\n\nThis Spanish-language edition is from the “Los libros de Sísifo” series by Edhasa. A beautiful book for anyone interested in philosophy, Spain, literature, or simply a slow and thoughtful kind of reading ✨\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg.",
      "de": "Ein Buch von einer meiner liebsten Philosophinnen: María Zambrano. Darin denkt sie darüber nach, was Spanien ist — das erträumte ebenso wie das wirkliche — anhand seiner Literatur, Mythen, Kunst und Denker:innen. Zambrano ist eine sehr ernsthafte Denkerin, begleitet einen dabei aber behutsam in die Tiefe ihres Denkens 🧘\n\nDiese spanischsprachige Ausgabe gehört zur Reihe „Los libros de Sísifo“ von Edhasa. Ein schönes Buch für alle, die sich für Philosophie, Spanien, Literatur oder einfach für langsames, nachdenkliches Lesen interessieren 🌿\n\nÜbergabe an einer U- oder S-Bahn-Station in der Hamburger Innenstadt.",
      "ru": "Книга одной из моих любимых философок — Марии Самбрано. В ней она рассуждает о том, что такое Испания: вымышленная и настоящая, — через её литературу, мифы, искусство и мыслителей. Самбрано — очень серьёзная мыслительница, но при этом она бережно сопровождает тебя на глубину своей мысли 🧘\n\nИспаноязычное издание из серии «Los libros de Sísifo» издательства Edhasa. Хорошая книга для тех, кому интересны философия, Испания, литература или просто медленное вдумчивое чтение ✨\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга.",
      "uk": "Книга однієї з моїх улюблених філософок — Марії Самбрано. У ній вона розмірковує про те, що таке Іспанія: уявна та справжня, — через її літературу, міфи, мистецтво й мислителів. Самбрано — дуже серйозна мислителька, але водночас вона дбайливо супроводжує тебе в глибину своєї думки 🧘\n\nІспаномовне видання із серії «Los libros de Sísifo» видавництва Edhasa. Гарна книга для тих, кому цікаві філософія, Іспанія, література або просто повільне вдумливе читання ✨\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга.",
      "es": "Un libro de una de mis filósofas favoritas, María Zambrano. Aquí reflexiona sobre qué es España —la imaginada y la real— a través de su literatura, sus mitos, su arte y sus pensadores. Zambrano es una pensadora muy seria, pero al mismo tiempo te acompaña con delicadeza hacia la profundidad de su pensamiento 🧘\n\nEdición en español de la colección «Los libros de Sísifo» de Edhasa. Un libro precioso para quien se interese por la filosofía, España, la literatura o simplemente por una lectura lenta y reflexiva ✨\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo.",
      "zh": "我最喜欢的哲学家之一玛丽亚·桑布拉诺的作品。她在书中通过西班牙的文学、神话、艺术与思想家，思考西班牙究竟是什么——想象中的西班牙，以及真实的西班牙。桑布拉诺是一位非常严肃的思想家，但她也会温柔地带领读者走入她思想的深处 🧘\n\n这是 Edhasa 出版社“Los libros de Sísifo”系列的西班牙语版本。适合对哲学、西班牙、文学感兴趣，或喜欢慢慢深入阅读的人 ✨\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接。"
    }
  },
  {
    "id": 24,
    "price": "470 €",
    "reserved": false,
    "hidden": false,
    "category": "tech",
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Glinde, Möllner Landstraße 89",
      "de": "",
      "ru": "",
      "uk": "",
      "es": "",
      "zh": ""
    },
    "images": [
      "images/item24-1788606795359-2tcb.jpg",
      "images/item24-1788606795540-zqmn.jpg",
      "images/item24-1788606795676-suld.jpg",
      "images/item24-1788606795826-cjrk.jpg"
    ],
    "title": {
      "en": "ADAM Audio A5X active studio monitors — pair",
      "de": "ADAM Audio A5X aktive Studiomonitore — Paar",
      "ru": "Активные студийные мониторы ADAM Audio A5X — пара",
      "uk": "Активні студійні монітори ADAM Audio A5X — пара",
      "es": "Monitores de estudio activos ADAM Audio A5X — pareja",
      "zh": "ADAM Audio A5X 有源近场录音室监听音箱 — 一对"
    },
    "desc": {
      "en": "The final boss of my moving sale — the thing that is hardest for me to part with. I would not be selling them, but unfortunately I need the money more right now. ❤️‍🩹 This is a pair of ADAM Audio A5X active studio monitors — a real gift for anyone who truly loves music. They are suitable both for everyday listening and serious sound-engineering work: mixing, production, and working with audio 🎶\n\nI bought them new for around €1,000 a few years ago, when this model was still being sold. The monitors are in excellent condition. There is only one small chip, covered with a black marker, so you will most likely not even notice where it is. I also have the original foam inserts, which make it possible to transport the monitors safely in boxes 📦\n\nSpecifications: active 2-way nearfield monitors; X-ART tweeters; 5.5-inch woofers; 50 Hz–50 kHz frequency response; 50 W + 50 W amplification per monitor; XLR and RCA inputs. Each monitor measures 28×17×22 cm and weighs around 6.6 kg 🔊\n\nPrice: €450 for both monitors.\nPickup from Glinde is strongly preferred because the monitors are valuable and heavy; a personal handover in central Hamburg may be possible by arrangement 🌿",
      "de": "Der Endboss meines Umzugsverkaufs — die Sache, von der ich mich am schwersten trennen kann. Ich würde sie nicht verkaufen, aber leider brauche ich das Geld im Moment mehr. ❤️‍🩹 Das ist ein Paar aktiver Studiomonitore ADAM Audio A5X — ein echtes Geschenk für alle, die Musik wirklich lieben. Sie eignen sich sowohl zum normalen Musikhören als auch für ernsthafte Arbeiten in der Tontechnik: Mixing, Produktion und Audiobearbeitung 🎶\n\nIch habe sie vor einigen Jahren neu für etwa 1.000 € gekauft, als dieses Modell noch verkauft wurde. Die Monitore sind in ausgezeichnetem Zustand. Es gibt nur eine kleine Macke, die mit schwarzem Marker überdeckt wurde — wahrscheinlich bemerkt man nicht einmal, wo sie ist. Außerdem habe ich die originalen Schaumstoffhalterungen, mit denen sich die Monitore sicher in Kartons transportieren lassen 📦\n\nTechnische Daten: aktive 2-Wege-Nahfeldmonitore; X-ART-Hochtöner; 5,5-Zoll-Tieftöner; Frequenzbereich 50 Hz–50 kHz; 50 W + 50 W Verstärkerleistung pro Monitor; XLR- und RCA-Eingänge. Jeder Monitor misst 28×17×22 cm und wiegt etwa 6,6 kg 🔊\n\nPreis: 450 € für beide Monitore.\nAbholung in Glinde ist wegen des Werts und Gewichts der Monitore sehr erwünscht; eine persönliche Übergabe in der Hamburger Innenstadt ist nach Absprache eventuell möglich 🌿",
      "ru": "Финальный босс моей распродажи — вещь, с которой мне тяжелее всего расставаться. Я не стал бы их продавать, но сейчас, увы, деньги нужнее. ❤️‍🩹 Это пара активных студийных мониторов ADAM Audio A5X — просто подарок для тех, кто по-настоящему любит музыку. Они подходят и для обычного прослушивания, и для серьёзной звукорежиссёрской работы: сведения, продакшна и работы со звуком 🎶\n\nНесколько лет назад я покупал их новыми примерно за 1000 €, когда эта модель ещё продавалась. Мониторы в прекрасном состоянии. Есть только один небольшой скол, замазанный чёрным маркером, так что вы, скорее всего, даже не поймёте, где он. Также есть оригинальные пенопластовые держатели, с которыми мониторы можно безопасно перевозить в коробках 📦\n\nХарактеристики: активные двухполосные мониторы ближнего поля; твитеры X-ART; 5,5-дюймовые низкочастотные динамики; частотный диапазон 50 Гц–50 кГц; усиление 50 Вт + 50 Вт на каждый монитор; входы XLR и RCA. Размер каждого монитора — 28×17×22 см, вес — около 6,6 кг 🔊\n\nЦена: 450 € за оба монитора.\nИз-за ценности и веса мониторов очень желателен самовывоз из Глинде; личную передачу в центре Гамбурга, возможно, получится организовать по договорённости 🌿",
      "uk": "Фінальний бос мого розпродажу — річ, із якою мені найважче розлучатися. Я б не став їх продавати, але зараз, на жаль, гроші потрібніші. ❤️‍🩹 Це пара активних студійних моніторів ADAM Audio A5X — справжній подарунок для тих, хто по-справжньому любить музику. Вони підходять і для звичайного прослуховування, і для серйозної звукорежисерської роботи: зведення, продакшну та роботи зі звуком 🎶\n\nКілька років тому я купив їх новими приблизно за 1000 €, коли ця модель ще продавалася. Монітори у чудовому стані. Є лише один невеликий скол, замальований чорним маркером, тож ви, найімовірніше, навіть не зрозумієте, де він. Також є оригінальні пінопластові тримачі, з якими монітори можна безпечно перевозити в коробках 📦\n\nХарактеристики: активні двосмугові монітори ближнього поля; твітери X-ART; 5,5-дюймові низькочастотні динаміки; частотний діапазон 50 Гц–50 кГц; підсилення 50 Вт + 50 Вт на кожен монітор; входи XLR та RCA. Розмір кожного монітора — 28×17×22 см, вага — близько 6,6 кг 🔊\n\nЦіна: 450 € за обидва монітори.\nЧерез цінність і вагу моніторів дуже бажаний самовивіз із Глінде; особисту передачу в центрі Гамбурга, можливо, вдасться організувати за домовленістю 🌿",
      "es": "El jefe final de mi venta por mudanza — la cosa de la que más me cuesta desprenderme. No los vendería, pero por desgracia ahora necesito más el dinero. ❤️‍🩹 Es una pareja de monitores de estudio activos ADAM Audio A5X: un verdadero regalo para quien ama la música de verdad. Van bien tanto para escuchar música normalmente como para trabajos serios de ingeniería de sonido: mezcla, producción y trabajo con audio 🎶\n\nLos compré nuevos por unos 1.000 € hace algunos años, cuando este modelo todavía se vendía. Los monitores están en excelente estado. Solo tienen un pequeño desconchón, cubierto con rotulador negro, así que probablemente ni siquiera notarás dónde está. También conservo los soportes de espuma originales, con los que se pueden transportar de forma segura dentro de cajas 📦\n\nEspecificaciones: monitores activos de campo cercano de 2 vías; tweeters X-ART; woofers de 5,5 pulgadas; respuesta de frecuencia de 50 Hz a 50 kHz; amplificación de 50 W + 50 W por monitor; entradas XLR y RCA. Cada monitor mide 28×17×22 cm y pesa aproximadamente 6,6 kg 🔊\n\nPrecio: 450 € por los dos monitores.\nPor su valor y peso, se prefiere mucho la recogida en Glinde; quizá se pueda organizar una entrega en persona en el centro de Hamburgo previo acuerdo 🌿",
      "zh": "这是我搬家出售清单里的最终 Boss——也是我最难割舍的一样东西。我本来不会卖掉它们，但很遗憾，现在钱对我更重要。❤️‍🩹 这是一对 ADAM Audio A5X 有源录音室监听音箱，对真正热爱音乐的人来说简直是一份礼物。它们既适合日常听音乐，也适合严肃的声音工程工作：混音、制作和音频处理 🎶\n\n几年前、这款型号仍在销售时，我以约 1,000 欧元的价格买了全新的这对音箱。音箱状态极佳。只有一处很小的磕碰，已经用黑色记号笔补过，你大概率甚至找不到它在哪里。我也保留了原装泡沫固定件，可以把音箱放在箱子里安全运输 📦\n\n参数：有源两分频近场监听音箱；X-ART 高音单元；5.5 英寸低音单元；频率响应 50 Hz–50 kHz；每只音箱配备 50 W + 50 W 功放；支持 XLR 和 RCA 输入。每只尺寸为 28×17×22 厘米，重量约 6.6 千克 🔊\n\n价格：两只音箱一共 450 欧元。\n由于音箱贵重且较重，强烈建议在 Glinde 自取；如事先协商，也许可以安排在汉堡市中心当面交接 🌿"
    }
  }
];

// Всплывающее окошко "Обо мне" в углу сайта.
const ABOUT_ME = {
  "title": {
    "en": "About me",
    "de": "Über mich",
    "ru": "Обо мне",
    "uk": "Про мене",
    "es": "Sobre mí",
    "zh": "关于我"
  },
  "text": {
    "en": "Hi! I'm Stepan. I've been living in Germany for two years now, and this August I got into university in Berlin! 🤓 So I'm moving out from near Hamburg and selling off things I either can't take with me or just feel ready to let go of — because everything changes, and I'm not quite the same person who bought them. 🐥\n\nStill, these are all things I chose with care and tried to look after well. I like the idea of minimalism and sustainability — where every item finds its use. So I'd really appreciate your help finding these things new owners!\n\nMessage me and share this page with friends 🌿",
    "de": "Hallo! Ich bin Stefan. Ich lebe seit zwei Jahren in Deutschland und habe im August einen Studienplatz an einer Universität in Berlin bekommen! 🤓 Deshalb ziehe ich aus der Nähe von Hamburg weg und verkaufe Dinge, die ich entweder nicht mitnehmen kann oder bei denen ich einfach das Gefühl habe, dass ich sie loslassen kann — denn alles verändert sich, und ich bin nicht mehr ganz derselbe Mensch, der sie damals gekauft hat. 🐥\n\nTrotzdem habe ich all diese Dinge mit Bedacht ausgesucht und versucht, gut auf sie aufzupassen. Mir gefallen die Ideen von Minimalismus und Nachhaltigkeit — wenn jedes Ding seinen Platz und Nutzen findet. Deshalb würde ich mich sehr freuen, wenn ihr mir helft, neue Besitzer:innen für diese Sachen zu finden!\n\nSchreibt mir gerne und teilt diese Seite mit Freund:innen 🌿",
    "ru": "Привет! Меня зовут Стёпа. Я уже два года живу в Германии и в августе поступил в университет в Берлине! 🤓 Поэтому теперь переезжаю из-под Гамбурга и распродаю вещи, которые не получится перевезти и те, с которыми просто хочется попрощаться, потому что всё меняется, и я уже не тот человек, что когда-то купил их. 🐥\n\nТем не менее это всё вещи, которые я выбирал с душой и с которыми старался бережно обходиться. Мне нравится идея минимализма и устойчивости — когда каждой вещи всегда находится применение. Поэтому я буду рад, если вы поможете найти всем этим вещицам новых хозяев и хозяек!\n\nПишите и пересылайте эту страницу друзьям 🌿",
    "uk": "Привіт! Мене звати Степан. Я живу в Німеччині вже два роки, і цього серпня вступив до університету в Берліні! 🤓 Тому я переїжджаю з околиць Гамбурга й продаю речі, які або не зможу взяти із собою, або просто відчуваю, що вже готовий відпустити — адже все змінюється, і я вже не зовсім та людина, яка їх колись купувала. 🐥\n\nУтім, усі ці речі я вибирав дбайливо й намагався добре за ними доглядати. Мені близькі ідеї мінімалізму та сталого споживання — коли кожна річ знаходить своє застосування. Тож буду дуже вдячний за допомогу в пошуку для них нових власників!\n\nПишіть мені та діліться цією сторінкою з друзями 🌿",
    "es": "Hola! Me llamo Esteban. Llevo dos años viviendo en Alemania y este agosto he conseguido plaza en una universidad de Berlín! 🤓 Por eso me mudo de Hamburgo y vendo las cosas que no puedo llevarme o que simplemente siento que ya estoy listo para dejar ir, porque todo cambia y ya no soy exactamente la misma persona que las compró 🐥\n\nAun así, elegí todas estas cosas con cuidado y he procurado cuidarlas bien. Me gustan las ideas del minimalismo y la sostenibilidad: que cada objeto encuentre su utilidad. Por eso agradecería mucho vuestra ayuda para que estas cosas encuentren nuevos dueños.\n\nEscribidme y compartid esta página con amig@s! 🌿",
    "zh": "大家好！我叫 Stepan。我已经在德国生活两年了，今年八月被柏林的一所大学录取！🤓 所以我准备从汉堡附近搬走，出售一些我无法带走、或只是觉得已经可以放手的物品——因为一切都在变化，我也不再完全是当初买下它们的那个人了 🐥\n\n不过，这些东西都是我认真挑选的，也一直尽力好好爱护它们。我喜欢极简主义和可持续生活的理念——让每一件物品都能继续发挥它的价值。因此，如果你能帮助这些物品找到新的主人，我会非常感谢！\n\n欢迎给我发消息，也请把这个页面分享给朋友们 🌿"
  },
  "photo": "images/about-1788603697623.jpg"
};
