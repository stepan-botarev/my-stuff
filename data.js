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
    "price": "2 500 ₽",
    "reserved": false,
    "images": [
      "images/item1-1788278718433-n8gn.png",
      "images/item1-1788278721055-x4nb.png"
    ],
    "title": {
      "ru": "Виниловый проигрыватель",
      "en": "Vinyl Record Player",
      "de": "Bauchtasche Männer / Damen / Retro mit Van-Gogh-Print",
      "zh": "黑胶唱片机"
    },
    "desc": {
      "ru": "Рабочий, звук тёплый. Небольшая царапина на крышке, на звук не влияет.",
      "en": "Fully working, warm sound. Small scratch on the lid, doesn't affect playback.",
      "de": "Ein bisschen 90er-Vibe, ein bisschen Flohmarkt, ein bisschen Indie 🌙\nSchwarzer verstellbarer Gurt, ein Fach mit Reißverschluss. Platz für Handy, Reisepass oder Portemonnaie, Schlüssel und allerlei Kleinkram.\n\nGuter Zustand, sorgfältig getragen.\nÜbergabe an einer U-Bahn-Station im erweiterten Hamburger Zentrum. Versand auch möglich 🌻",
      "zh": "功能完好,音色温暖。盖子上有小划痕,不影响播放。"
    }
  },
  {
    "id": 2,
    "price": "900 ₽",
    "reserved": true,
    "images": [
      "images/item2-1.svg",
      "images/item2-2.svg"
    ],
    "title": {
      "ru": "Плёночная камера Zenit",
      "en": "Zenit Film Camera",
      "de": "Zenit Filmkamera",
      "zh": "Zenit 胶片相机"
    },
    "desc": {
      "ru": "Механическая, без батареек. Проверена, затвор работает исправно.",
      "en": "Fully mechanical, no batteries needed. Tested, shutter works fine.",
      "de": "Vollmechanisch, keine Batterien nötig. Geprüft, Verschluss funktioniert einwandfrei.",
      "zh": "全机械结构,无需电池。已测试,快门工作正常。"
    }
  },
  {
    "id": 3,
    "price": "1 200 ₽",
    "reserved": false,
    "images": [
      "images/item3-1.svg",
      "images/item3-2.svg",
      "images/item3-3.svg"
    ],
    "title": {
      "ru": "Кожаная сумка почтальона",
      "en": "Leather Messenger Bag",
      "de": "Ledertasche Umhängetasche",
      "zh": "真皮邮差包"
    },
    "desc": {
      "ru": "Винтажная, натуральная кожа. Есть следы использования — это её украшает.",
      "en": "Vintage, genuine leather. Some wear that adds to the character.",
      "de": "Vintage, echtes Leder. Leichte Gebrauchsspuren, die den Charakter unterstreichen.",
      "zh": "复古款,真皮材质。有轻微使用痕迹,更添韵味。"
    }
  }
];
