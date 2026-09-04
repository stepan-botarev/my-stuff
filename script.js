const STRINGS = {
  en: { write: "Write", greeting: "Hi, Stepan! I'm interested in: ", reserved: "Reserved" },
  de: { write: "Schreiben", greeting: "Hallo, Stepan! Ich interessiere mich für: ", reserved: "Reserviert" },
  ru: { write: "Написать", greeting: "Привет, Степан! Интересует: ", reserved: "Забронировано" },
  uk: { write: "Написати", greeting: "Привіт, Степане! Цікавить: ", reserved: "Заброньовано" },
  es: { write: "Escribir", greeting: "¡Hola, Stepan! Me interesa: ", reserved: "Reservado" },
  zh: { write: "联系", greeting: "Hi, Stepan! 我对这个感兴趣: ", reserved: "已预订" }
};

// Уровни состояния товара — единое значение (new/good/fair/old),
// текст на сайте подставляется автоматически по текущему языку.
const CONDITION_LABELS = {
  new: { en: "Like new", de: "Wie neu", ru: "Как новое", uk: "Як нове", es: "Como nuevo", zh: "全新" },
  good: { en: "Good", de: "Gut", ru: "Хорошее", uk: "Добре", es: "Bueno", zh: "良好" },
  fair: { en: "Fair", de: "Normal", ru: "Нормальное", uk: "Нормальне", es: "Normal", zh: "一般" },
  old: { en: "Old", de: "Alt", ru: "Старое", uk: "Старе", es: "Viejo", zh: "旧" }
};

const META_ICONS = { condition: "👍", material: "🧶", size: "👖", location: "📍" };

const META_LABELS = {
  condition: { en: "Condition: ", de: "Zustand: ", ru: "Состояние: ", uk: "Стан: ", es: "Estado: ", zh: "状况：" },
  material: { en: "Material: ", de: "Material: ", ru: "Материал: ", uk: "Матеріал: ", es: "Material: ", zh: "材质：" },
  size: { en: "Size: ", de: "Größe: ", ru: "Размер: ", uk: "Розмір: ", es: "Talla: ", zh: "尺码：" },
  location: { en: "Handover: ", de: "Übergabe: ", ru: "Где забрать: ", uk: "Де забрати: ", es: "Entrega: ", zh: "交接地点：" }
};

let currentLang = "en";
let lightboxImages = [];
let lightboxIndex = 0;

// Лайки видны всем посетителям сайта (общий публичный счётчик через Abacus).
// Лайк можно поставить только один раз с одного браузера (без "отмены") —
// локально в localStorage запоминаем, что уже лайкнули, чтобы не накручивать счётчик.
const LIKES_NS = "mystuff-shop-jr9qlodk";
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

async function fetchLikeCount(id) {
  try {
    const res = await fetch(`https://abacus.jasoncameron.dev/get/${LIKES_NS}/item-${id}`);
    if (!res.ok) return 0;
    const data = await res.json();
    return data.value ?? 0;
  } catch {
    return null;
  }
}

async function hitLikeCount(id) {
  try {
    const res = await fetch(`https://abacus.jasoncameron.dev/hit/${LIKES_NS}/item-${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.value ?? null;
  } catch {
    return null;
  }
}

const listEl = document.getElementById("product-list");
const lightboxEl = document.getElementById("lightbox");
const lbImgEl = document.getElementById("lb-img");
const lbDotsEl = document.getElementById("lb-dots");

function waLink(product) {
  const text = encodeURIComponent(
    STRINGS[currentLang].greeting + product.title[currentLang]
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function render() {
  listEl.innerHTML = "";
  PRODUCTS.forEach((product, index) => {
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
    img.alt = product.title[currentLang];
    photoWrap.appendChild(img);
    if (product.images.length > 1) {
      const count = document.createElement("span");
      count.className = "count";
      count.textContent = `+${product.images.length - 1}`;
      photoWrap.appendChild(count);
    }
    if (product.reserved) {
      const badge = document.createElement("span");
      badge.className = "reserved-badge";
      badge.textContent = STRINGS[currentLang].reserved;
      photoWrap.appendChild(badge);
    }
    photoWrap.addEventListener("click", () => openLightbox(product.images, 0));

    const alreadyLiked = likedIds.has(product.id);
    const likeBtn = document.createElement("button");
    likeBtn.type = "button";
    likeBtn.className = "like-btn" + (alreadyLiked ? " is-liked" : "");
    likeBtn.disabled = alreadyLiked;
    likeBtn.setAttribute("aria-label", "Like");
    likeBtn.innerHTML =
      '<svg class="heart" viewBox="0 0 24 24" width="14" height="14"><path d="M12 21s-7.2-4.6-10-9.3C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.6C11 6 12.4 5 14.4 5 18 5 19.6 8.6 18 11.7 15.2 16.4 12 21 12 21z"/></svg>' +
      '<span class="like-count">·</span>';
    const likeCountEl = likeBtn.querySelector(".like-count");
    likeBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (likeBtn.disabled) return;
      likeBtn.disabled = true;
      likeBtn.classList.add("is-liked");
      likedIds.add(product.id);
      saveLikedLocal(likedIds);
      const current = parseInt(likeCountEl.textContent, 10) || 0;
      likeCountEl.textContent = current + 1;
      const newValue = await hitLikeCount(product.id);
      if (newValue != null) likeCountEl.textContent = newValue;
    });
    fetchLikeCount(product.id).then((value) => {
      likeCountEl.textContent = value != null ? value : "0";
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

    const num = document.createElement("div");
    num.className = "product-num";
    num.textContent = String(product.id).padStart(2, "0");

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = product.title[currentLang];
    title.addEventListener("click", () => openLightbox(product.images, 0));

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = product.desc[currentLang];

    const meta = document.createElement("div");
    meta.className = "product-meta";

    function addMetaLine(kind, value) {
      if (!value) return;
      const line = document.createElement("div");
      line.className = "meta-line";
      line.textContent = `${META_ICONS[kind]} ${META_LABELS[kind][currentLang]}${value}`;
      meta.appendChild(line);
    }

    const conditionText =
      product.condition && CONDITION_LABELS[product.condition]
        ? CONDITION_LABELS[product.condition][currentLang]
        : "";
    addMetaLine("condition", conditionText);
    addMetaLine("material", product.material);
    addMetaLine("size", product.size);
    const locationText =
      product.location && typeof product.location === "object"
        ? product.location[currentLang] || product.location.en
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

    info.appendChild(num);
    info.appendChild(title);
    info.appendChild(desc);
    if (meta.children.length) info.appendChild(meta);
    info.appendChild(footer);

    card.appendChild(photoCol);
    card.appendChild(info);
    listEl.appendChild(card);
  });
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

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    document.documentElement.lang = currentLang;
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b === btn)
    );
    render();
  });
});

render();
