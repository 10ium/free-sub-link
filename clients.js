// clients.js
// این فایل شامل اطلاعات کلاینت‌های پیشنهادی VPN است.
// هر کلاینت شامل نام، توضیحات، لینک‌های دانلود، آیکون‌های سیستم عامل و آیکون هسته است.

// آیکون‌های سیستم عامل
const osIcons = {
    android: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/android.svg",
    ios: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg", // آیکون عمومی اپل/iOS
    windows: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg",
    macos: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/macos.svg",
    linux: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg",
    router_os: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/router.svg", // آیکون عمومی روتر
};

// آیکون‌های هسته
const coreIcons = {
    v2ray: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/V2Ray_logo.png/600px-V2Ray_logo.png", // این لینک قبلاً کار می‌کرد
    xray: "https://placehold.co/48x48/6366f1/ffffff?text=X", // آیکون جایگزین برای Xray (می‌توانید با لوگوی اصلی جایگزین کنید)
    mihomo: "https://placehold.co/48x48/818cf8/ffffff?text=M", // آیکون جایگزین برای Mihomo/Clash Meta (می‌توانید با لوگوی اصلی جایگزین کنید)
    singbox: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sing-box.svg/555px-Sing-box.svg.png", // این لینک قبلاً کار می‌کرد
};

// لیست کامل کلاینت‌ها
const allClients = [
    // کلاینت‌های V2ray
    {
        name: "v2rayN",
        description: "کلاینت محبوب V2Ray برای ویندوز و اندروید با پشتیبانی از هسته‌های Xray و v2fly.",
        download: {
            windows: "https://sourceforge.net/directory/v2ray-clients/",
            android: "https://github.com/2dust/v2rayNG/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android,
        },
        core_icon: coreIcons.v2ray,
    },
    {
        name: "Hiddify-app",
        description: "کلاینت پراکسی خودکار چندپلتفرمی با پشتیبانی گسترده از پروتکل‌ها و هسته‌ها (V2ray, X-Ray, Singbox, Clash Meta).",
        download: {
            windows: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Windows-Setup-x64.exe",
            macos: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-MacOS.dmg",
            linux: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Linux-x64.AppImage",
            android: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Android-universal.apk",
            ios: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-iOS.ipa", // لینک مستقیم .ipa
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios,
        },
        core_icon: coreIcons.v2ray, // هسته اصلی یا یکی از هسته‌های پشتیبانی شده
    },
    {
        name: "Surfing (Magisk Module)",
        description: "ماژول Magisk/Kernelsu/APatch برای اندروید با پشتیبانی از هسته‌های V2ray, Xray, Clash/Mihomo, Singbox و Hysteria. این یک ماژول سیستمی است و رابط کاربری گرافیکی مستقیم ندارد.",
        download: {
            android: "https://github.com/MoGuangYu/Surfing/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.v2ray, // هسته اصلی یا یکی از هسته‌های پشتیبانی شده
    },
    {
        name: "V2RayU",
        description: "رابط کاربری گرافیکی برای V2ray در macOS با قابلیت مدیریت چند کاربره و آمار ترافیک. سازگاری با iOS را نیز نشان می‌دهد.",
        download: {
            ios: "https://sourceforge.net/projects/v2rayu.mirror/files/latest/download", // لینک دانلود برای iOS
            macos: "https://sourceforge.net/projects/v2rayu.mirror/files/latest/download",
        },
        os_icons: {
            ios: osIcons.ios,
            macos: osIcons.macos,
        },
        core_icon: coreIcons.v2ray,
    },
    {
        name: "v2rayA",
        description: "کلاینت GUI وب برای Project V، قابل استقرار روی روتر/NAS و پشتیبانی از پروکسی شفاف جهانی (لینوکس) و پروکسی سیستمی (ویندوز/macOS). رابط کاربری آن از طریق مرورگر وب قابل دسترسی است.",
        download: {
            windows: "https://github.com/v2rayA/v2rayA/releases",
            macos: "https://github.com/v2rayA/v2rayA/releases",
            linux: "https://github.com/v2rayA/v2rayA/releases",
            router_os: "https://github.com/v2rayA/v2rayA/releases", // قابل استقرار روی روترها
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            router_os: osIcons.router_os,
        },
        core_icon: coreIcons.v2ray,
    },
    {
        name: "V2RayX",
        description: "رابط کاربری گرافیکی ساده برای V2Ray در macOS، با قابلیت مدیریت پروکسی سیستم و ادغام نوار منو.",
        download: {
            macos: "https://github.com/Cenmrev/V2RayX/releases",
        },
        os_icons: {
            macos: osIcons.macos,
        },
        core_icon: coreIcons.v2ray,
    },
    {
        name: "V2Ray Core (CLI)",
        description: "هسته اصلی Project V، یک ابزار خط فرمان انعطاف‌پذیر با پشتیبانی از پروتکل‌های متعدد و کنترل شبکه سطح پایین. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            linux: "https://github.com/v2ray/v2ray-core/releases",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.v2ray,
    },

    // کلاینت‌های X-Ray
    {
        name: "Invisible Man XRay",
        description: "کلاینت رایگان و متن‌باز XRay برای ویندوز با رابط کاربری ساده.",
        download: {
            windows: "https://github.com/InvisibleManVPN/InvisibleMan-XRayClient/releases/latest",
        },
        os_icons: {
            windows: osIcons.windows,
        },
        core_icon: coreIcons.xray,
    },
    {
        name: "GoXRay",
        description: "کلاینت دسکتاپ XRay برای macOS و لینوکس، آسان برای استفاده با آمار شبکه در لحظه.",
        download: {
            macos: "https://github.com/goxray/desktop/releases", // شامل نسخه‌های macOS و Linux
            linux: "https://github.com/goxray/desktop/releases",
        },
        os_icons: {
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.xray,
    },
    {
        name: "Exclave",
        description: "کلاینت پروکسی اندروید فورک شده از SagerNet، پشتیبانی از پلاگین‌های مختلف برای پروتکل‌ها (Hysteria 2, Mieru, Brook, Juicity, TUIC v5).",
        download: {
            android: "https://github.com/dyhkwong/Exclave/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.xray, // از هسته v2ray-core فورک شده استفاده می‌کند که نزدیک به X-Ray است
    },
    {
        name: "X-UI (NidukaAkalanka/x-ui-english)",
        description: "پنل Xray چند پروتکلی و چند کاربره با ویژگی‌های پیشرفته، قابل نصب روی لینوکس (سرور). این یک پنل مدیریت مبتنی بر وب است و رابط کاربری دسکتاپ مستقیم ندارد.",
        download: {
            linux: "https://github.com/NidukaAkalanka/x-ui-english/releases/latest",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.xray,
    },

    // کلاینت‌های Mihomo/Clash Meta
    {
        name: "Clash Verge Rev",
        description: "کلاینت GUI مدرن مبتنی بر Tauri با هسته داخلی Mihomo برای ویندوز، macOS و لینوکس.",
        download: {
            windows: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
            macos: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
            linux: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "FlClash",
        description: "کلاینت چندپلتفرمی مبتنی بر ClashMeta برای اندروید، ویندوز، macOS و لینوکس با UI ساده.",
        download: {
            windows: "https://github.com/chen08209/FlClash/releases",
            macos: "https://github.com/chen08209/FlClash/releases",
            linux: "https://github.com/chen08209/FlClash/releases",
            android: "https://github.com/chen08209/FlClash/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "ClashMi",
        description: "ابزار پراکسی برای iOS/Android/macOS/Windows بر پایه هسته Mihomo با پنل داشبورد وب.",
        download: {
            ios: "https://apps.apple.com/us/app/clash-mi/id6744321968",
            android: "https://github.com/KaringX/clashmi/releases/latest",
            macos: "https://github.com/KaringX/clashmi/releases/latest",
            windows: "https://github.com/KaringX/clashmi/releases/latest",
        },
        os_icons: {
            ios: osIcons.ios,
            android: osIcons.android,
            macos: osIcons.macos,
            windows: osIcons.windows,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "ClashMetaForAndroid",
        description: "کلاینت اختصاصی Clash Meta برای اندروید با به‌روزرسانی‌های مداوم.",
        download: {
            android: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "ClashX.Meta",
        description: "فورکی از ClashX برای macOS با پشتیبانی از پروتکل‌های مختلف و قوانین GeoIP.",
        download: {
            macos: "https://github.com/MetaCubeX/ClashX.Meta/releases",
        },
        os_icons: {
            macos: osIcons.macos,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "Mihomo-party",
        description: "کلاینت GUI Mihomo برای macOS و لینوکس با تم‌های قابل تنظیم و ادغام Sub-Store.",
        download: {
            macos: "https://github.com/mihomo-party-org/mihomo-party/releases",
            linux: "https://github.com/mihomo-party-org/mihomo-party/releases",
        },
        os_icons: {
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "GUI.for.Clash",
        description: "برنامه GUI برای مدیریت هسته‌های Mihomo در ویندوز، macOS و لینوکس.",
        download: {
            windows: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
            macos: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
            linux: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "ShellCrash",
        description: "اسکریپت مدیریتی برای Clash در محیط Shell، پشتیبانی از روترهای OpenWrt و سیستم‌های لینوکس سفارشی. این کلاینت رابط کاربری گرافیکی مستقیم ندارد و از طریق خط فرمان یا رابط وب محلی قابل مدیریت است.",
        download: {
            router_os: "https://github.com/juewuy/ShellCrash", // برای روترها
            linux: "https://github.com/juewuy/ShellCrash",
        },
        os_icons: {
            router_os: osIcons.router_os,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "Mihomo-OpenWrt",
        description: "ساخت بومی از Mihomo برای OpenWrt، با تمرکز بر ویژگی auto-redirect. این یک هسته برای روترها است و رابط کاربری گرافیکی مستقیم ندارد.",
        download: {
            router_os: "https://github.com/douglarek/vanilla-mihomo/releases",
        },
        os_icons: {
            router_os: osIcons.router_os,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "OpenClash (with Mihomo core)",
        description: "پلاگین OpenWrt که می‌تواند از هسته Mihomo استفاده کند، با رابط کاربری وب برای پیکربندی. این یک پلاگین برای روتر است و رابط کاربری آن از طریق مرورگر وب قابل دسترسی است.",
        download: {
            router_os: "https://github.com/vernesong/Openclash/releases",
        },
        os_icons: {
            router_os: osIcons.router_os,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "Mihomo Core (CLI)",
        description: "هسته اجرایی Mihomo برای لینوکس، یک ابزار خط فرمان با پیکربندی انعطاف‌پذیر. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            linux: "https://wiki.metacubex.one/en/startup/",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
    },
    {
        name: "Clash for Windows",
        description: "کلاینت قدرتمند Clash برای ویندوز با پشتیبانی از هسته‌های Clash و Clash Meta.",
        download: {
            windows: "https://github.com/Fndroid/clash_for_windows_pkg/releases",
        },
        os_icons: {
            windows: osIcons.windows,
        },
        core_icon: coreIcons.mihomo,
    },


    // کلاینت‌های Singbox
    {
        name: "GUI.for.SingBox",
        description: "رابط کاربری گرافیکی برای هسته‌های Singbox در ویندوز، macOS و لینوکس با تولید پیکربندی کامل.",
        download: {
            windows: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
            macos: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
            linux: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "sing-box for Apple platforms",
        description: "کلاینت رسمی Sing-box برای iOS، macOS و Apple tvOS با پیاده‌سازی پراکسی شفاف TUN.",
        download: {
            ios: "https://apps.apple.com/app/sing-box-vt/id6673731168", // لینک اپ استور
            macos: "https://github.com/SagerNet/sing-box/releases", // لینک گیت‌هاب برای macOS
        },
        os_icons: {
            ios: osIcons.ios,
            macos: osIcons.macos,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "sing-box for Android",
        description: "کلاینت رسمی Sing-box برای اندروید با مدیریت پیکربندی و پراکسی شفاف TUN.",
        download: {
            android: "https://github.com/SagerNet/sing-box/releases", // لینک گیت‌هاب، همچنین در Google Play و F-Droid موجود است
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "NekoBoxForAndroid",
        description: "کلاینت چند پروتکلی برای اندروید که عمدتاً از Sing-box استفاده می‌کند و قابل پیکربندی است.",
        download: {
            android: "https://github.com/nekohasekai/nekobox/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "Husi",
        description: "ادغام ابزار پروکسی برای اندروید که SagerNet/sing-box را به عنوان هسته خود می‌شناسد و از پلاگین‌های مختلف پشتیبانی می‌کند.",
        download: {
            android: "https://github.com/xchacha20-poly1305/husi/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "Throne (formerly Nekoray)",
        description: "ابزار پروکسی GUI چند پلتفرمی مبتنی بر Qt که توسط Sing-box قدرت گرفته و از طیف گسترده‌ای از پروتکل‌ها پشتیبانی می‌کند.",
        download: {
            windows: "https://github.com/throneproj/Throne/releases",
            macos: "https://github.com/throneproj/Throne/releases",
            linux: "https://github.com/throneproj/Throne/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.singbox,
    },
    {
        name: "Sing-box (Core)",
        description: "پروژه اصلی Sing-box که می‌تواند روی سیستم‌های لینوکس نصب شود و موتور زیربنایی برای بسیاری از کلاینت‌های Sing-box است. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            linux: "https://github.com/SagerNet/sing-box/releases",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.singbox,
    },
];

// تابع کمکی برای مرتب‌سازی کلاینت‌ها بر اساس اولویت سیستم عامل
const sortClients = (clients) => {
    const sorted = [];
    const processedNames = new Set();

    // 1. Clash Verge Rev
    const clashVergeRev = allClients.find(c => c.name === "Clash Verge Rev");
    if (clashVergeRev) {
        sorted.push(clashVergeRev);
        processedNames.add(clashVergeRev.name);
    }

    // 2. FlClash
    const flClash = allClients.find(c => c.name === "FlClash");
    if (flClash) {
        sorted.push(flClash);
        processedNames.add(flClash.name);
    }

    // گروه‌بندی کلاینت‌های باقی‌مانده بر اساس سیستم عامل
    const androidClients = [];
    const windowsClients = [];
    const iosClients = [];
    const macosClients = [];
    const linuxClients = [];
    const routerClients = [];
    const otherClients = []; // برای کلاینت‌هایی که در دسته‌های بالا قرار نمی‌گیرند

    allClients.forEach(client => {
        if (processedNames.has(client.name)) {
            return; // قبلاً اضافه شده است
        }

        if (client.download.android && !client.download.windows && !client.download.ios && !client.download.macos && !client.download.linux && !client.download.router_os) {
            androidClients.push(client);
        } else if (client.download.windows && !client.download.android && !client.download.ios && !client.download.macos && !client.download.linux && !client.download.router_os) {
            windowsClients.push(client);
        } else if (client.download.ios && !client.download.android && !client.download.windows && !client.download.macos && !client.download.linux && !client.download.router_os) {
            iosClients.push(client);
        } else if (client.download.macos && !client.download.android && !client.download.windows && !client.download.ios && !client.download.linux && !client.download.router_os) {
            macosClients.push(client);
        } else if (client.download.linux && !client.download.android && !client.download.windows && !client.download.ios && !client.download.macos && !client.download.router_os) {
            linuxClients.push(client);
        } else if (client.download.router_os && !client.download.android && !client.download.windows && !client.download.ios && !client.download.macos && !client.download.linux) {
            routerClients.push(client);
        } else {
            // برای کلاینت‌های چندپلتفرمی یا آنهایی که فقط یک پلتفرم خاص دارند و در دسته‌های بالا نیستند،
            // بر اساس اولویت سیستم عامل مرتب می‌کنیم.
            if (client.download.android) androidClients.push(client);
            else if (client.download.windows) windowsClients.push(client);
            else if (client.download.ios) iosClients.push(client);
            else if (client.download.macos) macosClients.push(client);
            else if (client.download.linux) linuxClients.push(client);
            else if (client.download.router_os) routerClients.push(client);
            else otherClients.push(client); // اگر هیچ پلتفرم مشخصی نداشت
        }
    });

    // مرتب‌سازی هر گروه بر اساس نام
    androidClients.sort((a, b) => a.name.localeCompare(b.name));
    windowsClients.sort((a, b) => a.name.localeCompare(b.name));
    iosClients.sort((a, b) => a.name.localeCompare(b.name));
    macosClients.sort((a, b) => a.name.localeCompare(b.name));
    linuxClients.sort((a, b) => a.name.localeCompare(b.name));
    routerClients.sort((a, b) => a.name.localeCompare(b.name));
    otherClients.sort((a, b) => a.name.localeCompare(b.name));


    // اضافه کردن گروه‌های مرتب شده به لیست نهایی
    sorted.push(...androidClients);
    sorted.push(...windowsClients);
    sorted.push(...iosClients);
    sorted.push(...macosClients);
    sorted.push(...linuxClients);
    sorted.push(...routerClients);
    sorted.push(...otherClients);

    // حذف موارد تکراری (اگر کلاینتی به چند دسته اضافه شده باشد)
    const finalSorted = [];
    const finalProcessedNames = new Set();
    sorted.forEach(client => {
        if (!finalProcessedNames.has(client.name)) {
            finalSorted.push(client);
            finalProcessedNames.add(client.name);
        }
    });

    return finalSorted;
};

// مرتب‌سازی کلاینت‌ها بر اساس اولویت درخواستی
const suggestedClients = sortClients(allClients);

// این آبجکت را برای استفاده در فایل‌های دیگر export می‌کنیم
export { suggestedClients };
