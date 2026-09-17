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
    "id": 18,
    "price": "150 €",
    "reserved": false,
    "hidden": false,
    "category": "furniture",
    "condition": "good",
    "material": "Holzwerkstoff,weiß",
    "size": "140 × 200 cm",
    "location": "Glinde, Möllner Landstraße 89",
    "images": [
      "images/item18-1788600758779-o7d1.jpg",
      "images/item18-1788600758886-9l8g.jpg",
      "images/item18-1788600758962-wchq.jpg"
    ],
    "title": {
      "en": "IKEA ASKVOLL bed frame 140 × 200 with 2 slatted bases and mattress",
      "de": "IKEA ASKVOLL Bettgestell 140 × 200 mit 2 Lattenrosten und Matratze",
      "ru": "Кровать IKEA ASKVOLL 140 × 200 с двумя ламельными основаниями и матрасом",
      "uk": "Ліжко IKEA ASKVOLL 140 × 200 з двома ламельними основами та матрацом",
      "es": "Cama IKEA ASKVOLL 140 × 200 con dos somieres de láminas y colchón",
      "zh": "宜家 ASKVOLL 床架 140 × 200，含两块床板底架与床垫",
      "tr": "IKEA ASKVOLL karyola 140 × 200, iki adet lataları ve yatak dahil",
      "ar": "سرير IKEA ASKVOLL مقاس ١٤٠ × ٢٠٠ مع قاعدتين خشبيتين ومرتبة",
      "fa": "تخت‌خواب IKEA ASKVOLL ۱۴۰ × ۲۰۰ همراه با دو کفی چوبی و تشک"
    },
    "desc": {
      "en": "A simple, minimalist white IKEA bed — it keeps a room feeling open and works well even in a small bedroom. In my little studio it was both a place to sleep and storage: a lot of winter clothing fit underneath.\n\nEverything goes together: bed frame, two slatted bases and the mattress — you can sleep in it the first night.\n\nSleeping area: 140 × 200 cm. Headboard 77 cm high, footboard 43 cm.\n\nThe bed is only a year old. New, the frame alone is 100 €, the mattress 120 €, and the two slatted bases another 100 € — 320 € combined. All of it for 150 € 🛏️\n\nPickup only: Möllner Landstraße 89, Glinde — about 10 minutes from Hamburg.",
      "de": "Schlichtes, minimalistisches weißes IKEA-Bett — es wirkt leicht im Raum und passt auch in ein kleines Schlafzimmer. In meinem kleinen Studio war es Schlafplatz und Stauraum zugleich: unter das Bett hat eine Menge Winterkleidung gepasst.\n\nVerkauft wird alles zusammen: Bettgestell, zwei Lattenroste und die Matratze — du kannst also direkt die erste Nacht darin schlafen.\n\nLiegefläche: 140 × 200 cm. Kopfteil 77 cm hoch, Fußteil 43 cm.\n\nDas Bett ist erst ein Jahr alt. Neu kostet allein das Gestell 100 €, die Matratze 120 € und die zwei Lattenroste noch einmal 100 € — zusammen 320 €. Alles zusammen für 150 € 🛏️\n\nNur Selbstabholung: Möllner Landstraße 89, Glinde — etwa 10 Minuten von Hamburg.",
      "ru": "Простая и минималистичная белая кровать IKEA — выглядит легко в комнате и хорошо подойдёт даже для небольшой спальни. В моей маленькой студии она служила мне и местом отдыха, и кладовкой: под кроватью поместилось много зимних вещей.\n\nПродаю всё вместе: каркас, два ламельных основания и матрас — спать можно в первую же ночь.\n\nСпальное место: 140 × 200 см. Высота изголовья — 77 см, изножья — 43 см.\n\nКровати всего год. Новый каркас стоит 100 €, матрас — 120 €, два ламельных основания — ещё 100 €, итого 320 €. Отдам всё вместе за 150 € 🛏️\n\nТолько самовывоз: Möllner Landstraße 89, Глинде — примерно 10 минут от Гамбурга.",
      "uk": "Проста й мінімалістична біла кровать IKEA — виглядає легко в кімнаті й добре підійде навіть для невеликої спальні. У моїй маленькій студії вона була і місцем відпочинку, і коморою: під ліжком помістилося багато зимових речей.\n\nПродаю все разом: каркас, дві ламельні основи та матрац — спати можна вже першої ночі.\n\nСпальне місце: 140 × 200 см. Висота узголів'я — 77 см, узніжжя — 43 см.\n\nЛіжку лише рік. Новий каркас коштує 100 €, матрац — 120 €, дві ламельні основи — ще 100 €, разом 320 €. Віддам усе разом за 150 € 🛏️\n\nТільки самовивіз: Möllner Landstraße 89, Ґлінде — приблизно 10 хвилин від Гамбурга.",
      "es": "Una cama IKEA blanca, sencilla y minimalista: deja la habitación despejada y funciona bien incluso en un dormitorio pequeño. En mi estudio me servía de sitio para dormir y de trastero a la vez: debajo cabía mucha ropa de invierno.\n\nSe vende todo junto: estructura, dos somieres de láminas y el colchón — puedes dormir en ella la primera noche.\n\nSuperficie: 140 × 200 cm. Cabecero de 77 cm de alto, piecero de 43 cm.\n\nLa cama tiene solo un año. Nueva, la estructura cuesta 100 €, el colchón 120 € y los dos somieres 100 € más — 320 € en total. Todo junto por 150 € 🛏️\n\nSolo recogida: Möllner Landstraße 89, Glinde — a unos 10 minutos de Hamburgo.",
      "zh": "一张简约的白色宜家床——在房间里显得轻盈，即使是小卧室也放得下。在我的小公寓里，它既是休息的地方，也是储物空间：床下塞下了不少冬装。\n\n整套出售：床架、两块床板底架和床垫——搬回去当晚就能睡。\n\n睡眠面积：140 × 200 厘米。床头高 77 厘米，床尾高 43 厘米。\n\n床只用了一年。全新床架售价 100 欧元，床垫 120 欧元，两块床板底架另需 100 欧元——合计 320 欧元。现在全套 150 欧元 🛏️\n\n仅限自提：Möllner Landstraße 89, Glinde — 距汉堡约 10 分钟。",
      "tr": "Sade ve minimalist beyaz bir IKEA karyola — odayı ferah gösterir ve küçük yatak odalarına da rahatça sığar. Küçük stüdyomda hem uyuma yeri hem de depo görevi gördü: altına bir sürü kışlık eşya sığdı.\n\nHer şey birlikte satılıyor: karyola, iki lata tabanı ve yatak — ilk geceden itibaren uyuyabilirsiniz.\n\nYatak ölçüsü: 140 × 200 cm. Baş ucu 77 cm, ayak ucu 43 cm yüksekliğinde.\n\nKaryola sadece bir yaşında. Sıfır fiyatı: iskelet 100 €, yatak 120 €, iki lata tabanı ise 100 € daha — toplam 320 €. Hepsi birlikte 150 € 🛏️\n\nSadece elden teslim: Möllner Landstraße 89, Glinde — Hamburg'a yaklaşık 10 dakika.",
      "ar": "سرير IKEA أبيض بسيط وبتصميم مينيمالي — يبدو خفيفاً في الغرفة ويناسب حتى غرف النوم الصغيرة. في استوديوهي الصغير كان مكاناً للنوم ومخزناً في الوقت نفسه: اتّسع تحته الكثير من ملابس الشتاء.\n\nيُباع كل شيء معاً: الهيكل وقاعدتا الشرائح والمرتبة — يمكنك النوم عليه من الليلة الأولى.\n\nمساحة النوم: ١٤٠ × ٢٠٠ سم. ارتفاع لوح الرأس ٧٧ سم، ولوح القدم ٤٣ سم.\n\nعمر السرير سنة واحدة فقط. سعر الهيكل جديداً ١٠٠ يورو، والمرتبة ١٢٠ يورو، وقاعدتا الشرائح ١٠٠ يورو إضافية — المجموع ٣٢٠ يورو. كل ذلك معاً بـ ١٥٠ يورو 🛏️\n\nالاستلام من المكان فقط: Möllner Landstraße 89, Glinde — على بُعد نحو ١٠ دقائق من هامبورغ.",
      "fa": "یک تخت‌خواب سفید ساده و مینیمال از ایکیا — فضای اتاق را سبک نشان می‌دهد و حتی برای اتاق‌خواب‌های کوچک هم مناسب است. در استودیوی کوچک من هم جای خواب بود و هم انباری: زیر تخت کلی لباس زمستانی جا شد.\n\nهمه‌چیز با هم فروخته می‌شود: بدنه، دو کفی چوبی و تشک — از همان شب اول می‌توانید روی آن بخوابید.\n\nسطح خواب: ۱۴۰ × ۲۰۰ سانتی‌متر. ارتفاع تاج بالای تخت ۷۷ و پایین آن ۴۳ سانتی‌متر.\n\nتخت فقط یک سال کارکرده است. قیمت نو بدنه ۱۰۰ یورو، تشک ۱۲۰ یورو و دو کفی ۱۰۰ یورو دیگر — جمعاً ۳۲۰ یورو. همه با هم ۱۵۰ یورو 🛏️\n\nفقط تحویل حضوری: Möllner Landstraße 89, Glinde — حدود ۱۰ دقیقه تا هامبورگ."
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
      "en": "A comfortable, minimalist IKEA chair — well suited both for a dining table and for a desk. I used it for both, and in my new flat I did not even buy an office chair: on this one my back naturally stays straight, and it somehow always feels comfortable to sit on 🦦\n\nIt costs €19.99 new; selling for €7 🪑\n\nCollection only from Möllner Landstraße 89, Glinde — around 10 minutes from Hamburg.",
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
      "en": "Short-sleeved striped viscose shirt — Bershka, size M",
      "de": "Kurzarmhemd aus Viskose mit Streifen — Bershka, Größe M",
      "ru": "Полосатая рубашка из вискозы с коротким рукавом — Bershka, размер M",
      "uk": "Смугаста сорочка з віскози з коротким рукавом — Bershka, розмір M",
      "es": "Camisa de viscosa a rayas y de manga corta — Bershka, talla M",
      "zh": "短袖条纹粘胶衬衫，Bershka, M 码",
      "tr": "Kısa kollu çizgili viskon gömlek — Bershka, M beden",
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
    "price": "12 €",
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
    "price": "8 €",
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
      "en": "In good condition. A couple of barely noticeable scratches, touched up with a special marker. Giving it up because I want fewer black things in my life — but for anyone who loves black 🖤, this is a great find.\n\nStainless steel, keeps drinks hot/cold.",
      "de": "In gutem Zustand. Ein paar kaum sichtbare Kratzer, mit einem speziellen Stift ausgebessert. Ich gebe sie ab, weil ich weniger schwarze Sachen will — aber für alle, die Schwarz lieben 🖤, ist das ein echter Fund.\n\nEdelstahl, hält Getränke warm/kalt.",
      "ru": "В хорошем состоянии. Есть пара незаметных царапин, замазанных специальным фломастером. Отказываюсь от неё, потому что хочу меньше чёрных вещей, но для тех, у кого цвет настроения чёрный 🖤 — хорошая находка.\n\nНержавеющая сталь, держит горячее/холодное.",
      "uk": "У нормальному стані. Є пара непомітних подряпин, замазаних спеціальним фломастером. Відмовляюсь від неї, бо хочу менше чорних речей, але для тих, у кого колір настрою чорний 🖤 — це гарна знахідка.\n\nНержавіюча сталь, тримає гаряче/холодне.",
      "es": "En buen estado. Tiene un par de rayones casi imperceptibles, retocados con un marcador especial. Me deshago de ella porque quiero menos cosas negras en mi vida, pero para quienes aman el negro 🖤, es un buen hallazgo.\n\nAcero inoxidable, mantiene bebidas frías/calientes.",
      "zh": "状态良好。有几处几乎看不出的划痕，用专用记号笔修补过了。我想少一些黑色的东西所以出手 —— 但对于喜欢黑色的人 🖤，这绝对是个好东西。\n\n不锈钢材质，保温保冷，几乎和新的一样",
      "tr": "İyi durumda. Özel bir kalemle kapatılmış, neredeyse fark edilmeyen birkaç çizik var. Daha az siyah eşya istediğim için satıyorum; ama ruh hâlinin rengi siyah olanlar 🖤 için güzel bir keşif.\n\nPaslanmaz çelikten yapılmıştır, içecekleri sıcak veya soğuk tutar ve neredeyse yeni gibidir.",
      "fa": " در وضعیت خوبی است. چند خط‌وخش تقریباً نامحسوس دارد که با ماژیک مخصوص پوشانده شده‌اند. چون می‌خواهم وسایل مشکی کمتری داشته باشم، آن را می‌فروشم؛ اما اگر شما از طرفداران مشکیِ شیک و همیشگی هستید 🖤، این بطری انتخاب خوبی برایتان خواهد بود.\n\nاز فولاد ضدزنگ ساخته شده، نوشیدنی‌ها را گرم یا سرد نگه می‌دارد و تقریباً نو است.",
      "ar": "بحالة جيدة. توجد بعض الخدوش غير الملحوظة تقريبًا، وقد تم إخفاؤها بقلم خاص. أبيعها لأنني أريد امتلاك أشياء سوداء أقل، لكن إذا كنت من محبي الأسود الأنيق الذي لا يخرج من الموضة 🖤، فهذه الزجاجة اختيار جميل لك.\n\nمصنوعة من الفولاذ المقاوم للصدأ، وتحافظ على المشروبات ساخنة أو باردة، وهي شبه جديدة."
    },
    "category": "misc"
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
