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
    "condition": "good"
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
    "material": ""
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
    "size": "M"
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
    "size": "L"
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
    "size": "M"
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "category": "",
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
    "en": "Hi! I'm Stephen. I've been living in Germany for two years now, and this August I got into university in Berlin. So I'm moving out from near Hamburg and selling off things I either can't take with me or just feel ready to let go of — because everything changes, and I'm not quite the same person who bought them.\n\nStill, these are all things I chose with care and tried to look after well. I like the idea of minimalism and sustainability — where every item finds its use. So I'd really appreciate your help finding these things new owners!\n\nMessage me and share with friends 🌿",
    "de": "Hallo! Ich heiße Stefan. Ich lebe seit zwei Jahren in Deutschland und habe im August einen Studienplatz an einer Uni in Berlin bekommen. Deshalb ziehe ich aus der Nähe von Hamburg weg und verkaufe Dinge, die ich entweder nicht mitnehmen kann oder mit denen ich einfach bereit bin, mich zu verabschieden — denn alles verändert sich, und ich bin nicht mehr ganz derselbe Mensch, der sie einst gekauft hat.\n\nTrotzdem sind das alles Dinge, die ich mit Bedacht ausgesucht und sorgsam behandelt habe. Ich mag den Gedanken von Minimalismus und Nachhaltigkeit — dass jedes Ding seinen Nutzen findet. Deshalb würde ich mich sehr freuen, wenn ihr mir helft, all diesen Sachen neue Besitzer:innen zu finden!\n\nSchreibt mir und leitet es gerne an Freunde weiter 🌿",
    "ru": "Привет! Меня зовут Стёпа. Я уже два года живу в Германии и в августе поступил в университет в Берлине. Поэтому теперь переезжаю из-под Гамбурга и распродаю вещи, которые не получится перевезти и те, с которыми просто хочется попрощаться, потому что всё меняется, и я уже не тот человек, что когда-то купил их.\n\nТем не менее это всё вещи, которые я выбирал с душой и с которыми старался бережно обходиться. Мне нравится идея минимализма и устойчивости — когда каждой вещи всегда находится применение. Поэтому я буду рад, если вы поможете найти всем этим вещицам новых хозяев и хозяек!\n\nПишите и пересылайте друзьям 🌿",
    "uk": "Привіт! Мене звати Степан. Я вже два роки живу в Німеччині і в серпні вступив до університету в Берліні. Тому тепер переїжджаю з-під Гамбурга і розпродаю речі, які не вийде перевезти, та ті, з якими просто хочеться попрощатися, бо все змінюється, і я вже не та людина, яка колись їх купила.\n\nПроте це все речі, які я обирав з душею і намагався дбайливо з ними поводитися. Мені подобається ідея мінімалізму та сталості — коли кожній речі завжди знаходиться застосування. Тож я буду радий, якщо ви допоможете знайти всім цим речам нових господарів і господинь!\n\nПишіть і пересилайте друзям 🌿",
    "es": "¡Hola! Me llamo Esteban. Llevo dos años viviendo en Alemania y en agosto entré a la universidad en Berlín. Por eso ahora me mudo desde cerca de Hamburgo y estoy vendiendo cosas que no podré llevarme, y otras de las que simplemente siento que es hora de despedirme — porque todo cambia, y ya no soy exactamente la misma persona que las compró en su momento.\n\nAun así, son todas cosas que elegí con cariño y traté de cuidar bien. Me gusta la idea del minimalismo y la sostenibilidad — que cada cosa siempre encuentre su uso. Así que agradecería mucho vuestra ayuda para encontrarles nuevos dueños y dueñas a todas estas cositas.\n\nEscribidme y compartid con amigos 🌿",
    "zh": "你好！我叫Stepan。我在德国已经生活两年了，今年8月考上了柏林的大学。所以现在我要从汉堡附近搬走，把一些带不走的东西，还有一些单纯想告别的东西卖掉——因为一切都在变化，我也不再是当初买这些东西时的那个自己了。\n\n不过这些都是我用心挑选、尽力好好爱护过的东西。我喜欢极简和可持续的理念——希望每件物品都能找到自己的用处。所以如果大家能帮忙给这些小物件找到新主人，我会非常感激！\n\n欢迎留言，也欢迎转发给朋友们 🌿"
  },
  "photo": ""
};
