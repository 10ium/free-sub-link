// clients.js
// این فایل شامل اطلاعات کلاینت‌های پیشنهادی VPN است.
// هر کلاینت شامل نام، توضیحات، لینک‌های دانلود، آیکون‌های سیستم عامل و آیکون هسته است.

// آیکون‌های سیستم عامل
const osIcons = {
    android: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/android.svg",
    ios: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg",
    windows: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg",
    macos: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/macos.svg",
    linux: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg",
    router_os: "https://wiki.pine64.org/images/8/83/Openwrt_logo_square.png",
    tvos: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/appletv.svg",
};

// آیکون‌های هسته (محدود شده به ۳ هسته اصلی)
const coreIcons = {
    xray: "https://avatars.githubusercontent.com/u/71564206?s=200&v=4",
    mihomo: "https://avatars.githubusercontent.com/u/84378451?s=200&v=4",
    singbox: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sing-box.svg/555px-Sing-box.svg.png",
};

// لیست کامل کلاینت‌ها
const allClients = [
    // --- کلاینت‌های Xray / V2ray (ترکیب شده) ---
    {
        name: "v2rayN",
        description: "کلاینت محبوب Xray برای ویندوز و اندروید با پشتیبانی از هسته‌های Xray و v2fly. متن‌باز و رایگان.",
        download: {
            windows: "https://github.com/2dust/v2rayN/releases",
            android: "https://github.com/2dust/v2rayNG/releases",
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
    {
        name: "V2RayU",
        description: "رابط کاربری گرافیکی متن‌باز و رایگان برای Xray در macOS با قابلیت مدیریت چند کاربره و آمار ترافیک.",
        download: {
            // اصلاح شده: لینک به مخزن رسمی V2RayU
            macos: "https://github.com/yanue/V2rayU/releases", 
        },
        os_icons: {
            macos: osIcons.macos,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
    {
        name: "v2rayA",
        description: "کلاینت GUI وب متن‌باز و رایگان برای Project V، قابل استقرار روی روتر/NAS و پشتیبانی از پروکسی شفاف جهانی (لینوکس) و پروکسی سیستمی (ویندوز/macOS). رابط کاربری آن از طریق مرورگر وب قابل دسترسی است.",
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
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
    {
        name: "V2RayX",
        description: "رابط کاربری گرافیکی ساده متن‌باز و رایگان برای Xray در macOS، با قابلیت مدیریت پروکسی سیستم و ادغام نوار منو.",
        download: {
            macos: "https://github.com/Cenmrev/V2RayX/releases",
        },
        os_icons: {
            macos: osIcons.macos,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
    {
        name: "Xray Core (CLI)", 
        description: "هسته فعال Xray-core، یک ابزار خط فرمان متن‌باز و رایگان با پشتیبانی از پروتکل‌های پیشرفته مانند Reality و VLESS. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            linux: "https://github.com/XTLS/Xray-core/releases", 
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray" 
    },
    {
        name: "NapsternetV",
        description: "کلاینت پیشرفته Xray و SSH VPN متن‌باز و رایگان برای اندروید و iOS با قابلیت سفارشی‌سازی بالا از طریق فایل‌های پیکربندی .npv. بدون تبلیغات.",
        download: {
            android: "https://github.com/NapsternetV-Fyp/NapsternetV-APK/releases/",
            ios: "https://apps.apple.com/us/app/npv-tunnel/id1629465476", // Npv Tunnel همان NapsternetV است.
        },
        os_icons: {
            android: osIcons.android,
            ios: osIcons.ios,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
    {
        name: "v2box",
        description: "کلاینت VPN رایگان برای پلتفرم‌های Apple (iOS) با پشتیبانی از پروتکل‌های Shadowsocks, Xray, Vmess, Trojan, SSH, Reality (xray), Vless Vision. این برنامه متن‌باز نیست.",
        download: {
            ios: "https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690?platform=iphone",
        },
        os_icons: {
            ios: osIcons.ios,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray / V2ray"
    },
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
        core_type: "Xray"
    },
    {
        name: "GoXRay",
        description: "کلاینت دسکتاپ XRay متن‌باز و رایگان برای macOS و لینوکس، آسان برای استفاده با آمار شبکه در لحظه.",
        download: {
            macos: "https://github.com/goxray/desktop/releases", // شامل نسخه‌های macOS و Linux
            linux: "https://github.com/goxray/desktop/releases",
        },
        os_icons: {
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Exclave",
        description: "کلاینت پراکسی اندروید متن‌باز و رایگان فورک شده از SagerNet، پشتیبانی از پلاگین‌های مختلف برای پروتکل‌ها (Hysteria 2, Mieru, Brook, Juicity, TUIC v5).",
        download: {
            android: "https://github.com/dyhkwong/Exclave/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Begzar",
        description: "کلاینت متن‌باز و رایگان برای ویندوز و اندروید، با هدف سادگی و پشتیبانی از پروتکل‌های Xray.",
        download: {
            windows: "https://github.com/Begzar/BegzarWindows/releases/latest",
            android: "https://github.com/Begzar/BegzarApp/releases/latest"
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "FoXray",
        description: "کلاینت قدرتمند و رایگان برای iOS و macOS با پشتیبانی از هسته Xray و پروتکل‌های مدرن مانند Reality.",
        download: {
            ios: "https://apps.apple.com/us/app/foxray/id6448898396",
            macos: "https://apps.apple.com/us/app/foxray/id6448898396?platform=mac"
        },
        os_icons: {
            ios: osIcons.ios,
            macos: osIcons.macos
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Streisand",
        description: "کلاینت VPN رایگان و باکیفیت برای پلتفرم‌های اپل (iOS و macOS) با پشتیبانی از پروتکل‌های Shadowsocks و Xray (Reality).",
        download: {
            ios: "https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone"
        },
        os_icons: {
            ios: osIcons.ios
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "V2Lite",
        description: "کلاینت VPN سبک و رایگان برای iOS با تمرکز بر پروتکل‌های Xray/Vmess، برای اتصال سریع و آسان.",
        download: {
            ios: "https://apps.apple.com/us/app/v2lite-fast-and-unlimited/id6444585377?platform=iphone"
        },
        os_icons: {
            ios: osIcons.ios
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "ZedSecure",
        description: "کلاینت دسکتاپ متن‌باز و رایگان برای ویندوز، با هدف ارائه یک رابط کاربری ساده و پایدار برای هسته Xray.",
        download: {
            windows: "https://github.com/CluvexStudio/ZedSecure/releases/latest"
        },
        os_icons: {
            windows: osIcons.windows
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "PurVPN",
        description: "کلاینت رایگان و متن‌باز با رابط کاربری ساده برای ویندوز (Purwin) و اندروید، بر پایه هسته Xray.",
        download: {
            android: "https://github.com/davudsedft/purvpn/releases",
            windows: "https://github.com/davudsedft/purwin/releases"
        },
        os_icons: {
            android: osIcons.android,
            windows: osIcons.windows
        },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "ProxyCloud",
        description: "ابزار پراکسی متن‌باز و رایگان با رابط کاربری ساده برای ویندوز و اندروید، با هدف فراهم کردن اتصال پایدار.",
        download: {
            windows: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest",
            android: "https://github.com/code3-dev/ProxyCloud/releases/latest"
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android
        },
        core_icon: coreIcons.xray, 
        core_type: "Xray"
    },


    // --- کلاینت‌های Mihomo/Clash Meta ---
    {
        name: "Clash Verge Rev",
        description: "کلاینت GUI مدرن مبتنی بر Tauri متن‌باز و رایگان با هسته داخلی Mihomo برای ویندوز، macOS و لینوکس.",
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
        core_type: "Mihomo"
    },
    {
        name: "FlClash",
        description: "کلاینت چندپلتفرمی مبتنی بر ClashMeta متن‌باز و رایگان برای اندروید، ویندوز، macOS و لینوکس با UI ساده.",
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
        core_type: "Mihomo"
    },
    {
        name: "ClashMi",
        description: "ابزار پراکسی متن‌باز و رایگان برای iOS/Android/macOS/Windows بر پایه هسته Mihomo با پنل داشبورد وب.",
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
        core_type: "Mihomo"
    },
    {
        name: "ClashMetaForAndroid",
        description: "کلاینت اختصاصی Clash Meta متن‌باز و رایگان برای اندروید با به‌روزرسانی‌های مداوم.",
        download: {
            android: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "ClashX.Meta",
        description: "فورکی از ClashX متن‌باز و رایگان برای macOS با پشتیبانی از پروتکل‌های مختلف و قوانین GeoIP.",
        download: {
            macos: "https://github.com/MetaCubeX/ClashX.Meta/releases",
        },
        os_icons: {
            macos: osIcons.macos,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo-party",
        description: "کلاینت GUI Mihomo متن‌باز و رایگان برای ویندوز، macOS و لینوکس با تم‌های قابل تنظیم و ادغام Sub-Store.",
        download: {
            windows: "https://mihomo.party/download/windows", // لینک‌های مستقیم‌تر
            macos: "https://mihomo.party/download/macos",
            linux: "https://mihomo.party/download/linux",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "GUI.for.Clash",
        description: "برنامه GUI متن‌باز و رایگان برای مدیریت هسته‌های Mihomo در ویندوز، macOS و لینوکس.",
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
        core_type: "Mihomo"
    },
    {
        name: "ShellCrash",
        description: "اسکریپت مدیریتی متن‌باز و رایگان برای Clash در محیط Shell، پشتیبانی از روترهای OpenWrt و سیستم‌های لینوکس سفارشی. این کلاینت رابط کاربری گرافیکی مستقیم ندارد و از طریق خط فرمان یا رابط وب محلی قابل مدیریت است.",
        download: {
            router_os: "https://github.com/juewuy/ShellCrash", // برای روترها
            linux: "https://github.com/juewuy/ShellCrash",
        },
        os_icons: {
            router_os: osIcons.router_os,
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo-OpenWrt",
        description: "ساخت بومی متن‌باز و رایگان از Mihomo برای OpenWrt، با تمرکز بر ویژگی auto-redirect. این یک هسته برای روترها است و رابط کاربری گرافیکی مستقیم ندارد.",
        download: {
            router_os: "https://github.com/douglarek/vanilla-mihomo/releases",
        },
        os_icons: {
            router_os: osIcons.router_os,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "OpenClash (with Mihomo core)",
        description: "پلاگین OpenWrt متن‌باز و رایگان که می‌تواند از هسته Mihomo استفاده کند، با رابط کاربری وب برای پیکربندی. این یک پلاگین برای روتر است و رابط کاربری آن از طریق مرورگر وب قابل دسترسی است.",
        download: {
            router_os: "https://github.com/vernesong/Openclash/releases",
        },
        os_icons: {
            router_os: osIcons.router_os,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo Core (CLI)",
        description: "هسته اجرایی Mihomo متن‌باز و رایگان برای لینوکس، یک ابزار خط فرمان با پیکربندی انعطاف‌پذیر. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            // اصلاح شده: لینک به صفحه رسمی انتشار هسته Mihomo
            linux: "https://github.com/MetaCubeX/mihomo/releases",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },

    // --- کلاینت‌های Singbox ---
    {
        name: "GUI.for.SingBox",
        description: "رابط کاربری گرافیکی متن‌باز و رایگان برای هسته‌های Singbox در ویندوز، macOS و لینوکس با تولید پیکربندی کامل.",
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
        core_type: "Singbox"
    },
    {
        name: "sing-box for Apple platforms",
        description: "کلاینت رسمی Sing-box متن‌باز و رایگان برای iOS، macOS و Apple tvOS با پیاده‌سازی پراکسی شفاف TUN. این برنامه در اپ استور قابل دسترسی است.",
        download: {
            ios: "https://apps.apple.com/app/sing-box-vt/id6673731168", // لینک اپ استور
            macos: "https://apps.apple.com/app/sing-box-vt/id6673731168", 
            tvos: "https://apps.apple.com/app/sing-box-vt/id6673731168",
        },
        os_icons: {
            ios: osIcons.ios,
            macos: osIcons.macos,
            tvos: osIcons.tvos,
        },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "sing-box for Android",
        description: "کلاینت رسمی Sing-box متن‌باز و رایگان برای اندروید با مدیریت پیکربندی و پراکسی شفاف TUN.",
        download: {
            android: "https://github.com/SagerNet/sing-box/releases", // شامل APK
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "NekoBoxForAndroid",
        description: "کلاینت چند پروتکلی متن‌باز و رایگان برای اندروید که عمدتاً از Sing-box استفاده می‌کند و قابل پیکربندی است.",
        download: {
            android: "https://github.com/MatsuriDayo/NekoBoxForAndroid/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Husi",
        description: "ادغام ابزار پروکسی متن‌باز و رایگان برای اندروید که SagerNet/sing-box را به عنوان هسته خود می‌شناسد و از پلاگین‌های مختلف پشتیبانی می‌کند.",
        download: {
            android: "https://github.com/xchacha20-poly1305/husi/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Throne (formerly Nekoray)",
        description: "ابزار پروکسی GUI چند پلتفرمی متن‌باز و رایگان مبتنی بر Qt که توسط Sing-box قدرت گرفته و از طیف گسترده‌ای از پروتکل‌ها پشتیبانی می‌کند.",
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
        core_type: "Singbox"
    },
    {
        name: "Sing-box (Core)",
        description: "پروژه اصلی Sing-box متن‌باز و رایگان که می‌تواند روی سیستم‌های لینوکس نصب شود و موتور زیربنایی برای بسیاری از کلاینت‌های Sing-box است. این کلاینت رابط کاربری گرافیکی ندارد و برای کاربران پیشرفته مناسب است.",
        download: {
            linux: "https://github.com/SagerNet/sing-box/releases",
        },
        os_icons: {
            linux: osIcons.linux,
        },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Karing",
        description: "ابزار پروکسی قدرتمند و چندپلتفرمی متن‌باز و رایگان با پشتیبانی از قوانین مسیریابی برای Clash/Sing-box. از هسته Sing-box استفاده می‌کند.",
        download: {
            windows: "https://github.com/KaringX/karing/releases/latest",
            android: "https://github.com/KaringX/karing/releases/latest",
            ios: "https://apps.apple.com/us/app/karing/id6472431552", // App Store link
            macos: "https://github.com/KaringX/karing/releases/latest",
            tvos: "https://apps.apple.com/us/app/karing/id6472431552", // App Store link for tvOS
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android,
            ios: osIcons.ios,
            macos: osIcons.macos,
            tvos: osIcons.tvos,
        },
        core_icon: coreIcons.singbox, 
        core_type: "Singbox"
    },
    {
        name: "DefyX",
        description: "یک VPN با تمرکز بر حریم خصوصی و امنیت برای اندروید و iOS که از فناوری‌های ضد فیلترینگ مدرن استفاده می‌کند. توسط Unbound Technology توسعه یافته.",
        download: {
            "android": "https://play.google.com/store/apps/details?id=de.unboundtech.defyxvpn",
            "ios": "https://apps.apple.com/gb/app/defyx/id6746811872"
        },
        os_icons: {
            "android": osIcons.android,
            "ios": osIcons.ios
        },
        core_icon: coreIcons.singbox, 
        core_type: "Singbox"
    },
    

    // --- کلاینت‌های Multi-Core ---
    {
        name: "Hiddify-app",
        description: "کلاینت پراکسی خودکار چندپلتفرمی متن‌باز و رایگان با پشتیبانی گسترده از پروتکل‌ها و هسته‌ها (Xray, Singbox, Clash Meta).",
        download: {
            windows: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Windows-Setup-x64.exe",
            macos: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-MacOS.dmg",
            linux: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Linux-x64.AppImage",
            android: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Android-universal.apk",
            ios: "https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532",
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios,
        },
        core_icon: coreIcons.singbox,
        core_type: "Multi-Core"
    },
    {
        name: "Surfing (Magisk Module)",
        description: "ماژول Magisk/Kernelsu/APatch متن‌باز و رایگان برای اندروید با پشتیبانی از هسته‌های Xray, Clash/Mihomo, Singbox و Hysteria. این یک ماژول سیستمی است و رابط کاربری گرافیکی مستقیم ندارد.",
        download: {
            android: "https://github.com/MoGuangYu/Surfing/releases",
        },
        os_icons: {
            android: osIcons.android,
        },
        core_icon: coreIcons.singbox,
        core_type: "Multi-Core"
    },
    {
        name: "Oblivion",
        description: "کلاینت VPN مدرن و متن‌باز با رابط کاربری فارسی و تمرکز بر پروتکل‌های مقاوم (شامل Singbox/Xray). توسعه‌یافته توسط bepass-org.",
        download: {
            windows: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            macos: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            linux: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            android: "https://github.com/bepass-org/oblivion/releases/latest"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android
        },
        core_icon: coreIcons.singbox,
        core_type: "Multi-Core"
    },
    {
        name: "MahsaNG",
        description: "کلاینت متن‌باز و چندپروتکلی ایرانی با پشتیبانی کامل از پروتکل‌های مقاوم (شامل Xray و Singbox).",
        download: {
            android: "https://github.com/GFW-knocker/MahsaNG/releases/latest"
        },
        os_icons: {
            android: osIcons.android
        },
        core_icon: coreIcons.singbox,
        core_type: "Multi-Core"
    },
    {
        name: "Freedom Guard",
        description: "کلاینت متن‌باز و رایگان با پشتیبانی از پروتکل‌های مقاوم ضد فیلترینگ، شامل نسخه موبایل (FG_MOBILE) و دسکتاپ.",
        download: {
            windows: "https://github.com/Freedom-Guard/Freedom-Guard/releases/latest",
            android: "https://github.com/Freedom-Guard/FG_MOBILE/releases/latest"
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android
        },
        core_icon: coreIcons.xray, 
        core_type: "Multi-Core"
    },
    {
        name: "Fair VPN",
        description: "کلاینت VPN رایگان و متن‌باز برای iOS و macOS، با پشتیبانی از Shadowsocks، Vmess، VLESS و WireGuard. رابط کاربری ساده و کاربرپسند.",
        download: {
            ios: "https://apps.apple.com/us/app/fair-vpn/id1533873488?platform=iphone",
            macos: "https://apps.apple.com/us/app/fair-vpn/id1533873488?platform=mac"
        },
        os_icons: {
            ios: osIcons.ios,
            macos: osIcons.macos
        },
        core_icon: coreIcons.xray, 
        core_type: "Multi-Core"
    },


    // --- کلاینت‌های Other/Generic (عمومی/DNS/VPN‌های تجاری) ---
    {
        name: "Outline",
        description: "کلاینت متن‌باز و رایگان Shadowsocks، توسعه‌یافته توسط Jigsaw (زیرمجموعه آلفابت). امنیت ساده، سریع و با قابلیت راه‌اندازی سرور شخصی.",
        download: {
            "windows": "https://getoutline.org/get-started#step-3",
            "macos": "https://apps.apple.com/us/app/outline-app/id1356177741",
            "linux": "https://getoutline.org/get-started#step-3",
            "android": "https://play.google.com/store/apps/details?id=org.outline.android.client",
            "ios": "https://apps.apple.com/us/app/outline-app/id1356177741"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "WireGuard",
        description: "پروتکل VPN مدرن و متن‌باز با عملکرد بالا و امنیت قوی. این کلاینت رسمی بر پایه هسته WireGuard است.",
        download: {
            "windows": "https://www.wireguard.com/install/",
            "macos": "https://apps.apple.com/us/app/wireguard/id1441195209?platform=mac",
            "linux": "https://www.wireguard.com/install/",
            "android": "https://play.google.com/store/apps/details?id=com.wireguard.android",
            "ios": "https://apps.apple.com/us/app/wireguard/id1441195209?platform=iphone"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "Psiphon",
        description: "ابزار ضد سانسور متن‌باز و رایگان با پروتکل‌های تونلینگ اختصاصی (SSH+, L2TP/IPSec) برای عبور از فیلترینگ شدید. بسیار محبوب در ایران.",
        download: {
            "windows": "https://psiphon.ca/psiphon3.exe",
            "android": "https://play.google.com/store/apps/details?id=com.psiphon3.subscription",
            "ios": "https://apps.apple.com/app/psiphon/id1276263909"
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "Geph",
        description: "یک شبکه خصوصی مجازی متن‌باز و غیرمتمرکز که برای مقاومت در برابر سانسور شدید طراحی شده است. از چندین پروتکل توربو اختصاصی استفاده می‌کند.",
        download: {
            "windows": "https://dl.geph.io/geph-releases/windows-stable/latest/geph-windows-setup.exe",
            "macos": "https://dl.geph.io/geph-releases/macos-stable/latest/geph-macos.dmg",
            "linux": "https://dl.geph.io/geph-releases/linux-stable/latest/Geph-x86_64.flatpak",
            "android": "https://play.google.com/store/apps/details?id=io.geph.android",
            "ios": "https://apps.apple.com/us/app/geph/id1638148282"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "Cloudflare WARP",
        description: "یک کلاینت VPN رایگان و اختصاصی از Cloudflare که از پروتکل WireGuard اصلاح شده (Warp) برای افزایش حریم خصوصی و سرعت استفاده می‌کند.",
        download: {
            "windows": "https://1111-releases.cloudflareclient.com/win/latest",
            "macos": "https://1111-releases.cloudflareclient.com/mac/latest",
            "linux": "https://pkg.cloudflareclient.com/",
            "android": "https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone",
            "ios": "https://itunes.apple.com/us/app/1-1-1-1-faster-internet/id1423538627"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "HTTP Injector",
        description: "ابزار حرفه‌ای تونلینگ VPN برای iOS، با تمرکز بر پروتکل‌های SSH، DNS و قابلیت سفارشی‌سازی درخواست‌های HTTP برای دور زدن فیلترینگ.",
        download: {
            "ios": "https://apps.apple.com/us/app/http-injector/id1659992827?platform=iphone"
        },
        os_icons: {
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "ProtonVPN",
        description: "سرویس VPN متن‌باز و امن با تمرکز بر حریم خصوصی، ارائه‌دهنده کلاینت‌های رایگان برای پلتفرم‌های مختلف با استفاده از پروتکل‌های استاندارد (مانند WireGuard و OpenVPN).",
        download: {
            "windows": "https://protonvpn.com/download-windows",
            "macos": "https://protonvpn.com/download-macos",
            "linux": "https://protonvpn.com/download-linux",
            "android": "https://play.google.com/store/apps/details?id=ch.protonvpn.android",
            "ios": "https://protonvpn.com/download-ios"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "Windscribe",
        description: "سرویس VPN رایگان (با محدودیت) و باکیفیت که کلاینت‌هایی برای ویندوز، macOS، اندروید و iOS ارائه می‌دهد. از پروتکل‌های استاندارد برای حفظ حریم خصوصی استفاده می‌کند.",
        download: {
            "windows": "https://windscribe.com/install/desktop/windows",
            "macos": "https://windscribe.com/install/desktop/osx",
            "android": "https://play.google.com/store/apps/details?id=com.windscribe.vpn",
            "ios": "https://windscribe.com/install/mobile/ios"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "AmneziaVPN",
        description: "سرویس VPN متن‌باز و رایگان با تمرکز بر امنیت خود-میزبان. از پروتکل‌های استاندارد (OpenVPN) و پروتکل اختصاصی AmneziaWG استفاده می‌کند.",
        download: {
            "windows": "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            "macos": "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            "linux": "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            "android": "https://play.google.com/store/apps/details?id=org.amnezia.vpn",
            "ios": "https://apps.apple.com/us/app/amneziavpn/id1600529900"
        },
        os_icons: {
            windows: osIcons.windows,
            macos: osIcons.macos,
            linux: osIcons.linux,
            android: osIcons.android,
            ios: osIcons.ios
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "WireSock",
        description: "کلاینت اختصاصی WireGuard برای ویندوز، با قابلیت نصب به عنوان درایور WFP برای عملکرد بهتر و امنیت. این ابزار بر WireGuard متکی است.",
        download: {
            "windows": "https://www.wiresock.net/wiresock-secure-connect/download"
        },
        os_icons: {
            windows: osIcons.windows
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "WireGuard AutoTunnel",
        description: "ابزار خودکارسازی برای مدیریت پروفایل‌های WireGuard در اندروید، با قابلیت فعال‌سازی خودکار تونل بر اساس قوانین شبکه.",
        download: {
            "android": "https://play.google.com/store/apps/details?id=com.zaneschepke.wireguardautotunnel"
        },
        os_icons: {
            android: osIcons.android
        },
        core_icon: "", 
        core_type: "Other/Generic"
    },
    {
        name: "Freegate",
        description: "ابزار ضد سانسور قدیمی و رایگان، عمدتاً برای ویندوز و اندروید، با استفاده از پروتکل‌های اختصاصی (مانند Dynagate) برای دور زدن فیلترینگ.",
        download: {
            windows: "https://www.dynamicinternettechnology.com", // لینک توزیع اصلی
            android: "https://www.dynamicinternettechnology.com",
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android,
        },
        core_icon: "",
        core_type: "Other/Generic"
    },
    {
        name: "DNSveil",
        description: "ابزار متن‌باز و رایگان برای ویندوز و اندروید با هدف دور زدن فیلترینگ DNS و افزایش امنیت با استفاده از DoH، DoT و پراکسی‌های Socks5.",
        download: {
            // اصلاح شده: ادغام لینک‌های ویندوز و اندروید
            windows: "https://github.com/msasanmh/DNSveil",
            android: "https://github.com/msasanmh/AndroidDNSveilTools/releases"
        },
        os_icons: {
            windows: osIcons.windows,
            android: osIcons.android
        },
        core_icon: "", 
        core_type: "DNS Tools/General"
    },
    {
        name: "Intra",
        description: "ابزار رایگان و متن‌باز توسط Jigsaw (توسعه‌دهنده Outline) برای اندروید با هدف محافظت در برابر حملات دستکاری DNS و دور زدن سانسور DNS از طریق DoH.",
        download: {
            "android": "https://play.google.com/store/apps/details?id=app.intra"
        },
        os_icons: {
            android: osIcons.android
        },
        core_icon: "", 
        core_type: "DNS Tools/General"
    },
    {
        name: "TordnsCrypt",
        description: "ابزار متن‌باز برای اندروید، با هدف محافظت از ترافیک DNS با استفاده از DNSCrypt و افزایش حریم خصوصی از طریق شبکه‌های Tor.",
        download: {
            "android": "https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp"
        },
        os_icons: {
            android: osIcons.android
        },
        core_icon: "", 
        core_type: "DNS Tools/General"
    },
];

// لیست کلاینت‌های پیشنهادی (برای نمایش به عنوان چک باکس یا باکس پیشنهادی)
const suggestedApps = [
    "FlClash",
    "Clash Verge Rev",
    "MahsaNG",
    "Psiphon",
    "ProtonVPN",
    "Geph",
    "Throne (formerly Nekoray)",
    "Husi",
    "Exclave",
    "v2rayN",
    "DNSveil",
    "Intra",
    "TordnsCrypt"
];


// تابع کمکی برای مرتب‌سازی کلاینت‌ها بر اساس اولویت سیستم عامل
const sortClients = (clients) => {
    const sorted = [];
    const processedNames = new Set();

    // 1. Clash Verge Rev
    const clashVergeRev = clients.find(c => c.name === "Clash Verge Rev");
    if (clashVergeRev) {
        sorted.push(clashVergeRev);
        processedNames.add(clashVergeRev.name);
    }

    // 2. FlClash
    const flClash = clients.find(c => c.name === "FlClash");
    if (flClash) {
        sorted.push(flClash);
        processedNames.add(flClash.name);
    }

    // گروه‌بندی کلاینت‌های باقی‌مانده بر اساس اولویت پلتفرم
    const androidOnlyClients = [];
    const windowsOnlyClients = [];
    const iosOnlyClients = [];
    const macosOnlyClients = [];
    const linuxOnlyClients = [];
    const routerOnlyClients = [];
    const multiPlatformClients = []; // برای کلاینت‌هایی که چند پلتفرم دارند

    clients.forEach(client => {
        if (processedNames.has(client.name)) {
            return; // قبلاً اضافه شده است
        }

        const hasAndroid = !!client.download.android;
        const hasWindows = !!client.download.windows;
        const hasIos = !!client.download.ios;
        const hasMacos = !!client.download.macos;
        const hasLinux = !!client.download.linux;
        const hasRouter = !!client.download.router_os;
        const hasTvOS = !!client.download.tvos;

        const platformCount = [hasAndroid, hasWindows, hasIos, hasMacos, hasLinux, hasRouter, hasTvOS].filter(Boolean).length;

        if (platformCount === 1) {
            if (hasAndroid) androidOnlyClients.push(client);
            else if (hasWindows) windowsOnlyClients.push(client);
            else if (hasIos) iosOnlyClients.push(client);
            else if (hasMacos) macosOnlyClients.push(client);
            else if (hasLinux) linuxOnlyClients.push(client);
            else if (hasRouter) routerOnlyClients.push(client);
        } else if (platformCount > 1) {
            multiPlatformClients.push(client);
        }
    });

    // مرتب‌سازی کلاینت‌های چندپلتفرمی بر اساس اولویت پلتفرم (Android > Windows > iOS > macOS > Linux > Router > TvOS)
    multiPlatformClients.sort((a, b) => {
        const platformOrder = ['android', 'windows', 'ios', 'macos', 'linux', 'router_os', 'tvos'];
        let aFirstPlatformIndex = -1;
        let bFirstPlatformIndex = -1;

        for (let i = 0; i < platformOrder.length; i++) {
            if (a.download[platformOrder[i]] && aFirstPlatformIndex === -1) aFirstPlatformIndex = i;
            if (b.download[platformOrder[i]] && bFirstPlatformIndex === -1) bFirstPlatformIndex = i;
        }

        if (aFirstPlatformIndex !== bFirstPlatformIndex) {
            return aFirstPlatformIndex - bFirstPlatformIndex;
        }
        return a.name.localeCompare(b.name); // اگر اولویت پلتفرم یکسان بود، بر اساس نام مرتب کن
    });


    // مرتب‌سازی هر گروه "فقط" بر اساس نام
    androidOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    windowsOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    iosOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    macosOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    linuxOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    routerOnlyClients.sort((a, b) => a.name.localeCompare(b.name));


    // اضافه کردن گروه‌های مرتب شده به لیست نهایی با اولویت درخواستی
    // ترتیب: Clash Verge Rev, FlClash, سپس کلاینت‌های چندپلتفرمی، سپس تک پلتفرمی‌ها
    
    // اضافه کردن کلاینت‌های چندپلتفرمی
    sorted.push(...multiPlatformClients);

    // اضافه کردن کلاینت‌های تک پلتفرمی به ترتیب
    sorted.push(...androidOnlyClients);
    sorted.push(...windowsOnlyClients);
    sorted.push(...iosOnlyClients);
    sorted.push(...macosOnlyClients);
    sorted.push(...linuxOnlyClients);
    sorted.push(...routerOnlyClients);


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
const suggestedClients = sortClients(allClients.map(client => {
    // برای کلاینت‌های V2ray/Xray قدیمی که هنوز از نام V2Ray استفاده می‌کنند، core_type را حفظ می‌کنیم.
    if (client.core_type === "Xray / V2ray") {
        return {
            ...client,
            core_icon: coreIcons.xray
        };
    }
    return client;
}));

// این آبجکت‌ها را برای استفاده در فایل‌های دیگر export می‌کنیم
export { suggestedClients, osIcons, coreIcons, suggestedApps };