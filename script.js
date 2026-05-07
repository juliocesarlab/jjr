const companyData = {
  name: "JJR Materiais para Construção",
  city: "Uberaba",
  state: "MG",
  whatsappDisplay: "+55 34 3315-2727",
  whatsappUrl: "https://wa.me/553433152727?text=Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento",
  instagramUrl: "https://www.instagram.com/jjrmateriaisparaconstrucao/",
  facebookUrl: "https://www.facebook.com/jjrmateriaisparaconstrucao/",
  address: "Av. Nossa Senhora do Desterro, 906, Uberaba - MG",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Nossa+Senhora+do+Desterro,+906,+Uberaba,+MG",
  mapEmbedUrl: "https://www.google.com/maps?q=Av.+Nossa+Senhora+do+Desterro,+906,+Uberaba,+MG&z=16&output=embed",
  cnpj: "04.391.657/0001-88",
  foundingYear: "2001",

  bento: [
    {
      title: "Obra pesada",
      label: "Estrutura",
      description: "Cimento, areia, brita, tijolo e ferragem. Tudo o que segura a obra de pé.",
      tags: ["Votoran", "CSN", "Gerdau"],
      variant: "photo big",
      photo: "assets/hero-store.png"
    },
    {
      title: "Pisos & revestimentos",
      label: "Acabamento",
      description: "Porcelanato, cerâmica e revestimento pra cada ambiente.",
      tags: ["Eliane", "Portobello", "Incepa"],
      variant: "photo tall",
      photo: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=900&q=80&auto=format&fit=crop"
    },
    {
      title: "Hidráulica",
      label: "Água & encanamento",
      description: "Tubos, conexões, caixa d'água e tanques.",
      tags: ["Tigre", "Amanco", "Fortlev"],
      variant: "photo wide",
      photo: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1200&q=80&auto=format&fit=crop"
    },
    {
      title: "Metais & banheiros",
      label: "Louças e acabamento",
      description: "Torneiras, cubas, gabinetes e acessórios.",
      tags: ["Deca", "Lorenzetti"],
      variant: "photo med",
      photo: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&q=80&auto=format&fit=crop"
    },
    {
      title: "Tintas",
      label: "Pintura",
      description: "Tinta, verniz, spray, rolo e pincel.",
      tags: ["Suvinil", "Coral", "Sherwin"],
      variant: "photo med",
      photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80&auto=format&fit=crop"
    },
    {
      title: "Ferramentas",
      label: "Manuais & elétricas",
      description: "Para a rotina da obra e a manutenção do dia a dia.",
      tags: ["Bosch", "Tramontina", "Vonder"],
      variant: "photo med",
      photo: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&q=80&auto=format&fit=crop"
    },
    {
      title: "Cobertura",
      label: "Telhado",
      description: "Telhas, calhas e estrutura de apoio.",
      tags: ["Brasilit", "Eternit"],
      variant: "photo med",
      photo: "assets/hero-store.png"
    }
  ],

  journeySteps: [
    {
      title: "Chame no WhatsApp",
      text: "Manda uma mensagem com o que você precisa. A gente responde rápido."
    },
    {
      title: "Receba o orçamento",
      text: "Confirmamos preços, prazos e o melhor jeito de comprar — retirada, delivery ou on-line."
    },
    {
      title: "Sua obra anda",
      text: "Material entregue ou pronto pra retirar. Sem enrolação, sem tempo perdido."
    }
  ],

  reviews: [
    {
      name: "Lucas César Carneiro",
      meta: "1 avaliação",
      stars: 5,
      when: "10 meses atrás",
      text: "Excelente atendimento, ótimos preços e entregas sempre em tempo ideal com muita atenção dos colaboradores da empresa.",
      avatarColor: "#1f9d57"
    },
    {
      name: "Luciano Angelo",
      meta: "Local Guide · 31 avaliações · 14 fotos",
      stars: 5,
      when: "um ano atrás",
      text: "Experiência incrível na loja! O atendimento foi excepcional, os produtos são de alta qualidade e os preços são justos. A equipe de entrega merece destaque pela sua eficiência e simpatia. Fiquei impressionado com a educação e o bom humor de todos. Recomendo totalmente!",
      avatarColor: "#7a8aa0"
    },
    {
      name: "lucimar ribeiro",
      meta: "1 avaliação",
      stars: 5,
      when: "10 meses atrás",
      text: "Ótimos preços e o atendimento nota 10!",
      avatarColor: "#ef6e1b"
    },
    {
      name: "Salomão Silva",
      meta: "Local Guide · 71 avaliações · 20 fotos",
      stars: 4,
      when: "um ano atrás",
      text: "Loja com uma boa variedade de produtos, atendimento bom, preços compatíveis com Uberaba, as vezes até mais em conta, recomendo.",
      avatarColor: "#5b6e8c"
    },
    {
      name: "roberto vilassa",
      meta: "Local Guide · 125 avaliações · 78 fotos",
      stars: 5,
      when: "um ano atrás",
      text: "O atendimento é excepcional, fui muito bem atendido em todos os departamentos. Pessoal da entrega foi rápido e muito eficiente, os preços também são ótimos. Todo pessoal da equipe estão de parabéns. Vale a pena construir com eles.",
      avatarColor: "#8a6f4d"
    }
  ],

  socialLinks: [
    { label: "Instagram", url: "https://www.instagram.com/jjrmateriaisparaconstrucao/" },
    { label: "Facebook", url: "https://www.facebook.com/jjrmateriaisparaconstrucao/" }
  ]
};

function $(id) { return document.getElementById(id); }
function setText(id, value) { const el = $(id); if (el) el.textContent = value; }
function setLink(id, href) { const el = $(id); if (el) el.href = href; }

function fillBento() {
  const root = $("bento-grid");
  if (!root) return;

  companyData.bento.forEach((card) => {
    const variants = card.variant.split(" ");
    const article = document.createElement("article");
    article.className = "bento-card " + variants.map((v) => "bento-card--" + v).join(" ");
    article.setAttribute("data-reveal", "");

    if (card.photo) {
      const photo = document.createElement("div");
      photo.className = "bento-card-photo";
      photo.style.backgroundImage = `url('${card.photo}')`;
      article.appendChild(photo);
    }

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = card.label;

    const title = document.createElement("h3");
    title.textContent = card.title;

    const desc = document.createElement("p");
    desc.textContent = card.description;

    article.append(label, title, desc);

    if (card.tags && card.tags.length) {
      const tags = document.createElement("div");
      tags.className = "bento-tags";
      card.tags.forEach((t) => {
        const s = document.createElement("span");
        s.textContent = t;
        tags.appendChild(s);
      });
      article.appendChild(tags);
    }

    root.appendChild(article);
  });
}

function fillReviews() {
  const root = $("proof-reviews");
  if (!root) return;

  companyData.reviews.forEach((r) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.setAttribute("data-reveal", "");

    const head = document.createElement("header");
    head.className = "review-head";

    const avatar = document.createElement("span");
    avatar.className = "review-avatar";
    avatar.style.background = r.avatarColor;
    avatar.textContent = r.name.trim().charAt(0).toUpperCase();

    const who = document.createElement("div");
    who.className = "review-who";
    const name = document.createElement("strong");
    name.textContent = r.name;
    const meta = document.createElement("span");
    meta.textContent = r.meta;
    who.append(name, meta);

    head.append(avatar, who);

    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.setAttribute("aria-label", `${r.stars} de 5 estrelas`);
    for (let i = 1; i <= 5; i++) {
      const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("viewBox", "0 0 24 24");
      s.setAttribute("aria-hidden", "true");
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z");
      p.setAttribute("fill", i <= r.stars ? "#f5b301" : "#e5e1d8");
      s.appendChild(p);
      stars.appendChild(s);
    }

    const when = document.createElement("span");
    when.className = "review-when";
    when.textContent = r.when;

    const starRow = document.createElement("div");
    starRow.className = "review-starrow";
    starRow.append(stars, when);

    const body = document.createElement("p");
    body.className = "review-text";
    body.textContent = r.text;

    card.append(head, starRow, body);
    root.appendChild(card);
  });
}

function fillJourney() {
  const root = $("journey-steps");
  if (!root) return;

  companyData.journeySteps.forEach((step, i) => {
    const li = document.createElement("li");
    li.setAttribute("data-reveal", "");

    const idx = document.createElement("span");
    idx.className = "journey-step-index";
    idx.textContent = String(i + 1).padStart(2, "0");

    const h3 = document.createElement("h3");
    h3.textContent = step.title;

    const p = document.createElement("p");
    p.textContent = step.text;

    li.append(idx, h3, p);
    root.appendChild(li);
  });
}

function fillContact() {
  setText("contact-whatsapp-text", companyData.whatsappDisplay);
  setText("contact-address", companyData.address);
  setText("footer-meta", `CNPJ ${companyData.cnpj} · Desde ${companyData.foundingYear}`);
  setText("footer-year", new Date().getFullYear());

  const socialRoot = $("social-links");
  if (socialRoot) {
    companyData.socialLinks.forEach((s) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = s.label;
      a.setAttribute("aria-label", `Abrir ${s.label} da JJR`);
      socialRoot.appendChild(a);
    });
  }
}

function fillLinks() {
  ["header-whatsapp", "hero-whatsapp", "contact-whatsapp", "footer-whatsapp", "cta-whatsapp", "floating-whatsapp"]
    .forEach((id) => setLink(id, companyData.whatsappUrl));

  setLink("location-map-cta", companyData.mapUrl);

  const map = $("location-map-embed");
  if (map) map.src = companyData.mapEmbedUrl;
}

function applySeoTags() {
  if (!window.location.protocol.startsWith("http")) return;
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = window.location.href;
  document.head.appendChild(canonical);

  const ogUrl = document.createElement("meta");
  ogUrl.setAttribute("property", "og:url");
  ogUrl.content = window.location.href;
  document.head.appendChild(ogUrl);
}

function injectSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: companyData.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Nossa Senhora do Desterro, 906",
      addressLocality: companyData.city,
      addressRegion: companyData.state,
      addressCountry: "BR"
    },
    foundingDate: "2001-04-17",
    identifier: companyData.cnpj,
    areaServed: { "@type": "City", name: companyData.city },
    sameAs: [companyData.instagramUrl, companyData.facebookUrl],
    url: window.location.protocol.startsWith("http") ? window.location.href : undefined
  };
  const cleanSchema = JSON.parse(JSON.stringify(schema));
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(cleanSchema);
  document.head.appendChild(script);
}

function setupReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => obs.observe(el));
}

function init() {
  fillBento();
  fillReviews();
  fillJourney();
  fillContact();
  fillLinks();
  applySeoTags();
  injectSchema();
  setupReveal();
}

init();
