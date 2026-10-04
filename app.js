/* ==========================================================================
   HOLA HONEY - INTERACTIVE APPLICATION & TRANSLATION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. TRANSLATION DICTIONARY (EN & ES)
    // ==========================================
    const translations = {
        en: {
            announcement: "🍯 Free shipping on all orders over $45 | Ethically sourced from La Virtud, Honduras",
            nav_shop: "Shop",
            nav_story: "Our Story",
            nav_sourcing: "Sourcing",
            nav_pairing: "Pairing Guide",
            nav_contact: "Contact",
            search_title: "Search Hola Honey",
            search_placeholder: "Search wildflower honey, gift sets, honeycomb...",
            
            hero_title: 'Raw honey<br>rooted in <span class="highlight-italics">Honduras.</span>',
            hero_subheadline: "Premium, pure honey with purpose.",
            hero_desc: "Naturally delicious. Responsibly sourced from the mountains of Honduras, supporting local families and strengthening communities.",
            btn_shop_honey: 'SHOP HONEY <i class="fa-solid fa-arrow-right"></i>',
            btn_our_story: "OUR STORY",
            
            badge_raw: "100% RAW & PURE",
            badge_sourced: "SOURCED IN HONDURAS",
            badge_people: "PEOPLE OVER PROFIT",
            
            shop_kicker: "HARVESTED WITH CARE",
            shop_title: "Our Raw Honey Collection",
            shop_subtitle: "Straight from the pristine mountain apiaries of La Virtud, Honduras. Unfiltered, unheated, and packed with natural enzymes.",
            
            pairing_kicker: "CULINARY EXPERIENCE",
            pairing_title: "Find Your Perfect Honey Pairing",
            pairing_desc: "Select a food item below to discover which Honduran raw honey profile elevates your dish.",
            food_cheese: "Artisanal Cheese",
            food_tea: "Herbal & Black Tea",
            food_toast: "Warm Toast & Butter",
            food_fruit: "Fresh Berries & Figs",
            food_yogurt: "Greek Yogurt & Oats",
            
            story_kicker: "ROOTED IN LA VIRTUD",
            story_title: "Honey with a Higher Purpose",
            story_subheading: "Rooted in Central America. Powered by opportunity.",
            origin_location: "La Virtud, Lempira, Honduras.",
            origin_country: "",
            story_p1: "Our story begins in the high-altitude mountain forests of La Virtud, Honduras, where local beekeepers care for bees surrounded by coffee blossoms, citrus trees, and pine canopy.",
            story_p2: "<strong>Hola Honey</strong> was born out of a deep commitment to <em>People Over Profit</em>. We work directly with smallholder Honduran beekeeping families, providing fair wages, sustainable hive equipment, and re-investing profits into rural community education.",
            stat_1: "Nearly half of people in Honduras live on less than $8.30 a day.",
            stat_2: "We pay seven times Honduras’s agricultural hourly minimum wage.",
            stat_3: "Fruit trees planted in Honduras",
            btn_learn_sourcing: 'LEARN ABOUT OUR SOURCING <i class="fa-solid fa-arrow-right"></i>',
            
            sourcing_kicker: "THE HONEY JOURNEY",
            sourcing_title: "From Hive to Jar",
            step1_title: "Mountain Foraging",
            step1_desc: "Bees forage freely in pristine tropical mountain forests away from synthetic pesticides or industrial farms.",
            step2_title: "Ethical Harvesting",
            step2_desc: "Our beekeepers harvest with care, leaving sufficient honey stores to support the health of each colony.",
            step3_title: "Cold Extraction",
            step3_desc: "Honey is gently spun out of combs without heat processing, preserving all natural pollen, enzymes, and medicinal properties.",
            step4_title: "Artisanal Jarring",
            step4_desc: "Carefully bottled in glass jars and finished with attention to every detail.",
            
            newsletter_kicker: "NO SPAM, JUST SWEET UPDATES",
            newsletter_title: "Join the Hola Honey Waitlist",
            newsletter_desc: "Be the first to know when our select Honduran honey harvests become available. Join our waitlist for early access updates.",
            email_placeholder: "Enter your email address to join the waitlist...",
            phone_placeholder: "Enter your phone number...",
            btn_subscribe: 'JOIN WAITLIST <i class="fa-solid fa-paper-plane"></i>',
            
            footer_tagline: "Raw honey rooted in Honduras. Premium, pure honey with purpose.",
            footer_quick_links: "Quick Links",
            footer_products: "Products",
            footer_sourcing_title: "Location",
            footer_rights: "All rights reserved. Rooted in Honduras.",
            
            cart_title: "Your Shopping Cart",
            cart_subtotal: "Subtotal",
            cart_note: "Taxes & shipping calculated at checkout.",
            btn_checkout: 'PROCEED TO CHECKOUT <i class="fa-solid fa-lock"></i>',
            btn_add_to_cart: "Join Waitlist",
            
            checkout_success_title: "Order Received!",
            checkout_success_desc: "Thank you for supporting smallholder beekeeping families in La Virtud, Honduras.",
            btn_continue: "CONTINUE SHOPPING",
            
            free_shipping_unlocked: "🎉 You qualify for FREE Shipping!",
            free_shipping_needed: "Add {amount} more for FREE Shipping!"
        },
        es: {
            announcement: "🍯 Envío gratis en pedidos superiores a $45 | Origen ético de La Virtud, Honduras",
            nav_shop: "Tienda",
            nav_story: "Nuestra Historia",
            nav_sourcing: "Origen",
            nav_pairing: "Guía de Maridaje",
            nav_contact: "Contacto",
            search_title: "Buscar en Hola Honey",
            search_placeholder: "Buscar miel silvestre, cajas de regalo, panal...",
            
            hero_title: 'Miel pura<br>arraigada en <span class="highlight-italics">Honduras.</span>',
            hero_subheadline: "Miel pura premium con propósito.",
            hero_desc: "Naturalmente deliciosa. Éticamente obtenida de las montañas de Honduras, apoyando a familias locales y un futuro más saludable.",
            btn_shop_honey: 'COMPRAR MIEL <i class="fa-solid fa-arrow-right"></i>',
            btn_our_story: "NUESTRA HISTORIA",
            
            badge_raw: "100% PURA Y CRUDA",
            badge_sourced: "ORIGEN HONDURAS",
            badge_people: "PERSONAS SOBRE GANANCIAS",
            
            shop_kicker: "COSECHADA CON CUIDADO",
            shop_title: "Nuestra Colección de Miel Pura",
            shop_subtitle: "Directo de los apiarios de montaña de La Virtud, Honduras. Sin filtrar, sin calentar y llena de enzimas naturales.",
            
            pairing_kicker: "EXPERIENCIA CULINARIA",
            pairing_title: "Encuentra tu Maridaje de Miel Perfecto",
            pairing_desc: "Selecciona un alimento para descubrir qué perfil de miel hondureña realza tu platillo.",
            food_cheese: "Quesos Artesanales",
            food_tea: "Té de Hierbas y Negro",
            food_toast: "Pan Tostado con Mantequilla",
            food_fruit: "Frutos Frescos y Higos",
            food_yogurt: "Yogur Griego y Avena",
            
            story_kicker: "ARRAIGADOS EN LA VIRTUD",
            story_title: "Miel con un Propósito Mayor",
            story_subheading: "Arraigados en Centroamérica. Impulsados por la oportunidad.",
            origin_location: "La Virtud, Lempira, Honduras.",
            origin_country: "",
            story_p1: "Nuestra historia comienza en los bosques de montaña de La Virtud, Honduras, donde los apicultores locales cuidan de las abejas rodeadas de flores de café, cítricos y pinos.",
            story_p2: "<strong>Hola Honey</strong> nació del compromiso con <em>Personas sobre Ganancias</em>. Trabajamos directamente con familias apicultoras hondureñas, pagando precios justos y reinvirtiendo en la comunidad.",
            stat_1: "Casi la mitad de las personas en Honduras viven con menos de $8.30 al día.",
            stat_2: "Pagamos siete veces el salario mínimo por hora agrícola de Honduras.",
            stat_3: "Árboles frutales plantados en Honduras",
            btn_learn_sourcing: 'CONOCE NUESTRO ORIGEN <i class="fa-solid fa-arrow-right"></i>',
            
            sourcing_kicker: "EL VIAJE DE LA MIEL",
            sourcing_title: "De la Colmena al Frasco",
            step1_title: "Pecoreo en la Montaña",
            step1_desc: "Las abejas recolectan néctar libremente en bosques tropicales sin pesticidas ni químicos.",
            step2_title: "Cosecha Ética",
            step2_desc: "Los apicultores solo cosechan el exceso de panal, asegurando alimento para la colmena.",
            step3_title: "Extracción en Frío",
            step3_desc: "Centrifugado suave en frío para preservar todo el polen, enzimas y propiedades curativas.",
            step4_title: "Envasado Artesanal",
            step4_desc: "Envasada a mano en frascos de vidrio con empaques ecológicos directamente a tu mesa.",
            
            newsletter_kicker: "SIN SPAM, SOLO DULCES NOVEDADES",
            newsletter_title: "Únete a la Lista de Espera de Hola Honey",
            newsletter_desc: "Sé el primero en enterarte cuando salgan nuestras cosechas de miel de Honduras. Únete a nuestra lista de espera para recibir actualizaciones exclusivas.",
            email_placeholder: "Ingresa tu correo para unirte a la lista de espera...",
            phone_placeholder: "Ingresa tu teléfono...",
            btn_subscribe: 'UNIRSE A LA LISTA <i class="fa-solid fa-paper-plane"></i>',
            
            footer_tagline: "Miel pura arraigada en Honduras. Miel premium con propósito.",
            footer_quick_links: "Enlaces Rápidos",
            footer_products: "Productos",
            footer_sourcing_title: "Ubicación",
            footer_rights: "Todos los derechos reservados. Arraigados en Honduras.",
            
            cart_title: "Tu Carrito de Compras",
            cart_subtotal: "Subtotal",
            cart_note: "Impuestos y envío calculados al pagar.",
            btn_checkout: 'PROCEDER AL PAGO <i class="fa-solid fa-lock"></i>',
            btn_add_to_cart: "Unirse a la Lista de Espera",
            
            checkout_success_title: "¡Pedido Recibido!",
            checkout_success_desc: "Gracias por apoyar a las familias apicultoras de La Virtud, Honduras.",
            btn_continue: "SEGUIR COMPRANDO",
            
            free_shipping_unlocked: "🎉 ¡Calificas para Envío GRATIS!",
            free_shipping_needed: "¡Agrega {amount} más para Envío GRATIS!"
        },
        zh: {
            announcement: "🍯 订单满 $45 免运费 | 来自洪都拉斯拉维尔图德的伦理采收纯蜂蜜",
            nav_shop: "选购",
            nav_story: "品牌故事",
            nav_sourcing: "蜂蜜来源",
            nav_contact: "联系我们",
            search_title: "搜索 Hola Honey",
            search_placeholder: "搜索高山百花蜜、礼盒、蜂巢...",
            
            hero_title: '源自<span class="highlight-italics">洪都拉斯</span>的<br>纯正高山蜂蜜',
            hero_subheadline: "高品质纯蜜，蕴含深远使命。",
            hero_desc: "天然美味。负责任地采自洪都拉斯高山森林，赋能当地家庭，共筑更美好的社区。",
            btn_shop_honey: '选购蜂蜜 <i class="fa-solid fa-arrow-right"></i>',
            btn_our_story: "品牌故事",
            
            badge_raw: "100% 纯天然原蜜",
            badge_sourced: "洪都拉斯原产",
            badge_people: "以人为本，重于利润",
            
            shop_kicker: "精心采收",
            shop_title: "高山纯蜜系列",
            shop_subtitle: "直送自洪都拉斯拉维尔图德的高山蜂场。未经加热与过滤，保留丰富活性酶与营养。",
            
            pairing_kicker: "美食搭配",
            pairing_title: "探索您的完美蜂蜜搭配",
            pairing_desc: "选择下方食物，了解哪款洪都拉斯原蜜能升华您的佳肴。",
            food_cheese: "手工奶酪",
            food_tea: "草本茶与红茶",
            food_toast: "温香吐司与黄油",
            food_fruit: "新鲜无花果与浆果",
            food_yogurt: "希腊酸奶与燕麦",
            
            story_kicker: "扎根拉维尔图德",
            story_title: "蕴含更高使命的蜂蜜",
            story_subheading: "扎根中美洲，以机遇赋能当地。",
            origin_location: "La Virtud, Lempira, Honduras.",
            origin_country: "",
            story_p1: "我们的故事始于洪都拉斯拉维尔图德的高山森林，当地蜂农在咖啡花、柑橘树和松树林环绕的环境中用心呵护蜜蜂。",
            story_p2: "<strong>Hola Honey</strong> 诞生于<em>以人为本，重于利润</em>的坚定承诺。我们与洪都拉斯小农蜂农家庭直接合作，支付公平报酬，提供可持续蜂箱设备，并将收益重投资于乡村社区教育。",
            stat_1: "洪都拉斯近半数人口每日生活费低于 8.30 美元。",
            stat_2: "我们的报酬是洪都拉斯农业最低时薪的七倍。",
            stat_3: "在洪都拉斯种植的果树数量",
            btn_learn_sourcing: '了解我们的采收之旅 <i class="fa-solid fa-arrow-right"></i>',
            
            sourcing_kicker: "蜂蜜采收之旅",
            sourcing_title: "从蜂巢到蜜罐",
            step1_title: "高山采集",
            step1_desc: "蜜蜂在远离合成农药和工业农场的原始热带高山森林中自由采蜜。",
            step2_title: "伦理采收",
            step2_desc: "蜂农精心采收，预留充足蜂蜜以维持每个蜂群的健康繁衍。",
            step3_title: "冷压萃取",
            step3_desc: "离心温和分离蜂蜜，无需加热处理，完整保留天然花粉、活性酶与营养价值。",
            step4_title: "手作装瓶",
            step4_desc: "精心装入玻璃罐中，注重细节，彰显卓越品质。",
            
            newsletter_kicker: "零垃圾邮件，仅有甜美近况",
            newsletter_title: "加入 Hola Honey 候补名单",
            newsletter_desc: "第一时间获取洪都拉斯精选蜂蜜开采与现货上架通知。加入候补名单，享受优先预订特权。",
            email_placeholder: "请输入您的电子邮箱...",
            phone_placeholder: "请输入您的电话号码...",
            btn_subscribe: '加入候补名单 <i class="fa-solid fa-paper-plane"></i>',
            
            footer_tagline: "源自洪都拉斯的纯蜜。高品质纯蜜，蕴含深远使命。",
            footer_quick_links: "快速链接",
            footer_products: "产品系列",
            footer_sourcing_title: "地址",
            footer_rights: "保留所有权利。扎根于洪都拉斯。",
            
            cart_title: "您的购物车",
            cart_subtotal: "小计",
            cart_note: "运费与税费将在结账时计算。",
            btn_checkout: '前往结账 <i class="fa-solid fa-lock"></i>',
            btn_add_to_cart: "加入候补名单",
            
            checkout_success_title: "已收到您的预订！",
            checkout_success_desc: "感谢您支持洪都拉斯拉维尔图德的蜂农家庭。",
            btn_continue: "继续浏览",
            
            free_shipping_unlocked: "🎉 您已享受免运费优惠！",
            free_shipping_needed: "还差 {amount} 即可享受免运费！"
        }
    };

    let currentLang = localStorage.getItem('holahoney_lang') || 'en';

    // ==========================================
    // 2. PRODUCTS DATABASE
    // ==========================================
    const products = [
        {
            id: 'p1',
            name: 'Hola Honey — Mountain Harvest (9 OZ)',
            name_es: 'Hola Honey — Cosecha de Montaña (9 OZ / 255g)',
            name_zh: 'Hola Honey — 高山收获款纯蜜 (9 OZ / 255克)',
            price: 24.00,
            image: 'assets/mountain_harvest.jpg',
            tag: 'MOUNTAIN HARVEST',
            tag_es: 'COSECHA DE MONTAÑA',
            tag_zh: '高山收获款',
            status: 'COMING SOON',
            status_es: 'PRÓXIMAMENTE',
            status_zh: '即将上市',
            origin: 'La Virtud, Lempira, Honduras.',
            origin_es: 'La Virtud, Lempira, Honduras.',
            origin_zh: 'La Virtud, Lempira, Honduras.',
            desc: 'Naturally delicious 100% raw honey ethically sourced from the high mountain forests of La Virtud, Honduras. Rooted in Honduras, made with purpose.',
            desc_es: 'Miel 100% pura y natural obtenida éticamente de los bosques de alta montaña de La Virtud, Honduras. Arraigada en Honduras, hecha con propósito.',
            desc_zh: '天然美味的100%纯原蜜，伦理采收自洪都拉斯拉维尔图德高山森林。扎根洪都拉斯，用心守护品质。',
            pairingFood: 'toast'
        },
        {
            id: 'p2',
            name: 'Meliponini Reserve — Rare Stingless Bee Honey (4 FL OZ)',
            name_es: 'Reserva Meliponini — Miel Rara de Abeja Sin Aguijón (4 FL OZ / 118 mL)',
            name_zh: 'Meliponini 珍藏款 — 稀有无刺蜂药用纯蜜 (4 FL OZ / 118毫升)',
            price: 34.00,
            image: 'assets/meliponini_reserve.jpg',
            tag: 'RARE RESERVE',
            tag_es: 'RESERVA RARA',
            tag_zh: '稀有珍藏款',
            status: 'COMING SOON',
            status_es: 'PRÓXIMAMENTE',
            status_zh: '即将上市',
            origin: 'La Virtud, Lempira, Honduras.',
            origin_es: 'La Virtud, Lempira, Honduras.',
            origin_zh: 'La Virtud, Lempira, Honduras.',
            desc: 'Small-batch, ultra-rare medicinal honey produced by native stingless bees (Meliponini). Bright, tangy, citrusy, and deeply floral — honey unlike any honey you know.',
            desc_es: 'Cosecha ultra-rara producida por abejas nativas sin aguijón (Meliponini). Una miel brillante, cítrica, floral y medicinal única en su clase.',
            desc_zh: '由本土无刺蜂（Meliponini）酿造的限量极稀有药用纯蜜。口感明亮酸甜，自带柑橘与浓郁花香——独一无二的珍品纯蜜。',
            pairingFood: 'cheese'
        }
    ];

    // Pairing Descriptions
    const pairingsData = {
        cheese: {
            productId: 'p1',
            text_en: "<strong>Perfect Match: La Virtud Raw Honey</strong>. The rich golden amber notes perfectly balance the saltiness of Manchego, Sharp Cheddar, and Creamy Goat Cheese.",
            text_es: "<strong>Maridaje Perfecto: Miel Pura La Virtud</strong>. Las notas de ámbar dorado equilibran perfectamente el toque salado del queso Manchego, Cheddar y Queso de Cabra."
        },
        tea: {
            productId: 'p3',
            text_en: "<strong>Perfect Match: Honduran Mountain Wildflower</strong>. Dissolves smoothly in Earl Grey, Chamomile, and Mint teas, enhancing floral aromatics without harsh sweetness.",
            text_es: "<strong>Maridaje Perfecto: Miel Silvestre de Montaña</strong>. Se disuelve suavemente en té Earl Grey, Manzanilla y Menta, realzando los aromas sin dulzura excesiva."
        },
        toast: {
            productId: 'p2',
            text_en: "<strong>Perfect Match: Raw Honeycomb Chunk</strong>. Spread onto warm sourdough toast with salted Irish butter. The natural wax offers an artisanal crunch.",
            text_es: "<strong>Maridaje Perfecto: Trozo de Panal Crudo</strong>. Unte en pan de masa madre caliente con mantequilla. La cera natural aporta una textura artesanal única."
        },
        fruit: {
            productId: 'p4',
            text_en: "<strong>Perfect Match: Artisanal Gift Set</strong>. Drizzle over fresh sliced figs, crisp green apples, and raspberries for an elegant dessert platter.",
            text_es: "<strong>Maridaje Perfecto: Set de Regalo Artesanal</strong>. Vierta sobre higos frescos, manzanas verdes crujientes y frambuesas para un postre elegante."
        },
        yogurt: {
            productId: 'p1',
            text_en: "<strong>Perfect Match: La Virtud Raw Honey</strong>. Swirl into thick whole-milk Greek yogurt topped with toasted walnuts and chia seeds.",
            text_es: "<strong>Maridaje Perfecto: Miel Pura La Virtud</strong>. Mezcle en yogur griego entero con nueces tostadas y semillas de chía."
        }
    };

    // Cart State
    let cart = JSON.parse(localStorage.getItem('holahoney_cart')) || [];

    // ==========================================
    // 3. LANGUAGE SWITCHER IMPLEMENTATION
    // ==========================================
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langSwitcher = document.querySelector('.lang-switcher');
    const currentLangCode = document.getElementById('current-lang-code');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('holahoney_lang', lang);
        document.body.className = `lang-${lang}`;
        currentLangCode.textContent = lang.toUpperCase();

        // Update active class on dropdown options
        document.querySelectorAll('.lang-opt').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        // Translate all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Re-render dynamic components with updated language
        renderProducts();
        renderPairing('cheese');
        renderCart();
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitcher.classList.toggle('open');
        });
    }

    document.querySelectorAll('.lang-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.dataset.lang;
            setLanguage(selectedLang);
            langSwitcher.classList.remove('open');
        });
    });

    document.addEventListener('click', () => {
        if (langSwitcher) langSwitcher.classList.remove('open');
    });

    // ==========================================
    // 4. SHOP PRODUCT RENDERING
    // ==========================================
    const productGrid = document.getElementById('product-grid');

    function renderProducts() {
        if (!productGrid) return;
        productGrid.innerHTML = '';

        products.forEach(p => {
            const name = currentLang === 'es' ? p.name_es : (currentLang === 'zh' ? p.name_zh : p.name);
            const desc = currentLang === 'es' ? p.desc_es : (currentLang === 'zh' ? p.desc_zh : p.desc);
            const tag = currentLang === 'es' ? p.tag_es : (currentLang === 'zh' ? p.tag_zh : p.tag);
            const status = currentLang === 'es' ? p.status_es : (currentLang === 'zh' ? p.status_zh : p.status);
            const origin = currentLang === 'es' ? p.origin_es : (currentLang === 'zh' ? p.origin_zh : p.origin);
            const addText = translations[currentLang].btn_add_to_cart;

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrap">
                    <img src="${p.image}" alt="${name}" class="product-img">
                    <span class="product-tag">${tag}</span>
                    <span class="product-status-badge"><i class="fa-solid fa-clock"></i> ${status}</span>
                </div>
                <div class="product-info">
                    <span class="product-origin"><i class="fa-solid fa-location-dot"></i> ${origin}</span>
                    <h3 class="product-name">${name}</h3>
                    <p class="product-desc">${desc}</p>
                    <div class="product-footer" style="justify-content: flex-end;">
                        <button class="add-cart-btn" data-id="${p.id}" style="width: 100%; justify-content: center;">
                            <i class="fa-solid fa-envelope"></i> ${addText}
                        </button>
                    </div>
                </div>
            `;

            // Click card to open detail modal
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.add-cart-btn')) {
                    openProductModal(p);
                }
            });

            // Join waitlist button scrolls to contact form
            card.querySelector('.add-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                scrollToWaitlist();
            });

            productGrid.appendChild(card);
        });
    }

    function scrollToWaitlist() {
        if (typeof Tally !== 'undefined') {
            Tally.openPopup('lbPeGN', {
                layout: 'modal',
                width: 500,
                hideTitle: true,
                overlay: true
            });
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // ==========================================
    // 5. HONEY PAIRING ENGINE
    // ==========================================
    const foodBtns = document.querySelectorAll('.food-btn');
    const pairingResultBox = document.getElementById('pairing-result-box');

    function renderPairing(foodKey) {
        if (!pairingResultBox) return;
        const pairing = pairingsData[foodKey];
        if (!pairing) return;

        const matchedProduct = products.find(p => p.id === pairing.productId);
        const text = currentLang === 'es' ? pairing.text_es : pairing.text_en;
        const addText = translations[currentLang].btn_add_to_cart;

        pairingResultBox.innerHTML = `
            <div class="pairing-match-details">
                <p>${text}</p>
            </div>
            <div class="pairing-action">
                <button class="btn btn-primary add-cart-btn" data-id="${matchedProduct.id}">
                    <i class="fa-solid fa-envelope"></i> ${addText}
                </button>
            </div>
        `;

        pairingResultBox.querySelector('.add-cart-btn').addEventListener('click', () => {
            scrollToWaitlist();
        });
    }

    foodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            foodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPairing(btn.dataset.food);
        });
    });

    // ==========================================
    // 6. CART DRAWER & CHECKOUT
    // ==========================================
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartBadgeCount = document.getElementById('cart-badge-count');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalAmount = document.getElementById('cart-subtotal-amount');
    const cartFreeShippingBar = document.getElementById('cart-free-shipping-bar');
    const checkoutBtn = document.getElementById('checkout-btn');

    function toggleCart(open) {
        if (open) {
            cartDrawer.classList.add('active');
            cartDrawerOverlay.classList.add('active');
        } else {
            cartDrawer.classList.remove('active');
            cartDrawerOverlay.classList.remove('active');
        }
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCart(true));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
    if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', () => toggleCart(false));

    function addToCart(productId) {
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: productId, qty: 1 });
        }
        saveCart();
        renderCart();
        toggleCart(true);
    }

    function updateQty(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.id !== productId);
            }
        }
        saveCart();
        renderCart();
    }

    function saveCart() {
        localStorage.setItem('holahoney_cart', JSON.stringify(cart));
    }

    function renderCart() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';

        let totalItems = 0;
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="text-center" style="color:var(--text-muted); padding:30px 0;">${currentLang === 'es' ? 'Tu carrito está vacío' : 'Your cart is empty'}</p>`;
        } else {
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return;

                totalItems += item.qty;
                const itemTotal = product.price * item.qty;
                subtotal += itemTotal;

                const name = currentLang === 'es' ? product.name_es : product.name;

                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <img src="${product.image}" alt="${name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${name}</h4>
                        <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                        <div class="cart-qty-controls">
                            <button class="qty-btn minus-btn" data-id="${product.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn plus-btn" data-id="${product.id}">+</button>
                        </div>
                    </div>
                `;

                cartItemEl.querySelector('.minus-btn').addEventListener('click', () => updateQty(product.id, -1));
                cartItemEl.querySelector('.plus-btn').addEventListener('click', () => updateQty(product.id, 1));

                cartItemsContainer.appendChild(cartItemEl);
            });
        }

        if (cartBadgeCount) cartBadgeCount.textContent = totalItems;
        if (cartSubtotalAmount) cartSubtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

        // Shipping calculation ($45 threshold)
        if (cartFreeShippingBar) {
            if (subtotal >= 45 || subtotal === 0) {
                cartFreeShippingBar.textContent = translations[currentLang].free_shipping_unlocked;
            } else {
                const diff = (45 - subtotal).toFixed(2);
                cartFreeShippingBar.textContent = translations[currentLang].free_shipping_needed.replace('{amount}', `$${diff}`);
            }
        }
    }

    // Checkout Modal Simulation
    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const closeCheckoutModalBtn = document.getElementById('close-checkout-modal-btn');
    const finishOrderBtn = document.getElementById('finish-order-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            toggleCart(false);
            if (checkoutModalOverlay) checkoutModalOverlay.classList.add('active');
            cart = [];
            saveCart();
            renderCart();
        });
    }

    if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener('click', () => checkoutModalOverlay.classList.remove('active'));
    if (finishOrderBtn) finishOrderBtn.addEventListener('click', () => checkoutModalOverlay.classList.remove('active'));

    // ==========================================
    // 7. PRODUCT DETAIL MODAL
    // ==========================================
    const productModalOverlay = document.getElementById('product-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalContentGrid = document.getElementById('modal-content-grid');

    function openProductModal(p) {
        if (!productModalOverlay || !modalContentGrid) return;

        const name = currentLang === 'es' ? p.name_es : (currentLang === 'zh' ? p.name_zh : p.name);
        const desc = currentLang === 'es' ? p.desc_es : (currentLang === 'zh' ? p.desc_zh : p.desc);
        const origin = currentLang === 'es' ? p.origin_es : (currentLang === 'zh' ? p.origin_zh : p.origin);
        const addText = translations[currentLang].btn_add_to_cart;

        modalContentGrid.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:center;">
                <img src="${p.image}" alt="${name}" style="width:100%; border-radius:var(--radius-md); object-fit:cover;">
                <div>
                    <span style="font-size:0.8rem; font-weight:700; color:var(--forest-green); text-transform:uppercase;">${origin}</span>
                    <h2 style="font-family:var(--font-heading); font-size:1.8rem; margin:8px 0;">${name}</h2>
                    <p style="color:var(--text-muted); margin-bottom:24px;">${desc}</p>
                    <button class="btn btn-primary add-cart-btn-modal" style="width:100%;">
                        <i class="fa-solid fa-envelope"></i> ${addText}
                    </button>
                </div>
            </div>
        `;

        modalContentGrid.querySelector('.add-cart-btn-modal').addEventListener('click', () => {
            productModalOverlay.classList.remove('active');
            scrollToWaitlist();
        });

        productModalOverlay.classList.add('active');
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', () => productModalOverlay.classList.remove('active'));

    // ==========================================
    // 8. SEARCH OVERLAY
    // ==========================================
    const searchToggleBtn = document.getElementById('search-toggle-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchToggleBtn) searchToggleBtn.addEventListener('click', () => searchOverlay.classList.add('active'));
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', () => searchOverlay.classList.remove('active'));

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!searchResults) return;

            if (query === '') {
                searchResults.innerHTML = '';
                return;
            }

            const matches = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.desc.toLowerCase().includes(query) ||
                p.name_es.toLowerCase().includes(query) ||
                p.desc_es.toLowerCase().includes(query) ||
                (p.name_zh && p.name_zh.toLowerCase().includes(query)) ||
                (p.desc_zh && p.desc_zh.toLowerCase().includes(query))
            );

            if (matches.length === 0) {
                const noRes = currentLang === 'es' ? 'No se encontraron resultados' : (currentLang === 'zh' ? '未找到相关产品' : 'No products found');
                searchResults.innerHTML = `<p style="padding:20px; text-align:center; color:var(--text-muted);">${noRes}</p>`;
            } else {
                searchResults.innerHTML = matches.map(p => {
                    const title = currentLang === 'es' ? p.name_es : (currentLang === 'zh' ? p.name_zh : p.name);
                    return `
                    <div class="search-item" style="display:flex; align-items:center; gap:16px; padding:12px; border-bottom:1px solid var(--border-color); cursor:pointer;">
                        <img src="${p.image}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
                        <div>
                            <strong style="display:block;">${title}</strong>
                        </div>
                    </div>
                `;
                }).join('');

                searchResults.querySelectorAll('.search-item').forEach((item, index) => {
                    item.addEventListener('click', () => {
                        searchOverlay.classList.remove('active');
                        openProductModal(matches[index]);
                    });
                });
            }
        });
    }

    // ==========================================
    // 9. NEWSLETTER FORM
    // ==========================================
    const newsletterForm = document.getElementById('newsletter-form');
    const formFeedback = document.getElementById('form-feedback');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            const phoneInput = document.getElementById('newsletter-phone');
            if (emailInput && emailInput.value && phoneInput && phoneInput.value) {
                const msg = currentLang === 'es' 
                    ? '¡Gracias por unirte a la lista de espera de Hola Honey! Te avisaremos tan pronto como salga la cosecha.' 
                    : (currentLang === 'zh' 
                        ? '感谢您加入 Hola Honey 候补名单！蜂采蜂蜜一到，我们即刻通知您。' 
                        : 'Thank you for joining the Hola Honey Waitlist! We will notify you as soon as our harvest drops.');
                formFeedback.textContent = msg;
                emailInput.value = '';
                phoneInput.value = '';
            }
        });
    }

    // Mobile nav toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileBtn = document.getElementById('close-mobile-btn');

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', () => mobileNavOverlay.classList.add('active'));
    if (closeMobileBtn) closeMobileBtn.addEventListener('click', () => mobileNavOverlay.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => mobileNavOverlay.classList.remove('active'));
    });

    // Initialize App
    setLanguage(currentLang);
});
