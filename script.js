// script.js
// توجه: این فایل به عنوان یک ماژول بارگذاری می‌شود (type="module" در index.html)
import { suggestedClients, osIcons, coreIcons } from './clients.js'; // وارد کردن داده‌های کلاینت‌ها و آیکون‌ها

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
    const coreFilterSelect = document.getElementById('core-filter'); // جدید: فیلتر هسته
    const osFilterSelect = document.getElementById('os-filter');     // جدید: فیلتر سیستم عامل

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
     * تابع برای تنظیم تم (روشن یا تیره)
     * @param {string} themeName - نام تم ('light' یا 'dark')
     */
    function setTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName); // ذخیره تم در Local Storage
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
     * نمایش آیتم‌های مربوط به یک دسته انتخاب شده
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
     * نمایش لینک انتخاب شده در بخش مربوطه
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
        if (!link) return; // اگر لینکی برای کپی نبود، کاری نکن

        // استفاده از Clipboard API در صورت موجود بودن، در غیر این صورت از روش جایگزین استفاده کن
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(() => {
                showNotification(); // نمایش نوتیفیکیشن موفقیت
            }).catch(err => {
                console.error('Failed to copy using Clipboard API: ', err);
                fallbackCopyTextToClipboard(link); // استفاده از روش جایگزین در صورت خطا
            });
        } else {
            fallbackCopyTextToClipboard(link); // استفاده از روش جایگزین
        }
    }

    /**
     * روش جایگزین برای کپی کردن متن به کلیپ‌بورد (برای مرورگرهای قدیمی‌تر)
     * @param {string} text - متنی که باید کپی شود
     */
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // استایل‌های موقت برای مخفی نگه داشتن textarea
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
        textArea.select(); // انتخاب متن داخل textarea
        try {
            document.execCommand('copy'); // اجرای دستور کپی
            showNotification();
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea); // حذف textarea
    }

    /**
     * نمایش نوتیفیکیشن کپی موفقیت‌آمیز
     */
    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500); // نوتیفیکیشن پس از 2.5 ثانیه مخفی می‌شود
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
                    // تبدیل نام پلتفرم به نام‌های خواناتر برای نمایش در فیلتر
                    let displayOsName = os.charAt(0).toUpperCase() + os.slice(1);
                    if (os === "router_os") displayOsName = "Router OS";
                    if (os === "tvos") displayOsName = "tvOS";
                    osTypes.add(displayOsName);
                }
            }
        });

        // پر کردن فیلتر هسته
        coreTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            coreFilterSelect.appendChild(option);
        });

        // پر کردن فیلتر سیستم عامل
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

        clientsContainer.innerHTML = ''; // پاک کردن محتوای قبلی

        if (filteredClients.length === 0) {
            clientsContainer.innerHTML = '<p class="placeholder-text">هیچ کلاینتی با فیلترهای انتخاب شده یافت نشد.</p>';
            return;
        }

        filteredClients.forEach(client => {
            const clientCard = document.createElement('div');
            clientCard.classList.add('client-card');

            // هدر کارت (نام کلاینت و آیکون هسته)
            const clientHeader = document.createElement('div');
            clientHeader.classList.add('client-header');
            if (client.core_icon) {
                const coreIcon = document.createElement('img');
                coreIcon.src = client.core_icon;
                coreIcon.alt = `${client.name} core icon`;
                coreIcon.classList.add('core-icon');
                coreIcon.onerror = function() { this.style.display='none'; }; // مخفی کردن در صورت عدم بارگذاری
                clientHeader.appendChild(coreIcon);
            }
            const clientName = document.createElement('h3');
            clientName.textContent = client.name;
            clientHeader.appendChild(clientName);
            clientCard.appendChild(clientHeader);

            // توضیحات کلاینت
            const clientDescription = document.createElement('p');
            clientDescription.classList.add('client-description');
            clientDescription.textContent = client.description;
            clientCard.appendChild(clientDescription);

            // آیکون‌های سیستم عامل
            const osIconsContainer = document.createElement('div');
            osIconsContainer.classList.add('os-icons-container');
            if (client.os_icons) {
                // فقط آیکون‌های سیستم عامل‌هایی که لینک دانلود دارند را نمایش بده
                for (const osKey in client.download) {
                    if (client.os_icons[osKey]) { // اطمینان از وجود آیکون برای آن OS
                        const osIcon = document.createElement('img');
                        osIcon.src = client.os_icons[osKey];
                        osIcon.alt = osKey;
                        osIcon.onerror = function() { this.style.display='none'; }; // مخفی کردن در صورت عدم بارگذاری
                        osIconsContainer.appendChild(osIcon);
                    }
                }
            }
            clientCard.appendChild(osIconsContainer);

            // لینک‌های دانلود
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

    copyBtn.addEventListener('click', copyLink); // کپی کردن لینک هنگام کلیک روی دکمه کپی
    themeToggle.addEventListener('click', toggleTheme); // تغییر تم هنگام کلیک روی دکمه تم
    scrollTopBtn.addEventListener('click', scrollToTop); // اسکرول به بالا
    scrollBottomBtn.addEventListener('click', scrollToBottom); // اسکرول به پایین

    // جدید: شنونده رویداد برای فیلد ورودی تعداد سطر
    rowCountInput.addEventListener('input', function() {
        const count = parseInt(this.value, 10);
        // اعتبار سنجی ورودی: باید عدد و بین 1 تا 5 باشد
        if (!isNaN(count) && count >= 1 && count <= 5) {
            setGridColumns(count);
        } else {
            console.warn("ورودی تعداد سطر نامعتبر است. باید بین 1 تا 5 باشد.");
            // می‌توانید در اینجا یک پیام خطا به کاربر نمایش دهید
        }
    });

    // شنونده‌های رویداد برای فیلترهای کلاینت
    coreFilterSelect.addEventListener('change', renderClients);
    osFilterSelect.addEventListener('change', renderClients);


    // راه‌اندازی اولیه برنامه
    setInitialTheme(); // ابتدا تم را بارگذاری کن
    populateCategorySelect(); // منوی دسته‌بندی را پر کن
    setGridColumns(rowCountInput.value); // تعداد ستون‌های اولیه را بر اساس مقدار پیش‌فرض فیلد ورودی تنظیم کن
    populateClientFilters(); // جدید: فیلترهای کلاینت را پر کن
    renderClients(); // کلاینت‌ها را رندر کن
});
