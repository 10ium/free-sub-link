// script.js
document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category-select');
    const itemsContainer = document.getElementById('items-container');
    const linkDisplay = document.getElementById('link-display');
    const selectedLink = document.getElementById('selected-link');
    const copyBtn = document.getElementById('copy-btn');
    const notification = document.getElementById('copy-notification');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollBottomBtn = document.getElementById('scroll-bottom');

    // تنظیم تم بر اساس زمان روز در تهران
    function setInitialTheme() {
        const tehranTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tehran"});
        const hour = new Date(tehranTime).getHours();
        
        // شب: 19 تا 6 صبح - روز: 6 تا 19
        const isNight = hour >= 19 || hour < 6;
        
        if (isNight) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // تغییر تم
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // بارگذاری تم از localStorage یا تنظیم بر اساس زمان
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            setInitialTheme();
        }
    }

    // پر کردن منوی کشویی با نام دسته‌ها
    function populateCategorySelect() {
        // اضافه کردن گزینه‌های دسته‌بندی به select
        for (const categoryName of Object.keys(subscriptionsData)) {
            const option = document.createElement('option');
            option.value = categoryName;
            option.textContent = categoryName;
            categorySelect.appendChild(option);
        }
    }

    // نمایش آیتم‌های یک دسته
    function showCategoryItems(categoryName) {
        const items = subscriptionsData[categoryName];
        if (!items) return;

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

        // اضافه کردن event listener به دکمه‌های آیتم
        document.querySelectorAll('.item-button').forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const item = this.getAttribute('data-item');
                const link = subscriptionsData[category][item];
                
                showLink(link);
            });
        });
    }

    // نمایش لینک انتخابی
    function showLink(link) {
        selectedLink.textContent = link;
        linkDisplay.classList.remove('hidden');
        
        // اسکرول به بخش لینک
        linkDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // کپی کردن لینک
    function copyLink() {
        const link = selectedLink.textContent;
        if (!link) return;

        navigator.clipboard.writeText(link).then(() => {
            showNotification();
        }).catch(err => {
            console.error('خطا در کپی کردن: ', err);
            // روش جایگزین
            const textArea = document.createElement('textarea');
            textArea.value = link;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification();
        });
    }

    // نمایش نوتیفیکیشن
    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }

    // اسکرول به بالا
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // اسکرول به پایین
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    // Event listeners
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        if (selectedCategory) {
            showCategoryItems(selectedCategory);
            linkDisplay.classList.add('hidden'); // مخفی کردن لینک قبلی
        } else {
            itemsContainer.innerHTML = '<p class="placeholder-text">لطفاً یک دسته را انتخاب کنید</p>';
            linkDisplay.classList.add('hidden');
        }
    });

    copyBtn.addEventListener('click', copyLink);
    themeToggle.addEventListener('click', toggleTheme);
    scrollTopBtn.addEventListener('click', scrollToTop);
    scrollBottomBtn.addEventListener('click', scrollToBottom);

    // مقده‌دهی اولیه
    loadTheme();
    populateCategorySelect();
});