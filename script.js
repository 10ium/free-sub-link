// script.js
// توجه: این فایل به عنوان یک ماژول بارگذاری می‌شود (type="module" در index.html)
import { suggestedClients, osIcons, coreIcons } from './clients.js'; // وارد کردن داده‌های کلاینت‌ها و آیکون‌ها
import { dayBackgrounds, nightBackgrounds } from './backgrounds.js'; // وارد کردن لینک‌های پس‌زمینه

document.addEventListener('DOMContentLoaded', function() {
    // گرفتن ارجاع به عناصر DOM
    const categorySelect = document.getElementById('category-select');
    const itemsContainer = document.getElementById('items-container');
    const linkDisplay = document.getElementById('link-display');
    const selectedLink = document.getElementById('selected-link');
    const copyBtn = document.getElementById('copy-btn');
    const notification = document.getElementById('copy-notification');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollBottomBtn = document.getElementById('scroll-bottom');
    const rowCountSelect = document.getElementById('row-count');
    const clientsContainer = document.getElementById('clients-container');
    const coreFilterSelect = document.getElementById('core-filter');
    const osFilterSelect = document.getElementById('os-filter');
    const convertersContainer = document.getElementById('converters-container');
    const toolsContainer = document.getElementById('tools-container');
    const promptsContainer = document.getElementById('prompts-container');
    const workersContainer = document.getElementById('workers-container');
    const otherPeopleToolsContainer = document.getElementById('other-people-tools-container');

    // نگاشت نام کشورها به کدهای دو حرفی ISO برای دریافت پرچم
    const countryFlagMap = {
        "آلبانی": "al", "آرژانتین": "ar", "ارمنستان": "am", "استرالیا": "au", "اتریش": "at",
        "بحرین": "bh", "بلاروس": "by", "بلژیک": "be", "بولیوی": "bo", "برزیل": "br",
        "بلغارستان": "bg", "کانادا": "ca", "چین": "cn", "کلمبیا": "co", "کرواسی": "hr",
        "قبرس": "cy", "چک": "cz", "دانمارک": "dk", "اکوادور": "ec",
        "استونی": "ee", "فنلاند": "fi", "فرانسه": "fr", "آلمان": "de", "جبل‌الطارق": "gi",
        "یونان": "gr", "گواتمالا": "gt",
        "هنگ کنگ": "hk", "مجارستان": "hu", "ایسلند": "is", "هند": "in",
        "اندونزی": "id", "ایران": "ir", "عراق": "iq", "ایرلند": "ie",
        "اسرائیل": "il", "ایتالیا": "it", "ژاپن": "jp", "اردن": "jo", "قزاقستان": "kz",
        "کره جنوبی": "kr", "لتونی": "lv", "لیتوانی": "lt", "لوکزامبورگ": "lu", "مالزی": "my",
        "مالت": "mt", "مکزیک": "mx", "مولداوی": "md", "هلند": "nl", "نیوزیلند": "nz",
        "مقدونیه شمالی": "mk", "نروژ": "no", "نامشخص": "un",
        "عمان": "om", "پاکستان": "pk", "پاراگوئه": "py", "پرو": "pe", "فیلیپین": "ph",
        "لهستان": "pl", "پرتغال": "pt", "پورتوریکو": "pr", "رومانی": "ro", "روسیه": "ru",
        "صربستان": "rs", "سیشل": "sc", "سنگاپور": "sg", "اسلواکی": "sk", "اسلوونی": "si",
        "آفریقای جنوبی": "za", "اسپانیا": "es", "سوئد": "se", "سوئیس": "ch", "تایوان": "tw",
        "تایلند": "th", "ترکیه": "tr", "اوکراین": "ua", "امارات متحده عربی": "ae",
        "بریتانیا": "gb", "ایالات متحده": "us", "ویتنام": "vn"
    };

    // اطلاعات مبدل‌های لینک اشتراک
    const subscriptionConverters = [
        {
            name: "مبدل گیتهاب پیجز",
            description: "نسخه آنلاین مبدل لینک اشتراک، قابل دسترسی از طریق GitHub Pages.",
            link: "https://10ium.github.io/sub-converter_farsi",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 6.5l8 4.5 8-4.5'/><path d='M2 17.5l8-4.5 8 4.5'/><path d='M10 6L2 12l8 6' stroke-dasharray='3 3'/><path d='M14 18l8-6-8-6' stroke-dasharray='3 3'/><circle cx='12' cy='12' r='2' fill='currentColor'/></svg>`
        },
        {
            name: "مبدل گیتهاب اکشن",
            description: "مبدل لینک اشتراک مبتنی بر GitHub Actions، برای تبدیل و مدیریت لینک‌ها.",
            link: "https://github.com/vpnclashfa-backup/subconverter",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 20v-6m0-6V2'/><path d='M12 8a2 2 0 100-4 2 2 0 000 4z'/><path d='M20 12h-6m-6 0H2'/><path d='M8 12a2 2 0 10-4 0 2 2 0 004 0z'/><path d='M12 22a2 2 0 100-4 2 2 0 000 4z'/><path d='M22 12a2 2 0 10-4 0 2 2 0 004 0z'/></svg>`
        },
        {
            name: "مبدل آفلاین ویندوز",
            description: "نسخه تقریباً آفلاین مبدل پروکسی برای ویندوز، مناسب برای استفاده محلی.",
            link: "https://github.com/vpnclashfa-backup/OfflineProxyConverter",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'/><path d='M8 21h8'/><path d='M12 17v4'/><path d='M12 12l-2-2m4 0l-2 2'/><path d='M10 10l2 2'/></svg>`
        }
    ];

    // اطلاعات ابزارهای دیگر
    const otherTools = [
        {
            name: "GitHub Release Tracker",
            description: "ابزاری برای پیگیری و به‌روزرسانی آسان اپلیکیشن‌های اندروید و دریافت نوتیفیکیشن نسخه‌های جدید.",
            sub_descriptions: [
                "این ابزار، اپلیکیشن‌های پولی اندروید را از فارسروید دریافت و در گیتهاب منتشر می‌کند تا با [Obtainium](https://obtainium.app/) راحت‌تر بتوانید آن‌ها را به‌روزرسانی کنید.",
                "با اپ [Obtainium](https://obtainium.app/) راحت‌تر می‌توانید اپ‌های اوپن سورس اندروید را بروز کنید، مثلاً همین فیلترشکن‌هایی که توی گیتهاب منتشر می‌شوند.",
                "برای ویندوز هم می‌توانید از ربات [@github_release_monitor_bot](https://t.me/github_release_monitor_bot) استفاده کنید تا وقتی نسخه جدید منتشر شد نوتیفیکیشن بده."
            ],
            link: "https://github.com/vpnclashfa-backup/GitHub-Release-Tracker",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L6 12z'/><path d='M16 12a4 4 0 10-8 0 4 4 0 008 0z'/><path d='M21 3L12 12'/></svg>`
        },
        {
            name: "LAN-Yar",
            description: "ابزاری برای ساخت کانفیگ میهومو (کلش متا) و به اشتراک‌گذاری اینترنت فیلترشکن روی شبکه محلی با دستگاه‌های دیگر.",
            sub_descriptions: [
                "با این ابزار می‌توانید اینترنتی که از فیلترشکن رد شده را روی شبکه به اشتراک بگذارید.",
                "با دستگاه‌های دیگر (مثلاً گوشی اندروید به کامپیوتر یا آیفون) به اینترنت به اشتراک گذاشته شده متصل شوید."
            ],
            link: "https://10ium.github.io/LAN-Yar/",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M4.93 19.07a10 10 0 010-14.14'/><path d='M7.76 16.24a6 6 0 010-8.48'/><path d='M10.59 13.41a2 2 0 010-2.82'/><path d='M12 12h.01'/><rect x='16' y='10' width='6' height='4' rx='1'/><line x1='19' y1='14' x2='19' y2='17'/></svg>`
        },
        {
            name: "SubConfigModifier",
            description: "این ابزار به شما کمک می‌کند تا لینک‌های اشتراک VPN خود را مدیریت و سفارشی کنید.",
            sub_descriptions: [
                "قابلیت محدود کردن تعداد کانفیگ‌ها و انواع پروتکل‌ها را دارد.",
                "قابلیت اینو دارد که کانفیگ‌های پشت CDN کلادفلر را شناسایی کند.",
                "برای تغییر، حذف یا اضافه کردن تنظیمات به لینک‌های اشتراک خود استفاده کنید.",
                "مناسب برای کاربرانی که نیاز به کنترل دقیق بر روی  لینک های اشتراک خود دارند."
            ],
            link: "https://vpnclashfa-backup.github.io/SubConfigModifier",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='4' y1='21' x2='4' y2='14'/><line x1='4' y1='10' x2='4' y2='3'/><line x1='12' y1='21' x2='12' y2='12'/><line x1='12' y1='8' x2='12' y2='3'/><line x1='20' y1='21' x2='20' y2='16'/><line x1='20' y1='12' x2='20' y2='3'/><line x1='1' y1='14' x2='7' y2='14'/><line x1='9' y1='8' x2='15' y2='8'/><line x1='17' y1='16' x2='23' y2='16'/></svg>`
        },
        {
            name: "Public-DNS-Collector",
            description: "لیست انواع مختلف دی ان اس",
            sub_descriptions: [
                "تو این مخزن از 9 تا منبع مختلف انواع دی ان اس جمع اوری میشن",
                "دی ان اس ها به لیست های مختلفی تقسیم بندی میشن مثلا انواع پروتکل و انواع نوع فیلترینگ"
            ],
            link: "https://github.com/10ium/Public-DNS-Collector",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><path d='M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20'/><path d='M2 12h20'/></svg>`
        },
        {
            name: "WG-to-Clash Converter",
            description: "ابزاری برای تبدیل کانفیگ‌های WireGuard به فرمت Clash.",
            sub_descriptions: [
                "به راحتی کانفیگ‌های WireGuard خود را به فرمت قابل استفاده در کلاینت‌های Clash تبدیل کنید.",
                "این ابزار برای ساده‌سازی استفاده از پروتکل WireGuard در محیط Clash طراحی شده است."
            ],
            link: "https://10ium.github.io/wg-to-clash/",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='M15.5 8.5 L19 12 L15.5 15.5'/><path d='M5 12H19'/></svg>`
        }
    ];

    // اطلاعات پراپت‌ها
    const promptsData = [
        {
            name: "Coldwater Clarity Companion",
            description: "یک پرامپت تحلیلی-همدلانه با نقش روان‌شناس حمایتی و فیلسوف منطقی/اخلاقی که پاسخ‌های علمی، مکالمه‌ای و مبتنی بر شواهد می‌دهد.",
            link: "https://github.com/10ium/free-config/blob/main/prompt/Coldwater%20Clarity%20Companion.txt",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2a5.5 5.5 0 015.5 5.5c0 1.99-1.39 3.65-3.23 4.38'/><path d='M12 2a5.5 5.5 0 00-5.5 5.5c0 1.99 1.39 3.65 3.23 4.38'/><path d='M12 22a5.5 5.5 0 005.5-5.5c0-1.99-1.39-3.65-3.23-4.38'/><path d='M12 22a5.5 5.5 0 01-5.5-5.5c0-1.99 1.39-3.65 3.23-4.38'/><path d='M17.5 12a5.5 5.5 0 01-5.5 5.5c-1.99 0-3.65-1.39-4.38-3.23'/><path d='M6.5 12a5.5 5.5 0 005.5 5.5c1.99 0 3.65-1.39 4.38-3.23'/><path d='M6.5 12a5.5 5.5 0 015.5-5.5c1.99 0 3.65 1.39 4.38 3.23'/><path d='M17.5 12a5.5 5.5 0 00-5.5-5.5c-1.99 0-3.65 1.39-4.38 3.23'/><line x1='12' y1='1' x2='12' y2='4'/><line x1='12' y1='20' x2='12' y2='23'/></svg>`
        },
        {
            name: "Coldwater Coder",
            description: "یک متخصص کدنویسی اختصاصی و مجری دستورات فنی برای توسعه‌دهندگان.",
            link: "https://github.com/10ium/free-config/blob/main/prompt/Coldwater%20Coder.txt",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>`
        },
        {
            name: "Coldwater Translator",
            description: "مترجم تخصصی زیرنویس فیلم، سریال و انیمیشن به زبان فارسی گفتاری و روان.",
            link: "https://github.com/10ium/free-config/blob/main/prompt/Coldwater%20Translator.txt",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'/><text x='7' y='14' font-family='Arial' font-size='7' fill='currentColor'>EN</text><text x='14' y='14' font-family='Vazirmatn' font-size='7' fill='currentColor'>FA</text></svg>`
        }
    ];

    // اطلاعات ورکرها
    const workersData = [
        {
            name: "Ayeneh-ye Link",
            description: "یک ورکر برای میرور کردن محتوای متنی لینک‌ها، با قابلیت پردازش محتوای داخلی فایل‌های Clash/YAML.",
            link: "https://github.com/10ium/free-config/blob/main/worker/Ayeneh-ye%20Link.txt",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.72'/><path d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.72-1.72'/><path d='M20.24 12.24a8 8 0 00-5.66-5.66'/><path d='M3.76 11.76a8 8 0 005.66 5.66'/></svg>`
        },
        {
            name: "Iran Proxy Worker",
            description: "یک ورکر برای جمع‌آوری و ارائه پروکسی‌های ایران در فرمت‌های مختلف (Xray/Clash).",
            link: "https://github.com/10ium/free-config/blob/main/worker/iran_proxy.txt",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='9' width='20' height='6' rx='1'/><path d='M12 3v6'/><path d='M12 15v6'/><path d='M6 3v18'/><path d='M18 3v18'/></svg>`
        }
    ];

    // اطلاعات ابزارهای دیگران
    const otherPeopleToolsData = [
        {
            name: "ابزارهای itsyebekhe",
            description: "مجموعه‌ای از ابزارهای مفید و کاربردی ساخته شده توسط itsyebekhe.",
            link: "https://itsyebekhe.github.io/itsyebekhe/",
            icon: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z'/></svg>`
        }
    ];

    // نگاشت تعداد ستون‌ها به اندازه فونت متناسب
    const fontSizeMap = {
        1: '1.3rem',
        2: '1.1rem',
        3: '1.0rem',
        4: '0.9rem',
        5: '0.8rem'
    };

    /**
     * تابعی برای دریافت URL تصویر پرچم بر اساس نام کشور (با یا بدون اموجی)
     * @param {string} countryNameWithEmoji - نام کشور که ممکن است شامل اموجی پرچم باشد
     * @returns {string|null} URL تصویر پرچم یا null اگر یافت نشد
     */
    function getFlagImageUrl(countryNameWithEmoji) {
        // حذف اموجی‌های پرچم از رشته برای یافتن نام کشور خالص
        const cleanName = countryNameWithEmoji.replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3F4}\u{E0067}-\u{E007F}]/gu, '').trim();
        const countryCode = countryFlagMap[cleanName];
        if (countryCode) {
            // استفاده از flagcdn.com برای دریافت تصاویر پرچم (عرض 20 پیکسل)
            return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
        }
        return null;
    }

    /**
     * تابعی برای دریافت URL آیکون Cloudflare
     * @returns {string} URL تصویر آیکون Cloudflare
     */
    function getCloudflareIconUrl() {
        return 'https://www.cloudflare.com/favicon.ico'; // یا هر آیکون دیگری که ترجیح می‌دهید
    }

    /**
     * تابع کمکی برای انتخاب تصادفی یک آیتم از آرایه
     * @param {Array<string>} arr - آرایه‌ای از رشته‌ها (لینک‌های عکس)
     * @returns {string} یک لینک عکس تصادفی
     */
    function getRandomImage(arr) {
        if (!arr || arr.length === 0) {
            return ''; // یا یک تصویر پیش‌فرض
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    /**
     * تابع برای تنظیم پس‌زمینه تصویری بر اساس تم
     * @param {string} themeName - نام تم ('light' یا 'dark')
     */
    function setBackgroundImage(themeName) {
        let imageUrl;
        if (themeName === 'dark') {
            imageUrl = getRandomImage(nightBackgrounds);
        } else {
            imageUrl = getRandomImage(dayBackgrounds);
        }
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    }

    /**
     * تابع برای تنظیم تم (روشن یا تیره)
     * @param {string} themeName - نام تم ('light' یا 'dark')
     */
    function setTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName); // ذخیره تم در Local Storage
        setBackgroundImage(themeName); // تنظیم پس‌زمینه بر اساس تم جدید
    }

    /**
     * تنظیم تم اولیه بر اساس Local Storage یا زمان فعلی تهران
     */
    function setInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme); // اگر تم ذخیره شده بود، آن را اعمال کن
        } else {
            // تعیین زمان فعلی تهران برای تصمیم‌گیری در مورد تم شب/روز
            const tehranTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tehran"});
            const hour = new Date(tehranTime).getHours();

            // شب: 7 عصر (19) تا 6 صبح - روز: 6 صبح تا 7 عصر (19)
            const isNight = hour >= 19 || hour < 6;

            if (isNight) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
    }

    /**
     * تغییر تم بین روشن و تیره
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    /**
     * پر کردن منوی کشویی دسته‌بندی با نام دسته‌ها از آبجکت subscriptionsData
     */
    function populateCategorySelect() {
        // اطمینان از وجود subscriptionsData
        if (typeof subscriptionsData === 'undefined' || Object.keys(subscriptionsData).length === 0) {
            console.warn("subscriptionsData is not defined or is empty. Cannot populate categories.");
            return;
        }
        for (const categoryName of Object.keys(subscriptionsData)) {
            const option = document.createElement('option');
            option.value = categoryName;
            // در منوی کشویی، فقط نام تمیز کشور را نمایش می‌دهیم (بدون اموجی)
            option.textContent = categoryName.replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3F4}\u{E0067}-\u{E007F}]/gu, '').trim();
            categorySelect.appendChild(option);
        }
    }

    /**
     * نمایش آیتم‌های مربوط به یک دسته
     * @param {string} categoryName - نام دسته
     */
    function showCategoryItems(categoryName) {
        const items = subscriptionsData[categoryName];
        if (!items) {
            itemsContainer.innerHTML = '<p class="placeholder-text">داده‌ای برای این دسته یافت نشد.</p>';
            return;
        }

        let itemsHTML = '<div class="items-list">';
        for (const itemName of Object.keys(items)) {
            let itemDisplayContent = itemName.replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3F4}\u{E0067}-\u{E007F}]/gu, '').trim(); // نام تمیز
            const link = items[itemName]; // دریافت لینک واقعی برای بررسی Cloudflare
            const flagUrl = getFlagImageUrl(itemName); // دریافت URL پرچم
            const isCloudflareLink = link.toLowerCase().includes('cloudflare'); // بررسی وجود 'cloudflare' در لینک

            itemsHTML += `
                <button class="item-button" data-category="${categoryName}" data-item="${itemName}">
            `;
            if (flagUrl) {
                itemsHTML += `<img src="${flagUrl}" alt="${itemDisplayContent} flag" class="item-flag-icon">`;
            }
            if (isCloudflareLink) {
                itemsHTML += `<img src="${getCloudflareIconUrl()}" alt="Cloudflare icon" class="item-cloudflare-icon">`;
            }
            itemsHTML += `<span>${itemDisplayContent}</span>
                </button>
            `;
        }
        itemsHTML += '</div>';

        itemsContainer.innerHTML = itemsHTML;

        // اضافه کردن Event Listener به دکمه‌های آیتم جدید
        document.querySelectorAll('.item-button').forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const item = this.getAttribute('data-item');
                const link = subscriptionsData[category][item];

                showLink(link); // نمایش لینک انتخاب شده
            });
        });
    }

    /**
     * نمایش لینک انتخابی
     * @param {string} link - لینک مورد نظر برای نمایش
     */
    function showLink(link) {
        selectedLink.textContent = link;
        linkDisplay.classList.remove('hidden');

        // اسکرول نرم به بخش نمایش لینک
        linkDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * کپی کردن لینک به کلیپ‌بورد
     */
    function copyLink() {
        const link = selectedLink.textContent;
        if (!link) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(() => {
                showNotification();
            }).catch(err => {
                console.error('Failed to copy using Clipboard API: ', err);
                fallbackCopyTextToClipboard(link);
            });
        } else {
            fallbackCopyTextToClipboard(link);
        }
    }

    /**
     * روش جایگزین برای کپی کردن متن به کلیپ‌بورد (برای مرورگرهای قدیمی‌تر)
     * @param {string} text - متنی که باید کپی شود
     */
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showNotification();
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    /**
     * نمایش نوتیفیکیشن کپی موفقیت‌آمیز
     */
    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }

    /**
     * اسکرول به بالای صفحه
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    /**
     * اسکرول به پایین صفحه
     */
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    /**
     * تنظیم تعداد ستون‌های گرید و اندازه فونت آیتم‌ها
     * @param {number} count - تعداد ستون‌ها
     */
    function setGridColumns(count) {
        // این تابع متغیر CSS را تنظیم می‌کند که سپس توسط CSS Grid استفاده می‌شود.
        document.documentElement.style.setProperty('--grid-columns', count);

        // تنظیم اندازه فونت بر اساس تعداد ستون‌ها
        const fontSize = fontSizeMap[count] || fontSizeMap[2]; // اگر مقدار نامعتبر بود، از پیش‌فرض (2 ستون) استفاده کن
        document.documentElement.style.setProperty('--item-font-size', fontSize);
    }

    /**
     * پر کردن فیلترهای هسته و سیستم عامل
     */
    function populateClientFilters() {
        const coreTypes = new Set();
        const osTypes = new Set();

        suggestedClients.forEach(client => {
            if (client.core_type) {
                coreTypes.add(client.core_type);
            }
            if (client.download) {
                for (const os in client.download) {
                    let displayOsName = os.charAt(0).toUpperCase() + os.slice(1);
                    if (os === "router_os") displayOsName = "Router OS";
                    if (os === "tvos") displayOsName = "tvOS";
                    osTypes.add(displayOsName);
                }
            }
        });

        coreTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            coreFilterSelect.appendChild(option);
        });

        osTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            osFilterSelect.appendChild(option);
        });
    }

    /**
     * رندر کردن کلاینت‌های پیشنهادی در رابط کاربری بر اساس فیلترها
     */
    function renderClients() {
        if (!clientsContainer) {
            console.error("Clients container not found.");
            return;
        }
        if (!suggestedClients || suggestedClients.length === 0) {
            clientsContainer.innerHTML = '<p class="placeholder-text">اطلاعات کلاینت‌ها در دسترس نیست.</p>';
            return;
        }

        const selectedCore = coreFilterSelect.value;
        const selectedOs = osFilterSelect.value;

        const filteredClients = suggestedClients.filter(client => {
            const matchesCore = selectedCore === "all" || client.core_type === selectedCore;
            const matchesOs = selectedOs === "all" || (client.download && Object.keys(client.download).some(osKey => {
                let displayOsName = osKey.charAt(0).toUpperCase() + osKey.slice(1);
                if (osKey === "router_os") displayOsName = "Router OS";
                if (osKey === "tvos") displayOsName = "tvOS";
                return displayOsName === selectedOs;
            }));
            return matchesCore && matchesOs;
        });

        clientsContainer.innerHTML = '';

        if (filteredClients.length === 0) {
            clientsContainer.innerHTML = '<p class="placeholder-text">هیچ کلاینتی با فیلترهای انتخاب شده یافت نشد.</p>';
            return;
        }

        filteredClients.forEach(client => {
            const clientCard = document.createElement('div');
            clientCard.classList.add('client-card');

            const clientHeader = document.createElement('div');
            clientHeader.classList.add('client-header');
            if (client.core_icon) {
                const coreIcon = document.createElement('img');
                coreIcon.src = client.core_icon;
                coreIcon.alt = `${client.name} core icon`;
                coreIcon.classList.add('core-icon');
                coreIcon.onerror = function() { this.style.display='none'; };
                clientHeader.appendChild(coreIcon);
            }
            const clientName = document.createElement('h3');
            clientName.textContent = client.name;
            clientHeader.appendChild(clientName);
            clientCard.appendChild(clientHeader);

            const clientDescription = document.createElement('p');
            clientDescription.classList.add('client-description');
            clientDescription.textContent = client.description;
            clientCard.appendChild(clientDescription);

            const osIconsContainer = document.createElement('div');
            osIconsContainer.classList.add('os-icons-container');
            if (client.os_icons) {
                for (const osKey in client.download) {
                    if (client.os_icons[osKey]) {
                        const osIcon = document.createElement('img');
                        osIcon.src = client.os_icons[osKey];
                        osIcon.alt = osKey;
                        osIcon.onerror = function() { this.style.display='none'; };
                        osIconsContainer.appendChild(osIcon);
                    }
                }
            }
            clientCard.appendChild(osIconsContainer);

            const downloadLinksDiv = document.createElement('div');
            downloadLinksDiv.classList.add('download-links');
            if (client.download) {
                for (const platform in client.download) {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = client.download[platform];
                    downloadLink.target = "_blank";
                    downloadLink.rel = "noopener noreferrer";
                    let displayPlatformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                    if (platform === "router_os") displayPlatformName = "Router OS";
                    if (platform === "tvos") displayPlatformName = "tvOS";
                    downloadLink.textContent = `دانلود برای ${displayPlatformName}`;
                    downloadLinksDiv.appendChild(downloadLink);
                }
            }
            clientCard.appendChild(downloadLinksDiv);

            clientsContainer.appendChild(clientCard);
        });
    }

    /**
     * رندر کردن مبدل‌های لینک اشتراک در رابط کاربری
     */
    function renderConverters() {
        if (!convertersContainer) {
            console.error("Converters container not found.");
            return;
        }
        if (!subscriptionConverters || subscriptionConverters.length === 0) {
            convertersContainer.innerHTML = '<p class="placeholder-text">اطلاعات مبدل‌ها در دسترس نیست.</p>';
            return;
        }

        convertersContainer.innerHTML = '';

        subscriptionConverters.forEach(converter => {
            const converterCard = document.createElement('div');
            converterCard.classList.add('converter-card');

            if (converter.icon) {
                const icon = document.createElement('img');
                icon.src = converter.icon;
                icon.alt = `${converter.name} icon`;
                icon.classList.add('card-icon');
                converterCard.appendChild(icon);
            }

            const converterName = document.createElement('h3');
            converterName.textContent = converter.name;
            converterCard.appendChild(converterName);

            const converterDescription = document.createElement('p');
            converterDescription.textContent = converter.description;
            converterCard.appendChild(converterDescription);

            const converterLink = document.createElement('a');
            converterLink.href = converter.link;
            converterLink.target = "_blank";
            converterLink.rel = "noopener noreferrer";
            converterLink.classList.add('button');
            converterLink.textContent = "مشاهده مبدل";
            converterCard.appendChild(converterLink);

            convertersContainer.appendChild(converterCard);
        });
    }

    /**
     * تابعی برای تبدیل لینک‌های Markdown به HTML
     * @param {string} markdownText - متنی که شامل لینک‌های Markdown است
     * @returns {string} متنی با لینک‌های HTML
     */
    function convertMarkdownLinksToHtml(markdownText) {
        const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
        return markdownText.replace(regex, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    }

    /**
     * رندر کردن ابزارهای دیگر در رابط کاربری
     */
    function renderOtherTools() {
        if (!toolsContainer) {
            console.error("Tools container not found.");
            return;
        }
        if (!otherTools || otherTools.length === 0) {
            toolsContainer.innerHTML = '<p class="placeholder-text">اطلاعات ابزارها در دسترس نیست.</p>';
            return;
        }

        toolsContainer.innerHTML = '';

        otherTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.classList.add('tool-card');

            if (tool.icon) {
                const icon = document.createElement('img');
                icon.src = tool.icon;
                icon.alt = `${tool.name} icon`;
                icon.classList.add('card-icon');
                toolCard.appendChild(icon);
            }

            const toolName = document.createElement('h3');
            toolName.textContent = tool.name;
            toolCard.appendChild(toolName);

            const toolDescription = document.createElement('p');
            toolDescription.textContent = tool.description;
            toolCard.appendChild(toolDescription);

            if (tool.sub_descriptions && tool.sub_descriptions.length > 0) {
                const subDescriptionsList = document.createElement('ul');
                tool.sub_descriptions.forEach(subDesc => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = convertMarkdownLinksToHtml(subDesc);
                    subDescriptionsList.appendChild(listItem);
                });
                toolCard.appendChild(subDescriptionsList);
            }

            const toolLink = document.createElement('a');
            toolLink.href = tool.link;
            toolLink.target = "_blank";
            toolLink.rel = "noopener noreferrer";
            toolLink.classList.add('button');
            toolLink.textContent = "مشاهده ابزار";
            toolCard.appendChild(toolLink);

            toolsContainer.appendChild(toolCard);
        });
    }

    /**
     * تابع عمومی برای رندر کردن کارت‌های با ساختار ساده (پراپت‌ها، ورکرها و ابزارهای دیگران)
     * @param {HTMLElement} container - عنصر نگهدارنده کارت‌ها
     * @param {Array<Object>} dataArray - آرایه‌ای از داده‌ها برای رندر
     * @param {string} placeholderText - متن جایگزین در صورت خالی بودن داده‌ها
     * @param {string} buttonText - متن دکمه لینک
     */
    function renderSimpleCards(container, dataArray, placeholderText, buttonText) {
        if (!container) {
            console.error("Container not found for rendering simple cards.");
            return;
        }
        if (!dataArray || dataArray.length === 0) {
            container.innerHTML = `<p class="placeholder-text">${placeholderText}</p>`;
            return;
        }

        container.innerHTML = '';

        dataArray.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('tool-card'); // استفاده مجدد از استایل tool-card

            if (item.icon) {
                const icon = document.createElement('img');
                icon.src = item.icon;
                icon.alt = `${item.name} icon`;
                icon.classList.add('card-icon');
                itemCard.appendChild(icon);
            }

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemCard.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemCard.appendChild(itemDescription);

            const itemLink = document.createElement('a');
            itemLink.href = item.link;
            itemLink.target = "_blank";
            itemLink.rel = "noopener noreferrer";
            itemLink.classList.add('button');
            itemLink.textContent = buttonText;
            itemCard.appendChild(itemLink);

            container.appendChild(itemCard);
        });
    }

    // Event Listeners (شنونده‌های رویداد)
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        if (selectedCategory) {
            showCategoryItems(selectedCategory);
            linkDisplay.classList.add('hidden');
        } else {
            itemsContainer.innerHTML = '<p class="placeholder-text">لطفاً یک دسته را انتخاب کنید</p>';
            linkDisplay.classList.add('hidden');
        }
    });

    copyBtn.addEventListener('click', copyLink);
    themeToggle.addEventListener('click', toggleTheme);
    scrollTopBtn.addEventListener('click', scrollToTop);
    scrollBottomBtn.addEventListener('click', scrollToBottom);

    if (rowCountSelect) {
        rowCountSelect.addEventListener('change', function() {
            const count = parseInt(this.value, 10);
            if (!isNaN(count) && count >= 1 && count <= 5) {
                setGridColumns(count);
            } else {
                console.warn("ورودی تعداد سطر نامعتبر است. باید بین 1 تا 5 باشد.");
            }
        });
    } else {
        console.error("Element with ID 'row-count' not found. Row count functionality may not work.");
    }

    if (coreFilterSelect) {
        coreFilterSelect.addEventListener('change', renderClients);
    } else {
        console.error("Element with ID 'core-filter' not found. Client filtering by core may not work.");
    }

    if (osFilterSelect) {
        osFilterSelect.addEventListener('change', renderClients);
    } else {
        console.error("Element with ID 'os-filter' not found. Client filtering by OS may not work.");
    }

    // راه‌اندازی اولیه برنامه
    setInitialTheme();
    populateCategorySelect();
    
    if (rowCountSelect) {
        const isMobile = window.innerWidth <= 768;
        rowCountSelect.value = isMobile ? '1' : '3';
        setGridColumns(parseInt(rowCountSelect.value, 10));
    } else {
        setGridColumns(window.innerWidth <= 768 ? 1 : 3);
    }

    populateClientFilters();
    renderClients();
    renderConverters();
    renderOtherTools();
    renderSimpleCards(promptsContainer, promptsData, "اطلاعات پراپت‌ها در دسترس نیست.", "مشاهده پراپت");
    renderSimpleCards(workersContainer, workersData, "اطلاعات ورکرها در دسترس نیست.", "مشاهده ورکر");
    renderSimpleCards(otherPeopleToolsContainer, otherPeopleToolsData, "اطلاعات ابزارهای دیگران در دسترس نیست.", "مشاهده ابزار");
});