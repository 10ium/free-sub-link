// script.js
// توجه: این فایل به عنوان یک ماژول بارگذاری می‌شود (type="module" در index.html)
import { suggestedClients } from './clients.js'; // وارد کردن داده‌های کلاینت‌ها

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
    const clientsContainer = document.getElementById('clients-container'); // جدید: کانتینر کلاینت‌ها

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
            option.textContent = categoryName;
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
            itemsHTML += `
                <button class="item-button" data-category="${categoryName}" data-item="${itemName}">
                    ${itemName}
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
     * رندر کردن کلاینت‌های پیشنهادی در رابط کاربری
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

        clientsContainer.innerHTML = ''; // پاک کردن محتوای قبلی

        suggestedClients.forEach(client => {
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
                for (const os in client.os_icons) {
                    const osIcon = document.createElement('img');
                    osIcon.src = client.os_icons[os];
                    osIcon.alt = os;
                    osIcon.onerror = function() { this.style.display='none'; }; // مخفی کردن در صورت عدم بارگذاری
                    osIconsContainer.appendChild(osIcon);
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
                    downloadLink.textContent = `دانلود برای ${platform.charAt(0).toUpperCase() + platform.slice(1)}`; // مثلاً "دانلود برای Android"
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

    // راه‌اندازی اولیه برنامه
    setInitialTheme(); // ابتدا تم را بارگذاری کن
    populateCategorySelect(); // منوی دسته‌بندی را پر کن
    setGridColumns(rowCountInput.value); // تعداد ستون‌های اولیه را بر اساس مقدار پیش‌فرض فیلد ورودی تنظیم کن
    renderClients(); // جدید: کلاینت‌ها را رندر کن
});
