const STRINGS = {
  ru: { write: "Написать", greeting: "Привет, Степан! Интересует: ", reserved: "Забронировано" },
  en: { write: "Write", greeting: "Hi, Stepan! I'm interested in: ", reserved: "Reserved" },
  de: { write: "Schreiben", greeting: "Hallo, Stepan! Ich interessiere mich für: ", reserved: "Reserviert" },
  zh: { write: "联系", greeting: "Hi, Stepan! 我对这个感兴趣: ", reserved: "已预订" }
};

let currentLang = "ru";
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

    const footer = document.createElement("div");
    footer.className = "product-footer";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = product.price;

    const writeBtn = document.createElement("a");
    writeBtn.className = `btn-write btn-c${(index % 4) + 1}`;
    writeBtn.textContent = STRINGS[currentLang].write;
    writeBtn.href = waLink(product);
    writeBtn.target = "_blank";
    writeBtn.rel = "noopener noreferrer";

    footer.appendChild(price);
    footer.appendChild(writeBtn);

    info.appendChild(num);
    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(footer);

    card.appendChild(photoWrap);
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
