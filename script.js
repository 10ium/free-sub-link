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
    const rowCountInput = document.getElementById('row-count');
    const clientsContainer = document.getElementById('clients-container');
    const coreFilterSelect = document.getElementById('core-filter');
    const osFilterSelect = document.getElementById('os-filter');
    const convertersContainer = document.getElementById('converters-container');

    // نگاشت نام کشورها به کدهای دو حرفی ISO برای دریافت پرچم
    const countryFlagMap = {
        "آلبانی": "al", "آرژانتین": "ar", "ارمنستان": "am", "استرالیا": "au", "اتریش": "at",
        "بحرین": "bh", "بلاروس": "by", "بلژیک": "be", "بولیوی": "bo", "برزیل": "br",
        "بلغارستان": "bg", "کانادا": "ca", "چین": "cn", "کلمبیا": "co", "کرواسی": "hr",
        "قبرس": "cy", "چک": "cz", "دانمارک": "dk", "اکوادور": "ec", "استونی": "ee",
        "فنلاند": "fi", "فرانسه": "fr", "آلمان": "de", "جبل‌الطارق": "gi", "یونان": "gr",
        "گواتمالا": "gt", "هنگ کنگ": "hk", "مجارستان": "hu", "ایسلند": "is", "هند": "in",
        "اندونزی": "id", "ایران": "ir", "عراق": "iq", "ایرلند": "ie", "اسرائیل": "il",
        "ایتالیا": "it", "ژاپن": "jp", "اردن": "jo", "قزاقستان": "kz", "کره جنوبی": "kr",
        "لتونی": "lv", "لیتوانی": "lt", "لوکزامبورگ": "lu", "مالزی": "my", "مالت": "mt",
        "مکزیک": "mx", "مولداوی": "md", "هلند": "nl", "نیوزیلند": "nz", "مقدونیه شمالی": "mk",
        "نروژ": "no", "نامشخص": "un", // 'un' برای پرچم نامشخص یا عمومی
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
            link: "https://10ium.github.io/sub-converter_farsi"
        },
        {
            name: "مبدل گیتهاب اکشن",
            description: "مبدل لینک اشتراک مبتنی بر GitHub Actions، برای تبدیل و مدیریت لینک‌ها.",
            link: "https://github.com/vpnclashfa-backup/subconverter"
        },
        {
            name: "مبدل آفلاین ویندوز",
            description: "نسخه تقریباً آفلاین مبدل پروکسی برای ویندوز، مناسب برای استفاده محلی.",
            link: "https://github.com/vpnclashfa-backup/OfflineProxyConverter"
        }
    ];

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
            const flagUrl = getFlagImageUrl(itemName); // دریافت URL پرچم

            if (flagUrl) {
                // اگر URL پرچم موجود بود، تگ img را اضافه کن
                itemsHTML += `
                    <button class="item-button" data-category="${categoryName}" data-item="${itemName}">
                        <img src="${flagUrl}" alt="${itemDisplayContent} flag" class="item-flag-icon">
                        <span>${itemDisplayContent}</span>
                    </button>
                `;
            } else {
                // در غیر این صورت، فقط متن را نمایش بده
                itemsHTML += `
                    <button class="item-button" data-category="${categoryName}" data-item="${itemName}">
                        <span>${itemDisplayContent}</span>
                    </button>
                `;
            }
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
     * تنظیم تعداد ستون‌های گرید برای نمایش آیتم‌ها
     * @param {number} count - تعداد ستون‌ها
     */
    function setGridColumns(count) {
        document.documentElement.style.setProperty('--grid-columns', count);
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

        convertersContainer.innerHTML = ''; // پاک کردن محتوای قبلی

        subscriptionConverters.forEach(converter => {
            const converterCard = document.createElement('div');
            converterCard.classList.add('converter-card');

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
            converterLink.classList.add('button'); // استفاده از کلاس button برای استایل
            converterLink.textContent = "مشاهده مبدل";
            converterCard.appendChild(converterLink);

            convertersContainer.appendChild(converterCard);
        });
    }


    // Event Listeners (شنونده‌های رویداد)
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        if (selectedCategory) {
            showCategoryItems(selectedCategory);
            linkDisplay.classList.add('hidden'); // مخفی کردن لینک قبلی هنگام تغییر دسته
        } else {
            itemsContainer.innerHTML = '<p class="placeholder-text">لطفاً یک دسته را انتخاب کنید</p>';
            linkDisplay.classList.add('hidden');
        }
    });

    copyBtn.addEventListener('click', copyLink);
    themeToggle.addEventListener('click', toggleTheme);
    scrollTopBtn.addEventListener('click', scrollToTop);
    scrollBottomBtn.addEventListener('click', scrollToBottom);

    rowCountInput.addEventListener('input', function() {
        const count = parseInt(this.value, 10);
        if (!isNaN(count) && count >= 1 && count <= 5) {
            setGridColumns(count);
        } else {
            console.warn("ورودی تعداد سطر نامعتبر است. باید بین 1 تا 5 باشد.");
        }
    });

    // شنونده‌های رویداد برای فیلترهای کلاینت
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
    setInitialTheme(); // ابتدا تم را بارگذاری و پس‌زمینه را تنظیم کن
    populateCategorySelect();
    setGridColumns(rowCountInput.value);
    populateClientFilters();
    renderClients();
    renderConverters();
});
