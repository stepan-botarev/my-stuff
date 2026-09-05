// Логотип нарисован шрифтом Baloo 2 внутри SVG — пока шрифт не загрузился,
// браузер подставляет системный (уродливый) и буквы съезжают. Прячем лого
// до готовности шрифта (с запасным таймаутом, чтобы не остаться невидимым).
(function revealLogo() {
  const logo = document.querySelector(".logo-svg");
  if (!logo) return;
  const show = () => logo.classList.add("is-ready");
  if (document.fonts && document.fonts.load) {
    Promise.race([
      document.fonts.load('800 100px "Baloo 2"').then(() => document.fonts.ready),
      new Promise((resolve) => setTimeout(resolve, 800))
    ]).then(show);
  } else {
    show();
  }
})();

// Единый SVG-контур сердца для лайков и Favorites — одна и та же форма
// что для контура, что для заливки (раньше ♥/♡ рисовались разными
// Unicode-глифами и выглядели по-разному, особенно в залитом виде).
const HEART_PATH = "M12 20.6s-7.2-4.4-9.7-8.6C0.5 8.4 2.3 4.9 6.1 4.9c2.1 0 3.7 1.1 5.9 3.4 2.2-2.3 3.8-3.4 5.9-3.4 3.8 0 5.6 3.5 3.8 7.1-2.5 4.2-9.7 8.6-9.7 8.6z";
function heartIcon(filled) {
  return `<svg class="heart-icon${filled ? " is-filled" : ""}" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="${HEART_PATH}"/></svg>`;
}

const STRINGS = {
  en: { write: "Write", greeting: "Hi, Stepan! I'm interested in: ", reserved: "Reserved" },
  de: { write: "Schreiben", greeting: "Hallo, Stepan! Ich interessiere mich für: ", reserved: "Reserviert" },
  ru: { write: "Написать", greeting: "Привет, Степан! Интересует: ", reserved: "Забронировано" },
  uk: { write: "Написати", greeting: "Привіт, Степане! Цікавить: ", reserved: "Заброньовано" },
  es: { write: "Escribir", greeting: "¡Hola, Stepan! Me interesa: ", reserved: "Reservado" },
  tr: { write: "Yaz", greeting: "Merhaba Stepan! Şununla ilgileniyorum: ", reserved: "Rezerve edildi" },
  ar: { write: "مراسلة", greeting: "مرحبًا ستيفان! أنا مهتم بـ: ", reserved: "محجوز" },
  fa: { write: "پیام بده", greeting: "سلام استپان! به این علاقه دارم: ", reserved: "رزرو شده" },
  zh: { write: "联系", greeting: "Hi, Stepan! 我对这个感兴趣: ", reserved: "已预订" }
};

// Уровни состояния товара — единое значение (new/good/fair/old),
// текст на сайте подставляется автоматически по текущему языку.
const CONDITION_LABELS = {
  new: { en: "Like new", de: "Wie neu", ru: "Как новое", uk: "Як нове", es: "Como nuevo", tr: "Yeni gibi", ar: "شبه جديد", fa: "مثل نو", zh: "全新" },
  good: { en: "Good", de: "Gut", ru: "Хорошее", uk: "Добре", es: "Bueno", tr: "İyi", ar: "جيد", fa: "خوب", zh: "良好" },
  fair: { en: "Fair", de: "Normal", ru: "Нормальное", uk: "Нормальне", es: "Normal", tr: "Normal", ar: "عادي", fa: "معمولی", zh: "一般" },
  old: { en: "Old", de: "Alt", ru: "Старое", uk: "Старе", es: "Viejo", tr: "Eski", ar: "قديم", fa: "قدیمی", zh: "旧" }
};

// Материал — фиксированный набор значений (как состояние), переводится
// автоматически. Можно указать несколько через запятую — на сайте каждое
// переведётся по отдельности. Неизвестное (свободный текст) слово
// показываем как есть, без перевода — для старых объявлений.
const MATERIAL_LABELS = {
  cotton: { en: "Cotton 100%", de: "Baumwolle 100%", ru: "Хлопок 100%", uk: "Бавовна 100%", es: "Algodón 100%", tr: "Pamuk %100", ar: "قطن 100%", fa: "پنبه ۱۰۰٪", zh: "纯棉" },
  polyester: { en: "Polyester", de: "Polyester", ru: "Полиэстер", uk: "Поліестер", es: "Poliéster", tr: "Polyester", ar: "بوليستر", fa: "پلی‌استر", zh: "聚酯纤维" },
  viscose: { en: "Viscose", de: "Viskose", ru: "Вискоза", uk: "Віскоза", es: "Viscosa", tr: "Viskon", ar: "فسكوز", fa: "ویسکوز", zh: "粘胶纤维" },
  wool: { en: "Wool", de: "Wolle", ru: "Шерсть", uk: "Вовна", es: "Lana", tr: "Yün", ar: "صوف", fa: "پشم", zh: "羊毛" },
  leather: { en: "Leather", de: "Leder", ru: "Кожа", uk: "Шкіра", es: "Cuero", tr: "Deri", ar: "جلد", fa: "چرم", zh: "皮革" },
  plastic: { en: "Plastic", de: "Kunststoff", ru: "Пластик", uk: "Пластик", es: "Plástico", tr: "Plastik", ar: "بلاستيك", fa: "پلاستیک", zh: "塑料" },
  metal: { en: "Metal", de: "Metall", ru: "Металл", uk: "Метал", es: "Metal", tr: "Metal", ar: "معدن", fa: "فلز", zh: "金属" },
  wood: { en: "Wood", de: "Holz", ru: "Дерево", uk: "Дерево", es: "Madera", tr: "Ahşap", ar: "خشب", fa: "چوب", zh: "木材" },
  glass: { en: "Glass", de: "Glas", ru: "Стекло", uk: "Скло", es: "Vidrio", tr: "Cam", ar: "زجاج", fa: "شیشه", zh: "玻璃" },
  mixed: { en: "Mixed materials", de: "Materialmix", ru: "Смешанный состав", uk: "Змішаний склад", es: "Materiales mixtos", tr: "Karışık malzeme", ar: "خليط من الخامات", fa: "ترکیبی", zh: "混合材质" }
};
function translateMaterial(raw) {
  if (!raw) return "";
  return raw.split(",").map((s) => s.trim()).filter(Boolean).map((tok) => {
    const entry = MATERIAL_LABELS[tok.toLowerCase()];
    return entry ? entry[currentLang] || entry.en : tok;
  }).join(", ");
}

const META_ICONS = { condition: "👍", material: "🧶", size: "📐", location: "📍" };

const META_LABELS = {
  condition: { en: "Condition: ", de: "Zustand: ", ru: "Состояние: ", uk: "Стан: ", es: "Estado: ", tr: "Durum: ", ar: "الحالة: ", fa: "وضعیت: ", zh: "状况：" },
  material: { en: "Material: ", de: "Material: ", ru: "Материал: ", uk: "Матеріал: ", es: "Material: ", tr: "Malzeme: ", ar: "الخامة: ", fa: "جنس: ", zh: "材质：" },
  size: { en: "Size: ", de: "Größe: ", ru: "Размер: ", uk: "Розмір: ", es: "Talla: ", tr: "Beden: ", ar: "المقاس: ", fa: "سایز: ", zh: "尺码：" },
  location: { en: "Handover: ", de: "Übergabe: ", ru: "Где забрать: ", uk: "Де забрати: ", es: "Entrega: ", tr: "Teslim yeri: ", ar: "مكان الاستلام: ", fa: "محل تحویل: ", zh: "交接地点：" }
};

// Категории товаров — фиксированный список, переводится автоматически.
const CATEGORY_ORDER = ["tech", "furniture", "clothing", "misc"];
const CATEGORY_ICONS = { tech: "💻", furniture: "🪑", clothing: "👘", misc: "🧦" };
const CATEGORY_LABELS = {
  tech: { ru: "Техника", en: "Electronics", de: "Elektronik", uk: "Техніка", es: "Electrónica", tr: "Elektronik", ar: "إلكترونيات", fa: "لوازم الکترونیکی", zh: "电子产品" },
  furniture: { ru: "Мебель", en: "Furniture", de: "Möbel", uk: "Меблі", es: "Muebles", tr: "Mobilya", ar: "أثاث", fa: "مبلمان", zh: "家具" },
  clothing: { ru: "Одежда", en: "Clothing", de: "Klamotten", uk: "Одяг", es: "Ropa", tr: "Giyim", ar: "ملابس", fa: "پوشاک", zh: "服装" },
  misc: { ru: "Всякие мелочи", en: "Miscellaneous", de: "Kleinkram", uk: "Всяка всячина", es: "Cositas", tr: "Ufak tefek", ar: "أغراض متنوعة", fa: "متفرقه", zh: "杂物" }
};
const ALL_CATEGORY_LABEL = { ru: "Все", en: "All", de: "Alle", uk: "Усі", es: "Todo", tr: "Tümü", ar: "الكل", fa: "همه", zh: "全部" };
const FAVORITES_LABEL = { ru: "Избранное", en: "Favorites", de: "Favoriten", uk: "Обране", es: "Favoritos", tr: "Favoriler", ar: "المفضلة", fa: "علاقه‌مندی‌ها", zh: "收藏" };

// "Обо мне" — опциональный блок, работает только если ABOUT_ME определён в data.js
// (редактор admin.html добавит его туда автоматически при первом сохранении).
const ABOUT_ME_DATA = typeof ABOUT_ME !== "undefined" ? ABOUT_ME : null;

// Достаёт перевод из мульти-языкового объекта, с откатом на английский —
// нужно, чтобы старые товары не ломались при переключении на язык,
// который ещё не был заполнен через админку (tr/ar/fa добавлены позже).
function tr(obj) {
  if (!obj) return "";
  return obj[currentLang] || obj.en || "";
}

let currentLang = "en";
let currentCategory = "all";
let lightboxImages = [];
let lightboxIndex = 0;

// "Избранное" — чисто локальная отметка (localStorage), без общего счётчика:
// публичный счётчик умел только расти и не позволял снять лайк, что мешало
// сделать сердечко переключаемым. Можно свободно ставить и снимать.
const LIKES_KEY = "myStuffLikes";

function getLikedLocal() {
  try {
    return new Set(JSON.parse(localStorage.getItem(LIKES_KEY)) || []);
  } catch {
    return new Set();
  }
}
function saveLikedLocal(likes) {
  localStorage.setItem(LIKES_KEY, JSON.stringify([...likes]));
}
let likedIds = getLikedLocal();

const listEl = document.getElementById("product-list");
const lightboxEl = document.getElementById("lightbox");
const lbImgEl = document.getElementById("lb-img");
const lbDotsEl = document.getElementById("lb-dots");
const lbPrevEl = document.getElementById("lb-prev");
const lbNextEl = document.getElementById("lb-next");

function waLink(product) {
  const text = encodeURIComponent(
    STRINGS[currentLang].greeting + tr(product.title)
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function renderCategoryBar() {
  const bar = document.getElementById("category-bar");
  if (!bar) return;
  bar.innerHTML = "";

  const usedCategories = CATEGORY_ORDER.filter((cat) =>
    PRODUCTS.some((p) => !p.hidden && p.category === cat)
  );

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "cat-pill" + (currentCategory === "all" ? " is-active" : "");
  allBtn.textContent = ALL_CATEGORY_LABEL[currentLang];
  allBtn.addEventListener("click", () => {
    currentCategory = "all";
    render();
  });
  bar.appendChild(allBtn);

  usedCategories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-pill" + (currentCategory === cat ? " is-active" : "");
    btn.textContent = `${CATEGORY_ICONS[cat]} ${CATEGORY_LABELS[cat][currentLang]}`;
    btn.addEventListener("click", () => {
      currentCategory = cat;
      render();
    });
    bar.appendChild(btn);
  });

  const favBtn = document.createElement("button");
  favBtn.type = "button";
  favBtn.className = "cat-pill" + (currentCategory === "favorites" ? " is-active" : "");
  favBtn.innerHTML = `💜 ${FAVORITES_LABEL[currentLang]}`;
  favBtn.addEventListener("click", () => {
    currentCategory = "favorites";
    render();
  });
  bar.appendChild(favBtn);
}

const ABOUT_MINIMIZED_KEY = "myStuffAboutMinimized";
const ABOUT_PLACEHOLDER = {
  en: "Write a message…", de: "Nachricht schreiben…", ru: "Написать сообщение…",
  uk: "Написати повідомлення…", es: "Escribe un mensaje…",
  tr: "Bir mesaj yaz…", ar: "اكتب رسالة…", fa: "پیام بنویس…", zh: "写点什么…"
};

let aboutWidgetEl = null;
function renderAboutMe() {
  const data = ABOUT_ME_DATA;
  if (!data) return;
  const title = tr(data.title);
  const text = tr(data.text);
  if (!title && !text) return;

  if (!aboutWidgetEl) {
    aboutWidgetEl = document.createElement("div");
    aboutWidgetEl.className = "about-widget";

    const bubble = document.createElement("div");
    bubble.className = "about-bubble";

    const minimizeBtn = document.createElement("button");
    minimizeBtn.className = "about-minimize";
    minimizeBtn.innerHTML =
      '<svg viewBox="0 0 24 24" width="15" height="15"><path d="M7 7l8 8M15 7l-8 8" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/></svg>';
    minimizeBtn.setAttribute("aria-label", "Close");
    minimizeBtn.addEventListener("click", () => setAboutMinimized(true));
    bubble.appendChild(minimizeBtn);

    const scroll = document.createElement("div");
    scroll.className = "about-scroll";

    if (data.photo) {
      const img = document.createElement("img");
      img.className = "about-photo";
      img.src = data.photo;
      img.style.cursor = "pointer";
      img.addEventListener("click", () => openLightbox([data.photo], 0));
      scroll.appendChild(img);
    }

    const h = document.createElement("div");
    h.className = "about-title";
    scroll.appendChild(h);

    const p = document.createElement("div");
    p.className = "about-text";
    scroll.appendChild(p);
    bubble.appendChild(scroll);

    const replyRow = document.createElement("div");
    replyRow.className = "about-reply-row";
    const replyInput = document.createElement("input");
    replyInput.type = "text";
    replyInput.className = "about-reply-input";
    const sendBtn = document.createElement("button");
    sendBtn.type = "button";
    sendBtn.className = "about-send-btn";
    sendBtn.setAttribute("aria-label", "Send");
    sendBtn.innerHTML =
      '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M2 21l21-9L2 3v7l15 2-15 2z" fill="currentColor"/></svg>';
    const sendToWhatsApp = () => {
      const msg = replyInput.value.trim();
      if (!msg) return;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      replyInput.value = "";
    };
    sendBtn.addEventListener("click", sendToWhatsApp);
    replyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendToWhatsApp();
    });
    replyRow.appendChild(replyInput);
    replyRow.appendChild(sendBtn);
    bubble.appendChild(replyRow);

    const fab = document.createElement("button");
    fab.className = "about-fab";
    fab.setAttribute("aria-label", "Open");
    const fabPhoto = data.fabPhoto || data.photo;
    fab.innerHTML = fabPhoto
      ? `<img src="${fabPhoto}" alt="">`
      : '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 4h16v12H7l-3 3V4z" fill="currentColor"/></svg>';
    fab.addEventListener("click", () => setAboutMinimized(false));

    aboutWidgetEl.appendChild(bubble);
    aboutWidgetEl.appendChild(fab);
    document.body.appendChild(aboutWidgetEl);

    const minimized = localStorage.getItem(ABOUT_MINIMIZED_KEY) === "1";
    aboutWidgetEl.classList.toggle("is-minimized", minimized);
  }
  aboutWidgetEl.querySelector(".about-title").textContent = title || "";
  aboutWidgetEl.querySelector(".about-text").textContent = text || "";
  aboutWidgetEl.querySelector(".about-reply-input").placeholder =
    ABOUT_PLACEHOLDER[currentLang] || ABOUT_PLACEHOLDER.en;
}

function setAboutMinimized(minimized) {
  if (!aboutWidgetEl) return;
  aboutWidgetEl.classList.toggle("is-minimized", minimized);
  localStorage.setItem(ABOUT_MINIMIZED_KEY, minimized ? "1" : "0");
}

function render() {
  listEl.innerHTML = "";
  renderCategoryBar();
  const visibleProducts = PRODUCTS.filter((p) => {
    if (p.hidden) return false;
    if (currentCategory === "all") return true;
    if (currentCategory === "favorites") return likedIds.has(p.id);
    return p.category === currentCategory;
  });
  visibleProducts.forEach((product, index) => {
    if (index > 0) {
      const sep = document.createElement("div");
      sep.className = "separator";
      listEl.appendChild(sep);
    }

    const card = document.createElement("article");
    card.className = "product" + (product.reserved ? " is-reserved" : "");
    card.id = `product-${product.id}`;

    const photoWrap = document.createElement("div");
    photoWrap.className = "product-photo";
    const img = document.createElement("img");
    img.src = product.images[0];
    img.alt = tr(product.title);
    img.loading = "lazy";
    img.decoding = "async";
    photoWrap.appendChild(img);
    if (product.images.length > 1) {
      const count = document.createElement("span");
      count.className = "count";
      count.textContent = `📷 +${product.images.length - 1}`;
      photoWrap.appendChild(count);
    }
    if (product.reserved) {
      const badge = document.createElement("span");
      badge.className = "reserved-badge";
      badge.textContent = STRINGS[currentLang].reserved;
      photoWrap.appendChild(badge);
    }
    photoWrap.addEventListener("click", () => openLightbox(product.images, 0));

    const likeBtn = document.createElement("button");
    likeBtn.type = "button";
    likeBtn.className = "like-btn" + (likedIds.has(product.id) ? " is-liked" : "");
    likeBtn.setAttribute("aria-label", "Favorite");
    likeBtn.innerHTML = heartIcon(likedIds.has(product.id));
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isLiked = likedIds.has(product.id);
      if (isLiked) {
        likedIds.delete(product.id);
      } else {
        likedIds.add(product.id);
      }
      saveLikedLocal(likedIds);
      likeBtn.classList.toggle("is-liked", !isLiked);
      likeBtn.innerHTML = heartIcon(!isLiked);
      if (currentCategory === "favorites") render();
    });
    photoWrap.appendChild(likeBtn);

    const photoCol = document.createElement("div");
    photoCol.className = "photo-col";
    photoCol.appendChild(photoWrap);

    const priceTag = document.createElement("div");
    priceTag.className = "price-tag";
    const priceMatch = product.price.match(/^(.*\d)\s*([^\d\s]+)$/);
    if (priceMatch) {
      priceTag.textContent = priceMatch[1] + " ";
      const currencyEl = document.createElement("span");
      currencyEl.className = "price-currency";
      currencyEl.textContent = priceMatch[2];
      priceTag.appendChild(currencyEl);
    } else {
      priceTag.textContent = product.price;
    }
    photoCol.appendChild(priceTag);

    const info = document.createElement("div");

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = tr(product.title);
    title.addEventListener("click", () => openLightbox(product.images, 0));

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = tr(product.desc);

    const meta = document.createElement("div");
    meta.className = "product-meta";

    function addMetaLine(kind, value) {
      if (!value) return;
      const line = document.createElement("div");
      line.className = "meta-line";
      const labelEl = document.createElement("strong");
      labelEl.textContent = `${META_ICONS[kind]} ${META_LABELS[kind][currentLang]}`;
      line.appendChild(labelEl);
      line.appendChild(document.createTextNode(value));
      meta.appendChild(line);
    }

    const conditionText =
      product.condition && CONDITION_LABELS[product.condition]
        ? CONDITION_LABELS[product.condition][currentLang]
        : "";
    addMetaLine("condition", conditionText);
    addMetaLine("material", translateMaterial(product.material));
    addMetaLine("size", product.size);
    // "Где забрать" — единое значение для всех языков (как состояние).
    // Пока в data.js могут ещё встречаться старые товары, где location
    // сохранён по языкам — на этот случай подтягиваем English.
    const locationText =
      product.location && typeof product.location === "object"
        ? product.location.en || Object.values(product.location).find(Boolean) || ""
        : product.location;
    addMetaLine("location", locationText);

    const footer = document.createElement("div");
    footer.className = "product-footer";

    const writeBtn = document.createElement("a");
    writeBtn.className = `btn-write btn-c${(index % 4) + 1}`;
    writeBtn.textContent = STRINGS[currentLang].write;
    writeBtn.href = waLink(product);
    writeBtn.target = "_blank";
    writeBtn.rel = "noopener noreferrer";

    footer.appendChild(writeBtn);

    info.appendChild(title);
    info.appendChild(desc);
    if (meta.children.length) info.appendChild(meta);
    info.appendChild(footer);

    card.appendChild(photoCol);
    card.appendChild(info);
    listEl.appendChild(card);
  });

  renderAboutMe();
}

function openLightbox(images, startIndex) {
  lightboxImages = images;
  lightboxIndex = startIndex;
  updateLightbox();
  lightboxEl.classList.add("is-open");
  lightboxEl.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightboxEl.classList.remove("is-open");
  lightboxEl.setAttribute("aria-hidden", "true");
}

function updateLightbox() {
  lbImgEl.src = lightboxImages[lightboxIndex];
  const hasMultiple = lightboxImages.length > 1;
  lbPrevEl.hidden = !hasMultiple;
  lbNextEl.hidden = !hasMultiple;
  lbDotsEl.innerHTML = "";
  lightboxImages.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "lb-dot" + (i === lightboxIndex ? " is-active" : "");
    dot.addEventListener("click", () => {
      lightboxIndex = i;
      updateLightbox();
    });
    lbDotsEl.appendChild(dot);
  });
}

function step(delta) {
  lightboxIndex = (lightboxIndex + delta + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", () => step(-1));
document.getElementById("lb-next").addEventListener("click", () => step(1));
lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightboxEl.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

const RTL_LANGS = ["ar", "fa"];
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = RTL_LANGS.includes(currentLang) ? "rtl" : "ltr";
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b === btn)
    );
    render();
  });
});

render();
