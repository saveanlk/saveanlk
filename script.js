// --- PREMIUM CENTRALIZED GARMENT DATA ARCHIVE (30 BALANCED CONFIGURATIONS) ---
const PRODUCTS_DATA = [
    { id: 1, name: "Premium Structured Tee", category: "T-Shirts", price: 3400, oldPrice: 4200, rating: 5, popular: true, tag: "Luxury Essentials", desc: "A heavyweight classic cotton t-shirt with signature architectural seam work.", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", colors: ["Black", "White"], sizes: ["S", "M", "L", "XL"], date: 202601 },
    { id: 2, name: "Luxury Drop-Shoulder Boxy Tee", category: "Oversized T-Shirts", price: 4200, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Engineered with massive drop shoulders and ultra-heavy structural density fit.", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal", "Black"], sizes: ["M", "L", "XL"], date: 202602 },
    { id: 3, name: "Architectural Heavy Hoodie", category: "Hoodies", price: 7800, oldPrice: 9500, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Double-lined hood panel lacking raw external drawstrings for absolute sleek minimalism.", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80", colors: ["Black", "Gray"], sizes: ["S", "M", "L"], date: 202603 },
    { id: 4, name: "Minimal Oxford Button Down", category: "Shirts", price: 5400, rating: 4, popular: false, tag: "Minimalist", desc: "Crisp architectural tailored lines featuring hidden internal collar support elements.", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80", colors: ["White", "Black"], sizes: ["M", "L", "XL"], date: 202604 },
    { id: 5, name: "Raw Structural Selvedge Jeans", category: "Jeans", price: 9800, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Heavy rigid premium Japanese selvedge layout denim built to conform over years.", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["S", "M", "L"], date: 202605 },
    { id: 6, name: "Tailored Minimalist Shorts", category: "Shorts", price: 3800, rating: 4, popular: false, tag: "Minimalist", desc: "Premium tech-blend stretch yarn with concealed side zippers and internal mesh lining.", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal", "Gray"], sizes: ["S", "M", "L"], date: 202606 },
    { id: 7, name: "Biker Leather Asymmetric Jacket", category: "Jackets", price: 18500, oldPrice: 22000, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Full grain drum-dyed matte hide with brushed custom metallic hardware layout accents.", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L"], date: 202607 },
    { id: 8, name: "Signature Studio Matte Cap", category: "Accessories", price: 2900, rating: 4, popular: false, tag: "Luxury Essentials", desc: "Water-resistant matte structural construction featuring an adjustable hidden metallic buckle closure.", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80", colors: ["Black", "White"], sizes: ["S", "M"], date: 202608 },
    { id: 9, name: "Core Premium Vintage Tee", category: "T-Shirts", price: 3500, rating: 5, popular: true, tag: "Minimalist", desc: "Specially enzyme-washed high weight organic cotton mimicking decade-old premium layout weaves.", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal"], sizes: ["S", "M", "L", "XL"], date: 202609 },
    { id: 10, name: "Heavy Knit Oversized Sweatshirt", category: "Oversized T-Shirts", price: 6800, rating: 5, popular: false, tag: "Luxury Essentials", desc: "Thick horizontal loopback construction providing a dense structured aesthetic layout silhouette.", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", colors: ["White", "Gray"], sizes: ["M", "L"], date: 202610 },
    { id: 11, name: "Technical Hooded Windbreaker", category: "Jackets", price: 11200, rating: 4, popular: true, tag: "Premium Streetwear", desc: "Seam-sealed matte triple layer tech fabric offering absolute monsoon wind resistance specifications.", img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L", "XL"], date: 202611 },
    { id: 12, name: "Premium Utility Cargo Shorts", category: "Shorts", price: 4600, rating: 4, popular: false, tag: "Premium Streetwear", desc: "Geometric hidden expandable side storage configurations tailored perfectly flat against panels.", img: "https://images.unsplash.com/photo-1565041712172-67592be9718f?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal", "Black"], sizes: ["S", "M", "L"], date: 202612 },
    { id: 13, name: "Linen Relaxed Resort Shirt", category: "Shirts", price: 5800, oldPrice: 6900, rating: 5, popular: true, tag: "Minimalist", desc: "Ultra-breathable flax weave profile featuring an elegant continuous Cuban flat collar layout frame.", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80", colors: ["White"], sizes: ["S", "M", "L"], date: 202613 },
    { id: 14, name: "Distressed Street Black Denim", category: "Jeans", price: 8900, rating: 5, popular: false, tag: "Premium Streetwear", desc: "Artisanal hand-frayed knee distress patterns built into rich indigo structural warp layouts.", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L", "XL"], date: 202614 },
    { id: 15, name: "Premium Matte Leather Belt", category: "Accessories", price: 4500, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Seamless laser edge cut structural leather with a monolithic brushed black alloy pin buckle.", img: "https://images.unsplash.com/photo-1624222247344-550fb8ecf782?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L"], date: 202615 },
    { id: 16, name: "Studio Luxury Mock Neck", category: "T-Shirts", price: 3900, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Elevated high-rise neckband mapping architectural styling parameters flawlessly under custom layers.", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80", colors: ["Black", "White"], sizes: ["S", "M", "L"], date: 202616 },
    { id: 17, name: "Boxed Minimalist Zip Hoodie", category: "Hoodies", price: 8200, rating: 4, popular: false, tag: "Minimalist", desc: "Dual way YKK structural matte zipper mechanisms anchored onto dynamic extra heavy loopback profile.", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal", "Black"], sizes: ["M", "L", "XL"], date: 202617 },
    { id: 18, name: "Classic Tailored Denim Jacket", category: "Jackets", price: 12500, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Symmetrical chest pocket configurations rendered clean without visible cross panel orange contrasting thread stitch lines.", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["S", "M", "L"], date: 202618 },
    { id: 19, name: "Acid Wash Street Tee", category: "Oversized T-Shirts", price: 4600, oldPrice: 5500, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Individually texturized structural gray marbling treatments executing distinct custom retro modern grunge variations.", img: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=600&q=80", colors: ["Gray"], sizes: ["M", "L", "XL"], date: 202619 },
    { id: 20, name: "Premium French Terry Shorts", category: "Shorts", price: 3900, rating: 4, popular: false, tag: "Luxury Essentials", desc: "Deep structured pocket wells engineered to avoid items slipping outwards when lounging seamlessly.", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80", colors: ["Black", "Gray"], sizes: ["S", "M", "L"], date: 202620 },
    { id: 21, name: "Studio Monolithic Chelsea Boots", category: "Accessories", price: 19500, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Italian calf suede uppers matched against heavy textured crepe custom shock absorbing vulcanized outsoles.", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L"], date: 202621 },
    { id: 22, name: "Minimalist Clean Chino Pants", category: "Jeans", price: 7400, rating: 4, popular: false, tag: "Minimalist", desc: "Streamlined silhouette sans tracking visible rear seam pocket flaps, establishing pristine formal clean lines.", img: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal", "Black"], sizes: ["S", "M", "L", "XL"], date: 202622 },
    { id: 23, name: "Oversized Heavyweight Plaid Shirt", category: "Shirts", price: 6200, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Thick structural flannel profile layered layouts displaying custom muted grayscale monochrome check designs.", img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=600&q=80", colors: ["Charcoal"], sizes: ["M", "L", "XL"], date: 202623 },
    { id: 24, name: "Premium Tailored Trench Coat", category: "Jackets", price: 16800, rating: 5, popular: false, tag: "Minimalist", desc: "Double breasted iconic structured drape panel adjustments deploying exceptional tailored weather resistant fabrics.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L"], date: 202624 },
    { id: 25, name: "Luxury Studio Lounge Pants", category: "Shorts", price: 5900, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Elongated internal custom dynamic waist cords balanced over drop crotch architectural panel tailoring.", img: "https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=600&q=80", colors: ["Black", "Gray"], sizes: ["S", "M", "L"], date: 202625 },
    { id: 26, name: "Premium Studio Knit Mercerized Tee", category: "T-Shirts", price: 4800, rating: 5, popular: false, tag: "Luxury Essentials", desc: "Mercerized process treatment lending high lustre structural gloss and total dynamic color fastness protection.", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80", colors: ["White"], sizes: ["S", "M", "L"], date: 202626 },
    { id: 27, name: "Heavy Fleece Street Trackpant", category: "Jeans", price: 7900, rating: 4, popular: true, tag: "Premium Streetwear", desc: "Elasticized gathered ankle cuffs featuring deep concealed side zip architectural dynamic configurations.", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80", colors: ["Black", "Charcoal"], sizes: ["M", "L", "XL"], date: 202627 },
    { id: 28, name: "Minimalist Matte Sunglasses", category: "Accessories", price: 6500, oldPrice: 8000, rating: 5, popular: true, tag: "Minimalist", desc: "Acetate structures packed with premium dark layout UV400 protective polarized light lenses.", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M"], date: 202628 },
    { id: 29, name: "Premium Cropped Bomber Jacket", category: "Jackets", price: 13800, rating: 5, popular: true, tag: "Premium Streetwear", desc: "Heavy sateen shell exterior loaded with utility sleeve compartments and clean zip tracks.", img: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80", colors: ["Black", "Charcoal"], sizes: ["S", "M", "L"], date: 202629 },
    { id: 30, name: "Luxury Heavy Boxed Logo Hoodie", category: "Hoodies", price: 8900, rating: 5, popular: true, tag: "Luxury Essentials", desc: "Subtle tone on tone deep embossed back panel branding, retaining optimal minimal aesthetics layout look.", img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=600&q=80", colors: ["Black"], sizes: ["M", "L", "XL"], date: 202630 }
];

// --- APP STATE MANAGEMENT INITIALIZATION ---
let cartState = JSON.parse(localStorage.getItem('savean_cart')) || [];
let wishlistState = JSON.parse(localStorage.getItem('savean_wishlist')) || [];
let currentFilters = { category: "all", price: 20000, size: "all", color: "all", brand: "all" };
let currentSort = "newest";
let activeUser = JSON.parse(localStorage.getItem('savean_user')) || null;
let activeHomeTab = "new";

// --- CORE SYSTEM SETUP & LIFECYCLE ROUTING ---
document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initHeroSlider();
    initCountdown();
    initNavigationRouting();
    initFilterSystemEvents();
    initSearchEngine();
    initFaqAccordion();
    renderAppDashboard();
    updateGlobalBadges();
    
    // Default Initial Multi-Grid Injections
    renderHomeViewProducts();
    executeShopEnginePipeline();
    renderGlobalRecommendations();
});

// --- LOADER ENGINE SYSTEM ---
function initLoader() {
    const loader = document.getElementById("loader");
    if(loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => loader.style.display = "none", 600);
            }, 800);
        });
        // Safety timeout protection
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 600);
        }, 3000);
    }
}

// --- NAVIGATION & STATE DRIVEN SINGLE PAGE ROUTER ---
function initNavigationRouting() {
    document.querySelectorAll("[data-page]").forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = trigger.getAttribute("data-page");
            navigateToPage(targetPage);
            
            // Auto close mobile panel drawer layout
            document.getElementById("navMenu").classList.remove("mobile-active");
        });
    });

    // Mobile Menu Toggling Setup
    document.getElementById("mobileMenuOpen").addEventListener("click", () => {
        document.getElementById("navMenu").classList.add("mobile-active");
    });
    document.getElementById("mobileMenuClose").addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("mobile-active");
    });

    // Back to top click architecture
    const btt = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 500) btt.classList.add("show-btn");
        else btt.classList.remove("show-btn");
    });
    btt.addEventListener("click", () => window.scrollTo({top: 0, behavior: 'smooth'}));
}

function navigateToPage(pageId) {
    // Route validation interception
    if(pageId === "login" && activeUser) pageId = "dashboard";
    if(pageId === "dashboard" && !activeUser) pageId = "login";

    document.querySelectorAll(".app-page").forEach(p => p.classList.remove("active-page"));
    
    const targetElement = document.getElementById(`page-${pageId}`);
    if(targetElement) {
        targetElement.classList.add("active-page");
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Contextual execution refreshes
    if(pageId === "cart") renderCartLayoutPage();
    if(pageId === "checkout") renderCheckoutLayoutPage();
    if(pageId === "wishlist") renderWishlistLayoutPage();
    if(pageId === "dashboard") renderAppDashboard();

    // Synchronization updates for active navbar state tags
    document.querySelectorAll(".nav-item").forEach(item => {
        if(item.getAttribute("data-page") === pageId) item.classList.add("active");
        else item.classList.remove("active");
    });
}

// --- PREMIUM CUSTOM TOAST NOTIFICATION ALERTS ---
function showPremiumNotification(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show-toast");
    setTimeout(() => {
        toast.classList.remove("show-toast");
    }, 3000);
}

// --- HERO SLIDER COMPONENT LOGIC ---
function initHeroSlider() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dot");
    let current = 0;
    if(!slides.length) return;

    function changeSlide(idx) {
        slides.forEach(s => s.classList.remove("active-slide"));
        dots.forEach(d => d.classList.remove("active-dot"));
        slides[idx].classList.add("active-slide");
        dots[idx].classList.add("active-dot");
        current = idx;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => changeSlide(index));
    });

    setInterval(() => {
        let next = (current + 1) % slides.length;
        changeSlide(next);
    }, 7000);
}

// --- SECURE PREMIUM COUNTDOWN SYSTEM TIMER ---
function initCountdown() {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Continuous 3 day ticking loop for premium pressure

    function tick() {
        let now = new Date().getTime();
        let diff = targetDate.getTime() - now;
        if(diff < 0) return;

        let d = Math.floor(diff / (1000 * 60 * 60 * 24));
        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(d).padStart(2, '0');
        document.getElementById("hours").textContent = String(h).padStart(2, '0');
        document.getElementById("minutes").textContent = String(m).padStart(2, '0');
        document.getElementById("seconds").textContent = String(s).padStart(2, '0');
    }
    setInterval(tick, 1000);
    tick();
}

// --- RENDER PIPELINE: PRODUCT CARDS BUILDER COMPONENT ---
function generateProductCardHtml(item) {
    const isWishlisted = wishlistState.some(w => w.id === item.id);
    const heartIconClass = isWishlisted ? "fas fa-heart" : "far fa-heart";
    const saleBadge = item.oldPrice ? `<span class="badge-sale">SALE</span>` : '';
    const renderingPriceBox = item.oldPrice ? 
        `<span class="old-price">Rs. ${item.oldPrice.toLocaleString()}</span>Rs. ${item.price.toLocaleString()}` : 
        `Rs. ${item.price.toLocaleString()}`;

    return `
        <div class="product-card" data-id="${item.id}">
            <div class="product-image-wrapper">
                ${saleBadge}
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="card-overlay-actions">
                    <button class="action-btn quick-view-trigger" title="Quick Premium View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn add-to-cart-direct" title="Add to Bag"><i class="fas fa-shopping-bag"></i></button>
                    <button class="action-btn toggle-wishlist-direct" title="Save to Wishlist"><i class="${heartIconClass}"></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-tag-line">${item.tag}</div>
                <h4 class="product-name-title">${item.name}</h4>
                <div class="rating-stars-container">
                    ${`<i class="fas fa-star"></i>`.repeat(item.rating)}
                </div>
                <div class="price-layout-box">${renderingPriceBox}</div>
            </div>
        </div>
    `;
}

// --- RENDER LOGIC BLOCK: HOME PAGE INJECTIONS ---
function renderHomeViewProducts() {
    // 1. Flash Sale Injection (First 4 items)
    const flashGrid = document.getElementById("flashSaleGrid");
    if(flashGrid) {
        flashGrid.innerHTML = PRODUCTS_DATA.slice(0, 4).map(item => {
            // Guarantee synthetic sale layouts on flash displays
            if(!item.oldPrice) { item.oldPrice = Math.round(item.price * 1.25); }
            return generateProductCardHtml(item);
        }).join('');
    }

    // 2. Tab Selection (New, Best, Trending Layout Arrays)
    const homeTabsGrid = document.getElementById("homeTabsGrid");
    if(homeTabsGrid) {
        updateHomeTabsDisplay();
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active-tab"));
                btn.classList.add("active-tab");
                activeHomeTab = btn.getAttribute("data-tab");
                updateHomeTabsDisplay();
            });
        });
    }
    attachGlobalCardActionInterceptors();
}

function updateHomeTabsDisplay() {
    const grid = document.getElementById("homeTabsGrid");
    if(!grid) return;
    let sliceItems = [];
    if(activeHomeTab === "new") sliceItems = PRODUCTS_DATA.slice(4, 12);
    else if(activeHomeTab === "best") sliceItems = PRODUCTS_DATA.filter(p => p.popular).slice(0, 8);
    else sliceItems = PRODUCTS_DATA.slice(12, 20);

    grid.innerHTML = sliceItems.map(item => generateProductCardHtml(item)).join('');
    attachGlobalCardActionInterceptors();
}

// --- RENDER PIPELINE ENGINE: SHOP DATA CATALOGUE WITH STREAM FILTERING ---
function initFilterSystemEvents() {
    // Interactive sidebar navigation click listeners
    document.querySelectorAll("#catFilterList li").forEach(li => {
        li.addEventListener("click", () => {
            document.querySelectorAll("#catFilterList li").forEach(l => l.classList.remove("active-filter"));
            li.classList.add("active-filter");
            currentFilters.category = li.getAttribute("data-val");
            executeShopEnginePipeline();
        });
    });

    // Dedicated Mega Menu and Navigation Redirect Filter Cross Interceptors
    document.body.addEventListener("click", (e) => {
        if(e.target.classList.contains("filter-cat-link")) {
            e.preventDefault();
            const chosenCat = e.target.getAttribute("data-cat");
            currentFilters.category = chosenCat;
            
            // Sync up native sidebar visual state flags
            document.querySelectorAll("#catFilterList li").forEach(l => {
                if(l.getAttribute("data-val") === chosenCat) l.classList.add("active-filter");
                else l.classList.remove("active-filter");
            });
            
            navigateToPage("shop");
            executeShopEnginePipeline();
        }
    });

    // Price Slider Controller Tracking
    const priceRange = document.getElementById("priceRange");
    const priceDisplay = document.getElementById("priceDisplay");
    if(priceRange) {
        priceRange.addEventListener("input", () => {
            priceDisplay.textContent = `Rs. ${parseInt(priceRange.value).toLocaleString()}`;
            currentFilters.price = parseInt(priceRange.value);
            executeShopEnginePipeline();
        });
    }

    // Size Box Multi Select Interceptor
    document.querySelectorAll("#sizeFilters .box-filter").forEach(box => {
        box.addEventListener("click", () => {
            if(box.classList.contains("active-box-filter")) {
                box.classList.remove("active-box-filter");
                currentFilters.size = "all";
            } else {
                document.querySelectorAll("#sizeFilters .box-filter").forEach(b => b.classList.remove("active-box-filter"));
                box.classList.add("active-box-filter");
                currentFilters.size = box.getAttribute("data-val");
            }
            executeShopEnginePipeline();
        });
    });

    // Color Box Selector Interceptor
    document.querySelectorAll("#colorFilters .box-filter").forEach(box => {
        box.addEventListener("click", () => {
            if(box.classList.contains("active-box-filter")) {
                box.classList.remove("active-box-filter");
                currentFilters.color = "all";
            } else {
                document.querySelectorAll("#colorFilters .box-filter").forEach(b => b.classList.remove("active-box-filter"));
                box.classList.add("active-box-filter");
                currentFilters.color = box.getAttribute("data-val");
            }
            executeShopEnginePipeline();
        });
    });

    // Brand Filtering Arrays
    document.querySelectorAll("#brandFilterList li").forEach(li => {
        li.addEventListener("click", () => {
            document.querySelectorAll("#brandFilterList li").forEach(l => l.classList.remove("active-filter"));
            li.classList.add("active-filter");
            currentFilters.brand = li.getAttribute("data-val");
            executeShopEnginePipeline();
        });
    });

    // Sorting System Dropdowns
    const sortSelect = document.getElementById("sortSelect");
    if(sortSelect) {
        sortSelect.addEventListener("change", () => {
            currentSort = sortSelect.value;
            executeShopEnginePipeline();
        });
    }

    // Absolute Filter Reset Control Switches
    const clearBtn = document.getElementById("clearFiltersBtn");
    if(clearBtn) {
        clearBtn.addEventListener("click", () => {
            currentFilters = { category: "all", price: 20000, size: "all", color: "all", brand: "all" };
            currentSort = "newest";
            
            // Revert DOM interface inputs entirely
            if(priceRange) priceRange.value = 20000;
            if(priceDisplay) priceDisplay.textContent = "Rs. 20,000";
            if(sortSelect) sortSelect.value = "newest";
            document.querySelectorAll(".box-filter").forEach(b => b.classList.remove("active-box-filter"));
            document.querySelectorAll(".filter-list li").forEach(l => {
                if(l.getAttribute("data-val") === "all") l.classList.add("active-filter");
                else l.classList.remove("active-filter");
            });

            executeShopEnginePipeline();
        });
    }
}

function executeShopEnginePipeline() {
    const shopGrid = document.getElementById("shopGrid");
    if(!shopGrid) return;

    // Filter Processing Pipeline
    let filtered = PRODUCTS_DATA.filter(item => {
        if(currentFilters.category !== "all" && item.category !== currentFilters.category) return false;
        if(item.price > currentFilters.price) return false;
        if(currentFilters.size !== "all" && !item.sizes.includes(currentFilters.size)) return false;
        if(currentFilters.color !== "all" && !item.colors.includes(currentFilters.color)) return false;
        if(currentFilters.brand !== "all" && item.tag !== currentFilters.brand) return false;
        return true;
    });

    // Sorting Engine Configurations
    if(currentSort === "price-low") filtered.sort((a,b) => a.price - b.price);
    else if(currentSort === "price-high") filtered.sort((a,b) => b.price - a.price);
    else if(currentSort === "popular") filtered.sort((a,b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    else filtered.sort((a,b) => b.date - a.date); // Standard configuration: sort by newest

    // Update Numerical Structural Labels
    document.getElementById("productCount").textContent = `Showing ${filtered.length} elegant items`;

    if(filtered.length === 0) {
        shopGrid.innerHTML = `<div class="w-100 text-center empty-state"><p>No items match your high-end filter metrics.</p></div>`;
    } else {
        shopGrid.innerHTML = filtered.map(item => generateProductCardHtml(item)).join('');
    }
    attachGlobalCardActionInterceptors();
}

// --- LIVE SEARCH CONFIGURATIONS & ALGORITHMS ---
function initSearchEngine() {
    const icon = document.getElementById("searchIcon");
    const drop = document.getElementById("searchDropdown");
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    icon.addEventListener("click", (e) => {
        e.stopPropagation();
        drop.style.display = drop.style.display === "block" ? "none" : "block";
        if(drop.style.display === "block") input.focus();
    });

    document.addEventListener("click", (e) => {
        if(!drop.contains(e.target) && e.target !== icon) drop.style.display = "none";
    });

    input.addEventListener("input", () => {
        const query = input.value.toLowerCase().trim();
        if(!query) { results.innerHTML = ""; return; }

        const matched = PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        
        if(!matched.length) {
            results.innerHTML = `<div class="p-10 text-muted">No premium items matched.</div>`;
        } else {
            results.innerHTML = matched.slice(0, 5).map(item => `
                <div class="search-item-row" data-id="${item.id}">
                    <img src="${item.img}" alt="">
                    <div class="search-item-info">
                        <h5>${item.name}</h5>
                        <span>Rs. ${item.price.toLocaleString()}</span>
                    </div>
                </div>
            `).join('');

            // Click interceptor mapping onto matched search items
            results.querySelectorAll(".search-item-row").forEach(row => {
                row.addEventListener("click", () => {
                    const id = parseInt(row.getAttribute("data-id"));
                    drop.style.display = "none";
                    input.value = "";
                    results.innerHTML = "";
                    renderProductDetailsPage(id);
                });
            });
        }
    });
}

// --- GLOBAL CARD BUTTON CLICKS INTERCEPTOR DELEGATION ---
function attachGlobalCardActionInterceptors() {
    document.querySelectorAll(".product-card").forEach(card => {
        const productId = parseInt(card.getAttribute("data-id"));
        const targetItem = PRODUCTS_DATA.find(p => p.id === productId);

        // Core Image Clicking Routes to Details Display Section
        const imgBlock = card.querySelector(".product-image-wrapper img");
        if(imgBlock && !imgBlock.dataset.listening) {
            imgBlock.dataset.listening = true;
            imgBlock.addEventListener("click", () => renderProductDetailsPage(productId));
            imgBlock.style.cursor = "pointer";
        }

        // Overlay Interactive Button Actions Mapping
        const qv = card.querySelector(".quick-view-trigger");
        if(qv && !qv.dataset.listening) {
            qv.dataset.listening = true;
            qv.addEventListener("click", (e) => { e.stopPropagation(); openQuickViewModal(targetItem); });
        }

        const atc = card.querySelector(".add-to-cart-direct");
        if(atc && !atc.dataset.listening) {
            atc.dataset.listening = true;
            atc.addEventListener("click", (e) => { 
                e.stopPropagation(); 
                executeAddtoBagOperation(targetItem, targetItem.sizes[0], targetItem.colors[0], 1); 
            });
        }

        const tw = card.querySelector(".toggle-wishlist-direct");
        if(tw && !tw.dataset.listening) {
            tw.dataset.listening = true;
            tw.addEventListener("click", (e) => { 
                e.stopPropagation(); 
                executeToggleWishlistOperation(targetItem);
                const icon = tw.querySelector("i");
                if(wishlistState.some(w => w.id === targetItem.id)) {
                    icon.className = "fas fa-heart";
                } else {
                    icon.className = "far fa-heart";
                }
            });
        }
    });
}

// --- MODAL ENGINE SUB-SYSTEM: QUICK VIEW SPECIFICATIONS ---
function openQuickViewModal(item) {
    const modal = document.getElementById("quickViewModal");
    const body = document.getElementById("quickViewBody");
    if(!modal || !body) return;

    body.innerHTML = `
        <div class="detail-grid">
            <div class="main-image-viewport">
                <img src="${item.img}" alt="">
            </div>
            <div class="detail-info-panel">
                <span class="detail-category">${item.category}</span>
                <h1>${item.name}</h1>
                <div class="rating-stars-container">${`<i class="fas fa-star"></i>`.repeat(item.rating)}</div>
                <div class="detail-price">Rs. ${item.price.toLocaleString()}</div>
                <p class="detail-desc">${item.desc}</p>
                
                <div class="selector-block">
                    <h5>SELECT SIZE</h5>
                    <div class="filter-flex" id="qvSizes">
                        ${item.sizes.map((s,i) => `<span class="box-filter ${i===0?'active-box-filter':''}" data-val="${s}">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="selector-block">
                    <h5>SELECT COLOR</h5>
                    <div class="filter-flex" id="qvColors">
                        ${item.colors.map((c,i) => `<span class="box-filter ${i===0?'active-box-filter':''}" data-val="${c}">${c}</span>`).join('')}
                    </div>
                </div>

                <div class="detail-actions-row">
                    <button class="btn btn-primary" id="qvAddToCartBtn">ADD TO BAG</button>
                </div>
            </div>
        </div>
    `;

    // Internal modal selection events handling
    const sizeBoxes = body.querySelectorAll("#qvSizes .box-filter");
    sizeBoxes.forEach(b => b.addEventListener("click", () => {
        sizeBoxes.forEach(x => x.classList.remove("active-box-filter"));
        b.classList.add("active-box-filter");
    }));

    const colorBoxes = body.querySelectorAll("#qvColors .box-filter");
    colorBoxes.forEach(b => b.addEventListener("click", () => {
        colorBoxes.forEach(x => x.classList.remove("active-box-filter"));
        b.classList.add("active-box-filter");
    }));

    body.querySelector("#qvAddToCartBtn").addEventListener("click", () => {
        const chosenSize = body.querySelector("#qvSizes .active-box-filter").getAttribute("data-val");
        const chosenColor = body.querySelector("#qvColors .active-box-filter").getAttribute("data-val");
        executeAddtoBagOperation(item, chosenSize, chosenColor, 1);
        modal.style.display = "none";
    });

    modal.style.display = "flex";

    // Setup closure triggers
    document.getElementById("closeQuickView").onclick = () => modal.style.display = "none";
    modal.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };
}

// --- RENDER PRODUCTION PIPELINE: DEDICATED EXTENDED PRODUCT DETAILS PAGE ---
function renderProductDetailsPage(productId) {
    navigateToPage("product-details");
    const container = document.getElementById("detailsContainer");
    if(!container) return;

    const item = PRODUCTS_DATA.find(p => p.id === productId);
    if(!item) { container.innerHTML = "<p>Product not located.</p>"; return; }

    // Generate duplicate pseudo placeholder URLs for premium multiple images loop gallery setup
    const imageGalleryArray = [
        item.img,
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
    ];

    container.innerHTML = `
        <div class="detail-grid">
            <div class="detail-gallery-container">
                <div class="gallery-thumbnails">
                    ${imageGalleryArray.map((imgUrl, idx) => `
                        <img src="${imgUrl}" class="thumb-img ${idx===0?'active-thumb':''}" data-index="${idx}" alt="">
                    `).join('')}
                </div>
                <div class="main-image-viewport" id="lensViewport">
                    <img src="${item.img}" id="mainDetailImg" alt="">
                </div>
            </div>
            <div class="detail-info-panel">
                <span class="detail-category">${item.category} &mdash; ${item.tag}</span>
                <h1>${item.name}</h1>
                <div class="rating-stars-container">
                    ${`<i class="fas fa-star"></i>`.repeat(item.rating)}
                    <span class="size-guide-trigger" id="triggerSizeGuide">VIEW SIZE GUIDE</span>
                </div>
                <div class="detail-price">Rs. ${item.price.toLocaleString()}</div>
                <p class="detail-desc">${item.desc} This garment is tailored meticulously using dense architectural spacing methodologies, providing unmatched modern structure profiles.</p>
                
                <div class="selector-block">
                    <h5>CHOOSE STRUCTURAL SIZE</h5>
                    <div class="filter-flex" id="detailSizes">
                        ${item.sizes.map((s,i) => `<span class="box-filter ${i===0?'active-box-filter':''}" data-val="${s}">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="selector-block">
                    <h5>CHOOSE TONAL COLOR</h5>
                    <div class="filter-flex" id="detailColors">
                        ${item.colors.map((c,i) => `<span class="box-filter ${i===0?'active-box-filter':''}" data-val="${c}">${c}</span>`).join('')}
                    </div>
                </div>

                <div class="selector-block">
                    <h5>QUANTITY</h5>
                    <div class="quantity-control-box">
                        <button id="decQty">-</button>
                        <span id="qtyVal">1</span>
                        <button id="incQty">+</button>
                    </div>
                </div>

                <div class="detail-actions-row">
                    <button class="btn btn-primary" id="detailAddToCartBtn" style="flex-grow: 1;">ADD TO BAG</button>
                    <button class="btn btn-secondary" id="detailWishlistBtn"><i class="far fa-heart"></i></button>
                </div>

                <hr class="premium-hr m-top-40">
                
                <div class="selector-block">
                    <h5>CLIENT REVIEWS (${item.rating + 12} VERIFIED)</h5>
                    <div class="m-top-20" style="display:flex; flex-direction:column; gap:15px;">
                        <div style="background:var(--dark-gray); padding:15px; border:1px solid var(--charcoal);">
                            <div class="rating-stars-container"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p style="font-size:0.8rem; font-style:italic;">"Incredible structure layout. The fabric weight meets ultra-high luxury metrics easily."</p>
                            <span style="font-size:0.7rem; color:#666;">- Verified Client Architecture Drop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // GALLERY SELECTION EVENTS IMPLEMENTATION
    const thumbs = container.querySelectorAll(".thumb-img");
    const mainImg = container.getElementById("mainDetailImg");
    thumbs.forEach(t => t.addEventListener("click", () => {
        thumbs.forEach(x => x.classList.remove("active-thumb"));
        t.classList.add("active-thumb");
        mainImg.src = imageGalleryArray[parseInt(t.getAttribute("data-index"))];
    }));

    // PREMIUM LEVEL HOVER ZOOM INTENSITY TRACKING LENS
    const viewport = container.getElementById("lensViewport");
    viewport.addEventListener("mousemove", (e) => {
        const rect = viewport.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
        mainImg.style.transform = "scale(1.8)";
    });
    viewport.addEventListener("mouseleave", () => {
        mainImg.style.transform = "scale(1)";
        mainImg.style.transformOrigin = "center center";
    });

    // QUANTITY ADJUSTMENTS LOGIC SWITCHES
    let qty = 1;
    const qtyVal = container.getElementById("qtyVal");
    container.getElementById("incQty").onclick = () => { qty++; qtyVal.textContent = qty; };
    container.getElementById("decQty").onclick = () => { if(qty > 1) { qty--; qtyVal.textContent = qty; } };

    // METRIC INTERACTIVE TOGGLES SELECTION SETUP
    const sizeBoxes = container.querySelectorAll("#detailSizes .box-filter");
    sizeBoxes.forEach(b => b.addEventListener("click", () => {
        sizeBoxes.forEach(x => x.classList.remove("active-box-filter"));
        b.classList.add("active-box-filter");
    }));

    const colorBoxes = container.querySelectorAll("#detailColors .box-filter");
    colorBoxes.forEach(b => b.addEventListener("click", () => {
        colorBoxes.forEach(x => x.classList.remove("active-box-filter"));
        b.classList.add("active-box-filter");
    }));

    // INTERFACE MODAL DIALOG SIZE GUIDE POPUPS TRIGGER
    const sgModal = document.getElementById("sizeGuideModal");
    container.getElementById("triggerSizeGuide").onclick = () => sgModal.style.display = "flex";
    document.getElementById("closeSizeGuide").onclick = () => sgModal.style.display = "none";
    sgModal.onclick = (e) => { if(e.target === sgModal) sgModal.style.display = "none"; };

    // CART SUBMISSION ARCHITECTURE
    container.getElementById("detailAddToCartBtn").onclick = () => {
        const size = container.querySelector("#detailSizes .active-box-filter").getAttribute("data-val");
        const color = container.querySelector("#detailColors .active-box-filter").getAttribute("data-val");
        executeAddtoBagOperation(item, size, color, qty);
    };

    // WISHLIST INLINE ACTION HANDLER
    const wishBtn = container.getElementById("detailWishlistBtn");
    wishBtn.onclick = () => {
        executeToggleWishlistOperation(item);
        wishBtn.querySelector("i").className = wishlistState.some(w => w.id === item.id) ? "fas fa-heart" : "far fa-heart";
    };
    if(wishlistState.some(w => w.id === item.id)) wishBtn.querySelector("i").className = "fas fa-heart";
}

// --- COMMERCE TRANSACTION LOGIC: CART CORE OPERATIONS ---
function executeAddtoBagOperation(item, size, color, qty) {
    const existingIndex = cartState.findIndex(c => c.id === item.id && c.size === size && c.color === color);
    if(existingIndex > -1) {
        cartState[existingIndex].qty += qty;
    } else {
        cartState.push({ id: item.id, name: item.name, price: item.price, img: item.img, category: item.category, size, color, qty });
    }
    syncCartLocalStorage();
    showPremiumNotification(`${qty} x ${item.name} (${size}) attached to shopping bag.`);
}

function executeRemoveFromCart(idx) {
    cartState.splice(idx, 1);
    syncCartLocalStorage();
    renderCartLayoutPage();
}

function updateCartQuantityField(idx, value) {
    if(value < 1) return;
    cartState[idx].qty = value;
    syncCartLocalStorage();
    renderCartLayoutPage();
}

function syncCartLocalStorage() {
    localStorage.setItem('savean_cart', JSON.stringify(cartState));
    updateGlobalBadges();
}

function updateGlobalBadges() {
    const cartCount = cartState.reduce((acc, curr) => acc + curr.qty, 0);
    document.getElementById("cartBadge").textContent = cartCount;
    document.getElementById("wishlistBadge").textContent = wishlistState.length;
}

// --- RENDER PRODUCTION PIPELINE: CART PAGE LAYOUTS GENERATOR ---
function renderCartLayoutPage() {
    const wrapper = document.getElementById("cartLayoutWrapper");
    const emptyState = document.getElementById("cartEmptyState");
    const container = document.getElementById("cartItemsContainer");
    if(!wrapper || !emptyState || !container) return;

    if(!cartState.length) {
        wrapper.classList.add("hidden");
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
        wrapper.classList.remove("hidden");

        container.innerHTML = cartState.map((item, index) => `
            <div class="cart-item-card">
                <img src="${item.img}" alt="">
                <div class="cart-item-details">
                    <span class="text-muted" style="font-size:0.7rem;">${item.category}</span>
                    <h4>${item.name}</h4>
                    <p>Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></p>
                    <div class="quantity-control-box m-top-20">
                        <button class="cart-qty-dec" data-index="${index}">-</button>
                        <span>${item.qty}</span>
                        <button class="cart-qty-inc" data-index="${index}">+</button>
                    </div>
                </div>
                <div style="text-align: right; display:flex; flex-direction:column; justify-content:space-between; height:100px;">
                    <i class="fas fa-trash-alt remove-cart-item" data-index="${index}"></i>
                    <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
                </div>
            </div>
        `).join('');

        // Attach interactive operations loops onto specific DOM entries
        container.querySelectorAll(".remove-cart-item").forEach(btn => btn.onclick = () => executeRemoveFromCart(parseInt(btn.getAttribute("data-index"))));
        container.querySelectorAll(".cart-qty-inc").forEach(btn => btn.onclick = () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            updateCartQuantityField(idx, cartState[idx].qty + 1);
        });
        container.querySelectorAll(".cart-qty-dec").forEach(btn => btn.onclick = () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            updateCartQuantityField(idx, cartState[idx].qty - 1);
        });

        // Compute Subtotal Financial Parameters
        const subtotal = cartState.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
        const total = subtotal + 450; // Dynamic fixed localized shipping setup cost
        document.getElementById("summarySubtotal").textContent = `Rs. ${subtotal.toLocaleString()}.00`;
        document.getElementById("summaryTotal").textContent = `Rs. ${total.toLocaleString()}.00`;
    }
}

// --- COMMERCE SECURE CHECKOUT PAGE CONTROL REVIEWS ---
function renderCheckoutLayoutPage() {
    const listBlock = document.getElementById("checkoutItemsList");
    if(!listBlock) return;

    listBlock.innerHTML = cartState.map(item => `
        <div class="checkout-item-summary-row">
            <span>${item.name} (x${item.qty}) <small style="color:#666;">${item.size}</small></span>
            <strong>Rs. ${(item.price * item.qty).toLocaleString()}</strong>
        </div>
    `).join('');

    const subtotal = cartState.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const total = subtotal + 450;
    document.getElementById("checkoutSubtotal").textContent = `Rs. ${subtotal.toLocaleString()}.00`;
    document.getElementById("checkoutTotal").textContent = `Rs. ${total.toLocaleString()}.00`;

    // Form confirmation processing hooks
    const btn = document.getElementById("placeOrderBtn");
    btn.onclick = () => {
        const form = document.getElementById("checkoutForm");
        if(form.checkValidity()) {
            // Process structured order configuration push into client memory history tracking logs
            if(activeUser) {
                let userOrders = JSON.parse(localStorage.getItem(`orders_${activeUser.email}`)) || [];
                userOrders.push({
                    id: Math.floor(Math.random() * 900000) + 100000,
                    date: new Date().toLocaleDateString(),
                    items: cartState.map(c => `${c.name} (${c.size})`),
                    total: total
                });
                localStorage.setItem(`orders_${activeUser.email}`, JSON.stringify(userOrders));
            }
            
            // Clean active basket variables arrays completely
            cartState = [];
            syncCartLocalStorage();
            showPremiumNotification("Order placed successfully. Thank you for choosing SAVEAN.");
            navigateToPage("home");
        } else {
            showPremiumNotification("Please complete all mandatory premium shipping data fields.");
        }
    };
}

// --- COMMERCE TRANSACTION LOGIC: WISHLIST ARCHIVE ---
function executeToggleWishlistOperation(item) {
    const idx = wishlistState.findIndex(w => w.id === item.id);
    if(idx > -1) {
        wishlistState.splice(idx, 1);
        showPremiumNotification(`${item.name} removed from wishlist storage.`);
    } else {
        wishlistState.push({ id: item.id, name: item.name, price: item.price, img: item.img, tag: item.tag, rating: item.rating });
        showPremiumNotification(`${item.name} archived in client wishlist profiles.`);
    }
    localStorage.setItem('savean_wishlist', JSON.stringify(wishlistState));
    updateGlobalBadges();
}

function renderWishlistLayoutPage() {
    const grid = document.getElementById("wishlistGrid");
    const emptyState = document.getElementById("wishlistEmptyState");
    if(!grid || !emptyState) return;

    if(!wishlistState.length) {
        grid.innerHTML = "";
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
        grid.innerHTML = wishlistState.map(item => generateProductCardHtml(item)).join('');
        attachGlobalCardActionInterceptors();
    }
}

// --- PROFILE MANIPULATIONS: USER IDENTITY AUTH CONTEXT SYSTEMS ---
document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelectorAll("input")[0].value;
    activeUser = { name: "Premium Client Member", email: email };
    localStorage.setItem('savean_user', JSON.stringify(activeUser));
    showPremiumNotification("Authentication accepted. Welcome to SAVEAN Studio portal.");
    navigateToPage("dashboard");
};

document.getElementById("registerForm").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelectorAll("input")[0].value;
    const email = e.target.querySelectorAll("input")[1].value;
    activeUser = { name: name, email: email };
    localStorage.setItem('savean_user', JSON.stringify(activeUser));
    showPremiumNotification("Registration finalized successfully.");
    navigateToPage("dashboard");
};

document.getElementById("forgotForm").onsubmit = (e) => {
    e.preventDefault();
    showPremiumNotification("An authorization key link has been dispatched to your verified destination box.");
    navigateToPage("login");
};

function renderAppDashboard() {
    if(!activeUser) return;
    const userTitle = document.getElementById("dashUserTitle");
    if(userTitle) userTitle.textContent = activeUser.name;

    // Handle dashboard nested menu switches tabs layout
    const tabs = document.querySelectorAll(".dash-tabs li[data-dash]");
    tabs.forEach(t => t.onclick = () => {
        tabs.forEach(x => x.classList.remove("active-dash-tab"));
        t.classList.add("active-dash-tab");
        const panelId = t.getAttribute("data-dash");
        document.querySelectorAll(".dash-panel").forEach(p => p.classList.remove("active-dash-panel"));
        document.getElementById(`dash-${panelId}`).classList.add("active-dash-panel");
    });

    // Injected Client Secure Orders History Database Compilation loops
    const ordersContainer = document.getElementById("dashOrdersContainer");
    if(ordersContainer) {
        let history = JSON.parse(localStorage.getItem(`orders_${activeUser.email}`)) || [];
        if(!history.length) {
            ordersContainer.innerHTML = `<p class="text-muted">No premium architectural purchases logged in this configuration cycle.</p>`;
        } else {
            ordersContainer.innerHTML = history.map(o => `
                <div style="background:var(--black); border:1px solid var(--charcoal); padding:20px; margin-bottom:15px; display:flex; justify-content:between; align-items:center; flex-wrap:wrap; gap:15px;">
                    <div>
                        <span style="font-size:0.7rem; color:#888;">ORDER ID: #${o.id}</span>
                        <h4 style="font-size:0.85rem; text-transform:uppercase; margin-top:5px;">${o.items.join(', ')}</h4>
                        <span style="font-size:0.75rem; color:#666;">Cleared Delivery on: ${o.date}</span>
                    </div>
                    <div style="margin-left:auto; font-weight:bold; font-size:0.95rem;">Rs. ${o.total.toLocaleString()}.00</div>
                </div>
            `).join('');
        }
    }

    // Handle structural layout logouts
    document.getElementById("logoutBtn").onclick = () => {
        activeUser = null;
        localStorage.removeItem('savean_user');
        showPremiumNotification("Session terminated safely.");
        navigateToPage("home");
    };
}

// --- RENDER RECOMMENDATIONS: ALGORITHMIC DISPLAY GENERATORS ---
function renderGlobalRecommendations() {
    const recGrid = document.getElementById("recommendationsGrid");
    if(!recGrid) return;
    // Inject a curated sample distribution from core data
    recGrid.innerHTML = PRODUCTS_DATA.slice(22, 26).map(item => generateProductCardHtml(item)).join('');
    attachGlobalCardActionInterceptors();
}

// --- INTERACTIVE FAQS SYSTEM: ACCORDIONS COMPONENT TOGGLES ---
function initFaqAccordion() {
    document.querySelectorAll(".faq-question").forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            item.classList.toggle("active-faq");
        });
    });
}

// --- GENERIC MARKETING NEWSLETTER DISPATCH ENGINE ---
document.getElementById("newsletterForm").onsubmit = (e) => {
    e.preventDefault();
    showPremiumNotification("Subscription confirmed. Welcome to early access privileges.");
    e.target.reset();
};
