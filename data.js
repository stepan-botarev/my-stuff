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
    "id": 14,
    "price": "180 €",
    "reserved": false,
    "condition": "good",
    "material": "plastic,metal",
    "size": "84.5 x 59.5 x 46.5 cm",
    "location": "Glinde, Möllner Landstraße 89  ",
    "images": [
      "images/item14-1788543649832-xdkh.jpg",
      "images/item14-1788543649955-zqf8.jpg",
      "images/item14-1788543650035-u8nm.jpg"
    ],
    "title": {
      "en": "Bomann WA 7175 washing machine, 7 kg, 1400 rpm",
      "de": "Waschmaschine Bomann WA 7175, 7 kg, 1400 U/min",
      "ru": "Стиральная машина Bomann WA 7175, 7 кг, 1400 об/мин",
      "uk": "Пральна машина Bomann WA 7175, 7 кг, 1400 об/хв",
      "es": "Lavadora Bomann WA 7175, 7 kg, 1400 rpm",
      "zh": "Bomann WA 7175 洗衣机，7 公斤，1400 转/分钟",
      "tr": "Bomann WA 7175 çamaşır makinesi, 7 kg, 1400 dev/dk",
      "fa": "ماشین لباسشویی Bomann WA 7175، ظرفیت ۷ کیلوگرم، ۱۴۰۰ دور در دقیقه",
      "ar": "غسالة Bomann WA 7175، سعة 7 كغ، 1400 دورة/دقيقة"
    },
    "desc": {
      "en": "Bought a year ago. In excellent condition, though there are a couple of scratches on the housing — otherwise a great machine.\n\nComes with an anti-vibration mat that keeps it from shaking and shifting during the spin cycle.\n\nBought for €300, letting it go for €175 🧺\n\nPickup only, from Glinde (10 minutes from Hamburg).",
      "de": "Vor einem Jahr gekauft. In sehr gutem Zustand, mit ein paar Kratzern am Gehäuse, ansonsten eine ausgezeichnete Waschmaschine.\n\nIch gebe die Waschmaschine zusammen mit einer Antivibrationsmatte (Antivibrationsmatte) ab. Die Matte reduziert Vibrationen und Geräusche der Maschine beim Schleudern. Zusätzlich gibt es einen Wäscheständer zum Aufhängen von Kleidung gratis dazu.\n\nGekauft für 300 € (+ 10 € für die Matte), ich gebe alles für 180 € ab 🧺\n\nNur Selbstabholung in Glinde, Möllner Landstraße 89, etwa 10 Minuten von Hamburg entfernt.",
      "ru": "Купил год назад. В отличном состоянии, есть пара царапин на корпусе, в остальном отличная машинка.\n\nОтдаю стиральную машинку вместе с антивибрационным ковриком (Antivibrationsmatte). Коврик защищает от дрожания и шума машинки при отжиме. Также в подарок — сушилка для развешивания белья.\n\nКупил за 300 € (+ 10 € за коврик), отдам за 180 € 🧺\n\nТолько самовывоз из Глинде, Möllner Landstraße 89, примерно 10 минут от Гамбурга.",
      "uk": "Купив рік тому. У чудовому стані, є кілька подряпин на корпусі, в іншому — відмінна пральна машина.\n\nВіддаю пральну машину разом з антивібраційним килимком (Antivibrationsmatte). Килимок зменшує вібрацію та шум пральної машини під час віджимання. Також у подарунок — сушарка для розвішування білизни.\n\nКупив за 300 € (+ 10 € за килимок), віддам за 180 € 🧺\n\nЛише самовивіз із Глінде, Möllner Landstraße 89, приблизно 10 хвилин від Гамбурга.",
      "es": "La compré hace un año. Está en muy buen estado; tiene un par de arañazos en la carcasa, pero por lo demás funciona muy bien.\n\nLa entrego junto con una alfombrilla antivibración (Antivibrationsmatte). La alfombrilla reduce las vibraciones y el ruido de la lavadora durante el centrifugado. También incluyo de regalo un tendedero para colgar la ropa.\n\nLa compré por 300 € (+ 10 € por la alfombrilla) y la dejo por 180 € 🧺\n\nSolo recogida en persona en Glinde, Möllner Landstraße 89, a unos 10 minutos de Hamburgo.",
      "zh": "一年前购买。状态很好，机身上有几处划痕，除此之外是一台非常不错的洗衣机。\n\n洗衣机附赠防震垫（Antivibrationsmatte）。防震垫可减少洗衣机在脱水时的震动和噪音。此外，还免费附送一个用于晾晒衣物的晾衣架。\n\n购入价为 300 €（防震垫另花了 10 €），现以 180 € 出售 🧺\n\n仅限自取：格林德 Möllner Landstraße 89，距离汉堡约 10 分钟。",
      "tr": "Bir yıl önce satın alındı. Çok iyi durumda; gövdesinde birkaç çizik var, bunun dışında harika bir çamaşır makinesi.\n\nÇamaşır makinesini antivibrasyon matıyla (Antivibrationsmatte) birlikte veriyorum. Mat, sıkma sırasında makinenin titreşimini ve gürültüsünü azaltır. Ayrıca çamaşır asmak için kullanılan bir kurutmalık da hediye.\n\n300 €’ya aldım (+ mat için 10 €), 180 €’ya veriyorum 🧺\n\nSadece Glinde’den elden teslim, Möllner Landstraße 89, Hamburg’a yaklaşık 10 dakika uzaklıkta.",
      "fa": "یک سال پیش خریده‌ام. در وضعیت بسیار خوب است؛ چند خط‌وخش روی بدنه دارد، اما در بقیه موارد ماشین لباسشویی عالی‌ای است.\n\nماشین لباسشویی را همراه با پد ضدلرزش (Antivibrationsmatte) واگذار می‌کنم. این پد لرزش و صدای ماشین لباسشویی هنگام خشک‌کن را کاهش می‌دهد. همچنین یک بند رخت برای آویزان‌کردن لباس‌ها هم به‌عنوان هدیه همراه آن است.\n\nبا قیمت ۳۰۰ یورو خریده‌ام (+ ۱۰ یورو برای پد)، با قیمت ۱۸۰ یورو می‌فروشم 🧺\n\nفقط تحویل حضوری از گلینده، Möllner Landstraße 89، حدود ۱۰ دقیقه از هامبورگ.",
      "ar": "اشتريتها قبل سنة. حالتها ممتازة، مع وجود بعض الخدوش على الهيكل، لكنها فيما عدا ذلك غسالة رائعة.\n\nأبيع الغسالة مع حصيرة مضادة للاهتزاز (Antivibrationsmatte). تقلل الحصيرة اهتزاز الغسالة وضجيجها أثناء العصر. كما أضيف مجانًا منشرًا لتعليق الملابس.\n\nاشتريتها مقابل 300 € (+ 10 € للحصيرة)، وأبيعها مقابل 180 € 🧺\n\nالاستلام الشخصي فقط من غلينده، Möllner Landstraße 89، على بُعد نحو 10 دقائق من هامبورغ."
    },
    "category": "tech"
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
    "location": "Glinde, Möllner Landstraße 89",
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
    "hidden": true,
    "category": "tech",
    "condition": "new",
    "material": "пластик, металл",
    "size": "43,9 × 34 × 25,8 см",
    "location": "Glinde, Möllner Landstraße 89",
    "images": [
      "images/item19-1788602683882-f6wb.jpg",
      "images/item19-1788602684050-5yk9.jpg"
    ],
    "title": {
      "en": "IKEA TILLREDA microwave, white",
      "de": "IKEA TILLREDA Mikrowelle, weiß",
      "ru": "Микроволновка IKEA TILLREDA, белая",
      "uk": "Мікрохвильова піч IKEA TILLREDA, біла",
      "es": "Microondas IKEA TILLREDA, blanco",
      "zh": "IKEA TILLREDA 白色微波炉",
      "tr": "IKEA TILLREDA mikrodalga fırın, beyaz",
      "fa": "مایکروویو IKEA TILLREDA، سفید",
      "ar": "ميكروويف IKEA TILLREDA، أبيض"
    },
    "desc": {
      "en": "Minimalist white IKEA microwave with very simple controls — just two knobs, so nothing extra to figure out. It is around a year old and looks almost new. Great for reheating food, making a quick meal, or warming up tea or coffee.\nDimensions: 43.9×34×25.8 cm. Capacity: 20 L. Power: 700 W.\nNew price is €69, letting it go for €49 🍽️\nPickup is preferred, from Glinde, Möllner Landstraße 89 (10 minutes from Hamburg). I can try to bring it to central Hamburg if needed.",
      "de": "Weiße, minimalistische IKEA-Mikrowelle mit sehr einfacher Bedienung — nur zwei Drehregler, nichts Überflüssiges. Sie ist etwa ein Jahr alt und sieht fast wie neu aus. Sie erwärmt Essen und taut Tiefgefrorenes auf — genau das, was sie soll.\n\nVolumen: 20 l. Leistung: 700 W 💪 Neu kostet sie 69 €, ich gebe sie für 49 € ab 🍽️\n\nAm besten Selbstabholung in Glinde, Möllner Landstraße 89, etwa 10 Minuten von Hamburg entfernt. Falls es wirklich gar nicht anders geht, versuche ich, sie bis ins Zentrum von Hamburg zu bringen.",
      "ru": "Белая минималистичная микроволновка IKEA с очень простым управлением — всего две крутилки, ничего лишнего. Ей около года, выглядит почти как новая. Разогреет еду и разморозит замороженное — всё, как надо.\n\nОбъём: 20 л. Мощность: 700 Вт 💪 Новая стоит 69 €, отдам за 49 € 🍽️\n\nЛучше самовывоз из Глинде, Möllner Landstraße 89, примерно 10 минут от Гамбурга. Но, если совсем никак, постараюсь довезти до центра Гамбурга.",
      "uk": "Біла мінімалістична мікрохвильова піч IKEA з дуже простим керуванням — лише дві ручки, нічого зайвого. Їй близько року, виглядає майже як нова. Розігріє їжу та розморозить заморожені продукти — усе, як треба.\n\nОб’єм: 20 л. Потужність: 700 Вт 💪 Нова коштує 69 €, віддам за 49 € 🍽️\n\nНайкраще самовивіз із Глінде, Möllner Landstraße 89, приблизно 10 хвилин від Гамбурга. Але якщо зовсім ніяк, постараюся довезти до центру Гамбурга.",
      "es": "Microondas IKEA blanco y minimalista, con un manejo muy sencillo: solo dos mandos, sin nada innecesario. Tiene aproximadamente un año y parece casi nuevo. Calienta la comida y descongela productos congelados, justo lo que se necesita.\n\nCapacidad: 20 l. Potencia: 700 W 💪 Nuevo cuesta 69 €; lo dejo por 49 € 🍽️\n\nPreferiblemente recogida en Glinde, Möllner Landstraße 89, a unos 10 minutos de Hamburgo. Pero, si de verdad no hay otra opción, intentaré llevarlo al centro de Hamburgo.",
      "zh": "白色极简风格的 IKEA 微波炉，操作非常简单——只有两个旋钮，没有多余功能。使用约一年，看起来几乎和新的一样。可加热食物，也可解冻冷冻食品，正好满足日常所需。\n\n容量：20 升。功率：700 瓦 💪 全新售价 69 €，现以 49 € 出售 🍽️\n\n最好在格林德自取：Möllner Landstraße 89，距离汉堡约 10 分钟。如果实在不方便，我会尽量送到汉堡市中心。",
      "tr": "Çok basit kullanımlı, beyaz ve minimalist bir IKEA mikrodalga fırın — sadece iki düğme, gereksiz hiçbir şey yok. Yaklaşık bir yıllık ve neredeyse yeni gibi görünüyor. Yemeği ısıtır ve dondurulmuş gıdaları çözer; tam olarak ihtiyacınız olan şey.\n\nHacim: 20 l. Güç: 700 W 💪 Yenisi 69 €, 49 €’ya veriyorum 🍽️\n\nTercihen Glinde’de, Möllner Landstraße 89 adresinden elden teslim. Hamburg’a yaklaşık 10 dakika uzaklıkta. Ama başka türlü hiç mümkün değilse Hamburg merkezine getirmeye çalışırım.",
      "fa": "مایکروویوی سفید و مینیمال از IKEA با کاربری بسیار ساده — فقط دو پیچ، بدون هیچ چیز اضافه. حدود یک سال از عمرش می‌گذرد و تقریباً نو به نظر می‌رسد. غذا را گرم می‌کند و مواد غذایی یخ‌زده را یخ‌زدایی می‌کند — دقیقاً همان کاری که باید انجام دهد.\n\nظرفیت: ۲۰ لیتر. توان: ۷۰۰ وات 💪 قیمت نو آن ۶۹ یورو است؛ با قیمت ۴۹ یورو می‌فروشم 🍽️\n\nترجیحاً تحویل حضوری در گلینده، Möllner Landstraße 89، حدود ۱۰ دقیقه از هامبورگ. اما اگر واقعاً امکانش نبود، سعی می‌کنم آن را به مرکز هامبورگ برسانم.",
      "ar": "ميكروويف أبيض وبسيط من IKEA بتحكم سهل جدًا — مقبضان فقط، ولا شيء زائد. عمره حوالي سنة ويبدو شبه جديد. يسخّن الطعام ويذيب تجميد الأطعمة المجمّدة، أي يقوم بكل ما تحتاجه منه.\n\nالسعة: 20 لترًا. القدرة: 700 واط 💪 سعره الجديد 69 €، وأبيعه مقابل 49 € 🍽️\n\nيُفضّل الاستلام الشخصي من غلينده، Möllner Landstraße 89، على بُعد نحو 10 دقائق من هامبورغ. ولكن إذا لم يكن ذلك ممكنًا تمامًا، سأحاول إيصاله إلى وسط هامبورغ."
    }
  },
  {
    "id": 15,
    "price": "45 €",
    "reserved": false,
    "condition": "good",
    "material": "",
    "size": "",
    "location": "Glinde, Möllner Landstraße 89",
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
    "id": 20,
    "price": "35 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "wood,metal",
    "size": "125 × 74 × 75 см",
    "location": "Glinde, Möllner Landstraße 89",
    "images": [
      "images/item20-1788602888958-ht2p.jpg",
      "images/item20-1788603098967-fqyw.jpg",
      "images/item20-1788690296395-1rse.jpg"
    ],
    "title": {
      "en": "IKEA VIHALS table, white, 125 × 74 × 75 cm",
      "de": "IKEA VIHALS Tisch, weiß, 125 × 74 × 75 cm",
      "ru": "Стол IKEA VIHALS, белый, 125 × 74 × 75 см",
      "uk": "Стіл IKEA VIHALS, білий, 125 × 74 × 75 см",
      "es": "Mesa IKEA VIHALS, blanca, 125 × 74 × 75 cm",
      "zh": "IKEA VIHALS 白色桌子，125 × 74 × 75 厘米",
      "tr": "IKEA VIHALS masa, beyaz, 125 × 74 × 75 cm",
      "ar": "طاولة IKEA VIHALS، بيضاء، 125 × 74 × 75 سم",
      "fa": "میز سفید IKEA VIHALS، ۱۲۵ × ۷۴ × ۷۵ سانتی‌متر"
    },
    "desc": {
      "en": "A great, spacious white table — minimalist, sturdy and at an ideal height. I could sit at it for a long time without getting tired. The length and width are excellent: it easily fit a computer, keyboard, large speakers, a phone stand, books, notebooks and plenty more all at once. In short, a wonderful table for working.\n\nThere are a couple of small, barely noticeable scratches near the edges, but overall the table is in excellent condition.\n\nLength: 125 cm, width: 74 cm, height: 75 cm.\n\nIt costs €59.99 new; selling for €35 🖥️\n\nCollection only from Möllner Landstraße 89, Glinde — around 10 minutes from Hamburg.",
      "de": "Toller, geräumiger weißer Tisch — minimalistisch, stabil und mit einer idealen Höhe. Ich konnte lange daran sitzen, ohne müde zu werden. Länge und Breite sind wirklich super: Computer, Tastatur, große Lautsprecher, Handyhalterung, Bücher, Hefte und noch vieles mehr hatten gleichzeitig problemlos Platz. Kurz gesagt: ein wunderbarer Tisch zum Arbeiten.\n\nAn den Kanten gibt es ein paar kleine, kaum sichtbare Kratzer, aber insgesamt ist der Tisch in einem ausgezeichneten Zustand.\n\nLänge: 125 cm, Breite: 74 cm, Höhe: 75 cm.\n\nNeu kostet er 59,99 €, ich gebe ihn für 35 € ab 🖥️\n\nNur Selbstabholung in der Möllner Landstraße 89 in Glinde — etwa 10 Minuten von Hamburg entfernt.",
      "ru": "Классный просторный белый стол — минималистичный, устойчивый и идеальной высоты. Я мог долго сидеть за ним и не уставать. Длина и ширина вообще отличные: спокойно помещались компьютер, клавиатура, большие колонки, подставка для телефона, книги, тетради и ещё куча всего одновременно. Короче, прекрасный стол для работы.\n\nЕсть пара небольших, почти незаметных царапин у кромок, но в целом стол в отличном состоянии.\n\nДлина: 125 см, ширина: 74 см, высота: 75 см.\n\nНовый стоит 59,99 €, отдам за 35 € 🖥️\n\nТолько самовывоз: Möllner Landstraße 89, Глинде — примерно 10 минут от Гамбурга.",
      "uk": "Класний просторий білий стіл — мінімалістичний, стійкий і з ідеальною висотою. Я міг довго сидіти за ним і не втомлюватися. Довжина та ширина чудові: легко вміщалися комп’ютер, клавіатура, великі колонки, підставка для телефона, книжки, зошити й ще багато всього одночасно. Коротко кажучи, прекрасний стіл для роботи.\n\nЄ пара невеликих, майже непомітних подряпин біля країв, але загалом стіл у відмінному стані.\n\nДовжина: 125 см, ширина: 74 см, висота: 75 см.\n\nНовий коштує 59,99 €, віддам за 35 € 🖥️\n\nЛише самовивіз: Möllner Landstraße 89, Глінде — приблизно 10 хвилин від Гамбурга.",
      "es": "Una mesa blanca estupenda y espaciosa: minimalista, estable y con una altura ideal. Podía sentarme a trabajar en ella durante mucho tiempo sin cansarme. El largo y el ancho son realmente excelentes: cabían sin problema un ordenador, teclado, altavoces grandes, soporte para teléfono, libros, cuadernos y muchas más cosas a la vez. En resumen, una mesa maravillosa para trabajar.\n\nTiene un par de arañazos pequeños, apenas visibles, cerca de los bordes, pero en general está en excelente estado.\n\nLargo: 125 cm, ancho: 74 cm, alto: 75 cm.\n\nNueva cuesta 59,99 €; la vendo por 35 € 🖥️\n\nSolo recogida en Möllner Landstraße 89, Glinde, a unos 10 minutos de Hamburgo.",
      "zh": "一张很棒、宽敞的白色桌子——极简、稳固，高度也很理想。我可以长时间坐在桌前而不觉得累。它的长宽非常合适：电脑、键盘、大音箱、手机支架、书、本子以及许多其他物品都可以同时轻松放下。总之，这是一张非常适合工作的桌子。\n\n桌子边缘附近有几处很小、几乎看不出来的划痕，但整体状况极佳。\n\n长度：125 厘米，宽度：74 厘米，高度：75 厘米。\n\n新品售价 59.99 欧元，现以 35 欧元出售 🖥️\n\n仅限自取：Glinde，Möllner Landstraße 89，距离汉堡约 10 分钟。",
      "tr": "Harika, geniş beyaz bir masa — minimalist, sağlam ve ideal yükseklikte. Başında uzun süre oturup yorulmadan çalışabiliyordum. Uzunluğu ve genişliği gerçekten çok iyi: bilgisayar, klavye, büyük hoparlörler, telefon standı, kitaplar, defterler ve daha birçok şey aynı anda rahatça sığıyordu. Kısacası, çalışmak için mükemmel bir masa.\n\nKenarlarında birkaç küçük, neredeyse fark edilmeyen çizik var, ancak genel olarak masa mükemmel durumda.\n\nUzunluk: 125 cm, genişlik: 74 cm, yükseklik: 75 cm.\n\nYenisi 59,99 €, 35 €’ya veriyorum 🖥️\n\nSadece Glinde, Möllner Landstraße 89’dan elden teslim — Hamburg’a yaklaşık 10 dakika uzaklıkta.",
      "ar": "طاولة بيضاء رائعة وواسعة، بتصميم بسيط وثابت وبارتفاع مثالي. كنت أستطيع الجلوس والعمل عليها لفترة طويلة من دون تعب. طولها وعرضها ممتازان فعلًا: كان يتسع عليها بسهولة كمبيوتر ولوحة مفاتيح ومكبرات صوت كبيرة وحامل هاتف وكتب ودفاتر وأشياء كثيرة أخرى في الوقت نفسه. باختصار، طاولة ممتازة للعمل.\n\nيوجد خدشان صغيران بالكاد يمكن ملاحظتهما قرب الحواف، لكن الطاولة عمومًا بحالة ممتازة.\n\nالطول: 125 سم، العرض: 74 سم، الارتفاع: 75 سم.\n\nسعرها الجديدة 59.99 يورو، وأبيعها مقابل 35 يورو 🖥️\n\nالاستلام الذاتي فقط من Möllner Landstraße 89 في غلينده، على بُعد نحو 10 دقائق من هامبورغ.",
      "fa": "یک میز سفید، عالی و جادار — مینیمال، محکم و با ارتفاعی ایدئال. می‌توانستم مدت زیادی پشت آن بنشینم و خسته نشوم. طول و عرضش واقعاً عالی است: کامپیوتر، کیبورد، اسپیکرهای بزرگ، پایهٔ گوشی، کتاب‌ها، دفترها و کلی وسیلهٔ دیگر هم‌زمان به‌راحتی روی آن جا می‌شدند. خلاصه، میزی فوق‌العاده برای کار است.\n\nچند خط‌وخش کوچک و تقریباً نامحسوس نزدیک لبه‌ها دارد، اما در مجموع میز در وضعیت بسیار عالی است.\n\nطول: ۱۲۵ سانتی‌متر، عرض: ۷۴ سانتی‌متر، ارتفاع: ۷۵ سانتی‌متر.\n\nقیمت نو آن ۵۹٫۹۹ یورو است؛ من آن را ۳۵ یورو می‌دهم 🖥️\n\nفقط تحویل حضوری از Möllner Landstraße 89 در گلین‌ده، حدود ۱۰ دقیقه از هامبورگ."
    }
  },
  {
    "id": 17,
    "price": "10 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "plastic,metal",
    "size": "45×45×79 cm",
    "location": "Glinde, Möllner Landstraße 89",
    "images": [
      "images/item17-1788599078203-gvk6.jpg",
      "images/item17-1788690718165-3tfn.jpg"
    ],
    "title": {
      "en": "IKEA VIHALS chair, white",
      "de": "IKEA VIHALS Stuhl, weiß",
      "ru": "Стул IKEA VIHALS, белый",
      "uk": "Стілець IKEA VIHALS, білий",
      "es": "Silla IKEA VIHALS, blanca",
      "zh": "IKEA VIHALS 白色椅子",
      "tr": "IKEA VIHALS sandalye, beyaz",
      "ar": "كرسي IKEA VIHALS، أبيض",
      "fa": "صندلی سفید IKEA VIHALS"
    },
    "desc": {
      "en": "A comfortable, minimalist IKEA chair — well suited both for a dining table and for a desk. I used it for both, and in my new flat I did not even buy an office chair: on this one my back naturally stays straight, and it somehow always feels comfortable to sit on 🦦\n\nIt costs €19.99 new; selling for €10 🪑\n\nCollection only from Möllner Landstraße 89, Glinde — around 10 minutes from Hamburg.",
      "de": "Bequemer, minimalistischer IKEA-Stuhl — passt sowohl an den Esstisch als auch an einen Schreibtisch. Ich habe ihn für beides benutzt und mir in meiner neuen Wohnung nicht einmal einen Bürostuhl gekauft: Auf diesem Stuhl bleibt mein Rücken ganz von selbst gerade, und das Sitzen ist irgendwie immer bequem 🦦\n\nNeu kostet er 19,99 €, ich gebe ihn für 10 € ab 🪑\n\nNur Selbstabholung in der Möllner Landstraße 89 in Glinde — etwa 10 Minuten von Hamburg entfernt.",
      "ru": "Удобный и минималистичный стул IKEA — хорошо подойдёт и к обеденному, и к рабочему столу. Я сидел на нём и там, и там, и в новой квартире даже не стал покупать рабочее кресло: спина на этом стуле сама держится прямо, а сидеть всегда как-то удобно 🦦\n\nНовый стоит 19,99 €, отдам за 10 € 🪑\n\nСамовывоз: Möllner Landstraße 89, Глинде — примерно 10 минут от Гамбурга.",
      "uk": "Зручний і мінімалістичний стілець IKEA — добре підійде і до обіднього, і до робочого столу. Я сидів на ньому і там, і там, а в новій квартирі навіть не став купувати офісне крісло: на цьому стільці спина сама тримається рівно, а сидіти завжди якось зручно 🦦\n\nНовий коштує 19,99 €, віддам за 10 € 🪑\n\nСамовивіз: Möllner Landstraße 89, Глінде — приблизно 10 хвилин від Гамбурга.",
      "es": "Una silla IKEA cómoda y minimalista, ideal tanto para una mesa de comedor como para un escritorio. La he usado para ambas cosas y, en mi nuevo piso, ni siquiera compré una silla de oficina: en esta silla la espalda se mantiene recta de forma natural y, de algún modo, siempre resulta cómoda 🦦\n\nNueva cuesta 19,99 €; la vendo por 10 € 🪑\n\nSolo recogida en Möllner Landstraße 89, Glinde, a unos 10 minutos de Hamburgo.",
      "zh": "一把舒适、极简的 IKEA 椅子，很适合搭配餐桌或书桌。我两种用途都用过；在新公寓里，我甚至没有买办公椅：坐在这把椅子上，背部会自然保持挺直，而且总是感觉很舒适 🦦\n\n新品售价 19.99 欧元，现以 10 欧元出售 🪑\n\n仅限自取：Glinde，Möllner Landstraße 89，距离汉堡约 10 分钟。",
      "tr": "Rahat ve minimalist bir IKEA sandalyesi — hem yemek masası hem de çalışma masası için çok uygun. İkisinde de kullandım; yeni evimde çalışma koltuğu bile almadım: bu sandalyede sırtım kendiliğinden dik duruyor ve oturmak her zaman nedense rahat geliyor 🦦\n\nYenisi 19,99 €, 10 €’ya veriyorum 🪑\n\nSadece Glinde, Möllner Landstraße 89’dan elden teslim — Hamburg’a yaklaşık 10 dakika uzaklıkta.",
      "ar": "كرسي IKEA مريح وبسيط التصميم، مناسب لطاولة الطعام وكذلك لمكتب العمل. استخدمته لكليهما، وفي شقتي الجديدة لم أشترِ حتى كرسي مكتب: ظهري يبقى مستقيمًا تلقائيًا عند الجلوس عليه، والجلوس عليه مريح دائمًا بطريقة ما 🦦\n\nسعره الجديد 19.99 يورو، وأبيعه مقابل 10 يورو 🪑\n\nالاستلام الذاتي فقط من Möllner Landstraße 89 في غلينده، على بُعد نحو 10 دقائق من هامبورغ.",
      "fa": "صندلی IKEA راحت و مینیمال که هم برای میز غذاخوری و هم میز کار بسیار مناسب است. من هم کنار میز غذاخوری و هم برای کار از آن استفاده کرده‌ام، و در آپارتمان جدیدم حتی صندلی اداری نخریدم: روی این صندلی کمرم خودبه‌خود صاف می‌ماند و نشستن روی آن همیشه به‌نوعی راحت است 🦦\n\nقیمت نو آن ۱۹٫۹۹ یورو است؛ من آن را ۱۰ یورو می‌دهم 🪑\n\nفقط تحویل حضوری از Möllner Landstraße 89 در گلین‌ده، حدود ۱۰ دقیقه از هامبورگ."
    }
  },
  {
    "id": 16,
    "price": "25 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "wood,metal",
    "size": "140×60×73 cm",
    "location": "Glinde, Möllner Landstraße 89",
    "images": [
      "images/item16-1788597103301-1icf.jpg",
      "images/item16-1788597103403-u80m.jpg",
      "images/item16-1788597103538-b984.jpg",
      "images/item16-1788690646146-zx6b.jpg"
    ],
    "title": {
      "en": "IKEA LAGKAPTEN / ADILS desk, white-stained oak effect / white, 140 × 60 × 73 cm",
      "de": "IKEA LAGKAPTEN / ADILS Tisch, Eichenachbildung weiß / weiß, 140 × 60 × 73 cm",
      "ru": "Стол IKEA LAGKAPTEN / ADILS, эффект белёного дуба / белый, 140 × 60 × 73 см",
      "uk": "Стіл IKEA LAGKAPTEN / ADILS, ефект вибіленого дуба / білий, 140 × 60 × 73 см",
      "es": "Mesa IKEA LAGKAPTEN / ADILS, efecto roble blanqueado / blanco, 140 × 60 × 73 cm",
      "zh": "IKEA LAGKAPTEN / ADILS 书桌，白色橡木效果 / 白色，140 × 60 × 73 厘米",
      "tr": "IKEA LAGKAPTEN / ADILS masa, beyaz meşe görünümlü / beyaz, 140 × 60 × 73 cm",
      "ar": "طاولة IKEA LAGKAPTEN / ADILS، مظهر خشب بلوط مبيّض / أبيض، 140 × 60 × 73 سم",
      "fa": "میز IKEA LAGKAPTEN / ADILS، طرح بلوط سفیدشده / سفید، ۱۴۰ × ۶۰ × ۷۳ سانتی‌متر"
    },
    "desc": {
      "en": "A sturdy, long desk — ideal for a kitchen, studying or working from home. It is in good condition, with no scratches.\n\nLength: 140 cm, width: 60 cm, height: 73 cm.\n\nIt costs €40 new; selling for €25 📦\n\nCollection only from Möllner Landstraße 89, Glinde — around 10 minutes from Hamburg.",
      "de": "Stabiler, langer Tisch — ideal für die Küche, zum Lernen oder fürs Homeoffice. In gutem Zustand und ohne Kratzer.\n\nLänge: 140 cm, Breite: 60 cm, Höhe: 73 cm.\n\nNeu kostet er 40 €, ich gebe ihn für 25 € ab 📦\n\nNur Selbstabholung in der Möllner Landstraße 89 in Glinde — etwa 10 Minuten von Hamburg entfernt.",
      "ru": "Прочный, длинный стол — отлично подойдёт для кухни, учёбы или работы из дома. В хорошем состоянии, без царапин.\n\nДлина: 140 см, ширина: 60 см, высота: 73 см.\n\nНовый стоит 40 €, отдам за 25 € 📦\n\nТолько самовывоз: Möllner Landstraße 89, Глинде — примерно 10 минут от Гамбурга.",
      "uk": "Міцний і довгий стіл — чудово підійде для кухні, навчання або роботи з дому. У хорошому стані, без подряпин.\n\nДовжина: 140 см, ширина: 60 см, висота: 73 см.\n\nНовий коштує 40 €, віддам за 25 € 📦\n\nЛише самовивіз: Möllner Landstraße 89, Глінде — приблизно 10 хвилин від Гамбурга.",
      "es": "Mesa resistente y larga, ideal para la cocina, estudiar o trabajar desde casa. Está en buen estado y no tiene arañazos.\n\nLargo: 140 cm, ancho: 60 cm, alto: 73 cm.\n\nNueva cuesta 40 €; la vendo por 25 € 📦\n\nSolo recogida en Möllner Landstraße 89, Glinde, a unos 10 minutos de Hamburgo.",
      "zh": "一张结实、较长的桌子，非常适合厨房、学习或居家办公。状况良好，没有划痕。\n\n长度：140 厘米，宽度：60 厘米，高度：73 厘米。\n\n新品售价 40 欧元，现以 25 欧元出售 📦\n\n仅限自取：Glinde，Möllner Landstraße 89，距离汉堡约 10 分钟。",
      "tr": "Sağlam ve uzun bir masa — mutfak, ders çalışma veya evden çalışma için ideal. İyi durumda ve çiziksiz.\n\nUzunluk: 140 cm, genişlik: 60 cm, yükseklik: 73 cm.\n\nYenisi 40 €, 25 €’ya veriyorum 📦\n\nSadece Glinde, Möllner Landstraße 89’dan elden teslim — Hamburg’a yaklaşık 10 dakika uzaklıkta.",
      "ar": "طاولة متينة وطويلة، مناسبة للمطبخ أو الدراسة أو العمل من المنزل. بحالة جيدة ومن دون خدوش.\n\nالطول: 140 سم، العرض: 60 سم، الارتفاع: 73 سم.\n\nسعرها الجديدة 40 يورو، وأبيعها مقابل 25 يورو 📦\n\nالاستلام الذاتي فقط من Möllner Landstraße 89 في غلينده، على بُعد نحو 10 دقائق من هامبورغ.",
      "fa": "میزی محکم و بلند، مناسب برای آشپزخانه، درس‌خواندن یا کار از خانه. در وضعیت خوب و بدون خط‌وخش است.\n\nطول: ۱۴۰ سانتی‌متر، عرض: ۶۰ سانتی‌متر، ارتفاع: ۷۳ سانتی‌متر.\n\nقیمت نو آن ۴۰ یورو است؛ من آن را ۲۵ یورو می‌دهم 📦\n\nفقط تحویل حضوری از Möllner Landstraße 89 در گلین‌ده، حدود ۱۰ دقیقه از هامبورگ."
    }
  },
  {
    "id": 10,
    "price": "2 €",
    "reserved": false,
    "condition": "new",
    "material": "cotton",
    "size": "80 × 80 cm",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item10-1788523462109-chna.jpg"
    ],
    "title": {
      "en": "IKEA striped pillowcase, 80 × 80 cm, cotton",
      "de": "Gestreifter IKEA-Kissenbezug, 80 × 80 cm, Baumwolle",
      "ru": "Полосатая наволочка IKEA, 80 × 80 см, хлопок",
      "uk": "Смугаста наволочка IKEA, 80 × 80 см, бавовна",
      "es": "Funda de almohada IKEA a rayas, 80 × 80 cm, algodón",
      "zh": "IKEA 彩条纹枕套，80 × 80 厘米，纯棉",
      "tr": "Çizgili IKEA yastık kılıfı, 80 × 80 cm, pamuk",
      "ar": "غطاء وسادة مخطط من IKEA، مقاس 80 × 80 سم، قطن",
      "fa": "روبالشی راه‌راه IKEA، اندازهٔ ۸۰ × ۸۰ سانتی‌متر، پنبه"
    },
    "desc": {
      "en": "Almost new. I bought it before moving from Lübeck to Hamburg, imagining in my head how I would arrange my room — but this pillowcase did not fit into that vision.\n\nBright stripes in blue, pink, black, green, orange and beige 🌈\n\n100% cotton, hardly used.",
      "de": "Fast neu. Ich habe ihn vor meinem Umzug von Lübeck nach Hamburg gekauft und mir schon ausgemalt, wie ich mein Zimmer einrichten würde — aber dieser Kissenbezug passte nicht in dieses Bild.\n\nLeuchtende Streifen in Blau, Rosa, Schwarz, Grün, Orange und Beige 🌈\n\n100 % Baumwolle, kaum benutzt.",
      "ru": "Почти новая. Купил перед переездом из Любека в Гамбург, придумал в голове, как обустрою комнату, и эта наволочка в него не вписалась.\n\nЯркие полосы: синий, розовый, чёрный, зелёный, оранжевый, бежевый 🌈\n\n100% хлопок, практически не использовалась.",
      "uk": "Майже нова. Купив перед переїздом із Любека до Гамбурга, уявив, як облаштую кімнату, але ця наволочка не вписалася в цю картину.\n\nЯскраві смуги: сині, рожеві, чорні, зелені, помаранчеві та бежеві 🌈\n\n100% бавовна, практично не використовувалася.",
      "es": "Casi nueva. La compré antes de mudarme de Lübeck a Hamburgo e imaginé cómo decoraría mi habitación, pero esta funda de almohada no encajó en esa idea.\n\nRayas brillantes de color azul, rosa, negro, verde, naranja y beige 🌈\n\n100% algodón, prácticamente sin usar.",
      "zh": "几乎全新。我在从吕贝克搬到汉堡之前买了它，当时已经在脑海里规划好了房间的布置，但这个枕套没有融入那个设想。\n\n鲜艳条纹：蓝色、粉色、黑色、绿色、橙色和米色 🌈\n\n100% 纯棉，几乎未使用。",
      "tr": "Neredeyse yeni. Lübeck’ten Hamburg’a taşınmadan önce aldım; odamı nasıl düzenleyeceğimi kafamda tasarlamıştım ama bu yastık kılıfı o tasarıma uymadı.\n\nCanlı çizgiler: mavi, pembe, siyah, yeşil, turuncu ve bej 🌈\n\n%100 pamuk, neredeyse hiç kullanılmadı.",
      "ar": "شبه جديد. اشتريته قبل انتقالي من لوبيك إلى هامبورغ، وتخيلت كيف سأرتب غرفتي، لكن غطاء الوسادة هذا لم ينسجم مع تلك الفكرة.\n\nخطوط زاهية باللون الأزرق والوردي والأسود والأخضر والبرتقالي والبيج 🌈\n\nقطن 100%، لم يُستخدم تقريبًا.",
      "fa": "تقریباً نو است. پیش از اسباب‌کشی از لوبک به هامبورگ خریدمش و در ذهنم چیدمان اتاقم را تصور کرده بودم، اما این روبالشی با آن تصور جور درنیامد.\n\nراه‌راه‌های روشن به رنگ آبی، صورتی، مشکی، سبز، نارنجی و بژ 🌈\n\n۱۰۰٪ پنبه، تقریباً استفاده نشده است."
    },
    "category": "misc"
  },
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
      "en": "Retro waist bag with a Van Gogh-style print",
      "de": "Retro-Bauchtasche mit einem Print im Van-Gogh-Stil",
      "zh": "梵高风格印花复古腰包",
      "uk": "Ретро-сумка на пояс із принтом у стилі Ван Гога",
      "es": "Riñonera retro con estampado al estilo Van Gogh",
      "tr": "Van Gogh tarzı baskılı retro bel çantası",
      "ar": "حقيبة خصر كلاسيكية بطبعة على طراز فان غوخ",
      "fa": "کیف کمری رترو با طرحی به سبک ون‌گوگ"
    },
    "desc": {
      "ru": "Немного вайба 90-х, немного инди 🌙 Для тех, для кого одежда — способ рассказать о своих эстетических вкусах 🎨\n\nЧёрный регулируемый ремень, одно отделение на молнии. Помещаются, например, телефон и паспорт — или кошелёк, ключи и всякая мелочь. Носилась аккуратно.\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 🌻",
      "en": "A little 90s vibe, a little indie 🌙 For people who see clothing as a way to show their aesthetic taste 🎨\n\nBlack adjustable strap and one zip compartment. It fits, for example, a phone and a passport — or a wallet, keys and other small essentials. Carefully used.\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg 🌻",
      "de": "Ein bisschen 90er-Vibe, ein bisschen Indie 🌙 Für Menschen, für die Kleidung eine Möglichkeit ist, ihren ästhetischen Geschmack auszudrücken 🎨\n\nSchwarzer, verstellbarer Gurt und ein Fach mit Reißverschluss. Es passen zum Beispiel ein Handy und ein Reisepass hinein — oder ein Portemonnaie, Schlüssel und andere Kleinigkeiten. Sorgfältig getragen.\n\nÜbergabe an einer U-/S-Bahn-Station in der Hamburger Innenstadt 🌻",
      "zh": "一点 90 年代的氛围，一点独立风格 🌙 适合把服装当作表达自己审美品味方式的人 🎨\n\n黑色可调节肩带，带一个拉链隔层。例如可以放下手机和护照，或钱包、钥匙和各种小物件。使用仔细。\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 🌻",
      "uk": "Трохи вайбу 90-х, трохи інді 🌙 Для тих, для кого одяг — це спосіб розповісти про свої естетичні смаки 🎨\n\nЧорний регульований ремінь, одне відділення на блискавці. Вміщує, наприклад, телефон і паспорт — або гаманець, ключі та різні дрібниці. Носилася дбайливо.\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга 🌻",
      "es": "Un poco de vibra noventera, un poco de indie 🌙 Para quienes ven la ropa como una forma de mostrar sus gustos estéticos 🎨\n\nCorrea negra ajustable y un compartimento con cremallera. Caben, por ejemplo, un teléfono y un pasaporte, o una cartera, llaves y otras cosas pequeñas. Usada con cuidado.\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 🌻",
      "tr": "Biraz 90’lar havası, biraz indie 🌙 Kıyafetleri estetik zevklerini anlatmanın bir yolu olarak görenler için 🎨\n\nSiyah ayarlanabilir kayış ve fermuarlı bir bölme. Örneğin telefon ve pasaport ya da cüzdan, anahtarlar ve diğer küçük eşyalar sığar. Özenle kullanıldı.\n\nHamburg’un merkezindeki bir U-Bahn veya S-Bahn istasyonunda teslim 🌻",
      "ar": "قليل من أجواء التسعينيات، وقليل من طابع الإندي 🌙 لمن يرى في الملابس وسيلة للتعبير عن ذوقه الجمالي 🎨\n\nحزام أسود قابل للتعديل وجيب واحد بسحّاب. تتسع مثلًا لهاتف وجواز سفر، أو لمحفظة ومفاتيح وأغراض صغيرة أخرى. استُخدمت بعناية.\n\nالتسليم في إحدى محطات U-Bahn أو S-Bahn في وسط هامبورغ 🌻",
      "fa": "کمی حال‌وهوای دههٔ نود، کمی ایندی 🌙 برای کسانی که لباس را راهی برای نشان‌دادن سلیقهٔ زیبایی‌شناختی خود می‌دانند 🎨\n\nبند مشکیِ قابل تنظیم و یک محفظهٔ زیپ‌دار دارد. مثلاً گوشی و گذرنامه، یا کیف پول، کلیدها و خرده‌ریزها در آن جا می‌شوند. با دقت استفاده شده است.\n\nتحویل در یکی از ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 🌻"
    },
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "condition": "good",
    "category": "misc",
    "material": ""
  },
  {
    "id": 2,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item2-1788459617597-lrtp.jpg",
      "images/item2-1788459617726-1ora.jpg"
    ],
    "title": {
      "en": "T-shirt featuring the cover of Marcel Proust’s “Swann’s Way” — size L",
      "de": "T-Shirt mit dem Cover von Marcel Prousts „Unterwegs zu Swann“ — Größe L",
      "ru": "Футболка с обложкой «В сторону Свана» Марселя Пруста — размер L",
      "uk": "Футболка з обкладинкою «У бік Свана» Марселя Пруста — розмір L",
      "es": "Camiseta con la portada de «Por el camino de Swann», de Marcel Proust — talla L",
      "zh": "印有马塞尔·普鲁斯特《在斯万家那边》封面的 T 恤，L 码",
      "tr": "Marcel Proust’un “Swann Tarafı” kitabının kapaklı tişörtü — L beden",
      "ar": "تيشيرت يحمل غلاف «في طريق سوان» لمارسيل بروست — مقاس L",
      "fa": "تی‌شرت با طرح جلد «طرفِ خانهٔ سوان» از مارسل پروست — سایز L"
    },
    "desc": {
      "en": "Pink T-shirt featuring the cover of “Swann’s Way,” the first of the seven volumes of Marcel Proust’s novel “In Search of Lost Time.” For nerds like me who dream of one day reading all seven books of this greatest novel of the 20th century 👨🏻‍🏫\n\nOr for those who, like the French of the Rococo era, believe that pink is the colour of nobility 🦩\n\nSize L, unisex, 100% cotton. Practically new; worn once. The size didn’t suit me.\n\nHandover at U-Bahn or S-Bahn stations in central Hamburg 🪻",
      "de": "Rosa T-Shirt mit dem Cover von „Unterwegs zu Swann“, dem ersten von sieben Bänden aus Marcel Prousts Roman „Auf der Suche nach der verlorenen Zeit“. Für Nerds wie mich, die davon träumen, eines Tages alle sieben Bücher dieses großartigen Romans des 20. Jahrhunderts zu lesen 👨🏻‍🏫\n\nOder für alle, die wie die Französinnen und Franzosen des Rokoko glauben, dass Rosa die Farbe des Adels ist 🦩\n\nGröße L, unisex, 100 % Baumwolle. Praktisch neu, einmal getragen. Die Größe hat mir nicht gepasst.\n\nÜbergabe an U-/S-Bahn-Stationen in der Hamburger Innenstadt 🪻",
      "ru": "Розовая футболка с обложкой «В сторону Свана» — первой из семи книг романа «В поисках утраченного времени» Марселя Пруста. Для нёрдов вроде меня, кто мечтает однажды прочитать все 7 книг этой величайшей книги XX века 👨🏻‍🏫\n\nИли тех, кто, как французы эпохи рококо, считает, что розовый — это цвет благородства 🦩\n\nРазмер L, унисекс, 100% хлопок. Практически новая, надевал один раз. Не подошёл размер.\n\nПередача на станциях U-/S-Bahn в центральной части Гамбурга 🪻",
      "uk": "Рожева футболка з обкладинкою «У бік Свана» — першої з семи книг роману Марселя Пруста «У пошуках утраченого часу». Для нердів, таких як я, які мріють колись прочитати всі 7 книг цього найвеличнішого роману XX століття 👨🏻‍🏫\n\nАбо для тих, хто, як французи епохи рококо, вважає рожевий кольором шляхетності 🦩\n\nРозмір L, унісекс, 100% бавовна. Практично нова, одягав один раз. Не підійшов розмір.\n\nПередача на станціях U-/S-Bahn у центральній частині Гамбурга 🪻",
      "es": "Camiseta rosa con la portada de «Por el camino de Swann», el primero de los siete libros de la novela «En busca del tiempo perdido», de Marcel Proust. Para frikis como yo que sueñan con leer algún día los siete libros de esta gran novela del siglo XX 👨🏻‍🏫\n\nO para quienes, como los franceses de la época del rococó, creen que el rosa es el color de la nobleza 🦩\n\nTalla L, unisex, 100% algodón. Prácticamente nueva; usada una vez. La talla no me quedó bien.\n\nEntrega en estaciones de U-Bahn o S-Bahn en el centro de Hamburgo 🪻",
      "zh": "粉色 T 恤，印有马塞尔·普鲁斯特《在斯万家那边》的封面。这是小说《追忆似水年华》七卷本中的第一卷。适合像我一样梦想有一天读完这部 20 世纪伟大小说全部七卷的书呆子 👨🏻‍🏫\n\n也适合那些像洛可可时代的法国人一样，相信粉色是贵族颜色的人 🦩\n\nL 码，中性款，100% 纯棉。几乎全新，只穿过一次。尺码不适合我。\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 🪻",
      "tr": "Marcel Proust’un “Kayıp Zamanın İzinde” romanının yedi kitabından ilki olan “Swann Tarafı”nın kapağını taşıyan pembe tişört. Benim gibi, 20. yüzyılın bu en büyük romanının yedi kitabını da bir gün okumayı hayal eden edebiyat meraklıları için 👨🏻‍🏫\n\nYa da Rokoko döneminin Fransızları gibi pembenin soyluluğun rengi olduğuna inananlar için 🦩\n\nL beden, unisex, %100 pamuk. Neredeyse yeni; yalnızca bir kez giyildi. Bedeni bana uymadı.\n\nHamburg’un merkezindeki U-Bahn veya S-Bahn istasyonlarında teslim 🪻",
      "ar": "تيشيرت وردي يحمل غلاف «في طريق سوان»، الجزء الأول من الأجزاء السبعة لرواية مارسيل بروست «بحثًا عن الزمن المفقود». لعشاق الكتب المهووسين مثلي ممن يحلمون بقراءة الكتب السبعة كلها يومًا ما، لهذه الرواية العظيمة من القرن العشرين 👨🏻‍🏫\n\nأو لمن يرى، مثل الفرنسيين في عصر الروكوكو، أن الوردي لون النبلاء 🦩\n\nمقاس L، للجنسين، قطن 100%. شبه جديد، ارتديته مرة واحدة فقط. المقاس لم يناسبني.\n\nالتسليم في محطات U-Bahn أو S-Bahn في وسط هامبورغ 🪻",
      "fa": "تی‌شرتی صورتی با طرح جلد «طرفِ خانهٔ سوان»، نخستین کتاب از هفت جلد رمان «در جست‌وجوی زمان از دست‌رفته» مارسل پروست. برای نِردهایی مثل من که رؤیا دارند روزی هر هفت جلد این رمان بزرگ قرن بیستم را بخوانند 👨🏻‍🏫\n\nیا برای کسانی که مثل فرانسوی‌های دورهٔ روکوکو معتقدند صورتی رنگ اشرافیت است 🦩\n\nسایز L، یونیسکس، ۱۰۰٪ پنبه. تقریباً نو؛ فقط یک بار پوشیده شده است. سایزش برای من مناسب نبود.\n\nتحویل در ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 🪻"
    },
    "size": "L",
    "material": "cotton",
    "category": "clothing"
  },
  {
    "id": 3,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item3-1788459661665-wy2p.jpg",
      "images/item3-1788459661751-hahs.jpg"
    ],
    "title": {
      "en": "Short-sleeved striped viscose shirt — size M",
      "de": "Kurzarmhemd aus Viskose mit Streifen — Größe M",
      "ru": "Полосатая рубашка из вискозы с коротким рукавом — размер M",
      "uk": "Смугаста сорочка з віскози з коротким рукавом — розмір M",
      "es": "Camisa de viscosa a rayas y de manga corta — talla M",
      "zh": "短袖条纹粘胶衬衫，M 码",
      "tr": "Kısa kollu çizgili viskon gömlek — M beden",
      "ar": "قميص مخطط من الفيسكوز بأكمام قصيرة — مقاس M",
      "fa": "پیراهن آستین‌کوتاه راه‌راه از ویسکوز — سایز M"
    },
    "desc": {
      "en": "Cream-coloured, with stripes in autumn-leaf tones, sea green and a touch of black. It always reminded me of something Italian. I played more than one concert in it with my rock band 🇮🇹\n\nSize M, unisex, 100% viscose. Well cared for.\n\nHandover at U-Bahn or S-Bahn stations in central Hamburg 🌸",
      "de": "Cremefarben, mit Streifen in Herbstlaubfarben, Meeresgrün und etwas Schwarz. Es hat mich immer an etwas Italienisches erinnert. Ich habe darin mit meiner Rockband mehr als ein Konzert gespielt 🇮🇹\n\nGröße M, unisex, 100 % Viskose. Gut gepflegt.\n\nÜbergabe an U-/S-Bahn-Stationen in der Hamburger Innenstadt 🌸",
      "ru": "Кремовая, с полосками цвета осенних листьев, морского зелёного и немного чёрного. Всегда напоминала мне что-то итальянское. Сыграл в ней не один концерт с моей рок-группой 🇮🇹\n\nРазмер M, унисекс, 100% вискоза. Ухоженная.\n\nПередача на станциях U-/S-Bahn в центральной части Гамбурга 🌸",
      "uk": "Кремова, зі смужками кольорів осіннього листя, морської зелені та трохи чорного. Завжди нагадувала мені щось італійське. Я зіграв у ній не один концерт зі своїм рок-гуртом 🇮🇹\n\nРозмір M, унісекс, 100% віскоза. Доглянута.\n\nПередача на станціях U-/S-Bahn у центральній частині Гамбурга 🌸",
      "es": "Color crema, con rayas en tonos de hojas de otoño, verde mar y un toque de negro. Siempre me recordaba a algo italiano. Toqué más de un concierto con mi banda de rock llevándola puesta 🇮🇹\n\nTalla M, unisex, 100% viscosa. Bien cuidada.\n\nEntrega en estaciones de U-Bahn o S-Bahn en el centro de Hamburgo 🌸",
      "zh": "奶油色，带有秋叶色、海绿色以及一点黑色的条纹。它总让我想起某种意大利风格。我曾穿着它和我的摇滚乐队演出过不止一场音乐会 🇮🇹\n\nM 码，中性款，100% 粘胶纤维。保养良好。\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 🌸",
      "tr": "Krem rengi; sonbahar yaprakları tonlarında, deniz yeşilinde ve biraz siyah çizgili. Bana her zaman İtalyan bir şeyi hatırlatıyordu. Rock grubumla bu gömlekle birden fazla konserde çaldım 🇮🇹\n\nM beden, unisex, %100 viskon. Özenle kullanılmış.\n\nHamburg’un merkezindeki U-Bahn veya S-Bahn istasyonlarında teslim 🌸",
      "ar": "بلون كريمي، مع خطوط بألوان أوراق الخريف والأخضر البحري وقليل من الأسود. كان يذكرني دائمًا بشيء إيطالي. عزفت به في أكثر من حفلة موسيقية مع فرقتي الروك 🇮🇹\n\nمقاس M، للجنسين، فيسكوز 100%. مُعتنى به جيدًا.\n\nالتسليم في محطات U-Bahn أو S-Bahn في وسط هامبورغ 🌸",
      "fa": "کرم‌رنگ، با راه‌راه‌هایی به رنگ برگ‌های پاییزی، سبز دریایی و کمی مشکی. همیشه من را یاد چیزی ایتالیایی می‌انداخت. با گروه راکم بیش از یک کنسرت با آن اجرا کرده‌ام 🇮🇹\n\nسایز M، یونیسکس، ۱۰۰٪ ویسکوز. به‌خوبی نگهداری شده است.\n\nتحویل در ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 🌸"
    },
    "size": "M",
    "category": "clothing",
    "material": "viscose"
  },
  {
    "id": 4,
    "price": "5 €",
    "reserved": false,
    "condition": "good",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item4-1788516681636-oam5.jpg",
      "images/item4-1788516681752-vk9b.jpg"
    ],
    "title": {
      "en": "Short-sleeved floral-print shirt — United Colors of Benetton, size L",
      "de": "Kurzarmhemd mit Blumenmuster — United Colors of Benetton, Größe L",
      "ru": "Рубашка с цветочным принтом с коротким рукавом — United Colors of Benetton, размер L",
      "uk": "Сорочка з квітковим принтом і коротким рукавом — United Colors of Benetton, розмір L",
      "es": "Camisa de manga corta con estampado floral — United Colors of Benetton, talla L",
      "zh": "United Colors of Benetton 短袖碎花衬衫，L 码",
      "tr": "Kısa kollu çiçek desenli gömlek — United Colors of Benetton, L beden",
      "ar": "قميص قصير الأكمام بطبعة زهور — United Colors of Benetton، مقاس L",
      "fa": "پیراهن آستین‌کوتاه با طرح گل — United Colors of Benetton، سایز L"
    },
    "desc": {
      "en": "Cream-coloured shirt with a small pink-and-green floral print. It goes well with both jeans and trousers 🌺\n\nSize L, cotton, unisex. Well cared for.",
      "de": "Cremefarbenes Hemd mit kleinem rosa-grünem Blumenmuster. Lässt sich gut sowohl zu Jeans als auch zu Stoffhosen tragen 🌺\n\nGröße L, Baumwolle, unisex. Gut gepflegt.",
      "ru": "Кремовая рубашка с мелким розово-зелёным цветочным принтом. Хорошо носилась и с джинсами, и с брюками 🌺\n\nРазмер L, хлопок, унисекс. Ухоженная.",
      "uk": "Кремова сорочка з дрібним рожево-зеленим квітковим принтом. Добре пасує і до джинсів, і до штанів 🌺\n\nРозмір L, бавовна, унісекс. Доглянута.",
      "es": "Camisa color crema con un pequeño estampado floral rosa y verde. Queda bien tanto con vaqueros como con pantalones 🌺\n\nTalla L, algodón, unisex. Bien cuidada.",
      "zh": "奶油色衬衫，带有细小的粉色和绿色花卉图案。搭配牛仔裤或长裤都很好看 🌺\n\nL 码，棉质，中性款。保养良好。",
      "tr": "Küçük pembe-yeşil çiçek desenli krem rengi gömlek. Hem kot pantolonla hem de kumaş pantolonla güzel gider 🌺\n\nL beden, pamuklu, unisex. Özenle kullanılmış.",
      "ar": "قميص بلون كريمي مع طبعة زهور صغيرة بالوردي والأخضر. يناسب الجينز والبنطال على حد سواء 🌺\n\nمقاس L، قطن، للجنسين. مُعتنى به جيدًا.",
      "fa": "پیراهنی کرم‌رنگ با طرح گل ریز صورتی و سبز. هم با شلوار جین و هم با شلوار پارچه‌ای خوب ست می‌شود 🌺\n\nسایز L، نخی، یونیسکس. به‌خوبی نگهداری شده است."
    },
    "size": "L",
    "category": "clothing",
    "material": "cotton"
  },
  {
    "id": 5,
    "price": "13 €",
    "reserved": false,
    "condition": "good",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item5-1788517053870-yj7m.jpg",
      "images/item5-1788517053998-4wmk.jpg"
    ],
    "title": {
      "en": "Corduroy shirt jacket — H&M Relaxed Fit, size M",
      "de": "Cord-Hemdjacke — H&M Relaxed Fit, Größe M",
      "ru": "Вельветовая куртка-рубашка — H&M Relaxed Fit, размер M",
      "uk": "Вельветова сорочка-куртка — H&M Relaxed Fit, розмір M",
      "es": "Sobrecamisa de pana — H&M Relaxed Fit, talla M",
      "zh": "H&M Relaxed Fit 灯芯绒衬衫夹克，M 码",
      "tr": "Kadife gömlek ceket — H&M Relaxed Fit, M beden",
      "ar": "قميص-جاكيت من الكوردروي — H&M Relaxed Fit، مقاس M",
      "fa": "پیراهن-ژاکت مخمل کبریتی — H&M Relaxed Fit، سایز M"
    },
    "desc": {
      "en": "Olive-green corduroy 🫒\n\nCotton, with two patch pockets with flaps. I wore it while walking around sunny but still cool springtime Belgrade 🌿\n\nProbably unisex.",
      "de": "Olivgrüner Cord 🫒\n\nBaumwolle, mit zwei aufgesetzten Taschen mit Klappen. Ich habe sie bei Spaziergängen durch das sonnige, aber noch kühle Belgrad im Frühling getragen 🌿\n\nWahrscheinlich unisex.",
      "ru": "Оливковый вельвет 🫒\n\nХлопок, два накладных кармана с клапанами. Гулял в ней по солнечному, но ещё прохладному весеннему Белграду 🌿\n\nНаверное, унисекс.",
      "uk": "Оливковий вельвет 🫒\n\nБавовна, дві накладні кишені з клапанами. Гуляв у ній сонячним, але ще прохолодним весняним Белградом 🌿\n\nМабуть, унісекс.",
      "es": "Pana verde oliva 🫒\n\nAlgodón, con dos bolsillos de parche con solapa. La llevé paseando por el Belgrado primaveral, soleado pero todavía fresco 🌿\n\nProbablemente unisex.",
      "zh": "橄榄绿色灯芯绒 🫒\n\n棉质，配有两个带翻盖的贴袋。我曾穿着它漫步在阳光明媚、但仍有些凉意的贝尔格莱德春天 🌿\n\n大概是中性款。",
      "tr": "Zeytin yeşili kadife 🫒\n\nPamuklu, kapaklı iki aplike cepli. Onu güneşli ama hâlâ serin olan bahar Belgrad’ında yürürken giydim 🌿\n\nMuhtemelen unisex.",
      "ar": "كوردروي بلون أخضر زيتوني 🫒\n\nقطن، مع جيبين رقعيين بغطاء. ارتديتها أثناء التجول في بلغراد الربيعية المشمسة، لكنها كانت لا تزال باردة قليلًا 🌿\n\nعلى الأرجح للجنسين.",
      "fa": "مخمل کبریتی زیتونی 🫒\n\nنخی، با دو جیب روکارِ دردار. آن را در قدم‌زدن‌های بلگرادِ بهاریِ آفتابی اما هنوز خنک پوشیده‌ام 🌿\n\nاحتمالاً یونیسکس است."
    },
    "size": "M",
    "category": "clothing",
    "material": "хлопок,вельвет"
  },
  {
    "id": 6,
    "price": "5 €",
    "reserved": false,
    "condition": "fair",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item6-1788517567444-vmsa.jpg",
      "images/item6-1788517567566-ir3w.jpg"
    ],
    "title": {
      "en": "Retro jeans — slightly wider at the top, slightly narrower at the bottom",
      "de": "Retro-Jeans — oben etwas weiter, unten etwas schmaler",
      "ru": "Ретро-джинсы — чуть шире сверху, чуть уже снизу",
      "uk": "Ретро-джинси — трохи ширші зверху, трохи вужчі знизу",
      "es": "Vaqueros retro — un poco más anchos arriba y más estrechos abajo",
      "zh": "复古牛仔裤——上宽下窄",
      "tr": "Retro kot pantolon — üst kısmı biraz daha geniş, alt kısmı biraz daha dar",
      "ar": "جينز كلاسيكي — أوسع قليلًا من الأعلى وأضيق قليلًا من الأسفل",
      "fa": "شلوار جین رترو — کمی گشادتر در بالا و کمی تنگ‌تر در پایین"
    },
    "desc": {
      "en": "Jeans that I stole from my dad 🤫\n\nSlightly worn at the very bottom, but otherwise in good condition.\n\nProbably unisex, 100% cotton 👖",
      "de": "Jeans, die ich meinem Vater geklaut habe 🤫\n\nUnten ganz leicht abgenutzt, aber insgesamt in gutem Zustand.\n\nWahrscheinlich unisex, 100 % Baumwolle 👖",
      "ru": "Джинсы, которые я стащил у отца 🤫\n\nНемножко потёрты в самом низу, но в целом в порядке.\n\nНаверное, унисекс, 100% хлопок 👖",
      "uk": "Джинси, які я поцупив у свого тата 🤫\n\nТрохи потерті в самому низу, але загалом у хорошому стані.\n\nМабуть, унісекс, 100% бавовна 👖",
      "es": "Unos vaqueros que le robé a mi padre 🤫\n\nEstán un poco desgastados en el bajo, pero por lo demás están bien.\n\nProbablemente unisex, 100% algodón 👖",
      "zh": "从我爸那里“顺来”的一条牛仔裤 🤫\n\n最下面有一点磨损，但整体状态不错。\n\n大概是中性款，100% 纯棉 👖",
      "tr": "Babamdan arakladığım kot pantolon 🤫\n\nEn alt kısmı biraz yıpranmış, ama genel olarak iyi durumda.\n\nMuhtemelen unisex, %100 pamuk 👖",
      "ar": "جينز سرقته من والدي 🤫\n\nمهترئ قليلًا عند الحافة السفلية، لكنه بحالة جيدة عمومًا.\n\nعلى الأرجح مناسب للجنسين، قطن 100% 👖",
      "fa": "شلوار جینی که از پدرم کش رفته‌ام 🤫\n\nدر قسمت پایین کمی ساییدگی دارد، اما در کل وضعیت خوبی دارد.\n\nاحتمالاً یونیسکس، ۱۰۰٪ پنبه 👖"
    },
    "category": "clothing",
    "size": "M / 48",
    "material": "cotton"
  },
  {
    "id": 7,
    "price": "10 €",
    "reserved": false,
    "condition": "new",
    "material": "искусственная кожа",
    "size": "L",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item7-1788518334841-c8nd.jpg",
      "images/item7-1788518334936-drk9.jpg"
    ],
    "title": {
      "en": "Oversized faux-leather shirt jacket — Zara, size L",
      "de": "Oversize-Hemdjacke aus Kunstleder — Zara, Größe L",
      "ru": "Оверсайз-рубашка-куртка из искусственной кожи — Zara, размер L",
      "uk": "Оверсайз-сорочка-куртка зі штучної шкіри — Zara, розмір L",
      "es": "Sobrecamisa oversize de piel sintética — Zara, talla L",
      "zh": "Zara 仿皮革宽松衬衫夹克，L 码",
      "tr": "Oversize suni deri gömlek ceket — Zara, L beden",
      "ar": "قميص-جاكيت واسع من الجلد الصناعي — Zara، مقاس L",
      "fa": "پیراهن-ژاکت اورسایز از چرم مصنوعی — Zara، سایز L"
    },
    "desc": {
      "en": "New, never worn. It’s great, but I got the size wrong.\n\nDistressed-effect faux leather, oversized fit, patch pocket and cropped sleeves 🤎\n\nUnisex, size L.",
      "de": "Neu, nie getragen. Sie ist toll, aber ich habe die Größe falsch eingeschätzt.\n\nKunstleder im Used-Look, Oversize-Schnitt, aufgesetzte Tasche und verkürzte Ärmel 🤎\n\nUnisex, Größe L.",
      "ru": "Новая, не носил. Классная, но не угадал с размером.\n\nИскусственная кожа с эффектом потёртости, оверсайз-крой, накладной карман, укороченный рукав 🤎\n\nУнисекс, размер L.",
      "uk": "Нова, не носив. Класна, але не вгадав із розміром.\n\nШтучна шкіра з ефектом потертості, оверсайз-крій, накладна кишеня, укорочений рукав 🤎\n\nУнісекс, розмір L.",
      "es": "Nueva, sin usar. Está genial, pero me equivoqué de talla.\n\nPiel sintética con efecto desgastado, corte oversize, bolsillo de parche y manga corta 🤎\n\nUnisex, talla L.",
      "zh": "全新，未穿过。款式很好，但尺码不合适。\n\n做旧效果仿皮革、宽松版型、贴袋设计和短袖 🤎\n\n男女皆宜，L 码。",
      "tr": "Yeni, hiç giyilmedi. Çok güzel ama bedenini yanlış aldım.\n\nEskitilmiş görünümlü suni deri, oversize kesim, aplike cep ve kısa kol 🤎\n\nUnisex, L beden.",
      "ar": "جديد ولم أرتده. جميل جدًا، لكنني لم أُحسن اختيار المقاس.\n\nجلد صناعي بتأثير معتّق، بقصّة واسعة، وجيب رقعة، وأكمام قصيرة 🤎\n\nللجنسين، مقاس L.",
      "fa": "نو است و هرگز پوشیده نشده. خیلی خوب است، اما سایزش برایم مناسب نبود.\n\nچرم مصنوعی با ظاهر کهنه، برش اورسایز، جیب روکار و آستین کوتاه 🤎\n\nیونیسکس، سایز L."
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
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item8-1788520644119-6jey.jpg",
      "images/item8-1788520644221-n43l.jpg",
      "images/item8-1788520644289-imiy.jpg"
    ],
    "title": {
      "en": "Retro drawstring bag for shoes and sportswear",
      "de": "Retro-Turnbeutel für Schuhe und Sportkleidung",
      "ru": "Ретро-мешок на шнурках для обуви, спортивной формы",
      "uk": "Ретро-мішок на шнурках для взуття та спортивної форми",
      "es": "Bolsa retro con cordón para zapatos y ropa deportiva",
      "zh": "复古抽绳袋，适合装鞋和运动服",
      "tr": "Ayakkabı ve spor kıyafetleri için retro büzgülü çanta",
      "fa": "کیف بنددار رترو برای کفش و لباس ورزشی",
      "ar": "حقيبة رياضية كلاسيكية برباط للأحذية والملابس الرياضية"
    },
    "desc": {
      "en": "Bright retro design in petrol blue, black and red — for collectors of slightly weird merch, or simply for anyone who needs a practical bag for trainers, a T-shirt and sports trousers.\n\nDrawstring closure; lightweight and convenient for everyday use, sports or festivals 🎒\n\nGood condition, used.",
      "de": "Auffälliges Retro-Design in Petrol, Schwarz und Rot — für Sammlerinnen und Sammler von etwas seltsamem Merch oder einfach für alle, die einen praktischen Beutel für Sneaker, T-Shirt und Sporthose brauchen.\n\nMit Kordelzug, leicht und praktisch für den Alltag, Sport oder Festivals 🎒\n\nGuter Zustand, gebraucht.",
      "ru": "Яркий ретро-дизайн в цветах петроль, чёрный и красный — для коллекционеров странноватого мерча или просто для тех, кому нужен практичный мешок для кроссовок, футболки и спортивных штанов.\n\nЗатяжной шнурок, лёгкий и удобный для повседневной жизни, спорта или фестивалей 🎒\n\nХорошее состояние, б/у.",
      "uk": "Яскравий ретро-дизайн у кольорах петролю, чорному та червоному — для колекціонерів трохи дивного мерчу або просто для тих, кому потрібен практичний мішок для кросівок, футболки та спортивних штанів.\n\nЗатяжний шнурок, легкий і зручний для щоденного використання, спорту або фестивалів 🎒\n\nХороший стан, б/в.",
      "es": "Diseño retro llamativo en azul petróleo, negro y rojo, para coleccionistas de merchandising un poco peculiar o simplemente para quien necesite una bolsa práctica para zapatillas, camiseta y pantalón deportivo.\n\nCierre con cordón; ligera y cómoda para el día a día, el deporte o los festivales 🎒\n\nBuen estado, usada.",
      "zh": "石油蓝、黑色和红色的亮眼复古设计，适合收藏有点奇特周边的人，也适合需要一个实用袋子来装运动鞋、T 恤和运动裤的人。\n\n抽绳收口；轻便实用，适合日常生活、运动或音乐节 🎒\n\n状态良好，二手。",
      "tr": "Petrol mavisi, siyah ve kırmızı renklerde parlak retro tasarım — biraz tuhaf merch koleksiyoncuları ya da spor ayakkabı, tişört ve eşofman altını taşımak için pratik bir çantaya ihtiyaç duyan herkes için.\n\nBüzgülü ipli kapama; günlük kullanım, spor veya festivaller için hafif ve kullanışlı 🎒\n\nİyi durumda, kullanılmış.",
      "fa": "طراحی رترو و چشمگیر در رنگ‌های آبی پترولی، مشکی و قرمز — برای کلکسیونرهای کالاهای تبلیغاتی کمی عجیب، یا صرفاً برای کسانی که به یک کیف کاربردی برای کتانی، تی‌شرت و شلوار ورزشی نیاز دارند.\n\nدارای بند جمع‌شونده؛ سبک و مناسب برای استفادهٔ روزمره، ورزش یا فستیوال‌ها 🎒\n\nوضعیت خوب، کارکرده.",
      "ar": "تصميم كلاسيكي لافت بألوان الأزرق البترولي والأسود والأحمر — لهواة جمع المنتجات الترويجية الغريبة قليلًا، أو ببساطة لمن يحتاج إلى حقيبة عملية للأحذية الرياضية والقميص والبنطال الرياضي.\n\nإغلاق برباط سحب؛ خفيفة ومريحة للاستخدام اليومي أو الرياضة أو المهرجانات 🎒\n\nبحالة جيدة، مستعملة."
    },
    "category": "clothing"
  },
  {
    "id": 11,
    "price": "7 €",
    "reserved": false,
    "condition": "good",
    "material": "metal",
    "size": "1 L",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item11-1788528434514-o2nb.jpg"
    ],
    "title": {
      "en": "Rosmarino thermal bottle, black",
      "de": "Rosmarino Thermosflasche, schwarz",
      "ru": "Термобутылка Rosmarino, чёрная",
      "uk": "Термобутилка Rosmarino, чорна",
      "es": "Botella térmica Rosmarino, negra",
      "zh": "Rosmarino保温瓶，黑色",
      "tr": "Siyah Rosmarino termos şişe",
      "fa": "بطری حرارتی مشکی Rosmarino",
      "ar": "زجاجة حرارية سوداء من Rosmarino"
    },
    "desc": {
      "en": "In good condition. A couple of barely noticeable scratches, touched up with a special marker. Giving it up because I want fewer black things in my life — but for anyone who loves black 🖤, this is a great find.\n\nStainless steel, keeps drinks hot/cold, practically like new",
      "de": "In gutem Zustand. Ein paar kaum sichtbare Kratzer, mit einem speziellen Stift ausgebessert. Ich gebe sie ab, weil ich weniger schwarze Sachen will — aber für alle, die Schwarz lieben 🖤, ist das ein echter Fund.\n\nEdelstahl, hält Getränke warm/kalt, praktisch wie neu",
      "ru": "В нормальном состоянии. Есть пара незаметных царапин, замазанных специальным фломастером. Отказываюсь от неё, потому что хочу меньше чёрных вещей, но для тех, у кого цвет настроения чёрный 🖤 — хорошая находка.\n\nНержавеющая сталь, держит горячее/холодное, практически как новая",
      "uk": "У нормальному стані. Є пара непомітних подряпин, замазаних спеціальним фломастером. Відмовляюсь від неї, бо хочу менше чорних речей, але для тих, у кого колір настрою чорний 🖤 — це гарна знахідка.\n\nНержавіюча сталь, тримає гаряче/холодне, практично як нова",
      "es": "En buen estado. Tiene un par de rayones casi imperceptibles, retocados con un marcador especial. Me deshago de ella porque quiero menos cosas negras en mi vida, pero para quienes aman el negro 🖤, es un buen hallazgo.\n\nAcero inoxidable, mantiene bebidas frías/calientes, prácticamente como nueva",
      "zh": "状态良好。有几处几乎看不出的划痕，用专用记号笔修补过了。我想少一些黑色的东西所以出手 —— 但对于喜欢黑色的人 🖤，这绝对是个好东西。\n\n不锈钢材质，保温保冷，几乎和新的一样",
      "tr": "İyi durumda. Özel bir kalemle kapatılmış, neredeyse fark edilmeyen birkaç çizik var. Daha az siyah eşya istediğim için satıyorum; ama ruh hâlinin rengi siyah olanlar 🖤 için güzel bir keşif.\n\nPaslanmaz çelikten yapılmıştır, içecekleri sıcak veya soğuk tutar ve neredeyse yeni gibidir.",
      "fa": " در وضعیت خوبی است. چند خط‌وخش تقریباً نامحسوس دارد که با ماژیک مخصوص پوشانده شده‌اند. چون می‌خواهم وسایل مشکی کمتری داشته باشم، آن را می‌فروشم؛ اما اگر شما از طرفداران مشکیِ شیک و همیشگی هستید 🖤، این بطری انتخاب خوبی برایتان خواهد بود.\n\nاز فولاد ضدزنگ ساخته شده، نوشیدنی‌ها را گرم یا سرد نگه می‌دارد و تقریباً نو است.",
      "ar": "بحالة جيدة. توجد بعض الخدوش غير الملحوظة تقريبًا، وقد تم إخفاؤها بقلم خاص. أبيعها لأنني أريد امتلاك أشياء سوداء أقل، لكن إذا كنت من محبي الأسود الأنيق الذي لا يخرج من الموضة 🖤، فهذه الزجاجة اختيار جميل لك.\n\nمصنوعة من الفولاذ المقاوم للصدأ، وتحافظ على المشروبات ساخنة أو باردة، وهي شبه جديدة."
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
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item9-1788521005707-n6x9.jpg"
    ],
    "title": {
      "en": "Hot water bottle with fleece cover — Fashy, from DM",
      "de": "Wärmflasche mit Fleecebezug — Fashy, aus DM",
      "ru": "Грелка с флисовым чехлом — Fashy, из DM",
      "uk": "Грілка з флісовим чохлом — Fashy, з DM",
      "es": "Bolsa de agua caliente con funda de forro polar — Fashy, de DM",
      "zh": "Fashy 热水袋，带抓绒外套，购自 DM",
      "tr": "Polar kılıflı sıcak su torbası — Fashy, DM’den",
      "fa": "کیسهٔ آب گرم با روکش پشمی — Fashy، از DM",
      "ar": "قِربة ماء ساخن مع غطاء من الصوف — Fashy، من DM"
    },
    "desc": {
      "en": "I used it literally once. I’m selling it because I like minimalism. But if you want to get cosy in bed under a blanket with tea, biscuits and Netflix, this hot water bottle is exactly what you’re missing!\n\nAnd if, like me, you love Majorelle blue 💙\n\nFleece cover, in great condition, practically new.",
      "de": "Ich habe sie wirklich nur einmal benutzt. Ich verkaufe sie, weil ich Minimalismus liebe. Aber wenn du es dir gemütlich im Bett machen möchtest — unter einer Decke, mit Tee, Keksen und Netflix — dann ist diese Wärmflasche genau das, was dir noch fehlt!\n\nUnd wenn du wie ich Majorelle-Blau liebst 💙\n\nFleecebezug, guter Zustand, praktisch neu.",
      "ru": "Использовал буквально один раз. Продаю, потому что люблю минимализм. Но если вам хочется уютно устроиться на кроватке под пледом, с чаем, печеньками и Нетфликсом, эта грелка — как раз то, чего вам не хватает!\n\nА ещё — если вы, как я, любите мажорелево-синий 💙\n\nФлисовый чехол, хорошее состояние, практически новая.",
      "uk": "Використовував буквально один раз. Продаю, бо люблю мінімалізм. Але якщо вам хочеться затишно влаштуватися в ліжку під пледом, із чаєм, печивом і Netflix, ця грілка — саме те, чого вам бракує!\n\nА ще — якщо ви, як і я, любите мажорелево-синій колір 💙\n\nФлісовий чохол, хороший стан, практично нова.",
      "es": "La usé literalmente una sola vez. La vendo porque me gusta el minimalismo. Pero si te apetece acomodarte en la cama bajo una manta, con té, galletas y Netflix, esta bolsa de agua caliente es justo lo que te falta.\n\nY también si, como yo, te encanta el azul Majorelle 💙\n\nFunda de forro polar, en buen estado, prácticamente nueva.",
      "zh": "我真的只用过一次。因为我喜欢极简主义，所以决定出售。但如果你想躺在床上，盖着毯子，喝着茶、吃着饼干、看着 Netflix，这个热水袋正是你所缺少的东西！\n\n如果你也和我一样喜欢马约尔蓝 💙\n\n带抓绒外套，状态良好，几乎全新。",
      "tr": "Gerçekten sadece bir kez kullandım. Minimalizmi sevdiğim için satıyorum. Ama battaniyenin altında, çay, kurabiye ve Netflix eşliğinde yatakta keyif yapmak istiyorsanız, bu sıcak su torbası tam size göre!\n\nBir de benim gibi Majorelle mavisini seviyorsanız 💙\n\nPolar kılıflı, iyi durumda, neredeyse yeni.",
      "fa": "واقعاً فقط یک بار از آن استفاده کرده‌ام. چون مینیمالیسم را دوست دارم، می‌فروشمش. اما اگر دلتان می‌خواهد در تخت، زیر پتو، با چای، بیسکویت و نتفلیکس حسابی گرم و راحت باشید، این کیسهٔ آب گرم دقیقاً همان چیزی است که کم دارید!\n\nو اگر مثل من عاشق آبی مژرلی هستید 💙\n\nروکش پشمی، در وضعیت خوب، تقریباً نو.",
      "ar": "استخدمتها مرة واحدة فقط. أبيعها لأنني أحب البساطة. ولكن إذا كنت ترغب في الاسترخاء في السرير تحت بطانية، مع الشاي والبسكويت وNetflix، فهذه القِربة هي بالضبط ما ينقصك!\n\nوأيضًا إذا كنت، مثلي، تحب اللون الأزرق الماجوريل 💙\n\nغطاء من الصوف، بحالة جيدة، شبه جديدة."
    },
    "category": "misc"
  },
  {
    "id": 24,
    "price": "450 €",
    "reserved": false,
    "hidden": false,
    "category": "tech",
    "condition": "new",
    "material": "plastic,wood,metal",
    "size": "28 × 17 × 22 cm",
    "location": "Glinde, Möllner Landstraße 89",
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
      "zh": "ADAM Audio A5X 有源录音室监听音箱——一对",
      "tr": "ADAM Audio A5X aktif stüdyo monitörleri — çift",
      "fa": "مانیتورهای استودیویی اکتیو ADAM Audio A5X — یک جفت",
      "ar": "شاشات استوديو نشطة ADAM Audio A5X — زوج"
    },
    "desc": {
      "en": "The final boss of my moving sale — the thing that is hardest for me to part with. I would not be selling them, but unfortunately I need the money more right now. ❤️‍🩹 This is a pair of ADAM Audio A5X active studio monitors — a real gift for anyone who truly loves music. They are suitable both for everyday listening and serious sound-engineering work: mixing, production, and working with audio 🎶\n\nI bought them new for around €1,000 a few years ago, when this model was still being sold. The monitors are in excellent condition. There is only one small chip, covered with a black marker, so you will most likely not even notice where it is. I also have the original foam inserts, which make it possible to transport the monitors safely in boxes 📦\n\nSpecifications: active 2-way nearfield monitors; X-ART tweeters; 5.5-inch woofers; 50 Hz–50 kHz frequency response; 50 W + 50 W amplification per monitor; XLR and RCA inputs. Each monitor measures 28×17×22 cm and weighs around 6.6 kg 🔊\n\nPrice: €450 for both monitors.\nPickup from Glinde is strongly preferred because the monitors are valuable and heavy; a personal handover in central Hamburg may be possible by arrangement 🌿",
      "de": "Der Endgegner meines Umzugsverkaufs — und das Teil, von dem ich mich am schwersten trenne. Ich würde sie nicht verkaufen, aber gerade brauche ich das Geld leider mehr. ❤️‍🩹 Ein Paar aktive ADAM Audio A5X Studiomonitore — ein echtes Geschenk für Menschen, die Musik wirklich lieben. Sie eignen sich sowohl zum normalen Musikhören als auch für ernsthafte Audioarbeit: Mixing, Produktion und Sounddesign 🎶\n\nVor einigen Jahren habe ich sie neu für etwa 1.000 € gekauft, als dieses Modell noch erhältlich war. Die Monitore sind in einem hervorragenden Zustand. Es gibt nur eine winzige, mit schwarzem Marker übermalte Macke — vermutlich würdest du sie nicht einmal finden. Außerdem sind die originalen Styroporhalterungen dabei, mit denen sich die Monitore sicher in ihren Kartons transportieren lassen 📦\n\nTechnische Daten: aktive 2-Wege-Nahfeldmonitore; X-ART-Hochtöner; 5,5-Zoll-Tieftöner; Frequenzbereich 50 Hz–50 kHz; 50 W + 50 W Verstärkung pro Monitor; XLR- und RCA-Eingänge. Selbstabholung in Glinde sehr erwünscht — wegen Wert und Gewicht der Monitore, etwa 10 Minuten von Hamburg entfernt 🔊",
      "ru": "Финальный босс моей распродажи — вещь, с которой мне тяжелее всего расставаться. Я не стал бы их продавать, но сейчас, увы, деньги нужнее. ❤️‍🩹 Это пара активных студийных мониторов ADAM Audio A5X — просто подарок для тех, кто по-настоящему любит музыку. Они подходят и для обычного прослушивания, и для серьёзной звукорежиссёрской работы: сведения, продакшна и работы со звуком 🎶\n\nНесколько лет назад я покупал их новыми примерно за 1000 €, когда эта модель ещё продавалась. Мониторы в прекрасном состоянии. Есть только один крохотный скол, замазанный чёрным маркером, так что вы, скорее всего, даже не поймёте, где он. Также есть оригинальные пенопластовые держатели, с которыми мониторы можно безопасно перевозить в коробках 📦\n\nХарактеристики: активные двухполосные мониторы ближнего поля; твитеры X-ART; 5,5-дюймовые низкочастотные динамики; частотный диапазон 50 Гц–50 кГц; усиление 50 Вт + 50 Вт на каждый монитор; входы XLR и RCA. Из-за ценности и веса мониторов очень желателен самовывоз из Глинде — это примерно 10 минут от Гамбурга 🔊",
      "uk": "Фінальний бос мого розпродажу — річ, з якою мені найважче розлучатися. Я б не продавав їх, але зараз, на жаль, гроші потрібніші. ❤️‍🩹 Це пара активних студійних моніторів ADAM Audio A5X — справжній подарунок для тих, хто по-справжньому любить музику. Вони підходять і для звичайного прослуховування, і для серйозної роботи зі звуком: зведення, продакшну та звукорежисури 🎶\n\nКілька років тому я купив їх новими приблизно за 1000 €, коли ця модель ще продавалася. Монітори у чудовому стані. Є лише один крихітний скол, замальований чорним маркером, тож ви, найімовірніше, навіть не знайдете його. Також є оригінальні пінопластові тримачі, з якими монітори можна безпечно перевозити в коробках 📦\n\nХарактеристики: активні двосмугові монітори ближнього поля; твітери X-ART; 5,5-дюймові низькочастотні динаміки; частотний діапазон 50 Гц–50 кГц; підсилення 50 Вт + 50 Вт на кожен монітор; входи XLR і RCA. Через цінність і вагу моніторів дуже бажаний самовивіз із Глінде — приблизно за 10 хвилин від Гамбурга 🔊",
      "es": "El jefe final de mi venta por mudanza: es lo que más me cuesta dejar ir. No los vendería, pero ahora mismo, por desgracia, necesito más el dinero. ❤️‍🩹 Es una pareja de monitores de estudio activos ADAM Audio A5X, un auténtico regalo para quien de verdad ama la música. Sirven tanto para escuchar música normalmente como para trabajo de audio serio: mezcla, producción y diseño de sonido 🎶\n\nLos compré nuevos hace unos años por unos 1.000 €, cuando este modelo todavía se vendía. Los monitores están en un estado excelente. Solo tienen un desconchón diminuto, cubierto con rotulador negro, así que probablemente ni siquiera sabrás dónde está. También incluyo los soportes originales de espuma, con los que se pueden transportar de forma segura en sus cajas 📦\n\nCaracterísticas: monitores activos de campo cercano de dos vías; tweeters X-ART; woofers de 5,5 pulgadas; respuesta de frecuencia de 50 Hz a 50 kHz; amplificación de 50 W + 50 W por monitor; entradas XLR y RCA. Por el valor y el peso de los monitores, se prefiere mucho la recogida en persona en Glinde, a unos 10 minutos de Hamburgo 🔊",
      "zh": "这是我搬家出售物品里的“最终 Boss”，也是我最难割舍的一件。要不是现在确实更需要钱，我不会卖掉它们。❤️‍🩹 这是一对 ADAM Audio A5X 有源录音室监听音箱，是送给真正热爱音乐的人一份绝佳的礼物。它们既适合日常听音乐，也适合严肃的音频工作，例如混音、音乐制作和声音设计 🎶\n\n几年前，这个型号仍在销售时，我以约 1000 € 的价格购入了全新的音箱。它们状态极佳，只有一处非常小的磕碰，已用黑色记号笔遮盖，所以你很可能根本找不到它。还附带原装泡沫固定件，可以让音箱安全地装在原包装盒内运输 📦\n\n参数：有源两分频近场监听音箱；X-ART 高音单元；5.5 英寸低音单元；频率响应 50 Hz–50 kHz；每只音箱配备 50 W + 50 W 功放；XLR 和 RCA 输入接口。由于音箱价值较高且比较重，强烈建议在格林德自取，距离汉堡约 10 分钟车程 🔊",
      "tr": "Taşınma satışımın son boss’u — ve vedalaşması benim için en zor olan şey. Satmak istemezdim ama şu anda ne yazık ki paraya daha çok ihtiyacım var. ❤️‍🩹 Bunlar bir çift aktif ADAM Audio A5X stüdyo monitörü; müziği gerçekten seven biri için adeta bir hediye. Hem normal müzik dinlemek hem de ciddi ses çalışmaları, miksaj, prodüksiyon ve ses tasarımı için uygunlar 🎶\n\nBirkaç yıl önce, bu model hâlâ satılırken onları yeni olarak yaklaşık 1.000 €’ya aldım. Monitörler mükemmel durumda. Sadece siyah kalemle kapatılmış küçücük bir çizik var; büyük ihtimalle nerede olduğunu bile fark etmezsiniz. Kutularında güvenle taşınabilmeleri için orijinal köpük tutucuları da mevcut 📦\n\nÖzellikler: aktif iki yollu yakın alan monitörleri; X-ART tweeter’lar; 5,5 inç woofer’lar; 50 Hz–50 kHz frekans aralığı; her monitörde 50 W + 50 W amplifikasyon; XLR ve RCA girişleri. Monitörlerin değeri ve ağırlığı nedeniyle Glinde’den elden teslim çok tercih edilir — Hamburg’a yaklaşık 10 dakika uzaklıkta 🔊",
      "fa": "باس نهاییِ حراج وسایل من — چیزی که جداشدن از آن برایم از همه سخت‌تر است. اگر الان به پول نیاز نداشتم، آن‌ها را نمی‌فروختم. ❤️‍🩹 این یک جفت مانیتور استودیویی اکتیو ADAM Audio A5X است؛ هدیه‌ای واقعی برای کسانی که موسیقی را واقعاً دوست دارند. هم برای شنیدن معمولی موسیقی مناسب‌اند و هم برای کار حرفه‌ای صدا: میکس، پروداکشن و طراحی صدا 🎶\n\nچند سال پیش، وقتی این مدل هنوز فروخته می‌شد، آن‌ها را نو با قیمت حدود ۱۰۰۰ یورو خریدم. مانیتورها در وضعیت بسیار عالی هستند. فقط یک پریدگی بسیار کوچک دارند که با ماژیک مشکی پوشانده شده؛ احتمالاً حتی متوجه نمی‌شوید کجاست. نگهدارنده‌های فومی اصلی هم همراهشان هستند تا بتوان مانیتورها را با خیال راحت در جعبه‌هایشان جابه‌جا کرد 📦\n\nمشخصات: مانیتورهای اکتیو دوطرفهٔ میدان نزدیک؛ توییترهای X-ART؛ ووفرهای ۵٫۵ اینچی؛ بازهٔ فرکانسی ۵۰ هرتز تا ۵۰ کیلوهرتز؛ توان ۵۰ وات + ۵۰ وات برای هر مانیتور؛ ورودی‌های XLR و RCA. به‌دلیل ارزش و وزن مانیتورها، تحویل حضوری در گلینده بسیار ترجیح دارد — حدود ۱۰ دقیقه با هامبورگ فاصله دارد 🔊",
      "ar": "هذه هي «الزعيم الأخير» في بيع أغراضي — والشيء الأصعب بالنسبة لي أن أودّعه. لم أكن لأبيعها، لكنني للأسف بحاجة إلى المال أكثر في الوقت الحالي. ❤️‍🩹 إنها زوج من شاشات الاستوديو النشطة ADAM Audio A5X، هدية حقيقية لمن يحب الموسيقى فعلًا. تناسب الاستماع العادي للموسيقى وكذلك العمل الجاد في الصوت: الميكساج، والإنتاج، وتصميم الصوت 🎶\n\nاشتريتها جديدة قبل عدة سنوات بحوالي 1000 €، عندما كان هذا الموديل لا يزال يُباع. الشاشات بحالة ممتازة. يوجد خدش صغير جدًا فقط، غطيته بقلم أسود، لذلك على الأرجح لن تلاحظوا حتى مكانه. كما تتوفر حوامل الفوم الأصلية، ويمكن بواسطتها نقل الشاشات بأمان داخل صناديقها 📦\n\nالمواصفات: شاشات مجال قريب نشطة ثنائية المسار؛ مكبرات صوت عالية X-ART؛ مكبرات ترددات منخفضة بقياس 5.5 بوصة؛ نطاق ترددي من 50 هرتز إلى 50 كيلوهرتز؛ تضخيم 50 واط + 50 واط لكل شاشة؛ مداخل XLR وRCA. بسبب قيمة الشاشات ووزنها، يُفضّل بشدة الاستلام الشخصي من غلينده، على بُعد نحو 10 دقائق من هامبورغ 🔊"
    }
  },
  {
    "id": 13,
    "price": "25 €",
    "reserved": false,
    "condition": "good",
    "material": "plastic",
    "size": "",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item13-1788541995741-trtu.jpg",
      "images/item13-1788541995838-30d6.jpg",
      "images/item13-1788541995905-ncn9.jpg",
      "images/item13-1788541995967-623t.jpg",
      "images/item13-1788542004842-vv94.jpg"
    ],
    "title": {
      "en": "Phone lock box for focused work — against getting sucked into Instagram and doomscrolling",
      "de": "Handy-Schließbox für konzentriertes Arbeiten — gegen Instagram-Sog und Doomscrolling",
      "ru": "Локер для телефона для сфокусированной работы — против залипания в инстаграме и думскроллинга",
      "uk": "Локер для телефона для зосередженої роботи — проти залипання в Instagram і думскролінгу",
      "es": "Caja con temporizador para bloquear el móvil — para trabajar con concentración y evitar el scroll infinito",
      "zh": "手机锁盒——帮助专注工作，远离 Instagram 和无休止刷屏",
      "tr": "Odaklanarak çalışmak için telefon kilit kutusu — Instagram’a kapılıp gitmeye ve doomscrolling’e karşı",
      "fa": "جعبهٔ قفل‌دار برای گوشی و کار متمرکز — برای جلوگیری از غرق‌شدن در اینستاگرام و اسکرول بی‌پایان",
      "ar": "صندوق قفل للهاتف للعمل بتركيز — ضد التعلّق بـ Instagram والتمرير اللانهائي"
    },
    "desc": {
      "en": "A locker for your phone from the British brand Virtus Project. Genius, really: you put your phone in, set a time from 5 minutes to several hours, and it locks. If an urgent call comes in, there's a little pad you can push out to answer it — but against distractions like messengers, TikTok and reels, it's iron-clad. No expensive apps or extensions you end up bypassing anyway — this actually works!\n\nIf you're ADHD like me, this thing will finally help you find some zen. And if you have a TikTok-addicted kid, it's a solid nudge toward homework.\n\nIf I didn't need the cash right now, I wouldn't be selling it. Cost me €70 shipped from the UK, worth every cent. Letting it go for €25! 🐈‍⬛",
      "de": "Abschließbare Handybox der britischen Firma The Virtus Project. Eine tolle Sache: Du legst dein Handy hinein, stellst eine Zeit von 5 Minuten bis zu mehreren Stunden ein — und die Box schließt es ein. Bei einem dringenden Anruf gibt es eine kleine Öffnung, durch die du zum Antworten an den Bildschirm kommst. Gegen Ablenkungen wie Messenger, TikTok und Reels schützt sie aber zuverlässig. Keine teuren Apps, die man am Ende doch umgehen kann — das hier funktioniert wirklich!\n\nWenn du wie ich ADHS hast, hilft dir dieses Teil vielleicht endlich dabei, etwas Zen und Fokus zu finden 🧘 Und wenn du ein TikTok-süchtiges Kind hast, ist es ein guter Weg, es sanft zum Lernen zu bewegen 🙇🏽\n\nWenn ich das Geld nicht gerade jetzt brauchen würde, würde ich sie nicht verkaufen. Mit Versand aus Großbritannien hat sie 70 € gekostet, aber es war das wert. Ich gebe sie für 25 € ab! 🐈‍⬛",
      "ru": "Блокирующийся кейс для телефона от британской фирмы The Virtus Project. Классная штука: кладёшь телефон, ставишь время от 5 минут до нескольких часов — и локер блокирует его. Если будет срочный звонок, есть подушечка, которую можно вытолкнуть и ответить. А вот от отвлечений типа мессенджеров, тиктока и рилсов защищает железно. Никаких дорогих приложений, которые всё равно можно обойти, — тут реально работает!\n\nЕсли вы такой же СДВГ-шник, как я, эта штука наконец поможет обрести дзен 🧘 А если у вас тикток-зависимый ребёнок — хороший способ подтолкнуть его к учёбе 🙇🏽\n\nЕсли бы не нужны были деньги прямо сейчас, не продавал бы. С доставкой из Британии обошлось в 70 €, но того стоило. Отдам за 25 €! 🐈‍⬛",
      "uk": "Блокувальний кейс для телефона від британської компанії The Virtus Project. Класна річ: кладете телефон усередину, встановлюєте час від 5 хвилин до кількох годин — і локер блокується. Якщо буде терміновий дзвінок, є невелика заслінка, яку можна відкрити й відповісти. А от від відволікань на месенджери, TikTok і Reels він захищає надійно. Жодних дорогих застосунків, які все одно можна обійти, — це справді працює!\n\nЯкщо у вас, як і в мене, СДУГ, ця річ нарешті може допомогти знайти трохи дзену та зосередженості 🧘 А якщо у вас є дитина, залежна від TikTok, це хороший спосіб м’яко підштовхнути її до навчання 🙇🏽\n\nЯкби мені зараз не були потрібні гроші, я б його не продавав. Разом із доставкою з Великої Британії він обійшовся у 70 €, але був того вартий. Віддам за 25 €! 🐈‍⬛",
      "es": "Caja bloqueable para el móvil de la marca británica The Virtus Project. Es una idea genial: metes el teléfono dentro, eliges un tiempo de 5 minutos a varias horas y la caja se bloquea. Si recibes una llamada urgente, hay una pequeña abertura que puedes sacar para contestar. Pero contra distracciones como los mensajeros, TikTok y los reels, funciona de maravilla. Sin apps caras que al final siempre acabas saltándote: ¡esto sí funciona de verdad!\n\nSi tienes TDAH como yo, esta cosa por fin puede ayudarte a encontrar un poco de zen y concentración 🧘 Y si tienes un hijo enganchado a TikTok, es una buena forma de animarlo a ponerse con los estudios 🙇🏽\n\nSi no necesitara el dinero ahora mismo, no la vendería. Me costó 70 € con envío desde Reino Unido, pero valió la pena. La dejo por 25 €! 🐈‍⬛",
      "zh": "英国公司 The Virtus Project 的可锁手机盒。这个设计很棒：把手机放进去，设定从 5 分钟到数小时的时间，锁盒就会把手机锁起来。如果有紧急来电，可以打开一个小挡板接听；但对于聊天软件、TikTok 和 Reels 等干扰，它能有效阻止你分心。不需要昂贵、最后还是总能被绕过的 App——这个东西真的有效！\n\n如果你和我一样有 ADHD，它或许终于能帮你找到一点平静和专注 🧘 如果家里有沉迷 TikTok 的孩子，这也是鼓励他去学习的好办法 🙇🏽\n\n如果我现在不需要用钱，我不会卖掉它。加上从英国寄来的运费，一共花了我 70 €，但完全值得。现在 25 € 出！🐈‍⬛",
      "tr": "İngiliz The Virtus Project firmasının kilitlenebilir telefon kutusu. Çok iyi bir şey: Telefonunuzu içine koyuyorsunuz, 5 dakikadan birkaç saate kadar bir süre ayarlıyorsunuz ve kutu telefonu kilitliyor. Acil bir arama gelirse cevaplamak için dışarı itilebilen küçük bir bölmesi var. Ancak mesajlaşma uygulamaları, TikTok ve Reels gibi dikkat dağıtıcı şeylere karşı çok etkili. Sonunda her hâlükârda aşılabilen pahalı uygulamalar yok — bu gerçekten işe yarıyor!\n\nBenim gibi DEHB’niz varsa, bu şey sonunda biraz zen ve odaklanma bulmanıza yardımcı olabilir 🧘 TikTok bağımlısı bir çocuğunuz varsa da onu ders çalışmaya teşvik etmenin iyi bir yolu 🙇🏽\n\nŞu anda paraya ihtiyacım olmasaydı satmazdım. Birleşik Krallık’tan kargoyla birlikte 70 €’ya mal oldu, ama buna değdi. 25 €’ya veriyorum! 🐈‍⬛",
      "fa": "یک کیس قفل‌دار برای گوشی از شرکت بریتانیایی The Virtus Project. وسیلهٔ خیلی خوبی است: گوشی را داخلش می‌گذارید، زمانی از ۵ دقیقه تا چند ساعت تعیین می‌کنید و جعبه گوشی را قفل می‌کند. اگر تماس ضروری داشته باشید، یک دریچهٔ کوچک دارد که می‌توانید آن را بیرون بکشید و پاسخ دهید. اما در برابر حواس‌پرتی‌هایی مثل پیام‌رسان‌ها، تیک‌تاک و ریلز واقعاً محکم عمل می‌کند. نه اپلیکیشن‌های گران‌قیمت که آخرش هم می‌شود دورشان زد — این یکی واقعاً جواب می‌دهد!\n\nاگر مثل من ADHD دارید، این وسیله بالاخره می‌تواند کمک کند کمی آرامش و تمرکز پیدا کنید 🧘 اگر هم فرزندی دارید که به تیک‌تاک معتاد است، راه خوبی برای تشویقش به درس‌خواندن است 🙇🏽\n\nاگر همین حالا به پول نیاز نداشتم، آن را نمی‌فروختم. با ارسال از بریتانیا ۷۰ یورو برایم هزینه داشت، اما ارزشش را داشت. با قیمت ۲۵ یورو می‌فروشم! 🐈‍⬛",
      "ar": "صندوق قابل للقفل للهاتف من الشركة البريطانية The Virtus Project. فكرة رائعة: تضع الهاتف بداخله، وتحدد مدة من 5 دقائق إلى عدة ساعات، ثم يقفل الصندوق الهاتف. إذا وردت مكالمة عاجلة، توجد فتحة صغيرة يمكن فتحها للرد. أما أمام مصادر التشتيت مثل تطبيقات المراسلة وTikTok وReels، فهو فعّال جدًا. لا تطبيقات باهظة يمكن التحايل عليها في النهاية — هذا الشيء يعمل فعلًا!\n\nإذا كنت تعاني من اضطراب فرط الحركة ونقص الانتباه مثلي، فقد تساعدك هذه القطعة أخيرًا على إيجاد بعض الهدوء والتركيز 🧘 وإذا كان لديك طفل مدمن على TikTok، فهي طريقة جيدة لتشجيعه على الدراسة 🙇🏽\n\nلو لم أكن بحاجة إلى المال الآن، لما بعته. كلّفني 70 € مع الشحن من المملكة المتحدة، لكنه كان يستحق ذلك. أبيعُه مقابل 25 €! 🐈‍⬛"
    },
    "category": "tech"
  },
  {
    "id": 12,
    "price": "7 €",
    "reserved": false,
    "condition": "good",
    "material": "plastic,metal",
    "size": "",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
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
      "zh": "Deppa USB-C 扩展坞",
      "fa": "هاب USB-C دیپا",
      "tr": "USB-C hub — Deppa",
      "ar": "موزّع USB-C من Deppa"
    },
    "desc": {
      "en": "Compact USB-C hub with a range of ports for a MacBook.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× memory card slot (SD/microSD)\n\nWorks perfectly, good condition.",
      "de": "Kompakter USB-C-Hub mit einer Auswahl an Anschlüssen für ein MacBook.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× Speicherkartensteckplatz (SD/microSD)\n\nFunktioniert einwandfrei, guter Zustand.",
      "ru": "Компактный USB-C хаб с набором портов для макбука.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× слот для карты памяти (SD/microSD)\n\nРаботает исправно, хорошее состояние.",
      "uk": "Компактний USB-C-хаб із набором портів для MacBook.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× слот для карти пам’яті (SD/microSD)\n\nПрацює справно, хороший стан.",
      "es": "Hub USB-C compacto con varios puertos para un MacBook.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× ranura para tarjeta de memoria (SD/microSD)\n\nFunciona perfectamente y está en buen estado.",
      "zh": "小巧的 USB-C 扩展坞，配有适用于 MacBook 的多种接口。\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× 存储卡插槽（SD/microSD）\n\n功能正常，状态良好。",
      "fa": "هاب USB-C جمع‌وجور با مجموعه‌ای از درگاه‌ها برای مک‌بوک.\n\n۲× USB-A\n۱× USB-C\n۱× HDMI\n۱× شیار کارت حافظه (SD/microSD)\n\nکاملاً درست کار می‌کند و در وضعیت خوبی است.",
      "tr": "MacBook için çeşitli bağlantı noktalarına sahip kompakt USB-C hub.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× hafıza kartı yuvası (SD/microSD)\n\nSorunsuz çalışıyor, iyi durumda.",
      "ar": "موزّع USB-C صغير مزوّد بمجموعة من المنافذ لجهاز MacBook.\n\n2× USB-A\n1× USB-C\n1× HDMI\n1× فتحة لبطاقات الذاكرة (SD/microSD)\n\nيعمل بشكل سليم وحالته جيدة."
    },
    "category": "tech"
  },
  {
    "id": 21,
    "price": "20 € за весь набор; по отдельности: спальник — 10 €, пенка — 5 €, кружка — 5 €",
    "reserved": false,
    "hidden": false,
    "category": "misc",
    "condition": "good",
    "material": "",
    "size": "",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item21-1788604125432-q21x.jpg",
      "images/item21-1788604125540-ua8a.jpg",
      "images/item21-1788604125629-a0ip.jpg"
    ],
    "title": {
      "en": "Camping set: Quechua sleeping bag + foam mat + blue mug",
      "de": "Camping-Set: Quechua-Schlafsack + Isomatte + blaue Tasse",
      "ru": "Походный набор: спальник Quechua + пенка + синяя кружка",
      "uk": "Туристичний набір: спальник Quechua + пінка + синя кружка",
      "es": "Set de camping: saco de dormir Quechua + esterilla + taza azul",
      "zh": "户外套装：Quechua 睡袋＋泡沫防潮垫＋蓝色杯子",
      "tr": "Kamp seti: Quechua uyku tulumu + mat + mavi kupa",
      "fa": "ست کمپینگ: کیسه‌خواب Quechua + زیرانداز فومی + لیوان آبی",
      "ar": "مجموعة للتخييم: كيس نوم Quechua + حصيرة إسفنجية + كوب أزرق"
    },
    "desc": {
      "en": "If you are a Dharma Bum like me and, after watching Into The Wild, wanted to leave everything behind and live in the forest forever, this camping set is for you. It also works perfectly well for festivals, trips, or unexpected overnight stays. Everything is in excellent condition 🎒\n\nThe sleeping bag is a QUECHUA Basic 20 °C model (190×72 cm). It can be fully opened and used as a blanket when it gets warm. The foam mat is thick yet lightweight and rolls up easily; it measures 180×50 cm. The sturdy blue metal camping mug comes in a lovely majorelle-blue shade, perfect for tea or coffee outdoors 🍵\n\nNew prices at Decathlon: sleeping bag €15, foam mat €9, mug around €10 — €34 for everything. I’m letting the full set go for €20 🏕️  \nAlso available separately: sleeping bag €10, foam mat €5, mug €5.  \nHandover at a U-Bahn or S-Bahn station in central Hamburg 🌿",
      "de": "Wenn du genau wie ich ein Dharma-Bum bist und nach dem Film „Into the Wild“ für immer in die Wälder ziehen wolltest, ist dieses Camping-Set genau das Richtige für dich. Es eignet sich aber auch einfach für Festivals, Reisen oder spontane Übernachtungen. Alles ist in einem ausgezeichneten Zustand 🎒\n\nDer Schlafsack ist ein QUECHUA Basic 20 °C, 190 × 72 cm. Er lässt sich vollständig öffnen und bei Wärme als Decke benutzen. Die Isomatte ist dick, dabei leicht und lässt sich genauso einfach zusammenrollen; Größe: 180 × 50 cm. Die blaue Camping-Tasse aus Metall ist robust und hat eine schöne Majorelle-Farbe — perfekt für Tee oder Kaffee draußen in der Natur 🍵\n\nNeupreise bei Decathlon: Schlafsack — 15 €, Isomatte — 9 €, Tasse — etwa 10 €, also insgesamt 34 €. Ich gebe das ganze Set für 20 € ab 🏕️ Auch einzeln möglich: Schlafsack — 10 €, Isomatte — 5 €, Tasse — 5 €.\n\nÜbergabe an einer U-/S-Bahn-Station in der Hamburger Innenstadt 🌿",
      "ru": "Если вы такой же бродяга Дхармы, как я, и после просмотра «В диких условиях» хотели навсегда уйти в леса, этот походный набор для вас. Впрочем, подойдёт и просто для фестивалей, поездок или внезапных ночёвок. Всё в отличном состоянии 🎒\n\nСпальник — QUECHUA Basic 20 °C, 190 × 72 см, его можно полностью расстегнуть и использовать как одеяло, если жарко. Пенка толстая, при этом лёгкая и так же легко сворачивается, размер — 180 × 50 см. Синяя металлическая походная кружка прочная, приятного мажорелевого цвета — для чая или кофе на природе 🍵\n\nЦены на новое в Decathlon: спальник — 15 €, пенка — 9 €, кружка — около 10 €, то есть за всё 34 €. Я отдам весь набор за 20 € 🏕️ Можно и по отдельности: спальник — 10 €, пенка — 5 €, кружка — 5 €.\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 🌿",
      "uk": "Якщо ви такий самий бродяга Дхарми, як я, і після перегляду «У дикій глушині» хотіли назавжди піти в ліси, цей туристичний набір для вас. Втім, він підійде і просто для фестивалів, поїздок або несподіваних ночівель. Усе у відмінному стані 🎒\n\nСпальник — QUECHUA Basic 20 °C, 190 × 72 см; його можна повністю розстебнути й використовувати як ковдру, якщо спекотно. Пінка товста, водночас легка й легко згортається; розмір — 180 × 50 см. Синя металева туристична кружка міцна, гарного кольору мажорель — для чаю або кави на природі 🍵\n\nЦіни на нове в Decathlon: спальник — 15 €, пінка — 9 €, кружка — близько 10 €, тобто разом 34 €. Віддам увесь набір за 20 € 🏕️ Можна й окремо: спальник — 10 €, пінка — 5 €, кружка — 5 €.\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга 🌿",
      "es": "Si eres un vagabundo del Dharma como yo y, después de ver «Hacia rutas salvajes», quisiste irte para siempre a vivir entre los bosques, este set de camping es para ti. También sirve simplemente para festivales, viajes o noches improvisadas fuera de casa. Todo está en excelente estado 🎒\n\nEl saco de dormir es un QUECHUA Basic 20 °C, de 190 × 72 cm; se puede abrir completamente y usar como manta cuando hace calor. La esterilla es gruesa, pero ligera y fácil de enrollar; mide 180 × 50 cm. La taza de camping azul de metal es resistente y tiene un bonito color azul Majorelle, ideal para tomar té o café al aire libre 🍵\n\nPrecios nuevos en Decathlon: saco de dormir — 15 €, esterilla — 9 €, taza — unos 10 €, es decir, 34 € en total. Dejo el conjunto completo por 20 € 🏕️ También se puede comprar por separado: saco — 10 €, esterilla — 5 €, taza — 5 €.\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 🌿",
      "zh": "如果你和我一样是个“达摩流浪者”，看完《荒野生存》后也曾想永远走进森林，那么这套户外装备很适合你。当然，它同样适合音乐节、旅行或临时过夜。所有物品状态都非常好 🎒\n\n睡袋是 QUECHUA Basic 20 °C，尺寸为 190 × 72 厘米；可以完全拉开，天气热时可当作毯子使用。泡沫防潮垫较厚，但很轻，也很容易卷起来，尺寸为 180 × 50 厘米。蓝色金属户外杯结实耐用，是很漂亮的马约尔蓝色，适合在户外喝茶或咖啡 🍵\n\nDecathlon 全新价格：睡袋 15 €、防潮垫 9 €、杯子约 10 €，合计 34 €。整套 20 € 出售 🏕️ 也可以单独购买：睡袋 10 €、防潮垫 5 €、杯子 5 €。\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 🌿",
      "tr": "Eğer benim gibi bir Dharma serserisiyseniz ve „Into the Wild“ filmini izledikten sonra sonsuza dek ormanlara gitmek istediyseniz, bu kamp seti tam size göre. Tabii ki festivaller, seyahatler veya beklenmedik gece konaklamaları için de çok uygun. Her şey mükemmel durumda 🎒\n\nUyku tulumu QUECHUA Basic 20 °C, 190 × 72 cm. Tamamen açılabilir ve hava sıcaksa battaniye olarak kullanılabilir. Mat kalın ama hafif; kolayca sarılır ve ölçüsü 180 × 50 cm’dir. Mavi metal kamp kupası dayanıklı, hoş bir Majorelle mavisi renginde; doğada çay veya kahve için ideal 🍵\n\nDecathlon’daki yeni fiyatlar: uyku tulumu — 15 €, mat — 9 €, kupa — yaklaşık 10 €, yani toplam 34 €. Tüm seti 20 €’ya veriyorum 🏕️ Ayrı ayrı da alınabilir: uyku tulumu — 10 €, mat — 5 €, kupa — 5 €.\n\nHamburg’un merkezindeki bir U-Bahn veya S-Bahn istasyonunda teslim 🌿",
      "fa": "اگر شما هم مثل من یک «ولگرد دارما» هستید و بعد از دیدن فیلم «به‌سوی طبیعت وحشی» دلتان خواسته برای همیشه به جنگل بروید، این ست کمپینگ برای شماست. البته برای فستیوال‌ها، سفرها یا شب‌مانی‌های ناگهانی هم کاملاً مناسب است. همه‌چیز در وضعیت عالی است 🎒\n\nکیسه‌خواب QUECHUA Basic 20 °C با اندازهٔ ۱۹۰ × ۷۲ سانتی‌متر است؛ می‌توان آن را کاملاً باز کرد و اگر هوا گرم بود، به‌عنوان پتو استفاده کرد. زیرانداز فومی ضخیم، در عین حال سبک و به‌راحتی قابل رول‌کردن است؛ اندازهٔ آن ۱۸۰ × ۵۰ سانتی‌متر است. لیوان فلزی آبیِ مخصوص سفر محکم است و رنگ آبی مژرلی زیبایی دارد؛ مناسب برای چای یا قهوه در طبیعت 🍵\n\nقیمت نو در Decathlon: کیسه‌خواب ۱۵ یورو، زیرانداز ۹ یورو و لیوان حدود ۱۰ یورو؛ در مجموع ۳۴ یورو. کل ست را ۲۰ یورو می‌فروشم 🏕️ خرید جداگانه هم ممکن است: کیسه‌خواب ۱۰ یورو، زیرانداز ۵ یورو، لیوان ۵ یورو.\n\nتحویل در یکی از ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 🌿",
      "ar": "إذا كنت مثلي رحّالة من «متشردي الدارما»، وراودتك رغبة في الذهاب إلى الغابات إلى الأبد بعد مشاهدة فيلم «Into the Wild»، فهذه المجموعة مناسبة لك. وهي مناسبة أيضًا للمهرجانات والرحلات أو للمبيت المفاجئ خارج المنزل. كل شيء بحالة ممتازة 🎒\n\nكيس النوم هو QUECHUA Basic 20 °C، بمقاس 190 × 72 سم. يمكن فتحه بالكامل واستخدامه كبطانية عندما يكون الجو حارًا. الحصيرة الإسفنجية سميكة لكنها خفيفة وسهلة اللف؛ مقاسها 180 × 50 سم. كوب التخييم المعدني الأزرق متين ولونه أزرق ماجوريل جميل، ومناسب للشاي أو القهوة في الطبيعة 🍵\n\nأسعارها الجديدة في Decathlon: كيس النوم 15 €، الحصيرة 9 €، والكوب حوالي 10 €، أي 34 € للمجموعة كاملة. أبيع المجموعة كلها مقابل 20 € 🏕️ ويمكن شراؤها منفصلة أيضًا: كيس النوم 10 €، الحصيرة 5 €، والكوب 5 €.\n\nالتسليم في إحدى محطات U-Bahn أو S-Bahn في وسط هامبورغ 🌿"
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
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item22-1788605535389-76ry.jpg",
      "images/item22-1788605535506-jqp1.jpg"
    ],
    "title": {
      "en": "La otra voz: Poesía y fin de siglo — Octavio Paz 🇲🇽",
      "de": "La otra voz: poesía y fin de siglo — Octavio Paz 🇲🇽",
      "ru": "La otra voz: poesía y fin de siglo — Октавио Пас 🇲🇽",
      "uk": "La otra voz: poesía y fin de siglo — Октавіо Пас 🇲🇽",
      "es": "La otra voz: poesía y fin de siglo — Octavio Paz 🇲🇽",
      "zh": "《La otra voz: poesía y fin de siglo》——奥克塔维奥·帕斯 🇲🇽",
      "tr": "La otra voz: poesía y fin de siglo — Octavio Paz 🇲🇽",
      "fa": "La otra voz: poesía y fin de siglo — اکتاویو پاز 🇲🇽",
      "ar": "La otra voz: poesía y fin de siglo — أوكتافيو باث 🇲🇽"
    },
    "desc": {
      "en": "A rare Spanish-language edition by Octavio Paz — one of the most important Spanish-language thinkers and writers of the 20th century, a Mexican poet, essayist, and Nobel Prize winner in Literature. This is a collection of essays about poetry, modernity, and the end of the century; a thoughtful find for anyone interested in literature, philosophy, and the Spanish-speaking world 📚\n\nPublished by Seix Barral in 1990, the same year Paz received the Nobel Prize in Literature. Paperback, 141 pages, in good condition. A beautiful small book to keep on a shelf, take on a trip, or give to someone who reads Spanish 🇲🇽\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg 📖",
      "de": "Seltene spanischsprachige Ausgabe von Octavio Paz, einem der wichtigsten spanischsprachigen Denker und Schriftsteller des 20. Jahrhunderts, mexikanischem Dichter, Essayisten und Literaturnobelpreisträger. Eine Essaysammlung über Poesie und das Ende des 20. Jahrhunderts — für alle, die sich für Literatur, Philosophie und die spanischsprachige Welt interessieren 📚\n\n1990 bei Seix Barral erschienen — im selben Jahr, in dem Paz den Nobelpreis für Literatur erhielt. Taschenbuch, 141 Seiten, guter Zustand. Eine schöne kleine Ausgabe fürs Regal, für unterwegs oder als Geschenk für jemanden, der Spanisch liest 🇲🇽\n\nÜbergabe an einer U-/S-Bahn-Station in der Hamburger Innenstadt 📖",
      "ru": "Раритетное испаноязычное издание Октавио Паса — одного из важнейших испаноязычных мыслителей и писателей XX века, мексиканского поэта, эссеиста и нобелевского лауреата по литературе. Это сборник эссе о поэзии и конце XX века — для тех, кому интересны литература, философия и испаноязычный мир 📚\n\nИздана Seix Barral в 1990 году — в том же году, когда Пас получил Нобелевскую премию по литературе. Мягкая обложка, 141 страница, хорошее состояние. Красивое небольшое издание для полки, поездки или в подарок тому, кто читает по-испански 🇲🇽\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 📖",
      "uk": "Раритетне іспаномовне видання Октавіо Паса — одного з найважливіших іспаномовних мислителів і письменників XX століття, мексиканського поета, есеїста та лауреата Нобелівської премії з літератури. Це збірка есеїв про поезію та кінець XX століття — для тих, кого цікавлять література, філософія та іспаномовний світ 📚\n\nВидано Seix Barral у 1990 році — того самого року, коли Пас отримав Нобелівську премію з літератури. М’яка обкладинка, 141 сторінка, хороший стан. Гарне невелике видання для полиці, подорожі або як подарунок людині, яка читає іспанською 🇲🇽\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга 📖",
      "es": "Una edición en español poco común de Octavio Paz, uno de los pensadores y escritores más importantes del mundo hispanohablante del siglo XX: poeta y ensayista mexicano, ganador del Premio Nobel de Literatura. Es una colección de ensayos sobre la poesía y el fin de siglo, ideal para quien tenga interés por la literatura, la filosofía y el mundo hispanohablante 📚\n\nPublicada por Seix Barral en 1990, el mismo año en que Paz recibió el Premio Nobel de Literatura. Tapa blanda, 141 páginas y en buen estado. Una edición pequeña y bonita para la estantería, para un viaje o como regalo para alguien que lee en español 🇲🇽\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 📖",
      "zh": "奥克塔维奥·帕斯的珍罕西班牙语版本。帕斯是 20 世纪最重要的西班牙语思想家和作家之一，也是墨西哥诗人、散文家及诺贝尔文学奖得主。这是一本关于诗歌与 20 世纪末的随笔集，适合对文学、哲学和西班牙语世界感兴趣的读者 📚\n\n由 Seix Barral 于 1990 年出版，正是帕斯获得诺贝尔文学奖的同一年。平装，141 页，状态良好。一本漂亮的小书，适合摆在书架上、旅行时阅读，或送给读西班牙语的朋友 🇲🇽\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接 📖",
      "tr": "20. yüzyılın en önemli İspanyolca konuşan düşünür ve yazarlarından biri olan; Meksikalı şair, denemeci ve Nobel Edebiyat Ödülü sahibi Octavio Paz’ın nadir bir İspanyolca baskısı. Şiir ve 20. yüzyılın sonu üzerine denemelerden oluşan bir kitap; edebiyata, felsefeye ve İspanyolca konuşulan dünyaya ilgi duyanlar için 📚\n\nSeix Barral tarafından 1990 yılında, Paz’ın Nobel Edebiyat Ödülü’nü aldığı yıl yayımlandı. Karton kapaklı, 141 sayfa ve iyi durumda. Raf için, yolculukta okumak için ya da İspanyolca okuyan birine hediye etmek için güzel, küçük bir baskı 🇲🇽\n\nHamburg’un merkezindeki bir U-Bahn veya S-Bahn istasyonunda teslim 📖",
      "fa": "نسخه‌ای کمیاب به زبان اسپانیایی از اکتاویو پاز، یکی از مهم‌ترین متفکران و نویسندگان اسپانیایی‌زبان قرن بیستم؛ شاعر و جستارنویس مکزیکی و برندهٔ جایزهٔ نوبل ادبیات. این کتاب مجموعه‌ای از جستارها دربارهٔ شعر و پایان قرن بیستم است و برای علاقه‌مندان به ادبیات، فلسفه و جهان اسپانیایی‌زبان مناسب است 📚\n\nاین کتاب در سال ۱۹۹۰ توسط انتشارات Seix Barral منتشر شد؛ همان سالی که پاز جایزهٔ نوبل ادبیات را دریافت کرد. جلد نرم، ۱۴۱ صفحه و در وضعیت خوب. نسخه‌ای کوچک و زیبا برای قفسه، سفر یا هدیه‌دادن به کسی که اسپانیایی می‌خواند 🇲🇽\n\nتحویل در یکی از ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 📖",
      "ar": "طبعة نادرة باللغة الإسبانية لأوكتافيو باث، أحد أهم المفكرين والكتّاب الناطقين بالإسبانية في القرن العشرين؛ شاعر وكاتب مقالات مكسيكي وحائز على جائزة نوبل في الأدب. إنها مجموعة من المقالات عن الشعر ونهاية القرن العشرين، مناسبة لمن يهتم بالأدب والفلسفة والعالم الناطق بالإسبانية 📚\n\nنشرتها دار Seix Barral عام 1990، وهو العام نفسه الذي حصل فيه باث على جائزة نوبل في الأدب. غلاف ورقي، 141 صفحة، وحالة جيدة. طبعة صغيرة وجميلة للرف أو للقراءة أثناء السفر أو كهدية لمن يقرأ بالإسبانية 🇲🇽\n\nالتسليم في إحدى محطات U-Bahn أو S-Bahn في وسط هامبورغ 📖"
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
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item23-1788606261187-ntwk.jpg",
      "images/item23-1788606261297-dah8.jpg"
    ],
    "title": {
      "en": "España, sueño y verdad — María Zambrano 🇪🇸",
      "de": "España, sueño y verdad — María Zambrano",
      "ru": "España, sueño y verdad — Мария Самбрано",
      "uk": "España, sueño y verdad — Марія Самбрано",
      "es": "España, sueño y verdad — María Zambrano",
      "zh": "《España, sueño y verdad》——玛丽亚·桑布拉诺",
      "tr": "España, sueño y verdad — María Zambrano",
      "fa": "España, sueño y verdad — ماریا سامبرانو",
      "ar": "España, sueño y verdad — ماريا سامبرانو"
    },
    "desc": {
      "en": "A book by one of my favourite philosophers, María Zambrano. Here she reflects on what Spain is — both imagined and real — through its literature, myths, art, and thinkers. Zambrano is a very serious thinker, yet she gently accompanies you into the depth of her thought 🧘\n\nThis Spanish-language edition is from the “Los libros de Sísifo” series by Edhasa. A beautiful book for anyone interested in philosophy, Spain, literature, or simply a slow and thoughtful kind of reading ✨\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg.",
      "de": "Ein Buch einer meiner liebsten Philosophinnen: María Zambrano. Darin denkt sie darüber nach, was Spanien ist — ein erträumtes und ein reales Spanien — und nähert sich dem Thema über Literatur, Mythen, Kunst und Denkerinnen und Denker des Landes. Zambrano ist eine sehr ernsthafte Philosophin, begleitet einen aber zugleich behutsam in die Tiefe ihres Denkens 🧘\n\nSpanischsprachige Ausgabe aus der Reihe „Los libros de Sísifo“ des Verlags Edhasa. Ein schönes Buch für alle, die sich für Philosophie, Spanien, Literatur oder einfach langsames, aufmerksames Lesen interessieren ✨\n\nÜbergabe an einer U-/S-Bahn-Station in der Hamburger Innenstadt.",
      "ru": "Книга одной из моих любимых философок — Марии Самбрано. В ней она рассуждает о том, что такое Испания: вымышленная и настоящая, — через её литературу, мифы, искусство и мыслителей. Самбрано — очень серьёзная мыслительница, но при этом она бережно сопровождает тебя на глубину своей мысли 🧘\n\nИспаноязычное издание из серии «Los libros de Sísifo» издательства Edhasa. Хорошая книга для тех, кому интересны философия, Испания, литература или просто медленное вдумчивое чтение ✨\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга.",
      "uk": "Книга однієї з моїх улюблених філософинь — Марії Самбрано. У ній вона розмірковує про те, чим є Іспанія: уявна й справжня, — через її літературу, міфи, мистецтво та мислителів. Самбрано — дуже серйозна мислителька, але водночас вона дбайливо проводить читача в глибину своєї думки 🧘\n\nІспаномовне видання із серії «Los libros de Sísifo» видавництва Edhasa. Гарна книга для тих, кого цікавлять філософія, Іспанія, література або просто повільне, вдумливе читання ✨\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга.",
      "es": "Un libro de una de mis filósofas favoritas: María Zambrano. En él reflexiona sobre qué es España, la España imaginada y la España real, a través de su literatura, sus mitos, su arte y sus pensadores. Zambrano es una pensadora muy seria, pero a la vez te acompaña con delicadeza hacia la profundidad de su pensamiento 🧘\n\nEdición en español de la colección «Los libros de Sísifo» de la editorial Edhasa. Un buen libro para quien tenga interés por la filosofía, España, la literatura o simplemente la lectura lenta y reflexiva ✨\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo.",
      "zh": "我最喜欢的女性哲学家之一玛丽亚·桑布拉诺的一本书。她在书中通过西班牙的文学、神话、艺术和思想家，思考西班牙究竟是什么：既是想象中的西班牙，也是现实中的西班牙。桑布拉诺是一位非常严肃的思想家，但同时又会温柔地陪伴读者进入她思想的深处 🧘\n\n西班牙语版本，Edhasa 出版社“Los libros de Sísifo”系列。适合对哲学、西班牙、文学感兴趣，或只是喜欢慢慢思考、细细阅读的人 ✨\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接。",
      "tr": "En sevdiğim filozoflardan biri olan María Zambrano’nun kitabı. Zambrano bu kitapta İspanya’nın ne olduğunu — hayal edilen ve gerçek İspanya’yı — ülkenin edebiyatı, mitleri, sanatı ve düşünürleri üzerinden ele alıyor. Çok ciddi bir düşünür olmasına rağmen, okuyucuya düşüncesinin derinliklerine doğru nazikçe eşlik ediyor 🧘\n\nEdhasa yayınevinin “Los libros de Sísifo” serisinden İspanyolca baskı. Felsefeye, İspanya’ya, edebiyata veya sadece yavaş ve düşünerek okumaya ilgi duyanlar için güzel bir kitap ✨\n\nHamburg’un merkezindeki bir U-Bahn veya S-Bahn istasyonunda teslim.",
      "fa": "کتابی از یکی از فیلسوفان محبوب من، ماریا سامبرانو. او در این کتاب دربارهٔ این‌که اسپانیا چیست — اسپانیای خیالی و اسپانیای واقعی — از مسیر ادبیات، اسطوره‌ها، هنر و متفکرانش تأمل می‌کند. سامبرانو متفکری بسیار جدی است، اما در عین حال خواننده را با مهربانی به عمق اندیشهٔ خود همراهی می‌کند 🧘\n\nنسخهٔ اسپانیایی از مجموعهٔ «Los libros de Sísifo» انتشارات Edhasa. کتابی خوب برای کسانی که به فلسفه، اسپانیا، ادبیات یا صرفاً خواندن آرام و عمیق علاقه دارند ✨\n\nتحویل در یکی از ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ.",
      "ar": "كتاب لإحدى الفيلسوفات المفضلات لديّ، ماريا سامبرانو. تتأمل فيه في ماهية إسبانيا — إسبانيا المتخيَّلة وإسبانيا الحقيقية — من خلال أدبها وأساطيرها وفنونها ومفكريها. سامبرانو مفكرة جادة جدًا، لكنها في الوقت نفسه ترافق القارئ بلطف إلى أعماق أفكارها 🧘\n\nطبعة باللغة الإسبانية من سلسلة «Los libros de Sísifo» الصادرة عن دار Edhasa. كتاب جميل لمن يهتم بالفلسفة أو إسبانيا أو الأدب أو بمجرد القراءة البطيئة والمتأنية ✨\n\nالتسليم في إحدى محطات U-Bahn أو S-Bahn في وسط هامبورغ."
    }
  },
  {
    "id": 25,
    "price": "5 €",
    "reserved": false,
    "hidden": false,
    "category": "misc",
    "condition": "fair",
    "material": "",
    "size": "",
    "location": "Hauptbahnhof ● Berliner Tor ● Jungfernstieg ● Gänsemarkt",
    "images": [
      "images/item25-1788613323161-hz4m.jpg",
      "images/item25-1788613323246-efyd.jpg"
    ],
    "title": {
      "en": "Im Berufssprachkurs B2 — German course and workbook, Hueber",
      "de": "Im Berufssprachkurs B2 — Kurs- und Arbeitsbuch Deutsch, Hueber",
      "ru": "Im Berufssprachkurs B2 — курс и рабочая тетрадь по немецкому, Hueber",
      "uk": "Im Berufssprachkurs B2 — курс і робочий зошит з німецької, Hueber",
      "es": "Im Berufssprachkurs B2 — libro de curso y ejercicios de alemán, Hueber",
      "zh": "Im Berufssprachkurs B2 — Hueber 德语 B2 课程与练习册",
      "fa": "عنوان: Im Berufssprachkurs B2 — کتاب درس و تمرین زبان آلمانی، Hueber",
      "ar": "العنوان: Im Berufssprachkurs B2 — كتاب دورة وتمارين للغة الألمانية من Hueber",
      "tr": "Im Berufssprachkurs B2 — Hueber Almanca kurs ve çalışma kitabı"
    },
    "desc": {
      "en": "A B2 German coursebook that will prepare you for working in Germany and also give you a good foundation for everyday communication. Grab it if you want to score 210 out of 240 points in the B2 exam, like I did 😀\n\n2022 edition, ISBN 978-3-19-441190-6. Inside you will find my notes and some completed exercises. The book is a good fit for someone who does not mind that and wants to save money. New price is €25; I’m letting it go for €5 ✍️\n\nHandover at a U-Bahn or S-Bahn station in central Hamburg 🇩🇪",
      "de": "Ein Deutschlehrbuch auf B2-Niveau, das dich auf die Arbeit in Deutschland vorbereitet und dir zugleich eine gute Grundlage für die alltägliche Kommunikation gibt. Schnapp es dir, wenn du die B2-Prüfung mit 210 von 240 Punkten bestehen möchtest — so wie ich 😀\n\nAusgabe von 2022, ISBN 978-3-19-441190-6. Im Buch gibt es meine Notizen und einige ausgefüllte Aufgaben. Es passt gut für jemanden, den das nicht stört und der dabei etwas Geld sparen möchte. Neu kostet es 25 €, ich gebe es für 5 € ab ✍️\n\nÜbergabe an einer U- oder S-Bahn-Station in der Hamburger Innenstadt 🇩🇪",
      "ru": "Учебник немецкого языка уровня B2, который подготовит вас к работе в Германии, да и в целом даст хорошую базу для повседневного общения. Спешите забрать, если хотите сдать экзамен B2 на 210 из 240 баллов, как я 😀\n\nИздание 2022 года, ISBN 978-3-19-441190-6. Внутри — мои пометки и часть заполненных заданий. Книга подойдёт тому, кого это не смущает и тем, кто хочет сэкономить. Новая стоит 25 €, отдам за 5 € ✍️\n\nПередача на станции U-/S-Bahn в центральной части Гамбурга 🇩🇪",
      "uk": "Підручник німецької мови рівня B2, який підготує вас до роботи в Німеччині й загалом дасть хорошу основу для повсякденного спілкування. Поспішайте забрати, якщо хочете скласти іспит B2 на 210 із 240 балів, як я 😀\n\nВидання 2022 року, ISBN 978-3-19-441190-6. Усередині — мої нотатки та частина виконаних завдань. Книга підійде тому, кого це не бентежить, і тим, хто хоче заощадити. Нова коштує 25 €, віддам за 5 € ✍️\n\nПередача на станції U-/S-Bahn у центральній частині Гамбурга 🇩🇪",
      "es": "Un libro de alemán de nivel B2 que te preparará para trabajar en Alemania y que, además, te dará una buena base para la comunicación cotidiana. ¡Date prisa si quieres sacar 210 de 240 puntos en el examen B2, como yo! 😀\n\nEdición de 2022, ISBN 978-3-19-441190-6. Dentro encontrarás mis apuntes y algunos ejercicios completados. Es ideal para quien no tenga problema con ello y quiera ahorrar dinero. Nuevo cuesta 25 €, lo dejo en 5 € ✍️\n\nEntrega en una estación de U-Bahn o S-Bahn en el centro de Hamburgo 🇩🇪",
      "zh": "一本 B2 级德语教材，既能帮助你为在德国工作做准备，也能为日常交流打下扎实基础。如果你也想像我一样在 B2 考试中取得 240 分中的 210 分，就快来带走它吧 😀\n\n2022 年版，ISBN 978-3-19-441190-6。书中有我的笔记和一部分已完成的练习。适合不介意这些、同时希望省钱的人。全新售价 25 欧元，现在 5 欧元出手 ✍️\n\n可在汉堡市中心的 U-Bahn 或 S-Bahn 车站交接。🇩🇪",
      "fa": "کتاب آموزش زبان آلمانی در سطح B2 که شما را برای کار در آلمان آماده می‌کند و در عین حال پایهٔ خوبی برای ارتباطات روزمره می‌سازد. اگر می‌خواهید مثل من در آزمون B2، ۲۱۰ امتیاز از ۲۴۰ امتیاز بگیرید، این کتاب را از دست ندهید 😀\n\nچاپ ۲۰۲۲، ISBN 978-3-19-441190-6. داخل کتاب یادداشت‌های من و بخشی از تمرین‌های انجام‌شده وجود دارد. برای کسی مناسب است که با این موضوع مشکلی ندارد و می‌خواهد در هزینه صرفه‌جویی کند. قیمت نو ۲۵ یورو است؛ من آن را ۵ یورو می‌دهم ✍️\n\nتحویل در یکی از ایستگاه‌های U-Bahn یا S-Bahn در مرکز هامبورگ 🇩🇪",
      "ar": "كتاب لتعلّم اللغة الألمانية بمستوى B2، يساعدك على الاستعداد للعمل في ألمانيا ويمنحك أساسًا جيدًا للتواصل اليومي أيضًا. خذه سريعًا إذا أردت أن تحصل، مثلي، على 210 من 240 نقطة في امتحان B2 😀\n\nطبعة 2022، رقم ISBN: 978-3-19-441190-6. يحتوي الكتاب على ملاحظاتي وبعض التمارين المحلولة. يناسب من لا يمانع ذلك ويرغب في توفير المال. سعره الجديد 25 يورو، وأبيعه بـ 5 يورو ✍️\n\nالتسليم في إحدى محطات U-Bahn أو S-Bahn في وسط هامبورغ 🇩🇪",
      "tr": "Almanya’da çalışmaya hazırlanmanıza yardımcı olacak ve aynı zamanda günlük iletişim için iyi bir temel sağlayacak B2 seviyesinde Almanca ders kitabı. Benim gibi B2 sınavından 240 üzerinden 210 puan almak istiyorsanız, kaçırmayın 😀\n\n2022 baskısı, ISBN 978-3-19-441190-6. İçinde kendi notlarım ve tamamlanmış bazı alıştırmalar var. Bu durumdan rahatsız olmayan ve biraz tasarruf etmek isteyen biri için uygun. Yenisi 25 €, 5 €’ya veriyorum ✍️\n\nHamburg’un merkezindeki bir U-Bahn veya S-Bahn istasyonunda teslim edebilirim 🇩🇪"
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
    "zh": "关于我",
    "tr": "Hakkımda",
    "ar": "نبذة عني",
    "fa": "دربارهٔ من"
  },
  "text": {
    "en": "Hi! I'm Stepan. I've been living in Germany for two years now, and this August I got into university in Berlin! So I'm moving out from near Hamburg and selling off things I either can't take with me or just feel ready to let go of — because everything changes, and I'm not quite the same person who bought them. \n\nStill, these are all things I chose with care and tried to look after well. I like the idea of minimalism and sustainability — where every item finds its use. So I'd really appreciate your help finding these things new owners!\n\nFeel free to message me if you have any questions — I’ll be happy to help! I’d also really appreciate it if you shared this page with your friends 🙂",
    "de": "Hallo! Ich bin Stefan. Ich lebe seit zwei Jahren in Deutschland und habe im August einen Studienplatz an einer Universität in Berlin bekommen! Deshalb ziehe ich aus der Nähe von Hamburg weg und verkaufe Dinge, die ich entweder nicht mitnehmen kann oder bei denen ich einfach das Gefühl habe, dass ich sie loslassen kann — denn alles verändert sich, und ich bin nicht mehr ganz derselbe Mensch, der sie damals gekauft hat. \n\nTrotzdem habe ich all diese Dinge mit Bedacht ausgesucht und versucht, gut auf sie aufzupassen. Mir gefallen die Ideen von Minimalismus und Nachhaltigkeit — wenn jedes Ding seinen Platz und Nutzen findet. Deshalb würde ich mich sehr freuen, wenn ihr mir helft, neue Besitzer:innen für diese Sachen zu finden!\n\nSchreib mir gern, wenn du Fragen hast — ich antworte dir gerne! Und ich würde mich sehr freuen, wenn du diese Seite mit deinen Freundinnen und Freunden teilst 🙂",
    "ru": "Привет! Меня зовут Стёпа. Я уже два года живу в Германии и в августе поступил в университет в Берлине! Поэтому теперь переезжаю из-под Гамбурга и распродаю вещи, которые не получится перевезти и те, с которыми просто хочется попрощаться, потому что всё меняется, и я уже не тот человек, что когда-то купил их. \n\nТем не менее это всё вещи, которые я выбирал с душой и с которыми старался бережно обходиться. Мне нравится идея минимализма и устойчивости — когда каждой вещи всегда находится применение. Поэтому я буду рад, если вы поможете найти всем этим вещицам новых хозяев и хозяек!\n\nПишите мне, если появятся вопросы, — с радостью отвечу! А ещё буду очень благодарен, если поделитесь этой страницей с друзьями 🙂",
    "uk": "Привіт! Мене звати Степан. Я живу в Німеччині вже два роки, і цього серпня вступив до університету в Берліні! Тому я переїжджаю з околиць Гамбурга й продаю речі, які або не зможу взяти із собою, або просто відчуваю, що вже готовий відпустити — адже все змінюється, і я вже не зовсім та людина, яка їх колись купувала. \n\nУтім, усі ці речі я вибирав дбайливо й намагався добре за ними доглядати. Мені близькі ідеї мінімалізму та сталого споживання — коли кожна річ знаходить своє застосування. Тож буду дуже вдячний за допомогу в пошуку для них нових власників!\n\nПишіть мені, якщо виникнуть запитання, — із радістю відповім! Також буду дуже вдячний, якщо поділитеся цією сторінкою з друзями 🙂",
    "es": "Hola! Me llamo Esteban. Llevo dos años viviendo en Alemania y este agosto he conseguido plaza en una universidad de Berlín! Por eso me mudo de Hamburgo y vendo las cosas que no puedo llevarme o que simplemente siento que ya estoy listo para dejar ir, porque todo cambia y ya no soy exactamente la misma persona que las compró.\n\nAun así, elegí todas estas cosas con cuidado y he procurado cuidarlas bien. Me gustan las ideas del minimalismo y la sostenibilidad: que cada objeto encuentre su utilidad. Por eso agradecería mucho vuestra ayuda para que estas cosas encuentren nuevos dueños.\n\nEscríbeme si tienes alguna pregunta; estaré encantado de responder. Y te agradecería mucho que compartieras esta página con tus amigos 🙂",
    "zh": "大家好！我叫 Stepan。我已经在德国生活两年了，今年八月被柏林的一所大学录取！所以我准备从汉堡附近搬走，出售一些我无法带走、或只是觉得已经可以放手的物品——因为一切都在变化，我也不再完全是当初买下它们的那个人了。\n\n不过，这些东西都是我认真挑选的，也一直尽力好好爱护它们。我喜欢极简主义和可持续生活的理念——让每一件物品都能继续发挥它的价值。因此，如果你能帮助这些物品找到新的主人，我会非常感谢！\n\n如果有任何问题，欢迎随时给我发消息，我很乐意回答！我会说英语和德语，但您也可以用中文给我写消息——Google 翻译会帮到我。如果您愿意把这个页面分享给朋友，我也会非常感谢 🙂",
    "tr": "Merhaba! Ben Stepan. İki yıldır Almanya’da yaşıyorum ve bu ağustos Berlin’de bir üniversiteye kabul edildim! Bu yüzden Hamburg yakınlarından taşınıyorum ve ya yanımda götüremeyeceğim ya da artık bırakmaya hazır hissettiğim eşyaları satıyorum — çünkü her şey değişiyor ve ben de onları satın alan kişiyle artık tam olarak aynı değilim.\n\nYine de bunların hepsini özenle seçtim ve iyi bakmaya çalıştım. Minimalizm ve sürdürülebilirlik fikrini seviyorum: Her eşyanın kendine uygun bir kullanım alanı bulmasını. Bu yüzden, bu eşyaların yeni sahiplerini bulmasına yardımcı olursanız çok sevinirim!\n\nSorularınız olursa bana yazabilirsiniz, memnuniyetle yanıtlarım! İngilizce ve Almanca konuşuyorum; ancak Türkçe de yazabilirsiniz — Google Çeviri bana yardımcı olur. Ayrıca bu sayfayı arkadaşlarınızla paylaşırsanız çok sevinirim 🙂",
    "ar": "مرحبًا! أنا ستيبان. أعيش في ألمانيا منذ عامين، وفي أغسطس من هذا العام قُبلت في جامعة في برلين! لذلك أنتقل من منطقة قريبة من هامبورغ وأبيع الأشياء التي لا أستطيع أخذها معي، أو التي أشعر ببساطة بأن الوقت قد حان لأتركها — لأن كل شيء يتغير، ولأنني لم أعد تمامًا الشخص نفسه الذي اشتراها.\n\nومع ذلك، اخترت كل هذه الأشياء بعناية وحاولت الاعتناء بها جيدًا. أحب فكرة البساطة والاستدامة، أي أن تجد كل قطعة استخدامها المناسب. لذلك سأكون ممتنًا جدًا لمساعدتكم في العثور على مالكين جدد لهذه الأشياء!\n\nراسلني إذا كانت لديك أي أسئلة — سأكون سعيدًا بالإجابة عنها! أتحدث الإنجليزية والألمانية، لكن يمكنك أيضًا أن تكتب لي بالعربية — سيساعدني مترجم Google. وسأكون ممتنًا جدًا إذا شاركت هذه الصفحة مع أصدقائك 🙂",
    "fa": "سلام! من استپان هستم. دو سال است که در آلمان زندگی می‌کنم و امسال در ماه اوت در یک دانشگاه در برلین پذیرفته شدم! برای همین از حوالی هامبورگ نقل مکان می‌کنم و وسایلی را می‌فروشم که یا نمی‌توانم با خودم ببرم یا حس می‌کنم وقت آن رسیده که رهایشان کنم — چون همه‌چیز تغییر می‌کند و من هم دیگر دقیقاً همان آدمی نیستم که آن‌ها را خریده بودم.\n\nبا این حال، همهٔ این وسایل را با دقت انتخاب کرده‌ام و سعی کرده‌ام خوب از آن‌ها مراقبت کنم. ایدهٔ مینیمالیسم و پایداری را دوست دارم؛ اینکه هر وسیله بتواند کاربرد خودش را پیدا کند. پس واقعاً خوشحال می‌شوم اگر کمک کنید این وسایل صاحب‌های جدیدی پیدا کنند!\n\nاگر سؤالی دارید، با خیال راحت به من پیام بدهید — با خوشحالی پاسخ می‌دهم! من انگلیسی و آلمانی صحبت می‌کنم، اما می‌توانید به فارسی هم برایم بنویسید — مترجم گوگل کمکم می‌کند. همچنین اگر این صفحه را با دوستانتان به اشتراک بگذارید، واقعاً ممنون می‌شوم 🙂"
  },
  "photo": "images/about-1788603697623.jpg",
  "fabPhoto": "images/about-fab-1788622759579.jpg"
};
