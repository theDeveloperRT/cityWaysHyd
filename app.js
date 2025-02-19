let navs = document.querySelectorAll('.navLinks');
let sideScreenMenu = document.querySelector('.sideScreenMenu');
let menuItems = document.querySelector('.menuItems');

let outputContent = getId('outputContent');
let routeSection1 = getId('routeSection1');
let routeSection2 = getId('routeSection2');
let PPbusStations = getId('PPbusStations');

let OutputScreen = getId('OutputScreen');
let OutputScreen2 = getId('OutputScreen2');
let OutputScreen3 = getId('OutputScreen3');
let outputBusStopPart1 = getId('outputBusStopPart1');
let outputBusStopPart2 = getId('outputBusStopPart2');

let junctionStopsHeading = getId('junctionStopsHeading');
let avlBusStops = getId('avlBusStops');

let regularRoutesOutput = getId('regularRoutesOutput');
let rareRoutesOutput = getId('rareRoutesOutput');

// Font Size Handling Handles
let StopNameHead = getId('StopNameHead');
let StopNameSub = getId('StopNameSub');

// Route Output Screen Handles
let output2RouteHolder = getId('output2RouteHolder');
let route1No = getId('route1No');
let route2No = getId('route2No');

// Input Handles
let input1 = getId('input1');
let input2 = getId('input2');
let clear1 = getId('clear1');
let clear2 = getId('clear2');

// Suggesions List
let suggessionsList = getId('suggessionsList');

// From to Section Handles
let swapIconContainer = getId('swapIconContainer');
let input2Container = getId('input2Container');
let FromToSuggesions = getId('FromToSuggesions');
let FromStopNameHead = getId('FromStopNameHead');
let ToStopNameHead = getId('ToStopNameHead');

let regularRoutesOutputFT = getId('regularRoutesOutputFT');
let rareRoutesOutputFT = getId('rareRoutesOutputFT');

// Fare Chart Output Handles
let fareChartOutput = getId('fareChart');
let CO_Fare = getId('CO_Fare');
let ME_Fare = getId('ME_Fare');

// Alternate Handles
let outputBusStopPart2ALT = getId('outputBusStopPart2ALT');

let ALTroute1 = getId('ALTroute1');
let ALTroute2 = getId('ALTroute2');

let point3ALT = getId('point3ALT');
let point3ALT_OR = getId('point3ALT_OR');

let h1_3p = getId('h1_3p');
let r1_3p = getId('r1_3p');
let h2_3p = getId('h2_3p');
let r2_3p = getId('r2_3p');
let h3_3p = getId('h3_3p');
let r3_3p = getId('r3_3p');

let h1_3p_OR = getId('h1_3p_OR');
let r1_3p_OR = getId('r1_3p_OR');
let h2_3p_OR = getId('h2_3p_OR');
let r2_3p_OR = getId('r2_3p_OR');
let h3_3p_OR = getId('h3_3p_OR');
let r3_3p_OR = getId('r3_3p_OR');

let point3NWALT = getId('point3NWALT');
let point3NWALT_OR = getId('point3NWALT_OR');

let h1_3pNW = getId('h1_3pNW');
let r1_3pNW = getId('r1_3pNW');
let h2_3pNW = getId('h2_3pNW');
let r2_3pNW = getId('r2_3pNW');
let h3_3pNW = getId('h3_3pNW');
let r3_3pNW = getId('r3_3pNW');

let h1_3pNW_OR = getId('h1_3pNW_OR');
let r1_3pNW_OR = getId('r1_3pNW_OR');
let h2_3pNW_OR = getId('h2_3pNW_OR');
let r2_3pNW_OR = getId('r2_3pNW_OR');
let h3_3pNW_OR = getId('h3_3pNW_OR');
let r3_3pNW_OR = getId('r3_3pNW_OR');

let ALT_DetailedRoute_3P = getId('ALT_DetailedRoute_3P');
let ALT_DetailedRoute_content = getId('ALT_DetailedRoute_content');



// Detailed Route Output Handles
let upSource = getId('upSource');
let upViaList = getId('upViaList');
let upDestination = getId('upDestination');

let downSource = getId('downSource');
let downViaList = getId('downViaList');
let downDestination = getId('downDestination');

let upRouteHolder = getId('upRouteHolder');
let downRouteHolder = getId('downRouteHolder');

let upRouteStopsList = getId('upRouteStopsList');
let downRouteStopsList = getId('downRouteStopsList');

let upRouteDownSpan = getId('upRouteDownSpan');
let upRouteDownIcon = getId('upRouteDownIcon');

let downRouteDownSpan = getId('downRouteDownSpan');
let downRouteDownIcon = getId('downRouteDownIcon');

// Alert Box Handles
let popUpScreen = getId('popUpScreen');
let alertBox = getId('alertBox');
let successBox = getId('successBox');
let contactBox = getId('contactBox');

let errorBox = getId('errorBox');
let errorMessage = getId('errorMessage');

let headlineAlert = getId('headlineAlert');
let messageAlert = getId('messageAlert');

// Other Section Handles
let otherSectionsScreen = getId('otherSectionsScreen');
let otherSectionsScreenHeading = getId('otherSectionsScreenHeading');
let busPassInfoScreen = getId('busPassInfoScreen');
let helpScreen = getId('helpScreen');
let shareAppScreen = getId('shareAppScreen');
let ShortformsScreen = getId('ShortformsScreen');

// Route List New UI Handles
let routeOutputNewOutline = getId('routeOutputNewOutline');
let contentRO = getId('contentRO');
let stopsList = getId('stopsList');

let newUISource = getId('newUISource');
let newUIDestination = getId('newUIDestination');

// Referance Arrays and Variables
let starting, destination, upRouteArray, downRouteArray, direction, routeNumberRef;
let JunctionStop, backState, JunctionStopState;
let junctionStopsStopName;
let suggessionsArray = routesArray;
let feature = 1;


// DETAILED ROUTE ARRAYS
let DetailedRoutesUP = [
    ["1"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1/25S/229"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["1B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "RTC X ROADS"),
        SHD[167],
        getStops(RMNG_DRFM, 'VST', 'YMCA'),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["1C"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
    ),
    ["1D"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
    ),
    ["1D/229"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1D/299"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1H"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1HD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET X ROADS"),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),
    ["1J"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["1JL"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'LANGER HOUSE')
    ),
    ["1JK"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'LANGER HOUSE'),
        getStops(SRPT_MNBD, 'BAPU GHAT', 'KALI MANDIR')
    ),
    ["1K"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        SHD[181], SHD[453], SHD[454]
    ),
    ["1L"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
    ),
    ["1MD"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET"),
        "MARUTHI NAGAR(DSNR)", "NEW MARUTHI NAGAR"
    ),
    ["1P"].concat(
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1P/25S"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898],
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1V"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["1VM"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", "SAI BABA TEMPLE", "SAI NAGAR"
    ),
    ["1VS"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'RYTHU BAZAR'),
        SHD[313], "SAHAB NAGAR",
    ),
    ["1W"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE")
    ),
    ["1X"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
        getStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
    ),
    ["1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/229"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1Z/251"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
    ),
    ["1Z/539"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2C"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "CRPF GATE (BRKS)"),
        SHD[113]
    ),
    ["2J"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["2K"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708], SHD[181], SHD[453], SHD[454],

    ),
    ["2U"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["2Z"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["2/25S"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["2Z/251"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),

    // 3 SERIES
    ["3"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
        SHD[526],
        getStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
    ),
    ["3C"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
    ),
    ["3D"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3DN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3H"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["3HN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        SHD[993],
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3K"].concat(getStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")),
    ["3K/90L"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["3K/95"].concat(getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")),
    ["3K/102"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["3K/102B"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["3K/203N"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3K/242"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["3K/252"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["3K/281"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["3KN"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3KN/95"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["3KJ"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ"),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["3L"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "LALAPET (RAM TH.)"),
        SHD[780]
    ),
    ["3M"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getStops(SHMB_KSR, "KACHEGUDA STATION", "ZTS X ROADS"),
        SHD[633], SHD[736], SHD[572], SHD[573], SHD[562], SHD[66]
    ),
    ["3N"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
        SHD[1099],
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        getStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
    ),
    ["3N/203N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3T"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    ),
    ["3Y"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS"),
        getStops(HCLX_GWRL, 'NORTH KAMALA NAGAR', 'RADHIKA THEATER'),
        SHD[961], SHD[302], "YELLAREDDYGUDA (KAPRA)", "BANK COLONY(SAKET)", "VAMPUGUDA", "BJR NAGAR",
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5G"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5KM"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET DARGAH'),
        getStops(TailsUP, 'OU COLONY', 'MANIKONDA')
    ),
    ["5K/16A"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["5K/16AD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16C"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["5K/16CD"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16D"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/25S"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "LOTHKUNTA"),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["5K/92A"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["5K/92R"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "DAIRY FARM (CNTLMT)"),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["5K/120K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'KOKAPET X ROADS'),
        "KOKAPET"
    ),
    ["5K/125"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["5K/188"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR"),
    ),
    ["5K/229"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["5K/251"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR"),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["5M"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MAHAVIR HOSPITAL"),
        SHD[1063],
        getStops(KOTI_MCRL, 'MALLEPALLY', 'MEHDIPATNAM')
    ),
    ["5R"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "RISALA BAZAR")
    ),
    ["5R/5"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5W"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["6L/281"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["6R"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6RK"].concat(
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'KALI MANDIR')
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'ARAMGHAR')
    ),
    ["7Z/251"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        getStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525],
    ),
    ["8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8AK"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8UA"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROADS"),
        getStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["8A/85"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["8A/178G"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),
    ["8A/532"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["8A/539"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["8C"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["8C/85P"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["8C/229"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'PARADISE CENTER'),
        getStops(IBP_DNGL, 'PARADISE', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["8R"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(SRPT_MNBD, 'BATA', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        SHD[220]
    ),

    // 9 SERIES
    ["9A"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ESI HOSPITAL'),
        "VIKASPURI COLONY", "AG COLONY"
    ),
    ["9F"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9K/102"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["9K/230P"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9K/272G"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9X/41C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL'),
        getStops(MLPT_BLNR, 'ERRAGODALU', 'RANGA REDDY KAMAN'),
        "ASBESTOS COLONY"
    ),
    ["9X/230P"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9X/272G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X/283D"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["9XM"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9XM/230P"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9YF"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["10F"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10FV"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10H"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HA"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),
    ["10HL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),
    ["10HP"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'HAFEEZPET'),
        "PREM NAGAR"
    ),
    ["10HW"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10J"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
    ),
    ["10JP"].concat(
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["10K"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KPHB MAIN ROAD"),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["10KJ"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10KL"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
    ),
    ["10KM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
    ),
    ["10Y"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
    ),
    ["10YF"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10YF/16S"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["10W"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10H/16A"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["10H/16C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["10H/18C"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["10KJ/18"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["10K/250"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["10KM/224G"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),

    // 11 SERIES
    ["11W"].concat(
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780]
    ),
    ["14PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], "SARDAR PATEL NAGAR",
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["15D/20"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["15H/20"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["15H/242RG"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NGRM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),
    // 16 SERIES
    ["16/20"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16AK"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "NEREDMET OLD PS"),
        getStops(TailsDOWN, 'KAKATHIYA NAGAR', 'VINOBA NAGAR'),
        getStops(GWRL_HCLX, 'VAYUPURI', 'ECIL X ROADS')
    ),
    ["16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16CD"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CR"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16ES"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(HCLX_GWRL, 'UTTAM NAGAR', 'AOC CENTER'),
        "LAXMI NAGAR (PKT)", SHD[448], SHD[760],
        getStops(SRPT_MNBD, 'BATA', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'IRRUM MANZIL')
    ),
    ["16H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633],
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16NY"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'NEREDMET X ROADS'),
        SHD[241], SHD[712], "DEFENCE COLLEGE",
        getStops(KPHB_GTKS, 'AMMUGUDA BAZAR', 'YAPRAL')
    ),
    ["16P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR", SHD[780]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR",
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/10H"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16A/20"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["16A/47L"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASHASAN NAGAR",
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16A/49M"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/219"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["16A/281R"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),
    ["16AD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/5K"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/10H"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16C/38T"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16C/47L"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASHASAN NAGAR",
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16C/49M"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/281"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["16CD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CD/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CR/38T"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16D/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16D/24B"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["16D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16H/49M"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16R/20"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["16S/10YF"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 17 SERIES
    ["17D"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR')
    ),
    ["17DH"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DV"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "ICOM TELE LIMITED"),
        SHD[1065]
    ),
    ["17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
    ),
    ["17HN"].concat(
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
        getStops(SHMB_KSR, 'HB COLONY', 'KUSHAIGUDA')
    ),
    ["17H/29B"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["17/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/219"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["17CS"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "CHAKRIPURAM"),
        getStops(TailsUP, 'CHERLAPALLY JAIL', 'CHERLAPALLY')
    ),
    ["17S"].concat(
        getStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["17V"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ICOM TELE LIMITED"),
        SHD[1065]

    ),

    // 18 SERIES
    ["18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18B"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'MALLIKARJUNA TEMPLE'),
        "CCMB COLONY"
    ),
    ["18C"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/10H"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["18J"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18R"].concat(
        getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18V"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'NGRI'),
        SHD[163], SHD[162], SHD[198],
        getStops(GTKS_PTCR, 'RAMANTHAPUR CHURCH', 'RAMANTHAPUR'),
        SHD[441], SHD[465], SHD[1140]
    ),
    ["18VJ"].concat(
        SHD[1140], SHD[465], SHD[441],
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'RAMANTHAPUR CHURCH'),
        SHD[198], SHD[162], SHD[163],
        getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18VS"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'SURVEY OF INDIA'),
        getStops(GTKS_PTCR, 'UPPAL RING ROAD', 'RAMANTHAPUR')
    ),
    ["18/10KJ"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["18/47U"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "PANJAGUTTA"),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'JUBLIE HILLS CHECK POST'),
    ),
    ["18/272G"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["18/283S"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["18C/30"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["18C/219"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["18C/229"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),

    // 19 SERIES
    ["19F"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152],
    ),
    ["19K"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19K/288D"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["19KJ"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["19KM"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR X ROADS')
    ),
    ["19M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19MP"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["19S"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["19YF"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["19S/505"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),

    // 20 SERIES
    ["20P"].concat(
        SHD[898], SHD[207],
        getStops(TailsUP, 'PADMARAO NAGAR', 'BHOLAKPUR'),
        getStops(DRFM_RMNG, 'KALPANA', 'ASHOK NAGAR X ROADS'),
        getStops(TailsUP, 'NTR STADIUM', 'NAMPALLY')
    ),
    ["20/15D"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["20/15H"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["20/16"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["20/16A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["20/16R"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["20/280"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 21 SERIES
    ["21W"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[293], SHD[1057], SHD[414], SHD[1081]
    ),

    // 22 SERIES
    ["22"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HAKIMPET')
    ),
    ["22/49E"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(PTCR_GTKS, 'NIMS HOSPITAL', 'IRRUM MANZIL')
    ),
    ["22/90L"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["22D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[10], SHD[14], SHD[612]
    ),
    ["22K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[134], SHD[169]
    ),

    // 23 SERIES
    ["23B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132]
    ),
    ["23BK"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516]
    ),
    ["23BS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516], SHD[561], SHD[976]
    ),
    ["23GF"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'GREEN FIELDS COLONY')
    ),
    ["23GS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'KISTAMMA ENCLAVE'),
        SHD[561], SHD[976]
    ),
    ["23K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getStops(MHRM_MDCL, 'DGQA QUARTERS', 'KISTAMMA ENCLAVE')
    ),
    ["23T"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getStops(MHRM_MDCL, 'TEACHERS COLONY', 'KANJIGUDA'),
        SHD[429], SHD[745], SHD[998]
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'YAPRAL')
    ),
    ["24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'BALAJI NAGAR')
    ),
    ["24BA"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'AMBEDKAR NAGAR')
    ),
    ["24BJ"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'CHENNAPUR X ROADS'),
        "BJR NAGAR"
    ),
    ["24E"].concat(
        SHD[898],
        getStops(MNBD_SRPT, 'PATNY', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'AMMUGUDA BAZAR'),
        SHD[375], SHD[712], SHD[996], SHD[376],
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["24S"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA')
    ),
    ["24SS"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SHAHPUR NAGAR'),
    ),
    ["24B/16D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["24B/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["24J"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        SHD[1016], "ECHS POLYCLINIC", SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24L/281"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["24S/273"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),


    // 25 SERIES
    ["25A"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getStops(TailsUP, 'SURYA NAGAR X ROADS', 'SURYA NAGAR')
    ),
    ["25AJ"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'JONNABANDA'),
    ),
    ["25AJ/M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'GOPAL NAGAR'),
    ),
    ["25M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR')
    ),
    ["25MS"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR X ROADS'),
        getStops(TailsUP, 'SANJEEVA GARDENS', 'SHARAN NAGAR')
    ),
    ["25P"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS", "CITIZEN COLONY", "PANCHASHEELA ENCLAVE"
    ),
    ["25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/1P"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/2"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["25S/5K"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["25S/227"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),
    ["25S/229"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["26M/49M"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    ),
    ["26N"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getStops(TailsUP, 'MUD FORT', 'DIAMOND POINT'),
        "CENTER POINT", "BAPUJI NAGAR",
        getStops(TailsUP, 'ASHOK GARDENS', 'OLD BOWENPALLY')
    ),

    // 29 SERIES
    ["29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")
    ),
    ["29B/17H"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["29B/272G"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["29B/272I"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        "BAHUDURPALLY",
        SHD[407]
    ),
    ["29S"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SHAHPUR NAGAR"),
        "SUBHASH NAGAR (JDM)"
    ),
    ["29Q"].concat(
        getStops(IBP_DNGL, "BALANAGAR", "CHINTAL"),
        SHD[214], SHD[792]
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30S"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'BEERAPPA NAGAR'),
        SHD[271], SHD[512], SHD[531], SHD[541], SHD[969]
    ),
    ["30/18C"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["30/280"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 31 SERIES
    ["31P"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),

    // 37 SERIES
    ["37"].concat(
        SHD[898], SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["37/8"].concat(
        SHD[525],
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], "AOC RECORDS", SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", SHD[84],
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        SHD[84], "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        SHD[1027]
    ),
    ["38T/16C"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["38T/16CR"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR", "RTC COLONY (MLY)", "SITI NAGAR", "SHAFI NAGAR", "BHARATH NAGAR (MLY)",
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),

    // 40 SERIES
    ["40"].concat(
        getStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
        getStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
        SHD[770], SHD[3], SHD[110], SHD[506]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        "ASBESTOS COLONY",
        getStops(BLNR_MLPT, 'RANGA REDDY KAMAN', 'ERRAGODALU'),
        getStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[506],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[131],
        getStops(RMNG_DRFM, 'KALPANA', 'PARADISE CENTER'),
        getStops(CRPL_LGPL, "PARADISE", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 46 SERIES
    ["46"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "POLICE LINES"),
        SHD[759]
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[908], "PRASASHAN NAGAR",
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        "MAYURI NAGAR",
    ),
    ["47L"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16A"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["47L/16C"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["47Y"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getStops(KOTI_MCRL, 'JOURNLIST COLONY', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47YM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getStops(KOTI_MCRL, 'JOURNLIST COLONY', 'MANCHIREVULA'),
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
    ),
    ["49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
    ),
    ["49MT"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),
    ["49/250"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49E/22"].concat(
        getStops(GTKS_PTCR, 'IRRUM MANZIL', 'NIMS HOSPITAL'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),
    ["49M/16A"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["49M/16C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["49M/16CD"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16H"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR",
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["49M/26M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        SHD[755],
        getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["49M/92A"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["49M/229"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        getStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["49M/250"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/250C"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["49M/250D"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49MT/250"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),

    // 50 SERIES
    ["50B"].concat(
        SHD[898], SHD[207],
        getStops(LGPL_CRPL, "ALUGADDA BHAVI", "NACHARAM X ROADS"),
        getStops(TailsUP, 'NACHARAM IDA', 'CHILKA NAGAR'),
        getStops(TailsUP, 'BODUPPAL CIRCLE', 'CGCL GRAMPANCHAYATH'),
        SHD[195]
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65MG"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["65M/116G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65M/123"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["71AB"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'CGCL GRAMPANCHAYATH'),
        SHD[195]
    ),
    ["71K"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'KACHEGUDA KAMELA'),
        SHD[454]
    ),

    // 72 SERIES
    ["72"].concat(
        "HIGH COURT",
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'KOTHAPET'),
        SHD[626], SHD[597], SHD[554]
    ),
    ["72/277D"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["72H"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
    ),
    ["72HK"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR'),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR')
    ),
    ["72J"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR'),
        getStops(HCLX_GWRL, 'CHAITANYAPURI', 'BANDLAGUDA (NGL)'),
        SHD[424], "JAIPURI SAINAGAR", "JAIPURI COLONY DRF"
    ),
    ["72V"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["83JA"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["83J/272G"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["85P/8C"].concat(
        getStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["85/253L"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["85V"].concat(
        getStops(MDCL_MHRM, "CHARMINAR", "BARKAS X ROADS"),
        "KOTHAPET(SALALA)", "BISMILLAH COLONY", "VENKATAPUR"
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
    ),
    ["86C"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
    ),
    ["86J"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ'),
        getStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["86K"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
        SHD[506]
    ),


    // 90 SERIES
    ["90/253T"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["90/300"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["90B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "NAGOLE X ROADS"),
        getStops(HCLX_GWRL, 'OLD NAGOLE', 'BANDLAGUDA DEPOT')
    ),
    ["90BE"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'BADANGPET')
    ),
    ["90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90LK"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
    ),
    ["90DL"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
    ),
    ["90LV"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90L/3K"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L/22"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["90L/229"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["90L/251"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["90UN"].concat(
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'NAGOLE X ROADS'),
        SHD[672], SHD[1038]
    ),
    ["90U/203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 92 SERIES
    ["92A"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), SHD[620]
    ),
    ["92A/5K"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["92A/49M"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["92K"].concat(
        SHD[620],
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["92R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, 'DAIRY FARM (CNTLMT)', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["92R/5K"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, "DAIRY FARM (CNTLMT)", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 94 SERIES
    ["94R"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        getStops(TailsUP, 'KISHAN BAGH', 'CHINTALMET'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["94RM"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        SHD[342], SHD[942],
        getStops(TailsUP, '9 NUMBER', 'CHINTALMET'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 95 SERIES
    ["95"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR')
    ),
    ["95/3K"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")
    ),
    ["95/3KN"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["95K"].concat(
        getStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR'),
        getStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),

    // 100 SERIES
    ["100/299"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["100V"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["100M"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "KOTHAPET"),
        SHD[626], SHD[597], SHD[554]
    ),


    // 102 SERIES
    ["102"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        SHD[628]
    ),
    ["102/3K"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102/9K"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["102/185"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),
    ["102/218"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'OWAISI HOSPITAL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102/253L"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["102B"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/3K"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102B/203N"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["102B/218"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102M"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getStops(TailsUP, 'SAI NAGAR (BLPR)', 'BALAPUR VILLAGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getStops(TailsUP, 'SAI NAGAR (BLPR)', 'SHIVAJI CHOWK'),
        getStops(TailsUP, 'VIJAY DURGA NAGAR', 'RCI')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'RAJIV GRUHA KALPA')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getStops(ADBT_MDCL, 'RTC COLONY(CHAMPAPET)', 'RN REDDY')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[978], SHD[336],
        getStops(ADBT_MDCL, 'SAIDABAD', 'KOTI WOMENS COLLEGE'),
        SHD[507],
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR')
    ),
    ["107JL"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107JS"].concat(
        getStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),
    ["107VL"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107VR"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
    ),
    ["107VS"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getStops(TailsUP, 'HUDA COLONY (SRRNGR)', 'SAROOR NAGAR')
    ),

    // 113 SERIES
    ["113B"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'BARKATPURA')
    ),
    ["113F"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113K"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113KL"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KM"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MIYAPUR X ROADS'),
    ),
    ["113M"].concat(
        getStops(GTKS_PTCR, 'MEDIPALLY', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113S"].concat(
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113W"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["113M/281"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["113M/288"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["113FT"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113KLT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KT"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113FZ"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113MZ"].concat(
        getStops(GTKS_PTCR, 'MEDIPALLY', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),

    // 115 SERIES
    ["115"].concat(
        "KOTI MEDICAL COLLEGE",
        getStops(PTCR_GTKS, 'CHADERGHAT X ROADS', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),


    // 116 SERIES
    ["116GA/65"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["116N"].concat(
        getStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),

    // 117 SERIES
    ["117"].concat(
        getStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
        getStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        SHD[525]
    ),

    // 118 SERIES
    ["118W/300"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'GANDIPET X ROAD'),
        SHD[306], "OSMAN SAGAR"
    ),
    ["120K/5K"].concat(
        "KOKAPET",
        getStops(SKPL_SECB, "KOKAPET X ROADS", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 123 SERIES
    ["123"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),
    ["123/65M"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),


    // 125 SERIES
    ["125/5K"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 126 SERIES
    ["126/300"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["126M"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),

    // 127 SERIES
    ["127AL"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["127DA"].concat(
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["127K"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION')
    ),
    ["127KL"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR')
    ),

    // 147 SERIES
    ["147"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'KONDAPUR')
    ),

    // 156 SERIES
    ["156/205F"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET')
    ),
    ["156/299"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156/505"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["156V/505"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["156L"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156S"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", "SAI BABA TEMPLE", "SAI NAGAR"
    ),
    ["156V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ESI HOSPITAL')
    ),
    ["158FL"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158HF"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158VF"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 171 SERIES
    ["171"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GAJULA RAMARAM X ROADS"),
        getStops(GTKS_KPHB, 'NLB NAGAR', "GAJULA RAMARAM")
    ),
    ["171K"].concat(
        getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        SHD[510]
    ),
    ["171K/219"].concat(
        getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        getStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    ),
    ["171M/189M"].concat(
        getStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["171R"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'SRI NIWAS NAGAR'),
        SHD[960]
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        "GHOUSE NAGAR", "ISMAIL NAGAR", SHD[103],
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR')
    ),
    ["183SS"].concat(
        getStops(GTKS_KPHB, 'SUCHITRA', 'SHAHPUR NAGAR')
    ),
    ["183S/219"].concat(
        SHD[905],
        getStops(DNGL_IBP, 'CHINTAL', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'KUKATPALLY'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["185/102"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),

    // 188 SERIES
    ["188"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "KALI MANDIR")
    ),
    ["188/5K"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["188/251"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),

    // 189 SERIES
    ["189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["189M/171M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["189M/272G"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 195 SERIES
    ["195G"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GJ"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GK"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195J"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442], SHD[510],
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["195P"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["195W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'BACHUPALLY X ROADS')
    ),
    ["195WJ"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE')
    ),
    ["195WP"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        getStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR'),
        getStops(ADBT_MDCL, 'KAISAR NAGAR', 'GANDIMAISAMMA')
    ),

    // 201 SERIES
    ["201"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["201G"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'GOWRELLY')
    ),
    ["201M"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'TATTI ANNARAM X ROADS'),
        SHD[994], SHD[849], SHD[606]
    ),
    ["201K"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR'),
        getStops(OSK_Stops, 'HARIZANAWADA', 'RAJIV GRUHAKALPA (KNTLR)')
    ),
    ["201Q"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'QUTHBULLAPUR - GOWRELLY')
    ),
    ["201/290U"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["201T/290U"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 202 SERIES
    ["202B"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR DEPOT'),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'BRAHMANAPALLY')
    ),
    ["202K/290U"].concat(
        SHD[1383],
        getStops(OSK_Stops_DOWN, 'TORRUR VILLAGE', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203AK"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN"
    ),
    ["203AR"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN", "WONDER LA X ROADS", SHD[835]
    ),
    ["203N"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203A/218"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/102B"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["203N/218"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/3K"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["203N/3N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, 'TARNAKA', 'NACHARAM X ROADS'),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["203U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),
    ["203U/90U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        "GANDI CHERUVU", SHD[303],
        getStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["204DA"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'PEDDA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),
    ["204U"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDDA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'SANGHI NAGAR')
    ),
    ["204UA"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDDA AMBERPET X ROADS'),
        getStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),

    // 205 SERIES
    ["205"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'PILLAIPALLY')
    ),
    ["205A"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205A/290U"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["205F/156"].concat(
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["205M/290U"].concat(
        getStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 211 SERIES
    ["211"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775]
    ),
    ["211/242"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["211B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET VILLAGE', 'UDDAMARRI')
    ),
    ["211CD"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'THIMMAIPALLY', 'DRDO (YADGARPALLY)')
    ),
    ["211D"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR"
    ),
    ["211DY"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775], SHD[243], "DEVARAYAMJAL VILLAGE"
    ),
    ["211K"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KESAVARAM'),
    ),
    ["211M"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'CHENNAPUR X ROADS'),
        getStops(TailsUP, 'BHAGYA NAGAR COLONY', 'CRPF')
    ),

    // 212 SERIES
    ["212"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[140]
    ),
    ["212/702"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    ),
    ["212T"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR",
        "ICICI TURKAPALLY"
    ),

    // 215 SERIES
    ["215"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 216 SERIES
    ["216"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["216KL"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'KOTHAGUDA X ROADS'),
        getStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),
    ["216M"].concat(
        getStops(CRPL_LGPL, 'MEHDIPATNAM', 'LINGAMPALLY')
    ),

    // 217 SERIES
    ["217"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217/254"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN"
    ),
    ["217C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),

    // 218 SERIES
    ["218"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218C"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
    ),
    ["218CA"].concat(
        getStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218L"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
    ),
    ["218/102"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'OWAISI HOSPITAL'),
        SHD[628]
    ),
    ["218/102B"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["218/203A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["218/203N"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["218/224MN"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'NIZAMPET X ROADS'),
        getStops(BLNR_MLPT, 'NIZAMPET ARCH', 'MALLAMPET')
    ),
    ["218/277K"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA')
    ),

    // 219 SERIES
    ["219"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/16A"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["219/17"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/17H"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/18C"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["219/171K"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["219/224G"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219I/224G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219/229"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["219/250"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["219/272G"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219I/272G"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219/280"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 222 SERIES
    ["222A"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'PENSION OFFICE'),
        getStops(KOTI_MCRL, 'CARE HOSPITAL', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),
    ["222L"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'PENSION OFFICE'),
        getStops(KOTI_MCRL, 'CARE HOSPITAL', 'LV PRASAD'),
        getStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'ALLWYN X ROADS'),
        getStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        "MAYURI NAGAR",
        getStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASASHAN NAGAR", SHD[908]
    ),
    ["224G"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/10KM"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["224G/219"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["224G/219I"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["224MN"].concat(
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224MN/218"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getStops(PTCR_GTKS, 'JNTU COLLEGE', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["224X"].concat(
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'IDA X ROADS')
    ),

    // 226 SERIES
    ["226"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "LINGAMPALLY"),
        "BHEL MIG", "BHEL", "LIG COLONY", "RC PURAM (ZPHS)",
        getStops(GTKS_PTCR, 'RAMACHANDRAPURAM', 'PATANCHERUVU')
    ),


    // 227 SERIES
    ["227"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS')
    ),
    ["227/25S"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1D"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["229/1Z"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["229/5K"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["229/8C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PARADISE'),
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ')
    ),
    ["229/18C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["229/25S"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["229/49M"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PARADISE'),
        getStops(CRPL_LGPL, 'WESLEY COLLEGE', 'MEHDIPATNAM')
    ),
    ["229/90L"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["229/219"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
    ["229/279"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["229/290"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["229/290U"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["229B"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        SHD[156]
    ),
    ["229P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'PUDUR')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230AN"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230P"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
    ),
    ["230P/9K"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["230P/9X"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["230P/9XM"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 231 SERIES
    ["231"].concat(
        SHD[613],
        getStops(OSK_Stops_DOWN, 'KISTAPUR', 'MEDICITY')
    ),
    ["231KN"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "JNTU COLLEGE"),
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET'),
        getStops(OSK_Stops, 'NARAYANA IIT', 'KAZIPALLY')
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'KOMPALLY'),
        getStops(OSK_Stops_DOWN, 'APARNA KOMPALLY', 'NUTHANKAL')
    ),

    // 241 SERIES
    ["241T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'CHERIYAL X ROADS'),
        getStops(OSK_Stops_DOWN, 'CHIRYALA VILLAGE', 'DHARMAVARAM')
    ),

    // 242 SERIES
    ["242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/3K"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["242/17H"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/211"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["242/272G"].concat(
        getStops(KSR_SHMB, 'KEESARAGUTTA', 'TARNAKA'),
        getStops(CRPL_LGPL, 'RAILWAY DEGREE COLLEGE', 'CHILKALGUDA X ROADS'),
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["242A"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242B"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        SHD[147]
    ),
    ["242G"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS"
    ),
    ["242GA"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242RG"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA (NGRM)'),
        SHD[128], SHD[744], SHD[842]
    ),
    ["242RG/15H"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 245 SERIES
    ["245A"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 250 SERIES
    ["250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/10K"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["250C"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'CHERLAPALLY'),
    ),
    ["250D"].concat(SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250/49"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["250/49M"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250/49MT"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),
    ["250C/49M"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["250D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250S"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'NOMA')
    ),
    ["250/219"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["250/281"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // `251 SE`RIES
    ["251M"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'MADANAPALLY'),
        SHD[439], SHD[651]
    ),
    ["251/1Z"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["251/2Z"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["251/5K"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["251/7Z"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["251/90L"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["251/188"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),
    ["251/300"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),

    // 252 SERIES
    ["252S"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        'KISHANGUDA',
        getStops(OSK_Stops, 'RASHEEDGUDA', 'SHANKARAPUR')
    ),
    ["252/3K"].concat(
        SHD[843], getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["252/6IW"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),

    // 253 SERIES
    ["253"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM')
    ),
    ["253L/85"].concat(
        getStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/102"].concat(
        getStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["253T/90"].concat(
        "FAB CITY", "SREE NAGAR",
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["253W"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'MAHESHWARAM')
    ),

    // 254 SERIES
    ["254/217"].concat(
        "KONGARA KALAN", "WONDER LA X ROADS", SHD[835],
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),

    // 272 SERIES
    ["272"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),
    ["272G/9K"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["272G/9X"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["272G/18"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["272G/29B"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272G/83J"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["272G/189M"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["272G/219"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["272G/219I"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["272G/242"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'METTUGUDA'),
        SHD[993],
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["272I/29B"].concat(
        SHD[407],
        "BAHUDURPALLY",
        getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["272B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),

    // 273 SERIES
    ["273/24S"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 277 SERIES
    ["277"].concat(
        SHD[624],
        getStops(SECB_SKPL, 'CHADERGHAT', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM')
    ),
    ["277D"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
        getStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
    ),
    ["277D/72"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["277K/218"].concat(
        getStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')
    ),
    ["277L"].concat(
        getStops(DNGL_IBP, "LB NAGAR X ROADS", "IBRAHIMPATNAM")
    ),
    ["277N"].concat(
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'GURRAMGUDA X ROADS'),
        "GURRAMGUDA VILLAGE", "KAMMAGUDA", SHD[665]
    ),

    // 279 SERIES
    ["279"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "IBRAHIMPATNAM")
    ),
    ["279/229"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["279U"].concat(getStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

    // 280 SERIES
    ["280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280B"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        "ANNAPURNA COLONY (GTKS)", "KONDAPUR VLG", "VIGNAN SCHOOL", "HOLY MERRY COLLEGE", SHD[147]
    ),
    ["280I"].concat(
        SHD[1038],
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'SINGAPUR TOWNSHIP'),
        "INFOSYS (PCHRM)"
    ),
    ["280J"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280N"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'NFC NAGAR X ROADS'),
        "NFC NAGAR"
    ),
    ["280X"].concat(
        SHD[1038],
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'GHATKESAR')
    ),
    ["280/20"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["280/30"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["280/219"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["280/488"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/492"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(SHMB_KSR, 'ECIL X ROADS', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/3K"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["281/6L"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/16C"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["281/24B"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["281/24L"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["281/113M"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/250"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["281R/16A"].concat(
        getStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 282 SERIES
    ["282K"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 283 SERIES
    ["283C"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM CIRCLE",
        "SURARAM COLONY"
    ),
    ["283D/9X"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["283K"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283S/18"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283VS"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM VILLAGE"
    ),
    ["283T"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'JODIMETLA'),
        "ANURAG UNIVERSITY", "VENKATAPUR", "TENUGUDEM"
    ),

    // 288 SERIES
    ["288"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD')
    ),
    ["288/113M"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["288A"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'JBIT'),
        getStops(OSK_Stops, 'MURTHUZAGUDA', 'AMDAPUR')
    ),
    ["288C"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'APPOJIGUDA')
    ),
    ["288D"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288D/19K"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["288K"].concat(
        SHD[507],
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MOINABAD'),
    ),

    // 290 SERIES
    ["290"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290/229"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290KJ"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'KUNTLOOR')
    ),
    ["290KP"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
    ),
    ["290UA"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290UF"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290U/201"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["290U/201T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'TARAMATIPET')
    ),
    ["290U/202K"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR DEPOT"),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'TORRUR VILLAGE'),
        SHD[1383]
    ),
    ["290U/204"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDDA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["290U/205A"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290U/205M"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),
    ["290U/229"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290U/463"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["290U/555"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),

    // 299 SERIES
    ["299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")
    ),
    ["299/1D"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["299/100"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["299/156"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["299D"].concat(getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

    // 300 SERIES
    ["300"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/90"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["300/118W"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["300/126"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["300/251"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["300/539"].concat(
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "ARAMGHAR"),
        getStops(KSR_SHMB, "BUDVEL STATION", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["300L"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "LB NAGAR X ROADS")
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM'),
        getStops(OSK_Stops, 'KHANAPUR X ROADS', 'MALL')
    ),
    ["445"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'KETHIREDDYPALLY ROAD'),
        getStops(OSK_Stops, 'SAJJANPALLY X ROADS', 'KETHIREDDYPALLY')
    ),
    ["447R"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'MUDIMYAL X ROADS'),
        getStops(OSK_Stops, 'MUDIMYAL', 'RAVULAPALLY')
    ),
    ["458"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getStops(OSK_Stops, 'GOLLAPALLY', 'MANSANPALLY X ROADS'),
        SHD[605], SHD[576], SHD[575]
    ),
    ["463"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["463/290U"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["464"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "ABDULLAHPURMET"),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'DANDUMAILARAM')
    ),
    ["488/280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["490S"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'BIBI NAGAR')
    ),
    ["492/280"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["495"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'GUMMADIDALA'),
        getStops(OSK_Stops, 'ANANTHARAM X ROADS', 'KANUKUNTA'),
    ),
    ["498"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        "KESAVAPUR"
    ),
    ["498K"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        getStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'KOTHAPALLY')
    ),
    ["498U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops_DOWN, 'KESAVAPUR', 'USHARPALLY'),
        "UDDAMARRI"
    ),
    ["498VJ"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        "DUNDIGAL X ROADS",
        "GAGILLAPUR",
        getStops(OSK_Stops_DOWN, 'PATHARAM', 'JINNARAM')
    ),

    // 500 SERIES
    ["505"].concat(
        SHD[620],
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/19S"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["505/156"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["505/156V"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["523K"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["524"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'KOTHAGUDEM'),
        getStops(OSK_Stops, 'NETAJI INSTITUTE', 'POCHAMPALLY')
    ),
    ["530"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getStops(OSK_Stops, 'GOLLAPALLY', 'KOTTAGUDA HIGHWAY'),
        "KANDUKUR"
    ),
    ["532"].concat(
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'JP DARGHA')
    ),
    ["532/8A"].concat(
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["537"].concat(
        getStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'PENJERLA', 'KODICHERLA')
    ),
    ["539"].concat(
        getStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/1Z"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["539/8A"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["539/300"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "BUDVEL STATION"),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["546"].concat(
        getStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
        getStops(OSK_Stops, 'MULKALAPALLY', 'BHUVANAGIRI'),
    ),
    ["555"].concat(
        getStops(LGRH_KTGD, 'DILSHUKNAGAR', 'HAYATHNAGAR'),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["555/290U"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["568"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'DAMARAKUNTA')
    ),
    ["578"].concat(
        getStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
    ),
    ["580"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "KEESARAGUTTA KAMAN"),
        getStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getStops(OSK_Stops_DOWN, 'JALALPUR', 'YADAGIRIGUTTA'),
    ),
    ["589"].concat(
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getStops(OSK_Stops_DOWN, 'ATHVELLY', 'RAMAYAMPET')
    ),
    ["593"].concat(
        getStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'CHEVELLA')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    )
]

let DetailedRoutesDOWN = [
    ["1"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1B"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'VST'),
        getStops(SKPL_SECB, "RTC X ROADS", "SECUNDERABAD")
    ),
    ["1C"].concat(
        "CITY BUS STATION",
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D"].concat(
        getStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["1D/299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1H"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1HD"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, "KOTHAPET X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1JL"].concat(
        getStops(LGRH_KTGD, 'LANGER HOUSE', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1JK"].concat(
        getStops(MNBD_SRPT, 'KALI MANDIR', 'TK BRIDGE'),
        getStops(LGRH_KTGD, 'LANGER HOUSE', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1K"].concat(
        SHD[454], SHD[453], SHD[181],
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1L"].concat(
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1MD"].concat(
        "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, "KOTHAPET", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1P"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898]
    ),
    ["1P/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VM"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VS"].concat(
        "SAHAB NAGAR", SHD[313],
        getStops(TailsDOWN, 'RYTHU BAZAR', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1W"].concat(
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1X"].concat(
        "KACHEGUDA STATION",
        "KACHEGUDA X ROADS",
        getStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
    ),
    ["1Z"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/251"].concat(
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),

    // 2 SERIES
    ["2"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2C"].concat(
        SHD[113],
        getStops(MHRM_MDCL, "CRPF GATE (BRKS)", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2K"].concat(
        SHD[454], SHD[453], SHD[181], SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2U"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "NAYAPUL"),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2Z"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 3 SERIES

    ["3"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
        SHD[526],
        getStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
    ),
    ["3C"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "AFZALGUNJ")
    ),
    ["3DN"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3H"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3HN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3K"].concat(getStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
    ["3K/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'HABSIGUDA'),
        getStops(SHMB_KSR, "TARNAKA", "ECIL X ROADS")
    ),
    ["3K/95"].concat(getStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")),
    ["3K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["3K/252"].concat(
        SHD[843], getStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["3K/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["3KN"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3KN/95"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["3KJ"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS")
    ),
    ["3L"].concat(
        SHD[780],
        getStops(KSR_SHMB, "LALAPET (RAM TH.)", "AFZALGUNJ")
    ),
    ["3M"].concat(
        SHD[66], SHD[562], SHD[573], SHD[572], SHD[736], SHD[633],
        getStops(KSR_SHMB, "ZTS X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3N"].concat(
        getStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
        getStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FIVER HOSPITAL"),
        SHD[1099],
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["3N/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["3T"].concat(
        SHD[993],
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
    ),
    ["3Y"].concat(
        "BJR NAGAR", "VAMPUGUDA", "BANK COLONY(SAKET)", "YELLAREDDYGUDA (KAPRA)", SHD[302], SHD[961],
        getStops(GWRL_HCLX, 'RADHIKA THEATER', 'NORTH KAMALA NAGAR'),
        getStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ")
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5G"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5KM"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        getStops(LGPL_CRPL, 'SHAIKPET DARGAH', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16AD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["5K/92A"].concat(
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/92R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getStops(SECB_SKPL, "DAIRY FARM (CNTLMT)", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/120K"].concat(
        "KOKAPET",
        getStops(SKPL_SECB, "KOKAPET X ROADS", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/125"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/188"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["5K/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["5K/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5M"].concat(
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'MALLEPALLY'),
        SHD[1063],
        getStops(MNBD_SRPT, "MAHAVIR HOSPITAL", "SECUNDERABAD")
    ),
    ["5R"].concat(
        getStops(SRPT_MNBD, "RISALA BAZAR", 'PATNY'),
        getStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["5R/5"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),
    ["6L/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["6R"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),
    ["6RK"].concat(
        getStops(MNBD_SRPT, 'KALI MANDIR', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),

    // 7 SERIES
    ["7Z"].concat(
        getStops(SHMB_KSR, 'ARAMGHAR', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["7Z/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        SHD[525],
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], "AOC RECORDS", SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),
    ["8A"].concat(
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8AK"].concat(
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8UA"].concat(
        getStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "SECUNDERABAD")
    ),
    ["8A/85"].concat(
        getStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["8A/178G"].concat(
        "GHOUSE NAGAR", "ISMAIL NAGAR", SHD[103],
        getStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8A/532"].concat(
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["8A/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["8C"].concat(
        getStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8C/85P"].concat(
        getStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PARADISE'),
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ')
    ),
    ["8R"].concat(
        SHD[220],
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'PATNY CENTER'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),

    // 9 SERIES
    ["9A"].concat(
        "AG COLONY", "VIKASPURI COLONY", SHD[1054],
        getStops(PTCR_GTKS, 'SR NAGAR', 'CITY BUS STATION'),
    ),
    ["9F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'CITY BUS STATION'),
    ),
    ["9K"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9K/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9K/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["9K/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9X"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/41C"].concat(
        "ASBESTOS COLONY",
        getStops(BLNR_MLPT, 'RANGA REDDY KAMAN', 'ERRAGODALU'),
        getStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/283D"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9XM"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9XM/230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 10 SERIES
    ["10"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10FV"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HA"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HP"].concat(
        "PREM NAGAR",
        getStops(MDCL_ADBT, 'HAFEEZPET', 'KONDAPUR'),
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HW"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10J"].concat(
        getStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10JP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE')
    ),
    ["10K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KL"].concat(
        getStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    ["10KM"].concat(
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10Y"].concat(
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF/16S"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10KJ/18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10K/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["10KM/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 11 SERIES
    ["11W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "MYTHRIVANAM")
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["14PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR",
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D/20"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["15H/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15H/242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 16 SERIES
    ["16/20"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AK"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "VAYUPURI"),
        getStops(TailsUP, 'VINOBA NAGAR', 'KAKATHIYA NAGAR'),
        getStops(HCLX_GWRL, 'NEREDMET OLD PS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CR"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16ES"].concat(
        getStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'PATNY CENTER'),
        SHD[760], SHD[448], "LAXMI NAGAR (PKT)",
        getStops(GWRL_HCLX, 'AOC CENTER', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16NY"].concat(
        getStops(GTKS_KPHB, 'YAPRAL', 'AMMUGUDA BAZAR'),
        "DEFENCE COLLEGE", SHD[712], SHD[241],
        getStops(HCLX_GWRL, 'NEREDMET X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16P"].concat(
        SHD[780], "SARDAR PATEL NAGAR",
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], "SARDAR PATEL NAGAR",
        getStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/20"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        "PRASHASAN NAGAR",
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/281R"].concat(
        getStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16C/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CD/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CR/38T"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16D/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16H/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633],
        getStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16R/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["16S/10YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),

    // 17 SERIES
    ["17D"].concat(
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DH"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DS"].concat(
        getStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17DV"].concat(
        SHD[1065],
        getStops(KSR_SHMB, "ICOM TELE LIMITED", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17H"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17HN"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'HB COLONY'),
        getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878],
        SHD[898]
    ),
    ["17H/29B"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17CS"].concat(
        getStops(TailsDOWN, 'CHERLAPALLY', 'CHERLAPALLY JAIL'),
        getStops(KSR_SHMB, "CHAKRIPURAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD"),
    ),
    ["17S"].concat(
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        SHD[641],
        getStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17V"].concat(
        SHD[1065],
        getStops(KSR_SHMB, "ICOM TELE LIMITED", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 18 SERIES
    ["18"].concat(
        getStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18B"].concat(
        "CCMB COLONY",
        getStops(TailsDOWN, 'MALLIKARJUNA TEMPLE', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/10H"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18J"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'ALUGADDA BHAVI', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18R"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'ALUGADDA BHAVI', 'NGRI'),
    ),
    ["18V"].concat(
        SHD[1140], SHD[465], SHD[441],
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'RAMANTHAPUR CHURCH'),
        SHD[198], SHD[162], SHD[163],
        getStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD')
    ),
    ["18VJ"].concat(
        SHD[448], SHD[754], SHD[898],
        getStops(DNGL_IBP, 'ALUGADDA BHAVI', 'NGRI'),
        SHD[163], SHD[162], SHD[198],
        getStops(GTKS_PTCR, 'RAMANTHAPUR CHURCH', 'RAMANTHAPUR'),
        SHD[441], SHD[465], SHD[1140]
    ),
    ["18VS"].concat(
        getStops(PTCR_GTKS, 'RAMANTHAPUR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'SURVEY OF INDIA', 'SECUNDERABAD'),
    ),
    ["18/10KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18/47U"].concat(
        getStops(MCRL_KOTI, 'JUBLIE HILLS CHECK POST', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, "PANJAGUTTA", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS'),
        getStops(TailsUP, 'NTR STATUE (BDUPL)', 'INDIRA NAGAR X ROADS'),
        SHD[144]
    ),
    ["18/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["18/283S"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["18C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGICHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),

    // 19 SERIES
    ["19F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K/288D"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["19KJ"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19M"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19MP"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19YF"].concat(
        SHD[152],
        getStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getStops(PTCR_GTKS, 'AMEERPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),

    // 20 SERIES
    ["20P"].concat(
        getStops(TailsDOWN, 'NAMPALLY', 'NTR STADIUM'),
        getStops(RMNG_DRFM, 'ASHOK NAGAR X ROADS', 'KALPANA'),
        getStops(TailsDOWN, 'BHOLAKPUR', 'PADMARAO NAGAR'),
        SHD[207], SHD[898]
    ),
    ["20/15D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["20/15H"].concat(
        getStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/16"].concat(
        getStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["20/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["20/16R"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/280"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),

    // 21 SERIES
    ["21W"].concat(
        SHD[1081], SHD[414], SHD[1057], SHD[177], SHD[178], SHD[186],
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 22 SERIES
    ["22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'SECUNDERABAD')
    ),
    ["22/49E"].concat(
        getStops(GTKS_PTCR, 'IRRUM MANZIL', 'NIMS HOSPITAL'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),
    ["22/90L"].concat(
        SHD[747],
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["22D"].concat(
        SHD[612], SHD[14], SHD[10], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),
    ["22K"].concat(
        SHD[169], SHD[134], SHD[9],
        getStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),

    // 23 SERIES
    ["23B"].concat(
        SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BK"].concat(
        SHD[516], SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BS"].concat(
        SHD[976], SHD[561], SHD[516], SHD[132], SHD[974],
        getStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23GF"].concat(
        getStops(MDCL_MHRM, 'GREEN FIELDS COLONY', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23GS"].concat(
        SHD[976], SHD[561],
        getStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23K"].concat(
        getStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'DGQA QUARTERS'),
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23T"].concat(
        SHD[998], SHD[745], SHD[429],
        getStops(MDCL_MHRM, 'KANJIGUDA', 'TEACHERS COLONY'),
        getStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),

    // 24 SERIES
    ["24"].concat(
        getStops(GTKS_KPHB, 'YAPRAL', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B"].concat(
        getStops(GTKS_KPHB, 'BALAJI NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BA"].concat(
        getStops(GTKS_KPHB, 'AMBEDKAR NAGAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BJ"].concat(
        "BJR NAGAR",
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24E"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        "VAYUPURI NORTH", SHD[996], SHD[712], "DEFENCE COLLEGE",
        getStops(GTKS_KPHB, 'AMMUGUDA BAZAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'PATNY'),
        SHD[878], SHD[898]
    ),
    ["24S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24B/16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24J"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["24L/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["24S/273"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 25 SERIES
    ["25A"].concat(
        getStops(TailsDOWN, 'SURYA NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ"].concat(
        getStops(TailsUP, 'JONNABANDA', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ/M"].concat(
        getStops(TailsUP, 'GOPAL NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25M"].concat(
        getStops(TailsDOWN, 'GOPAL NAGAR', 'SELECT TALKIES'),
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25MS"].concat(
        getStops(TailsDOWN, 'SHARAN NAGAR', 'SANJEEVA GARDENS'),
        getStops(TailsDOWN, 'GOPAL NAGAR X ROADS', 'SELECT TALKIES'),
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25P"].concat(
        "PANCHASHEELA ENCLAVE", "CITIZEN COLONY", "VBR GARDENS",
        getStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S"].concat(
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/1"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1P"].concat(
        getStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898],
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/2"].concat(
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/5K"].concat(
        getStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getStops(MNBD_SRPT, "PATNY", "LOTHKUNTA"),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/227"].concat(
        SHD[305],
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 26 SERIES
    ["26M"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["26M/49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        SHD[755],
        getStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["26N"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'ASHOK GARDENS'),
        "BAPUJI NAGAR", "CENTER POINT", "DIAMOND POINT", "MUD FORT",
        getStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 29 SERIES
    ["29B"].concat(
        getStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")
    ),
    ["29B/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["29B/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["29B/272I"].concat(
        SHD[407],
        SHD[1046],
        getStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["29S"].concat(
        "SUBHASH NAGAR (JDM)",
        getStops(DNGL_IBP, "SHAHPUR NAGAR", "SECUNDERABAD")
    ),
    ["29Q"].concat(
        SHD[792], SHD[214],
        getStops(DNGL_IBP, "CHINTAL", "BALANAGAR")
    ),

    // 30 SERIES
    ["30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PARADISE', 'SECUNDERABAD')
    ),
    ["30S"].concat(
        SHD[969], SHD[541], SHD[531], SHD[512], SHD[271],
        getStops(BLNR_MLPT, 'BEERAPPA NAGAR', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PARADISE', 'SECUNDERABAD')
    ),
    ["30/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30/280"].concat(
        getStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),

    // 31 SERIES
    ["31P"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'SECUNDERABAD')
    ),

    // 37 SERIES
    ["37"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        "VAYUPURI NORTH", "SHOPPING COMPLEX", SHD[712], SHD[241], SHD[698], SHD[317], SHD[850], SHD[118], "AOC GATE", SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754], SHD[878], SHD[898]
    ),
    ["37/8"].concat(
        getStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525],
    ),

    // 38 SERIES
    ["38EX"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        SHD[1027],
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16CR"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        "BHARATH NAGAR (MLY)", "SHAFI NAGAR", "SITI NAGAR", "RTC COLONY (MLY)",
        "TIRUMALA NAGAR", "NMDC (ANANDH BAGH)", SHD[264],
        SHD[39],
        getStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),

    // 40 SERIES
    ["40"].concat(
        SHD[506], SHD[508], SHD[813],
        getStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
        getStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),
        SHD[898]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL'),
        getStops(MLPT_BLNR, 'ERRAGODALU', 'RANGA REDDY KAMAN'),
        "ASBESTOS COLONY"
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "PARADISE"),
        getStops(DRFM_RMNG, 'PARADISE CENTER', 'KALPANA'),
        SHD[131],
        getStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        SHD[506]
    ),

    // 46 SERIES
    ["46"].concat(
        SHD[759],
        getStops(LGPL_CRPL, "POLICE LINES", "SECUNDERABAD"),
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[795],
        getStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794], SHD[908]
    ),
    ["47L"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'SECUNDERABAD'),
    ),
    ["47L/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47Y"].concat(
        getStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'JOURNLIST COLONY'),
        getStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["47YM"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA', 'JOURNLIST COLONY'),
        getStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 49 SERIES
    ["49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49A"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49MT"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49E/22"].concat(
        getStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getStops(PTCR_GTKS, 'NIMS HOSPITAL', 'IRRUM MANZIL')
    ),
    ["49M/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16C"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16H"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/26M"].concat(
        getStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    ),
    ["49M/92A"].concat(
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        getStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
    ),
    ["49M/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["49M/250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["49M/250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["49MT/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM'),
        "MEHDIPATNAM DEPOT", "GUDIMALKAPUR", "SHIV BAGH", "SHARADA NAGAR (MP)", "TALLAGADDA"
    ),

    // 50 SERIES
    ["50B"].concat(
        SHD[195],
        getStops(TailsDOWN, 'CGCL GRAMPANCHAYATH', 'BODUPPAL CIRCLE'),
        getStops(TailsDOWN, 'CHILKA NAGAR', 'NACHARAM IDA'),
        getStops(CRPL_LGPL, 'NACHARAM X ROADS', 'SECUNDERABAD')
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["65MG"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["65/116GA"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION'),
    ),
    ["65M/123"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 71 SERIES
    ["71A"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGICHERLA X ROADS', 'AFZALGUNJ')
    ),
    ["71AB"].concat(
        SHD[195],
        getStops(TailsDOWN, 'CGCL GRAMPANCHAYATH', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'AFZALGUNJ')
    ),
    ["71K"].concat(
        SHD[454],
        getStops(GTKS_PTCR, 'KACHEGUDA KAMELA', 'AFZALGUNJ')
    ),

    // 72 SERIES
    ["72"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, 'KOTHAPET', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11], "HIGH COURT"
    ),
    ["72/277D"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72H"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72HK"].concat(
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72J"].concat(
        SHD[237], SHD[858], SHD[424],
        getStops(GWRL_HCLX, 'BANDLAGUDA (NGL)', 'CHAITANYAPURI'),
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11]
    ),

    // 83 SERIES
    ["83J"].concat(
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83JA"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83J/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["85P/8C"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["85/253L"].concat(
        getStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["85V"].concat(
        "VENKATAPUR", "BISMILLAH COLONY", "KOTHAPET(SALALA)",
        getStops(MHRM_MDCL, "BARKAS X ROADS", "SHAH ALI BANDA"),
        SHD[193]
    ),

    // 86 SERIES
    ["86A"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86C"].concat(
        getStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86J"].concat(
        getStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86K"].concat(
        SHD[506],
        getStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
        getStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),


    // 90 SERIES
    ["90/253T"].concat(
        "FAB CITY", "SREE NAGAR",
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90/300"].concat(
        SHD[620],
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90B"].concat(
        getStops(GWRL_HCLX, 'BANDLAGUDA DEPOT', 'OLD NAGOLE'),
        getStops(IBP_DNGL, "NAGOLE X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90BE"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS")
    ),
    ["90LK"].concat(
        getStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
    ),
    ["90DL"].concat(
        getStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90LV"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["90L/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/22"].concat(
        getStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["90L/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["90UN"].concat(
        SHD[1038], SHD[672],
        getStops(GWRL_HCLX, 'NAGOLE X ROADS', 'DILSHUKNAGAR')
    ),
    ["90U/203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 92 SERIES
    ["92A"].concat(
        SHD[620], getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/49M"].concat(
        getStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["92K"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["92R"].concat(
        SHD[620],
        getStops(SKPL_SECB, 'RETHIBOWLI', 'DAIRY FARM (CNTLMT)'),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["92R/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "DAIRY FARM (CNTLMT)"),
        getStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 94 SERIES
    ["94R"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getStops(TailsDOWN, 'CHINTALMET', 'KISHAN BAGH'),
        getStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["94RM"].concat(
        SHD[807],
        getStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getStops(TailsDOWN, 'CHINTALMET', '9 NUMBER'),
        SHD[942], SHD[342],
        getStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 95 SERIES
    ["95"].concat(
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["95/3K"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")
    ),
    ["95/3KN"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["95K"].concat(
        getStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 100 SERIES
    ["100/299"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, "PANAMA", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100M"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getStops(KTGD_LGRH, "KOTHAPET", "KOTI MEDICAL COLLEGE"),
        getStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 102 SERIES
    ["102"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/9K"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/185"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'OWAISI HOSPITAL'),
        SHD[628]
    ),
    ["102/253L"].concat(
        getStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["102B/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102M"].concat(
        getStops(TailsDOWN, 'BALAPUR VILLAGE', 'SAI NAGAR'),
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getStops(TailsDOWN, 'RCI', 'VIJAY DURGA NAGAR'),
        getStops(TailsDOWN, 'SHIVAJI CHOWK', 'SAI NAGAR'),
        getStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 104 SERIES
    ["104A"].concat(
        getStops(ADBT_MDCL, 'RAJIV GRUHA KALPA', 'KOTI WOMENS COLLEGE')
    ),
    ["104R"].concat(
        getStops(MDCL_ADBT, 'RN REDDY', 'RTC COLONY(CHAMPAPET)'),
        getStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'SAIDABAD'),
        SHD[336], SHD[978]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107VL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VR"].concat(
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VS"].concat(
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SRRNGR)'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 113 SERIES
    ["113B"].concat(
        getStops(TailsDOWN, 'BARKATPURA', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KM"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'MEDIPALLY')
    ),
    ["113S"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE')
    ),
    ["113W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["113M/288"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113FT"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113KLT"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113KT"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113FZ"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'CHENGICHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGICHERLA')
    ),
    ["113MZ"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'MEDIPALLY')
    ),

    // 115 SERIES
    ["115"].concat(
        SHD[144],
        getStops(TailsDOWN, 'INDIRA NAGAR X ROADS', 'NTR STATUE (BDUPL)'),
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'CHADERGHAT X ROADS'),
        "KOTI MEDICAL COLLEGE",
    ),

    // 116 SERIES
    ["116GA/65"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["116N"].concat(
        getStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),

    // 117 SERIES
    ["117"].concat(
        SHD[525],
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'NACHARAM X ROADS'),
        getStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
    ),

    // 118 SERIES
    ["118W/300"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[319], SHD[582],
        getStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        SHD[620]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[711], SHD[306],
        getStops(SKPL_SECB, 'GANDIPET X ROAD', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["120K/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'KOKAPET X ROADS'),
        "KOKAPET"
    ),

    // 123 SERIES
    ["123"].concat(
        getStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getStops(LGPL_CRPL, 'SHAIKPET NALA', 'MEHDIPATNAM')
    ),
    ["123/65M"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 125 SERIES
    ["125/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 126 SERIES
    ["126/300"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["126M"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'MEHDIPATNAM'),
    ),

    // 127 SERIES
    ["127AL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
    ),
    ["127DA"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
    ),
    ["127K"].concat(
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),
    ["127KL"].concat(
        getStops(KTGD_LGRH, 'LB NAGAR', 'KOTI WOMENS COLLEGE'),
        getStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),

    // 147 SERIES
    ["147"].concat(
        getStops(MDCL_ADBT, 'KONDAPUR', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'ANDHRA JYOTHI'),
        getStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getStops(MNBD_SRPT, 'PATNY', 'HANUMAN TEMPLE'),
        SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 156 SERIES
    ["156/205F"].concat(
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156/299"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156V/505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["156L"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["156S"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156V"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 158 SERIES
    ["158"].concat(
        getStops(PTCR_GTKS, 'ESI HOSPITAL', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158FL"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158HF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["158VF"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 171 SERIES
    ["171"].concat(
        getStops(KPHB_GTKS, "GAJULA RAMARAM", 'NLB NAGAR'),
        getStops(DNGL_IBP, "GAJULA RAMARAM X ROADS", "SECUNDERABAD")
    ),
    ["171K"].concat(
        SHD[510],
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["171K/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
        getStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["171M/189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["171R"].concat(
        SHD[960],
        getStops(KPHB_GTKS, 'SRI NIWAS NAGAR', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], "SECUNDERABAD")
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),

    // 183 SERIES
    ["183B"].concat(
        getStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["183SS"].concat(
        getStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'SUCHITRA')
    ),
    ["183S/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'CHINTAL'),
        SHD[905],
    ),

    // 185 SERIES
    ["185G"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getStops(PTCR_GTKS, 'KUKATPALLY', 'CITY BUS STATION')
    ),
    ["185/102"].concat(
        getStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),

    // 188 SERIES
    ["188"].concat(
        getStops(MNBD_SRPT, "KALI MANDIR", "MEHDIPATNAM")
    ),
    ["188/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR")
    ),
    ["188/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),

    // 189 SERIES
    ["189M"].concat(
        getStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/171M"].concat(
        getStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/272G"].concat(
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),

    // 195 SERIES
    ["195G"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GJ"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GK"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195J"].concat(
        getStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        SHD[510],
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195P"].concat(
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195W"].concat(
        getStops(MLPT_BLNR, 'BACHUPALLY X ROADS', 'WAVEROCK')
    ),
    ["195WJ"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195WP"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'KAISAR NAGAR'),
        getStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),

    // 201 SERIES
    ["201"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE"),
    ),
    ["201G"].concat(
        getStops(GWRL_HCLX, 'GOWRELLY', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201M"].concat(
        SHD[606], SHD[849], SHD[994],
        getStops(GWRL_HCLX, 'TATTI ANNARAM X ROADS', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201K"].concat(
        getStops(OSK_Stops_DOWN, 'RAJIV GRUHAKALPA (KNTLR)', 'HARIZANAWADA'),
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE"),
    ),
    ["201Q"].concat(
        getStops(GWRL_HCLX, 'QUTHBULLAPUR - GOWRELLY', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'BACHARAM')
    ),
    ["201T/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR CLY (HYT)', 'TARAMATIPET')
    ),

    // 202 SERIES
    ["202B"].concat(
        getStops(OSK_Stops_DOWN, 'BRAHMANAPALLY', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'KOTI WOMENS COLLEGE')
    ),
    ["202K/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR DEPOT"),
        SHD[1072],
        getStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'TORRUR VILLAGE'),
        SHD[1383]
    ),

    // 203 SERIES
    ["203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AK"].concat(
        SHD[790], SHD[768], SHD[762],
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AR"].concat(
        SHD[835], SHD[885], SHD[790], SHD[768], SHD[762],
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getStops(SKPL_SECB, 'RAM KOTI X ROADS', 'SECUNDERABAD')
    ),
    ["203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203A/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203N/102B"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getStops(CRPL_LGPL, 'NACHARAM X ROADS', 'TARNAKA'),
        getStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203U"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),
    ["203U/90U"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDDA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["204DA"].concat(
        getStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'DILSHUKNAGAR')
    ),
    ["204U"].concat(
        getStops(OSK_Stops_DOWN, 'SANGHI NAGAR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),
    ["204UA"].concat(
        getStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),

    // 205 SERIES
    ["205"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["205A"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["205A/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205F/156"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET')
    ),
    ["205M/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),

    // 211 SERIES
    ["211"].concat(
        SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211/242"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["211B"].concat(
        getStops(OSK_Stops, 'UDDAMARRI', 'SHAMIRPET VILLAGE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211CD"].concat(
        getStops(OSK_Stops_DOWN, 'DRDO (YADGARPALLY)', 'THIMMAIPALLY'),
        SHD[51], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'SECUNDERABAD')
    ),
    ["211D"].concat(
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211DY"].concat(
        SHD[119], SHD[243], SHD[775],
        getStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211K"].concat(
        getStops(OSK_Stops, 'KESAVARAM', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211M"].concat(
        getStops(TailsDOWN, 'CRPF', 'BHAGYA NAGAR COLONY'),
        getStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 212 SERIES
    ["212"].concat(
        SHD[140], "BITS PILANI X ROADS",
        getStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212/702"].concat(
        getStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212T"].concat(
        "ICICI TURKAPALLY",
        "KOLTHUR",
        "SAMPANBOLE",
        getStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),

    // 215 SERIES
    ["215"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),

    // 216 SERIES
    ["216"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216KL"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getStops(BLNR_MLPT, 'KOTHAGUDA X ROADS', 'ANJAYYA NAGAR'),
        getStops(LGPL_CRPL, 'GACHIBOWLI X ROADS', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216M"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'MEHDIPATNAM')
    ),

    // 217 SERIES
    ["217"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["217/254"].concat(
        SHD[790], SHD[885], SHD[835],
        getStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["217C"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["217D"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),

    // 218 SERIES
    ["218"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
    ),
    ["218C"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION'),
    ),
    ["218CA"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["218D"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["218H"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["218L"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/102"].concat(
        SHD[628],
        getStops(ADBT_MDCL, 'OWAISI HOSPITAL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/102B"].concat(
        getStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203A"].concat(
        getStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203N"].concat(
        getStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/224MN"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET ARCH'),
        getStops(PTCR_GTKS, 'NIZAMPET X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/277K"].concat(
        getStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')

    ),


    // 219 SERIES
    ["219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),
    ["219/16A"].concat(
        getStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17H"].concat(
        getStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/171K"].concat(
        getStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        getStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    ),
    ["219/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["219I/224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219I/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 222 SERIES
    ["222A"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'CARE HOSPITAL'),
        getStops(MDCL_ADBT, 'PENSION OFFICE', 'KOTI BUS STATION')
    ),
    ["222L"].concat(
        getStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getStops(MDCL_ADBT, 'ALLWYN X ROADS', 'JUBLIE HILLS CHECK POST'),
        getStops(MCRL_KOTI, 'LV PRASAD', 'CARE HOSPITAL'),
        getStops(MDCL_ADBT, 'PENSION OFFICE', 'KOTI BUS STATION')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        SHD[908], SHD[794],
        getStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        SHD[795]
    ),
    ["224G"].concat(
        getStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS')
    ),
    ["224G/10KM"].concat(
        getStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),
    ["224G/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/219I"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224MN"].concat(
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS')
    ),
    ["224MN/218"].concat(
        SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'JNTU COLLEGE'),
        getStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224X"].concat(
        getStops(MDCL_ADBT, 'IDA X ROADS', 'MIYAPUR X ROADS')
    ),

    // 226 SERIES
    ["226"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "RAMACHANDRAPURAM"),
        "RC PURAM (ZPHS)", "LIG COLONY", "BHEL", "BHEL MIG",
        getStops(PTCR_GTKS,'LINGAMPALLY','KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 227 SERIES
    ["227"].concat(
        getStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["227/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 229 SERIES
    ["229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["229/1D"].concat(
        getStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1Z"].concat(
        getStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/5K"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/8C"].concat(
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getStops(RMNG_DRFM, 'RANIGUNJ', 'PARADISE CENTER'),
        getStops(IBP_DNGL, 'PARADISE', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/18C"].concat(
        getStops(TailsDOWN, 'CHENGICHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGICHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/25S"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["229/49M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'WESLEY COLLEGE'),
        getStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/90L"].concat(
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290U"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229B"].concat(
        SHD[156],
        getStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229P"].concat(
        getStops(OSK_Stops, 'PUDUR', 'KISTAPUR'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 230 SERIES
    ["230A"].concat(
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230AN"].concat(
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P"].concat(
        getStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9XM"].concat(
        SHD[193],
        getStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    // 231 SERIES
    ["231"].concat(
        getStops(OSK_Stops, 'MEDICITY', 'KISTAPUR'),
        SHD[613]
    ),
    ["231KN"].concat(
        getStops(OSK_Stops_DOWN, 'KAZIPALLY', 'NARAYANA IIT'),
        getStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getStops(PTCR_GTKS, "JNTU COLLEGE", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 233 SERIES
    ["233"].concat(
        getStops(OSK_Stops, 'NUTHANKAL', 'APARNA KOMPALLY'),
        getStops(MDCL_MHRM, 'KOMPALLY', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 241 SERIES
    ["241T"].concat(
        getStops(OSK_Stops, 'DHARMAVARAM', 'CHIRYALA VILLAGE'),
        getStops(KSR_SHMB, "CHERIYAL X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 242 SERIES
    ["242"].concat(
        getStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["242/17H"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/211"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/272G"].concat(
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD"),
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'METTUGUDA'),
        SHD[993],
        getStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242A"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242B"].concat(
        SHD[147],
        SHD[46],
        getStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242G"].concat(
        SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242GA"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", SHD[631], SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NGRM)", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG/15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NGRM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),

    // 245 SERIES
    ["245A"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 250 SERIES
    ["250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250/10K"].concat(
        getStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898],
    ),
    ["250/49"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49MT"].concat(
        "TALLAGADDA", "SHARADA NAGAR (MP)", "SHIV BAGH", "GUDIMALKAPUR", "MEHDIPATNAM DEPOT", SHD[620],
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["250D/49M"].concat(
        getStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250S"].concat(
        getStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),

    // 251 SERIES
    ["251M"].concat(
        SHD[651], SHD[439],
        getStops(OSK_Stops, 'MADANAPALLY', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["251/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
    ),
    ["251/2Z"].concat(
        getStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),
    ["251/5K"].concat(
        getStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR"),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["251/7Z"].concat(
        getStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),
    ["251/90L"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["251/188"].concat(
        getStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),
    ["251/300"].concat(
        getStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),

    // 252 SERIES
    ["252S"].concat(
        getStops(OSK_Stops_DOWN, 'SHANKARAPUR', 'RASHEEDGUDA'),
        'KISHANGUDA',
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["252/3K"].concat(
        getStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["252/6IW"].concat(
        getStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 253 SERIES
    ["253"].concat(
        getStops(MHRM_MDCL, 'MAHESHWARAM', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/85"].concat(
        getStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["253L/102"].concat(
        getStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["253T/90"].concat(
        SHD[448],
        SHD[754],
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["253W"].concat(
        getStops(MHRM_MDCL, 'MAHESHWARAM', 'CHANDRAYANGUTTA X ROADS'),
        getStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 254 SERIES
    ["254/217"].concat(
        getStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN"
    ),

    // 272 SERIES
    ["272"].concat(
        SHD[157], SHD[158],
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272G/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/18"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["272G/29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["272G/83J"].concat(
        getStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/189M"].concat(
        getStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272G/219I"].concat(
        getStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272G/242"].concat(
        getStops(KSR_SHMB, 'KEESARAGUTTA', 'TARNAKA'),
        getStops(CRPL_LGPL, 'RAILWAY DEGREE COLLEGE', 'CHILKALGUDA X ROADS'),
        getStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["272I/29B"].concat(
        getStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        SHD[1046],
        SHD[407]
    ),
    ["272B"].concat(
        SHD[157], SHD[158],
        getStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),

    // 273 SERIES
    ["273/24S"].concat(
        getStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 277 SERIES
    ["277"].concat(
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'CHADERGHAT'),
        SHD[624]
    ),
    ["277D"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
        getStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
    ),
    ["277D/72"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["277K/218"].concat(
        getStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA')
    ),
    ["277L"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "LB NAGAR X ROADS"),
    ),
    ["277N"].concat(
        SHD[665], "KAMMAGUDA", "GURRAMGUDA VILLAGE",
        getStops(IBP_DNGL, 'GURRAMGUDA X ROADS', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),

    // 279 SERIES
    ["279"].concat(
        getStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["279/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["279U"].concat(
        getStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")
    ),

    // 280 SERIES
    ["280"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280B"].concat(
        SHD[147], "HOLY MERRY COLLEGE", "VIGNAN SCHOOL", "KONDAPUR VLG", "ANNAPURNA COLONY(GTKS)",
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280I"].concat(
        "INFOSYS (PCHRM)",
        getStops(GTKS_PTCR, 'SINGAPUR TOWNSHIP', 'UPPAL RING ROAD')
    ),
    ["280J"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754],
        SHD[448]
    ),
    ["280N"].concat(
        "NFC NAGAR",
        getStops(OSK_Stops_DOWN, 'NFC NAGAR X ROADS', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280X"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD')
    ),
    ["280/20"].concat(
        getStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/30"].concat(
        getStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/219"].concat(
        getStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/488"].concat(
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280/492"].concat(
        getStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 281 SERIES
    ["281"].concat(
        getStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getStops(KSR_SHMB, 'NAGARAM', 'ECIL X ROADS')
    ),
    ["281/3K"].concat(
        getStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/6L"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/24B"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["281/24L"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["281/113M"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/250"].concat(
        getStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281R/16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),

    // 282 SERIES
    ["282K"].concat(
        SHD[496],
        getStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 283 SERIES
    ["283C"].concat(
        "SURARAM COLONY",
        "SURARAM CIRCLE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283D/9X"].concat(
        getStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["283K"].concat(
        getStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283S/18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283VS"].concat(
        "SURARAM VILLAGE",
        getStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283T"].concat(
        "TENUGUDEM", "VENKATAPUR(TNGM)", "ANURAG UNIVERSITY",
        getStops(GTKS_PTCR, 'JODIMETLA', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 288 SERIES
    ["288"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["288/113M"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["288A"].concat(
        getStops(OSK_Stops_DOWN, 'AMDAPUR', 'MURTHUZAGUDA'),
        getStops(MNBD_SRPT, 'JBIT', 'MEHDIPATNAM')
    ),
    ["288C"].concat(
        getStops(OSK_Stops_DOWN, 'APPOJIGUDA', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D"].concat(
        SHD[209], SHD[1026],
        getStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D/19K"].concat(
        getStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288K"].concat(
        getStops(MNBD_SRPT, 'MOINABAD', 'LAKDI KA PUL'),
        getStops(MDCL_ADBT, 'ASSEMBLY', 'BANK STREET (KOTI)'),
        SHD[507]
    ),

    // 290 SERIES
    ["290"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290KJ"].concat(
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[754],
        SHD[448]
    ),
    ["290KP"].concat(
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U"].concat(
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UA"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UF"].concat(
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/201"].concat(
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/201T"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR CLY (HYT)'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/202K"].concat(
        SHD[1383],
        getStops(OSK_Stops_DOWN, 'TORRUR VILLAGE', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/204"].concat(
        "GANDI CHERUVU", SHD[303],
        getStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205A"].concat(
        getStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205M"].concat(
        getStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/229"].concat(getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["290U/463"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 299 SERIES
    ["299"].concat(
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/1D"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["299/100"].concat(
        SHD[897], SHD[139],
        getStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/156"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["299D"].concat(getStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

    // 300 SERIES
    ["300"].concat(
        getStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/90"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/118W"].concat(
        getStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["300/126"].concat(
        getStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["300/251"].concat(
        getStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "BUDVEL STATION"),
        getStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["300L"].concat(
        SHD[552],
        getStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),

    // 400 SERIES
    ["412"].concat(
        getStops(OSK_Stops_DOWN, 'MALL', 'KHANAPUR X ROADS'),
        getStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),
    ["445"].concat(
        getStops(OSK_Stops_DOWN, 'KETHIREDDYPALLY', 'SAJJANPALLY X ROADS'),
        getStops(OSK_Stops, 'KETHIREDDYPALLY ROAD', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["447R"].concat(
        getStops(OSK_Stops_DOWN, 'RAVULAPALLY', 'MUDIMYAL'),
        getStops(OSK_Stops, 'MUDIMYAL X ROADS', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["458"].concat(
        SHD[575], SHD[576], SHD[605],
        getStops(OSK_Stops_DOWN, 'MANSANPALLY X ROADS', 'GOLLAPALLY'),
        "KISHANGUDA",
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["463"].concat(
        "DESHMUKHI",
        getStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")
    ),
    ["463/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["464"].concat(
        getStops(OSK_Stops_DOWN, 'DANDUMAILARAM', 'GUNTAPALLY'),
        getStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getStops(KTGD_LGRH, "ABDULLAHPURMET", "DILSHUKNAGAR"),
    ),
    ["488/280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["490S"].concat(
        getStops(OSK_Stops_DOWN, 'BIBI NAGAR', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["492/280"].concat(
        SHD[898],
        SHD[207],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),
    ["495"].concat(
        getStops(OSK_Stops_DOWN, 'KANUKUNTA', 'ANANTHARAM X ROADS'),
        getStops(OSK_Stops, 'GUMMADIDALA', 'PULLAREDDY COLLEGE'),
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        "DOMARAPOCHAMPALLY",
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["498"].concat(
        "KESAVAPUR",
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498K"].concat(
        getStops(OSK_Stops, 'KOTHAPALLY', 'PULLAREDDY COLLEGE'),
        getStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        "DOMARAPOCHAMPALLY",
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["498U"].concat(
        "UDDAMARRI",
        getStops(OSK_Stops, 'USHARPALLY', 'KESAVAPUR'),
        "THUMKUNTA (JALALPUR)",
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498VJ"].concat(
        getStops(OSK_Stops, 'JINNARAM', 'PATHARAM'),
        "GAGILLAPUR",
        "DUNDIGAL X ROADS",
        "DOMARAPOCHAMPALLY",
        getStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),

    // 500 SERIES
    ["505"].concat(
        getStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["505/19S"].concat(
        getStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/156"].concat(
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/156V"].concat(
        getStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["523K"].concat(
        getStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["524"].concat(
        getStops(OSK_Stops_DOWN, 'POCHAMPALLY', 'NETAJI INSTITUTE'),
        getStops(KTGD_LGRH, 'KOTHAGUDEM', 'DILSHUKNAGAR')
    ),
    ["530"].concat(
        "KANDUKUR",
        getStops(OSK_Stops_DOWN, 'KOTTAGUDA HIGHWAY', 'GOLLAPALLY'),
        "KISHANGUDA",
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532"].concat(
        getStops(OSK_Stops, 'JP DARGHA', 'KISHANGUDA'),
        getStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["537"].concat(
        getStops(OSK_Stops_DOWN, 'KODICHERLA', 'PENJERLA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539"].concat(
        getStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539/1Z"].concat(
        getStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/8A"].concat(
        getStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/300"].concat(
        getStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getStops(SECB_SKPL, "SAGAR RING ROAD", "ARAMGHAR"),
        getStops(KSR_SHMB, "BUDVEL STATION", "SHAMSHABAD"),
        getStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["546"].concat(
        getStops(OSK_Stops_DOWN, 'BHUVANAGIRI', 'MULKALAPALLY'),
        getStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS')
    ),
    ["555"].concat(
        getStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'DILSHUKNAGAR')
    ),
    ["555/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["568"].concat(
        getStops(OSK_Stops, 'DAMARAKUNTA', 'ALIABAD HBL'),
        getStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["578"].concat(
        getStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS'),
    ),
    ["580"].concat(
        getStops(OSK_Stops, 'YADAGIRIGUTTA', 'JALALPUR'),
        getStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'TARNAKA'),
        getStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["589"].concat(
        getStops(OSK_Stops, 'RAMAYAMPET', 'ATHVELLY'),
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["593"].concat(
        getStops(OSK_Stops, 'CHEVELLA', 'AYAAN INSTITUTE OF MEDICAL'),
        getStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    )
]

function navigation(ref) {
    removeActiveLinks();
    removeActiveMenus();
    ref.classList.add('activeLink');
    hideHomeScreenSections();
    fareChartOutput.classList.add('hide');
    switch (ref.value) {
        case 1:
            // Routes
            input1.setAttribute('placeholder', 'Search By Route No...');
            routeSection1.classList.remove('close');
            routeSection2.classList.remove('close');

            randomRoutes3 = getRandomRoutes(routesArrayLEN3, 5);
            randomRoutes4 = getRandomRoutes(routesArrayLEN4, 4);

            listLEN3.innerHTML = "";
            listLEN4.innerHTML = "";

            createHomeRoutes(randomRoutes3, listLEN3, 1);
            createHomeRoutes(randomRoutes4, listLEN4, 1);

            suggessionsArray = routesArray;
            feature = 1;
            break;
        case 2:
            // Bus Stop
            input1.setAttribute('placeholder', 'Search By Bus Stop...');
            PPbusStations.classList.remove('close');

            suggessionsArray = SHD;
            feature = 2;
            break;
        case 3:
            // From - To
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            let randomRoutesFT = getRandomRoutes(pplrSearch_FT, 3);
            pplrSearch_FT_List.innerHTML = "";
            createHomeRoutes(randomRoutesFT, pplrSearch_FT_List, 2);

            suggessionsArray = SHD;
            feature = 3;
            break;
        case 4:
            // Fare Chart
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.add('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            feature = 4;
            break;

        default:
            break;
    }
}

function menuItemsClick(ref) {
    removeActiveMenus();
    ref.classList.add('active');
    changeIcons(ref);
    sideScreenMenu.classList.toggle('open');

    removeActiveLinks();
    switch (ref.value) {
        case 1:
            // Alternate Route
            hideHomeScreenSections();
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            let randomRoutesALT = getRandomRoutes(pplrSearch_ALT, 3);
            pplrSearch_FT_List.innerHTML = "";
            createHomeRoutes(randomRoutesALT, pplrSearch_FT_List, 2);

            suggessionsArray = SHD;
            feature = 5;
            break;

        case 2:
            // Bus Pass Info
            otherSectionsScreen.classList.remove('close');
            displayOtherSections(1, "BUS PASS INFO");
            break;

        case 3:
            // Contact Us
            setTimeout(() => {
                openPopUpBox(3, "N");
            }, 300);
            break;

        case 4:
            // Help
            otherSectionsScreen.classList.remove('close');
            displayOtherSections(2, "USER GUIDE");
            break;

        case 5:
            // More Apps
            otherSectionsScreen.classList.remove('close');
            displayOtherSections(3, "SHARE APP");
            getId('copyLinkBtn').classList.remove("active");
            getId('copyText').innerText = "Copy Link";
            break;

        default:
            break;
    }
}

function displayOtherSections(screen, heading) {
    busPassInfoScreen.classList.add('hide');
    helpScreen.classList.add('hide');
    shareAppScreen.classList.add('hide');
    ShortformsScreen.classList.add('hide');
    otherSectionsScreenHeading.innerHTML = heading;
    if (screen == 1) {
        busPassInfoScreen.classList.remove('hide');
    } else if (screen == 2) {
        helpScreen.classList.remove('hide');
    } else if (screen == 3) {
        shareAppScreen.classList.remove('hide');
    } else if (screen == 4) {
        ShortformsScreen.classList.remove('hide');
    }
}

function hideHomeScreenSections() {
    swapIconContainer.classList.add('hide');
    input2Container.classList.add('hide');
    routeSection1.classList.add('close');
    routeSection2.classList.add('close');
    PPbusStations.classList.add('close');
    FromToSuggesions.classList.add('hide');
    // clear1.classList.add('hide');
    // clear2.classList.add('hide');

    clear1.style.visibility = "hidden";
    clear2.style.visibility = "hidden";

    suggessionsList.innerHTML = "";
    input1.value = '';
    input2.value = '';
}

function viewRoute(ref) {
    if (backState == 1) {
        backState = 2;
    }
    let routeNoI = ref.innerHTML;

    // To Be Hide
    OutputScreen2.classList.remove('close');
    OutputScreen.classList.remove('show');
    OutputScreen2.classList.add('show');
    getId('reverseButton').classList.remove('hide');
    suggessionsList.innerHTML = "";
    // clear1.classList.add('hide');
    clear1.style.visibility = "hidden";
    input1.value = routeNoI;
    input2.value = '';

    setRouteOutputContent(routeNoI);
}

let introPartUP, introPartDOWN;

function setRouteOutputContent(routeNoI) {
    let routeNumberUP, routeNumberDown, note = 0;
    routeNumberRef = routeNoI;
    upRouteArray = DetailedRoutesUP[ReturnIndex(DetailedRoutesUP, routeNoI)];
    downRouteArray = DetailedRoutesDOWN[ReturnIndex(DetailedRoutesDOWN, routeNoI)];

    if (routeNoI.includes("/")) {
        output2RouteHolder.classList.add('doubleNumber');
        if (routeNoI == "1/25S/229") {
            routeNumberUP = "1/25S";
            routeNumberDown = "229";
        } else {
            let routeRef = routeNoI.split("/");
            routeNumberUP = routeRef[0];
            routeNumberDown = routeRef[1];
        }
    } else {
        output2RouteHolder.classList.remove('doubleNumber');
        routeNumberUP = routeNoI;
        routeNumberDown = "";
    }

    switch (routeNoI) {
        // HD1 SERIES
        case "1":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1/25S":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "1/25S/229":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "MEDCHAL";
            break;

        case "1B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CBS";
            break;

        case "1D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "1D/229":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "MEDCHAL";
            break;

        case "1D/299":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "HAYATHNAGAR";
            break;

        case "1H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "HAYATHNAGAR";
            break;

        case "1HD":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SAROORNAGAR";
            break;

        case "1J":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "1JL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LANGER HOUSE";
            break;

        case "1JK":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KALI MANDIR";
            break;

        case "1K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA DEPOT";
            break;

        case "1L":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "1MD":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NEW MARUTHI NAGAR";
            break;

        case "1P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "1P/25S":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "1V":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NGO's COLONY";
            break;

        case "1VM":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SAI NAGAR";
            break;

        case "1VS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SAHAB NAGAR";
            break;

        case "1W":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTI W.COLLEGE";
            break;

        case "1X":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA STATION";
            break;

        case "1Z":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "1Z/229":
            note = 0;
            starting = "ARAMGHAR";
            destination = "MEDCHAL";
            break;

        case "1Z/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "1Z/539":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        // HD2 SERIES
        case "2":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "2/25S":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "SUCHITRA";
            break;

        case "2C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BARKAS";
            break;

        case "2J":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "2K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KACHEGUDA DEPOT";
            break;

        case "2U":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "UPPUGUDA";
            break;

        case "2Z":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SRI RAM COLONY";
            break;

        case "2Z/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        // HD3 SERIES
        case "3":
            note = 1;
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ".</strong> Sometimes, it ends at <strong>ECIL X Roads</strong> instead of going all the way to Kushaiguda. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + "</strong> passing through several stops along the way. Here are all the stops it covers: ";

            break;

        case "3C":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "ECIL X ROADS";
            break;

        case "3D":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "AMBEDKAR NAGAR";
            break;

        case "3DN":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "AMBEDKAR NAGAR";
            break;

        case "3H":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3HN":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";
            break;

        case "3K":
            note = 1;
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ".</strong> Sometimes, it ends at <strong>ECIL X Roads</strong> instead of going all the way to Kushaiguda. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + "</strong> passing through several stops along the way. Here are all the stops it covers: ";

            break;

        case "3K/90L":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "BDL";
            break;

        case "3K/95":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "ARAMGHAR";
            break;

        case "3K/102":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "BDL";
            break;

        case "3K/102B":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "BADANGPET";
            break;

        case "3K/203N":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "NADERGUL";
            break;

        case "3K/242":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KEESARAGUTTA";
            break;

        case "3K/252":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "RGI AIRPORT";
            break;

        case "3K/281":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "GHATKESAR";
            break;

        case "3KJ":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "JIYAGUDA";
            break;

        case "3KN":
            note = 1;
            starting = "AFZALGUNJ";
            destination = "KUSHAIGUDA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ".</strong> Sometimes, it ends at <strong>ECIL X Roads</strong> instead of going all the way to Kushaiguda. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + "</strong> passing through several stops along the way. Here are all the stops it covers: ";
            break;

        case "3KN/95":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "ARAMGHAR";
            break;

        case "3L":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "PRASHANTH NAGAR";
            break;

        case "3M":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "AS RAO NAGAR";
            break;

        case "3N":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "HEMA NAGAR";
            break;

        case "3N/203N":
            note = 0;
            starting = "BEL";
            destination = "NADERGUL";
            break;

        case "3T":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "TARNAKA";
            break;

        case "3Y":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "BJR NAGAR";
            break;

        // HD5 SERIES
        case "5/5R":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "RISALA BAZAR";
            break;

        case "5G":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GOLCONDA";
            break;

        case "5K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "5KM":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "5K/16A":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "5K/16AD":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/16C":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "5K/16CD":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/16D":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "5K/25S":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SUCHITRA";
            break;

        case "5K/92A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "5K/92R":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RAJENDRA NAGAR";
            break;

        case "5K/120K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOKAPET";
            break;

        case "5K/125":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KONDAPUR";
            break;

        case "5K/188":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KALI MANDIR";
            break;

        case "5K/229":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "MEDCHAL";
            break;

        case "5K/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "5M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "5R":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "RISALA BAZAR";
            break;

        case "5R/5":
            note = 0;
            starting = "RISALA BAZAR";
            destination = "MEHDIPATNAM";
            break;

        case "5W":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        // HD6 SERIES
        case "6IW/252":
            note = 0;
            starting = "CHERLAPALLY";
            destination = "WAVEROCK";
            break;

        case "6L/281":
            note = 0;
            starting = "KONDAPUR";
            destination = "GHATKESAR";
            break;

        case "6R":
            note = 0;
            starting = "RAM NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "6RK":
            note = 0;
            starting = "RAM NAGAR";
            destination = "KALI MANDIR";
            break;

        case "6X":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "IRRUM MANZIL";
            break;

        // HD7 SERIES
        case "7Z":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "7Z/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        // HD8 SERIES
        case "8/37":
            note = 0;
            starting = "GANDHI BHAVAN";
            destination = "KUSHAIGUDA";
            break;

        case "8A":
            note = 1;
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ".</strong> Sometimes, it ends at <strong>Charminar</strong> instead of going all the way to Chandrayangutta. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + ",</strong> Some times it starts from  <strong>Charminar</strong> itself. Here are all the stops it covers: ";
            break;

        case "8A/85":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PAHADI SHARIF";
            break;

        case "8A/178G":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GOUSE NAGAR";
            break;

        case "8A/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTHUR";
            break;

        case "8A/252S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHANKARAPURAM";
            break;

        case "8A/253":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "8A/532":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTHUR";
            break;

        case "8A/539":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        case "8AK":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";
            break;

        case "8C":
            note = 1;
            starting = "SECUNDERABAD";
            destination = "CHANDRAYANGUTTA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ".</strong> Sometimes, it ends at <strong>Charminar</strong> instead of going all the way to Chandrayangutta. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + ",</strong> Some times it starts from  <strong>Charminar</strong> itself. Here are all the stops it covers: ";
            break;

        case "8C/85P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PAHADI SHARIF";
            break;

        case "8C/229":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "MEDCHAL";
            break;

        case "8N":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        case "8R":
            note = 0;
            starting = "RISALA BAZAR";
            destination = "CBS";
            break;

        case "8UA":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "UPPUGUDA";
            break;

        // HD9 SERIES
        case "9A":
            note = 0;
            starting = "CBS";
            destination = "AG COLONY";
            break;

        case "9F":
            note = 1;
            starting = "CBS";
            destination = "BORABANDA";

            introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + ",</strong> Some times it starts from <strong>Charminar</strong> instead of CBS. Here are all the stops it covers: ";

            introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + ".</strong> Sometimes, it goes upto <strong>Charminar</strong> by diverting from Afzalgunj, it won't goes to CBS. Here are all the stops it covers: ";

            break;

        case "9K":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "JEEDIMETLA";
            break;

        case "9K/102":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "BDL";
            break;

        case "9K/230P":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "DUNDIGAL";
            break;

        case "9K/272G":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "GANDIMAISAMMA";
            break;

        case "9X":
            note = 0;
            starting = "CBS";
            destination = "JEEDIMETLA";
            break;

        case "9X/41C":
            note = 0;
            starting = "CBS";
            destination = "ASBESTOS COLONY";
            break;

        case "9X/230P":
            note = 0;
            starting = "CBS";
            destination = "DUNDIGAL";
            break;

        case "9X/272G":
            note = 0;
            starting = "CBS";
            destination = "GANDIMAISAMMA";
            break;

        case "9X/283D":
            note = 0;
            starting = "CBS";
            destination = "SURARAM COLONY";
            break;

        case "9XM":
            note = 0;
            starting = "CHARMINAR";
            destination = "JEEDIMETLA";
            break;

        case "9XM/230P":
            note = 0;
            starting = "CHARMINAR";
            destination = "DUNDIGAL";
            break;

        case "9YF":
            note = 0;
            starting = "CHARMINAR";
            destination = "BORABANDA";
            break;

        // HD10 SERIES
        case "10":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SANATH NAGAR";
            break;

        case "10F":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BORABANDA";
            break;

        case "10FV":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "VBIT PARK";
            break;

        case "10H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KONDAPUR";
            break;

        case "10H/16A":
            note = 0;
            starting = "KONDAPUR";
            destination = "ECIL X ROADS";
            break;

        case "10H/16C":
            note = 0;
            starting = "KONDAPUR";
            destination = "ECIL X ROADS";
            break;

        case "10H/18C":
            note = 0;
            starting = "KONDAPUR";
            destination = "CHENGICHERLA";
            break;

        case "10HA":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        case "10HL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LINGAMPALLY";
            break;

        case "10HP":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PREM NAGAR";
            break;

        case "10HW":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        case "10J":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JNTU COLLEGE";
            break;

        case "10J/171":
            note = 0;
            starting = "KPHB 4TH PHASE";
            destination = "SHAHPUR NAGAR";
            break;

        case "10JP":
            note = 0;
            starting = "JNTU COLLEGE";
            destination = "PRAGATHI NAGAR";
            break;

        case "10K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KPHB 4TH PHASE";
            break;

        case "10K/250":
            note = 0;
            starting = "KPHB 4TH PHASE";
            destination = "ECIL X ROADS";
            break;

        case "10KJ":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "10KJ/18":
            note = 0;
            starting = "JAGATHGIRIGUTTA";
            destination = "UPPAL DEPOT";
            break;

        case "10KL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LINGAMPALLY";
            break;

        case "10KM":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MIYAPUR";
            break;

        case "10KM/224G":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "10W":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "WAVEROCK";
            break;

        case "10Y":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "YOUSUFGUDA";
            break;

        case "10YF":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BORABANDA";
            break;

        case "10YF/16S":
            note = 0;
            starting = "BORABANDA";
            destination = "SAFILGUDA";
            break;

        // HD11 SERIES
        case "11W":
            note = 0;
            starting = "MYTHRIVANAM";
            destination = "WAVEROCK";
            break;

        // HD14 SERIES
        case "14P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PRASHANTH NAGAR";
            break;

        case "14PX":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        // HD15 SERIES
        case "15D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "15H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "15H/20":
            note = 0;
            starting = "KUSHAIGUDA";
            destination = "SECRETARIATE";
            break;

        case "15H/242RG":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RG COLONY";
            break;

        case "15D/20":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        // HD16 SERIES
        case "16/20":
            note = 0;
            starting = "SAFILGUDA";
            destination = "IRRUM MANZIL";
            break;

        case "16A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16A/5K":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16A/10H":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        case "16A/20":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "AFZALGUNJ";
            break;

        case "16A/47L":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MANIKONDA";
            break;

        case "16A/47W":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
            break;

        case "16A/49M":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16A/219":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "16A/281R":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RTC COLONY";
            break;

        case "16AD/5K":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16AK":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16C/5K":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16C/10H":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        case "16C/38T":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "SECUNDERABAD";
            break;

        case "16C/47L":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MANIKONDA";
            break;

        case "16C/49M":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16C/281":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "16CR":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16CR/38T":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "SECUNDERABAD";
            break;

        case "16CD":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "16CD/5K":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16CD/49M":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "16D/5K":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16D/24B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "16D/49M":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "16ES":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "IRRUM MANZIL";
            break;

        case "16H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "16H/49M":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "16NY":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "YAPRAL";
            break;

        case "16P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PRASHANTH NAGAR";
            break;

        case "16PX":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "16R/20":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "SECRETARIATE";
            break;

        case "16S/10YF":
            note = 0;
            starting = "SAFILGUDA";
            destination = "BORABANDA";
            break;

        // HD17 SERIES
        case "17/219":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "17CS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHERLAPALLY";
            break;

        case "17D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "17DH":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "17DS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "17DV":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "VIKAS NAGAR";
            break;

        case "17H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "17H/29B":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "JEEDIMETLA";
            break;

        case "17H/47W":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "WAVEROCK";
            break;

        case "17H/219":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "17H/242":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KEESARAGUTTA";
            break;

        case "17HN":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "17S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KUSHAIGUDA";
            break;

        case "17V":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "VIKAS NAGAR";
            break;

        // HD18 SERIES
        case "18":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "UPPAL";
            break;

        case "18/10KJ":
            note = 0;
            starting = "UPPAL DEPOT";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "18/47U":
            note = 0;
            starting = "BODUPPAL";
            destination = "AOU UNIVERSITY";
            break;

        case "18/272G":
            note = 0;
            starting = "UPPAL";
            destination = "GANDIMAISAMMA";
            break;

        case "18/283S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KORREMULA";
            break;

        case "18B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CCMB COLONY";
            break;

        case "18C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA";
            break;

        case "18C/10H":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "KONDAPUR";
            break;

        case "18C/30":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "18C/219":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "PATANCHERUVU";
            break;

        case "18C/229":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "MEDCHAL";
            break;

        case "18J":
            note = 0;
            starting = "UPPAL";
            destination = "JBS";
            break;

        case "18R":
            note = 0;
            starting = "RAMANTHAPUR CHURCH CLY";
            destination = "JBS";
            break;

        case "18V":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "VENKATREDDY NAGAR";
            break;

        case "18VJ":
            note = 0;
            starting = "VENKATREDDY NAGAR";
            destination = "JBS";
            break;

        case "18VS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RAMANTHAPUR";
            break;

        // HD19 SERIES
        case "19F":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "BORABANDA";
            break;

        case "19K":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "KPHB 4TH PHASE";
            break;

        case "19K/288D":
            note = 0;
            starting = "KUKATPALLY";
            destination = "BALAJI TEMPLE";
            break;

        case "19KJ":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "19KM":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "MIYAPUR";
            break;

        case "19M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "KPHB 4TH PHASE";
            break;

        case "19MP":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "PRAGATHI NAGAR";
            break;

        case "19S":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SANATH NAGAR";
            break;

        case "19S/505":
            note = 0;
            starting = "SANATH NAGAR";
            destination = "SHANKARPALLY";
            break;

        case "19YF":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "BORABANDA";
            break;

        // HD20 SERIES
        case "20/15H":
            note = 0;
            starting = "SECRETARIATE";
            destination = "KUSHAIGUDA";
            break;

        case "20/15D":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "20/16":
            note = 0;
            starting = "IRRUM MANZIL";
            destination = "SAFILGUDA";
            break;

        case "20/16A":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "ECIL X ROADS";
            break;

        case "20/16R":
            note = 0;
            starting = "SECRETARIATE";
            destination = "ECIL X ROADS";
            break;

        case "20/280":
            note = 0;
            starting = "SECRETARIATE";
            destination = "GHATKESAR";
            break;

        case "20P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        // HD21 SERIES
        case "21W":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "WEST VENKATAPURAM";
            break;

        // HD22 SERIES
        case "22":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "HAKIMPET";
            break;

        case "22/49E":
            note = 0;
            starting = "RISALA BAZAR";
            destination = "IRRUM MANZIL";
            break;

        case "22/90L":
            note = 0;
            starting = "HAKIMPET";
            destination = "BDL";
            break;

        case "22D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MB DARGAH";
            break;

        case "22K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RAJIV GRUHAKALPA";
            break;

        // HD23 SERIES
        case "23B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BHUDEVI NAGAR";
            break;

        case "23BK":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KISTAMMA ENCLAVE";
            break;

        case "23BS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "23GF":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GREEN FIELDS";
            break;

        case "23GS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "23K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KISTAMMA ENCLAVE";
            break;

        case "23T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TELECOM NAGAR";
            break;

        // HD24 SERIES
        case "24":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "YAPRAL";
            break;

        case "24B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BALAJI NAGAR";
            break;

        case "24B/16D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "24B/281":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "24BA":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "24BJ":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BJR NAGAR";
            break;

        case "24E":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "24J":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "24L/281":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "24S":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "SUCHITRA";
            break;

        case "24S/273":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "GANDIMAISAMMA";
            break;

        case "24SS":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "SHAHPUR NAGAR";
            break;

        // HD25 SERIES
        case "25A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SURYA NAGAR";
            break;

        case "25AJ":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JONNABANDA";
            break;

        case "25AJ/M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GOPAL NAGAR";
            break;

        case "25M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GOPAL NAGAR";
            break;

        case "25MS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHARAN NAGAR";
            break;

        case "25P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PANCHASHEELA";
            break;

        case "25S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SUCHITRA";
            break;

        case "25S/1":
            note = 0;
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/1P":
            note = 0;
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/2":
            note = 0;
            starting = "SUCHITRA";
            destination = "AFZALGUNJ";
            break;

        case "25S/5K":
            note = 0;
            starting = "SUCHITRA";
            destination = "MEHDIPATNAM";
            break;

        case "25S/227":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "25S/229":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEDCHAL";
            break;

        // HD26 SERIES
        case "26M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "OLD BOWENPALLY";
            break;

        case "26M/49M":
            note = 0;
            starting = "OLD BOWENPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "26N":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "OLD BOWENPALLY";
            break;

        // HD29 SERIES
        case "29B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JEEDIMETLA";
            break;

        case "29B/17H":
            note = 0;
            starting = "JEEDIMETLA";
            destination = "ECIL X ROADS";
            break;

        case "29B/272G":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "29B/272I":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "INDIRAMMA COLONY";
            break;

        case "29Q":
            note = 0;
            starting = "BALA NAGAR";
            destination = "QUTHBULLAPUR";
            break;

        case "29S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SUBHASH NAGAR";
            break;

        // HD30 SERIES
        case "30":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "30S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SRINIVAS COLONY";
            break;

        case "30/18C":
            note = 0;
            starting = "JAGATHGIRIGUTTA";
            destination = "CHENGICHERLA";
            break;

        case "30/280":
            note = 0;
            starting = "JAGATHGIRIGUTTA";
            destination = "GHATKESAR";
            break;

        // HD31 SERIES
        case "31":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PRAGATHI NAGAR";
            break;

        // HD37 SERIES
        case "37":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "37/8":
            note = 0;
            starting = "KUSHAIGUDA";
            destination = "GANDHI BHAVANf";
            break;

        // HD38 SERIES
        case "38EX":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "38M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MAHENDRA HILLS";
            break;

        case "38X":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SECUNDERABAD";
            break;

        case "38T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TUKARAMGATE";
            break;

        case "38T/16C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "38T/16CR":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        // HD40 SERIES
        case "40":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTI";
            break;

        // HD41 SERIES
        case "41C/9X":
            note = 0;
            starting = "ASBESTOS COLONY";
            destination = "CBS";
            break;

        // HD44 SERIES
        case "44X":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GANGAPUTRA COLONY";
            break;

        // HD45 SERIES
        case "45F":
            note = 0;
            starting = "KOTI";
            destination = "BORABANDA";
            break;

        // HD46 SERIES
        case "46":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PATIGADDA";
            break;

        // HD47 SERIES
        case "47D/224":
            note = 0;
            starting = "DARGAH";
            destination = "MAYURI NAGAR";
            break;

        case "47L":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "47L/16A":
            note = 0;
            starting = "MANIKONDA";
            destination = "ECIL X ROADS";
            break;

        case "47L/16C":
            note = 0;
            starting = "MANIKONDA";
            destination = "ECIL X ROADS";
            break;

        case "47U/18":
            note = 0;
            starting = "AOU UNIVERSITY";
            destination = "BODUPPAL";
            break;

        case "47Y":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MANIKONDA";
            break;

        case "47YM":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MANCHIREVULA";
            break;

        case "47W/16A":
            note = 0;
            starting = "WAVEROCK";
            destination = "ECIL X ROADS";
            break;

        case "47W/17H":
            note = 0;
            starting = "WAVEROCK";
            destination = "ECIL X ROADS";
            break;

        // HD49 SERIES
        case "49":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NAMPALLY";
            break;

        case "49/250":
            note = 0;
            starting = "NAMPALLY";
            destination = "ECIL X ROADS";
            break;

        case "49A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "49E/22":
            note = 0;
            starting = "IRRUM MANZIL";
            destination = "RISALA BAZAR";
            break;

        case "49M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "49M/16A":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/16C":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/16CD":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49M/16D":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49M/16H":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/26M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "OLD BOWENPALLY";
            break;

        case "49M/92A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ARAMGHAR";
            break;

        case "49M/229":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "MEDCHAL";
            break;

        case "49M/250":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "ECIL X ROADS";
            break;

        case "49M/250C":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "CHERLAPALLY";
            break;

        case "49M/250D":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMBEDKAR NAGAR";
            break;

        case "49MT":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TALLAGADDA";
            break;

        case "49MT/250":
            note = 0;
            starting = "TALLAGADDA";
            destination = "ECIL X ROADS";
            break;

        // HD50 SERIES
        case "50B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA";
            break;

        // HD65 SERIES
        case "65/116GA":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "GOWLI DHODDI";
            break;

        case "65M/116G":
            note = 0;
            starting = "CBS";
            destination = "GOWLI DHODDI";
            break;

        case "65M/123":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "MANCHIREVULA";
            break;

        case "65MG":
            note = 0;
            starting = "CHARMINAR";
            destination = "GOLCONDA";
            break;

        // HD66 SERIES
        case "66G":
            note = 0;
            starting = "CHARMINAR";
            destination = "GOLCONDA";
            break;

        // HD71 SERIES
        case "71A":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "CHENGICHERLA";
            break;

        case "71AB":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "CHENGICHERLA";
            break;

        case "71K":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KACHEGUDA DEPOT";
            break;

        // HD72 SERIES
        case "72":
            note = 0;
            starting = "HIGH COURT";
            destination = "SATYA NAGAR";
            break;

        case "72/277D":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "IBRAHIMPATNAM";
            break;

        case "72H":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "HAYATHNAGAR";
            break;

        case "72HK":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KUNTLOOR";
            break;

        case "72J":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "JAIPURI COLONY";
            break;

        case "72V":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "NGO's COLONY";
            break;

        // HD83 SERIES
        case "83J":
            note = 0;
            starting = "KACHEGUDA STN.";
            destination = "JEEDIMETLA";
            break;

        case "83J/272G":
            note = 0;
            starting = "KACHEGUDA STN.";
            destination = "GANDIMAISAMMA";
            break;

        case "83JA":
            note = 0;
            starting = "KACHEGUDA STN.";
            destination = "APUROOPA COLONY";
            break;

        // HD85 SERIES
        case "85/8A":
            note = 0;
            starting = "PAHADI SHARIF";
            destination = "SECUNDERABAD";
            break;

        case "85P/8C":
            note = 0;
            starting = "PAHADI SHARIF";
            destination = "SECUNDERABAD";
            break;

        case "85/253L":
            note = 0;
            starting = "CHARMINAR";
            destination = "ANNOJIGUDA";
            break;

        case "85V":
            note = 0;
            starting = "CHARMINAR";
            destination = "VENKATAPUR";
            break;

        // HD86 SERIES
        case "86A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AFZALGUNJ";
            break;

        case "86C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CBS";
            break;

        case "86J":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JIYAGUDA";
            break;

        case "86K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTI";
            break;

        // HD90 SERIES
        case "90/253T":
            note = 0;
            starting = "JBS";
            destination = "FAB CITY";
            break;

        case "90/300":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEHDIPATNAM";
            break;

        case "90B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BANDLAGUDA DEPOT";
            break;

        case "90BE":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "BADANGPET";
            break;

        case "90DL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "90UN":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "UPPAL X ROADS";
            break;

        case "90U/203U":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "ADIBATLA";
            break;

        case "90L":
            note = 0;
            starting = "LB NAGAR";
            destination = "JBS";
            break;

        case "90L/3K":
            note = 0;
            starting = "BDL";
            destination = "ECIL X ROADS";
            break;

        case "90L/22":
            note = 0;
            starting = "BDL";
            destination = "HAKIMPET";
            break;

        case "90L/229":
            note = 0;
            starting = "LB NAGAR";
            destination = "MEDCHAL";
            break;

        case "90L/251":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SHAMSHABAD";
            break;

        case "90LK":
            note = 0;
            starting = "LB NAGAR";
            destination = "KACHEGUDA STN.";
            break;

        case "90LV":
            note = 0;
            starting = "NGO's COLONY";
            destination = "JBS";
            break;

        // HD92 SERIES
        case "92A":
            note = 0;
            starting = "ARAMGHAR";
            destination = "MEHDIPATNAM";
            break;

        case "92A/5K":
            note = 0;
            starting = "ARAMGHAR";
            destination = "SECUNDERABAD";
            break;

        case "92A/49M":
            note = 0;
            starting = "ARAMGHAR";
            destination = "SECUNDERABAD";
            break;

        case "92K":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SRI RAM COLONY";
            break;

        case "92R":
            note = 0;
            starting = "RAJENDRA NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "92R/5K":
            note = 0;
            starting = "RAJENDRA NAGAR";
            destination = "SECUNDERABAD";
            break;

        // HD94 SERIES
        case "94R":
            note = 0;
            starting = "KOTI";
            destination = "RAJENDRA NAGAR";
            break;

        case "94RM":
            note = 0;
            starting = "KOTI";
            destination = "RAJENDRA NAGAR";
            break;

        // HD95 SERIES
        case "95":
            note = 0;
            starting = "KOTI";
            destination = "ARAMGHAR";
            break;

        case "95/3K":
            note = 0;
            starting = "ARAMGHAR";
            destination = "ECIL X ROADS";
            break;

        case "95/3KN":
            note = 0;
            starting = "ARAMGHAR";
            destination = "ECIL X ROADS";
            break;

        case "95K":
            note = 0;
            starting = "KOTI";
            destination = "SRI RAM COLONY";
            break;

        // HD100 SERIES
        case "100/299":
            note = 0;
            starting = "SECRETARIATE";
            destination = "HAYATHNAGAR";
            break;

        case "100M":
            note = 0;
            starting = "SECRETARIATE";
            destination = "SATYA NAGAR";
            break;

        case "100V":
            note = 0;
            starting = "SECRETARIATE";
            destination = "NGO's COLONY";
            break;

        case "100X":
            note = 0;
            starting = "LB NAGAR";
            destination = "BADANGPET";
            break;

        // HD102 SERIES
        case "102":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "MIDHANI DEPOT";
            break;

        case "102/3K":
            note = 0;
            starting = "BDL";
            destination = "ECIL X ROADS";
            break;

        case "102/9K":
            note = 0;
            starting = "BDL";
            destination = "GANDIMAISAMMA";
            break;

        case "102/185":
            note = 0;
            starting = "BDL";
            destination = "KUKATPALLY";
            break;

        case "102/218":
            note = 0;
            starting = "MIDHANI";
            destination = "PATANCHERUVU";
            break;

        case "102/253L":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "LEMOOR";
            break;

        case "102B":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "BADANGPET";
            break;

        case "102B/3K":
            note = 0;
            starting = "BADANGPET";
            destination = "ECIL X ROADS";
            break;

        case "102B/203N":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NADERGUL";
            break;

        case "102B/218":
            note = 0;
            starting = "BADANGPET";
            destination = "PATANCHERUVU";
            break;

        case "102M":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "BALAPUR";
            break;

        // HD103 SERIES
        case "103":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "RCI";
            break;

        // HD104 SERIES
        case "104A":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "RAJIV GRUHAKALPA";
            break;

        case "104R":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "RN REDDY NAGAR";
            break;

        // HD105 SERIES
        case "105":
            note = 0;
            starting = "SAIDABAD CLY";
            destination = "SECRETARIATE";
            break;

        // HD107 SERIES
        case "107JD":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "107JL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "107JS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SAROOR NAGAR";
            break;

        case "107VL":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "LB NAGAR";
            break;

        case "107VR":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DILSHUKNAGAR";
            break;

        case "107VS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SAROOR NAGAR";
            break;

        // HD113 SERIES
        case "113B":
            note = 0;
            starting = "UPPAL";
            destination = "BARKATPURA";
            break;

        case "113F":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113IM":
            note = 0;
            starting = "UPPAL";
            destination = "MEHDIPATNAM";
            break;

        case "113K":
            note = 0;
            starting = "UPPAL";
            destination = "KPHB 4TH PHASE";
            break;

        case "113KL":
            note = 0;
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113KM":
            note = 0;
            starting = "UPPAL";
            destination = "MIYAPUR";
            break;

        case "113M":
            note = 0;
            starting = "MEDIPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "113M/120":
            note = 0;
            starting = "BODUPPAL";
            destination = "MANCHIREVULA";
            break;

        case "113M/281":
            note = 0;
            starting = "KONDAPUR";
            destination = "GHATKESAR";
            break;

        case "113M/288":
            note = 0;
            starting = "UPPAL";
            destination = "MOINABAD";
            break;

        case "113MP":
            note = 0;
            starting = "UPPAL";
            destination = "PATEL NAGAR";
            break;

        case "113S":
            note = 0;
            starting = "SECRETARIATE";
            destination = "KPHB 4TH PHASE";
            break;

        case "113W":
            note = 0;
            starting = "UPPAL";
            destination = "WAVEROCK";
            break;

        case "113YH":
            note = 0;
            starting = "UPPAL";
            destination = "HITECH CITY";
            break;

        // AMBERPET FLYOVER DIVERTED HD113 SERIES
        case "113FT":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113KLT":
            note = 0;
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113ILT":
            note = 0;
            starting = "UPPAL";
            destination = "LINGAMPALLY";
            break;

        case "113KT":
            note = 0;
            starting = "UPPAL";
            destination = "KPHB 4TH PHASE";
            break;

        case "113FZ":
            note = 0;
            starting = "CHENGICHERLA";
            destination = "BORABANDA";
            break;

        case "113MZ":
            note = 0;
            starting = "MEDIPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "113IMZ":
            note = 0;
            starting = "UPPAL";
            destination = "MEHDIPATNAM";
            break;

        // HD115 SERIES
        case "115":
            note = 0;
            starting = "KOTI";
            destination = "BODUPPAL";
            break;

        // HD116 SERIES
        case "116/220K":
            note = 0;
            starting = "CBS";
            destination = "KOLLUR";
            break;

        case "116G/65M":
            note = 0;
            starting = "GOWLI DHODDI";
            destination = "CBS";
            break;

        case "116GA/65":
            note = 0;
            starting = "GOWLI DHODDI";
            destination = "AFZALGUNJ";
            break;

        case "116N":
            note = 0;
            starting = "KOTI";
            destination = "GOWLI DHODDI";
            break;

        case "116NL":
            note = 0;
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        // HD117 SERIES
        case "117":
            note = 0;
            starting = "UPPAL";
            destination = "KUSHAIGUDA";
            break;

        // HD118 SERIES
        case "118W/300":
            note = 0;
            starting = "WAVEROCK";
            destination = "JBS";
            break;

        // HD119 SERIES
        case "119M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "GOLCONDA";
            break;

        // HD120 SERIES
        case "120":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "OSMAN SAGAR";
            break;

        case "120/113M":
            note = 0;
            starting = "MANCHIREVULA";
            destination = "BODUPPAL";
            break;

        case "120K/5K":
            note = 0;
            starting = "KOKAPET";
            destination = "SECUNDERABAD";
            break;

        // HD123 SERIES
        case "123":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "NARSINGI";
            break;

        case "123/65M":
            note = 0;
            starting = "MANCHIREVULA";
            destination = "AFZALGUNJ";
            break;

        // HD125 SERIES
        case "125/5K":
            note = 0;
            starting = "KONDAPUR";
            destination = "SECUNDERABAD";
            break;

        // HD126 SERIES
        case "126/300":
            note = 0;
            starting = "JNTU COLLEGE";
            destination = "LB NAGAR";
            break;

        case "126M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "JNTU COLLEGE";
            break;

        // HD127 SERIES
        case "127AL":
            note = 0;
            starting = "AOU UNIVERSITY";
            destination = "LB NAGAR";
            break;

        case "127DA":
            note = 0;
            starting = "AOU UNIVERSITY";
            destination = "DILSHUKNAGAR";
            break;

        case "127K":
            note = 0;
            starting = "KONDAPUR";
            destination = "KOTI";
            break;

        case "127KL":
            note = 0;
            starting = "KONDAPUR";
            destination = "LB NAGAR";
            break;

        // HD147 SERIES
        case "147":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "KONDAPUR";
            break;

        // HD156 SERIES
        case "156/205F":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "METTU (RFC)";
            break;

        case "156/299":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "HAYATHNAGAR";
            break;

        case "156/505":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "SHANKARPALLY";
            break;

        case "156L":
            note = 0;
            starting = "LB NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "156S":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SAI NAGAR";
            break;

        case "156V":
            note = 0;
            starting = "NGO's COLONY";
            destination = "MEHDIPATNAM";
            break;

        case "156V/505":
            note = 0;
            starting = "NGO's COLONY";
            destination = "SHANKARPALLY";
            break;

        // HD158 SERIES
        case "158":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "ESI HOSPITAL";
            break;

        case "158FL":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "BORABANDA";
            break;

        case "158HF":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "BORABANDA";
            break;

        case "158VF":
            note = 0;
            starting = "NGO's COLONY";
            destination = "BORABANDA";
            break;

        // HD171 SERIES
        case "171":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GAJULARAMARAM";
            break;

        case "171/10J":
            note = 0;
            starting = "SHAHPUR NAGAR";
            destination = "KPHB 4TH PHASE";
            break;

        case "171K":
            note = 0;
            starting = "SHAHPUR NAGAR";
            destination = "KPHB MAIN ROAD";
            break;

        case "171K/219":
            note = 0;
            starting = "SHAHPUR NAGAR";
            destination = "PATANCHERUVU";
            break;

        case "171R":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SRI RAM NAGAR";
            break;

        case "171M/189M":
            note = 0;
            starting = "GAJULARAMARAM";
            destination = "MEHDIPATNAM";
            break;

        // HD178 SERIES
        case "178G/8A":
            note = 0;
            starting = "GOUSE NAGAR";
            destination = "SECUNDERABAD";
            break;

        // HD183 SERIES
        case "183B":
            note = 0;
            starting = "JEEDIMETLA";
            destination = "BALANAGAR";
            break;

        case "183SS":
            note = 0;
            starting = "SUCHITRA";
            destination = "SHAHPUR NAGAR";
            break;

        case "183S/219":
            note = 0;
            starting = "SHAHPUR NAGAR";
            destination = "PATANCHERUVU";
            break;

        // HD185 SERIES
        case "185/102":
            note = 0;
            starting = "KUKATPALLY";
            destination = "BDL";
            break;

        case "185G":
            note = 0;
            starting = "CBS";
            destination = "JAGATHGIRIGUTTA";
            break;

        // HD187 SERIES
        case "187KL":
            note = 0;
            starting = "KPHB MAIN ROAD";
            destination = "LB NAGAR";
            break;

        case "187KH":
            note = 0;
            starting = "KPHB MAIN ROAD";
            destination = "HAYATHNAGAR";
            break;

        // HD188 SERIES
        case "188":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "KALI MANDIR";
            break;

        case "188/5K":
            note = 0;
            starting = "KALI MANDIR";
            destination = "SECUNDERABAD";
            break;

        case "188/251":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SHAMSHABAD";
            break;

        // HD189 SERIES
        case "189M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "APUROOPA CLY";
            break;

        case "189M/171M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "GAJULARAMARAM";
            break;

        case "189M/272G":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "GANDIMAISAMMA";
            break;

        // HD195 SERIES
        case "195G":
            note = 0;
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195GJ":
            note = 0;
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195GK":
            note = 0;
            starting = "GAR";
            destination = "JNTU COLLEGE";
            break;

        case "195H":
            note = 0;
            starting = "HCU DEPOT";
            destination = "BACHUPALLY";
            break;

        case "195J":
            note = 0;
            starting = "WAVEROCK";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "195P":
            note = 0;
            starting = "GAR";
            destination = "PRAGATHI NAGAR";
            break;

        case "195W":
            note = 0;
            starting = "WAVEROCK";
            destination = "BACHUPALLY";
            break;

        case "195WJ":
            note = 0;
            starting = "WAVEROCK";
            destination = "JNTU COLLEGE";
            break;

        case "195WP":
            note = 0;
            starting = "WAVEROCK";
            destination = "GANDIMAISAMMA";
            break;

        // HD201 SERIES
        case "201":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "BACHARAM";
            break;

        case "201G":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "GOWRELLY";
            break;

        case "201K":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "KUNTLOOR RG CLY";
            break;

        case "201M":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "MARRIPALLY";
            break;

        case "201Q":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "QUTHBULLAPUR";
            break;

        case "201/290U":
            note = 0;
            starting = "BACHARAM";
            destination = "JBS";
            break;

        case "201T/290U":
            note = 0;
            starting = "TARAMATIPET";
            destination = "SECUNDERABAD";
            break;

        // HD202 SERIES
        case "202B":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "BRAHMANAPALLY";
            break;

        case "202K/290U":
            note = 0;
            starting = "KOHEDA";
            destination = "JBS";
            break;

        // HD203 SERIES
        case "203A":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "ADIBATLA";
            break;

        case "203A/218":
            note = 0;
            starting = "ADIBATLA";
            destination = "PATANCHERUVU";
            break;

        case "203AK":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "KONGARAKALAN";
            break;

        case "203AR":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RAVIRYALA";
            break;

        case "203N":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "NADERGUL";
            break;

        case "203N/3K":
            note = 0;
            starting = "NADERGUL";
            destination = "ECIL X ROADS";
            break;

        case "203N/3N":
            note = 0;
            starting = "NADERGUL";
            destination = "BEL";
            break;

        case "203N/102B":
            note = 0;
            starting = "NADERGUL";
            destination = "SECUNDERABAD";
            break;

        case "203N/218":
            note = 0;
            starting = "NADERGUL";
            destination = "PATANCHERUVU";
            break;

        case "203U":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "ADIBATLA";
            break;

        case "203U/90U":
            note = 0;
            starting = "ADIBATLA";
            destination = "UPPAL X ROADS";
            break;

        // HD204 SERIES
        case "204/290U":
            note = 0;
            starting = "GANDICHERUVU";
            destination = "JBS";
            break;

        case "204DA":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "ANAJPUR";
            break;

        case "204U":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "SANGHI NAGAR";
            break;

        case "204UA":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "ANAJPUR";
            break;

        // HD205 SERIES
        case "205":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "PILLAIPALLY";
            break;

        case "205A":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "ANAJPUR";
            break;

        case "205A/290U":
            note = 0;
            starting = "ANAJPUR";
            destination = "JBS";
            break;

        case "205F/156":
            note = 0;
            starting = "METTU (RFC)";
            destination = "MEHDIPATNAM";
            break;

        case "205M/290U":
            note = 0;
            starting = "MAJEEDPUR";
            destination = "JBS";
            break;

        // HD211 SERIES
        case "211":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "POTHAIPALLY";
            break;

        case "211/242":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DONGALAMYSAMMA";
            break;

        case "211B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "UDDHAMARRI";
            break;

        case "211CD":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DRDO (YADGARPALLY)";
            break;

        case "211D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOLTHUR";
            break;

        case "211DY":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DEVARAYAMJAL";
            break;

        case "211K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KESHAVARAM";
            break;

        case "211M":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CRPF";
            break;

        // HD212 SERIES
        case "212":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BITS PILANI";
            break;

        case "212/702":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "VARGAL TEMPLE";
            break;

        case "212T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TURKAPALLY";
            break;

        // HD215 SERIES
        case "215":
            note = 0;
            starting = "ARAMGHAR";
            destination = "KONDAPUR";
            break;

        // HD216 SERIES
        case "216":
            note = 0;
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        case "216KL":
            note = 0;
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        case "216M":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "LINGAMPALLY";
            break;

        // HD217 SERIES
        case "217":
            note = 0;
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "217/254":
            note = 0;
            starting = "LINGAMPALLY";
            destination = "KONGARAKALAN";
            break;

        case "217C":
            note = 0;
            starting = "CBS";
            destination = "PATANCHERUVU";
            break;

        case "217D":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "PATANCHERUVU";
            break;

        // HD218 SERIES
        case "218":
            note = 0;
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "218/102":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "MIDHANI";
            break;

        case "218/102B":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "BADANGPET";
            break;

        case "218/203A":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "ADIBATLA";
            break;

        case "218/203N":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "NADERGUL";
            break;

        case "218/224MN":
            note = 0;
            starting = "KOTI";
            destination = "MALLAMPET";
            break;

        case "218/277K":
            note = 0;
            starting = "MIYAPUR";
            destination = "KONGARAKALAN";
            break;

        case "218A":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "PATANCHERUVU";
            break;

        case "218C":
            note = 0;
            starting = "CBS";
            destination = "PATANCHERUVU";
            break;

        case "218CA":
            note = 0;
            starting = "CHANDRAYANGUTTA";
            destination = "PATANCHERUVU";
            break;

        case "218D":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "PATANCHERUVU";
            break;

        case "218H":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "PATANCHERUVU";
            break;

        case "218L":
            note = 0;
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        // HD219 SERIES
        case "219":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        case "219/16A":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/17":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/17H":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/18C":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "CHENGICHERLA";
            break;

        case "219/171K":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "SHAHPUR NAGAR";
            break;

        case "219/183S":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "SHAHPUR NAGAR";
            break;

        case "219/224G":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "GANDIMAISAMMA";
            break;

        case "219/229":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "MEDCHAL";
            break;

        case "219/250":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "ECIL X ROADS";
            break;

        case "219/272G":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "GANDIMAISAMMA";
            break;

        case "219/280":
            note = 0;
            starting = "PATANCHERUVU";
            destination = "GHATKESAR";
            break;

        case "219I/224G":
            note = 0;
            starting = "ISNAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "219I/272G":
            note = 0;
            starting = "ISNAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "219N":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NARENDAR COLONY";
            break;

        // HD220 SERIES
        case "220K/116":
            note = 0;
            starting = "KOLLUR";
            destination = "CBS";
            break;

        // HD221 SERIES
        case "221":
            note = 0;
            starting = "MIYAPUR METRO STN.";
            destination = "MANCHIREVULA";
            break;

        case "221G":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "GACHIBOWLI";
            break;

        // HD222 SERIES
        case "222A":
            note = 0;
            starting = "KOTI";
            destination = "PATANCHERUVU";
            break;

        case "222L":
            note = 0;
            starting = "KOTI";
            destination = "LINGAMPALLY";
            break;

        // HD224 SERIES
        case "224/47D":
            note = 0;
            starting = "MAYURI NAGAR";
            destination = "DARGAH";
            break;

        case "224B":
            note = 0;
            starting = "MIYAPUR";
            destination = "BOLLARUM";
            break;

        case "224G":
            note = 0;
            starting = "MIYAPUR";
            destination = "GANDIMAISAMMA";
            break;

        case "224G/10KM":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        case "224G/219":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "PATANCHERUVU";
            break;

        case "224G/219I":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "ISNAPUR";
            break;

        case "224MN":
            note = 0;
            starting = "NIZAMPET X ROADS";
            destination = "MALLAPET";
            break;

        case "224MN/218":
            note = 0;
            starting = "MALLAPET";
            destination = "KOTI";
            break;

        case "224X":
            note = 0;
            starting = "MIYAPUR";
            destination = "IDA BOLLARUM";
            break;

        // HD226 SERIES
        case "226":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PATANCHERUVU";
            break;

        // HD227 SERIES
        case "227":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GANDIMAISAMMA";
            break;

        case "227/25S":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        // HD229 SERIES
        case "229":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MEDCHAL";
            break;

        case "229/1D":
            note = 0;
            starting = "MEDCHAL";
            destination = "DILSHUKNAGAR";
            break;

        case "229/1Z":
            note = 0;
            starting = "MEDCHAL";
            destination = "ARAMGHAR";
            break;

        case "229/5K":
            note = 0;
            starting = "MEDCHAL";
            destination = "MEHDIPATNAM";
            break;

        case "229/8C":
            note = 0;
            starting = "MEDCHAL";
            destination = "AFZALGUNJ";
            break;

        case "229/18C":
            note = 0;
            starting = "MEDCHAL";
            destination = "CHENGICHERLA";
            break;

        case "229/25S":
            note = 0;
            starting = "MEDCHAL";
            destination = "SECUNDERABAD";
            break;

        case "229/49M":
            note = 0;
            starting = "MEDCHAL";
            destination = "MEHDIPATNAM";
            break;

        case "229/90L":
            note = 0;
            starting = "MEDCHAL";
            destination = "LB NAGAR";
            break;

        case "229/219":
            note = 0;
            starting = "MEDCHAL";
            destination = "PATANCHERUVU";
            break;

        case "229/279":
            note = 0;
            starting = "MEDCHAL";
            destination = "IBRAHIMPATNAM";
            break;

        case "229/290":
            note = 0;
            starting = "MEDCHAL";
            destination = "HAYATHNAGAR";
            break;

        case "229/290U":
            note = 0;
            starting = "MEDCHAL";
            destination = "HAYATHNAGAR";
            break;

        case "229B":
            note = 0;
            starting = "MEDCHAL";
            destination = "BOWENPALLY";
            break;

        case "229P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PUDUR";
            break;

        // HD230 SERIES
        case "230A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ANNARAM";
            break;

        case "230AN":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ANNARAM";
            break;

        case "230P":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DUNDIGAL";
            break;

        case "230P/9K":
            note = 0;
            starting = "DUNDIGAL";
            destination = "AFZALGUNJ";
            break;

        case "230P/9X":
            note = 0;
            starting = "DUNDIGAL";
            destination = "CBS";
            break;

        case "230P/9XM":
            note = 0;
            starting = "DUNDIGAL";
            destination = "CHARMINAR";
            break;

        // HD231 SERIES
        case "231":
            note = 0;
            starting = "MEDCHAL";
            destination = "MEDICITY";
            break;

        case "231KN":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KAZIPALLY";
            break;

        // HD233 SERIES
        case "233":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NUTHANAKAL";
            break;

        // HD241 SERIES
        case "241T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DHARMAVARAM";
            break;

        // HD242 SERIES
        case "242":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KEESARAGUTTA";
            break;

        case "242/3K":
            note = 0;
            starting = "KEESARAGUTTA";
            destination = "AFZALGUNJ";
            break;

        case "242/17H":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KEESARAGUTTA";
            break;

        case "242/211":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DONGALAMYSAMMA";
            break;

        case "242/272G":
            note = 0;
            starting = "KEESARAGUTTA";
            destination = "GANDIMAISAMMA";
            break;

        case "242A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ANKIREDDYPALLY";
            break;

        case "242B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BOGARAM";
            break;

        case "242G":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KEESARA";
            break;

        case "242GA":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ANKIREDDYPALLY";
            break;

        case "242RG":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RG COLONY";
            break;

        case "242RG/15H":
            note = 0;
            starting = "RG COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD245 SERIES
        case "245A":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AUSHAPUR";
            break;

        // HD250 SERIES
        case "250":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "ECIL X ROADS";
            break;

        case "250/10K":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "KPHB 4TH PHASE";
            break;

        case "250/49":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "NAMPALLY";
            break;

        case "250/49M":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "MEHDIPATNAM";
            break;

        case "250/49MT":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "TALLAGADDA";
            break;

        case "250/219":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "PATANCHERUVU";
            break;

        case "250/281":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "250C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHERLAPALLY";
            break;

        case "250C/49M":
            note = 0;
            starting = "CHERLAPALLY";
            destination = "MEHDIPATNAM";
            break;

        case "250D":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "AMBEDKAR NAGAR";
            break;

        case "250D/49M":
            note = 0;
            starting = "AMBEDKAR NAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "250E":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "CHENGICHERLA DEPOT";
            break;

        case "250S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA";
            break;

        case "250SS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHENGICHERLA DEPOT";
            break;

        // HD251 SERIES
        case "251/1Z":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/2Z":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/5K":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/7Z":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/8A":
            note = 0;
            starting = "KOTHUR";
            destination = "SECUNDERABAD";
            break;

        case "251/90L":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "251/188":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "MEHDIPATNAM";
            break;

        case "251/300":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "UPPAL X ROADS";
            break;

        case "251M":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "MUCHINTHAL";
            break;

        // HD252 SERIES
        case "252/3K":
            note = 0;
            starting = "RGI AIRPORT";
            destination = "ECIL X ROADS";
            break;

        case "252/6IW":
            note = 0;
            starting = "WAVEROCK";
            destination = "CHERLAPALLY";
            break;

        case "252S":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "SHANKARAPURAM";
            break;

        case "252S/8A":
            note = 0;
            starting = "SHANKARAPURAM";
            destination = "SECUNDERABAD";
            break;

        // HD253 SERIES
        case "253":
            note = 0;
            starting = "CHARMINAR";
            destination = "MAHESHWARAM";
            break;

        case "253/8A":
            note = 0;
            starting = "SHAMSHABAD";
            destination = "SECUNDERABAD";
            break;

        case "253L/85":
            note = 0;
            starting = "ANNOJIGUDA";
            destination = "CHARMINAR";
            break;

        case "253L/102":
            note = 0;
            starting = "LEMOOR";
            destination = "KOTI W.COLLEGE";
            break;

        case "253T/90":
            note = 0;
            starting = "FAB CITY";
            destination = "JBS";
            break;

        case "253W":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "MAHESHWARAM";
            break;

        // HD254 SERIES
        case "254/217":
            note = 0;
            starting = "KONGARAKALAN";
            destination = "LINGAMPALLY";
            break;

        // HD272 SERIES
        case "272":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BOWRAMPET";
            break;

        case "272B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BOWRAMPET";
            break;

        case "272G/9K":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "AFZALGUNJ";
            break;

        case "272G/9X":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "CBS";
            break;

        case "272G/18":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "UPPAL";
            break;

        case "272G/29B":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "SECUNDERABAD";
            break;

        case "272G/83J":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "KACHEGUDA STN.";
            break;

        case "272G/189M":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "MEHDIPATNAM";
            break;

        case "272G/219":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "PATANCHERUVU";
            break;

        case "272G/219I":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "ISNAPUR";
            break;

        case "272G/242":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "KEESARAGUTTA";
            break;

        case "272I/29B":
            note = 0;
            starting = "INDIRAMMA COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD273 SERIES
        case "273/24S":
            note = 0;
            starting = "GANDIMAISAMMA";
            destination = "ECIL X ROADS";
            break;

        // HD277 SERIES
        case "277":
            note = 0;
            starting = "MGBS";
            destination = "IBRAHIMPATNAM";
            break;

        case "277D":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "IBRAHIMPATNAM";
            break;

        case "277D/72":
            note = 0;
            starting = "IBRAHIMPATNAM";
            destination = "AFZALGUNJ";
            break;

        case "277K/218":
            note = 0;
            starting = "KONGARAKALAN";
            destination = "MIYAPUR";
            break;

        case "277L":
            note = 0;
            starting = "LB NAGAR";
            destination = "IBRAHIMPATNAM";
            break;

        case "277N":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "NADERGUL";
            break;

        case "277S":
            note = 0;
            starting = "SECRETARIATE";
            destination = "IBRAHIMPATNAM";
            break;

        // HD279 SERIES
        case "279":
            note = 0;
            starting = "JBS";
            destination = "IBRAHIMPATNAM";
            break;

        case "279/229":
            note = 0;
            starting = "IBRAHIMPATNAM";
            destination = "MEDCHAL";
            break;

        case "279U":
            note = 0;
            starting = "IBRAHIMPATNAM";
            destination = "UPPAL X ROADS";
            break;

        // HD280 SERIES
        case "280":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "GHATKESAR";
            break;

        case "280/20":
            note = 0;
            starting = "GHATKESAR";
            destination = "SECRETARIATE";
            break;

        case "280/30":
            note = 0;
            starting = "GHATKESAR";
            destination = "JAGATHGIRIGUTTA";
            break;

        case "280/219":
            note = 0;
            starting = "GHATKESAR";
            destination = "PATANCHERUVU";
            break;

        case "280/492":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "PILLAIPALLY";
            break;

        case "280/488":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BIBI NAGAR";
            break;

        case "280B":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BOGARAM";
            break;

        case "280I":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "INFOSYS";
            break;

        case "280J":
            note = 0;
            starting = "JBS";
            destination = "GHATKESAR";
            break;

        case "280N":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "NFC NAGAR";
            break;

        case "280X":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "GHATKESAR";
            break;

        // HD281 SERIES
        case "281":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "GHATKESAR";
            break;

        case "281/3K":
            note = 0;
            starting = "GHATKESAR";
            destination = "AFZALGUNJ";
            break;

        case "281/6L":
            note = 0;
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        case "281/16C":
            note = 0;
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/24B":
            note = 0;
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/24L":
            note = 0;
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281/113M":
            note = 0;
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        case "281/250":
            note = 0;
            starting = "GHATKESAR";
            destination = "SECUNDERABAD";
            break;

        case "281R/16A":
            note = 0;
            starting = "RTC COLONY";
            destination = "SECUNDERABAD";
            break;

        // HD282 SERIES
        case "282K":
            note = 0;
            starting = "GHATKESAR";
            destination = "KONDAPUR";
            break;

        // HD283 SERIES
        case "283C":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SURARAM COLONY";
            break;

        case "283D/9X":
            note = 0;
            starting = "SURARAM COLONY";
            destination = "CBS";
            break;

        case "283K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KORREMULA";
            break;

        case "283T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TENUGUDEM";
            break;

        case "283VS":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "SURARAM VILLAGE";
            break;

        case "283S/18":
            note = 0;
            starting = "KORREMULA";
            destination = "SECUNDERABAD";
            break;

        // HD284 SERIES
        case "284P":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "PRATHAP SINGARAM";
            break;

        // HD288 SERIES
        case "288":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "MOINABAD";
            break;

        case "288/113M":
            note = 0;
            starting = "MOINABAD";
            destination = "UPPAL";
            break;

        case "288A":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "AMDAPUR";
            break;

        case "288C":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "APPOJIGUDA";
            break;

        case "288D":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "BALAJI TEMPLE";
            break;

        case "288E":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "BAKARAM";
            break;

        case "288K":
            note = 0;
            starting = "KOTI";
            destination = "MOINABAD";
            break;

        case "288D/19K":
            note = 0;
            starting = "BALAJI TEMPLE";
            destination = "KUKATPALLY";
            break;

        // HD290 SERIES
        case "290":
            note = 0;
            starting = "JBS";
            destination = "HAYATHNAGAR";
            break;

        case "290/229":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "MEDCHAL";
            break;

        case "290KJ":
            note = 0;
            starting = "JBS";
            destination = "KUNTLOOR";
            break;

        case "290KP":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KAVADIPALLY";
            break;

        case "290U":
            note = 0;
            starting = "JBS";
            destination = "HAYATHNAGAR";
            break;

        case "290U/201":
            note = 0;
            starting = "JBS";
            destination = "BACHARAM";
            break;

        case "290U/201T":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "TARAMATIPET";
            break;

        case "290U/202K":
            note = 0;
            starting = "JBS";
            destination = "KOHEDA";
            break;

        case "290U/204":
            note = 0;
            starting = "JBS";
            destination = "GANDICHERUVU";
            break;

        case "290U/205A":
            note = 0;
            starting = "JBS";
            destination = "ANAJPUR";
            break;

        case "290U/205M":
            note = 0;
            starting = "JBS";
            destination = "MAJEEDPUR";
            break;

        case "290U/229":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "MEDCHAL";
            break;

        case "290U/463":
            note = 0;
            starting = "JBS";
            destination = "DESHMUKHI";
            break;

        case "290U/555":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "CHOTUPPAL";
            break;

        case "290UA":
            note = 0;
            starting = "JBS";
            destination = "ANAJPUR";
            break;

        case "290UF":
            note = 0;
            starting = "JBS";
            destination = "METTU (RFC)";
            break;

        // HD299 SERIES
        case "299":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "KOTI W.COLLEGE";
            break;

        case "299/1D":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "SECUNDERABAD";
            break;

        case "299/100":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "SECRETARIATE";
            break;

        case "299/156":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "MEHDIPATNAM";
            break;

        case "299D":
            note = 0;
            starting = "HAYATHNAGAR";
            destination = "DILSHUKNAGAR";
            break;

        // HD300 SERIES
        case "300":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "UPPAL X ROADS";
            break;

        case "300/90":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SECUNDERABAD";
            break;

        case "300/118W":
            note = 0;
            starting = "JBS";
            destination = "WAVEROCK";
            break;

        case "300/126":
            note = 0;
            starting = "LB NAGAR";
            destination = "JNTU COLLEGE";
            break;

        case "300/251":
            note = 0;
            starting = "UPPAL X ROADS";
            destination = "SHAMSHABAD";
            break;

        case "300/539":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KANHA";
            break;

        case "300L":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "LB NAGAR";
            break;

        // HD400 SERIES
        case "412":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "MALL";
            break;

        case "445":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "KETIREDDYPALLY";
            break;

        case "447R":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "RAVULAPALLY";
            break;

        case "458":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "MAHESHWARAM";
            break;

        case "463":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "DESHMUKHI";
            break;

        case "463/290U":
            note = 0;
            starting = "DESHMUKHI";
            destination = "SECUNDERABAD";
            break;

        case "464":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "DANDUMAILARAM";
            break;

        case "488/280":
            note = 0;
            starting = "BIBI NAGAR";
            destination = "SECUNDERABAD";
            break;

        case "490S":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "BIBI NAGAR";
            break;

        case "492/280":
            note = 0;
            starting = "PILLAIPALLY";
            destination = "SECUNDERABAD";
            break;

        case "495":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KANUKUNTA";
            break;

        case "497":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "HAJIPUR";
            break;

        case "498":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KESHAVAPUR";
            break;

        case "498K":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "KOTHAPALLY";
            break;

        case "498U":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "UDDHAMARRI";
            break;

        case "498VJ":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "JINNARAM";
            break;

        // HD500 SERIES
        case "505":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "SHANKARPALLY";
            break;

        case "505/19S":
            note = 0;
            starting = "SHANKARPALLY";
            destination = "SANATH NAGAR";
            break;

        case "505/156":
            note = 0;
            starting = "SHANKARPALLY";
            destination = "HAYATHNAGAR";
            break;

        case "505/156V":
            note = 0;
            starting = "SHANKARPALLY";
            destination = "NGO's COLONY";
            break;

        case "523K":
            note = 0;
            starting = "KOTI W.COLLEGE";
            destination = "KAVADIPALLY";
            break;

        case "524":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "POCHAMPALLY";
            break;

        case "530":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KANDUKUR";
            break;

        case "532":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "JP DARGAH";
            break;

        case "532/8A":
            note = 0;
            starting = "KOTHUR";
            destination = "SECUNDERABAD";
            break;

        case "537":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KODICHERLA";
            break;

        case "539":
            note = 0;
            starting = "AFZALGUNJ";
            destination = "KANHA";
            break;

        case "539/1Z":
            note = 0;
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "539/8A":
            note = 0;
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "539/300":
            note = 0;
            starting = "KANHA";
            destination = "SECUNDERABAD";
            break;

        case "546":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "BHUVANAGIRI";
            break;

        case "555":
            note = 0;
            starting = "DILSHUKNAGAR";
            destination = "CHOTUPPAL";
            break;

        case "555/290U":
            note = 0;
            starting = "CHOTUPPAL";
            destination = "SECUNDERABAD";
            break;

        case "567":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "MARKOOR";
            break;

        case "568":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "DAMARAKUNTA";
            break;

        case "578":
            note = 0;
            starting = "ECIL X ROADS";
            destination = "M TURKAPALLY";
            break;

        case "580":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "YADAGIRIGUTTA";
            break;

        case "589":
            note = 0;
            starting = "SECUNDERABAD";
            destination = "RAMAYAMPET";
            break;

        case "593":
            note = 0;
            starting = "MEHDIPATNAM";
            destination = "CHEVELLA";
            break;

        // HD700 SERIES
        case "702/212":
            note = 0;
            starting = "VARGAL TEMPLE";
            destination = "SECUNDERABAD";
            break;


        default:

            break;
    }

    getId('route1No').innerHTML = routeNumberUP;
    getId('route2No').innerHTML = routeNumberDown;
    getId('starting').innerHTML = starting;
    getId('destination').innerHTML = destination;

    direction = 1;

    if (note == 0) {
        introPartUP = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(starting) + "</strong> and <strong>" + capitalizeText(destination) + "</strong> passing through several stops along the way. Here are all the stops it covers: ";

        introPartDOWN = "Bus Route <strong>" + routeNoI + "</strong> runs Between <strong>" + capitalizeText(destination) + "</strong> and <strong>" + capitalizeText(starting) + "</strong> passing through several stops along the way. Here are all the stops it covers: ";
    }

    fillNewUIrouteListNEW(upRouteArray, direction);

}

function ReturnIndex(routeArray, route) {
    let i;
    for (i = 0; i < routeArray.length; i++) {
        if (routeArray[i][0] == route) {
            break;
        }
    }

    return i;
}

function fillNewUIrouteListNEW(route, direction) {
    stopsList.innerHTML = "";
    let intro = document.createElement("p");
    intro.classList.add('intro');
    // intro.textContent = "Bus Route 117 runs from Uppal to Kushaiguda, passing through several important stops. Sometimes, it ends at ECIL instead of going all the way to Kushaiguda. Here are all the stops it covers:";
    if (direction == 1) {
        intro.innerHTML = introPartUP;
    } else {
        intro.innerHTML = introPartDOWN;
    }

    stopsList.appendChild(intro);

    for (let i = 1; i < route.length; i++) {
        let stopsContainer = document.createElement('div');
        let graphics = document.createElement('div');
        let text = document.createElement('div');

        let circle = document.createElement('p');
        let stopName = document.createElement('h4');
        let substopName = document.createElement('p');

        stopsContainer.classList.add('stopsContainer');
        stopsContainer.classList.add('ckl');
        graphics.classList.add('graphics');
        text.classList.add('text');

        circle.classList.add('circle');
        // circle.textContent = i;

        if (OSK_Stops.includes(route[i])) {
            stopName.innerHTML = capitalizeText(route[i]);
        } else if (SHD.includes(route[i])) {
            stopName.innerHTML = shdLower[SHD.indexOf(route[i])];
        } else {
            stopName.innerHTML = capitalizeText(route[i]);
        }
        stopName.setAttribute("onclick", "viewStopSender(this)");

        if (i == 1) {
            graphics.classList.add('first');
        }

        graphics.appendChild(circle);
        text.appendChild(stopName);
        text.appendChild(substopName);
        stopsContainer.appendChild(graphics);
        stopsContainer.appendChild(text);

        stopsList.appendChild(stopsContainer);

        if (i == route.length - 1) {
            graphics.classList.add('last');
        } else {
            let stopsContainer2 = document.createElement('div');
            let graphics2 = document.createElement('div');
            let text2 = document.createElement('div');

            let road = document.createElement('p');
            let empty = document.createElement('h4');

            stopsContainer2.classList.add('stopsContainer');
            graphics2.classList.add('graphics');
            text2.classList.add('text');

            road.classList.add('road');

            graphics2.appendChild(road);
            text2.appendChild(empty);
            stopsContainer2.appendChild(graphics2);
            stopsContainer2.appendChild(text2);

            stopsList.appendChild(stopsContainer2);
        }
    }

    let TotalStops = route.length - 1 + " Stops";
    let Distance;
    if (direction == 1) {
        Distance = UP_Distances[routesArray.indexOf(input1.value)]
    } else {
        Distance = DOWN_Distances[routesArray.indexOf(input1.value)]
    }

    let conclusion = document.createElement("p");
    conclusion.classList.add("conclusion");
    conclusion.innerHTML = "<strong>Total Stops:</strong> " + TotalStops;
    conclusion.innerHTML += "<br><strong>Distance:</strong> " + Distance + " KMS";

    stopsList.appendChild(conclusion);
}

function reverseDirectionRoute() {
    if (direction == 1) {
        direction = 2;
        getId('starting').innerHTML = destination;
        getId('destination').innerHTML = starting;
        getId('buttonNameRev').innerHTML = "UP ROUTE";
        fillNewUIrouteListNEW(downRouteArray, direction);
    } else {
        direction = 1;
        getId('starting').innerHTML = starting;
        getId('destination').innerHTML = destination;
        getId('buttonNameRev').innerHTML = "DOWN ROUTE";
        fillNewUIrouteListNEW(upRouteArray, direction);
    }
    stopsList.scrollTop = 0;
}

function viewStop(ref) {
    // To Be Hide
    OutputScreen.classList.remove('close');
    OutputScreen.classList.add('show');
    OutputScreen2.classList.remove('show');
    suggessionsList.innerHTML = "";
    // clear1.classList.add('hide');
    clear1.style.visibility = "hidden";
    input1.value = ref.innerText;
    input2.value = '';

    let main;
    let sub;
    if (ref.value == 1) {
        if (ref.innerHTML.includes('CBS')) {
            main = 'CBS';
            sub = 'CENTRAL BUS STATION';
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
            fillRoutesBusStop("CITY BUS STATION");
        } else if (JunctionStop == 'MG BUS STATION') {
            main = 'MGBS';
            sub = ref.innerHTML;
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
            fillJunctionStopsRoutes("MG BUS STATION", sub);
        } else {
            main = JunctionStop;
            sub = ref.innerHTML;
            outputBusStopPart2.classList.add('hide');
            outputBusStopPart1.classList.remove('hide');
            backState = 1;
            junctionStopsStopName = main + " " + sub;
            fillRoutesBusStop(junctionStopsStopName);

            if (!(SHD.includes(junctionStopsStopName))) {
                if (junctionStopsStopName == "UPPAL BUS STATION") {
                    fillRoutesBusStop("UPPAL");
                } else {
                    fillJunctionStopsRoutes(main, sub);
                }
            }

        }
    }
    else if (ref.innerHTML.includes('CBS') || ref.innerHTML == 'CITY BUS STATION') {
        main = 'CBS';
        sub = 'CENTRAL BUS STATION';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
        fillRoutesBusStop("CITY BUS STATION");
    }
    else if (ref.innerHTML.includes('JBS') || ref.innerHTML == 'JUBLIE BUS STATION') {
        main = 'JBS';
        sub = 'JUBLIE BUS STATION';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
        fillRoutesBusStop("JUBLIE BUS STATION");
    }
    else if (junctionStopsArray.includes(ref.innerHTML)) {
        JunctionStop = ref.innerHTML;
        JunctionStopState = ref;
        if (JunctionStop == "MG BUS STATION") {
            main = 'MGBS';
        } else {
            main = JunctionStop;
        }
        sub = '';
        outputBusStopPart1.classList.add('hide');
        outputBusStopPart2.classList.remove('hide');
        avlBusStops.innerHTML = '';
        junctionStopsHeading.innerHTML = 'Bus Stops in ' + JunctionStop.charAt(0).toUpperCase() + JunctionStop.slice(1).toLowerCase();;
        let index = junctionStopsArray.indexOf(JunctionStop);

        junctionStopsArrayStops[index].forEach(element => {
            let listItem = document.createElement("li");
            listItem.setAttribute('value', 1);
            listItem.setAttribute('onclick', 'viewStop(this)');
            listItem.textContent = element;
            avlBusStops.appendChild(listItem);
        });

    } else {
        main = ref.innerHTML;
        sub = '';
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
        fillRoutesBusStop(ref.innerHTML);
    }

    handleFontSize(main, sub);
}

function viewStopSender(ref) {
    let stopName = document.createElement("li");
    let stopNameContent = ref.innerText.toUpperCase();
    stopName.innerHTML = stopNameContent;
    viewStop(stopName);
    if (OutputScreen3.classList[1] != 'close') {
        backState = 9;
        OutputScreen3.classList.add("close");
    }
    getId('reverseButton').classList.add('hide');
}

function fillJunctionStopsRoutes(main, sub) {
    let mostFreq = []
    let lessFreq = []
    let lessFreqDouble = []

    let mainIndex = junctionStopsArray.indexOf(main);
    let subIndex = junctionStopsArrayStops[mainIndex].indexOf(sub);

    junctionStopsArrayRG_Routes[mainIndex][subIndex].forEach(route => {
        if (!(highFreqList.includes(route)) && route.includes("/")) {
            lessFreqDouble.push(route);
        } else if (!(highFreqList.includes(route)) && !(route.includes("/"))) {
            lessFreq.push(route);
        } else {
            mostFreq.push(route)
        }
    });

    lessFreq = lessFreq.concat(lessFreqDouble);

    mostFreq = removeDuplicateRoutes(mostFreq);
    lessFreq = removeDuplicateRoutes(lessFreq);
    lessFreqDouble = removeDuplicateRoutes(lessFreqDouble);

    mostFreq.sort(customSort);
    lessFreq.sort(customSort);

    regularRoutesOutput.innerHTML = '';
    rareRoutesOutput.innerHTML = '';

    mostFreq.forEach(element => {
        let listItem = document.createElement("li");
        listItem.setAttribute('onclick', 'viewRoute(this)');
        listItem.textContent = element;
        regularRoutesOutput.appendChild(listItem);
    });

    lessFreq.forEach(element => {
        let listItem = document.createElement("li");
        listItem.setAttribute('onclick', 'viewRoute(this)');
        listItem.textContent = element;
        rareRoutesOutput.appendChild(listItem);
    });

    if (lessFreq.length == 0) {
        getId('BST_RouteContainerFT').style.display = "none";
    } else {
        getId('BST_RouteContainerFT').style.display = "block";
    }
}

function fillRoutesBusStop(ref) {
    let mostFreq = []
    let lessFreq = []
    let lessFreqDouble = []

    DetailedRoutesUP.forEach(element => {
        element.forEach(route => {
            if (ref == route) {
                if (element[0].includes("/") && !(highFreqList.includes(element[0]))) {
                    lessFreqDouble.push(element[0]);
                } else if (!(element[0].includes("/")) && !(highFreqList.includes(element[0]))) {
                    lessFreq.push(element[0]);
                } else {
                    mostFreq.push(element[0]);
                }
            }
        });
    });

    DetailedRoutesDOWN.forEach(element => {
        element.forEach(route => {
            if (ref == route) {
                if (element[0].includes("/") && !(highFreqList.includes(element[0]))) {
                    if (!(lessFreqDouble.includes(element[0]))) {
                        lessFreqDouble.push(element[0]);
                    }
                } else if (!(element[0].includes("/")) && !(highFreqList.includes(element[0]))) {
                    if (!(lessFreq.includes(element[0]))) {
                        lessFreq.push(element[0]);
                    }
                } else {
                    if (!(mostFreq.includes(element[0]))) {
                        mostFreq.push(element[0]);
                    }
                }
            }
        });
    });

    lessFreq = lessFreq.concat(lessFreqDouble);

    mostFreq = removeDuplicateRoutes(mostFreq);
    lessFreq = removeDuplicateRoutes(lessFreq);
    lessFreqDouble = removeDuplicateRoutes(lessFreqDouble);

    mostFreq.sort(customSort);
    lessFreq.sort(customSort);

    regularRoutesOutput.innerHTML = '';
    rareRoutesOutput.innerHTML = '';

    mostFreq.forEach(element => {
        let listItem = document.createElement("li");
        listItem.setAttribute('onclick', 'viewRoute(this)');
        listItem.textContent = element;
        getId('regularRoutesOutput').appendChild(listItem);
    });

    lessFreq.forEach(element => {
        let listItem = document.createElement("li");
        listItem.setAttribute('onclick', 'viewRoute(this)');
        listItem.textContent = element;
        getId('rareRoutesOutput').appendChild(listItem);
    });

    if (lessFreq.length == 0) {
        getId('BST_RouteContainerFT').style.display = "none";
    } else {
        getId('BST_RouteContainerFT').style.display = "block";
    }

}

function customSort(a, b) {
    let numA = parseInt(a.match(/\d+/)[0]);
    let numB = parseInt(b.match(/\d+/)[0]);

    if (numA === numB) {
        return a.localeCompare(b);
    }

    return numA - numB;
}

function normalizeRoute(route) {
    let parts = route.split('/');
    return parts.sort().join('/');
}

function removeDuplicateRoutes(routes) {
    let uniqueRoutes = [];
    let seenRoutes = new Set();

    routes.forEach(route => {
        let normalizedRoute = normalizeRoute(route);
        if (!seenRoutes.has(normalizedRoute)) {
            seenRoutes.add(normalizedRoute);
            uniqueRoutes.push(route);
        }
    });

    return uniqueRoutes;
}

function viewFromToRoute(ref, pos) {
    if (pos == 1) {
        input1.value = ref.innerHTML;
        suggessionsList.innerHTML = "";
        clear1.style.visibility = "hidden";
        if (input2.value != "") {
            if (SHD.includes(input2.value)) {
                if (input1.value == input2.value) {
                    openPopUpBox(4, "SAME");
                } else {
                    fromToFetchOutput(input1.value, input2.value);
                }
            } else {
                openPopUpBox(4, "INV_D");
            }
        }
    } else {
        input2.value = ref.innerHTML;
        suggessionsList.innerHTML = "";
        clear2.style.visibility = "hidden";
        if (input1.value != "") {
            if (SHD.includes(input1.value)) {
                if (input1.value == input2.value) {
                    openPopUpBox(4, "SAME");
                } else {
                    fromToFetchOutput(input1.value, input2.value);
                }
            } else {
                openPopUpBox(4, "INV_S");
            }
        }
    }
}

function fromToFetchOutput(from, to) {
    let mostFreq = []
    let lessFreq = []
    let lessFreqDouble = []

    DetailedRoutesUP.forEach(element => {
        if (element.includes(from) && element.includes(to)) {
            if (element.indexOf(from) < element.indexOf(to)) {
                if (element[0].includes("/") && !(highFreqList.includes(element[0]))) {
                    lessFreqDouble.push(element[0]);
                } else if (!(element[0].includes("/")) && !(highFreqList.includes(element[0]))) {
                    lessFreq.push(element[0]);
                } else {
                    mostFreq.push(element[0]);
                }
            }
        }
    });

    DetailedRoutesDOWN.forEach(element => {
        if (element.includes(from) && element.includes(to)) {
            if (element.indexOf(from) < element.indexOf(to)) {
                if (element[0].includes("/") && !(highFreqList.includes(element[0]))) {
                    lessFreqDouble.push(element[0]);
                } else if (!(element[0].includes("/")) && !(highFreqList.includes(element[0]))) {
                    lessFreq.push(element[0]);
                } else {
                    mostFreq.push(element[0]);
                }
            }
        }
    });

    lessFreq = lessFreq.concat(lessFreqDouble);

    mostFreq = removeDuplicateRoutes(mostFreq);
    lessFreq = removeDuplicateRoutes(lessFreq);
    lessFreqDouble = removeDuplicateRoutes(lessFreqDouble);

    mostFreq.sort(customSort);
    lessFreq.sort(customSort);

    regularRoutesOutputFT.innerHTML = '';
    rareRoutesOutputFT.innerHTML = '';

    if (mostFreq.length == 0 && lessFreq.length == 0) {
        if (feature == 3) {
            openPopUpBox(1, "DNA");
        } else {
            // ALTERNATE ROUTE FETCHING
            let route = altRouteGetter(from, to);

            if (route == "REDIRECT") {
                openPopUpBox(4, "ALTworking");
            } else {
                OutputScreen3.classList.remove('close');
                FromStopNameHead.innerHTML = from;
                ToStopNameHead.innerHTML = to;

                if (from.length <= 14 || to.length <= 14) {
                    FromStopNameHead.style.fontSize = "24px";
                    ToStopNameHead.style.fontSize = "24px";
                } else if (from.length <= 20 || to.length <= 20) {
                    FromStopNameHead.style.fontSize = "20px";
                    ToStopNameHead.style.fontSize = "20px";
                } else if (from.length <= 25 || to.length <= 25) {
                    FromStopNameHead.style.fontSize = "20px";
                    ToStopNameHead.style.fontSize = "20px";
                } else if (from.length <= 32 || to.length <= 32) {
                    FromStopNameHead.style.fontSize = "18px";
                    ToStopNameHead.style.fontSize = "18px";
                }

                fillAlternateRoute(route, from, to);
            }
        }
    } else {
        if (feature == 5) {
            openPopUpBox(1, "DA");
        } else {
            // FROM - TO FETCHING

            OutputScreen3.classList.remove('close');
            FromStopNameHead.innerHTML = from;
            ToStopNameHead.innerHTML = to;

            if (from.length <= 14 || to.length <= 14) {
                FromStopNameHead.style.fontSize = "24px";
                ToStopNameHead.style.fontSize = "24px";
            } else if (from.length <= 20 || to.length <= 20) {
                FromStopNameHead.style.fontSize = "22px";
                ToStopNameHead.style.fontSize = "22px";
            } else if (from.length <= 25 || to.length <= 25) {
                FromStopNameHead.style.fontSize = "20px";
                ToStopNameHead.style.fontSize = "20px";
            } else if (from.length <= 32 || to.length <= 32) {
                FromStopNameHead.style.fontSize = "18px";
                ToStopNameHead.style.fontSize = "18px";
            }


            getId('outputBusStopPart1FT').classList.remove('hide');
            getId('outputBusStopPart2ALT').classList.add('hide');

            if (mostFreq.length == 0) {
                let p = document.createElement("p");
                let a = document.createElement("button");
                p.textContent = "Regular Buses are not Available";
                p.classList.add('centerRow');
                p.classList.add('redirectFromToInfo');
                a.setAttribute('onclick', 'viewAlternateRouteFT()')
                a.textContent = "View Alternate Route";
                a.classList.add('centerRow');
                a.classList.add('redirectFromToInfo');
                regularRoutesOutputFT.appendChild(p);
                regularRoutesOutputFT.appendChild(a);
            } else {
                mostFreq.forEach(element => {
                    let listItem = document.createElement("li");
                    listItem.setAttribute('onclick', 'viewRoute(this)');
                    listItem.textContent = element;
                    regularRoutesOutputFT.appendChild(listItem);
                });
            }

            lessFreq.forEach(element => {
                let listItem = document.createElement("li");
                listItem.setAttribute('onclick', 'viewRoute(this)');
                listItem.textContent = element;
                rareRoutesOutputFT.appendChild(listItem);
            });

            if (lessFreq.length == 0) {
                getId('RR_RouteContainerFT').style.display = "none";
            } else {
                getId('RR_RouteContainerFT').style.display = "block";
            }
        }
    }
}

function fillAlternateRoute(route, from, to) {
    getId('outputBusStopPart1FT').classList.add('hide');
    getId('outputBusStopPart2ALT').classList.remove('hide');

    // ALTERNATE ROUTE MODES
    if (route[0] == "SEWD_S") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.add('hide');

        hideALTblocks();
        point3ALT.classList.remove('hide');

        h1_3p.innerHTML = from + " - " + route[1];
        r1_3p.innerHTML = route[4]
        if (route[3] == "") {
            h2_3p.innerHTML = route[2];
        } else {
            h2_3p.innerHTML = route[2] + " - " + route[3];
        }
        r2_3p.innerHTML = route[5]
        h3_3p.innerHTML = route[1] + " - " + to;
        r3_3p.innerHTML = route[6]
    } else if (route[0] == "SEWD_M") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.remove('hide');

        hideALTblocks();
        point3ALT.classList.remove('hide');
        point3ALT_OR.classList.remove('hide');

        // BEST ROUTE
        h1_3p.innerHTML = from + " - " + route[1];
        r1_3p.innerHTML = route[4]
        if (route[3] == "") {
            h2_3p.innerHTML = route[2];
        } else {
            h2_3p.innerHTML = route[2] + " - " + route[3];
        }
        r2_3p.innerHTML = route[5]
        h3_3p.innerHTML = route[1] + " - " + to;
        r3_3p.innerHTML = route[6]

        // OTHER ROUTE
        h1_3p_OR.innerHTML = from + " - " + route[7];
        r1_3p_OR.innerHTML = route[10]
        if (route[9] == "") {
            h2_3p_OR.innerHTML = route[8];
        } else {
            h2_3p_OR.innerHTML = route[8] + " - " + route[9];
        }
        r2_3p_OR.innerHTML = route[11]
        h3_3p_OR.innerHTML = route[7] + " - " + to;
        r3_3p_OR.innerHTML = route[12]
    } else if (route[0] == "3P_CEX_S") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.add('hide');

        hideALTblocks();
        point3ALT.classList.remove('hide');

        h1_3p.innerHTML = from + " - " + route[1];
        r1_3p.innerHTML = route[4]

        h2_3p.innerHTML = route[2] + " - " + route[3];
        r2_3p.innerHTML = route[5]

        h3_3p.innerHTML = route[3] + " - " + to;
        r3_3p.innerHTML = route[6]
    } else if (route[0] == "3P_CEX_3P_M") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.remove('hide');

        hideALTblocks();
        point3ALT.classList.remove('hide');
        point3ALT_OR.classList.remove('hide');

        // BEST ROUTE
        h1_3p.innerHTML = from + " - " + route[1];
        r1_3p.innerHTML = route[4]

        h2_3p.innerHTML = route[2] + " - " + route[3];
        r2_3p.innerHTML = route[5]

        h3_3p.innerHTML = route[3] + " - " + to;
        r3_3p.innerHTML = route[6]

        // OTHER ROUTE
        h1_3p_OR.innerHTML = from + " - " + route[7];
        r1_3p_OR.innerHTML = route[10]
        if (route[9] == "") {
            h2_3p_OR.innerHTML = route[8];
        } else {
            h2_3p_OR.innerHTML = route[8] + " - " + route[9];
        }
        r2_3p_OR.innerHTML = route[11]
        h3_3p_OR.innerHTML = route[7] + " - " + to;
        r3_3p_OR.innerHTML = route[12]

    } else if (route[0] == "3PNW_S") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.add('hide');
        hideALTblocks();
        point3NWALT.classList.remove('hide');

        if (route[6] == "S") {
            // Best Route Block
            h1_3pNW.innerHTML = from + " - " + route[2];
            r1_3pNW.innerHTML = route[1];

            h2_3pNW.innerHTML = route[2] + " - " + route[4];
            r2_3pNW.innerHTML = route[3];

            h3_3pNW.innerHTML = route[4] + " - " + to;
            r3_3pNW.innerHTML = route[5];
        } else {
            // Best Route Block
            h1_3pNW.innerHTML = from + " - " + route[4];
            r1_3pNW.innerHTML = route[5];

            h2_3pNW.innerHTML = route[4] + " - " + route[2];
            r2_3pNW.innerHTML = route[3];

            h3_3pNW.innerHTML = route[2] + " - " + to;
            r3_3pNW.innerHTML = route[1];
        }

    } else if (route[0] == "3PNW_M") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.remove('hide');
        hideALTblocks();
        point3NWALT.classList.remove('hide');
        point3NWALT_OR.classList.remove('hide');

        if (route[11] == "S") {
            // Best Route Block
            h1_3pNW.innerHTML = from + " - " + route[2];
            r1_3pNW.innerHTML = route[1];

            h2_3pNW.innerHTML = route[2] + " - " + route[4];
            r2_3pNW.innerHTML = route[3];

            h3_3pNW.innerHTML = route[4] + " - " + to;
            r3_3pNW.innerHTML = route[5];

            // Other Route Block
            h1_3pNW_OR.innerHTML = from + " - " + route[7];
            r1_3pNW_OR.innerHTML = route[6];

            h2_3pNW_OR.innerHTML = route[7] + " - " + route[9];
            r2_3pNW_OR.innerHTML = route[8];

            h3_3pNW_OR.innerHTML = route[9] + " - " + to;
            r3_3pNW_OR.innerHTML = route[10];
        } else {
            // Best Route Block
            h1_3pNW.innerHTML = from + " - " + route[4];
            r1_3pNW.innerHTML = route[5];

            h2_3pNW.innerHTML = route[4] + " - " + route[2];
            r2_3pNW.innerHTML = route[3];

            h3_3pNW.innerHTML = route[2] + " - " + to;
            r3_3pNW.innerHTML = route[1];

            // Other Route Block
            h1_3pNW_OR.innerHTML = from + " - " + route[9];
            r1_3pNW_OR.innerHTML = route[10];

            h2_3pNW_OR.innerHTML = route[9] + " - " + route[7];
            r2_3pNW_OR.innerHTML = route[8];

            h3_3pNW_OR.innerHTML = route[7] + " - " + to;
            r3_3pNW_OR.innerHTML = route[6];
        }

    } else if (route[0] == "3P3PNW_M") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.remove('hide');
        hideALTblocks();
        point3ALT.classList.remove('hide');
        point3NWALT_OR.classList.remove('hide');

        // Best Route - 3 Points with walkway
        h1_3p.innerHTML = from + " - " + route[1];
        r1_3p.innerHTML = route[4]
        if (route[3] == "") {
            h2_3p.innerHTML = route[2];
        } else {
            h2_3p.innerHTML = route[2] + " - " + route[3];
        }
        r2_3p.innerHTML = route[5]
        h3_3p.innerHTML = route[1] + " - " + to;
        r3_3p.innerHTML = route[6]

        // Other Route Block - 3 Points without walkway
        h1_3pNW_OR.innerHTML = from + " - " + route[8];
        r1_3pNW_OR.innerHTML = route[7];

        h2_3pNW_OR.innerHTML = route[8] + " - " + route[10];
        r2_3pNW_OR.innerHTML = route[9];

        h3_3pNW_OR.innerHTML = route[10] + " - " + to;
        r3_3pNW_OR.innerHTML = route[11];


    } else if (route[0] == "3PNW3P_M") {
        ALTroute1.classList.remove('hide');
        ALTroute2.classList.remove('hide');
        hideALTblocks();
        point3NWALT.classList.remove('hide');
        point3ALT_OR.classList.remove('hide');

        // Best Route - 3 Points without walkway
        h1_3pNW.innerHTML = from + " - " + route[2];
        r1_3pNW.innerHTML = route[1];

        h2_3pNW.innerHTML = route[2] + " - " + route[4];
        r2_3pNW.innerHTML = route[3];

        h3_3pNW.innerHTML = route[4] + " - " + to;
        r3_3pNW.innerHTML = route[5];


        // Other Route Block -  3 Points with walkway
        h1_3p_OR.innerHTML = from + " - " + route[6];
        r1_3p_OR.innerHTML = route[9]
        if (route[8] == "") {
            h2_3p_OR.innerHTML = route[7];
        } else {
            h2_3p_OR.innerHTML = route[7] + " - " + route[8];
        }
        r2_3p_OR.innerHTML = route[10]
        h3_3p_OR.innerHTML = route[6] + " - " + to;
        r3_3p_OR.innerHTML = route[11]
    }
}

function hideALTblocks() {
    // Hide 3 point ALT Routes
    point3ALT.classList.add('hide');
    point3ALT_OR.classList.add('hide');

    // Hide 5 point ALT Routes
    point3NWALT.classList.add('hide');
    point3NWALT_OR.classList.add('hide');
}

function viewFromTo(ref) {
    ref = ref.innerHTML.split('-');
    input1.value = resolveShortForms(ref[0].slice(0, -1));
    input2.value = resolveShortForms(ref[1].slice(1));

    fromToFetchOutput(input1.value, input2.value);
}

function resolveShortForms(inputRef) {
    if (inputRef == "UPPAL") {
        inputRef = "UPPAL RING ROAD";
    } else if (inputRef == "BOWENPALLY") {
        inputRef = "BOWENPALLY X ROADS";
    } else if (inputRef == "KACHEGUDA") {
        inputRef = "KACHEGUDA STATION";
    } else if (inputRef == "BALAJI TEMPLE") {
        inputRef = "CHILKOOR BALAJI TEMPLE";
    } else if (inputRef == "MIYAPUR") {
        inputRef = "MIYAPUR X ROADS";
    } else if (inputRef == "LB NAGAR") {
        inputRef = "LB NAGAR X ROADS";
    } else {
        inputRef = inputRef;
    }

    return inputRef;
}

function viewAlternateRouteFT() {
    OutputScreen3.classList.remove('close');
    let from = FromStopNameHead.innerHTML;
    let to = ToStopNameHead.innerHTML;

    let route = altRouteGetter(from, to);
    if (route == "REDIRECT") {
        // ADD ALERT CODE
    } else {
        fillAlternateRoute(route, from, to);
    }
}

function alertRedirect() {
    closePopUpBox(null);
    if (feature == 5) {
        feature = 3;
        let src = input1.value;
        let dst = input2.value;
        getId('navlink3').click();
        input1.value = src;
        input2.value = dst;
        fromToFetchOutput(input1.value, input2.value);

    } else if (feature == 3) {
        feature = 5;
        let src = input1.value;
        let dst = input2.value;
        getId('menuItem1').click();
        getId('menuItem1').click();
        input1.value = src;
        input2.value = dst;
        fromToFetchOutput(input1.value, input2.value);
    }

}

function fareChart(ref, pos) {
    if (pos == 1) {
        input1.value = ref.innerHTML;
        suggessionsList.innerHTML = "";
        // clear1.classList.add('hide');
        clear1.style.visibility = "hidden";
        if (input2.value != "") {
            if (SHD.includes(input2.value)) {
                if (input1.value == input2.value) {
                    openPopUpBox(4, "SAME");
                } else {
                    fareFetch(input1.value, input2.value);
                }
            } else {
                openPopUpBox(4, "INV_D");
            }
        } else {

        }
    } else {
        input2.value = ref.innerHTML;
        suggessionsList.innerHTML = "";
        clear2.style.visibility = "hidden";
        if (input1.value != "") {
            if (SHD.includes(input1.value)) {
                if (input1.value == input2.value) {
                    openPopUpBox(4, "SAME");
                } else {
                    fareFetch(input1.value, input2.value);
                }
            } else {
                openPopUpBox(4, "INV_S");
            }
        } else {

        }
    }
}

function fareFetch(from, to) {
    let COFare = arrayfaresCO[SHD.indexOf(from)][SHD.indexOf(to)]
    let MEFare = arrayfaresME[SHD.indexOf(from)][SHD.indexOf(to)]

    fareChartOutput.classList.remove('hide');
    CO_Fare.innerHTML = COFare + "/-";
    ME_Fare.innerHTML = MEFare + "/-";
}

function showSuggesions(ref) {
    fareChartOutput.classList.add('hide');

    const filterValue = ref.value.toUpperCase();
    let filteredArray = []
    if (ref.value.length == 0) {
        ref.parentNode.children[2].style.visibility = "hidden";
    } else {
        ref.parentNode.children[2].style.visibility = "visible";
    }
    filteredArray = suggessionsArray.filter((item) =>
        item.toUpperCase().startsWith(filterValue)
    );
    if (feature == 1) {
        displayList(filteredArray, ref.id);
    } else {
        displayList(filteredArray.sort(), ref.id);
    }
}

function displayList(filteredArray, input) {
    suggessionsList.style.display = "flex";
    suggessionsList.innerHTML = "";
    filteredArray.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        if (feature == 1) {
            listItem.setAttribute('onclick', 'viewRoute(this)');
            suggessionsList.style.marginTop = "0px";
        } else if (feature == 2) {
            listItem.setAttribute('onclick', 'viewStop(this)');
            suggessionsList.style.marginTop = "0px";
        } else if (feature == 3 || feature == 5) {
            if (input == "input1") {
                suggessionsList.style.marginTop = "0px";
                listItem.setAttribute('onclick', 'viewFromToRoute(this,1)');
            } else if (input == "input2") {
                suggessionsList.style.marginTop = "60px";
                listItem.setAttribute('onclick', 'viewFromToRoute(this,2)');
            } else {
                alert("Error Occurred");
            }

        } else if (feature == 4) {
            if (input == "input1") {
                listItem.setAttribute('onclick', 'fareChart(this,1)');
                suggessionsList.style.marginTop = "0px";
            } else if (input == "input2") {
                listItem.setAttribute('onclick', 'fareChart(this,2)');
                suggessionsList.style.marginTop = "60px";
            } else {
                alert("Error Occurred");
            }

        }
        suggessionsList.appendChild(listItem);
    });
}

function createListDropDown(dataArray, List, Mode) {
    dataArray.forEach(element => {
        let listItem = document.createElement("li");
        listItem.textContent = element;
        if (Mode == 1) {
            listItem.setAttribute('onclick', 'viewRoute(this)');
        } else if (Mode == 2) {
            listItem.setAttribute('onclick', 'viewStop(this)');
        }
        List.appendChild(listItem);
    });
}

function clearInputs(ref) {
    ref.parentNode.children[1].value = '';
    ref.style.visibility = 'hidden';
    suggessionsList.innerHTML = '';
    ref.parentNode.children[1].focus();
}

function showcancelIcon(ref) {
    if (ref.value != "") {
        ref.parentNode.children[2].style.visibility = "visible";
    }
}

function hidecancelIcon(ref) {
    // ref.parentNode.children[2].classList.add('hide');
    // suggessionsList.innerHTML = "";
}

function swapInputValues() {
    let temp;
    temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
    if (input1.value != "" && input2.value != "") {
        if (feature == 3 || feature == 5) {
            if (input1.value == input2.value) {
                openPopUpBox(4, "SAME");
            } else {
                if (SHD.includes(input1.value) && SHD.includes(input2.value)) {
                    fromToFetchOutput(input1.value, input2.value);
                } else {
                    if (!(SHD.includes(input1))) {
                        openPopUpBox(4, "INV_S");
                    } else if (!(SHD.includes(input2))) {
                        openPopUpBox(4, "INV_D");
                    }
                }
            }
        } else if (feature == 4) {
            if (input1.value == input2.value) {
                openPopUpBox(4, "SAME");
            } else {
                if (SHD.includes(input1.value) && SHD.includes(input2.value)) {
                    fareFetch(input1.value, input2.value);
                } else {
                    if (!(SHD.includes(input1))) {
                        openPopUpBox(4, "INV_S");
                    } else if (!(SHD.includes(input2))) {
                        openPopUpBox(4, "INV_D");
                    }
                }
            }
        }
    }
}

function handleFontSize(ref, subref) {
    StopNameHead.innerHTML = ref;
    StopNameSub.innerHTML = subref;
    if (subref == '' || subref == undefined) {
        StopNameSub.style.display = "none";
    } else {
        StopNameSub.style.display = "block";
    }

    if (ref.length <= 4) {
        StopNameHead.style.fontSize = "66px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 7) {
        StopNameHead.style.fontSize = "50px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 8) {
        StopNameHead.style.fontSize = "46px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 9) {
        StopNameHead.style.fontSize = "38px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-13px";
    } else if (ref.length <= 12) {
        StopNameHead.style.fontSize = "36px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 14) {
        StopNameHead.style.fontSize = "34px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 16) {
        StopNameHead.style.fontSize = "28px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    } else if (ref.length <= 20) {
        StopNameHead.style.fontSize = "30px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    } else if (ref.length <= 25) {
        StopNameHead.style.fontSize = "26px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    } else if (ref.length <= 32) {
        StopNameHead.style.fontSize = "24px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    }
}

function openMenu() {
    suggessionsList.innerHTML = "";
    sideScreenMenu.classList.toggle('open');
}

let subHelpScreen = 0;

function openPopUpBox(type, message) {
    popUpScreen.classList.remove('hide');

    alertBox.classList.add('hide');
    contactBox.classList.add('hide');
    successBox.classList.add('hide');
    errorBox.classList.add('hide');
    ALT_DetailedRoute_3P.classList.add('hide');

    if (type == 1) {
        alertBox.classList.remove('hide');
        if (message == "DA") {
            messageAlert.innerHTML = "Direct Buses are Available, Do you want to view them?";
        } else if (message == "DNA") {
            messageAlert.innerHTML = "Direct Buses aren't Available, Do you want to view Alternate Route?";
        }
    } else if (type == 2) {
        successBox.classList.remove('hide');
    } else if (type == 3) {
        contactBox.classList.remove('hide');
    } else if (type == 4) {
        errorBox.classList.remove('hide');
        if (message == "SAME") {
            errorMessage.innerHTML = "Source and Destination cannot be the same.";
        } else if (message == "ALTworking") {
            errorMessage.innerHTML = "We’re working on adding this route. Please try again later.";
        } else if (message == "ALT_D_working") {
            errorMessage.innerHTML = "We’re working on adding Description for this route. Please try again later.";
        } else if (message == "INV_S") {
            errorMessage.innerHTML = "Your are travelling from invalid place, kindly choose it from our list.";
        } else if (message == "INV_D") {
            errorMessage.innerHTML = "Your are travelling to invalid place, kindly choose it from our list.";
        } else if (message == "MSG") {
            errorMessage.innerHTML = "An error occurred while sending Message. Please try again later.";
        }
    } else if (type == 5) {
        ALT_DetailedRoute_3P.classList.remove('hide');
    }
}

function needHelpALT(type) {
    let from = input1.value;
    let to = input2.value;
    let route = altRouteGetter(from, to);
    if (route[0] == "SEWD_S") {
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let p = document.createElement("p");

        if (route[3] != "") {
            // SECUNDERABAD AS EXCHANGE POINT
            openPopUpBox("4", "ALT_D_working");
        } else {
            if (route[2].includes("TOWARDS")) {
                li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                li2.innerHTML = "Get down at " + capitalizeText(route[1]) + " & walk to the bus stop, where buses towards " + capitalizeText(getTowards(route[2])) + " Stops.";

                li3.innerHTML = "In that Bus Stop board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                p.innerHTML = "<strong>Note:</strong> <br>Since " + capitalizeText(route[1]) + " has multiple bus stops, all buses won't stop at same bus stop.";

            } else if (route[2] == "SAME BUS STOP" || route[2] == "SAME STOP") {
                li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ".";

                li3.innerHTML = "In the same Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";

            } else if (route[2] == "OPPOSITE STOP" || route[2] == "OPPOSITE BUS STOP") {
                li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", Now cross the road and walk to the opposite bus stop.";

                li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";

            } else if (route[2] == "BUS STATION") {
                li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", & walk into the Bus Station.";

                li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                p.innerHTML = "<strong>Note:</strong> <br>In " + capitalizeText(route[1]) + ", Some buses enter the bus station, while others stop outside to drop off passengers.";
            }



            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(p);
            ALT_DetailedRoute_content.innerHTML = "";
            ALT_DetailedRoute_content.appendChild(ul);

            openPopUpBox("5", "");
        }


    } else if (route[0] == "SEWD_M") {
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let p = document.createElement("p");

        if (type == "B") {
            if (route[3] != "") {
                // SECUNDERABAD AS EXCHANGE POINT
                openPopUpBox("4", "ALT_D_working");
            } else {
                if (route[2].includes("TOWARDS")) {
                    li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                    li2.innerHTML = "Get down at " + capitalizeText(route[1]) + " & walk to the bus stop, where buses towards " + capitalizeText(getTowards(route[2])) + " Stops.";

                    li3.innerHTML = "In that Bus Stop board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                    p.innerHTML = "<strong>Note:</strong> <br>Since " + capitalizeText(route[1]) + " has multiple bus stops, all buses won't stop at same bus stop.";

                } else if (route[2] == "SAME BUS STOP" || route[2] == "SAME STOP") {
                    li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                    li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ".";

                    li3.innerHTML = "In the same Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                    p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";

                } else if (route[2] == "OPPOSITE STOP" || route[2] == "OPPOSITE BUS STOP") {
                    li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                    li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", Now cross the road and walk to the opposite bus stop.";

                    li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                    p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";

                } else if (route[2] == "BUS STATION") {
                    li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";

                    li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", & walk into the Bus Station.";

                    li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";

                    p.innerHTML = "<strong>Note:</strong> <br>In " + capitalizeText(route[1]) + ", Some buses enter the bus station, while others stop outside to drop off passengers.";
                }
            }



            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(p);
            ALT_DetailedRoute_content.innerHTML = "";
            ALT_DetailedRoute_content.appendChild(ul);
            openPopUpBox("5", "");
        } else if (type == "O") {
            /* if (route[3] != "") {
 
             } else {
                 if (route[2].includes("TOWARDS")) {
                     li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";
 
                     li2.innerHTML = "Get down at " + capitalizeText(route[1]) + " & walk to the bus stop, where buses towards " + capitalizeText(getTowards(route[2])) + " Stops.";
 
                     li3.innerHTML = "In that Bus Stop board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";
 
                     p.innerHTML = "<strong>Note:</strong> <br>Since " + capitalizeText(route[1]) + " has multiple bus stops, all buses won't stop at same bus stop.";
 
                 } else if (route[2] == "SAME BUS STOP" || route[2] == "SAME STOP") {
                     li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";
 
                     li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ".";
 
                     li3.innerHTML = "In the same Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";
 
                     p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";
 
                 } else if (route[2] == "OPPOSITE STOP" || route[2] == "OPPOSITE BUS STOP") {
                     li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";
 
                     li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", Now cross the road and walk to the opposite bus stop.";
 
                     li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";
 
                     p.innerHTML = "<strong>Note:</strong> <br>Here we have mentioned only few bus routes to maintain clean User Interface, Use from - to section to get all the bus routes which runs between 2 stops.";
 
                 } else if (route[2] == "BUS STATION") {
                     li1.innerHTML = "First go to " + capitalizeText(route[1]) + " from " + capitalizeText(from) + " by buses like " + getSampleRoutes(route[4]) + " etc.,";
 
                     li2.innerHTML = "Get down at " + capitalizeText(route[1]) + ", & walk into the Bus Station.";
 
                     li3.innerHTML = "In that Bus Stop, board buses like " + getSampleRoutes(route[6]) + " etc., and get down at " + capitalizeText(to) + ".";
 
                     p.innerHTML = "<strong>Note:</strong> <br>In " + capitalizeText(route[1]) + ", Some buses enter the bus station, while others stop outside to drop off passengers.";
                 }
             } 
                 */

            openPopUpBox("4", "ALT_D_working");
        }
    } else {
        openPopUpBox("4", "ALT_D_working");
    }
}

// input1.value = "ECIL X ROADS";
// input2.value = "AMEERPET";
// needHelpALT("B");

function capitalizeText(text) {
    let string = "";
    if (text.includes(" ")) {
        text = text.split(" ");
        for (let i = 0; i < text.length; i++) {
            if (text[i].length <= 3) {
                if (i == text.length) {
                    string += text[i].toUpperCase();
                } else {
                    string += text[i].toUpperCase() + " ";
                }
            } else {
                if (i == text.length - 1) {
                    string += text[i][0].toUpperCase();
                    string += text[i].slice(1, text[i].length).toLowerCase();
                } else {
                    string += text[i][0].toUpperCase();
                    string += text[i].slice(1, text[i].length).toLowerCase() + " ";
                }
            }
        }
    } else {
        string = text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
    }
    return string;
}

function getSampleRoutes(text) {
    let routes;
    if (text.split(",").length > 3) {
        routes = text.split(",")[0] + " ," + text.split(",")[1] + " ," + text.split(",")[2];
    } else {
        routes = text;
    }
    return routes;
}

function getTowards(text) {
    let towards;
    let i = 1;
    if (text.split(" ").length > 3) {
        towards = text.split(" ")[1] + " " + text.split(" ")[2];

    } else {
        towards = text.split(" ")[1];
    }
    return towards;
}

function closePopUpBox(ref) {
    popUpScreen.classList.add('hide');
    if (feature == 5 || feature == 3) {
        //console.log(ref);
    } else {
        //console.log(ref.id);
        navs[feature - 1].click();
    }
}

function closeALToutline(ref) {
    ref.parentNode.parentNode.classList.toggle('close');
    if (ref.parentNode.parentNode.classList[1] == 'close') {
        ref.style.transform = "rotate(0deg)";
    } else {
        ref.style.transform = "rotate(180deg)";
    }
}

function removeActiveLinks() {
    navs[0].classList.remove('activeLink');
    navs[1].classList.remove('activeLink');
    navs[2].classList.remove('activeLink');
    navs[3].classList.remove('activeLink');
}

function removeActiveMenus() {
    menuItems.children[0].classList.remove('active');
    menuItems.children[1].classList.remove('active');
    menuItems.children[2].classList.remove('active');
    menuItems.children[3].classList.remove('active');
    menuItems.children[4].classList.remove('active');

    menuItems.children[0].children[0].src = 'images/icons/altRouteWhite.png';
    menuItems.children[1].children[0].src = 'images/icons/idWhite.png';
    menuItems.children[2].children[0].src = 'images/icons/helpWhite.png';
    menuItems.children[3].children[0].src = 'images/icons/contactWhite.png';
    menuItems.children[4].children[0].src = 'images/icons/shareWhite.png';
}

function changeIcons(ref) {
    switch (ref.value) {
        case 1:
            ref.children[0].src = 'images/icons/altRouteBlack.png';
            break;
        case 2:
            ref.children[0].src = 'images/icons/idBlack.png';
            break;
        case 3:
            ref.children[0].src = 'images/icons/contactBlack.png';
            break;
        case 4:
            ref.children[0].src = 'images/icons/helpBlack.png';
            break;
        case 5:
            ref.children[0].src = 'images/icons/shareBlack.png';
            break;

        default:
            break;
    }
}

function expandHelpQues(ref) {
    ref.parentNode.classList.toggle('expand');
}

function showShortNames() {
    otherSectionsScreen.classList.add("close");
    setTimeout(() => {
        displayOtherSections(4, "Short Names");
        fillShortNames();
        otherSectionsScreen.classList.remove("close");
    }, 200);
    subHelpScreen = 1;
}

function fillShortNames() {
    let shortNamesTable = getId('shortNamesTable');
    let tr = document.createElement("tr");
    let tdS = document.createElement("th");
    let tdN = document.createElement("th");
    tdS.textContent = "Short Name";
    tdN.textContent = "Bus Stop Name";

    shortNamesTable.innerHTML = "";

    tr.appendChild(tdN);
    tr.appendChild(tdS);
    shortNamesTable.appendChild(tr);

    for (let i = 0; i < shortNames.length; i++) {
        let tr = document.createElement("tr");
        let tdS = document.createElement("td");
        let tdN = document.createElement("td");

        tdS.textContent = shortNames[i];
        tdN.textContent = fullNames[i];

        tr.appendChild(tdN);
        tr.appendChild(tdS);
        shortNamesTable.appendChild(tr);
    }

}

function filterShortNames(ref) {
    const filterValue = ref.value.toUpperCase();
    let filteredArray = []
    filteredArray = shortNames.filter((item) =>
        item.toUpperCase().startsWith(filterValue)
    );

    let shortNamesTable = getId('shortNamesTable');
    let tr = document.createElement("tr");
    let tdS = document.createElement("th");
    let tdN = document.createElement("th");
    tdS.textContent = "Short Name";
    tdN.textContent = "Bus Stop Name";

    shortNamesTable.innerHTML = "";

    tr.appendChild(tdN);
    tr.appendChild(tdS);
    shortNamesTable.appendChild(tr);

    for (let i = 0; i < filteredArray.length; i++) {
        let tr = document.createElement("tr");
        let tdS = document.createElement("td");
        let tdN = document.createElement("td");
        let fnIndex = shortNames.indexOf(filteredArray[i]);

        tdS.textContent = filteredArray[i];
        tdN.textContent = fullNames[fnIndex];

        tr.appendChild(tdN);
        tr.appendChild(tdS);
        shortNamesTable.appendChild(tr);
    }
}

let indicators = getId('indicators');
let adItem = getId('adItem');
let adDuration = 3000;
let sliderStatus = 0;

function adSlider() {
    indicators.children[0].classList.add('active');
    setTimeout(() => {
        adItem.children[1].classList.add('active');
        indicators.children[1].classList.add('active');
        setTimeout(() => {
            adItem.children[2].classList.add('active');
            indicators.children[2].classList.add('active');
            setTimeout(() => {
                adItem.children[3].classList.add('active');
                indicators.children[3].classList.add('active');
                setTimeout(() => {
                    adItem.children[4].classList.add('active');
                    indicators.children[4].classList.add('active');
                    setTimeout(() => {
                        sliderStatus = 1;
                        resetAdSlider();
                    }, adDuration);
                }, adDuration);
            }, adDuration);
        }, adDuration);
    }, adDuration);

}

function resetAdSlider() {
    if (sliderStatus == 1) {
        sliderStatus = 0;

        adItem.children[4].classList.remove('active');
        adItem.children[3].classList.remove('active');
        adItem.children[2].classList.remove('active');
        adItem.children[1].classList.remove('active');
        adItem.children[0].classList.add('active');

        indicators.children[0].classList.remove('active');
        indicators.children[1].classList.remove('active');
        indicators.children[2].classList.remove('active');
        indicators.children[4].classList.remove('active');
        indicators.children[3].classList.remove('active');
        setTimeout(() => {
            adSlider();
        }, 100);
    } else {

    }
}

adSlider();

function closeOutputScreen(ref) {
    if (ref.id == "otherSectionsCloseBtn") {
        if (feature == "5") {
            navs[0].click();
        } else {
            navs[feature - 1].click();
        }

        if (subHelpScreen == 0) {
            ref.parentNode.parentNode.classList.add('close');
        } else {
            otherSectionsScreen.classList.add("close");
            setTimeout(() => {
                displayOtherSections(2, "USER GUIDE");
                getId('shortNamesInput').value = "";
                otherSectionsScreen.classList.remove("close");
            }, 200);
            subHelpScreen = 0;
        }

    } else {
        if (backState == 1) {
            viewStop(JunctionStopState);
            backState = 0;
        } else if (backState == 2) {
            fillRoutesBusStop(junctionStopsStopName);
            OutputScreen2.classList.add('close');
            backState = 1;
        } else {
            ref.parentNode.parentNode.classList.add('close');
        }
    }
}

function closeBusStop() {
    if (backState == 1) {
        viewStop(JunctionStopState);
        backState = 0;
    } else if (backState == 2) {
        fillRoutesBusStop(junctionStopsStopName);
        OutputScreen2.classList.add('close');
        backState = 1;
    } else {
        OutputScreen.classList.add('close');
    }

    if (!(SHD.includes(input1.value))) {
        input1.value = "";
    }

    if (OutputScreen2.classList[2] == 'close') {
        getId('reverseButton').classList.add('hide');
    } else if (OutputScreen2.classList[1] == 'close') {
        getId('reverseButton').classList.add('hide');
    } else {
        getId('reverseButton').classList.remove('hide');
    }

}

function closeRoute() {
    OutputScreen2.classList.add('close');
    getId('reverseButton').classList.add('hide');

    if (backState == 2) {
        backState = 1;
    }
    if (backState == 9) {
        OutputScreen3.classList.remove("close");
        backState = 0;
    }
    if (!(routesArray.includes(input1.value))) {
        input1.value = "";
    }
}

function closeFromTo() {
    OutputScreen3.classList.add('close');

    if (!(SHD.includes(input1.value))) {
        input1.value = "";
    }

    if (!(SHD.includes(input2.value))) {
        input2.value = "";
    }

    if (OutputScreen2.classList[2] == 'close') {
        getId('reverseButton').classList.add('hide');
    } else if (OutputScreen2.classList[1] == 'close') {
        getId('reverseButton').classList.add('hide');
    } else {
        getId('reverseButton').classList.remove('hide');
    }
}

function closeOtherSection() {
    if (feature == "5") {
        navs[0].click();
    } else {
        navs[feature - 1].click();
    }

    if (subHelpScreen == 1) {
        otherSectionsScreen.classList.add("close");
        setTimeout(() => {
            displayOtherSections(2, "USER GUIDE");
            getId('shortNamesInput').value = "";
            otherSectionsScreen.classList.remove("close");
        }, 200);
        subHelpScreen = 0;
    } else {
        otherSectionsScreen.classList.add('close');
    }
}


// subHelpScreen = 1;
// closeOtherSection();

function copyShareLink() {
    ClipboardCopier("https://thedeveloperrt.github.io/cityWaysHyd/");
}

function ClipboardCopier(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    getId('copyLinkBtn').classList.add("active");
    getId('copyText').innerText = "Copied";
}
