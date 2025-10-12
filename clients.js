// clients.js
// این فایل شامل اطلاعات کلاینت‌های پیشنهادی VPN است.

// آیکون‌های سیستم عامل
const osIcons = {
    android: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/android.svg",
    ios: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg",
    windows: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg",
    macos: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/macos.svg",
    linux: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg",
    router_os: "https://wiki.pine64.org/images/8/83/Openwrt_logo_square.png",
    tvos: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/appletv.svg",
    suggested: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/star.svg" // آیکون برای گزینه پیشنهادی
};

// آیکون‌های هسته
const coreIcons = {
    xray: "https://avatars.githubusercontent.com/u/71564206?s=200&v=4",
    mihomo: "https://avatars.githubusercontent.com/u/84378451?s=200&v=4",
    singbox: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sing-box.svg/555px-Sing-box.svg.png",
    multi_core: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnome.svg",
    other: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/circle.svg",
};

// **مهم:** گزینه‌های فیلتر سیستم عامل برای استفاده در UI
// این لیست شامل یک گزینه مجازی به نام 'suggested' است.
const osFilterOptions = [
    { key: 'suggested', name: 'پیشنهادی', icon: osIcons.suggested },
    { key: 'windows', name: 'ویندوز', icon: osIcons.windows },
    { key: 'android', name: 'اندروید', icon: osIcons.android },
    { key: 'ios', name: 'آی‌اواس', icon: osIcons.ios },
    { key: 'macos', name: 'مک', icon: osIcons.macos },
    { key: 'linux', name: 'لینوکس', icon: osIcons.linux },
    { key: 'router_os', name: 'روتر', icon: osIcons.router_os },
];

// لیست نام کلاینت‌های پیشنهادی
const suggestedAppNames = [
    "FlClash", "Clash Verge Rev", "MahsaNG", "Psiphon", "ProtonVPN",
    "Geph", "Throne (formerly Nekoray)", "Husi", "Exclave", "v2rayN",
    "DNSveil", "Intra", "TordnsCrypt"
];

// لیست کامل کلاینت‌ها (با core_type استاندارد شده)
const allClients = [
    // --- دسته: Xray ---
    {
        name: "v2rayN",
        description: "کلاینت محبوب Xray برای ویندوز و اندروید با پشتیبانی از هسته‌های Xray و v2fly. متن‌باز و رایگان.",
        download: {
            windows: "https://github.com/2dust/v2rayN/releases",
            android: "https://github.com/2dust/v2rayNG/releases",
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "V2RayU",
        description: "رابط کاربری گرافیکی متن‌باز و رایگان برای Xray در macOS با قابلیت مدیریت چند کاربره و آمار ترافیک.",
        download: { macos: "https://github.com/yanue/V2rayU/releases" },
        os_icons: { macos: osIcons.macos },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "v2rayA",
        description: "کلاینت GUI وب متن‌باز و رایگان برای Project V، قابل استقرار روی روتر/NAS.",
        download: {
            windows: "https://github.com/v2rayA/v2rayA/releases",
            macos: "https://github.com/v2rayA/v2rayA/releases",
            linux: "https://github.com/v2rayA/v2rayA/releases",
            router_os: "https://github.com/v2rayA/v2rayA/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, router_os: osIcons.router_os },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "V2RayX",
        description: "رابط کاربری گرافیکی ساده متن‌باز و رایگان برای Xray در macOS.",
        download: { macos: "https://github.com/Cenmrev/V2RayX/releases" },
        os_icons: { macos: osIcons.macos },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Xray Core (CLI)",
        description: "هسته فعال Xray-core، یک ابزار خط فرمان متن‌باز و رایگان برای کاربران پیشرفته.",
        download: { linux: "https://github.com/XTLS/Xray-core/releases" },
        os_icons: { linux: osIcons.linux },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "NapsternetV",
        description: "کلاینت پیشرفته Xray و SSH VPN متن‌باز و رایگان برای اندروید و iOS.",
        download: {
            android: "https://github.com/NapsternetV-Fyp/NapsternetV-APK/releases/",
            ios: "https://apps.apple.com/us/app/npv-tunnel/id1629465476",
        },
        os_icons: { android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "v2box",
        description: "کلاینت VPN رایگان برای iOS با پشتیبانی از پروتکل‌های Xray. این برنامه متن‌باز نیست.",
        download: { ios: "https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690?platform=iphone" },
        os_icons: { ios: osIcons.ios },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Invisible Man XRay",
        description: "کلاینت رایگان و متن‌باز XRay برای ویندوز با رابط کاربری ساده.",
        download: { windows: "https://github.com/InvisibleManVPN/InvisibleMan-XRayClient/releases/latest" },
        os_icons: { windows: osIcons.windows },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "GoXRay",
        description: "کلاینت دسکتاپ XRay متن‌باز و رایگان برای macOS و لینوکس.",
        download: {
            macos: "https://github.com/goxray/desktop/releases",
            linux: "https://github.com/goxray/desktop/releases",
        },
        os_icons: { macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Exclave",
        description: "کلاینت پراکسی اندروید متن‌باز و رایگان فورک شده از SagerNet.",
        download: { android: "https://github.com/dyhkwong/Exclave/releases" },
        os_icons: { android: osIcons.android },
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
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "FoXray",
        description: "کلاینت قدرتمند و رایگان برای iOS و macOS با پشتیبانی از هسته Xray و پروتکل‌های مدرن.",
        download: {
            ios: "https://apps.apple.com/us/app/foxray/id6448898396",
            macos: "https://apps.apple.com/us/app/foxray/id6448898396?platform=mac"
        },
        os_icons: { ios: osIcons.ios, macos: osIcons.macos },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "Streisand",
        description: "کلاینت VPN رایگان برای iOS با پشتیبانی از پروتکل‌های Shadowsocks و Xray (Reality).",
        download: { ios: "https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone" },
        os_icons: { ios: osIcons.ios },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "V2Lite",
        description: "کلاینت VPN سبک و رایگان برای iOS با تمرکز بر پروتکل‌های Xray/Vmess.",
        download: { ios: "https://apps.apple.com/us/app/v2lite-fast-and-unlimited/id6444585377?platform=iphone" },
        os_icons: { ios: osIcons.ios },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "ZedSecure",
        description: "کلاینت دسکتاپ متن‌باز و رایگان برای ویندوز با رابط کاربری ساده برای هسته Xray.",
        download: { windows: "https://github.com/CluvexStudio/ZedSecure/releases/latest" },
        os_icons: { windows: osIcons.windows },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "PurVPN",
        description: "کلاینت رایگان و متن‌باز با رابط کاربری ساده برای ویندوز و اندروید، بر پایه هسته Xray.",
        download: {
            android: "https://github.com/davudsedft/purvpn/releases",
            windows: "https://github.com/davudsedft/purwin/releases"
        },
        os_icons: { android: osIcons.android, windows: osIcons.windows },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },
    {
        name: "ProxyCloud",
        description: "ابزار پراکسی متن‌باز و رایگان با رابط کاربری ساده برای ویندوز و اندروید.",
        download: {
            windows: "https://github.com/code3-dev/ProxyCloud-GUI/releases/latest",
            android: "https://github.com/code3-dev/ProxyCloud/releases/latest"
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.xray,
        core_type: "Xray"
    },

    // --- دسته: Mihomo ---
    {
        name: "Clash Verge Rev",
        description: "کلاینت GUI مدرن مبتنی بر Tauri متن‌باز و رایگان با هسته داخلی Mihomo.",
        download: {
            windows: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
            macos: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
            linux: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "FlClash",
        description: "کلاینت چندپلتفرمی مبتنی بر ClashMeta متن‌باز و رایگان با UI ساده.",
        download: {
            windows: "https://github.com/chen08209/FlClash/releases",
            macos: "https://github.com/chen08209/FlClash/releases",
            linux: "https://github.com/chen08209/FlClash/releases",
            android: "https://github.com/chen08209/FlClash/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "ClashMi",
        description: "ابزار پراکسی متن‌باز و رایگان بر پایه هسته Mihomo با پنل داشبورد وب.",
        download: {
            ios: "https://apps.apple.com/us/app/clash-mi/id6744321968",
            android: "https://github.com/KaringX/clashmi/releases/latest",
            macos: "https://github.com/KaringX/clashmi/releases/latest",
            windows: "https://github.com/KaringX/clashmi/releases/latest",
        },
        os_icons: { ios: osIcons.ios, android: osIcons.android, macos: osIcons.macos, windows: osIcons.windows },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "ClashMetaForAndroid",
        description: "کلاینت اختصاصی Clash Meta متن‌باز و رایگان برای اندروید.",
        download: { android: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "ClashX.Meta",
        description: "فورکی از ClashX متن‌باز و رایگان برای macOS با پشتیبانی از پروتکل‌های مختلف.",
        download: { macos: "https://github.com/MetaCubeX/ClashX.Meta/releases" },
        os_icons: { macos: osIcons.macos },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo-party",
        description: "کلاینت GUI Mihomo متن‌باز و رایگان با تم‌های قابل تنظیم.",
        download: {
            windows: "https://mihomo.party/download/windows",
            macos: "https://mihomo.party/download/macos",
            linux: "https://mihomo.party/download/linux",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "GUI.for.Clash",
        description: "برنامه GUI متن‌باز و رایگان برای مدیریت هسته‌های Mihomo.",
        download: {
            windows: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
            macos: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
            linux: "https://github.com/GUI-for-Cores/GUI.for.Clash/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "ShellCrash",
        description: "اسکریپت مدیریتی متن‌باز و رایگان برای Clash در محیط Shell (روترها و لینوکس).",
        download: {
            router_os: "https://github.com/juewuy/ShellCrash",
            linux: "https://github.com/juewuy/ShellCrash",
        },
        os_icons: { router_os: osIcons.router_os, linux: osIcons.linux },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo-OpenWrt",
        description: "ساخت بومی متن‌باز و رایگان از Mihomo برای OpenWrt.",
        download: { router_os: "https://github.com/douglarek/vanilla-mihomo/releases" },
        os_icons: { router_os: osIcons.router_os },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "OpenClash (with Mihomo core)",
        description: "پلاگین OpenWrt متن‌باز و رایگان که می‌تواند از هسته Mihomo استفاده کند.",
        download: { router_os: "https://github.com/vernesong/Openclash/releases" },
        os_icons: { router_os: osIcons.router_os },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },
    {
        name: "Mihomo Core (CLI)",
        description: "هسته اجرایی Mihomo متن‌باز و رایگان برای لینوکس (خط فرمان).",
        download: { linux: "https://github.com/MetaCubeX/mihomo/releases" },
        os_icons: { linux: osIcons.linux },
        core_icon: coreIcons.mihomo,
        core_type: "Mihomo"
    },

    // --- دسته: Singbox ---
    {
        name: "GUI.for.SingBox",
        description: "رابط کاربری گرافیکی متن‌باز و رایگان برای هسته‌های Singbox.",
        download: {
            windows: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
            macos: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
            linux: "https://github.com/GUI-for-Cores/GUI.for.SingBox/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "sing-box for Apple platforms",
        description: "کلاینت رسمی Sing-box متن‌باز و رایگان برای iOS، macOS و Apple tvOS.",
        download: {
            ios: "https://apps.apple.com/app/sing-box-vt/id6673731168",
            macos: "https://apps.apple.com/app/sing-box-vt/id6673731168",
            tvos: "https://apps.apple.com/app/sing-box-vt/id6673731168",
        },
        os_icons: { ios: osIcons.ios, macos: osIcons.macos, tvos: osIcons.tvos },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "sing-box for Android",
        description: "کلاینت رسمی Sing-box متن‌باز و رایگان برای اندروید.",
        download: { android: "https://github.com/SagerNet/sing-box/releases" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "NekoBoxForAndroid",
        description: "کلاینت چند پروتکلی متن‌باز و رایگان برای اندروید که از Sing-box استفاده می‌کند.",
        download: { android: "https://github.com/MatsuriDayo/NekoBoxForAndroid/releases" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Husi",
        description: "ابزار پروکسی متن‌باز و رایگان برای اندروید که SagerNet/sing-box را به عنوان هسته می‌شناسد.",
        download: { android: "https://github.com/xchacha20-poly1305/husi/releases" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Throne (formerly Nekoray)",
        description: "ابزار پروکسی GUI چند پلتفرمی متن‌باز و رایگان که توسط Sing-box قدرت گرفته است.",
        download: {
            windows: "https://github.com/throneproj/Throne/releases",
            macos: "https://github.com/throneproj/Throne/releases",
            linux: "https://github.com/throneproj/Throne/releases",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Sing-box (Core)",
        description: "پروژه اصلی Sing-box متن‌باز و رایگان برای کاربران پیشرفته (خط فرمان).",
        download: { linux: "https://github.com/SagerNet/sing-box/releases" },
        os_icons: { linux: osIcons.linux },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "Karing",
        description: "ابزار پروکسی قدرتمند و چندپلتفرمی متن‌باز و رایگان که از هسته Sing-box استفاده می‌کند.",
        download: {
            windows: "https://github.com/KaringX/karing/releases/latest",
            android: "https://github.com/KaringX/karing/releases/latest",
            ios: "https://apps.apple.com/us/app/karing/id6472431552",
            macos: "https://github.com/KaringX/karing/releases/latest",
            tvos: "https://apps.apple.com/us/app/karing/id6472431552",
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android, ios: osIcons.ios, macos: osIcons.macos, tvos: osIcons.tvos },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },
    {
        name: "DefyX",
        description: "یک VPN با تمرکز بر حریم خصوصی برای اندروید و iOS که از فناوری‌های ضد فیلترینگ مدرن استفاده می‌کند.",
        download: {
            "android": "https://play.google.com/store/apps/details?id=de.unboundtech.defyxvpn",
            "ios": "https://apps.apple.com/gb/app/defyx/id6746811872"
        },
        os_icons: { "android": osIcons.android, "ios": osIcons.ios },
        core_icon: coreIcons.singbox,
        core_type: "Singbox"
    },

    // --- دسته: Multi-Core ---
    {
        name: "Hiddify-app",
        description: "کلاینت پراکسی خودکار چندپلتفرمی با پشتیبانی از هسته‌های Xray, Singbox, Clash Meta.",
        download: {
            windows: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Windows-Setup-x64.exe",
            macos: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-MacOS.dmg",
            linux: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Linux-x64.AppImage",
            android: "https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Android-universal.apk",
            ios: "https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532",
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },
    {
        name: "Surfing (Magisk Module)",
        description: "ماژول Magisk برای اندروید با پشتیبانی از هسته‌های Xray, Mihomo, Singbox و Hysteria.",
        download: { android: "https://github.com/MoGuangYu/Surfing/releases" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },
    {
        name: "Oblivion",
        description: "کلاینت VPN مدرن با رابط کاربری فارسی و تمرکز بر پروتکل‌های مقاوم (شامل Singbox/Xray).",
        download: {
            windows: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            macos: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            linux: "https://github.com/bepass-org/oblivion-desktop/releases/latest",
            android: "https://github.com/bepass-org/oblivion/releases/latest"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },
    {
        name: "MahsaNG",
        description: "کلاینت متن‌باز و چندپروتکلی ایرانی با پشتیبانی از پروتکل‌های مقاوم (شامل Xray و Singbox).",
        download: { android: "https://github.com/GFW-knocker/MahsaNG/releases/latest" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },
    {
        name: "Freedom Guard",
        description: "کلاینت متن‌باز و رایگان با پشتیبانی از پروتکل‌های مقاوم ضد فیلترینگ.",
        download: {
            windows: "https://github.com/Freedom-Guard/Freedom-Guard/releases/latest",
            android: "https://github.com/Freedom-Guard/FG_MOBILE/releases/latest"
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },
    {
        name: "Fair VPN",
        description: "کلاینت VPN رایگان و متن‌باز برای iOS و macOS با پشتیبانی از Shadowsocks، Vmess، VLESS و WireGuard.",
        download: {
            ios: "https://apps.apple.com/us/app/fair-vpn/id1533873488?platform=iphone",
            macos: "https://apps.apple.com/us/app/fair-vpn/id1533873488?platform=mac"
        },
        os_icons: { ios: osIcons.ios, macos: osIcons.macos },
        core_icon: coreIcons.multi_core,
        core_type: "Multi-Core"
    },

    // --- دسته: Other ---
    {
        name: "Outline",
        description: "کلاینت متن‌باز و رایگان Shadowsocks، توسعه‌یافته توسط Jigsaw.",
        download: {
            windows: "https://getoutline.org/get-started#step-3",
            macos: "https://apps.apple.com/us/app/outline-app/id1356177741",
            linux: "https://getoutline.org/get-started#step-3",
            android: "https://play.google.com/store/apps/details?id=org.outline.android.client",
            ios: "https://apps.apple.com/us/app/outline-app/id1356177741"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "WireGuard",
        description: "پروتکل VPN مدرن و متن‌باز با عملکرد بالا و امنیت قوی.",
        download: {
            windows: "https://www.wireguard.com/install/",
            macos: "https://apps.apple.com/us/app/wireguard/id1441195209?platform=mac",
            linux: "https://www.wireguard.com/install/",
            android: "https://play.google.com/store/apps/details?id=com.wireguard.android",
            ios: "https://apps.apple.com/us/app/wireguard/id1441195209?platform=iphone"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Psiphon",
        description: "ابزار ضد سانسور متن‌باز و رایگان با پروتکل‌های تونلینگ اختصاصی.",
        download: {
            windows: "https://psiphon.ca/psiphon3.exe",
            android: "https://play.google.com/store/apps/details?id=com.psiphon3.subscription",
            ios: "https://apps.apple.com/app/psiphon/id1276263909"
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Geph",
        description: "یک شبکه خصوصی مجازی متن‌باز و غیرمتمرکز که برای مقاومت در برابر سانسور طراحی شده.",
        download: {
            windows: "https://dl.geph.io/geph-releases/windows-stable/latest/geph-windows-setup.exe",
            macos: "https://dl.geph.io/geph-releases/macos-stable/latest/geph-macos.dmg",
            linux: "https://dl.geph.io/geph-releases/linux-stable/latest/Geph-x86_64.flatpak",
            android: "https://play.google.com/store/apps/details?id=io.geph.android",
            ios: "https://apps.apple.com/us/app/geph/id1638148282"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Cloudflare WARP",
        description: "کلاینت VPN رایگان از Cloudflare که از پروتکل WireGuard اصلاح شده استفاده می‌کند.",
        download: {
            windows: "https://1111-releases.cloudflareclient.com/win/latest",
            macos: "https://1111-releases.cloudflareclient.com/mac/latest",
            linux: "https://pkg.cloudflareclient.com/",
            android: "https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone",
            ios: "https://itunes.apple.com/us/app/1-1-1-1-faster-internet/id1423538627"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "HTTP Injector",
        description: "ابزار حرفه‌ای تونلینگ VPN برای iOS با تمرکز بر پروتکل‌های SSH و DNS.",
        download: { ios: "https://apps.apple.com/us/app/http-injector/id1659992827?platform=iphone" },
        os_icons: { ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "ProtonVPN",
        description: "سرویس VPN متن‌باز و امن با تمرکز بر حریم خصوصی.",
        download: {
            windows: "https://protonvpn.com/download-windows",
            macos: "https://protonvpn.com/download-macos",
            linux: "https://protonvpn.com/download-linux",
            android: "https://play.google.com/store/apps/details?id=ch.protonvpn.android",
            ios: "https://protonvpn.com/download-ios"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Windscribe",
        description: "سرویس VPN رایگان (با محدودیت) و باکیفیت.",
        download: {
            windows: "https://windscribe.com/install/desktop/windows",
            macos: "https://windscribe.com/install/desktop/osx",
            android: "https://play.google.com/store/apps/details?id=com.windscribe.vpn",
            ios: "https://windscribe.com/install/mobile/ios"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "AmneziaVPN",
        description: "سرویس VPN متن‌باز و رایگان با تمرکز بر امنیت خود-میزبان.",
        download: {
            windows: "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            macos: "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            linux: "https://github.com/amnezia-vpn/amnezia-client/releases/latest",
            android: "https://play.google.com/store/apps/details?id=org.amnezia.vpn",
            ios: "https://apps.apple.com/us/app/amneziavpn/id1600529900"
        },
        os_icons: { windows: osIcons.windows, macos: osIcons.macos, linux: osIcons.linux, android: osIcons.android, ios: osIcons.ios },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "WireSock",
        description: "کلاینت اختصاصی WireGuard برای ویندوز.",
        download: { windows: "https://www.wiresock.net/wiresock-secure-connect/download" },
        os_icons: { windows: osIcons.windows },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "WireGuard AutoTunnel",
        description: "ابزار خودکارسازی برای مدیریت پروفایل‌های WireGuard در اندروید.",
        download: { android: "https://play.google.com/store/apps/details?id=com.zaneschepke.wireguardautotunnel" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Freegate",
        description: "ابزار ضد سانسور قدیمی و رایگان با پروتکل‌های اختصاصی.",
        download: {
            windows: "https://www.dynamicinternettechnology.com",
            android: "https://www.dynamicinternettechnology.com",
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "DNSveil",
        description: "ابزار متن‌باز برای دور زدن فیلترینگ DNS با استفاده از DoH، DoT و پراکسی.",
        download: {
            windows: "https://github.com/msasanmh/DNSveil",
            android: "https://github.com/msasanmh/AndroidDNSveilTools/releases"
        },
        os_icons: { windows: osIcons.windows, android: osIcons.android },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "Intra",
        description: "ابزار رایگان برای اندروید با هدف محافظت در برابر حملات دستکاری DNS.",
        download: { "android": "https://play.google.com/store/apps/details?id=app.intra" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
    {
        name: "TordnsCrypt",
        description: "ابزار متن‌باز برای اندروید جهت محافظت از ترافیک DNS با استفاده از DNSCrypt و Tor.",
        download: { "android": "https://play.google.com/store/apps/details?id=pan.alexander.tordnscrypt.gp" },
        os_icons: { android: osIcons.android },
        core_icon: coreIcons.other,
        core_type: "Other"
    },
];

// --- پردازش و مرتب‌سازی نهایی ---

// 1. افزودن فیلد 'is_suggested' به هر کلاینت
const suggestedAppsSet = new Set(suggestedAppNames);
const processedClients = allClients.map(client => ({
    ...client,
    is_suggested: suggestedAppsSet.has(client.name)
}));

// 2. تابع کمکی برای مرتب‌سازی کلاینت‌ها (بدون تغییر)
const sortClients = (clients) => {
    const sorted = [];
    const processedNames = new Set();
    const clashVergeRev = clients.find(c => c.name === "Clash Verge Rev");
    if (clashVergeRev) {
        sorted.push(clashVergeRev);
        processedNames.add(clashVergeRev.name);
    }
    const flClash = clients.find(c => c.name === "FlClash");
    if (flClash) {
        sorted.push(flClash);
        processedNames.add(flClash.name);
    }
    const androidOnlyClients = [], windowsOnlyClients = [], iosOnlyClients = [], macosOnlyClients = [], linuxOnlyClients = [], routerOnlyClients = [], multiPlatformClients = [];
    clients.forEach(client => {
        if (processedNames.has(client.name)) return;
        const platformCount = Object.keys(client.download).length;
        if (platformCount === 1) {
            if (client.download.android) androidOnlyClients.push(client);
            else if (client.download.windows) windowsOnlyClients.push(client);
            else if (client.download.ios) iosOnlyClients.push(client);
            else if (client.download.macos) macosOnlyClients.push(client);
            else if (client.download.linux) linuxOnlyClients.push(client);
            else if (client.download.router_os) routerOnlyClients.push(client);
        } else if (platformCount > 1) {
            multiPlatformClients.push(client);
        }
    });
    multiPlatformClients.sort((a, b) => {
        const platformOrder = ['android', 'windows', 'ios', 'macos', 'linux', 'router_os', 'tvos'];
        const aIndex = platformOrder.findIndex(os => a.download[os]);
        const bIndex = platformOrder.findIndex(os => b.download[os]);
        if (aIndex !== bIndex) return aIndex - bIndex;
        return a.name.localeCompare(b.name);
    });
    androidOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    windowsOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    iosOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    macosOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    linuxOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    routerOnlyClients.sort((a, b) => a.name.localeCompare(b.name));
    sorted.push(...multiPlatformClients, ...androidOnlyClients, ...windowsOnlyClients, ...iosOnlyClients, ...macosOnlyClients, ...linuxOnlyClients, ...routerOnlyClients);
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

// 3. مرتب‌سازی لیست پردازش‌شده
const suggestedClients = sortClients(processedClients);

// این آبجکت‌ها را برای استفاده در فایل‌های دیگر export می‌کنیم
export { suggestedClients, osIcons, coreIcons, osFilterOptions };