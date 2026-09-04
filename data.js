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
    },
    "size": "M",
    "material": ""
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
    },
    "size": "M"
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
    },
    "size": "L"
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
    },
    "size": "M"
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
  },
  {
    "id": 7,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
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
    }
  },
  {
    "id": 8,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
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
    }
  },
  {
    "id": 9,
    "price": "3 €",
    "reserved": false,
    "condition": "new",
    "material": "",
    "size": "",
    "location": {
      "en": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt ● Rathaus",
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
    }
  },
  {
    "id": 10,
    "price": "2 €",
    "reserved": false,
    "condition": "",
    "material": "",
    "size": "",
    "location": {
      "en": "",
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
    }
  }
];
