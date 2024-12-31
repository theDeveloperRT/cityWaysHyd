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
let moreAppsScreen = getId('moreAppsScreen');

// Referance Arrays and Variables
let JunctionStop, backState, JunctionStopState;
let junctionStopsStopName;
let suggessionsArray = routesArray;
let feature = 1;

// ROUTE DATA
let secRoutes_UP = [
    "1",
    "1B",
    "1C",
    "1D",
    "1HD",
    "1J",
    "1JL",
    "1K",
    "1L",
    "1MD",
    "1P",
    "1V",
    "1VM",
    "1VS",
    "1W",
    "1X",
    "1Z",
    "1D/299",
    "1Z/251",
    "1Z/539",
    "2",
    "2C",
    "2J",
    "2K",
    "2U",
    "2Z",
    "2Z/251",
    "5G",
    "5K",
    "5KM",
    "5M",
    "5K/92A",
    "5K/92R",
    "5K/125",
    "5K/188",
    "5K/251",
    "7Z",
    "7Z/251",
    "8A",
    "8AK",
    "8C",
    "8N",
    "8UA",
    "8A/85",
    "8A/178G",
    "8A/251",
    "8A/532",
    "8C/85P",
    "10",
    "10F",
    "10FV",
    "10H",
    "10HA",
    "10HL",
    "10HP",
    "10HW",
    "10J",
    "10K",
    "10KJ",
    "10KM",
    "10KL",
    "10Y",
    "10YF",
    "10W",
    "10KM/224G",
    "14P",
    "14PX",
    "15D",
    "15H",
    "15H/242RG",
    "16A",
    "16AK",
    "16C",
    "16CD",
    "16CR",
    "16D",
    "16H",
    "16P",
    "16PX",
    "16A/281R",
    "16C/281",
    "16D/24B",
    "16NY",
    "17DH",
    "17DS",
    "17DV",
    "17H",
    "17H/242",
    "17CS",
    "17HN",
    "17S",
    "17V",
    "18",
    "18/283S",
    "18B",
    "18C",
    "18V",
    "20P",
    "21W",
    "22",
    "22D",
    "22K",
    "23B",
    "23BK",
    "23BS",
    "23GF",
    "23GS",
    "23K",
    "23T",
    "24",
    "24B",
    "24B/16D",
    "24B/281",
    "24BA",
    "24BJ",
    "24E",
    "24J",
    "24L/281",
    "25A",
    "25AJ",
    "25AJ/M",
    "25M",
    "25MS",
    "25P",
    "25S",
    "25S/227",
    "25S/229",
    "26M",
    "26N",
    "29B",
    "29B/272G",
    "29B/272I",
    "29S",
    "30",
    "30S",
    "31P",
    "37",
    "38EX",
    "38M",
    "38X",
    "38T",
    "38T/16C",
    "38T/16CR",
    "40",
    "44X",
    "46",
    "47L",
    "47Y",
    "47YM",
    "49",
    "49A",
    "49M",
    "49M/92A",
    "49MT",
    "50B",
    "86A",
    "86C",
    "86J",
    "86K",
    "90/300",
    "90B",
    "90DL",
    "90L/251",
    "102B/203N",
    "107JD",
    "107JL",
    "107JS",
    "107VR",
    "107VL",
    "107VS",
    "171",
    "171R",
    "203AR",
    "211",
    "211B",
    "211CD",
    "211D",
    "211DY",
    "211K",
    "211M",
    "212",
    "212/702",
    "212T",
    "219",
    "219N",
    "226",
    "227",
    "229",
    "229P",
    "230A",
    "230AN",
    "230P",
    "231KN",
    "233",
    "241T",
    "242",
    "242A",
    "242B",
    "242G",
    "242GA",
    "242RG",
    "242/211",
    "245A",
    "250",
    "250C",
    "250D",
    "250S",
    "250SS",
    "250/281",
    "272",
    "272B",
    "280",
    "280B",
    "280N",
    "280/488",
    "280/492",
    "283C",
    "283K",
    "283T",
    "283VS",
    "290KP",
    "290UA",
    "290UF",
    "290U/201T",
    "290U/463",
    "290U/555",
    "490S",
    "495",
    "498",
    "498K",
    "498U",
    "498VJ",
    "568",
    "580",
    "589"
]

let secRoutes_DN = [
    "14PX",
    "16C/38T",
    "16CR/38T",
    "16D/24B",
    "16PX",
    "24B/16D",
    "38EX",
    "38X",
    "85/8A",
    "85P/8C",
    "92A/5K",
    "92A/49M",
    "125/5K",
    "178G/8A",
    "188/5K",
    "203N/102B",
    "201T/290U",
    "211/242",
    "224G/10KM",
    "227/25S",
    "229/25S",
    "242/17H",
    "251/1Z",
    "251/8A",
    "272G/29B",
    "281/16C",
    "281/24B",
    "281/24L",
    "281/250",
    "281R/16A",
    "283S/18",
    "300/90",
    "532/8A",
    "539/1Z",
    "555/290U",
    "242RG/15H", "251/2Z", "251/7Z", "251/90L", "272I/29B", "299/1D", "463/290U", "488/280", "492/280", "702/212"
]

let ECILX_UP = [
    "3KJ",
    "3V",
    "3K/90L",
    "3K/95",
    "3K/102",
    "3K/102B",
    "3K/203N",
    "3K/252",
    "3KN/95",
    "16A/5K",
    "16A/10H",
    "16A/20",
    "16A/47L",
    "16A/49M",
    "16A/219",
    "16C/5K",
    "16C/10H",
    "16C/38T",
    "16C/47L",
    "16C/49M",
    "16CR/38T",
    "16H/49M",
    "16R/20",
    "17/219",
    "17H/29B",
    "17H/219",
    "24S",
    "24SS",
    "24S/273",
    "90BE",
    "147",
    "250/10K",
    "250/49",
    "250/49M",
    "250/49MT",
    "250/219",
    "250E",
    "281",
    "578"
]

let ECILX_DN = [
    "3C",
    "5K/16A",
    "5K/16C",
    "10H/16A",
    "10H/16C",
    "10K/250",
    "16A",
    "16AK",
    "16C",
    "16CR",
    "16H",
    "20/16A",
    "20/16R",
    "24E",
    "24J",
    "29B/17H",
    "37",
    "38T/16C",
    "38T/16CR",
    "47L/16A",
    "47L/16C",
    "49/250",
    "49M/16A",
    "49M/16C",
    "49M/16H",
    "49M/250",
    "49MT/250",
    "90L/3K",
    "95/3K",
    "95/3KN",
    "102/3K",
    "102B/3K",
    "203N/3K",
    "219/16A",
    "219/17",
    "219/17H",
    "219/250",
    "250",
    "252/3K",
    "273/24S",
]

let AFZ_UP = [
    "1/25S",
    "1/25S/229",
    "1P/25S",
    "2/25S",
    "3",
    "3C",
    "3D",
    "3DN",
    "3H",
    "3HN",
    "3K",
    "3KN",
    "3L",
    "3M",
    "3N",
    "3T",
    "3Y",
    "3K/242",
    "3K/281",
    "9K",
    "9K/230P",
    "9K/272G",
    "20/16A",
    "65/116GA",
    "65M/123",
    "71A",
    "71K",
    "72/277D",
    "72H",
    "72HK",
    "72J",
    "72V",
    "218A",
    "251M",
    "458",
    "530",
    "532",
    "537",
    "539",
]

let AFZ_DN = [
    "1",
    "1B",
    "1P",
    "2",
    "16A/20",
    "25S/1",
    "25S/1P",
    "25S/2",
    "37/8",
    "49A",
    "86A",
    "116GA/65",
    "123/65M",
    "230P/9K",
    "242/3K",
    "272G/9K",
    "277D/72",
    "281/3K",
]

let MP_UP = [
    "5R",
    "5/5R",
    "5K/16A",
    "5K/16AD",
    "5K/16C",
    "5K/16CD",
    "5K/16D",
    "5K/229",
    "19F",
    "19K",
    "19KJ",
    "19KM",
    "19M",
    "19MP",
    "19S",
    "19YF",
    "20/15D",
    "49M/16A",
    "49M/16C",
    "49M/16CD",
    "49M/16D",
    "49M/16H",
    "49M/26M",
    "49M/229",
    "49M/250",
    "49M/250C",
    "49M/250D",
    "92K",
    "119M",
    "120",
    "123",
    "126M",
    "156/299",
    "156S",
    "188",
    "188/251",
    "189M",
    "189M/171M",
    "189M/272G",
    "216M",
    "288",
    "288A",
    "288C",
    "288D",
    "288E",
    "300",
    "300/90",
    "300L",
    "445",
    "447R",
    "505",
    "593",
]

let MP_DN = [
    "5K",
    "5M",
    "5R/5",
    "6R",
    "15D/20",
    "16A/5K",
    "16A/49M",
    "16AD/5K",
    "16C/5K",
    "16C/49M",
    "16CD/5K",
    "16CD/49M",
    "16D/5K",
    "16D/49M",
    "16H/49M",
    "26M/49M",
    "49M",
    "90/300",
    "92A",
    "92R",
    "113IM",
    "113M",
    "113MZ", "113IMZ",
    "156L",
    "156V",
    "171M/189M",
    "251/188",
    "229/5K",
    "229/49M",
    "250/49M",
    "250C/49M",
    "250D/49M",
    "272G/189M",
    "299/156"
]

// KG UP Manual
let KG_DN = [
    "3",
    "3H",
    "3HN",
    "3K",
    "3KN",
    "15H",
    "17H",
    "17HN",
    "17S",
    "20/15H",
    "117",
]

// AMBD_UP Manual
let AMBD_DN = [
    "3D",
    "3DN",
    "5K/16AD",
    "5K/16CD",
    "5K/16D",
    "15D",
    "16CD",
    "16D",
    "20/15D",
    "24BA",
    "49M/16CD",
    "49M/16D",
    "49M/250D",
    "250D",
]

let MDCL_UP = [
    "229B",
    "229/1D",
    "229/1Z",
    "229/5K",
    "229/25S",
    "229/18C",
    "229/49M",
    "229/90L",
    "229/219",
    "229/279",
    "229/290",
    "229/290U",
    "231",
]

let MDCL_DN = [
    "1/25S/229",
    "1D/229",
    "1Z/229",
    "5K/229",
    "18C/229",
    "25S/229",
    "49M/229",
    "90L/229",
    "219/229",
    "229",
    "279/229",
    "290/229",
    "290U/229",
]

let PTCR_UP = [
    "218/102B",
    "218/203A",
    "218/203N",
    "219/16A",
    "219/17",
    "219/17H",
    "219/18C",
    "219/171K",
    "219/224G",
    "219/229",
    "219/250",
    "219/272G",
    "219/280",
]

let PTCR_DN = [
    "10HA",
    "16A/219",
    "17/219",
    "17H/219",
    "18C/219",
    "102B/218",
    "171K/219",
    "203A/218",
    "203N/218",
    "217",
    "217C",
    "217D",
    "218",
    "218A",
    "218C",
    "218CA",
    "218D",
    "218H",
    "219",
    "222A",
    "224G/219",
    "226",
    "229/219",
    "250/219",
    "272G/219",
    "280/219",
]

let ARGR_DN = ["1Z", "3K/95", "3KN/95", "5K/92A", "7Z", "49M/92A", "95", "229/1Z"];

let CBS_UP = [
    "9A",
    "9F",
    "9X",
    "9X/230P",
    "9X/272G",
    "9X/283D",
    "65M/116G",
    "116/220K",
    "185G",
    "217C",
    "218C",
]
// CBS_DN Manual

let CHRM_UP = [
    "9XM",
    "9YF",
    "9XM/230P",
    "65MG",
    "66G",
    "85V",
    "85/253L",
    "253",
]
// CHRM_DN Manual

let GDMS_UP = ["9K/102", "221G", "224G/10KM", "224G/219", "224G/219I", "272G/9K", "272G/9X", "272G/18", "272G/29B", "272G/83J", "272G/189M", "272G/219", "272G/219I", "273/24S", "227/25S"]

let GDMS_DN = [
    "9K/272G",
    "9X/272G",
    "10KM/224G",
    "18/272G",
    "24S/273",
    "25S/227",
    "29B/272G",
    "83J/272G",
    "102/9K",
    "189M/272G",
    "195WP",
    "219/224G",
    "219I/224G",
    "219/272G",
    "219I/272G",
    "224G",
]

// GTKS_UP Manual
let GTKS_DN = [
    "3K/281",
    "16C/281",
    "20/280",
    "24B/281",
    "24L/281",
    "113M/281",
    "6L/281",
    "30/280",
    "219/280",
    "250/281",
    "280",
    "280J",
    "280X",
    "281",
]

let KOTI_UP = [
    "45F",
    "94R",
    "94RM",
    "95",
    "95K",
    "116N",
    "116NL",
    "216",
    "217",
    "218",
    "218L",
    "218/224MN",
    "222A",
    "288K"
]

let KOTIWC_UP = [
    "102",
    "102/253L",
    "102B",
    "102M",
    "103",
    "104A",
    "104R",
    "201",
    "201G",
    "201M",
    "201Q",
    "202B",
    "203A",
    "203AK",
    "203N",
    "204U",
    "204UA",
    "205A",
    "253W",
    "277D",
    "277N",
    "412",
    "523K"
]

let UPL_UP = [
    "18/272G",
    "18J",
    "113B",
    "113IM",
    "113K",
    "113KM",
    "113KL",
    "113M",
    "113M/288",
    "113W",
    "113KLT", "113ILT", "113KT", "113MZ", "113IMZ",
    "115",
    "117",
]

let BRBD_DN = [
    "9F",
    "9YF",
    "10F",
    "10YF",
    "19F",
    "19YF",
    "45F",
    "113F",
    "113FT",
    "113FZ",
    "113S",
    "158FL",
    "158HF",
    "158VF",
]

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
        getStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
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
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL')
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
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NAGARAM)'),
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
        getStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
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
        getStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
    ),

    // 18 SERIES
    ["18"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18B"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD')
    ),
    ["18C"].concat(
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/10H"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
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
        getStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getStops(CRPL_LGPL, "PATNY", "PANJAGUTTA"),
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["18C/219"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["18C/229"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
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
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
    ["49/250"].concat(
        getStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
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
        getStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'KUNTLOOR')
    ),
    ["72J"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR'),
        getStops(HCLX_GWRL, 'CHAITANYAPURI', 'BANDLAGUDA (NAGOLE)'),
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
        getStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
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
        getStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
    ),

    // 113 SERIES
    ["113F"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AMBERPET'),
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
        getStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113MZ"].concat(
        getStops(GTKS_PTCR, 'UPPAL', 'GOLNAKA'),
        getStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
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
        getStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'BACHARAM')
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
    ["201Q"].concat(
        getStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getStops(HCLX_GWRL, 'DILSHUKNAGAR', 'QUTHBULLAPUR - GOWRELLY')
    ),
    ["201T/290U"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR COLONY'),
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
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
    ["229/18C"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA (NAGARAM)'),
        SHD[128], SHD[744], SHD[842]
    ),
    ["242RG/15H"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "LALAPET"),
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
        getStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'KUNTLOOR')
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
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290UF"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290U/201T"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'TARAMATIPET')
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
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
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
        getStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "LALAPET"),
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
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
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
        getStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
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
        getStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
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
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(LGPL_CRPL, "PANJAGUTTA", "PATNY"),
        getStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS')
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
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/219"].concat(
        getStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/229"].concat(
        getStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
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
        getStops(IBP_DNGL, 'BALANAGAR', 'IDPL')
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
    ["49/250"].concat(
        getStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AFZALGUNJ')
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
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR COLONY'),
        getStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72J"].concat(
        SHD[237], SHD[858], SHD[424],
        getStops(GWRL_HCLX, 'BANDLAGUDA (NAGOLE)', 'CHAITANYAPURI'),
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
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
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
        getStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
        getStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 113 SERIES
    ["113F"].concat(
        SHD[152],
        getStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'AMBERPET', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
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
        getStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
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
        getStops(PTCR_GTKS, 'GOLNAKA', 'CHENGI CHERLA X ROADS'),
        getStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113MZ"].concat(
        getStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getStops(PTCR_GTKS, 'GOLNAKA', 'UPPAL')
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
        getStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR COLONY'),
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
    ["201Q"].concat(
        getStops(GWRL_HCLX, 'QUTHBULLAPUR - GOWRELLY', 'DILSHUKNAGAR'),
        getStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201T/290U"].concat(
        SHD[898],
        getStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'TARAMATIPET')
    ),

    // 202 SERIES
    ["202B"].concat(
        getStops(OSK_Stops_DOWN, 'BRAHMANAPALLY', 'HAYATHNAGAR VILLAGE'),
        getStops(KTGD_LGRH, 'TORRUR X ROADS', 'KOTI WOMENS COLLEGE')
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
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
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
    ["229/18C"].concat(
        getStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
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
        getStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "TARNAKA"),
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
        getStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NAGARAM)'),
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
        getStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR COLONY'),
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
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290UF"].concat(
        getStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/201T"].concat(
        getStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR COLONY'),
        getStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
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
        getStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
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

let DetailedRoutesSubStopUP = [
    ["1"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1/25S/229"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["1B"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "RTC X ROADS"),
        SHD[167],
        getSubStops(RMNG_DRFM, 'VST', 'YMCA'),
        getSubStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["1C"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "CITY BUS STATION")
    ),
    ["1D"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "DILSHUKNAGAR")
    ),
    ["1D/229"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getSubStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1D/299"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1H"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["1HD"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET X ROADS"),
        getSubStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
    ),
    ["1J"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getSubStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["1JL"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ"),
        getSubStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'LANGER HOUSE')
    ),
    ["1K"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        SHD[181], SHD[453], SHD[454]
    ),
    ["1L"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "LB NAGAR X ROADS")
    ),
    ["1MD"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "KOTHAPET"),
        "MARUTHI NAGAR(DSNR)", "NEW MARUTHI NAGAR"
    ),
    ["1P"].concat(
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getSubStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1P/25S"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898],
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["1V"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["1VM"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", "SAI BABA TEMPLE", "SAI NAGAR"
    ),
    ["1VS"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'RYTHU BAZAR'),
        SHD[313], "SAHAB NAGAR",
    ),
    ["1W"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE")
    ),
    ["1X"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KACHEGUDA X ROADS"),
        getSubStops(SHMB_KSR, "KACHEGUDA TOURIST", "KACHEGUDA STATION")
    ),
    ["1Z"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/229"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["1Z/251"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
    ),
    ["1Z/539"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getSubStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),

    // 2 SERIES
    ["2"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2C"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, "SALARJUNG MUSEUM", "CRPF GATE (BRKS)"),
        SHD[113]
    ),
    ["2J"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["2K"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708], SHD[181], SHD[453], SHD[454],

    ),
    ["2U"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, "SALARJUNG MUSEUM", "LAL DARWAJA X ROADS"),
        getSubStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["2Z"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(KSR_SHMB, 'MADINA', 'ARAMGHAR'),
        getSubStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getSubStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["2/25S"].concat(
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["2Z/251"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),

    // 3 SERIES
    ["3"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "ZTS X ROADS"),
        SHD[526],
        getSubStops(SHMB_KSR, "SP NAGAR", "KUSHAIGUDA")
    ),
    ["3C"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getSubStops(SHMB_KSR, "KACHEGUDA STATION", "ECIL X ROADS")
    ),
    ["3D"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3DN"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getSubStops(SHMB_KSR, "HB COLONY", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["3H"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        getSubStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["3HN"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "VIDYA NAGAR"),
        SHD[43],
        "LIBRARY OU",
        "LADIES HOSTEL OU",
        "LAW COLLEGE OU",
        "ARTS COLLEGE OU",
        SHD[993],
        getSubStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getSubStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3K"].concat(getSubStops(SHMB_KSR, "AFZALGUNJ", "KUSHAIGUDA")),
    ["3K/90L"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getSubStops(DNGL_IBP, 'TARNAKA', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["3K/95"].concat(getSubStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")),
    ["3K/102"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["3K/102B"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["3K/203N"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3K/242"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["3K/252"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["3K/281"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["3KN"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getSubStops(SHMB_KSR, "HB COLONY", "KUSHAIGUDA")
    ),
    ["3KN/95"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getSubStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["3KJ"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ"),
        getSubStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["3L"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "LALAPET (RAM TH.)"),
        SHD[780]
    ),
    ["3M"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        SHD[181],
        SHD[708],
        getSubStops(SHMB_KSR, "KACHEGUDA STATION", "ZTS X ROADS"),
        SHD[633], SHD[736], SHD[572], SHD[573], SHD[562], SHD[66]
    ),
    ["3N"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "RAM KOTI X ROADS"),
        SHD[1099],
        getSubStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        getSubStops(TailsUP, "NACHARAM IDA", "HEMA NAGAR")
    ),
    ["3N/203N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getSubStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getSubStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["3T"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "TARNAKA"),
    ),
    ["3Y"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS"),
        getSubStops(HCLX_GWRL, 'NORTH KAMALA NAGAR', 'RADHIKA THEATER'),
        SHD[961], SHD[302], "YELLAREDDYGUDA (KAPRA)", "BANK COLONY(SAKET)", "VAMPUGUDA", "BJR NAGAR",
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getSubStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),
    ["5G"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["5K"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5KM"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET DARGAH'),
        getSubStops(TailsUP, 'OU COLONY', 'MANIKONDA')
    ),
    ["5K/16A"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["5K/16AD"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16C"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["5K/16CD"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/16D"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["5K/92A"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["5K/125"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["5K/188"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR"),
    ),
    ["5K/229"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getSubStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["5M"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MAHAVIR HOSPITAL"),
        SHD[1063],
        getSubStops(KOTI_MCRL, 'MALLEPALLY', 'MEHDIPATNAM')
    ),
    ["5R"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "PATNY CENTER"),
        getSubStops(MNBD_SRPT, "PATNY", "RISALA BAZAR")
    ),
    ["5R/5"].concat(
        getSubStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getSubStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getSubStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getSubStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["6L/281"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getSubStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["6R"].concat(
        SHD[818],
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["6RK"].concat(
        SHD[818],
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'BAGH LINGAMPALLY'),
        SHD[687], SHD[371], SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'KALI MANDIR')
    ),

    // 7 SERIES
    ["7Z"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'ARAMGHAR')
    ),
    ["7Z/251"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        getSubStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getSubStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525],
    ),
    ["8A"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8AK"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS")
    ),
    ["8UA"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "LAL DARWAJA X ROADS"),
        getSubStops(TailsUP, 'LAL DARWAJA', 'UPPUGUDA')
    ),
    ["8A/85"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["8A/178G"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),
    ["8A/532"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["8C"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getSubStops(MDCL_MHRM, 'AFZALGUNJ', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["8C/85P"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getSubStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["8R"].concat(
        getSubStops(SRPT_MNBD, 'RISALA BAZAR', 'PATNY'),
        getSubStops(SRPT_MNBD, 'BATA', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        SHD[220]
    ),

    // 9 SERIES
    ["9A"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'ESI HOSPITAL'),
        "VIKASPURI COLONY", "AG COLONY"
    ),
    ["9F"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9K/102"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["9K/230P"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9K/272G"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9X/41C"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'IDPL')
    ),
    ["9X/230P"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9X/272G"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9X/283D"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["9XM"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["9XM/230P"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["9YF"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getSubStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 10 SERIES
    ["10"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["10F"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10FV"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10H"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10HA"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getSubStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getSubStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),
    ["10HL"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getSubStops(ADBT_MDCL, 'KONDAPUR', 'ALLWYN X ROADS'),
        getSubStops(GTKS_PTCR, 'MADINAGUDA', 'LINGAMPALLY')
    ),
    ["10HP"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        getSubStops(ADBT_MDCL, 'KONDAPUR', 'HAFEEZPET'),
        "PREM NAGAR"
    ),
    ["10HW"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getSubStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10J"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "JNTU COLLEGE")
    ),
    ["10JP"].concat(
        getSubStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["10K"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "KPHB MAIN ROAD"),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["10KJ"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10KL"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "LINGAMPALLY")
    ),
    ["10KM"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS")
    ),
    ["10Y"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
    ),
    ["10YF"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10YF/16S"].concat(
        SHD[152],
        getSubStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["10W"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getSubStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),
    ["10H/16A"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["10H/16C"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["10H/18C"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["10KJ/18"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getSubStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["10K/250"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["10KM/224G"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getSubStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),

    // 11 SERIES
    ["11W"].concat(
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'ANJAYYA NAGAR'),
        getSubStops(MLPT_BLNR, 'GACHIBOWLI X ROADS', 'WAVEROCK')
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
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
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], "SARDAR PATEL NAGAR",
        getSubStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
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
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["15D/20"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["15H/20"].concat(
        getSubStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["15H/242RG"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NAGARAM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),
    // 16 SERIES
    ["16/20"].concat(
        getSubStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16AK"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "NEREDMET OLD PS"),
        getSubStops(TailsDOWN, 'KAKATHIYA NAGAR', 'VINOBA NAGAR'),
        getSubStops(GWRL_HCLX, 'VAYUPURI', 'ECIL X ROADS')
    ),
    ["16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16CD"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CR"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getSubStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16ES"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getSubStops(HCLX_GWRL, 'UTTAM NAGAR', 'AOC CENTER'),
        "LAXMI NAGAR (PKT)", SHD[448], SHD[760],
        getSubStops(SRPT_MNBD, 'BATA', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'IRRUM MANZIL')
    ),
    ["16H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR",
        getSubStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16NY"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'NEREDMET X ROADS'),
        SHD[241], SHD[712], "DEFENCE COLLEGE",
        getSubStops(KPHB_GTKS, 'AMMUGUDA BAZAR', 'YAPRAL')
    ),
    ["16P"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR", SHD[780]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR",
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/10H"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16A/20"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["16A/47L"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASHASAN NAGAR",
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16A/49M"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16A/219"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["16A/281R"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),
    ["16AD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/5K"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/10H"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["16C/38T"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getSubStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16C/47L"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "PANJAGUTTA"),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASHASAN NAGAR",
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["16C/49M"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16C/281"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["16CD/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CD/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16CR/38T"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getSubStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["16D/5K"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16D/24B"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["16D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16H/49M"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        "TIRUMALA NAGAR", "NMDC (ANANDH BAGH)", SHD[264],
        getSubStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["16R/20"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getSubStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["16S/10YF"].concat(
        getSubStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 17 SERIES
    ["17DH"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DS"].concat(
        getSubStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getSubStops(SHMB_KSR, "TARNAKA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'BALAJI NAGAR')
    ),
    ["17DV"].concat(
        getSubStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getSubStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["17H"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
    ),
    ["17HN"].concat(
        SHD[898],
        getSubStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'NOMA'),
        getSubStops(SHMB_KSR, 'HB COLONY', 'KUSHAIGUDA')
    ),
    ["17H/29B"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["17/219"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/219"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["17H/242"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["17CS"].concat(
        getSubStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getSubStops(SHMB_KSR, "TARNAKA", "CHAKRIPURAM"),
        getSubStops(TailsUP, 'CHERLAPALLY JAIL', 'CHERLAPALLY')
    ),
    ["17S"].concat(
        getSubStops(HCLX_GWRL, "SECUNDERABAD", "SITAFALMANDI X ROADS"),
        SHD[641],
        getSubStops(SHMB_KSR, "TARNAKA", "KUSHAIGUDA")
    ),
    ["17V"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "KUSHAIGUDA")
    ),

    // 18 SERIES
    ["18"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18B"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD')
    ),
    ["18C"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/10H"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["18J"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18R"].concat(
        getSubStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18V"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'NGRI')
    ),
    ["18VJ"].concat(
        getSubStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD'),
        SHD[754], SHD[448]
    ),
    ["18/10KJ"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getSubStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["18/47U"].concat(
        getSubStops(GTKS_PTCR, 'BODUPPAL X ROADS', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getSubStops(CRPL_LGPL, "PATNY", "PANJAGUTTA"),
    ),
    ["18/272G"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["18/283S"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getSubStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["18C/30"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["18C/219"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["18C/229"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),

    // 19 SERIES
    ["19F"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152],
    ),
    ["19K"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19K/288D"].concat(
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getSubStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getSubStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["19KJ"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY'),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["19KM"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR X ROADS')
    ),
    ["19M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'KPHB MAIN ROAD'),
        getSubStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["19MP"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'JNTU COLLEGE'),
        getSubStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),
    ["19S"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["19YF"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MYTHRIVANAM'),
        SHD[972], SHD[1100],
        getSubStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["19S/505"].concat(
        getSubStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),

    // 20 SERIES
    ["20P"].concat(
        SHD[898], SHD[207],
        getSubStops(TailsUP, 'PADMARAO NAGAR', 'BHOLAKPUR'),
        getSubStops(DRFM_RMNG, 'KALPANA', 'ASHOK NAGAR X ROADS'),
        getSubStops(TailsUP, 'NTR STADIUM', 'NAMPALLY')
    ),
    ["20/15D"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["20/15H"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["20/16"].concat(
        getSubStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getSubStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["20/16A"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["20/16R"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getSubStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["20/280"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 21 SERIES
    ["21W"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA')
    ),

    // 22 SERIES
    ["22"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HAKIMPET')
    ),
    ["22/90L"].concat(
        getSubStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["22D"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[10], SHD[14], SHD[612]
    ),
    ["22K"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'KOWKOOR X ROADS'),
        SHD[9], SHD[134], SHD[169]
    ),

    // 23 SERIES
    ["23B"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getSubStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132]
    ),
    ["23BK"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getSubStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516]
    ),
    ["23BS"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getSubStops(MHRM_MDCL, 'DGQA QUARTERS', 'SUBHASH NAGAR X ROADS'),
        SHD[974], SHD[132], SHD[516], SHD[561], SHD[976]
    ),
    ["23GF"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getSubStops(MHRM_MDCL, 'TEACHERS COLONY', 'GREEN FIELDS COLONY')
    ),
    ["23GS"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getSubStops(MHRM_MDCL, 'TEACHERS COLONY', 'KISTAMMA ENCLAVE'),
        SHD[561], SHD[976]
    ),
    ["23K"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        getSubStops(MHRM_MDCL, 'DGQA QUARTERS', 'KISTAMMA ENCLAVE')
    ),
    ["23T"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAL BAZAR'),
        getSubStops(MHRM_MDCL, 'TEACHERS COLONY', 'KANJIGUDA'),
        SHD[429], SHD[745], SHD[998]
    ),

    // 24 SERIES
    ["24"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'YAPRAL')
    ),
    ["24B"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'BALAJI NAGAR')
    ),
    ["24BA"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'AMBEDKAR NAGAR')
    ),
    ["24BJ"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'CHENNAPUR X ROADS'),
        "BJR NAGAR"
    ),
    ["24E"].concat(
        SHD[898],
        getSubStops(MNBD_SRPT, 'PATNY', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'AMMUGUDA BAZAR'),
        SHD[375], SHD[712], SHD[996], SHD[376],
        getSubStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["24S"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getSubStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA')
    ),
    ["24SS"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getSubStops(GTKS_KPHB, 'LAL BAZAR', 'SHAHPUR NAGAR'),
    ),
    ["24B/16D"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["24B/281"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["24J"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'HANUMAN TEMPLE'),
        SHD[1016], "ECHS POLYCLINIC", SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24L/281"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getSubStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["24S/273"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getSubStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getSubStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),


    // 25 SERIES
    ["25A"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getSubStops(TailsUP, 'SURYA NAGAR X ROADS', 'SURYA NAGAR')
    ),
    ["25AJ"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getSubStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'JONNABANDA'),
    ),
    ["25AJ/M"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS",
        SHD[30],
        getSubStops(TailsDOWN, 'SURYA NAGAR X ROADS', 'GOPAL NAGAR'),
    ),
    ["25M"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getSubStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR')
    ),
    ["25MS"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        getSubStops(TailsUP, 'SELECT TALKIES', 'GOPAL NAGAR X ROADS'),
        getSubStops(TailsUP, 'SANJEEVA GARDENS', 'SHARAN NAGAR')
    ),
    ["25P"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'IG STATUE'),
        "VBR GARDENS", "CITIZEN COLONY", "PANCHASHEELA ENCLAVE"
    ),
    ["25S"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/1P"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getSubStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["25S/2"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["25S/227"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getSubStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),
    ["25S/229"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),

    // 26 SERIES
    ["26M"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getSubStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["26M/49M"].concat(
        getSubStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getSubStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    ),
    ["26N"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'PARADISE'),
        getSubStops(TailsUP, 'MUD FORT', 'DIAMOND POINT'),
        "CENTER POINT", "BAPUJI NAGAR",
        getSubStops(TailsUP, 'ASHOK GARDENS', 'OLD BOWENPALLY')
    ),

    // 29 SERIES
    ["29B"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "JEEDIMETLA")
    ),
    ["29B/17H"].concat(
        getSubStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["29B/272G"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["29B/272I"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        "BAHUDURPALLY",
        SHD[407]
    ),
    ["29S"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "SHAHPUR NAGAR"),
        "SUBHASH NAGAR (JDM)"
    ),
    ["29Q"].concat(
        getSubStops(IBP_DNGL, "BALANAGAR", "CHINTAL"),
        SHD[214], SHD[792]
    ),

    // 30 SERIES
    ["30"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30S"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "PARADISE"),
        SHD[141],
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'BEERAPPA NAGAR'),
        SHD[271], SHD[512], SHD[531], SHD[541], SHD[969]
    ),
    ["30/18C"].concat(
        getSubStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getSubStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["30/280"].concat(
        getSubStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getSubStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),

    // 31 SERIES
    ["31P"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'JNTU COLLEGE'),
        getSubStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR')
    ),

    // 37 SERIES
    ["37"].concat(
        SHD[898], SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getSubStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS')
    ),
    ["37/8"].concat(
        SHD[525],
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], "AOC RECORDS", SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getSubStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),

    // 38 SERIES
    ["38EX"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", SHD[84],
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        SHD[84], "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        SHD[1027]
    ),
    ["38T/16C"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getSubStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["38T/16CR"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR", "RTC COLONY (MLY)", "SITI NAGAR", "SHAFI NAGAR", "BHARATH NAGAR (MLY)",
        getSubStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),

    // 40 SERIES
    ["40"].concat(
        getSubStops(MDCL_MHRM, 'SECUNDERABAD', 'BATA'),
        getSubStops(DRFM_RMNG, 'BIBLE HOUSE', 'NATIONAL DARBAR'),
        SHD[770], SHD[3], SHD[110], SHD[506]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        getSubStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[506],
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        SHD[131],
        getSubStops(RMNG_DRFM, 'KALPANA', 'PARADISE CENTER'),
        getSubStops(CRPL_LGPL, "PARADISE", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "ERRAGADDA"),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 46 SERIES
    ["46"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "POLICE LINES"),
        SHD[759]
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[908], "PRASASHAN NAGAR",
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        "MAYURI NAGAR",
    ),
    ["47L"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16A"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["47L/16C"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, 'PANJAGUTTA', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["47Y"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getSubStops(KOTI_MCRL, 'JOURNLIST COLONY', 'FILM NAGAR'),
        SHD[794],
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47YM"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'JUBLIE HILLS CHECK POST'),
        getSubStops(KOTI_MCRL, 'JOURNLIST COLONY', 'MANCHIREVULA'),
    ),

    // 49 SERIES
    ["49"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getSubStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getSubStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49A"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'GREEN LANDS'),
        getSubStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getSubStops(PTCR_GTKS, 'KHAIRATHABAD', 'AFZALGUNJ')
    ),
    ["49M"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM')
    ),
    ["49/250"].concat(
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getSubStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getSubStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/16A"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["49M/16C"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["49M/16CD"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16D"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["49M/16H"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR",
        getSubStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["49M/26M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        SHD[755],
        getSubStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["49M/92A"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getSubStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["49M/229"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        getSubStops(IBP_DNGL, 'TARBUND', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["49M/250"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["49M/250C"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["49M/250D"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getSubStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65MG"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),
    ["65M/116G"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getSubStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["65M/123"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getSubStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 71 SERIES
    ["71A"].concat(
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["71K"].concat(
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'KACHEGUDA KAMELA'),
        SHD[454]
    ),

    // 72 SERIES
    ["72"].concat(
        "HIGH COURT",
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'KOTHAPET'),
        SHD[626], SHD[597], SHD[554]
    ),
    ["72/277D"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getSubStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["72H"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR')
    ),
    ["72HK"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'HAYATHNAGAR'),
        getSubStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'KUNTLOOR')
    ),
    ["72J"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR'),
        getSubStops(HCLX_GWRL, 'CHAITANYAPURI', 'BANDLAGUDA (NAGOLE)'),
        SHD[424], "JAIPURI SAINAGAR", "JAIPURI COLONY DRF"
    ),
    ["72V"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'PANAMA'),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 83 SERIES
    ["83J"].concat(
        getSubStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["83JA"].concat(
        getSubStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getSubStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["83J/272G"].concat(
        getSubStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getSubStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["85P/8C"].concat(
        getSubStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getSubStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["85/253L"].concat(
        getSubStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getSubStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["85V"].concat(
        getSubStops(MDCL_MHRM, "CHARMINAR", "BARKAS X ROADS"),
        "KOTHAPET(SALALA)", "BISMILLAH COLONY", "VENKATAPUR"
    ),

    // 86 SERIES
    ["86A"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getSubStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ')
    ),
    ["86C"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getSubStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'CITY BUS STATION')
    ),
    ["86J"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getSubStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'AFZALGUNJ'),
        getSubStops(KTGD_LGRH, 'OSMANIA HOSPITAL', 'JIYAGUDA KHT')
    ),
    ["86K"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'YMCA'),
        getSubStops(KSR_SHMB, 'KACHEGUDA X ROADS', 'KOTI WOMENS COLLEGE'),
        SHD[506]
    ),


    // 90 SERIES
    ["90/253T"].concat(
        SHD[448],
        SHD[754],
        getSubStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getSubStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["90/300"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["90B"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "NAGOLE X ROADS"),
        getSubStops(HCLX_GWRL, 'OLD NAGOLE', 'BANDLAGUDA DEPOT')
    ),
    ["90BE"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getSubStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getSubStops(MDCL_ADBT, 'MIDHANI COMPANY', 'BADANGPET')
    ),
    ["90L"].concat(
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90LK"].concat(
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA STATION")
    ),
    ["90DL"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getSubStops(KTGD_LGRH, "LB NAGAR", "DILSHUKNAGAR")
    ),
    ["90LV"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90L/3K"].concat(
        SHD[747],
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getSubStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L/22"].concat(
        SHD[747],
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getSubStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["90L/229"].concat(
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["90L/251"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getSubStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["90UN"].concat(
        getSubStops(HCLX_GWRL, 'DILSHUKNAGAR', 'NAGOLE X ROADS'),
        SHD[672], SHD[1038]
    ),
    ["90U/203U"].concat(
        getSubStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getSubStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 92 SERIES
    ["92A"].concat(
        getSubStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"), SHD[620]
    ),
    ["92A/5K"].concat(
        getSubStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["92A/49M"].concat(
        getSubStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["92K"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR'),
        getSubStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getSubStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),
    ["92R"].concat(
        SHD[807],
        getSubStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'NPPTI'),
        getSubStops(SECB_SKPL, 'DAIRY FARM (CNTLMT)', 'RETHIBOWLI'),
        SHD[620]
    ),

    // 94 SERIES
    ["94R"].concat(
        getSubStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        getSubStops(TailsUP, 'KISHAN BAGH', 'CHINTALMET'),
        getSubStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),
    ["94RM"].concat(
        getSubStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'BAHUDURPURA'),
        SHD[342], SHD[942],
        getSubStops(TailsUP, '9 NUMBER', 'CHINTALMET'),
        getSubStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 95 SERIES
    ["95"].concat(
        getSubStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR')
    ),
    ["95/3K"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")
    ),
    ["95/3KN"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getSubStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["95K"].concat(
        getSubStops(KSR_SHMB, 'KOTI MEDICAL COLLEGE', 'ARAMGHAR'),
        getSubStops(SKPL_SECB, 'BABUL REDDY NAGAR', 'DURGA NAGAR'),
        getSubStops(TailsUP, 'KATEDAN', 'SRI RAM COLONY')
    ),

    // 100 SERIES
    ["100/299"].concat(
        SHD[897], SHD[139],
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["100V"].concat(
        SHD[897], SHD[139],
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["100M"].concat(
        SHD[897], SHD[139],
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "KOTHAPET"),
        SHD[626], SHD[597], SHD[554]
    ),


    // 102 SERIES
    ["102"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        SHD[628]
    ),
    ["102/3K"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102/9K"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["102/185"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),
    ["102/253L"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getSubStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getSubStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getSubStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["102B"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/3K"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["102B/203N"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["102B/218"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["102M"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getSubStops(TailsUP, 'SAI NAGAR (BLPR)', 'BALAPUR VILLAGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BALAPUR X ROADS'),
        getSubStops(TailsUP, 'SAI NAGAR (BLPR)', 'SHIVAJI CHOWK'),
        getSubStops(TailsUP, 'VIJAY DURGA NAGAR', 'RCI')
    ),

    // 104 SERIES
    ["104A"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'RAJIV GRUHA KALPA')
    ),
    ["104R"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'CHAMPAPET'),
        getSubStops(ADBT_MDCL, 'RTC COLONY(CHAMPAPET)', 'RN REDDY')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[978], SHD[336],
        getSubStops(ADBT_MDCL, 'SAIDABAD', 'KOTI WOMENS COLLEGE'),
        SHD[507],
        getSubStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR')
    ),
    ["107JL"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getSubStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107JS"].concat(
        getSubStops(HCLX_GWRL, 'SECUNDERABAD', 'DILSHUKNAGAR'),
        getSubStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getSubStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
    ),
    ["107VL"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getSubStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getSubStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getSubStops(LGRH_KTGD, 'CHAITANYAPURI', 'LB NAGAR X ROADS')
    ),
    ["107VR"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getSubStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getSubStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
    ),
    ["107VS"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167],
        getSubStops(DRFM_RMNG, 'VST', 'RAM NAGAR (E SEVA)'),
        getSubStops(HCLX_GWRL, 'RAM NAGAR GUNDU', 'DILSHUKNAGAR'),
        getSubStops(LGRH_KTGD, 'CHAITANYAPURI', 'KOTHAPET X ROADS'),
        getSubStops(TailsUP, 'HUDA COLONY (SAROORNAGAR)', 'SAROOR NAGAR')
    ),

    // 113 SERIES
    ["113F"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113K"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113KL"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KM"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MIYAPUR X ROADS'),
    ),
    ["113M"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),
    ["113S"].concat(
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113W"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getSubStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["113M/281"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getSubStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["113M/288"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["113FT"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getSubStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113KLT"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getSubStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'LINGAMPALLY'),
    ),
    ["113KT"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'TARNAKA'),
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'VIDYA NAGAR'),
        getSubStops(HCLX_GWRL, 'SHIVAM ROAD', 'SYNDICATE BANK'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KPHB MAIN ROAD'),
        getSubStops(TailsUP, 'KPHB TEMPLE', 'KPHB 4TH PHASE')
    ),
    ["113FZ"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'GOLNAKA'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["113MZ"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'GOLNAKA'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM')
    ),

    // 116 SERIES
    ["116GA/65"].concat(
        getSubStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getSubStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["116N"].concat(
        getSubStops(KOTI_MCRL, 'KOTI MEDICAL COLLEGE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'MEHDIPATNAM', 'KHAJAGUDA X ROADS'),
        getSubStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),

    // 117 SERIES
    ["117"].concat(
        getSubStops(TailsDOWN, 'UPPAL', 'NACHARAM IDA'),
        getSubStops(LGPL_CRPL, 'NACHARAM X ROADS', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        SHD[525]
    ),

    // 118 SERIES
    ["118W/300"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getSubStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[620],
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'RAMDEV GUDA'),
        SHD[582], SHD[319]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[620],
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'GANDIPET X ROAD'),
        SHD[306], "OSMAN SAGAR"
    ),

    // 123 SERIES
    ["123"].concat(
        getSubStops(CRPL_LGPL, 'MEHDIPATNAM', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getSubStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),
    ["123/65M"].concat(
        getSubStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getSubStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),


    // 125 SERIES
    ["125/5K"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),

    // 126 SERIES
    ["126/300"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["126M"].concat(
        getSubStops(CRPL_LGPL, 'MEHDIPATNAM', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),

    // 127 SERIES
    ["127K"].concat(
        getSubStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getSubStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getSubStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION')
    ),
    ["127KL"].concat(
        getSubStops(MDCL_ADBT, 'KONDAPUR', 'MADHAPUR PS'),
        getSubStops(TailsDOWN, 'AOU UNIVERSITY', 'ROAD NO. 45'),
        getSubStops(MDCL_ADBT, 'JOURNLIST COLONY', 'KOTI BUS STATION'),
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR')
    ),

    // 147 SERIES
    ["147"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'PATNY'),
        getSubStops(CRPL_LGPL, 'PARADISE', 'PANJAGUTTA'),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'LV PRASAD'),
        getSubStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'KONDAPUR')
    ),

    // 156 SERIES
    ["156/299"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156/505"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["156L"].concat(
        getSubStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156S"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[922], SHD[920], "NARSIMHARAO NAGAR", "SAMA NAGAR X ROADS", "SAI BABA TEMPLE", "SAI NAGAR"
    ),
    ["156V"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),

    // 158 SERIES
    ["158"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'ESI HOSPITAL')
    ),
    ["158FL"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158HF"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["158VF"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'ERRAGADDA'),
        getSubStops(BLNR_MLPT, 'PANDURANGA NAGAR', 'MOTHI NAGAR'),
        SHD[152]
    ),

    // 171 SERIES
    ["171"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GAJULA RAMARAM X ROADS"),
        getSubStops(GTKS_KPHB, 'NLB NAGAR', "GAJULA RAMARAM")
    ),
    ["171K"].concat(
        getSubStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        SHD[510]
    ),
    ["171K/219"].concat(
        getSubStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    ),
    ["171M/189M"].concat(
        getSubStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getSubStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["171R"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", SHD[298]),
        getSubStops(GTKS_KPHB, 'NLB NAGAR', 'SRI NIWAS NAGAR'),
        SHD[960]
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        "GHOUSE NAGAR", "ISMAIL NAGAR", SHD[103],
        getSubStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),

    // 183 SERIES
    ["183B"].concat(
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR')
    ),
    ["183SS"].concat(
        getSubStops(GTKS_KPHB, 'SUCHITRA', 'SHAHPUR NAGAR')
    ),

    // 185 SERIES
    ["185G"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'KUKATPALLY'),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["185/102"].concat(
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),

    // 188 SERIES
    ["188"].concat(
        getSubStops(SRPT_MNBD, "MEHDIPATNAM", "KALI MANDIR")
    ),
    ["188/5K"].concat(
        getSubStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["188/251"].concat(
        getSubStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getSubStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getSubStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),

    // 189 SERIES
    ["189M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA'),
        getSubStops(TailsUP, 'JANAPRIYA SAINEST', 'APUROOPA COLONY')
    ),
    ["189M/171M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getSubStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["189M/272G"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),

    // 195 SERIES
    ["195G"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getSubStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GJ"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getSubStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195GK"].concat(
        "GAR (KOKAPET)", "KOKAPET ORR",
        getSubStops(BLNR_MLPT, 'INFOTECH', 'JNTU COLLEGE')
    ),
    ["195J"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        SHD[442], SHD[510],
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["195W"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'BACHUPALLY X ROADS')
    ),
    ["195WJ"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE')
    ),
    ["195WP"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'JNTU COLLEGE'),
        getSubStops(TailsUP, 'JNTU COLLEGE', 'PRAGATHI NAGAR'),
        getSubStops(ADBT_MDCL, 'KAISAR NAGAR', 'GANDIMAISAMMA')
    ),

    // 201 SERIES
    ["201"].concat(
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR"),
        getSubStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'BACHARAM')
    ),
    ["201G"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getSubStops(HCLX_GWRL, 'DILSHUKNAGAR', 'GOWRELLY')
    ),
    ["201M"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getSubStops(HCLX_GWRL, 'DILSHUKNAGAR', 'TATTI ANNARAM X ROADS'),
        SHD[994], SHD[849], SHD[606]
    ),
    ["201Q"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'MOOSARAMBAGH'),
        getSubStops(HCLX_GWRL, 'DILSHUKNAGAR', 'QUTHBULLAPUR - GOWRELLY')
    ),
    ["201T/290U"].concat(
        getSubStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR COLONY'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 202 SERIES
    ["202B"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR DEPOT'),
        SHD[1072],
        getSubStops(OSK_Stops, 'HAYATHNAGAR VILLAGE', 'BRAHMANAPALLY')
    ),

    // 203 SERIES
    ["203A"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203AK"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN"
    ),
    ["203AR"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA'),
        "KONGARA KALAN ORR", "BR AMBEDKAR CIRCLE", "KONGARA KALAN", "WONDER LA X ROADS", SHD[835]
    ),
    ["203N"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203A/218"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/102B"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["203N/218"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["203N/3K"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["203N/3N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getSubStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getSubStops(LGPL_CRPL, 'TARNAKA', 'NACHARAM X ROADS'),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["203U"].concat(
        getSubStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getSubStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),
    ["203U/90U"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        "GANDI CHERUVU", SHD[303],
        getSubStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["204DA"].concat(
        getSubStops(LGRH_KTGD, 'DILSHUKNAGAR', 'PEDDA AMBERPET X ROADS'),
        getSubStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),
    ["204U"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDDA AMBERPET X ROADS'),
        getSubStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'SANGHI NAGAR')
    ),
    ["204UA"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PEDDA AMBERPET X ROADS'),
        getSubStops(OSK_Stops, 'GANDICHERUVU X ROADS', 'ANAJPUR')
    ),

    // 205 SERIES
    ["205A"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205A/290U"].concat(
        getSubStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["205M/290U"].concat(
        getSubStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getSubStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),

    // 211 SERIES
    ["211"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775]
    ),
    ["211/242"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getSubStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getSubStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["211B"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET VILLAGE', 'UDDAMARRI')
    ),
    ["211CD"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[51],
        getSubStops(OSK_Stops, 'THIMMAIPALLY', 'DRDO (YADGARPALLY)')
    ),
    ["211D"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR"
    ),
    ["211DY"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'THUMKUNTA'),
        SHD[775], SHD[243], "DEVARAYAMJAL VILLAGE"
    ),
    ["211K"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KESAVARAM'),
    ),
    ["211M"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getSubStops(KPHB_GTKS, 'EME CENTER', 'CHENNAPUR X ROADS'),
        getSubStops(TailsUP, 'BHAGYA NAGAR COLONY', 'CRPF')
    ),

    // 212 SERIES
    ["212"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getSubStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'DONGALAMYSAMMA X ROADS'),
        "BITS PILANI X ROADS", SHD[140]
    ),
    ["212/702"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getSubStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
    ),
    ["212T"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getSubStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'KOLTHUR X ROADS'),
        "SAMPANBOLE",
        "KOLTHUR",
        "ICICI TURKAPALLY"
    ),

    // 216 SERIES
    ["216"].concat(
        SHD[507],
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["216M"].concat(
        getSubStops(CRPL_LGPL, 'MEHDIPATNAM', 'LINGAMPALLY')
    ),

    // 217 SERIES
    ["217"].concat(
        SHD[507],
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getSubStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217/254"].concat(
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN"
    ),
    ["217C"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getSubStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),
    ["217D"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY'),
        getSubStops(GTKS_PTCR, 'JYOTHI NAGAR (LGMPLY)', 'PATANCHERUVU')
    ),

    // 218 SERIES
    ["218"].concat(
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218A"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218C"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'PATANCHERUVU')
    ),
    ["218CA"].concat(
        getSubStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'NAYAPUL'),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'PATANCHERUVU')
    ),
    ["218D"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218H"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU')
    ),
    ["218L"].concat(
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LINGAMPALLY')
    ),
    ["218/102B"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["218/203A"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["218/203N"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["218/224MN"].concat(
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'NIZAMPET X ROADS'),
        getSubStops(BLNR_MLPT, 'NIZAMPET ARCH', 'MALLAMPET')
    ),
    ["218/277K"].concat(
        getSubStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getSubStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA')
    ),

    // 219 SERIES
    ["219"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/16A"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["219/17"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/17H"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["219/18C"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["219/171K"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["219/224G"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219I/224G"].concat(
        getSubStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["219/229"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'), SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["219/250"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getSubStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["219/272G"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219I/272G"].concat(
        getSubStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["219/280"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 222 SERIES
    ["222A"].concat(
        getSubStops(ADBT_MDCL, 'KOTI BUS STATION', 'PENSION OFFICE'),
        getSubStops(KOTI_MCRL, 'CARE HOSPITAL', 'LV PRASAD'),
        getSubStops(ADBT_MDCL, 'JUBLIE HILLS CHECK POST', 'ALLWYN X ROADS'),
        getSubStops(GTKS_PTCR, 'MADINAGUDA', 'PATANCHERUVU')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        "MAYURI NAGAR",
        getSubStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getSubStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        "PRASASHAN NAGAR", SHD[908]
    ),
    ["224G"].concat(
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/10KM"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getSubStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["224G/219"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getSubStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["224G/219I"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getSubStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getSubStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["224MN"].concat(
        getSubStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224MN/218"].concat(
        getSubStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getSubStops(PTCR_GTKS, 'JNTU COLLEGE', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["224X"].concat(
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'IDA X ROADS')
    ),


    // 227 SERIES
    ["227"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'DHULAPALLY X ROADS'),
        getSubStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS')
    ),
    ["227/25S"].concat(
        SHD[305],
        getSubStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getSubStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 229 SERIES
    ["229"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1D"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["229/1Z"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["229/5K"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["229/18C"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["229/25S"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["229/49M"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PARADISE'),
        getSubStops(CRPL_LGPL, 'WESLEY COLLEGE', 'MEHDIPATNAM')
    ),
    ["229/90L"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["229/219"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087], getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')),
    ["229/279"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["229/290"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getSubStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["229/290U"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getSubStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["229B"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        SHD[156]
    ),
    ["229P"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getSubStops(OSK_Stops_DOWN, 'KISTAPUR', 'PUDUR')
    ),

    // 230 SERIES
    ["230A"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getSubStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230AN"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
        getSubStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM')
    ),
    ["230P"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'DUNDIGAL'),
    ),
    ["230P/9K"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["230P/9X"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["230P/9XM"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getSubStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 231 SERIES
    ["231"].concat(
        SHD[613],
        getSubStops(OSK_Stops_DOWN, 'KISTAPUR', 'MEDICITY')
    ),
    ["231KN"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "JNTU COLLEGE"),
        getSubStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET'),
        getSubStops(OSK_Stops, 'NARAYANA IIT', 'KAZIPALLY')
    ),

    // 233 SERIES
    ["233"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'KOMPALLY'),
        getSubStops(OSK_Stops_DOWN, 'APARNA KOMPALLY', 'NUTHANKAL')
    ),

    // 241 SERIES
    ["241T"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'CHERIYAL X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'CHIRYALA VILLAGE', 'DHARMAVARAM')
    ),

    // 242 SERIES
    ["242"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/3K"].concat(
        getSubStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["242/17H"].concat(
        getSubStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/211"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["242A"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242B"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        SHD[147]
    ),
    ["242G"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS"
    ),
    ["242GA"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KUNDANPALLY X ROADS'),
        SHD[520], SHD[318], SHD[829], SHD[476], SHD[475],
        "KEESARA X ROADS", "KEESARAGUTTA KAMAN", "ANKIREDDY PALLY X ROADS", SHD[46], "ANKIREDDY PALLY VILLAGE"
    ),
    ["242RG"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'BANDLAGUDA (NAGARAM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),
    ["242RG/15H"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getSubStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 245 SERIES
    ["245A"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),

    // 250 SERIES
    ["250"].concat(
        getSubStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/10K"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getSubStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["250C"].concat(
        getSubStops(LGPL_CRPL, 'SECUNDERABAD', 'CHERLAPALLY'),
    ),
    ["250D"].concat(SHD[898],
        getSubStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250/49"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getSubStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getSubStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["250/49M"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250C/49M"].concat(
        getSubStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["250D/49M"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["250S"].concat(
        getSubStops(LGPL_CRPL, 'SECUNDERABAD', 'NOMA')
    ),
    ["250/219"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getSubStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["250/281"].concat(
        getSubStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 251 SERIES
    ["251M"].concat(
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'MADANAPALLY'),
        SHD[439], SHD[651]
    ),
    ["251/1Z"].concat(
        getSubStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["251/2Z"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["251/7Z"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getSubStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["251/90L"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getSubStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["251/188"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getSubStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getSubStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getSubStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),
    ["251/300"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getSubStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),

    // 252 SERIES
    ["252S"].concat(
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        'KISHANGUDA',
        getSubStops(OSK_Stops, 'RASHEEDGUDA', 'SHANKARAPUR')
    ),
    ["252/3K"].concat(
        SHD[843], getSubStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["252/6IW"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getSubStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getSubStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getSubStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getSubStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),

    // 253 SERIES
    ["253"].concat(
        getSubStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM')
    ),
    ["253L/85"].concat(
        getSubStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getSubStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/102"].concat(
        getSubStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getSubStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getSubStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getSubStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["253T/90"].concat(
        "FAB CITY", "SREE NAGAR",
        getSubStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getSubStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["253W"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getSubStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getSubStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'MAHESHWARAM')
    ),

    // 254 SERIES
    ["254/217"].concat(
        "KONGARA KALAN", "WONDER LA X ROADS", SHD[835],
        getSubStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),

    // 272 SERIES
    ["272"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),
    ["272G/9K"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["272G/9X"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["272G/18"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["272G/29B"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272G/83J"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getSubStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["272G/189M"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["272G/219"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["272G/219I"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getSubStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["272I/29B"].concat(
        SHD[407],
        "BAHUDURPALLY",
        getSubStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["272B"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        SHD[158], SHD[157]
    ),

    // 273 SERIES
    ["273/24S"].concat(
        SHD[305],
        getSubStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getSubStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 277 SERIES
    ["277"].concat(
        SHD[624],
        getSubStops(SECB_SKPL, 'CHADERGHAT', 'BAIRAMALGUDA'),
        getSubStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM')
    ),
    ["277D"].concat(
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "LB NAGAR X ROADS"),
        getSubStops(DNGL_IBP, "SAGAR RING ROAD", "IBRAHIMPATNAM")
    ),
    ["277D/72"].concat(
        getSubStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getSubStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["277K/218"].concat(
        getSubStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getSubStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')
    ),
    ["277L"].concat(
        getSubStops(DNGL_IBP, "LB NAGAR X ROADS", "IBRAHIMPATNAM")
    ),
    ["277N"].concat(
        getSubStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getSubStops(DNGL_IBP, 'SAGAR RING ROAD', 'GURRAMGUDA X ROADS'),
        "GURRAMGUDA VILLAGE", "KAMMAGUDA", SHD[665]
    ),

    // 279 SERIES
    ["279"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "IBRAHIMPATNAM")
    ),
    ["279/229"].concat(
        getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["279U"].concat(getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "UPPAL RING ROAD")),

    // 280 SERIES
    ["280"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280B"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        "ANNAPURNA COLONY (GTKS)", "KONDAPUR VLG", "VIGNAN SCHOOL", "HOLY MERRY COLLEGE", SHD[147]
    ),
    ["280J"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280N"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getSubStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'NFC NAGAR X ROADS'),
        "NFC NAGAR"
    ),
    ["280X"].concat(
        SHD[1038],
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'GHATKESAR')
    ),
    ["280/20"].concat(
        getSubStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["280/30"].concat(
        getSubStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        "SIKH VILLAGE",
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["280/219"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getSubStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["280/488"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/492"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getSubStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getSubStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getSubStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),

    // 281 SERIES
    ["281"].concat(
        getSubStops(SHMB_KSR, 'ECIL X ROADS', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/3K"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["281/6L"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getSubStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/16C"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["281/24B"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["281/24L"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["281/113M"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getSubStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["281/250"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["281R/16A"].concat(
        getSubStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 282 SERIES
    ["282K"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getSubStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 283 SERIES
    ["283C"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM CIRCLE",
        "SURARAM COLONY"
    ),
    ["283D/9X"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getSubStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["283K"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getSubStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283S/18"].concat(
        getSubStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getSubStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283VS"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "SURARAM"),
        "SURARAM VILLAGE"
    ),
    ["283T"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'JODIMETLA'),
        "ANURAG UNIVERSITY", "VENKATAPUR", "TENUGUDEM"
    ),

    // 288 SERIES
    ["288"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD')
    ),
    ["288/113M"].concat(
        getSubStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["288A"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'JBIT'),
        getSubStops(OSK_Stops, 'MURTHUZAGUDA', 'AMDAPUR')
    ),
    ["288C"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getSubStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'APPOJIGUDA')
    ),
    ["288D"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'HIMAYATH NAGAR JUNCTION'),
        getSubStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288D/19K"].concat(
        SHD[209], SHD[1026],
        getSubStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getSubStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["288K"].concat(
        SHD[507],
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MOINABAD'),
    ),

    // 290 SERIES
    ["290"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getSubStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290/229"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getSubStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290KJ"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'KUNTLOOR')
    ),
    ["290KP"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR")
    ),
    ["290UA"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290UF"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'RAMOJI FILM CITY')
    ),
    ["290U/201T"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'TARAMATIPET')
    ),
    ["290U/204"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDDA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["290U/205A"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["290U/205M"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getSubStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),
    ["290U/229"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["290U/463"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["290U/555"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),

    // 299 SERIES
    ["299"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE")
    ),
    ["299/1D"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["299/100"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getSubStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["299/156"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["299D"].concat(getSubStops(KTGD_LGRH, "HAYATHNAGAR", "DILSHUKNAGAR")),

    // 300 SERIES
    ["300"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300/90"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["300/118W"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getSubStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getSubStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),
    ["300/126"].concat(
        SHD[552],
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getSubStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["300/251"].concat(
        getSubStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getSubStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["300L"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "LB NAGAR X ROADS")
    ),

    // 400 SERIES
    ["412"].concat(
        getSubStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getSubStops(DNGL_IBP, 'SAGAR RING ROAD', 'IBRAHIMPATNAM'),
        getSubStops(OSK_Stops, 'KHANAPUR X ROADS', 'MALL')
    ),
    ["445"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getSubStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'KETHIREDDYPALLY ROAD'),
        getSubStops(OSK_Stops, 'SAJJANPALLY X ROADS', 'KETHIREDDYPALLY')
    ),
    ["447R"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getSubStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'MUDIMYAL X ROADS'),
        getSubStops(OSK_Stops, 'MUDIMYAL', 'RAVULAPALLY')
    ),
    ["458"].concat(
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getSubStops(OSK_Stops, 'GOLLAPALLY', 'MANSANPALLY X ROADS'),
        SHD[605], SHD[576], SHD[575]
    ),
    ["463/290U"].concat(
        "DESHMUKHI",
        getSubStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["464"].concat(
        getSubStops(LGRH_KTGD, "DILSHUKNAGAR", "ABDULLAHPURMET"),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getSubStops(OSK_Stops, 'GUNTAPALLY', 'DANDUMAILARAM')
    ),
    ["488/280"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["490S"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getSubStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'BIBI NAGAR')
    ),
    ["492/280"].concat(
        getSubStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getSubStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["495"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        getSubStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getSubStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'GUMMADIDALA'),
        getSubStops(OSK_Stops, 'ANANTHARAM X ROADS', 'KANUKUNTA'),
    ),
    ["498"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getSubStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        "KESAVAPUR"
    ),
    ["498K"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        getSubStops(OSK_Stops_DOWN, 'DUNDIGAL X ROADS', 'ANNARAM'),
        getSubStops(OSK_Stops_DOWN, 'PULLAREDDY COLLEGE', 'KOTHAPALLY')
    ),
    ["498U"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA KAMAN'),
        getSubStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        "THUMKUNTA (JALALPUR)",
        getSubStops(OSK_Stops_DOWN, 'KESAVAPUR', 'USHARPALLY'),
        "UDDAMARRI"
    ),
    ["498VJ"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA"),
        "DOMARAPOCHAMPALLY",
        "DUNDIGAL X ROADS",
        "GAGILLAPUR",
        getSubStops(OSK_Stops_DOWN, 'PATHARAM', 'JINNARAM')
    ),

    // 500 SERIES
    ["505"].concat(
        SHD[620],
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/19S"].concat(
        getSubStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),
    ["505/156"].concat(
        getSubStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["523K"].concat(
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'ABDULLAHPURMET VILLAGE', 'KAWADIPALLY')
    ),
    ["524"].concat(
        getSubStops(LGRH_KTGD, 'DILSHUKNAGAR', 'KOTHAGUDEM'),
        getSubStops(OSK_Stops, 'NETAJI INSTITUTE', 'POCHAMPALLY')
    ),
    ["530"].concat(
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        "KISHANGUDA",
        getSubStops(OSK_Stops, 'GOLLAPALLY', 'KOTTAGUDA HIGHWAY'),
        "KANDUKUR"
    ),
    ["532"].concat(
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'JP DARGHA')
    ),
    ["532/8A"].concat(
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getSubStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["537"].concat(
        getSubStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getSubStops(OSK_Stops, 'PENJERLA', 'KODICHERLA')
    ),
    ["539"].concat(
        getSubStops(KSR_SHMB, "AFZALGUNJ", "SHAMSHABAD"),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getSubStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["539/1Z"].concat(
        getSubStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["555"].concat(
        getSubStops(LGRH_KTGD, 'DILSHUKNAGAR', 'HAYATHNAGAR'),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["555/290U"].concat(
        getSubStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["568"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getSubStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'ALIABAD X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'ALIABAD HBL', 'DAMARAKUNTA')
    ),
    ["578"].concat(
        getSubStops(SHMB_KSR, "ECIL X ROADS", "KEESARAGUTTA KAMAN"),
        getSubStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getSubStops(OSK_Stops_DOWN, 'JALALPUR', 'M TURKAPALLY'),
    ),
    ["580"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "KEESARAGUTTA KAMAN"),
        getSubStops(OSK_Stops_DOWN, 'ANKIREDDYPALLY X ROADS', 'ERRAKUNTA'),
        getSubStops(OSK_Stops_DOWN, 'JALALPUR', 'YADAGIRIGUTTA'),
    ),
    ["589"].concat(
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL'),
        getSubStops(OSK_Stops_DOWN, 'ATHVELLY', 'RAMAYAMPET')
    ),
    ["593"].concat(
        getSubStops(SRPT_MNBD, 'MEHDIPATNAM', 'MOINABAD'),
        getSubStops(OSK_Stops_DOWN, 'AYAAN INSTITUTE OF MEDICAL', 'CHEVELLA')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getSubStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getSubStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    )
]

let DetailedRoutesSubStopDOWN = [
    ["1"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1/25S"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1/25S/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1B"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getSubStops(DRFM_RMNG, 'YMCA', 'VST'),
        getSubStops(SKPL_SECB, "RTC X ROADS", "SECUNDERABAD")
    ),
    ["1C"].concat(
        "CITY BUS STATION",
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D"].concat(
        getSubStops(KTGD_LGRH, "DILSHUKNAGAR", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1D/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'KOTI WOMENS COLLEGE'),
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'DILSHUKNAGAR')
    ),
    ["1D/299"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1H"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1HD"].concat(
        getSubStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
        getSubStops(KTGD_LGRH, "KOTHAPET X ROADS", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1J"].concat(
        getSubStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1JL"].concat(
        getSubStops(LGRH_KTGD, 'LANGER HOUSE', 'AFZALGUNJ'),
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1K"].concat(
        SHD[454], SHD[453], SHD[181],
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1L"].concat(
        getSubStops(KTGD_LGRH, "LB NAGAR X ROADS", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1MD"].concat(
        "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getSubStops(KTGD_LGRH, "KOTHAPET", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1P"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898]
    ),
    ["1P/25S"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        SHD[898], SHD[207], SHD[743], "GANDHI HOSPITAL BACKSIDE",
        getSubStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "AFZALGUNJ")
    ),
    ["1V"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VM"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getSubStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1VS"].concat(
        "SAHAB NAGAR", SHD[313],
        getSubStops(TailsDOWN, 'RYTHU BAZAR', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, "PANAMA", "CHADERGHAT"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1W"].concat(
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1X"].concat(
        "KACHEGUDA STATION",
        "KACHEGUDA X ROADS",
        getSubStops(SKPL_SECB, "NARAYANAGUDA", "SECUNDERABAD")
    ),
    ["1Z"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "ARAMGHAR")
    ),
    ["1Z/251"].concat(
        getSubStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),
    ["1Z/539"].concat(
        getSubStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, "SHAMSHABAD", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD")
    ),

    // 2 SERIES
    ["2"].concat(
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2C"].concat(
        SHD[113],
        getSubStops(MHRM_MDCL, "CRPF GATE (BRKS)", "NAYAPUL"),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2J"].concat(
        getSubStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2K"].concat(
        SHD[454], SHD[453], SHD[181], SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2U"].concat(
        getSubStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getSubStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "NAYAPUL"),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2Z"].concat(
        getSubStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getSubStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getSubStops(SHMB_KSR, 'ARAMGHAR', 'NAYAPUL'),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["2/25S"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'PATNY'),
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ')
    ),
    ["2Z/251"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'NAYAPUL'),
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 3 SERIES

    ["3"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "SP NAGAR"),
        SHD[526],
        getSubStops(KSR_SHMB, "ZTS X ROADS", "AFZALGUNJ")
    ),
    ["3C"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getSubStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, "NAGARAM", "AFZALGUNJ")
    ),
    ["3DN"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, "NAGARAM", "HB COLONY"),
        getSubStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3H"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getSubStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3HN"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getSubStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        "ARTS COLLEGE OU",
        "LAW COLLEGE OU",
        "LADIES HOSTEL OU",
        "LIBRARY OU",
        SHD[43],
        getSubStops(KSR_SHMB, "VIDYA NAGAR", "AFZALGUNJ")
    ),
    ["3K"].concat(getSubStops(KSR_SHMB, "KUSHAIGUDA", "AFZALGUNJ")),
    ["3K/90L"].concat(
        SHD[747],
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, 'LB NAGAR X ROADS', 'HABSIGUDA'),
        getSubStops(SHMB_KSR, "TARNAKA", "ECIL X ROADS")
    ),
    ["3K/95"].concat(getSubStops(SHMB_KSR, "ARAMGHAR", "ECIL X ROADS")),
    ["3K/102"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/102B"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/203N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "ECIL X ROADS")
    ),
    ["3K/242"].concat(
        getSubStops(KSR_SHMB, "KEESARAGUTTA", "AFZALGUNJ"),
    ),
    ["3K/252"].concat(
        SHD[843], getSubStops(SHMB_KSR, "SHAMSHABAD", "ECIL X ROADS")
    ),
    ["3K/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'AFZALGUNJ')
    ),
    ["3KN"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "HB COLONY"),
        getSubStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "AFZALGUNJ")
    ),
    ["3KN/95"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NOMA"),
        getSubStops(SHMB_KSR, "HB COLONY", "ECIL X ROADS")
    ),
    ["3KJ"].concat(
        getSubStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getSubStops(SHMB_KSR, "AFZALGUNJ", "ECIL X ROADS")
    ),
    ["3L"].concat(
        SHD[780],
        getSubStops(KSR_SHMB, "LALAPET (RAM TH.)", "AFZALGUNJ")
    ),
    ["3M"].concat(
        SHD[66], SHD[562], SHD[573], SHD[572], SHD[736], SHD[633],
        getSubStops(KSR_SHMB, "ZTS X ROADS", "KACHEGUDA STATION"),
        SHD[708],
        SHD[181],
        getSubStops(KSR_SHMB, "CITY BUS STATION", "AFZALGUNJ")
    ),
    ["3N"].concat(
        getSubStops(TailsDOWN, "HEMA NAGAR", "NACHARAM IDA"),
        getSubStops(CRPL_LGPL, "NACHARAM X ROADS", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "FIVER HOSPITAL"),
        SHD[1099],
        getSubStops(KSR_SHMB, "KACHEGUDA X ROADS", "AFZALGUNJ")
    ),
    ["3N/203N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SHMB_KSR, "RAM KOTI X ROADS", "KACHEGUDA TOURIST"),
        getSubStops(SHMB_KSR, "BARKATPURA", "TARNAKA"),
        getSubStops(LGPL_CRPL, "TARNAKA", "NACHARAM X ROADS"),
        SHD[662], "BEL CIRCLE", "BEL"
    ),
    ["3T"].concat(
        SHD[993],
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'AFZALGUNJ'),
    ),
    ["3Y"].concat(
        "BJR NAGAR", "VAMPUGUDA", "BANK COLONY(SAKET)", "YELLAREDDYGUDA (KAPRA)", SHD[302], SHD[961],
        getSubStops(GWRL_HCLX, 'RADHIKA THEATER', 'NORTH KAMALA NAGAR'),
        getSubStops(KSR_SHMB, "ECIL X ROADS", "AFZALGUNJ")
    ),

    // 5 SERIES
    ["5/5R"].concat(
        getSubStops(SRPT_MNBD, "RISALA BAZAR", 'MEHDIPATNAM'),
    ),
    ["5G"].concat(
        SHD[319], SHD[582],
        getSubStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5KM"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        getSubStops(LGPL_CRPL, 'SHAIKPET DARGAH', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16AD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["5K/92A"].concat(
        getSubStops(SECB_SKPL, "ARAMGHAR", "RETHIBOWLI"),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/125"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SECUNDERABAD")
    ),
    ["5K/188"].concat(
        getSubStops(MNBD_SRPT, "KALI MANDIR", "SECUNDERABAD")
    ),
    ["5K/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'PATNY'),
        getSubStops(SRPT_MNBD, "BATA", "MEHDIPATNAM"),
    ),
    ["5M"].concat(
        getSubStops(MCRL_KOTI, 'MEHDIPATNAM', 'MALLEPALLY'),
        SHD[1063],
        getSubStops(MNBD_SRPT, "MAHAVIR HOSPITAL", "SECUNDERABAD")
    ),
    ["5R"].concat(
        getSubStops(SRPT_MNBD, "RISALA BAZAR", 'PATNY'),
        getSubStops(SRPT_MNBD, "BATA", "MEHDIPATNAM")
    ),
    ["5R/5"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "CLOCK TOWER"),
        getSubStops(MNBD_SRPT, "SECUNDERABAD", "RISALA BAZAR")
    ),

    // 6 SERIES
    ["6IW/252"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getSubStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'TELEPHONE BHAVAN'),
        getSubStops(TailsDOWN, 'RAMAKRISHNA MUTT', 'NTR STADIUM'),
        SHD[70], SHD[856], SHD[167], SHD[1075],
        getSubStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getSubStops(LGPL_CRPL, 'TARNAKA', 'CHERLAPALLY')
    ),
    ["6L/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getSubStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["6R"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getSubStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),
    ["6RK"].concat(
        getSubStops(MNBD_SRPT, 'KALI MANDIR', 'SECRETARIATE'),
        SHD[557], SHD[371], SHD[687],
        getSubStops(DRFM_RMNG, 'BAGH LINGAMPALLY', 'VST'),
        SHD[1060],
        SHD[818],
    ),

    // 7 SERIES
    ["7Z"].concat(
        getSubStops(SHMB_KSR, 'ARAMGHAR', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getSubStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["7Z/251"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        SHD[220], SHD[507], SHD[4],
        getSubStops(MHRM_MDCL, "NAMPALLY", "TANK BUND"),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),

    // 8 SERIES
    ["8/37"].concat(
        SHD[525],
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], "AOC RECORDS", SHD[118], SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754],
        getSubStops(SRPT_MNBD, 'CLOCK TOWER', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'GANDHI BHAVAN')
    ),
    ["8A"].concat(
        getSubStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8AK"].concat(
        getSubStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8UA"].concat(
        getSubStops(TailsDOWN, 'UPPUGUDA', 'LAL DARWAJA'),
        getSubStops(MHRM_MDCL, "LAL DARWAJA X ROADS", "SECUNDERABAD")
    ),
    ["8A/85"].concat(
        getSubStops(MHRM_MDCL, "PAHADI SHARIF", "SECUNDERABAD")
    ),
    ["8A/178G"].concat(
        "GHOUSE NAGAR", "ISMAIL NAGAR", SHD[103],
        getSubStops(MHRM_MDCL, "CHANDRAYANGUTTA X ROADS", "SECUNDERABAD")
    ),
    ["8A/532"].concat(
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ'),
        getSubStops(MHRM_MDCL, "OSMANGUNJ", "SECUNDERABAD")
    ),
    ["8C"].concat(
        getSubStops(MHRM_MDCL, 'CHANDRAYANGUTTA X ROADS', 'AFZALGUNJ'),
        getSubStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8C/85P"].concat(
        getSubStops(MHRM_MDCL, 'PAHADI SHARIF', 'AFZALGUNJ'),
        getSubStops(GTKS_PTCR, 'OSMANGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        getSubStops(RMNG_DRFM, 'RANIGUNJ', 'SECUNDERABAD')
    ),
    ["8R"].concat(
        SHD[220],
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'PATNY CENTER'),
        getSubStops(MNBD_SRPT, 'PATNY', 'RISALA BAZAR')
    ),

    // 9 SERIES
    ["9A"].concat(
        "AG COLONY", "VIKASPURI COLONY", SHD[1054],
        getSubStops(PTCR_GTKS, 'SR NAGAR', 'CITY BUS STATION'),
    ),
    ["9F"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'CITY BUS STATION'),
    ),
    ["9K"].concat(
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9K/102"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["9K/230P"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220],
        SHD[11],
    ),
    ["9K/272G"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507], SHD[220], SHD[11]
    ),
    ["9X"].concat(
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/41C"].concat(
        getSubStops(DNGL_IBP, 'IDPL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/230P"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/272G"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9X/283D"].concat(
        "SURARAM COLONY", "SURARAM CIRCLE",
        getSubStops(DNGL_IBP, 'SURARAM', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'CITY BUS STATION'),
    ),
    ["9XM"].concat(
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        getSubStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9XM/230P"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'BALANAGAR'),
        getSubStops(BLNR_MLPT, 'FATHE NAGAR X ROADS', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["9YF"].concat(
        SHD[152],
        getSubStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getSubStops(PTCR_GTKS, 'AMEERPET', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 10 SERIES
    ["10"].concat(
        getSubStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10F"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10FV"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HA"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getSubStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HL"].concat(
        getSubStops(PTCR_GTKS, 'LINGAMPALLY', 'MADINAGUDA'),
        getSubStops(MDCL_ADBT, 'ALLWYN X ROADS', 'KONDAPUR'),
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HP"].concat(
        "PREM NAGAR",
        getSubStops(MDCL_ADBT, 'HAFEEZPET', 'KONDAPUR'),
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10HW"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getSubStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10J"].concat(
        getSubStops(PTCR_GTKS, "JNTU COLLEGE", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10JP"].concat(
        getSubStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE')
    ),
    ["10K"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KJ"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getSubStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10KL"].concat(
        getSubStops(PTCR_GTKS, "LINGAMPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    ["10KM"].concat(
        getSubStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10Y"].concat(
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF"].concat(
        SHD[152],
        getSubStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10YF/16S"].concat(
        getSubStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(MLPT_BLNR, 'YOUSUFGUDA CHECK POST', 'MOTHI NAGAR'),
        SHD[152]
    ),
    ["10W"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getSubStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["10H/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10H/18C"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'CHILKALGUDA X ROADS'),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        SHD[659], SHD[972], SHD[1100],
        getSubStops(BLNR_MLPT, 'YOUSUFGUDA CHECK POST', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["10KJ/18"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        getSubStops(CRPL_LGPL, "PATNY", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "KUKATPALLY"),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'JAGATHGIRIGUTTA')
    ),
    ["10K/250"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        SHD[536],
        SHD[36], SHD[892],
        getSubStops(GTKS_PTCR, 'MYTHRIVANAM', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_KPHB, 'KPHB TEMPLE', 'KPHB 4TH PHASE'),
    ),
    ["10KM/224G"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'LAND MARK TOWER'),
        getSubStops(PTCR_GTKS, "MIYAPUR X ROADS", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 11 SERIES
    ["11W"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'GACHIBOWLI X ROADS'),
        getSubStops(MLPT_BLNR, 'ANJAYYA NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "MYTHRIVANAM")
    ),

    // 14 SERIES
    ["14P"].concat(
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["14PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'MALKAJGIRI'),
        "SARDAR PATEL NAGAR",
        SHD[780],
        SHD[819],
        SHD[543],
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 15 SERIES
    ["15H"].concat(
        getSubStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["15D/20"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["15H/20"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'METTUGUDA'),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, "LALAPET", "KUSHAIGUDA")
    ),
    ["15H/242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getSubStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "LALAPET"),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, "LALAGUDA", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),

    // 16 SERIES
    ["16/20"].concat(
        getSubStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getSubStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),
    ["16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AK"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "VAYUPURI"),
        getSubStops(TailsUP, 'VINOBA NAGAR', 'KAKATHIYA NAGAR'),
        getSubStops(HCLX_GWRL, 'NEREDMET OLD PS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CR"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        getSubStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16ES"].concat(
        getSubStops(PTCR_GTKS, 'IRRUM MANZIL', 'LAKDI KA PUL'),
        getSubStops(MNBD_SRPT, 'TELEPHONE BHAVAN', 'PATNY CENTER'),
        SHD[760], SHD[448], "LAXMI NAGAR (PKT)",
        getSubStops(GWRL_HCLX, 'AOC CENTER', 'UTTAM NAGAR'),
        getSubStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16H"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        "TIRUMALA NAGAR", "NMDC (ANANDH BAGH)", SHD[264],
        getSubStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16NY"].concat(
        getSubStops(GTKS_KPHB, 'YAPRAL', 'AMMUGUDA BAZAR'),
        "DEFENCE COLLEGE", SHD[712], SHD[241],
        getSubStops(HCLX_GWRL, 'NEREDMET X ROADS', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16P"].concat(
        SHD[780], "SARDAR PATEL NAGAR",
        getSubStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16PX"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        SHD[543],
        SHD[819],
        SHD[780], "SARDAR PATEL NAGAR",
        getSubStops(HCLX_GWRL, 'MALKAJGIRI', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16A/5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/10H"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/20"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/47L"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        "PRASHASAN NAGAR",
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS")
    ),
    ["16A/281R"].concat(
        getSubStops(GTKS_KPHB, 'RTC COLONY (RMPLY)', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16AD/5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16C/5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/10H"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/38T"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        getSubStops(GWRL_HCLX, "ANANDH BAGH X ROADS", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/47L"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, "PANJAGUTTA", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16C/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16CD/5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CD/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, "KUSHAIGUDA", "NAGARAM"),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16CR/38T"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'UTTAM NAGAR'),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getSubStops(TailsUP, 'OLD SAFILGUDA', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS')
    ),
    ["16D/5K"].concat(
        getSubStops(MNBD_SRPT, "MEHDIPATNAM", "SANGEETH"),
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16D/24B"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, 'RADHIKA THEATER', 'NEW BRIDGE'),
        SHD[622],
        SHD[23],
        SHD[878],
        SHD[898]
    ),
    ["16D/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RADHIKA THEATER"),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["16H/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'ANANDH BAGH X ROADS'),
        SHD[264], "NMDC (ANANDH BAGH)", "TIRUMALA NAGAR",
        getSubStops(SHMB_KSR, 'ZTS X ROADS', 'ECIL X ROADS')
    ),
    ["16R/20"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, "CHILKALGUDA X ROADS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "RK NAGAR"),
        SHD[39],
        SHD[264], SHD[593], SHD[633], SHD[736], SHD[572], SHD[573], SHD[562],
        getSubStops(GWRL_HCLX, "AS RAO NAGAR", "ECIL X ROADS")
    ),
    ["16S/10YF"].concat(
        SHD[152],
        getSubStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "METTUGUDA"),
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "SAFILGUDA")
    ),

    // 17 SERIES
    ["17DH"].concat(
        getSubStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17DS"].concat(
        getSubStops(KPHB_GTKS, 'BALAJI NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, "NAGARAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getSubStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17DV"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        SHD[641],
        getSubStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17H"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17HN"].concat(
        getSubStops(KSR_SHMB, 'KUSHAIGUDA', 'HB COLONY'),
        getSubStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878],
        SHD[898]
    ),
    ["17H/29B"].concat(
        getSubStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17/219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD"),
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, "WHITE HOUSE", "ECIL X ROADS")
    ),
    ["17H/242"].concat(
        getSubStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["17CS"].concat(
        getSubStops(TailsDOWN, 'CHERLAPALLY', 'CHERLAPALLY JAIL'),
        getSubStops(KSR_SHMB, "CHAKRIPURAM", "TARNAKA"),
        SHD[993],
        SHD[641],
        getSubStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD"),
    ),
    ["17S"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        SHD[993],
        SHD[641],
        getSubStops(GWRL_HCLX, "SITAFALMANDI X ROADS", "SECUNDERABAD")
    ),
    ["17V"].concat(
        getSubStops(KSR_SHMB, "KUSHAIGUDA", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 18 SERIES
    ["18"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL DEPOT', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18B"].concat(
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/10H"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18J"].concat(
        SHD[448], SHD[754], SHD[898],
        getSubStops(DNGL_IBP, 'ALUGADDA BHAVI', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18R"].concat(
        SHD[448], SHD[754], SHD[898],
        getSubStops(DNGL_IBP, 'ALUGADDA BHAVI', 'NGRI'),
    ),
    ["18V"].concat(
        getSubStops(IBP_DNGL, 'NGRI', 'SECUNDERABAD')
    ),
    ["18VJ"].concat(
        SHD[448], SHD[754], SHD[898],
        getSubStops(DNGL_IBP, 'ALUGADDA BHAVI', 'NGRI'),
    ),
    ["18/10KJ"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getSubStops(PTCR_GTKS, "KUKATPALLY", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "PATNY"),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL DEPOT')
    ),
    ["18/47U"].concat(
        getSubStops(LGPL_CRPL, "PANJAGUTTA", "PATNY"),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'BODUPPAL X ROADS')
    ),
    ["18/272G"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["18/283S"].concat(
        getSubStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getSubStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["18C/30"].concat(
        getSubStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        "SIKH VILLAGE",
        getSubStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["18C/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, "BOWENPALLY X ROADS", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "CHENGI CHERLA X ROADS"),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),

    // 19 SERIES
    ["19F"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19K/288D"].concat(
        SHD[209], SHD[1026],
        getSubStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getSubStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'KUKATPALLY')
    ),
    ["19KJ"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19KM"].concat(
        getSubStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19M"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19MP"].concat(
        getSubStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S"].concat(
        getSubStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19YF"].concat(
        SHD[152],
        getSubStops(BLNR_MLPT, 'MOTHI NAGAR', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[1116], SHD[1114], SHD[1115],
        getSubStops(PTCR_GTKS, 'AMEERPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["19S/505"].concat(
        getSubStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'SANATH NAGAR')
    ),

    // 20 SERIES
    ["20P"].concat(
        getSubStops(TailsDOWN, 'NAMPALLY', 'NTR STADIUM'),
        getSubStops(RMNG_DRFM, 'ASHOK NAGAR X ROADS', 'KALPANA'),
        getSubStops(TailsDOWN, 'BHOLAKPUR', 'PADMARAO NAGAR'),
        SHD[207], SHD[898]
    ),
    ["20/15D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'MEHDIPATNAM')
    ),
    ["20/15H"].concat(
        getSubStops(KSR_SHMB, 'KUSHAIGUDA', 'LALAPET'),
        SHD[917],
        SHD[719],
        getSubStops(HCLX_GWRL, 'LALAGUDA', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, 'METTUGUDA', 'CHILKALGUDA X ROADS'),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/16"].concat(
        getSubStops(HCLX_GWRL, "SAFILGUDA", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(GTKS_PTCR, 'LAKDI KA PUL', 'IRRUM MANZIL')
    ),
    ["20/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["20/16R"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "AS RAO NAGAR"),
        SHD[562], SHD[573], SHD[572], SHD[736], SHD[633], SHD[593], SHD[264],
        SHD[39],
        getSubStops(HCLX_GWRL, "RK NAGAR", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),
    ["20/280"].concat(
        getSubStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "CHILKALGUDA X ROADS"),
        getSubStops(SECB_SKPL, 'BOIGUDA', 'MUSHEERABAD'),
        SHD[131], SHD[777], SHD[473],
        getSubStops(SRPT_MNBD, 'TANK BUND', 'SECRETARIATE')
    ),

    // 21 SERIES
    ["21W"].concat(
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 22 SERIES
    ["22"].concat(
        getSubStops(SRPT_MNBD, 'HAKIMPET', 'SECUNDERABAD')
    ),
    ["22/90L"].concat(
        SHD[747],
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        getSubStops(MNBD_SRPT, 'PATNY', 'HAKIMPET')
    ),
    ["22D"].concat(
        SHD[612], SHD[14], SHD[10], SHD[9],
        getSubStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),
    ["22K"].concat(
        SHD[169], SHD[134], SHD[9],
        getSubStops(SRPT_MNBD, 'KOWKOOR X ROADS', 'SECUNDERABAD')
    ),

    // 23 SERIES
    ["23B"].concat(
        SHD[132], SHD[974],
        getSubStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BK"].concat(
        SHD[516], SHD[132], SHD[974],
        getSubStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23BS"].concat(
        SHD[976], SHD[561], SHD[516], SHD[132], SHD[974],
        getSubStops(MDCL_MHRM, 'SUBHASH NAGAR X ROADS', 'DGQA QUARTERS'),
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23GF"].concat(
        getSubStops(MDCL_MHRM, 'GREEN FIELDS COLONY', 'TEACHERS COLONY'),
        getSubStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23GS"].concat(
        SHD[976], SHD[561],
        getSubStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'TEACHERS COLONY'),
        getSubStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),
    ["23K"].concat(
        getSubStops(MDCL_MHRM, 'KISTAMMA ENCLAVE', 'DGQA QUARTERS'),
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["23T"].concat(
        SHD[998], SHD[745], SHD[429],
        getSubStops(MDCL_MHRM, 'KANJIGUDA', 'TEACHERS COLONY'),
        getSubStops(SRPT_MNBD, 'LAL BAZAR', 'SECUNDERABAD')
    ),

    // 24 SERIES
    ["24"].concat(
        getSubStops(GTKS_KPHB, 'YAPRAL', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B"].concat(
        getSubStops(GTKS_KPHB, 'BALAJI NAGAR', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BA"].concat(
        getSubStops(GTKS_KPHB, 'AMBEDKAR NAGAR', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24BJ"].concat(
        "BJR NAGAR",
        getSubStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24E"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        "VAYUPURI NORTH", SHD[996], SHD[712], "DEFENCE COLLEGE",
        getSubStops(GTKS_KPHB, 'AMMUGUDA BAZAR', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'PATNY'),
        SHD[878], SHD[898]
    ),
    ["24S"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24SS"].concat(
        getSubStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),
    ["24B/16D"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'RADHIKA THEATER'),
        getSubStops(TailsUP, 'SRI RAM NAGAR COLONY', 'DAMMAIGUDA'),
        getSubStops(GTKS_KPHB, 'DAMMAIGUDA X ROADS', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24B/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'LAL BAZAR'),
        getSubStops(SRPT_MNBD, 'TIRUMALAGIRI', 'SECUNDERABAD')
    ),
    ["24J"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54], "ECHS POLYCLINIC", SHD[1016],
        getSubStops(SRPT_MNBD, 'HANUMAN TEMPLE', 'SECUNDERABAD')
    ),
    ["24L/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["24S/273"].concat(
        SHD[305],
        getSubStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getSubStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'LAL BAZAR'),
        SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 25 SERIES
    ["25A"].concat(
        getSubStops(TailsDOWN, 'SURYA NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ"].concat(
        getSubStops(TailsUP, 'JONNABANDA', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25AJ/M"].concat(
        getSubStops(TailsUP, 'GOPAL NAGAR', 'SURYA NAGAR X ROADS'),
        SHD[30],
        "VBR GARDENS",
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25M"].concat(
        getSubStops(TailsDOWN, 'GOPAL NAGAR', 'SELECT TALKIES'),
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25MS"].concat(
        getSubStops(TailsDOWN, 'SHARAN NAGAR', 'SANJEEVA GARDENS'),
        getSubStops(TailsDOWN, 'GOPAL NAGAR X ROADS', 'SELECT TALKIES'),
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25P"].concat(
        "PANCHASHEELA ENCLAVE", "CITIZEN COLONY", "VBR GARDENS",
        getSubStops(KPHB_GTKS, 'IG STATUE', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S"].concat(
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/1"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/1P"].concat(
        getSubStops(SHMB_KSR, "AFZALGUNJ", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "MUSHEERABAD"),
        "GANDHI HOSPITAL BACKSIDE", SHD[743], SHD[207], SHD[898],
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/2"].concat(
        getSubStops(PTCR_GTKS, 'AFZALGUNJ', 'CHADERGHAT X ROADS'),
        SHD[708],
        getSubStops(SHMB_KSR, 'KACHEGUDA STATION', 'SHANKARMUTT'),
        SHD[1075], SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD'),
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA')
    ),
    ["25S/227"].concat(
        SHD[305],
        getSubStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getSubStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),
    ["25S/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'JEEDIMETLA VILLAGE'),
        getSubStops(KPHB_GTKS, 'SUCHITRA', 'ALWAL'),
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 26 SERIES
    ["26M"].concat(
        getSubStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getSubStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["26M/49M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PARADISE'),
        SHD[755],
        getSubStops(TailsUP, 'MUD FORT', 'OLD BOWENPALLY')
    ),
    ["26N"].concat(
        getSubStops(TailsDOWN, 'OLD BOWENPALLY', 'ASHOK GARDENS'),
        "BAPUJI NAGAR", "CENTER POINT", "DIAMOND POINT", "MUD FORT",
        getSubStops(MDCL_MHRM, 'PARADISE', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),

    // 29 SERIES
    ["29B"].concat(
        getSubStops(DNGL_IBP, "JEEDIMETLA", "SECUNDERABAD")
    ),
    ["29B/17H"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "JEEDIMETLA")
    ),
    ["29B/272G"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["29B/272I"].concat(
        SHD[407],
        SHD[1046],
        getSubStops(DNGL_IBP, "BAHUDURPALLY X ROADS", "SECUNDERABAD")
    ),
    ["29S"].concat(
        "SUBHASH NAGAR (JDM)",
        getSubStops(DNGL_IBP, "SHAHPUR NAGAR", "SECUNDERABAD")
    ),
    ["29Q"].concat(
        SHD[792], SHD[214],
        getSubStops(DNGL_IBP, "CHINTAL", "BALANAGAR")
    ),

    // 30 SERIES
    ["30"].concat(
        getSubStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getSubStops(DNGL_IBP, 'PARADISE', 'SECUNDERABAD')
    ),
    ["30S"].concat(
        SHD[969], SHD[541], SHD[531], SHD[512], SHD[271],
        getSubStops(BLNR_MLPT, 'BEERAPPA NAGAR', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getSubStops(DNGL_IBP, 'PARADISE', 'SECUNDERABAD')
    ),
    ["30/18C"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),
    ["30/280"].concat(
        getSubStops(GTKS_PTCR, "GHATKESAR", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "PARADISE"),
        SHD[141],
        getSubStops(IBP_DNGL, 'TARBUND', 'WATER TANK'),
        getSubStops(MLPT_BLNR, 'IDPL', 'JAGATHGIRIGUTTA')
    ),

    // 31 SERIES
    ["31P"].concat(
        getSubStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'SECUNDERABAD')
    ),

    // 37 SERIES
    ["37"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SAINIKPURI X ROADS'),
        "VAYUPURI NORTH", "SHOPPING COMPLEX", SHD[712], SHD[241], SHD[698], SHD[317], SHD[850], SHD[118], "AOC GATE", SHD[210], SHD[1102], SHD[1011], SHD[1074], SHD[754], SHD[878], SHD[898]
    ),
    ["37/8"].concat(
        getSubStops(GTKS_PTCR, 'GANDHI BHAVAN', 'ASSEMBLY'),
        SHD[139],
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'BATA'),
        SHD[761], SHD[760],
        SHD[754], SHD[1011], SHD[1102], SHD[210], "AOC GATE", SHD[118], SHD[850], SHD[317], SHD[698], SHD[241], SHD[712], "SHOPPING COMPLEX", "VAYUPURI NORTH",
        getSubStops(GWRL_HCLX, 'SAINIKPURI X ROADS', 'ECIL X ROADS'),
        SHD[525],
    ),

    // 38 SERIES
    ["38EX"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'SHENOY'),
        "ADDAGUTTA", "ADDAGUTTA", "NANDANA NAGAR",
        getSubStops(HCLX_GWRL, 'TUKARAM GATE', 'SECUNDERABAD')
    ),
    ["38X"].concat(
        getSubStops(GWRL_HCLX, 'SECUNDERABAD', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T"].concat(
        SHD[1027],
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'ANANDH BAGH X ROADS'),
        getSubStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),
    ["38T/16CR"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'OLD SAFILGUDA'),
        "BHARATH NAGAR (MLY)", "SHAFI NAGAR", "SITI NAGAR", "RTC COLONY (MLY)",
        "TIRUMALA NAGAR", "NMDC (ANANDH BAGH)", SHD[264],
        SHD[39],
        getSubStops(GWRL_HCLX, 'UTTAM NAGAR', 'TUKARAM GATE'),
        "NANDANA NAGAR", "ADDAGUTTA", "ADDAGUTTA",
        getSubStops(HCLX_GWRL, 'SHENOY', 'SECUNDERABAD')
    ),

    // 40 SERIES
    ["40"].concat(
        SHD[506], SHD[508], SHD[813],
        getSubStops(RMNG_DRFM, 'NATIONAL DARBAR', 'BIBLE HOUSE'),
        getSubStops(MHRM_MDCL, 'BATA', 'CLOCK TOWER'),
        SHD[898]
    ),

    // 41 SERIES
    ["41C/9X"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'IDPL')
    ),

    // 45 SERIES
    ["45F"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, "ERRAGADDA", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "PARADISE"),
        getSubStops(DRFM_RMNG, 'PARADISE CENTER', 'KALPANA'),
        SHD[131],
        getSubStops(SECB_SKPL, "MUSHEERABAD", "KOTI WOMENS COLLEGE"),
        SHD[506]
    ),

    // 46 SERIES
    ["46"].concat(
        SHD[759],
        getSubStops(LGPL_CRPL, "POLICE LINES", "SECUNDERABAD"),
    ),

    // 47 SERIES
    ["47D/224"].concat(
        SHD[795],
        getSubStops(MDCL_ADBT, 'MIYAPUR DEPOT', 'MIYAPUR X ROADS'),
        getSubStops(PTCR_GTKS, 'MIYAPUR METRO STATION', 'PANJAGUTTA'),
        SHD[752],
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794], SHD[908]
    ),
    ["47L"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, 'PANJAGUTTA', 'SECUNDERABAD'),
    ),
    ["47L/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47L/16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'PANJAGUTTA'),
        getSubStops(KOTI_MCRL, 'ANDHRA JYOTHI', 'FILM NAGAR'),
        SHD[794],
        getSubStops(TailsUP, 'SHAIKPET DARGAH', 'MANIKONDA')
    ),
    ["47Y"].concat(
        getSubStops(TailsDOWN, 'MANIKONDA', 'SHAIKPET DARGAH'),
        SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'JOURNLIST COLONY'),
        getSubStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),
    ["47YM"].concat(
        getSubStops(MCRL_KOTI, 'MANCHIREVULA', 'JOURNLIST COLONY'),
        getSubStops(MLPT_BLNR, 'JUBLIE HILLS CHECK POST', 'YOUSUFGUDA CHECK POST'),
        SHD[1100], SHD[513], SHD[1054],
        getSubStops(PTCR_GTKS, "SR NAGAR", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "SECUNDERABAD")
    ),

    // 49 SERIES
    ["49"].concat(
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getSubStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getSubStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49A"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        SHD[95],
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getSubStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getSubStops(LGPL_CRPL, 'GREEN LANDS', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49/250"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'GREEN LANDS'),
        getSubStops(TailsUP, 'SOMAJIGUDA', 'RAJ BHAVAN'),
        getSubStops(PTCR_GTKS, 'KHAIRATHABAD', 'NAMPALLY')
    ),
    ["49M/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16C"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16CD"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'SHARADA'),
        getSubStops(TailsDOWN, 'OFFICERs COLONY', 'VINAYAK NAGAR GATE'),
        getSubStops(HCLX_GWRL, 'VINAYAK NAGAR (NEREDMET)', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'DAMMAIGUDA X ROADS'),
        getSubStops(TailsDOWN, 'DAMMAIGUDA', 'SRI RAM NAGAR COLONY'),
        getSubStops(HCLX_GWRL, "RADHIKA THEATER", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/16H"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'ZTS X ROADS'),
        SHD[633], SHD[593], SHD[264],
        getSubStops(HCLX_GWRL, 'ANANDH BAGH X ROADS', 'NEW BRIDGE'),
        getSubStops(IBP_DNGL, "METTUGUDA", "CHILKALGUDA X ROADS"),
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "MEHDIPATNAM")
    ),
    ["49M/26M"].concat(
        getSubStops(TailsDOWN, 'OLD BOWENPALLY', 'SIKH VILLAGE'),
        getSubStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM')
    ),
    ["49M/92A"].concat(
        getSubStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PATNY'),
        getSubStops(MHRM_MDCL, 'MOTHER TERESA STATUE', 'SECUNDERABAD')
    ),
    ["49M/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'TARBUND'),
        getSubStops(CRPL_LGPL, 'PARADISE', 'MEHDIPATNAM'),
    ),
    ["49M/250"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),
    ["49M/250C"].concat(
        getSubStops(CRPL_LGPL, 'CHERLAPALLY', 'MEHDIPATNAM')
    ),
    ["49M/250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'MEHDIPATNAM')
    ),

    // 65 SERIES
    ["65/116GA"].concat(
        getSubStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getSubStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),
    ["65MG"].concat(
        SHD[319], SHD[582],
        getSubStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),
    ["65/116GA"].concat(
        getSubStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getSubStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION'),
    ),
    ["65M/123"].concat(
        getSubStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getSubStops(LGPL_CRPL, 'SHAIKPET NALA', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
    ),

    // 66 SERIES
    ["66G"].concat(
        SHD[319], SHD[582],
        getSubStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHARMINAR')
    ),

    // 71 SERIES
    ["71A"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, 'CHENGI CHERLA X ROADS', 'AFZALGUNJ')
    ),
    ["71K"].concat(
        SHD[454],
        getSubStops(GTKS_PTCR, 'KACHEGUDA KAMELA', 'AFZALGUNJ')
    ),

    // 72 SERIES
    ["72"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getSubStops(KTGD_LGRH, 'KOTHAPET', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11], "HIGH COURT"
    ),
    ["72/277D"].concat(
        getSubStops(IBP_DNGL, 'IBRAHIMPATNAM', 'LB NAGAR X ROADS'),
        getSubStops(KTGD_LGRH, 'LB NAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72H"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72HK"].concat(
        getSubStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR COLONY'),
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72J"].concat(
        SHD[237], SHD[858], SHD[424],
        getSubStops(GWRL_HCLX, 'BANDLAGUDA (NAGOLE)', 'CHAITANYAPURI'),
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11],
    ),
    ["72V"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'CHADERGHAT'),
        SHD[624], SHD[238], SHD[11]
    ),

    // 83 SERIES
    ["83J"].concat(
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getSubStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83JA"].concat(
        getSubStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getSubStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),
    ["83J/272G"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        SHD[557],
        getSubStops(TailsDOWN, 'HYDERGUDA', 'KACHEGUDA STATION'),
    ),

    // 85 SERIES
    ["85/8A"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "PAHADI SHARIF")
    ),
    ["85P/8C"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(SRPT_MNBD, 'TANK BUND', 'BIRLA MANDIR'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'OSMANGUNJ'),
        getSubStops(MDCL_MHRM, 'AFZALGUNJ', 'PAHADI SHARIF')
    ),
    ["85/253L"].concat(
        getSubStops(OSK_Stops_DOWN, 'ANOJIGUDA (KNDKR)', 'THUMMALOOR ROAD'),
        getSubStops(MHRM_MDCL, 'MAHESHWARAM GATE', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["85V"].concat(
        "VENKATAPUR", "BISMILLAH COLONY", "KOTHAPET(SALALA)",
        getSubStops(MHRM_MDCL, "BARKAS X ROADS", "SHAH ALI BANDA"),
        SHD[193]
    ),

    // 86 SERIES
    ["86A"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getSubStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getSubStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86C"].concat(
        getSubStops(SHMB_KSR, 'CITY BUS STATION', 'RAM KOTI X ROADS'),
        getSubStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getSubStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86J"].concat(
        getSubStops(LGRH_KTGD, 'JIYAGUDA KHT', 'AFZALGUNJ'),
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'RAM KOTI X ROADS'),
        getSubStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getSubStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),
    ["86K"].concat(
        SHD[506],
        getSubStops(SHMB_KSR, 'KOTI WOMENS COLLEGE', 'RAM KOTI X ROADS'),
        getSubStops(DRFM_RMNG, 'YMCA', 'RAM NAGAR (E SEVA)'),
        getSubStops(GWRL_HCLX, 'RAM NAGAR GUNDU', 'SECUNDERABAD')
    ),


    // 90 SERIES
    ["90/253T"].concat(
        "FAB CITY", "SREE NAGAR",
        getSubStops(MHRM_MDCL, 'THUKKUGUDA', 'KESHAVAGIRI POST OFFICE'),
        getSubStops(SKPL_SECB, 'CHANDRAYANGUTTA X ROADS', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["90/300"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90B"].concat(
        getSubStops(GWRL_HCLX, 'BANDLAGUDA DEPOT', 'OLD NAGOLE'),
        getSubStops(IBP_DNGL, "NAGOLE X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90BE"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'MIDHANI COMPANY'),
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "HABSIGUDA"),
        getSubStops(SHMB_KSR, 'TARNAKA', 'ECIL X ROADS')
    ),
    ["90L"].concat(
        SHD[448],
        SHD[754],
        getSubStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS")
    ),
    ["90LK"].concat(
        getSubStops(SHMB_KSR, "KACHEGUDA STATION", "MANIKESHWAR NAGAR"),
        getSubStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS")
    ),
    ["90DL"].concat(
        getSubStops(LGRH_KTGD, "DILSHUKNAGAR", "LB NAGAR"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["90LV"].concat(
        SHD[448],
        SHD[754],
        getSubStops(DNGL_IBP, "SECUNDERABAD", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'PANAMA'),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),
    ["90L/3K"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'TARNAKA'),
        getSubStops(DNGL_IBP, "TARNAKA", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/22"].concat(
        getSubStops(SRPT_MNBD, 'HAKIMPET', 'PATNY'),
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        SHD[747]
    ),
    ["90L/229"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'LB NAGAR X ROADS')
    ),
    ["90L/251"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getSubStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD")
    ),
    ["90UN"].concat(
        SHD[1038], SHD[672],
        getSubStops(GWRL_HCLX, 'NAGOLE X ROADS', 'DILSHUKNAGAR')
    ),
    ["90U/203U"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),

    // 92 SERIES
    ["92A"].concat(
        SHD[620], getSubStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/5K"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "ARAMGHAR")
    ),
    ["92A/49M"].concat(
        getSubStops(CRPL_LGPL, 'SECUNDERABAD', 'MEHDIPATNAM'),
        getSubStops(SKPL_SECB, 'RETHIBOWLI', 'ARAMGHAR')
    ),
    ["92K"].concat(
        getSubStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getSubStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getSubStops(SECB_SKPL, 'ARAMGHAR', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["92R"].concat(
        SHD[620],
        getSubStops(SKPL_SECB, 'RETHIBOWLI', 'DAIRY FARM (CNTLMT)'),
        getSubStops(DRFM_RMNG, 'NPPTI', 'RAJENDRA NAGAR VILLAGE'),
        SHD[807]
    ),

    // 94 SERIES
    ["94R"].concat(
        SHD[807],
        getSubStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getSubStops(TailsDOWN, 'CHINTALMET', 'KISHAN BAGH'),
        getSubStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["94RM"].concat(
        SHD[807],
        getSubStops(RMNG_DRFM, 'RAJENDRA NAGAR VILLAGE', 'DAIRY FARM (CNTLMT)'),
        getSubStops(TailsDOWN, 'CHINTALMET', '9 NUMBER'),
        SHD[942], SHD[342],
        getSubStops(SHMB_KSR, 'BAHUDURPURA', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 95 SERIES
    ["95"].concat(
        getSubStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),
    ["95/3K"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "ARAMGHAR")
    ),
    ["95/3KN"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "HB COLONY"),
        getSubStops(CRPL_LGPL, "NOMA", "TARNAKA"),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "ARAMGHAR")
    ),
    ["95K"].concat(
        getSubStops(TailsDOWN, 'SRI RAM COLONY', 'KATEDAN'),
        getSubStops(SECB_SKPL, 'DURGA NAGAR', 'BABUL REDDY NAGAR'),
        getSubStops(SHMB_KSR, 'ARAMGHAR', 'CITY BUS STATION'),
        SHD[507]
    ),

    // 100 SERIES
    ["100/299"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI MEDICAL COLLEGE"),
        getSubStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100V"].concat(
        getSubStops(TailsDOWN, 'NGOs COLONY', 'RED TANK'),
        getSubStops(TailsDOWN, 'GANESH TEMPLE', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, "PANAMA", "KOTI MEDICAL COLLEGE"),
        getSubStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),
    ["100M"].concat(
        "SATYA NAGAR", "NEW MARUTHI NAGAR", "MARUTHI NAGAR(DSNR)",
        getSubStops(KTGD_LGRH, "KOTHAPET", "KOTI MEDICAL COLLEGE"),
        getSubStops(ADBT_MDCL, 'ABIDS GPO', 'ASSEMBLY'),
        SHD[139], SHD[897]
    ),

    // 102 SERIES
    ["102"].concat(
        SHD[628],
        getSubStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102/3K"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/9K"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/185"].concat(
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'MIDHANI COMPANY')
    ),
    ["102/253L"].concat(
        getSubStops(OSK_Stops_DOWN, 'LEMOOR', 'SARASWATHIGUDA'),
        getSubStops(MHRM_MDCL, 'LEMOOR ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getSubStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getSubStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["102B/3K"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102B/203N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SKPL_SECB, "RAM KOTI X ROADS", "SECUNDERABAD")
    ),
    ["102B/218"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'BADANGPET')
    ),
    ["102M"].concat(
        getSubStops(TailsDOWN, 'BALAPUR VILLAGE', 'SAI NAGAR'),
        getSubStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 103 SERIES
    ["103"].concat(
        getSubStops(TailsDOWN, 'RCI', 'VIJAY DURGA NAGAR'),
        getSubStops(TailsDOWN, 'SHIVAJI CHOWK', 'SAI NAGAR'),
        getSubStops(ADBT_MDCL, 'BALAPUR X ROADS', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 104 SERIES
    ["104A"].concat(
        getSubStops(ADBT_MDCL, 'RAJIV GRUHA KALPA', 'KOTI WOMENS COLLEGE')
    ),
    ["104R"].concat(
        getSubStops(MDCL_ADBT, 'RN REDDY', 'RTC COLONY(CHAMPAPET)'),
        getSubStops(ADBT_MDCL, 'CHAMPAPET', 'KOTI WOMENS COLLEGE')
    ),

    // 105 SERIES
    ["105"].concat(
        SHD[897], SHD[139],
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'SAIDABAD'),
        SHD[336], SHD[978]
    ),

    // 107 SERIES
    ["107JD"].concat(
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JL"].concat(
        getSubStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107JS"].concat(
        getSubStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
        getSubStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'SECUNDERABAD')
    ),
    ["107VL"].concat(
        getSubStops(KTGD_LGRH, 'LB NAGAR X ROADS', 'CHAITANYAPURI'),
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VR"].concat(
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),
    ["107VS"].concat(
        getSubStops(TailsDOWN, 'SAROOR NAGAR', 'HUDA COLONY (SAROORNAGAR)'),
        getSubStops(KTGD_LGRH, 'KOTHAPET X ROADS', 'CHAITANYAPURI'),
        getSubStops(GWRL_HCLX, 'DILSHUKNAGAR', 'RAM NAGAR GUNDU'),
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167],
        getSubStops(SKPL_SECB, 'RTC X ROADS', 'SECUNDERABAD')
    ),

    // 113 SERIES
    ["113F"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113K"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KL"].concat(
        getSubStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113KM"].concat(
        getSubStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113S"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE')
    ),
    ["113W"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getSubStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113M/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'FIVER HOSPITAL'),
        getSubStops(TailsUP, 'BARKATPURA', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),
    ["113M/288"].concat(
        getSubStops(MNBD_SRPT, 'MOINABAD', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'AMBERPET', 'UPPAL')
    ),
    ["113FT"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getSubStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getSubStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113KLT"].concat(
        getSubStops(PTCR_GTKS, 'LINGAMPALLY', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getSubStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getSubStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113KT"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, 'KPHB MAIN ROAD', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(GWRL_HCLX, 'SYNDICATE BANK', 'SHIVAM ROAD'),
        getSubStops(SHMB_KSR, 'VIDYA NAGAR', 'TARNAKA'),
        getSubStops(DNGL_IBP, 'TARNAKA', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'UPPAL')
    ),
    ["113FZ"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'KHAIRATHABAD'),
        getSubStops(MNBD_SRPT, 'LAKDI KA PUL', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'GOLNAKA', 'CHENGI CHERLA X ROADS'),
        getSubStops(TailsUP, 'AYODHYA COLONY', 'CHENGI CHERLA')
    ),
    ["113MZ"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'CHEY NUMBER'),
        getSubStops(PTCR_GTKS, 'GOLNAKA', 'UPPAL')
    ),

    // 116 SERIES
    ["116GA/65"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'KHAJAGUDA X ROADS'),
        getSubStops(TailsUP, 'LANCO HILLS', 'GOWLI DHODDI')
    ),
    ["116N"].concat(
        getSubStops(TailsDOWN, 'GOWLI DHODDI', 'LANCO HILLS'),
        getSubStops(LGPL_CRPL, 'KHAJAGUDA X ROADS', 'MEHDIPATNAM'),
        getSubStops(MCRL_KOTI, 'MEHDIPATNAM', 'KOTI MEDICAL COLLEGE'),
    ),

    // 117 SERIES
    ["117"].concat(
        SHD[525],
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'NACHARAM X ROADS'),
        getSubStops(TailsUP, 'NACHARAM IDA', 'UPPAL')
    ),

    // 118 SERIES
    ["118W/300"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getSubStops(CRPL_LGPL, 'NANAL NAGAR', 'GACHIBOWLI DLF'),
        getSubStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 119 SERIES
    ["119M"].concat(
        SHD[319], SHD[582],
        getSubStops(SKPL_SECB, 'RAMDEV GUDA', 'RETHIBOWLI'),
        SHD[620]
    ),

    // 120 SERIES
    ["120"].concat(
        SHD[711], SHD[306],
        getSubStops(SKPL_SECB, 'GANDIPET X ROAD', 'RETHIBOWLI'),
        SHD[620]
    ),

    // 123 SERIES
    ["123"].concat(
        getSubStops(MCRL_KOTI, 'MANCHIREVULA X ROADS', 'DREAM VALLY'),
        "FRIENDS COLONY", "VINAYAK NAGAR (SHKPT)", SHD[907],
        getSubStops(LGPL_CRPL, 'SHAIKPET NALA', 'MEHDIPATNAM')
    ),
    ["123/65M"].concat(
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ASSEMBLY'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'SHAIKPET NALA'),
        SHD[907], "VINAYAK NAGAR (SHKPT)", "FRIENDS COLONY",
        getSubStops(KOTI_MCRL, 'DREAM VALLY', 'MANCHIREVULA X ROADS')
    ),

    // 125 SERIES
    ["125/5K"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "MEHDIPATNAM"),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'CYBER GATEWAY'),
        getSubStops(BLNR_MLPT, 'CYBER TOWERS', 'KOTHAGUDA X ROADS'),
        SHD[496]
    ),

    // 126 SERIES
    ["126/300"].concat(
        SHD[552],
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        getSubStops(CRPL_LGPL, 'NANAL NAGAR', 'BIO DIVERSITY'),
        getSubStops(BLNR_MLPT, 'MIND SPACE', 'JNTU COLLEGE')
    ),
    ["126M"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'MEHDIPATNAM'),
    ),

    // 127 SERIES
    ["127K"].concat(
        getSubStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getSubStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getSubStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),
    ["127KL"].concat(
        getSubStops(KTGD_LGRH, 'LB NAGAR', 'KOTI WOMENS COLLEGE'),
        getSubStops(ADBT_MDCL, 'KOTI BUS STATION', 'JOURNLIST COLONY'),
        getSubStops(TailsUP, 'ROAD NO. 45', 'AOU UNIVERSITY'),
        getSubStops(ADBT_MDCL, 'MADHAPUR PS', 'KONDAPUR')
    ),

    // 147 SERIES
    ["147"].concat(
        getSubStops(MDCL_ADBT, 'KONDAPUR', 'JUBLIE HILLS CHECK POST'),
        getSubStops(MCRL_KOTI, 'LV PRASAD', 'ANDHRA JYOTHI'),
        getSubStops(LGPL_CRPL, 'PANJAGUTTA', 'PARADISE'),
        getSubStops(MNBD_SRPT, 'PATNY', 'HANUMAN TEMPLE'),
        SHD[1016], SHD[923], SHD[54], SHD[850], SHD[317],
        getSubStops(GWRL_HCLX, 'NEREDMET X ROADS', 'ECIL X ROADS')
    ),

    // 156 SERIES
    ["156/299"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156/505"].concat(
        getSubStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["156L"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'LB NAGAR X ROADS')
    ),
    ["156S"].concat(
        "SAI NAGAR", "SAI BABA TEMPLE", "SAMA NAGAR X ROADS", "NARSIMHARAO NAGAR",
        getSubStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM')
    ),
    ["156V"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 158 SERIES
    ["158"].concat(
        getSubStops(PTCR_GTKS, 'ESI HOSPITAL', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158FL"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["158HF"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["158VF"].concat(
        SHD[152],
        getSubStops(MLPT_BLNR, 'MOTHI NAGAR', 'PANDURANGA NAGAR'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'PANAMA'),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'GANESH TEMPLE'),
        getSubStops(TailsUP, 'RED TANK', 'NGOs COLONY')
    ),

    // 171 SERIES
    ["171"].concat(
        getSubStops(KPHB_GTKS, "GAJULA RAMARAM", 'NLB NAGAR'),
        getSubStops(DNGL_IBP, "GAJULA RAMARAM X ROADS", "SECUNDERABAD")
    ),
    ["171K"].concat(
        SHD[510],
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["171K/219"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KPHB MAIN ROAD'),
        getSubStops(BLNR_MLPT, 'VIVEKA NANDA NAGAR', 'BEERAPPA NAGAR'),
        SHD[905]
    ),
    ["171M/189M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', SHD[298]),
        getSubStops(GTKS_KPHB, 'NLB NAGAR', 'GAJULA RAMARAM')
    ),
    ["171R"].concat(
        SHD[960],
        getSubStops(KPHB_GTKS, 'SRI NIWAS NAGAR', 'NLB NAGAR'),
        getSubStops(DNGL_IBP, SHD[298], "SECUNDERABAD")
    ),

    // 178 SERIES
    ["178G/8A"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "CHANDRAYANGUTTA X ROADS"),
        SHD[103], "ISMAIL NAGAR", "GHOUSE NAGAR"
    ),

    // 183 SERIES
    ["183B"].concat(
        getSubStops(IBP_DNGL, 'BALANAGAR', 'JEEDIMETLA')
    ),
    ["183SS"].concat(
        getSubStops(KPHB_GTKS, 'SHAHPUR NAGAR', 'SUCHITRA')
    ),

    // 185 SERIES
    ["185G"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'CITY BUS STATION')
    ),
    ["185/102"].concat(
        getSubStops(ADBT_MDCL, 'MIDHANI COMPANY', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'KUKATPALLY'),
    ),

    // 188 SERIES
    ["188"].concat(
        getSubStops(MNBD_SRPT, "KALI MANDIR", "MEHDIPATNAM")
    ),
    ["188/5K"].concat(
        getSubStops(SRPT_MNBD, "SECUNDERABAD", "KALI MANDIR")
    ),
    ["188/251"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'ARAMGHAR'),
        getSubStops(SECB_SKPL, 'SHIVARAMPALLY X ROADS', 'LAL DHABA'),
        getSubStops(DRFM_RMNG, 'DAIRY FARM (CNTLMT)', 'SAI RAM NAGAR (SUNCITY)'),
        getSubStops(MNBD_SRPT, 'TK BRIDGE', 'MEHDIPATNAM')
    ),

    // 189 SERIES
    ["189M"].concat(
        getSubStops(TailsDOWN, 'APUROOPA COLONY', 'JANAPRIYA SAINEST'),
        getSubStops(DNGL_IBP, 'JEEDIMETLA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/171M"].concat(
        getSubStops(KPHB_GTKS, 'GAJULA RAMARAM', 'NLB NAGAR'),
        getSubStops(DNGL_IBP, SHD[298], 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),
    ["189M/272G"].concat(
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'BALANAGAR'),
        SHD[1087],
        getSubStops(PTCR_GTKS, 'MOOSAPET', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM')
    ),

    // 195 SERIES
    ["195G"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GJ"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195GK"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'INFOTECH'),
        "KOKAPET ORR", "GAR (KOKAPET)"
    ),
    ["195J"].concat(
        getSubStops(MLPT_BLNR, 'JAGATHGIRIGUTTA', 'VIVEKA NANDA NAGAR'),
        SHD[510],
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195W"].concat(
        getSubStops(MLPT_BLNR, 'BACHUPALLY X ROADS', 'WAVEROCK')
    ),
    ["195WJ"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),
    ["195WP"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'KAISAR NAGAR'),
        getSubStops(TailsDOWN, 'PRAGATHI NAGAR', 'JNTU COLLEGE'),
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'WAVEROCK')
    ),

    // 201 SERIES
    ["201"].concat(
        getSubStops(OSK_Stops_DOWN, 'BACHARAM', 'VIJAY NAGAR COLONY'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "KOTI WOMENS COLLEGE"),
    ),
    ["201G"].concat(
        getSubStops(GWRL_HCLX, 'GOWRELLY', 'DILSHUKNAGAR'),
        getSubStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201M"].concat(
        SHD[606], SHD[849], SHD[994],
        getSubStops(GWRL_HCLX, 'TATTI ANNARAM X ROADS', 'DILSHUKNAGAR'),
        getSubStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201Q"].concat(
        getSubStops(GWRL_HCLX, 'QUTHBULLAPUR - GOWRELLY', 'DILSHUKNAGAR'),
        getSubStops(KTGD_LGRH, 'MOOSARAMBAGH', 'KOTI WOMENS COLLEGE')
    ),
    ["201T/290U"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops, 'VIJAY NAGAR COLONY', 'TARAMATIPET')
    ),

    // 202 SERIES
    ["202B"].concat(
        getSubStops(OSK_Stops_DOWN, 'BRAHMANAPALLY', 'HAYATHNAGAR VILLAGE'),
        getSubStops(KTGD_LGRH, 'TORRUR X ROADS', 'KOTI WOMENS COLLEGE')
    ),

    // 203 SERIES
    ["203A"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AK"].concat(
        SHD[790], SHD[768], SHD[762],
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203AR"].concat(
        SHD[835], SHD[885], SHD[790], SHD[768], SHD[762],
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        getSubStops(SKPL_SECB, 'RAM KOTI X ROADS', 'SECUNDERABAD')
    ),
    ["203N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),
    ["203A/218"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'ADIBATLA')
    ),
    ["203N/102B"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "SULTHAN BAZAR"),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/218"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3K"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SULTHAN BAZAR'),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203N/3N"].concat(
        "BEL", "BEL CIRCLE", SHD[662],
        getSubStops(CRPL_LGPL, 'NACHARAM X ROADS', 'TARNAKA'),
        getSubStops(KSR_SHMB, "MANIKESHWAR NAGAR", "KACHEGUDA TOURIST"),
        getSubStops(KSR_SHMB, "KACHEGUDA X ROADS", "SULTHAN BAZAR"),
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'NADERGUL')
    ),
    ["203U"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'MIDHANI COMPANY'),
        getSubStops(SKPL_SECB, 'PAISAL BANDA', 'SAGAR RING ROAD'),
        getSubStops(IBP_DNGL, 'LB NAGAR X ROADS', 'UPPAL RING ROAD')
    ),
    ["203U/90U"].concat(
        getSubStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'PAISAL BANDA'),
        getSubStops(MDCL_ADBT, 'MIDHANI COMPANY', 'ADIBATLA')
    ),

    // 204 SERIES
    ["204/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "PEDDA AMBERPET X ROADS"),
        SHD[303], "GANDI CHERUVU"
    ),
    ["204DA"].concat(
        getSubStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getSubStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'DILSHUKNAGAR')
    ),
    ["204U"].concat(
        getSubStops(OSK_Stops_DOWN, 'SANGHI NAGAR', 'GANDICHERUVU X ROADS'),
        getSubStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),
    ["204UA"].concat(
        getSubStops(OSK_Stops_DOWN, 'ANAJPUR', 'GANDICHERUVU X ROADS'),
        getSubStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'KOTI WOMENS COLLEGE')
    ),

    // 205 SERIES
    ["205A"].concat(
        getSubStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getSubStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["205A/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'ANAJPUR')
    ),
    ["205M/290U"].concat(
        SHD[448],
        SHD[754],
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'ABDULLAHPURMET'),
        getSubStops(OSK_Stops_DOWN, 'LASHKARGUDA', 'MAJEEDPUR X ROADS'),
        getSubStops(OSK_Stops, 'GUNTAPALLY', 'MAJEEDPUR VILLAGE')

    ),

    // 211 SERIES
    ["211"].concat(
        SHD[775],
        getSubStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211/242"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARA X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'YADGARPALLY', 'DHARMAVARAM'),
        SHD[51], "BITS PILANI X ROADS", SHD[251],
    ),
    ["211B"].concat(
        getSubStops(OSK_Stops, 'UDDAMARRI', 'SHAMIRPET VILLAGE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211CD"].concat(
        getSubStops(OSK_Stops_DOWN, 'DRDO (YADGARPALLY)', 'THIMMAIPALLY'),
        SHD[51], "BITS PILANI X ROADS",
        getSubStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'SECUNDERABAD')
    ),
    ["211D"].concat(
        "KOLTHUR",
        "SAMPANBOLE",
        getSubStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getSubStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211DY"].concat(
        SHD[119], SHD[243], SHD[775],
        getSubStops(SRPT_MNBD, 'THUMKUNTA', 'SECUNDERABAD')
    ),
    ["211K"].concat(
        getSubStops(OSK_Stops, 'KESAVARAM', 'ALIABAD HBL'),
        getSubStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'SECUNDERABAD')
    ),
    ["211M"].concat(
        getSubStops(TailsDOWN, 'CRPF', 'BHAGYA NAGAR COLONY'),
        getSubStops(GTKS_KPHB, 'CHENNAPUR X ROADS', 'EME CENTER'),
        SHD[382], "LOTHKUNTA X ROADS",
        getSubStops(SRPT_MNBD, 'LOTHKUNTA', 'SECUNDERABAD')
    ),

    // 212 SERIES
    ["212"].concat(
        SHD[140], "BITS PILANI X ROADS",
        getSubStops(SRPT_MNBD, 'DONGALAMYSAMMA X ROADS', 'KOWKOOR X ROADS'),
        getSubStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212/702"].concat(
        getSubStops(OSK_Stops, 'WARGAL TEMPLE', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getSubStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["212T"].concat(
        "ICICI TURKAPALLY",
        "KOLTHUR",
        "SAMPANBOLE",
        getSubStops(OSK_Stops, 'KOLTHUR X ROADS', 'ALIABAD HBL'),
        getSubStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getSubStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),

    // 216 SERIES
    ["216"].concat(
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["216M"].concat(
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'MEHDIPATNAM')
    ),

    // 217 SERIES
    ["217"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[507]
    ),
    ["217/254"].concat(
        SHD[790], SHD[885], SHD[835],
        getSubStops(MHRM_MDCL, 'THUKKUGUDA', 'NAYAPUL'),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'LINGAMPALLY')
    ),
    ["217C"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'CITY BUS STATION')
    ),
    ["217D"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'JYOTHI NAGAR (LGMPLY)'),
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),

    // 218 SERIES
    ["218"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218A"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ')
    ),
    ["218C"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'CITY BUS STATION'),
    ),
    ["218CA"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'CHANDRAYANGUTTA X ROADS')
    ),
    ["218D"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'DILSHUKNAGAR')
    ),
    ["218H"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["218L"].concat(
        getSubStops(PTCR_GTKS, 'LINGAMPALLY', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/102B"].concat(
        getSubStops(ADBT_MDCL, 'BADANGPET', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203A"].concat(
        getSubStops(ADBT_MDCL, 'ADIBATLA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/203N"].concat(
        getSubStops(ADBT_MDCL, 'NADERGUL', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'PATANCHERUVU'),
    ),
    ["218/224MN"].concat(
        getSubStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET ARCH'),
        getSubStops(PTCR_GTKS, 'NIZAMPET X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[507]
    ),
    ["218/277K"].concat(
        getSubStops(IBP_DNGL, 'MANNEGUDA', 'SAGAR RING ROAD'),
        getSubStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE'),
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MIYAPUR X ROADS')

    ),


    // 219 SERIES
    ["219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),
    ["219/16A"].concat(
        getSubStops(HCLX_GWRL, "ECIL X ROADS", "NEW BRIDGE"),
        getSubStops(IBP_DNGL, "METTUGUDA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/17H"].concat(
        getSubStops(KSR_SHMB, "ECIL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/18C"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219/171K"].concat(
        getSubStops(GTKS_KPHB, 'SHAHPUR NAGAR', 'KPHB MAIN ROAD'),
        getSubStops(GTKS_PTCR, 'KPHB MAIN ROAD', 'PATANCHERUVU')
    ),
    ["219/224G"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getSubStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU')
    ),
    ["219I/224G"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS'),
        getSubStops(GTKS_PTCR, 'MIYAPUR', 'PATANCHERUVU'),
        getSubStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(IBP_DNGL, 'BOWENPALLY X ROADS', 'BALANAGAR'), SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/250"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'SECUNDERABAD'),
        getSubStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),
    ["219/272G"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU")
    ),
    ["219I/272G"].concat(
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "BALANAGAR"),
        SHD[1087],
        getSubStops(GTKS_PTCR, "KUKATPALLY GOVT COLLEGE", "PATANCHERUVU"),
        getSubStops(OSK_Stops_DOWN, 'PATANCHERUVU MARKET ROAD', 'ISNAPUR')
    ),
    ["219/280"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "SECUNDERABAD"),
        getSubStops(IBP_DNGL, 'PATNY', 'BALANAGAR'),
        SHD[1087],
        getSubStops(GTKS_PTCR, 'KUKATPALLY GOVT COLLEGE', 'PATANCHERUVU')
    ),

    // 222 SERIES
    ["222A"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MADINAGUDA'),
        getSubStops(MDCL_ADBT, 'ALLWYN X ROADS', 'JUBLIE HILLS CHECK POST'),
        getSubStops(MCRL_KOTI, 'LV PRASAD', 'CARE HOSPITAL'),
        getSubStops(MDCL_ADBT, 'PENSION OFFICE', 'KOTI BUS STATION')
    ),

    // 224 SERIES
    ["224/47D"].concat(
        SHD[908], SHD[794],
        getSubStops(MCRL_KOTI, 'FILM NAGAR', 'ANDHRA JYOTHI'),
        SHD[752],
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MIYAPUR METRO STATION'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'MIYAPUR DEPOT'),
        SHD[795]
    ),
    ["224G"].concat(
        getSubStops(MDCL_ADBT, 'GANDIMAISAMMA', 'MIYAPUR X ROADS')
    ),
    ["224G/10KM"].concat(
        getSubStops(CRPL_LGPL, "SECUNDERABAD", "GREEN LANDS"),
        SHD[536],
        SHD[36],
        SHD[892],
        getSubStops(GTKS_PTCR, "MYTHRIVANAM", "MIYAPUR X ROADS"),
        getSubStops(ADBT_MDCL, 'LAND MARK TOWER', 'GANDIMAISAMMA')
    ),
    ["224G/219"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224G/219I"].concat(
        getSubStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'MIYAPUR'),
        getSubStops(ADBT_MDCL, 'MIYAPUR X ROADS', 'GANDIMAISAMMA')
    ),
    ["224MN"].concat(
        getSubStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS')
    ),
    ["224MN/218"].concat(
        SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'JNTU COLLEGE'),
        getSubStops(BLNR_MLPT, 'NIZAMPET X ROADS', 'MALLAMPET')
    ),
    ["224X"].concat(
        getSubStops(MDCL_ADBT, 'IDA X ROADS', 'MIYAPUR X ROADS')
    ),

    // 227 SERIES
    ["227"].concat(
        getSubStops(TailsDOWN, 'BAHUDURPALLY X ROADS', 'TEMPLE ROAD'),
        getSubStops(MDCL_MHRM, 'DHULAPALLY X ROADS', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["227/25S"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getSubStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 229 SERIES
    ["229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["229/1D"].concat(
        getSubStops(KTGD_LGRH, 'DILSHUKNAGAR', 'CHADERGHAT'),
        getSubStops(SKPL_SECB, 'KOTI WOMENS COLLEGE', 'SECUNDERABAD'),
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/1Z"].concat(
        getSubStops(SHMB_KSR, "ARAMGHAR", "CITY BUS STATION"),
        getSubStops(SKPL_SECB, "KOTI WOMENS COLLEGE", "SECUNDERABAD"),
        getSubStops(IBP_DNGL, 'SECUNDERABAD', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/5K"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'PATNY CENTER'),
        getSubStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/18C"].concat(
        getSubStops(TailsDOWN, 'CHENGI CHERLA', 'AYODHYA COLONY'),
        getSubStops(GTKS_PTCR, "CHENGI CHERLA X ROADS", "UPPAL RING ROAD"),
        getSubStops(IBP_DNGL, "UPPAL RING ROAD", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/25S"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        getSubStops(GTKS_KPHB, 'ALWAL', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'MEDCHAL')
    ),
    ["229/49M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'WESLEY COLLEGE'),
        getSubStops(IBP_DNGL, "PARADISE", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/90L"].concat(
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/219"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'BOWENPALLY X ROADS'),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/279"].concat(
        getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getSubStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229/290U"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "BOWENPALLY X ROADS"),
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229B"].concat(
        SHD[156],
        getSubStops(MHRM_MDCL, 'BOWENPALLY CHECK POST', 'MEDCHAL')
    ),
    ["229P"].concat(
        getSubStops(OSK_Stops, 'PUDUR', 'KISTAPUR'),
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 230 SERIES
    ["230A"].concat(
        getSubStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230AN"].concat(
        getSubStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P"].concat(
        getSubStops(DNGL_IBP, 'DUNDIGAL', 'SECUNDERABAD')
    ),
    ["230P/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9X"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    ["230P/9XM"].concat(
        SHD[193],
        getSubStops(MHRM_MDCL, "SHAH ALI BANDA", "NAYAPUL"),
        getSubStops(GTKS_PTCR, 'AFZALGUNJ', 'ERRAGADDA'),
        getSubStops(MLPT_BLNR, 'ERRAGADDA X ROADS', 'FATHE NAGAR X ROADS'),
        getSubStops(IBP_DNGL, 'BALANAGAR', 'DUNDIGAL')
    ),
    // 231 SERIES
    ["231"].concat(
        getSubStops(OSK_Stops, 'MEDICITY', 'KISTAPUR'),
        SHD[613]
    ),
    ["231KN"].concat(
        getSubStops(OSK_Stops_DOWN, 'KAZIPALLY', 'NARAYANA IIT'),
        getSubStops(MLPT_BLNR, 'MALLAMPET', 'NIZAMPET X ROADS'),
        getSubStops(PTCR_GTKS, "JNTU COLLEGE", "KUKATPALLY"),
        SHD[1087],
        getSubStops(DNGL_IBP, "BALANAGAR", "SECUNDERABAD")
    ),

    // 233 SERIES
    ["233"].concat(
        getSubStops(OSK_Stops, 'NUTHANKAL', 'APARNA KOMPALLY'),
        getSubStops(MDCL_MHRM, 'KOMPALLY', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),

    // 241 SERIES
    ["241T"].concat(
        getSubStops(OSK_Stops, 'DHARMAVARAM', 'CHIRYALA VILLAGE'),
        getSubStops(KSR_SHMB, "CHERIYAL X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),

    // 242 SERIES
    ["242"].concat(
        getSubStops(KSR_SHMB, "KEESARAGUTTA", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242/3K"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'KEESARAGUTTA')
    ),
    ["242/17H"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "TARNAKA"),
        getSubStops(SHMB_KSR, 'WHITE HOUSE', 'KEESARAGUTTA')
    ),
    ["242/211"].concat(
        SHD[251], "BITS PILANI X ROADS", SHD[51],
        getSubStops(OSK_Stops, 'DHARMAVARAM', 'YADGARPALLY'),
        getSubStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242A"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS",
        getSubStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242B"].concat(
        SHD[147],
        SHD[46],
        getSubStops(KSR_SHMB, "KEESARA X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242G"].concat(
        SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getSubStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242GA"].concat(
        "ANKIREDDY PALLY VILLAGE", SHD[46], "ANKIREDDY PALLY X ROADS", SHD[631], SHD[534], SHD[475], SHD[476], SHD[829], SHD[318], SHD[520],
        getSubStops(KSR_SHMB, "KUNDANPALLY X ROADS", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG"].concat(
        SHD[842], "INDIRA GRUHAKALPA", SHD[128],
        getSubStops(KSR_SHMB, "BANDLAGUDA (NAGARAM)", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["242RG/15H"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "LALAGUDA"),
        SHD[719],
        SHD[917],
        getSubStops(SHMB_KSR, 'LALAPET', 'BANDLAGUDA (NAGARAM)'),
        SHD[128], "INDIRA GRUHAKALPA", SHD[842]
    ),

    // 245 SERIES
    ["245A"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 250 SERIES
    ["250"].concat(
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250/10K"].concat(
        getSubStops(KPHB_GTKS, 'KPHB 4TH PHASE', 'KPHB MAIN ROAD'),
        getSubStops(PTCR_GTKS, "KPHB MAIN ROAD", "AMEERPET"),
        SHD[926],
        SHD[536],
        SHD[335],
        getSubStops(LGPL_CRPL, "BEGUMPET HPS", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C"].concat(
        getSubStops(CRPL_LGPL, 'CHERLAPALLY', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250D"].concat(
        "AMBEDKAR NAGAR CIRCLE",
        getSubStops(KPHB_GTKS, 'AMBEDKAR NAGAR', 'NAGARAM X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898],
    ),
    ["250/49"].concat(
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        SHD[95],
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'KHAIRATHABAD'),
        getSubStops(TailsDOWN, 'RAJ BHAVAN', 'SOMAJIGUDA'),
        getSubStops(LGPL_CRPL, 'GREEN LANDS', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250C/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "CHERLAPALLY"),
    ),
    ["250D/49M"].concat(
        getSubStops(LGPL_CRPL, "MEHDIPATNAM", "ASHOK NAGAR (NFC)"),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(GTKS_KPHB, 'NAGARAM X ROADS', 'AMBEDKAR NAGAR'),
        "AMBEDKAR NAGAR CIRCLE"
    ),
    ["250S"].concat(
        getSubStops(CRPL_LGPL, 'NOMA', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),
    ["250/219"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'PATNY'),
        SHD[898],
        getSubStops(LGPL_CRPL, 'ALUGADDA BHAVI', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS')
    ),
    ["250/281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'KUSHAIGUDA'),
        getSubStops(GWRL_HCLX, 'ECIL X ROADS', 'HCL X ROADS'),
        getSubStops(CRPL_LGPL, 'ASHOK NAGAR (NFC)', 'ALUGADDA BHAVI'),
        SHD[878], SHD[898]
    ),

    // 251 SERIES
    ["251M"].concat(
        SHD[651], SHD[439],
        getSubStops(OSK_Stops, 'MADANAPALLY', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["251/1Z"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD")
    ),
    ["251/2Z"].concat(
        getSubStops(SECB_SKPL, 'SECUNDERABAD', 'RTC X ROADS'),
        SHD[167], SHD[1075],
        getSubStops(KSR_SHMB, 'NALLAKUNTA', 'KACHEGUDA STATION'),
        SHD[708],
        getSubStops(GTKS_PTCR, 'CHADERGHAT X ROADS', 'AFZALGUNJ'),
        getSubStops(KSR_SHMB, 'MADINA', 'SHAMSHABAD')
    ),
    ["7Z/251"].concat(
        getSubStops(DRFM_RMNG, 'SECUNDERABAD', 'RANIGUNJ'),
        getSubStops(MDCL_MHRM, "TANK BUND", "ABIDS"),
        SHD[110], SHD[507], SHD[220],
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD')
    ),
    ["251/90L"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getSubStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),
    ["251/188"].concat(
        getSubStops(SRPT_MNBD, "MEHDIPATNAM", "TK BRIDGE"),
        getSubStops(RMNG_DRFM, 'SAI RAM NAGAR (SUNCITY)', 'DAIRY FARM (CNTLMT)'),
        getSubStops(SKPL_SECB, 'LAL DHABA', 'SHIVARAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'ARAMGHAR', 'SHAMSHABAD')
    ),
    ["251/300"].concat(
        getSubStops(DNGL_IBP, 'UPPAL RING ROAD', 'LB NAGAR X ROADS'),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'ARAMGHAR'),
        getSubStops(KSR_SHMB, 'BUDVEL STATION', 'SHAMSHABAD')
    ),

    // 252 SERIES
    ["252S"].concat(
        getSubStops(OSK_Stops_DOWN, 'SHANKARAPUR', 'RASHEEDGUDA'),
        'KISHANGUDA',
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["252/3K"].concat(
        getSubStops(KSR_SHMB, 'ECIL X ROADS', 'SHAMSHABAD'),
        SHD[843]
    ),
    ["252/6IW"].concat(
        getSubStops(CRPL_LGPL, 'CHERLAPALLY', 'TARNAKA'),
        getSubStops(KSR_SHMB, 'MANIKESHWAR NAGAR', 'ADIKMET'),
        SHD[818],
        getSubStops(RMNG_DRFM, 'RAM NAGAR (E SEVA)', 'VST'),
        SHD[167], SHD[856], SHD[70],
        getSubStops(TailsUP, 'NTR STADIUM', 'BIRLA MANDIR'),
        getSubStops(SRPT_MNBD, 'LAKDI KA PUL', 'MEHDIPATNAM'),
        getSubStops(CRPL_LGPL, 'RETHIBOWLI', 'GACHIBOWLI DLF'),
        getSubStops(MLPT_BLNR, 'INFOSYS', 'WAVEROCK')
    ),

    // 253 SERIES
    ["253"].concat(
        getSubStops(MHRM_MDCL, 'MAHESHWARAM', 'SHAH ALI BANDA'),
        SHD[193]
    ),
    ["253L/85"].concat(
        getSubStops(MDCL_MHRM, 'CHARMINAR', 'MAHESHWARAM GATE'),
        getSubStops(OSK_Stops, 'THUMMALOOR ROAD', 'ANOJIGUDA (KNDKR)')
    ),
    ["253L/102"].concat(
        getSubStops(MDCL_ADBT, 'KOTI WOMENS COLLEGE', 'IS SADAN'),
        getSubStops(MDCL_ADBT, 'SANTHOSH NAGAR', 'PAISAL BANDA'),
        getSubStops(SECB_SKPL, 'DRDL', 'CHANDRAYANGUTTA'),
        getSubStops(MDCL_MHRM, 'CHANDRAYANGUTTA X ROADS', 'LEMOOR ROAD'),
        getSubStops(OSK_Stops, 'SARASWATHIGUDA', 'LEMOOR')
    ),
    ["253T/90"].concat(
        SHD[448],
        SHD[754],
        getSubStops(DNGL_IBP, "SECUNDERABAD", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, 'SAGAR RING ROAD', 'CHANDRAYANGUTTA X ROADS'),
        getSubStops(MDCL_MHRM, 'KESHAVAGIRI POST OFFICE', 'THUKKUGUDA'),
        "SREE NAGAR", "FAB CITY"
    ),
    ["253W"].concat(
        getSubStops(MHRM_MDCL, 'MAHESHWARAM', 'CHANDRAYANGUTTA X ROADS'),
        getSubStops(SKPL_SECB, 'CHANDRAYANGUTTA', 'DRDL'),
        getSubStops(ADBT_MDCL, 'PAISAL BANDA', 'SANTHOSH NAGAR'),
        getSubStops(ADBT_MDCL, 'IS SADAN', 'KOTI WOMENS COLLEGE')
    ),

    // 254 SERIES
    ["254/217"].concat(
        getSubStops(LGPL_CRPL, 'LINGAMPALLY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        getSubStops(PTCR_GTKS, 'ASSEMBLY', 'AFZALGUNJ'),
        getSubStops(MDCL_MHRM, 'SALARJUNG MUSEUM', 'THUKKUGUDA'),
        SHD[835], "WONDER LA X ROADS", "KONGARA KALAN"
    ),

    // 272 SERIES
    ["272"].concat(
        SHD[157], SHD[158],
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),
    ["272G/9K"].concat(
        SHD[11],
        SHD[220], SHD[507], SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/9X"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/18"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'GANDIMAISAMMA')
    ),
    ["272G/29B"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "GANDIMAISAMMA")
    ),
    ["272G/83J"].concat(
        getSubStops(TailsUP, 'KACHEGUDA STATION', 'HYDERGUDA'),
        SHD[557],
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'LAKDI KA PUL'),
        getSubStops(GTKS_PTCR, 'SHADAN COLLEGE', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/189M"].concat(
        getSubStops(LGPL_CRPL, 'MEHDIPATNAM', 'PANJAGUTTA'),
        getSubStops(GTKS_PTCR, 'PANJAGUTTA', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'GANDIMAISAMMA')
    ),
    ["272G/219"].concat(
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272G/219I"].concat(
        getSubStops(OSK_Stops, 'ISNAPUR', 'PATANCHERUVU MARKET ROAD'),
        getSubStops(PTCR_GTKS, "PATANCHERUVU", "KUKATPALLY"),
        SHD[1087],
        getSubStops(IBP_DNGL, "BALANAGAR", "GANDIMAISAMMA")
    ),
    ["272I/29B"].concat(
        getSubStops(IBP_DNGL, "SECUNDERABAD", "BAHUDURPALLY X ROADS"),
        SHD[1046],
        SHD[407]
    ),
    ["272B"].concat(
        SHD[157], SHD[158],
        getSubStops(DNGL_IBP, "GANDIMAISAMMA", "SECUNDERABAD")
    ),

    // 273 SERIES
    ["273/24S"].concat(
        getSubStops(HCLX_GWRL, 'ECIL X ROADS', 'NEREDMET X ROADS'),
        SHD[317], SHD[850], SHD[54],
        getSubStops(GTKS_KPHB, 'LAL BAZAR', 'SUCHITRA'),
        getSubStops(MHRM_MDCL, 'JEEDIMETLA VILLAGE', 'DHULAPALLY X ROADS'),
        getSubStops(TailsUP, 'TEMPLE ROAD', 'BAHUDURPALLY X ROADS'),
        SHD[305]
    ),

    // 277 SERIES
    ["277"].concat(
        getSubStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getSubStops(SKPL_SECB, 'BAIRAMALGUDA', 'CHADERGHAT'),
        SHD[624]
    ),
    ["277D"].concat(
        getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "SAGAR RING ROAD"),
        getSubStops(KTGD_LGRH, "LB NAGAR X ROADS", "KOTI WOMENS COLLEGE")
    ),
    ["277D/72"].concat(
        SHD[11], SHD[875], SHD[238], SHD[624],
        getSubStops(LGRH_KTGD, 'CHADERGHAT', 'LB NAGAR'),
        getSubStops(DNGL_IBP, 'LB NAGAR X ROADS', 'IBRAHIMPATNAM')
    ),
    ["277K/218"].concat(
        getSubStops(PTCR_GTKS, 'MIYAPUR X ROADS', 'ASSEMBLY'),
        SHD[3], SHD[110], SHD[506],
        getSubStops(SECB_SKPL, 'KOTI WOMENS COLLEGE', 'BAIRAMALGUDA'),
        getSubStops(DNGL_IBP, 'SAGAR RING ROAD', 'MANNEGUDA')
    ),
    ["277L"].concat(
        getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "LB NAGAR X ROADS"),
    ),
    ["277N"].concat(
        SHD[665], "KAMMAGUDA", "GURRAMGUDA VILLAGE",
        getSubStops(IBP_DNGL, 'GURRAMGUDA X ROADS', 'SAGAR RING ROAD'),
        getSubStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),

    // 279 SERIES
    ["279"].concat(
        getSubStops(IBP_DNGL, "IBRAHIMPATNAM", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["279/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'IBRAHIMPATNAM')
    ),
    ["279U"].concat(
        getSubStops(DNGL_IBP, "UPPAL RING ROAD", "IBRAHIMPATNAM")
    ),

    // 280 SERIES
    ["280"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280B"].concat(
        SHD[147], "HOLY MERRY COLLEGE", "VIGNAN SCHOOL", "KONDAPUR VLG", "ANNAPURNA COLONY(GTKS)",
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280J"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD'),
        SHD[754],
        SHD[448]
    ),
    ["280N"].concat(
        "NFC NAGAR",
        getSubStops(OSK_Stops_DOWN, 'NFC NAGAR X ROADS', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280X"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD')
    ),
    ["280/20"].concat(
        getSubStops(MNBD_SRPT, 'SECRETARIATE', 'TANK BUND'),
        SHD[473], SHD[777], SHD[131],
        getSubStops(SKPL_SECB, 'MUSHEERABAD', 'BOIGUDA'),
        getSubStops(DNGL_IBP, 'CHILKALGUDA X ROADS', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/30"].concat(
        getSubStops(BLNR_MLPT, 'JAGATHGIRIGUTTA', 'IDPL'),
        getSubStops(DNGL_IBP, "WATER TANK", "TARBUND"),
        SHD[141],
        getSubStops(DNGL_IBP, 'PARADISE', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, "UPPAL GANDHI STATUE", "GHATKESAR")
    ),
    ["280/219"].concat(
        getSubStops(PTCR_GTKS, 'PATANCHERUVU', 'KUKATPALLY'),
        SHD[1087],
        getSubStops(DNGL_IBP, 'BALANAGAR', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["280/488"].concat(
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["280/492"].concat(
        getSubStops(OSK_Stops, 'PILLAIPALLY', 'GUVVALETI X ROADS'),
        getSubStops(OSK_Stops_DOWN, 'MAKTHA ANANTHARAM', 'POTHARAJU DUDAM'),
        getSubStops(OSK_Stops_DOWN, 'EDULABAD', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 281 SERIES
    ["281"].concat(
        getSubStops(GTKS_KPHB, 'GHATKESAR', 'RAMPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'NAGARAM', 'ECIL X ROADS')
    ),
    ["281/3K"].concat(
        getSubStops(SHMB_KSR, 'AFZALGUNJ', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/6L"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getSubStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/16C"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", 'VINAYAK NAGAR (NEREDMET)'),
        getSubStops(TailsUP, 'VINAYAK NAGAR GATE', 'OFFICERs COLONY'),
        getSubStops(GWRL_HCLX, 'SHARADA', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/24B"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'TIRUMALAGIRI'),
        getSubStops(KPHB_GTKS, 'LAL BAZAR', 'GHATKESAR')
    ),
    ["281/24L"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LOTHKUNTA'),
        SHD[382],
        getSubStops(KPHB_GTKS, 'EME CENTER', 'GHATKESAR'),
    ),
    ["281/113M"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getSubStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281/250"].concat(
        getSubStops(LGPL_CRPL, 'SECUNDERABAD', 'ASHOK NAGAR (NFC)'),
        getSubStops(HCLX_GWRL, 'HCL X ROADS', 'ECIL X ROADS'),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),
    ["281R/16A"].concat(
        SHD[898],
        SHD[23],
        SHD[622],
        getSubStops(GWRL_HCLX, "NEW BRIDGE", "ECIL X ROADS"),
        getSubStops(SHMB_KSR, 'KUSHAIGUDA', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'RTC COLONY (RMPLY)')
    ),

    // 282 SERIES
    ["282K"].concat(
        SHD[496],
        getSubStops(MLPT_BLNR, 'KOTHAGUDA X ROADS', 'HITEX KAMAN'),
        getSubStops(MLPT_BLNR, 'CYBER TOWERS', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'RETHIBOWLI'),
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'SECRETARIATE'),
        getSubStops(TailsDOWN, 'LIBERTY', 'BARKATPURA'),
        getSubStops(SHMB_KSR, 'FIVER HOSPITAL', 'NAGARAM'),
        getSubStops(KPHB_GTKS, 'NAGARAM X ROADS', 'GHATKESAR')
    ),

    // 283 SERIES
    ["283C"].concat(
        "SURARAM COLONY",
        "SURARAM CIRCLE",
        getSubStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283D/9X"].concat(
        getSubStops(GTKS_PTCR, 'CITY BUS STATION', 'MOOSAPET'),
        SHD[1087],
        getSubStops(IBP_DNGL, 'BALANAGAR', 'SURARAM'),
        "SURARAM CIRCLE", "SURARAM COLONY"
    ),
    ["283K"].concat(
        getSubStops(TailsDOWN, 'KORREMULA', 'VENKATADRI TOWNSHIP'),
        getSubStops(GTKS_PTCR, 'NARAPALLY', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["283S/18"].concat(
        getSubStops(DNGL_IBP, 'SECUNDERABAD', 'UPPAL RING ROAD'),
        getSubStops(PTCR_GTKS, 'UPPAL GANDHI STATUE', 'NARAPALLY'),
        getSubStops(TailsUP, 'VENKATADRI TOWNSHIP', 'KORREMULA')
    ),
    ["283VS"].concat(
        "SURARAM VILLAGE",
        getSubStops(DNGL_IBP, "SURARAM", "SECUNDERABAD")
    ),
    ["283T"].concat(
        "TENUGUDEM", "VENKATAPUR(TNGM)", "ANURAG UNIVERSITY",
        getSubStops(GTKS_PTCR, 'JODIMETLA', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),

    // 288 SERIES
    ["288"].concat(
        getSubStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["288/113M"].concat(
        getSubStops(GTKS_PTCR, 'UPPAL', 'AMBERPET'),
        getSubStops(TailsUP, 'CHEY NUMBER', 'LIBERTY'),
        getSubStops(SRPT_MNBD, 'SECRETARIATE', 'MEHDIPATNAM'),
        getSubStops(SRPT_MNBD, 'RETHIBOWLI', 'MOINABAD')
    ),
    ["288A"].concat(
        getSubStops(OSK_Stops_DOWN, 'AMDAPUR', 'MURTHUZAGUDA'),
        getSubStops(MNBD_SRPT, 'JBIT', 'MEHDIPATNAM')
    ),
    ["288C"].concat(
        getSubStops(OSK_Stops_DOWN, 'APPOJIGUDA', 'HIMAYATH NAGAR VILLAGE'),
        getSubStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D"].concat(
        SHD[209], SHD[1026],
        getSubStops(OSK_Stops_DOWN, 'CHILKOOR X ROADS', 'HIMAYATH NAGAR VILLAGE'),
        getSubStops(MNBD_SRPT, 'HIMAYATH NAGAR JUNCTION', 'MEHDIPATNAM')
    ),
    ["288D/19K"].concat(
        getSubStops(PTCR_GTKS, 'KUKATPALLY', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getSubStops(SRPT_MNBD, 'RETHIBOWLI', 'HIMAYATH NAGAR JUNCTION'),
        getSubStops(OSK_Stops, 'HIMAYATH NAGAR VILLAGE', 'CHILKOOR X ROADS'),
        SHD[1026], SHD[209]
    ),
    ["288K"].concat(
        getSubStops(MNBD_SRPT, 'MOINABAD', 'LAKDI KA PUL'),
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'BANK STREET (KOTI)'),
        SHD[507]
    ),

    // 290 SERIES
    ["290"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "BHAGYA LATHA"),
        getSubStops(TailsDOWN, 'SHANTHI NAGAR - VANASTHALIPURAM', 'VANASTHALIPURAM'),
        getSubStops(KTGD_LGRH, 'PANAMA', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290/229"].concat(
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, "BOWENPALLY X ROADS", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "PANAMA"),
        getSubStops(TailsUP, 'VANASTHALIPURAM', 'SUBHADRA NAGAR'),
        SHD[369],
        getSubStops(LGRH_KTGD, 'BHAGYA LATHA', 'HAYATHNAGAR')
    ),
    ["290KJ"].concat(
        getSubStops(OSK_Stops_DOWN, 'KUNTLOOR', 'VIJAY NAGAR COLONY'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[754],
        SHD[448]
    ),
    ["290KP"].concat(
        getSubStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U"].concat(
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290UA"].concat(
        getSubStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290UF"].concat(
        getSubStops(OSK_Stops, 'RAMOJI FILM CITY', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/201T"].concat(
        getSubStops(OSK_Stops_DOWN, 'TARAMATIPET', 'VIJAY NAGAR COLONY'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/204"].concat(
        "GANDI CHERUVU", SHD[303],
        getSubStops(KTGD_LGRH, 'PEDDA AMBERPET X ROADS', 'LB NAGAR X ROADS'),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205A"].concat(
        getSubStops(OSK_Stops, 'ANAJPUR', 'LASHKARGUDA'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/205M"].concat(
        getSubStops(OSK_Stops_DOWN, 'MAJEEDPUR VILLAGE', 'GUNTAPALLY'),
        getSubStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getSubStops(OSK_Stops, 'ABDULLAHPURMET', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["290U/229"].concat(getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'), getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'KAMINENI HOSPITALS'), getSubStops(LGRH_KTGD, 'LB NAGAR X ROADS', 'HAYATHNAGAR')
    ),
    ["290U/463"].concat(
        "DESHMUKHI",
        getSubStops(OSK_Stops, 'BATASINGARAM', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),
    ["290U/555"].concat(
        getSubStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, "HAYATHNAGAR", "LB NAGAR X ROADS"),
        getSubStops(IBP_DNGL, "KAMINENI HOSPITALS", "ALUGADDA BHAVI"),
        SHD[898]
    ),

    // 299 SERIES
    ["299"].concat(
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/1D"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(LGRH_KTGD, "CHADERGHAT", "HAYATHNAGAR")
    ),
    ["299/100"].concat(
        SHD[897], SHD[139],
        getSubStops(MDCL_ADBT, 'ASSEMBLY', 'KOTI BUS STATION'),
        getSubStops(LGRH_KTGD, "KOTI WOMENS COLLEGE", "HAYATHNAGAR")
    ),
    ["299/156"].concat(
        getSubStops(MNBD_SRPT, 'MEHDIPATNAM', 'LAKDI KA PUL'),
        SHD[74],
        SHD[3], SHD[110], SHD[506],
        getSubStops(LGRH_KTGD, 'KOTI WOMENS COLLEGE', 'HAYATHNAGAR')
    ),
    ["299D"].concat(getSubStops(LGRH_KTGD, "DILSHUKNAGAR", "HAYATHNAGAR")),

    // 300 SERIES
    ["300"].concat(
        getSubStops(DNGL_IBP, "UPPAL RING ROAD", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/90"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "LB NAGAR X ROADS"),
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),
    ["300/118W"].concat(
        getSubStops(BLNR_MLPT, 'WAVEROCK', 'INFOSYS'),
        getSubStops(LGPL_CRPL, 'GACHIBOWLI DLF', 'NANAL NAGAR'),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "SECUNDERABAD"),
        SHD[754],
        SHD[448]
    ),
    ["300/126"].concat(
        getSubStops(MLPT_BLNR, 'JNTU COLLEGE', 'MIND SPACE'),
        getSubStops(LGPL_CRPL, 'BIO DIVERSITY', 'NANAL NAGAR'),
        getSubStops(SKPL_SECB, "RETHIBOWLI", "SAGAR RING ROAD"),
        SHD[552]
    ),
    ["300/251"].concat(
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'BUDVEL STATION'),
        getSubStops(SKPL_SECB, "ARAMGHAR", "SAGAR RING ROAD"),
        getSubStops(IBP_DNGL, "LB NAGAR X ROADS", "UPPAL RING ROAD")
    ),
    ["300L"].concat(
        SHD[552],
        getSubStops(SECB_SKPL, "SAGAR RING ROAD", "RETHIBOWLI"),
        SHD[620]
    ),

    // 400 SERIES
    ["412"].concat(
        getSubStops(OSK_Stops_DOWN, 'MALL', 'KHANAPUR X ROADS'),
        getSubStops(IBP_DNGL, 'IBRAHIMPATNAM', 'SAGAR RING ROAD'),
        getSubStops(SKPL_SECB, 'BAIRAMALGUDA', 'KOTI WOMENS COLLEGE')
    ),
    ["445"].concat(
        getSubStops(OSK_Stops_DOWN, 'KETHIREDDYPALLY', 'SAJJANPALLY X ROADS'),
        getSubStops(OSK_Stops, 'KETHIREDDYPALLY ROAD', 'AYAAN INSTITUTE OF MEDICAL'),
        getSubStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["447R"].concat(
        getSubStops(OSK_Stops_DOWN, 'RAVULAPALLY', 'MUDIMYAL'),
        getSubStops(OSK_Stops, 'MUDIMYAL X ROADS', 'AYAAN INSTITUTE OF MEDICAL'),
        getSubStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),
    ["458"].concat(
        SHD[575], SHD[576], SHD[605],
        getSubStops(OSK_Stops_DOWN, 'MANSANPALLY X ROADS', 'GOLLAPALLY'),
        "KISHANGUDA",
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["463/290U"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'BATASINGARAM'),
        "DESHMUKHI"
    ),
    ["464"].concat(
        getSubStops(OSK_Stops_DOWN, 'DANDUMAILARAM', 'GUNTAPALLY'),
        getSubStops(OSK_Stops, 'MAJEEDPUR X ROADS', 'LASHKARGUDA'),
        getSubStops(KTGD_LGRH, "ABDULLAHPURMET", "DILSHUKNAGAR"),
    ),
    ["488/280"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR')
    ),
    ["490S"].concat(
        getSubStops(OSK_Stops_DOWN, 'BIBI NAGAR', 'AMBEDKAR NAGAR (GTKS)'),
        SHD[272],
        getSubStops(GTKS_PTCR, 'GHATKESAR', 'UPPAL RING ROAD'),
        getSubStops(IBP_DNGL, 'UPPAL RING ROAD', 'SECUNDERABAD')
    ),
    ["492/280"].concat(
        SHD[898],
        SHD[207],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "UPPAL RING ROAD"),
        getSubStops(PTCR_GTKS, 'UPPAL', 'GHATKESAR'),
        SHD[272],
        getSubStops(OSK_Stops, 'AMBEDKAR NAGAR (GTKS)', 'EDULABAD'),
        getSubStops(OSK_Stops, 'POTHARAJU DUDAM', 'MAKTHA ANANTHARAM'),
        getSubStops(OSK_Stops_DOWN, 'GUVVALETI X ROADS', 'PILLAIPALLY')
    ),
    ["495"].concat(
        getSubStops(OSK_Stops_DOWN, 'KANUKUNTA', 'ANANTHARAM X ROADS'),
        getSubStops(OSK_Stops, 'GUMMADIDALA', 'PULLAREDDY COLLEGE'),
        getSubStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        "DOMARAPOCHAMPALLY",
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["498"].concat(
        "KESAVAPUR",
        "THUMKUNTA (JALALPUR)",
        getSubStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getSubStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498K"].concat(
        getSubStops(OSK_Stops, 'KOTHAPALLY', 'PULLAREDDY COLLEGE'),
        getSubStops(OSK_Stops, 'ANNARAM', 'DUNDIGAL X ROADS'),
        "DOMARAPOCHAMPALLY",
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),
    ["498U"].concat(
        "UDDAMARRI",
        getSubStops(OSK_Stops, 'USHARPALLY', 'KESAVAPUR'),
        "THUMKUNTA (JALALPUR)",
        getSubStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getSubStops(KSR_SHMB, "KEESARAGUTTA KAMAN", "TARNAKA"),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["498VJ"].concat(
        getSubStops(OSK_Stops, 'JINNARAM', 'PATHARAM'),
        "GAGILLAPUR",
        "DUNDIGAL X ROADS",
        "DOMARAPOCHAMPALLY",
        getSubStops(DNGL_IBP, 'GANDIMAISAMMA', 'SECUNDERABAD')
    ),

    // 500 SERIES
    ["505"].concat(
        getSubStops(SKPL_SECB, 'SHANKARPALLY', 'RETHIBOWLI'),
        SHD[620]
    ),
    ["505/19S"].concat(
        getSubStops(BLNR_MLPT, 'SANATH NAGAR', 'SANATH NAGAR PS'),
        getSubStops(PTCR_GTKS, 'ERRAGADDA', 'PANJAGUTTA'),
        getSubStops(CRPL_LGPL, 'PANJAGUTTA', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["505/156"].concat(
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'KOTI MEDICAL COLLEGE'),
        SHD[4],
        getSubStops(GTKS_PTCR, 'NAMPALLY', 'LAKDI KA PUL'),
        getSubStops(SRPT_MNBD, 'MAHAVIR HOSPITAL', 'MEHDIPATNAM'),
        getSubStops(SECB_SKPL, 'RETHIBOWLI', 'SHANKARPALLY')
    ),
    ["523K"].concat(
        getSubStops(OSK_Stops, 'KAWADIPALLY', 'ABDULLAHPURMET VILLAGE'),
        getSubStops(KTGD_LGRH, 'ABDULLAHPURMET', 'KOTI WOMENS COLLEGE')
    ),
    ["524"].concat(
        getSubStops(OSK_Stops_DOWN, 'POCHAMPALLY', 'NETAJI INSTITUTE'),
        getSubStops(KTGD_LGRH, 'KOTHAGUDEM', 'DILSHUKNAGAR')
    ),
    ["530"].concat(
        "KANDUKUR",
        getSubStops(OSK_Stops_DOWN, 'KOTTAGUDA HIGHWAY', 'GOLLAPALLY'),
        "KISHANGUDA",
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532"].concat(
        getSubStops(OSK_Stops, 'JP DARGHA', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, 'SHAMSHABAD', 'AFZALGUNJ')
    ),
    ["532/8A"].concat(
        getSubStops(MDCL_MHRM, "SECUNDERABAD", "OSMANGUNJ"),
        getSubStops(KSR_SHMB, 'AFZALGUNJ', 'SHAMSHABAD'),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR')
    ),
    ["537"].concat(
        getSubStops(OSK_Stops_DOWN, 'KODICHERLA', 'PENJERLA'),
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539"].concat(
        getSubStops(OSK_Stops_DOWN, 'KANHA', 'NANDIGAMA'),
        getSubStops(OSK_Stops, 'KOTHUR', 'KISHANGUDA'),
        getSubStops(SHMB_KSR, "SHAMSHABAD", "AFZALGUNJ")
    ),
    ["539/1Z"].concat(
        getSubStops(SECB_SKPL, "SECUNDERABAD", "KOTI WOMENS COLLEGE"),
        getSubStops(KSR_SHMB, "KOTI MEDICAL COLLEGE", "SHAMSHABAD"),
        getSubStops(OSK_Stops_DOWN, 'KISHANGUDA', 'KOTHUR'),
        getSubStops(OSK_Stops, 'NANDIGAMA', 'KANHA')
    ),
    ["555"].concat(
        getSubStops(OSK_Stops, 'CHOUTUPPAL', 'WORD & DEED'),
        getSubStops(KTGD_LGRH, 'HAYATHNAGAR', 'DILSHUKNAGAR')
    ),
    ["555/290U"].concat(
        SHD[898],
        getSubStops(DNGL_IBP, "ALUGADDA BHAVI", "KAMINENI HOSPITALS"),
        getSubStops(LGRH_KTGD, "LB NAGAR X ROADS", "HAYATHNAGAR"),
        getSubStops(OSK_Stops_DOWN, 'WORD & DEED', 'CHOUTUPPAL')
    ),
    ["568"].concat(
        getSubStops(OSK_Stops, 'DAMARAKUNTA', 'ALIABAD HBL'),
        getSubStops(OSK_Stops, 'ALIABAD X ROADS', 'SHAMIRPET LAKE'),
        getSubStops(SRPT_MNBD, 'SHAMIRPET', 'KOWKOOR X ROADS'),
        getSubStops(SRPT_MNBD, 'LAKADAWALA', 'SECUNDERABAD')
    ),
    ["578"].concat(
        getSubStops(OSK_Stops, 'M TURKAPALLY', 'JALALPUR'),
        getSubStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'ECIL X ROADS'),
    ),
    ["580"].concat(
        getSubStops(OSK_Stops, 'YADAGIRIGUTTA', 'JALALPUR'),
        getSubStops(OSK_Stops, 'ERRAKUNTA', 'ANKIREDDYPALLY X ROADS'),
        getSubStops(KSR_SHMB, 'KEESARAGUTTA KAMAN', 'TARNAKA'),
        getSubStops(IBP_DNGL, "RAILWAY DEGREE COLLEGE", "ALUGADDA BHAVI"),
        SHD[878],
        SHD[898]
    ),
    ["589"].concat(
        getSubStops(OSK_Stops, 'RAMAYAMPET', 'ATHVELLY'),
        getSubStops(MDCL_MHRM, 'MEDCHAL', 'BOWENPALLY CHECK POST'),
        getSubStops(DNGL_IBP, 'BOWENPALLY X ROADS', 'SECUNDERABAD')
    ),
    ["593"].concat(
        getSubStops(OSK_Stops, 'CHEVELLA', 'AYAAN INSTITUTE OF MEDICAL'),
        getSubStops(MNBD_SRPT, 'MOINABAD', 'MEHDIPATNAM')
    ),

    // 700 SERIES
    ["702/212"].concat(
        getSubStops(MNBD_SRPT, 'SECUNDERABAD', 'LAKADAWALA'),
        getSubStops(MNBD_SRPT, 'KOWKOOR X ROADS', 'SHAMIRPET'),
        getSubStops(OSK_Stops_DOWN, 'SHAMIRPET LAKE', 'WARGAL TEMPLE')
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
            displayOtherSections(2, "HELP");
            break;

        case 5:
            // More Apps
            otherSectionsScreen.classList.remove('close');
            displayOtherSections(3, "MORE APPS");
            break;

        default:
            break;
    }
}

function displayOtherSections(screen, heading) {
    busPassInfoScreen.classList.add('hide');
    helpScreen.classList.add('hide');
    moreAppsScreen.classList.add('hide');
    otherSectionsScreenHeading.innerHTML = heading;
    if (screen == 1) {
        busPassInfoScreen.classList.remove('hide');
    } else if (screen == 2) {
        helpScreen.classList.remove('hide');
    } else if (screen == 3) {
        moreAppsScreen.classList.remove('hide');
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
    // Reset Items
    upRouteHolder.classList.remove('expand');
    downRouteHolder.classList.remove('expand');
    upRouteDownIcon.classList.remove('click');
    downRouteDownIcon.classList.remove('click');
    upRouteDownSpan.innerHTML = "View Stops";
    downRouteDownSpan.innerHTML = "View Stops";

    // To Be Hide
    OutputScreen2.classList.remove('close');
    OutputScreen.classList.remove('show');
    OutputScreen2.classList.add('show');
    suggessionsList.innerHTML = "";
    // clear1.classList.add('hide');
    clear1.style.visibility = "hidden";
    input1.value = routeNoI;
    input2.value = '';

    if (ref.innerHTML.includes("/")) {
        if (ref.innerHTML == "1/25S/229") {
            ref = ref.innerText.split('/');
            output2RouteHolder.classList.add('doubleRoute');
            route1No.innerHTML = ref[0] + "/" + ref[1];
            route2No.innerHTML = ref[2];
        } else {
            ref = ref.innerText.split('/');
            output2RouteHolder.classList.add('doubleRoute');
            route1No.innerHTML = ref[0];
            route2No.innerHTML = ref[1];
        }
    } else {
        output2RouteHolder.classList.remove('doubleRoute');
        route1No.innerHTML = ref.innerHTML;
    }

    if (routeNoI == "38EX" || routeNoI == "38X" || routeNoI == "14PX" || routeNoI == "16PX") {
        downRouteHolder.classList.add('hide');
    } else {
        downRouteHolder.classList.remove('hide');
    }
    setRouteHeader(routeNoI);
    upRouteStopsList.innerHTML = "";
    downRouteStopsList.innerHTML = "";
    for (let i = 0; i < DetailedRoutesUP.length; i++) {
        let routeIndex = DetailedRoutesUP[i][0];
        if (routeIndex == routeNoI) {
            for (let j = 1; j < DetailedRoutesUP[i].length; j++) {
                let listItem = document.createElement("li");
                let stopHeadInList = document.createElement("h3");
                let stopSubHeadInList = document.createElement("p");

                stopHeadInList.innerHTML = DetailedRoutesUP[i][j];
                stopSubHeadInList.innerHTML = DetailedRoutesSubStopUP[i][j];
                // stopSubHeadInList.innerHTML = "";

                listItem.setAttribute('onclick', 'viewStopSender(this)');

                listItem.appendChild(stopHeadInList);
                listItem.appendChild(stopSubHeadInList);
                upRouteStopsList.appendChild(listItem);
            }

            for (let j = 1; j < DetailedRoutesDOWN[i].length; j++) {
                let listItem = document.createElement("li");
                let stopHeadInList = document.createElement("h3");
                let stopSubHeadInList = document.createElement("p");

                stopHeadInList.innerHTML = DetailedRoutesDOWN[i][j];
                stopSubHeadInList.innerHTML = DetailedRoutesSubStopDOWN[i][j];
                // stopSubHeadInList.innerHTML = "";

                listItem.setAttribute('onclick', 'viewStopSender(this)');

                listItem.appendChild(stopHeadInList);
                listItem.appendChild(stopSubHeadInList);
                downRouteStopsList.appendChild(listItem);
            }
        }
    }

    if (noteRoutes[0].includes(routeNoI)) {
        displayNote(buildMessage(noteRoutes[1][noteRoutes[0].indexOf(routeNoI)]));
    }

}

let routeNote = getId('routeNote');
let noteMSG = getId('noteMSG');

function displayNote(msg) {
    routeNote.classList.remove('hide');
    noteMSG.innerHTML = msg;
}

function buildMessage(indication) {
    let msg;
    if (indication == "TNS")
        msg = "This route has been terminated by TGSRTC long ago. We are not sure if this service is running or not.";
    else if (indication == "TS")
        msg = "This route has been terminated by TGSRTC long ago. This bus route is not in service right now";
    else
        msg = "We are working on this part of our app. We will get back to you soon. Please try again later";

    return msg;
}

function setRouteHeader(routeNoI) {
    let routeStartI;
    let routeEndI;


    if (secRoutes_UP.includes(routeNoI)) {
        routeStartI = "SECUNDERABAD";
    } else if (ECILX_UP.includes(routeNoI)) {
        routeStartI = "ECIL X ROADS";
    } else if (AFZ_UP.includes(routeNoI)) {
        routeStartI = "AFZALGUNJ";
    } else if (MP_UP.includes(routeNoI)) {
        routeStartI = "MEHDIPATNAM";
    } else if (MDCL_UP.includes(routeNoI)) {
        routeStartI = "MEDCHAL";
    } else if (PTCR_UP.includes(routeNoI)) {
        routeStartI = "PATANCHERUVU";
    } else if (CBS_UP.includes(routeNoI)) {
        routeStartI = "CBS";
    } else if (CHRM_UP.includes(routeNoI)) {
        routeStartI = "CHARMINAR";
    } else if (KOTI_UP.includes(routeNoI)) {
        routeStartI = "KOTI";
    } else if (KOTIWC_UP.includes(routeNoI)) {
        routeStartI = "KOTI W.COLLEGE";
    } else if (UPL_UP.includes(routeNoI)) {
        routeStartI = "UPPAL";
    } else if (GDMS_UP.includes(routeNoI)) {
        routeStartI = "GANDIMAISAMMA";
    } else if (routeNoI == "195W") {
        routeStartI = "WAVEROCK";
        routeEndI = "BACHUPALLY";
    } else if (routeNoI == "29Q") {
        routeStartI = "BALANAGAR";
        routeEndI = "QUTHBULLAPUR";
    }

    // A ORDER SOURCES

    else if (routeNoI == "203A/218" || routeNoI == "203U/90U") {
        routeStartI = "ADIBATLA";
    }
    else if (routeNoI == "253L/85") {
        routeStartI = "ANOJIGUDA";
    } else if (routeNoI == "205A/290U") {
        routeStartI = "ANAJPUR";
    }
    else if (
        routeNoI == "92A" ||
        routeNoI == "95/3K" || routeNoI == "95/3KN" ||
        routeNoI == "92A/5K" ||
        routeNoI == "92A/49M" ||
        routeNoI == "1Z/229"
    ) {
        routeStartI = "ARAMGHAR";
    }
    else if (
        routeNoI == "16AD/5K" ||
        routeNoI == "16CD/5K" ||
        routeNoI == "16CD/49M" ||
        routeNoI == "16D/5K" ||
        routeNoI == "16D/49M" ||
        routeNoI == "250D/49M" ||
        routeNoI == "15D/20"
    ) {
        routeStartI = "AMBEDKAR NAGAR";
    }

    // B ORDER SOURCES

    else if (routeNoI == "102B/3K" || routeNoI == "102B/218") {
        routeStartI = "BADANGPET";
    } else if (routeNoI == "3N/203N") {
        routeStartI = "BEL";
    } else if (routeNoI == "90L/3K" || routeNoI == "90L/22" || routeNoI == "102/9K" || routeNoI == "102/3K" || routeNoI == "102/185") {
        routeStartI = "BDL";
    } else if (routeNoI == "488/280") {
        routeStartI = "BIBI NAGAR";
    } else if (routeNoI == "18/47U" || routeNoI == "113M/120") {
        routeStartI = "BODUPPAL";
    }

    // C ORDER SOURCES
    else if (routeNoI == "218CA") {
        routeStartI = "CHANDRAYANGUTTA";
    } else if (
        routeNoI == "6X" ||
        routeNoI == "18C/10H" ||
        routeNoI == "18C/30" ||
        routeNoI == "18C/219" ||
        routeNoI == "18C/229" ||
        routeNoI == "113F" ||
        routeNoI == "113FZ" ||
        routeNoI == "113FT"
    ) {
        routeStartI = "CHENGICHERLA";
    } else if (routeNoI == "250C/49M" || routeNoI == "6IW/252") {
        routeStartI = "CHERLAPALLY";
    } else if (routeNoI == "288D/19K") {
        routeStartI = "CHILKOOR BALAJI TEMPLE";
    } else if (routeNoI == "555/290U") {
        routeStartI = "CHOTUPPAL";
    }

    // D ORDER SOURCES

    else if (
        routeNoI == "1D/229" ||
        routeNoI == "90UN" ||
        routeNoI == "158" ||
        routeNoI == "158FL" ||
        routeNoI == "218D" ||
        routeNoI == "524" ||
        routeNoI == "555" ||
        routeNoI == "204DA" ||
        routeNoI == "217D" ||
        routeNoI == "464"
    ) {
        routeStartI = "DILSHUKNAGAR";
    } else if (routeNoI == "211/242") {
        routeStartI = "DONGALA MYSAMMA";
    } else if (routeNoI == "463/290U") {
        routeStartI = "DESHMUKHI";
    } else if (routeNoI == "230P/9K" || routeNoI == "230P/9X" || routeNoI == "230P/9XM") {
        routeStartI = "DUNDIGAL";
    }

    // G ORDER SOURCES

    else if (routeNoI == "204/290U") {
        routeStartI = "GANDICHERUVU";
    }
    else if (routeNoI == "171M/189M") {
        routeStartI = "GAJULARAMARAM";
    }
    else if (
        routeNoI == "280/20" ||
        routeNoI == "280/30" ||
        routeNoI == "280/219" ||
        routeNoI == "281/3K" ||
        routeNoI == "281/16C" ||
        routeNoI == "281/24B" ||
        routeNoI == "281/24L" ||
        routeNoI == "281/113M" ||
        routeNoI == "281/6L" ||
        routeNoI == "281/250" ||
        routeNoI == "282K"
    ) {
        routeStartI = "GHATKESAR";
    } else if (routeNoI == "195G" || routeNoI == "195GJ" || routeNoI == "195GK") {
        routeStartI = "GAR (KOKAPET)";
    } else if (routeNoI == "178G/8A") {
        routeStartI = "GOUSE NAGAR";
    } else if (routeNoI == "116GA/65") {
        routeStartI = "GOWLI DHODDI";
    }

    // H ORDER SOURCES

    else if (routeNoI == "22/90L") {
        routeStartI = "HAKIMPET";
    } else if (
        routeNoI == "158HF" ||
        routeNoI == "218H" ||
        routeNoI == "290/229" ||
        routeNoI == "290U/229" ||
        routeNoI == "299" ||
        routeNoI == "299/100" ||
        routeNoI == "299/1D" || routeNoI == "299/156" ||
        routeNoI == "156/505" ||
        routeNoI == "299D"
    ) {
        routeStartI = "HAYATHNAGAR";
    } else if (routeNoI == "72") {
        routeStartI = "HIGH COURT";
    }

    // I ORDER SOURCES

    else if (routeNoI == "279U" || routeNoI == "279/229" || routeNoI == "277D/72") {
        routeStartI = "IBRAHIMPATNAM";
    } else if (routeNoI == "219I/224G" || routeNoI == "219I/272G") {
        routeStartI = "ISNAPUR";
    } else if (routeNoI == "272I/29B") {
        routeStartI = "INDIRAMMA COLONY";
    }

    // J ORDER SOURCES

    else if (
        routeNoI == "10KJ/18" ||
        routeNoI == "30/18C" ||
        routeNoI == "30/280"
    ) {
        routeStartI = "JAGATHGIRIGUTTA";
    } else if (
        routeNoI == "279" || routeNoI == "280J" || routeNoI == "300/118W" || routeNoI == "290U" || routeNoI == "290U/204" || routeNoI == "290U/205M" || routeNoI == "290" || routeNoI == "90/253T" || routeNoI == "290KJ" || routeNoI == "290U/205A") {
        routeStartI = "JBS";
    } else if (routeNoI == "29B/17H" || routeNoI == "183B") {
        routeStartI = "JEEDIMETLA";
    } else if (routeNoI == "10JP" || routeNoI == "126/300") {
        routeStartI = "JNTU COLLEGE";
    }

    // K ORDER SOURCES

    else if (
        routeNoI == "83J" ||
        routeNoI == "83JA" ||
        routeNoI == "83J/272G"
    ) {
        routeStartI = "KACHEGUDA STATION";
    } else if (routeNoI == "539/1Z") {
        routeStartI = "KANHA";
    } else if (routeNoI == "188/5K") {
        routeStartI = "KALI MANDIR";
    } else if (routeNoI == "242/3K" || routeNoI == "242/17H") {
        routeStartI = "KEESARAGUTTA";
    } else if (
        routeNoI == "10H/16A" ||
        routeNoI == "10H/16C" ||
        routeNoI == "10H/18C" ||
        routeNoI == "127K" ||
        routeNoI == "113M/281" || routeNoI == "6L/281" ||
        routeNoI == "127KL" || routeNoI == "125/5K"
    ) {
        routeStartI = "KONDAPUR";
    } else if (routeNoI == "277K/218" || routeNoI == "254/217") {
        routeStartI = "KONGARAKALAN";
    } else if (routeNoI == "283S/18") {
        routeStartI = "KORREMULA";
    } else if (routeNoI == "532/8A" || routeNoI == "251/8A") {
        routeStartI = "KOTHUR";
    } else if (routeNoI == "10J/171" || routeNoI == "10K/250") {
        routeStartI = "KPHB 4TH PHASE";
    } else if (routeNoI == "19K/288D" || routeNoI == "185/102") {
        routeStartI = "KUKATPALLY";
    } else if (routeNoI == "15H/20") {
        routeStartI = "KUSHAIGUDA";
    }


    // L ORDER SOURCES

    else if (
        routeNoI == "90L" ||
        routeNoI == "90LK" ||
        routeNoI == "90L/229" ||
        routeNoI == "100X" ||
        routeNoI == "156L" ||
        routeNoI == "277L" ||
        routeNoI == "300/126"
    ) {
        routeStartI = "LB NAGAR";
    } else if (routeNoI == "253L/102") {
        routeStartI = "LEMOOR";
    } else if (routeNoI == "217/254") {
        routeStartI = "LINGAMPALLY";
    }

    // M ORDER SOURCES

    else if (routeNoI == "123/65M") {
        routeStartI = "MANCHIREVULA";
    } else if (routeNoI == "47L/16A" || routeNoI == "47L/16C") {
        routeStartI = "MANIKONDA";
    } else if (routeNoI == "224MN/218") {
        routeStartI = "MALLAMPET";
    } else if (routeNoI == "277") {
        routeStartI = "MGBS";
    } else if (
        routeNoI == "218/277K" ||
        routeNoI == "224B" ||
        routeNoI == "224G" ||
        routeNoI == "224X"
    ) {
        routeStartI = "MIYAPUR";
    } else if (routeNoI == "221") {
        routeStartI = "MIYAPUR METRO STN.";
    } else if (routeNoI == "288/113M") {
        routeStartI = "MOINABAD";
    } else if (routeNoI == "11W") {
        routeStartI = "MYTHRIVANAM";
    }

    // N ORDER SOURCES

    else if (
        routeNoI == "203N/3K" ||
        routeNoI == "203N/3N" ||
        routeNoI == "203N/102B" ||
        routeNoI == "203N/218"
    ) {
        routeStartI = "NADERGUL";
    } else if (routeNoI == "49/250") {
        routeStartI = "NAMPALLY";
    } else if (
        routeNoI == "90LV" ||
        routeNoI == "156V" ||
        routeNoI == "158VF"
    ) {
        routeStartI = "NGO'S COLONY";
    } else if (routeNoI == "224MN") {
        routeStartI = "NIZAMPET X ROADS";
    }

    // O ORDER SOURCES
    else if (routeNoI == "26M/49M") {
        routeStartI = "OLD BOWENPALLY";
    }

    // P ORDER SOURCES
    else if (routeNoI == "85/8A" || routeNoI == "85P/8C") {
        routeStartI = "PAHADI SHARIF";
    } else if (routeNoI == "492/280") {
        routeStartI = "PILLAIPALLY";
    }

    // R ORDER SOURCES

    else if (routeNoI == "92R") {
        routeStartI = "RAJENDRA NAGAR";
    } else if (routeNoI == "6RK" || routeNoI == "6R") {
        routeStartI = "RAM NAGAR";
    } else if (routeNoI == "18R") {
        routeStartI = "RAMANTHAPUR CHURCH";
    } else if (routeNoI == "8R" || routeNoI == "5R/5") {
        routeStartI = "RISALA BAZAR";
    } else if (routeNoI == "242RG/15H") {
        routeStartI = "RG COLONY";
    } else if (routeNoI == "252/3K") {
        routeStartI = "RGI AIRPORT";
    } else if (routeNoI == "281R/16A") {
        routeStartI = "RTC COLONY";
    }

    // S ORDER SOURCES

    else if (routeNoI == "105") {
        routeStartI = "SAIDABAD COLONY";
    } else if (routeNoI == "19S/505") {
        routeStartI = "SANATH NAGAR";
    } else if (routeNoI == "20/15H" || routeNoI == "20/16R" || routeNoI == "20/280" || routeNoI == "113S" || routeNoI == "100/299" || routeNoI == "100M" || routeNoI == "100V") {
        routeStartI = "SECRETARIATE";
    } else if (routeNoI == "251/1Z" || routeNoI == "251/188" || routeNoI == "251/2Z" || routeNoI == "251/7Z" || routeNoI == "251/90L" || routeNoI == "251/300") {
        routeStartI = "SHAMSHABAD";
    } else if (routeNoI == "505/19S" || routeNoI == "505/156") {
        routeStartI = "SHANKARPALLY";
    } else if (routeNoI == "171K" || routeNoI == "171/10J" || routeNoI == "171K/219") {
        routeStartI = "SHAHPUR NAGAR";
    } else if (routeNoI == "183SS" || routeNoI == "25S/1" || routeNoI == "25S/1P" || routeNoI == "25S/2") {
        routeStartI = "SUCHITRA";
    } else if (routeNoI == "283D/9X") {
        routeStartI = "SURARAM COLONY";
    }

    // T ORDER SOURCES

    else if (routeNoI == "49MT/250") {
        routeStartI = "TALLAGADDA";
    } else if (routeNoI == "201T/290U") {
        routeStartI = "TARAMATIPET";
    } else if (routeNoI == "253T/90") {
        routeStartI = "TUKKUGUDA FAB CITY";
    }

    // U ORDER SOURCES

    else if (routeNoI == "203U" || routeNoI == "300/251" || routeNoI == "90U/203U" || routeNoI == "280X") {
        routeStartI = "UPPAL X ROADS";
    } else if (routeNoI == "18/10KJ") {
        routeStartI = "UPPAL DEPOT";
    }

    // V ORDER SOURCES

    else if (routeNoI == "18VJ") {
        routeStartI = "VENKATREDDY NAGAR";
    } else if (routeNoI == "702/212") {
        routeStartI = "VARGAL TEMPLE";
    }

    // W ORDER SOURCES

    else if (
        routeNoI == "118W/300" ||
        routeNoI == "195W" ||
        routeNoI == "195WP" || routeNoI == "195WJ" ||
        routeNoI == "252/6IW"
    ) {
        routeStartI = "WAVEROCK";
    } else {
        routeStartI = routeStartI;
    }

    // RT-DESTINATIONS

    if (secRoutes_DN.includes(routeNoI)) {
        routeEndI = "SECUNDERABAD";
    } else if (ECILX_DN.includes(routeNoI)) {
        routeEndI = "ECIL X ROADS";
    } else if (AFZ_DN.includes(routeNoI)) {
        routeEndI = "AFZALGUNJ";
    } else if (MP_DN.includes(routeNoI)) {
        routeEndI = "MEHDIPATNAM";
    } else if (KG_DN.includes(routeNoI)) {
        routeEndI = "KUSHAIGUDA";
    } else if (AMBD_DN.includes(routeNoI)) {
        routeEndI = "AMBEDKAR NAGAR";
    } else if (MDCL_DN.includes(routeNoI)) {
        routeEndI = "MEDCHAL";
    } else if (PTCR_DN.includes(routeNoI)) {
        routeEndI = "PATANCHERUVU";
    } else if (ARGR_DN.includes(routeNoI)) {
        routeEndI = "ARAMGHAR";
    } else if (GDMS_DN.includes(routeNoI)) {
        routeEndI = "GANDIMAISAMMA";
    } else if (GTKS_DN.includes(routeNoI)) {
        routeEndI = "GHATKESAR";
    } else if (BRBD_DN.includes(routeNoI)) {
        routeEndI = "BORABANDA";
    }

    // A ORDER DESTINATIONS

    else if (
        routeNoI == "203A" ||
        routeNoI == "203U" ||
        routeNoI == "218/203A" || routeNoI == "90U/203U"
    ) {
        routeEndI = "ADIBATLA";
    } else if (routeNoI == "230A" || routeNoI == "230AN") {
        routeEndI = "ANNARAM";
    } else if (routeNoI == "288A") {
        routeEndI = "AMDAPUR";
    } else if (routeNoI == "204DA" || routeNoI == "204UA" || routeNoI == "205A" || routeNoI == "290UA" || routeNoI == "290U/205A") {
        routeEndI = "ANAJPUR";
    } else if (routeNoI == "242A" || routeNoI == "242GA") {
        routeEndI = "ANKIREDDY PALLY";
    } else if (routeNoI == "85/253L") {
        routeEndI = "ANNOJIGUDA";
    } else if (routeNoI == "18/47U") {
        routeEndI = "AOU UNIVERSITY";
    } else if (routeNoI == "83JA" || routeNoI == "189M") {
        routeEndI = "APUROOPA COLONY";
    } else if (routeNoI == "288C") {
        routeEndI = "APPOJIGUDA";
    } else if (routeNoI == "3M") {
        routeEndI = "AS RAO NAGAR";
    } else if (routeNoI == "245A") {
        routeEndI = "AUSHAPUR";
    } else if (routeNoI == "9A") {
        routeEndI = "AG COLONY";
    }

    // B ORDER DESTINATIONS

    else if (routeNoI == "201") {
        routeEndI = "BACHARAM";
    }
    else if (routeNoI == "195W") {
        routeEndI = "BACHUPALLY";
    } else if (
        routeNoI == "3K/102B" ||
        routeNoI == "90BE" ||
        routeNoI == "100X" ||
        routeNoI == "102B" ||
        routeNoI == "218/102B"
    ) {
        routeEndI = "BADANGPET";
    } else if (routeNoI == "227") {
        routeEndI = "BAHUDURPALLY";
    } else if (routeNoI == "288E") {
        routeEndI = "BAKARAM";
    } else if (routeNoI == "24B" || routeNoI == "17DH" || routeNoI == "17DS") {
        routeEndI = "BALAJI NAGAR";
    } else if (routeNoI == "183B") {
        routeEndI = "BALANAGAR";
    } else if (routeNoI == "102M") {
        routeEndI = "BALAPUR";
    } else if (routeNoI == "90B") {
        routeEndI = "BANDLAGUDA DEPOT";
    } else if (routeNoI == "2C") {
        routeEndI = "BARKAS";
    } else if (routeNoI == "113B") {
        routeEndI = "BARKATPURA";
    } else if (
        routeNoI == "3K/90L" ||
        routeNoI == "3K/102" ||
        routeNoI == "9K/102" ||
        routeNoI == "22/90L" ||
        routeNoI == "185/102"
    ) {
        routeEndI = "BDL";
    } else if (routeNoI == "203N/3N") {
        routeEndI = "BEL";
    } else if (routeNoI == "23B") {
        routeEndI = "BHUDEVI NAGAR";
    } else if (routeNoI == "280/488" || routeNoI == "490S") {
        routeEndI = "BIBI NAGAR";
    } else if (routeNoI == "212") {
        routeEndI = "BITS PILANI";
    } else if (routeNoI == "3Y" || routeNoI == "24BJ") {
        routeEndI = "BJR NAGAR";
    } else if (routeNoI == "18B" || routeNoI == "50B") {
        routeEndI = "BODUPPAL";
    } else if (routeNoI == "242B" || routeNoI == "280B") {
        routeEndI = "BOGARAM";
    } else if (routeNoI == "224B") {
        routeEndI = "BOLLARUM";
    } else if (routeNoI == "229B") {
        routeEndI = "BOWENPALLY";
    } else if (routeNoI == "272" || routeNoI == "272B") {
        routeEndI = "BOWRAMPET";
    } else if (routeNoI == "202B") {
        routeEndI = "BRAHMANAPALLY";
    }

    // C ORDER DESTINATIONS

    else if (
        routeNoI == "1C" ||
        routeNoI == "8R" ||
        routeNoI == "86C" ||
        routeNoI == "272G/9X" ||
        routeNoI == "230P/9X" ||
        routeNoI == "283D/9X"
    ) {
        routeEndI = "CBS";
    } else if (routeNoI == "8A" || routeNoI == "8AK" || routeNoI == "8C") {
        routeEndI = "CHANDRAYANGUTTA";
    } else if (routeNoI == "230P/9XM" || routeNoI == "253L/85") {
        routeEndI = "CHARMINAR";
    } else if (
        routeNoI == "10H/18C" ||
        routeNoI == "18C" ||
        routeNoI == "30/18C" ||
        routeNoI == "71A" ||
        routeNoI == "219/18C" ||
        routeNoI == "229/18C" ||
        routeNoI == "250S"
    ) {
        routeEndI = "CHENGICHERLA";
    } else if (routeNoI == "250E" || routeNoI == "250SS") {
        routeEndI = "CHENGICHERLA DEPOT";
    } else if (
        routeNoI == "17CS" ||
        routeNoI == "49M/250C" ||
        routeNoI == "250C" ||
        routeNoI == "252/6IW"
    ) {
        routeEndI = "CHERLAPALLY";
    } else if (routeNoI == "593") {
        routeEndI = "CHEVELLA";
    } else if (routeNoI == "19K/288D" || routeNoI == "288D") {
        routeEndI = "CHILKOOR BALAJI TEMPLE";
    } else if (routeNoI == "555" || routeNoI == "290U/555") {
        routeEndI = "CHOTUPPAL";
    } else if (routeNoI == "211M") {
        routeEndI = "CRPF";
    }

    // D ORDER DESTINATIONS

    else if (routeNoI == "568") {
        routeEndI = "DAMARAKUNTA";
    } else if (routeNoI == "464") {
        routeEndI = "DANDUMAILARAM";
    } else if (routeNoI == "290U/463") {
        routeEndI = "DESHMUKHI";
    } else if (routeNoI == "211DY") {
        routeEndI = "DEVARAYAMJAL";
    } else if (routeNoI == "241T") {
        routeEndI = "DHARMAVARAM";
    } else if (
        routeNoI == "1D" ||
        routeNoI == "90DL" ||
        routeNoI == "107JD" ||
        routeNoI == "107VR" ||
        routeNoI == "299D" ||
        routeNoI == "229/1D"
    ) {
        routeEndI = "DILSHUKNAGAR";
    } else if (routeNoI == "242/211") {
        routeEndI = "DONGALAMYSAMMA";
    } else if (routeNoI == "211CD") {
        routeEndI = "DRDO (YADGARPALLY)";
    } else if (
        routeNoI == "9K/230P" ||
        routeNoI == "9X/230P" ||
        routeNoI == "9XM/230P" ||
        routeNoI == "230P"
    ) {
        routeEndI = "DUNDIGAL";
    } else if (routeNoI == "6X") {
        routeEndI = "IRRUMANZIL";
    } else if (routeNoI == "158") {
        routeEndI = "ESI HOSPITAL";
    }

    // G ORDER DESTINATIONS

    else if (routeNoI == "221G") {
        routeEndI = "GACHIBOWLI";
    } else if (routeNoI == "290U/204") {
        routeEndI = "GANDICHERUVU";
    } else if (routeNoI == "171" || routeNoI == "189M/171M") {
        routeEndI = "GAJULARAMARAM";
    } else if (routeNoI == "44X") {
        routeEndI = "GANGAPUTRA COLONY";
    } else if (routeNoI == "65MG" || routeNoI == "66G" || routeNoI == "5G" || routeNoI == "119M") {
        routeEndI = "GOLCONDA";
    } else if (routeNoI == "25M" || routeNoI == "25AJ/M") {
        routeEndI = "GOPAL NAGAR";
    } else if (routeNoI == "8A/178G") {
        routeEndI = "GOUSE NAGAR";
    } else if (routeNoI == "65/116GA" || routeNoI == "65M/116G" || routeNoI == "116N") {
        routeEndI = "GOWLI DHODDI";
    } else if (routeNoI == "201G") {
        routeEndI = "GOWRELLY";
    } else if (routeNoI == "23GF") {
        routeEndI = "GREEN FIELDS";
    }

    // H ORDER DESTINATIONS

    else if (routeNoI == "22" || routeNoI == "90L/22") {
        routeEndI = "HAKIMPET";
    } else if (
        routeNoI == "1D/299" ||
        routeNoI == "72H" ||
        routeNoI == "156/299" ||
        routeNoI == "100/299" ||
        routeNoI == "229/290" ||
        routeNoI == "229/290U" ||
        routeNoI == "290" ||
        routeNoI == "290U" ||
        routeNoI == "505/156"
    ) {
        routeEndI = "HAYATHNAGAR";
    } else if (routeNoI == "3N") {
        routeEndI = "HEMA NAGAR";
    }

    // I ORDER DESTINATIONS

    else if (
        routeNoI == "72/277D" ||
        routeNoI == "229/279" ||
        routeNoI == "277" ||
        routeNoI == "277D" ||
        routeNoI == "277L" ||
        routeNoI == "279"
    ) {
        routeEndI = "IBRAHIMPATNAM";
    } else if (routeNoI == "224X") {
        routeEndI = "IDA BOLLARUM";
    } else if (routeNoI == "29B/272I" || routeNoI == "272IG/29B") {
        routeEndI = "INDIRAMMA COLONY";
    } else if (routeNoI == "224G/219I" || routeNoI == "272G/219I") {
        routeEndI = "ISNAPUR";
    }

    // J ORDER DESTINATIONS

    else if (
        routeNoI == "10KJ" ||
        routeNoI == "18/10KJ" ||
        routeNoI == "18C/30" ||
        routeNoI == "19KJ" ||
        routeNoI == "30" ||
        routeNoI == "185G" ||
        routeNoI == "280/30"
    ) {
        routeEndI = "JAGATHGIRIGUTTA";
    } else if (routeNoI == "72J") {
        routeEndI = "JAIPURI COLONY";
    } else if (
        routeNoI == "18J" ||
        routeNoI == "18R" ||
        routeNoI == "18VJ" ||
        routeNoI == "90L" ||
        routeNoI == "90LV" ||
        routeNoI == "118W/300" ||
        routeNoI == "204/290U" || routeNoI == "205A/290U" ||
        routeNoI == "253T/90"
    ) {
        routeEndI = "JBS";
    } else if (
        routeNoI == "9K" ||
        routeNoI == "9X" ||
        routeNoI == "9XM" ||
        routeNoI == "17H/29B" ||
        routeNoI == "29B" ||
        routeNoI == "83J"
    ) {
        routeEndI = "JEEDIMETLA";
    } else if (
        routeNoI == "1J" ||
        routeNoI == "2J" ||
        routeNoI == "3KJ" ||
        routeNoI == "86J"
    ) {
        routeEndI = "JIYAGUDA";
    } else if (routeNoI == "498VJ") {
        routeEndI = "JINNARAM";
    } else if (routeNoI == "10J" || routeNoI == "300/126" || routeNoI == "126M" || routeNoI == "195G" || routeNoI == "195GJ" || routeNoI == "195GK" || routeNoI == "195WJ") {
        routeEndI = "JNTU COLLEGE";
    } else if (routeNoI == "25AJ") {
        routeEndI = "JONNABANDA";
    } else if (routeNoI == "532") {
        routeEndI = "JP DARGAH";
    }

    // K ORDER DESTINATIONS

    else if (
        routeNoI == "1X" ||
        routeNoI == "90LK" ||
        routeNoI == "272G/83J"
    ) {
        routeEndI = "KACHEGUDA STATION";
    } else if (routeNoI == "1K" || routeNoI == "2K" || routeNoI == "71K") {
        routeEndI = "KACHEGUDA DEPOT";
    } else if (routeNoI == "5K/188" || routeNoI == "6RK" || routeNoI == "188") {
        routeEndI = "KALI MANDIR";
    } else if (routeNoI == "530") {
        routeEndI = "KANDUKUR";
    } else if (routeNoI == "1Z/539" || routeNoI == "539") {
        routeEndI = "KANHA";
    } else if (routeNoI == "290KP" || routeNoI == "523K") {
        routeEndI = "KAVADIPALLY";
    } else if (routeNoI == "231KN") {
        routeEndI = "KAZIPALLY";
    } else if (
        routeNoI == "3K/242" ||
        routeNoI == "242" ||
        routeNoI == "242/17H" || routeNoI == '17H/242'
    ) {
        routeEndI = "KEESARAGUTTA";
    } else if (routeNoI == "242G") {
        routeEndI = "KEESARA";
    } else if (routeNoI == "498") {
        routeEndI = "KESHAVAPUR";
    } else if (routeNoI == "211K") {
        routeEndI = "KESHAVARAM";
    } else if (routeNoI == "445") {
        routeEndI = "KETHIREDDYPALLY";
    } else if (routeNoI == "23BK" || routeNoI == "23K") {
        routeEndI = "KISTAMMA ENCLAVE";
    } else if (routeNoI == "116/220K") {
        routeEndI = "KOLLURU";
    } else if (routeNoI == "211D") {
        routeEndI = "KOLTHUR";
    } else if (
        routeNoI == "10H" ||
        routeNoI == "16A/10H" ||
        routeNoI == "16C/10H" ||
        routeNoI == "18C/10H" ||
        routeNoI == "147" ||
        routeNoI == "282K" ||
        routeNoI == "281/113M" ||
        routeNoI == "281/6L" ||
        routeNoI == "5K/125"
    ) {
        routeEndI = "KONDAPUR";
    } else if (routeNoI == "203AK" || routeNoI == "218/277K" || routeNoI == "217/254") {
        routeEndI = "KONGARAKALAN";
    } else if (routeNoI == "18/283S" || routeNoI == "283K") {
        routeEndI = "KORREMULA";
    } else if (routeNoI == "8A/532" || routeNoI == "8A/251") {
        routeEndI = "KOTHUR";
    } else if (routeNoI == "498K") {
        routeEndI = "KOTHAPALLY";
    } else if (routeNoI == "40" || routeNoI == "115" || routeNoI == "127K" || routeNoI == "86K" || routeNoI == "224MN/218") {
        routeEndI = "KOTI";
    } else if (routeNoI == "299" || routeNoI == "1W" || routeNoI == "253L/102") {
        routeEndI = "KOTI W.COLLEGE";
    } else if (
        routeNoI == "10K" ||
        routeNoI == "19K" ||
        routeNoI == "19M" ||
        routeNoI == "113K" ||
        routeNoI == "113KT" ||
        routeNoI == "250/10K" ||
        routeNoI == "171/10J"
    ) {
        routeEndI = "KPHB 4TH PHASE";
    } else if (routeNoI == "288D/19K" || routeNoI == "102/185") {
        routeEndI = "KUKATPALLY";
    } else if (routeNoI == "171K") {
        routeEndI = "KPHB MAIN ROAD";
    } else if (routeNoI == "72HK" || routeNoI == "290KJ") {
        routeEndI = "KUNTLOOR";
    } else if (routeNoI == "537") {
        routeEndI = "KODICHERLA";
    } else if (routeNoI == "495") {
        routeEndI = "KANUKUNTA";
    }

    // L ORDER DESTINATIONS

    else if (
        routeNoI == "1L" ||
        routeNoI == "107JL" ||
        routeNoI == "107VL" ||
        routeNoI == "127KL" ||
        routeNoI == "229/90L" ||
        routeNoI == "300L" ||
        routeNoI == "126/300"
    ) {
        routeEndI = "LB NAGAR";
    } else if (routeNoI == "1JL") {
        routeEndI = "LANGER HOUSE";
    } else if (routeNoI == "102/253L") {
        routeEndI = "LEMOOR";
    } else if (
        routeNoI == "10HL" ||
        routeNoI == "10KL" ||
        routeNoI == "113KL" ||
        routeNoI == "113KLT" ||
        routeNoI == "113ILT" ||
        routeNoI == "116NL" || routeNoI == "216" ||
        routeNoI == "216M" ||
        routeNoI == "254/217" ||
        routeNoI == "218L"
    ) {
        routeEndI = "LINGAMPALLY";
    }

    // M ORDER DESTINATIONS

    else if (routeNoI == "218/224MN" || routeNoI == "224MN") {
        routeEndI = "MALLAMPET";
    } else if (routeNoI == "412") {
        routeEndI = "MALL";
    } else if (routeNoI == "290U/205M") {
        routeEndI = "MAJEEDPUR";
    } else if (routeNoI == "201M") {
        routeEndI = "MARRIPALLY";
    } else if (routeNoI == "38M") {
        routeEndI = "MAHINDRA HILLS";
    } else if (routeNoI == "253" || routeNoI == "253W" || routeNoI == "458") {
        routeEndI = "MAHESHWARAM";
    } else if (
        routeNoI == "47YM" ||
        routeNoI == "65M/123" ||
        routeNoI == "113M/120" ||
        routeNoI == "221" ||
        routeNoI == "123"
    ) {
        routeEndI = "MANCHIREVULA";
    } else if (
        routeNoI == "5KM" ||
        routeNoI == "16A/47L" ||
        routeNoI == "16C/47L" ||
        routeNoI == "47L" ||
        routeNoI == "47Y"
    ) {
        routeEndI = "MANIKONDA";
    } else if (routeNoI == "22D") {
        routeEndI = "MB DARGAH";
    } else if (
        routeNoI == "10KM" ||
        routeNoI == "19KM" ||
        routeNoI == "113KM" ||
        routeNoI == "277K/218"
    ) {
        routeEndI = "MIYAPUR";
    } else if (routeNoI == "113M/288" || routeNoI == "288" || routeNoI == "288K") {
        routeEndI = "MOINABAD";
    } else if (routeNoI == "251M") {
        routeEndI = "MUCHINTHAL";
    } else if (routeNoI == "231") {
        routeEndI = "MEDICITY";
    } else if (routeNoI == "102") {
        routeEndI = "MIDHANI DEPOT";
    }

    // N ORDER DESTINATIONS

    else if (
        routeNoI == "3N/203N" || routeNoI == "3K/203N" ||
        routeNoI == "102B/203N" ||
        routeNoI == "203N" ||
        routeNoI == "218/203N" ||
        routeNoI == "277N"
    ) {
        routeEndI = "NADERGUL";
    } else if (routeNoI == "8N" || routeNoI == "20P" || routeNoI == "49" || routeNoI == "250/49") {
        routeEndI = "NAMPALLY";
    } else if (routeNoI == "219N") {
        routeEndI = "NARENDAR COLONY";
    } else if (routeNoI == "1MD") {
        routeEndI = "NEW MARUTHI NAGAR";
    } else if (routeNoI == "280N") {
        routeEndI = "NFC NAGAR";
    } else if (routeNoI == "1V" || routeNoI == "72V" || routeNoI == "100V") {
        routeEndI = "NGO'S COLONY";
    } else if (routeNoI == "233") {
        routeEndI = "NUTHANAKAL";
    }

    // O ORDER DESTINATIONS

    else if (routeNoI == "26M" || routeNoI == "26N" || routeNoI == "49M/26M") {
        routeEndI = "OLD BOWENPALLY";
    } else if (routeNoI == "120") {
        routeEndI = "OSMANSAGAR";
    }

    // P ORDER DESTINATIONS

    else if (routeNoI == "8A/85" || routeNoI == "8C/85P") {
        routeEndI = "PAHADI SHARIF";
    } else if (routeNoI == "25P") {
        routeEndI = "PANCHASHEELA";
    } else if (routeNoI == "46") {
        routeEndI = "PATIGADDA";
    } else if (routeNoI == "524") {
        routeEndI = "POCHAMPALLY";
    } else if (routeNoI == "211") {
        routeEndI = "POTHAIPALLY";
    } else if (routeNoI == "10JP" || routeNoI == "19MP" || routeNoI == "31P") {
        routeEndI = "PRAGATHI NAGAR";
    } else if (routeNoI == "3L" || routeNoI == "14P" || routeNoI == "16P") {
        routeEndI = "PRASHANTH NAGAR";
    } else if (routeNoI == "10HP") {
        routeEndI = "PREM NAGAR";
    } else if (routeNoI == "229P") {
        routeEndI = "PUDUR";
    } else if (routeNoI == "280/492") {
        routeEndI = "PILLAIPALLY";
    }

    // Q ORDER DESTINATIONS
    else if (routeNoI == "201Q") {
        routeEndI = "QUTHBULLAPUR";
    }

    // R ORDER DESTINATIONS

    else if (routeNoI == "94R" || routeNoI == "94RM" || routeNoI == "5K/92R") {
        routeEndI = "RAJENDRA NAGAR";
    } else if (routeNoI == "22K" || routeNoI == "104A") {
        routeEndI = "RAJIV GRUHAKALPA";
    } else if (routeNoI == "589") {
        routeEndI = "RAMAYAMPET";
    } else if (routeNoI == "290UF") {
        routeEndI = "RAMOJI FILM CITY";
    } else if (routeNoI == "203AR") {
        routeEndI = "RAVIRYALA";
    } else if (routeNoI == "447R") {
        routeEndI = "RAVULAPALLY";
    } else if (routeNoI == "103") {
        routeEndI = "RCI";
    } else if (
        routeNoI == "15H/242RG" ||
        routeNoI == "242RG"
    ) {
        routeEndI = "RG COLONY";
    } else if (routeNoI == "3K/252") {
        routeEndI = "RGI AIRPORT";
    } else if (routeNoI == "5R" || routeNoI == "5/5R") {
        routeEndI = "RISALA BAZAR";
    } else if (routeNoI == "104R") {
        routeEndI = "RN REDDY";
    } else if (routeNoI == "16A/281R") {
        routeEndI = "RTC COLONY";
    }

    // S ORDER DESTINATIONS
    else if (routeNoI == "1VS") {
        routeEndI = "SAHAB NAGAR";
    }
    else if (routeNoI == "1VM" || routeNoI == "156S") {
        routeEndI = "SAI NAGAR";
    } else if (routeNoI == "10" || routeNoI == "19S" || routeNoI == "505/19S") {
        routeEndI = "SANATH NAGAR";
    } else if (routeNoI == "204U") {
        routeEndI = "SANGHI NAGAR";
    } else if (
        routeNoI == "1HD" ||
        routeNoI == "107JS" ||
        routeNoI == "107VS"
    ) {
        routeEndI = "SAROORNAGAR";
    } else if (
        routeNoI == "15H/20" ||
        routeNoI == "16R/20" ||
        routeNoI == "105" || routeNoI == "299/100" ||
        routeNoI == "280/20"
    ) {
        routeEndI = "SECRETARIATE";
    } else if (
        routeNoI == "10J/171" ||
        routeNoI == "24SS" ||
        routeNoI == "183SS" ||
        routeNoI == "219/171K"
    ) {
        routeEndI = "SHAHPUR NAGAR";
    } else if (
        routeNoI == "1Z/251" ||
        routeNoI == "2Z/251" ||
        routeNoI == "5K/251" ||
        routeNoI == "7Z/251" ||
        routeNoI == "90L/251" ||
        routeNoI == "188/251" ||
        routeNoI == "300/251"
    ) {
        routeEndI = "SHAMSHABAD";
    } else if (routeNoI == "19S/505" || routeNoI == "505" || routeNoI == "156/505") {
        routeEndI = "SHANKARPALLY";
    } else if (routeNoI == "25MS") {
        routeEndI = "SHARAN NAGAR";
    } else if (routeNoI == "30S") {
        routeEndI = "SRINIVAS COLONY";
    } else if (routeNoI == "92K" || routeNoI == "95K" || routeNoI == "2Z") {
        routeEndI = "SRI RAM COLONY";
    } else if (routeNoI == "171R") {
        routeEndI = "SRI RAM NAGAR";
    } else if (routeNoI == "29S") {
        routeEndI = "SUBHASH NAGAR";
    } else if (
        routeNoI == "1/25S" ||
        routeNoI == "1P/25S" ||
        routeNoI == "2/25S" ||
        routeNoI == "23GS" ||
        routeNoI == "23BS" ||
        routeNoI == "24S" ||
        routeNoI == "25S"
    ) {
        routeEndI = "SUCHITRA";
    } else if (routeNoI == "9X/283D" || routeNoI == "283C") {
        routeEndI = "SURARAM COLONY";
    } else if (routeNoI == "283VS") {
        routeEndI = "SURARAM VILLAGE";
    } else if (routeNoI == "25A") {
        routeEndI = "SURYA NAGAR";
    } else if (routeNoI == "72" || routeNoI == "100M") {
        routeEndI = "SATYA NAGAR";
    }

    // T ORDER DESTINATIONS

    else if (routeNoI == "49MT" || routeNoI == "250/49MT") {
        routeEndI = "TALLAGADDA";
    } else if (routeNoI == "290U/201T") {
        routeEndI = "TARAMATIPET";
    } else if (routeNoI == "3T") {
        routeEndI = "TARNAKA";
    } else if (routeNoI == "23T") {
        routeEndI = "TELECOM COLONY";
    } else if (routeNoI == "283T") {
        routeEndI = "TENUGUDEM";
    } else if (routeNoI == "38T") {
        routeEndI = "TUKARAMGATE";
    } else if (routeNoI == "90/253T") {
        routeEndI = "TUKKUGUDA FAB CITY";
    } else if (routeNoI == "212T") {
        routeEndI = "TURKAPALLY";
    } else if (routeNoI == "578") {
        routeEndI = "M TURKAPALLY";
    }

    // U ORDER DESTINATIONS

    else if (routeNoI == "211B" || routeNoI == "498U") {
        routeEndI = "UDDAMARRI";
    } else if (
        routeNoI == "18" || routeNoI == "272G/18" ||
        routeNoI == "279U" ||
        routeNoI == "288/113M" ||
        routeNoI == "300"
    ) {
        routeEndI = "UPPAL";
    } else if (routeNoI == "10KJ/18") {
        routeEndI = "UPPAL DEPOT";
    } else if (routeNoI == "90UN" || routeNoI == "203U/90U" || routeNoI == "251/300") {
        routeEndI = "UPPAL X ROADS";
    } else if (routeNoI == "2U" || routeNoI == "8UA") {
        routeEndI = "UPPUGUDA";
    }

    // V ORDER DESTINATIONS

    else if (routeNoI == "212/702") {
        routeEndI = "VARGAL TEMPLE";
    } else if (routeNoI == "85V") {
        routeEndI = "VENKATAPUR";
    } else if (routeNoI == "18V") {
        routeEndI = "VENKATREDDY NAGAR";
    } else if (routeNoI == "17DV" || routeNoI == "17V") {
        routeEndI = "VIKAS NAGAR";
    } else if (routeNoI == "3V") {
        routeEndI = "VST";
    }

    // W ORDER DESTINATIONS

    else if (
        routeNoI == "10W" || routeNoI == "10HW" ||
        routeNoI == "11W" ||
        routeNoI == "113W" ||
        routeNoI == "300/118W" ||
        routeNoI == "6IW/252"
    ) {
        routeEndI = "WAVEROCK";
    } else if (routeNoI == "21W") {
        routeEndI = "WEST VENKATAPURAM";
    }

    // V ORDER DESTINATONS
    else if (routeNoI == "10FV") {
        routeEndI = "VBIT PARK";
    }

    // Y ORDER DESTINATIONS
    else if (routeNoI == "580") {
        routeEndI = "YADAGIRIGUTTA";
    } else if (routeNoI == "16NY" || routeNoI == "24") {
        routeEndI = "YAPRAL";
    } else if (routeNoI == "10Y") {
        routeEndI = "YOUSUFGUDA";
    } else {
        routeEndI = routeEndI;
    }

    // SINGLES
    if (routeNoI == "224/47D") {
        routeEndI = "DARGAH";
        routeStartI = "MAYURI NAGAR";
    } else if (routeNoI == "16/20") {
        routeStartI = "SAFILGUDA";
        routeEndI = "IRRUM MANZIL";
    } else if (routeNoI == "16ES") {
        routeStartI = "ECIL X ROADS";
        routeEndI = "IRRUM MANZIL";
    } else if (routeNoI == "20/16") {
        routeStartI = "IRRUM MANZIL";
        routeEndI = "SAFILGUDA";
    } else if (routeNoI == "47D/224") {
        routeStartI = "DARGAH";
        routeEndI = "MAYURI NAGAR";
    } else if (routeNoI == "41C/9X") {
        routeStartI = "ASBESTOS COLONY";
        routeEndI = "CBS";
    } else if (routeNoI == "9X/41C") {
        routeStartI = "CBS";
        routeEndI = "ASBESTOS COLONY";
    } else if (routeNoI == "16S/10YF") {
        routeStartI = "SAFILGUDA";
        routeEndI = "BORABANDA";
    } else if (routeNoI == "10YF/16S") {
        routeStartI = "BORABANDA";
        routeEndI = "SAFILGUDA";
    } else if (routeNoI == "205M/290U") {
        routeStartI = "MAJEEDPUR";
        routeEndI = "JBS";
    } else if (routeNoI == "8/37") {
        routeStartI = "GANDHI BHAVAN";
        routeEndI = "KUSHAIGUDA";
    } else if (routeNoI == "37/8") {
        routeStartI = "KUSHAIGUDA";
        routeEndI = "GANDHI BHAVAN";
    } else if (routeNoI == "195H") {
        routeStartI = "HCU DEPOT";
        routeEndI = "BACHUPALLY";
    } else if (routeNoI == "195J") {
        routeStartI = "WAVEROCK";
        routeEndI = "JAGATHGIRIGUTTA";
    } else if (routeNoI == "195P") {
        routeStartI = "GAR";
        routeEndI = "PRAGATHI NAGAR";
    } else if (routeNoI == "215") {
        routeStartI = "ARAMGHAR";
        routeEndI = "KONDAPUR";
    } else if (routeNoI == "218/102") {
        routeStartI = "PATANCHERUVU";
        routeEndI = "MIDHANI";
    } else if (routeNoI == "102/218") {
        routeStartI = "MIDHANI";
        routeEndI = "PATANCHERUVU";
    } else if (routeNoI == "252S") {
        routeStartI = "AFZALGUNJ";
        routeEndI = "SHANKARAPUR";
    } else if (routeNoI == "290U/201") {
        routeStartI = "JBS";
        routeEndI = "BACHARAM";
    } else if (routeNoI == "201/290U") {
        routeStartI = "BACHARAM";
        routeEndI = "JBS";
    } else if (routeNoI == "272G/242") {
        routeStartI = "GANDIMAISAMMA";
        routeEndI = "KEESARAGUTTA";
    } else if (routeNoI == "242/272G") {
        routeStartI = "KEESARAGUTTA";
        routeEndI = "GANDIMAISAMMA";
    } else if (routeNoI == "216KL") {
        routeStartI = "KOTI";
        routeEndI = "LINGAMPALLY";
    } else if (routeNoI == "92R/5K") {
        routeStartI = "RAJENDRA NAGAR";
        routeEndI = "SECUNDERABAD";
    } else if (routeNoI == "251/5K") {
        routeStartI = "SHAMSHABAD";
        routeEndI = "SECUNDERABAD";
    } else if (routeNoI == "183S/219") {
        routeStartI = "SHAHPUR NAGAR";
        routeEndI = "PATANCHERUVU";
    } else if (routeNoI == "219/183S") {
        routeStartI = "PATANCHERUVU";
        routeEndI = "SHAHPUR NAGAR";
    }

    let routeViaI = viaArray[routesArray.indexOf(routeNoI)];
    upViaList.innerHTML = routeViaI;
    routeViaI = viaArray[routesArray.indexOf(routeNoI)].split(",");
    let viaString = "";
    for (let i = routeViaI.length - 1; i >= 0; i--) {
        if (i == 0) {
            viaString += routeViaI[i];
        } else {
            viaString += routeViaI[i] + ", ";
        }
    }

    downViaList.innerHTML = viaString;

    upSource.innerHTML = routeStartI;
    upDestination.innerHTML = routeEndI;

    downSource.innerHTML = routeEndI;
    downDestination.innerHTML = routeStartI;
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

function viewStopSender(ref) {
    viewStop(ref.children[0]);
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
    input1.value = ref[0].slice(0, -1);
    input2.value = ref[1].slice(1);
    fromToFetchOutput(input1.value, input2.value);
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
    const filterValue = ref.value.toUpperCase();
    fareChartOutput.classList.add('hide');
    let filteredArray = []
    if (ref.value.length == 0) {
        ref.parentNode.children[2].style.visibility = "hidden";
    } else {
        ref.parentNode.children[2].style.visibility = "visible";
    }
    filteredArray = suggessionsArray.filter((item) =>
        item.toUpperCase().startsWith(filterValue)
    );
    displayList(filteredArray, ref.id);
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
    ref.classList.add('hide');
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

function expandList(ref) {
    ref.classList.toggle('click');
    ref.parentNode.parentNode.parentNode.classList.toggle('expand');
    if (ref.classList[0] == 'click') {
        ref.parentNode.children[0].innerHTML = 'Hide Stops';
    } else {
        ref.parentNode.children[0].innerHTML = 'View Stops';
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
        StopNameHead.style.fontSize = "52px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 8) {
        StopNameHead.style.fontSize = "48px";
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
    }
}

function openMenu() {
    suggessionsList.innerHTML = "";
    sideScreenMenu.classList.toggle('open');
}

function closeOutputScreen(ref) {
    if (ref.id == "otherSectionsCloseBtn") {
        console.log();
        if (feature == "5") {
            navs[0].click();
        } else {
            navs[feature - 1].click();
        }
        ref.parentNode.parentNode.classList.add('close');
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

function openPopUpBox(type, message) {
    popUpScreen.classList.remove('hide');
    alertBox.classList.add('hide');
    contactBox.classList.add('hide');
    successBox.classList.add('hide');
    errorBox.classList.add('hide');

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
            errorMessage.innerHTML = "We’re working on adding this route. Please try again soon.";
        } else if (message == "INV_S") {
            errorMessage.innerHTML = "Your are travelling from invalid place, kindly choose it from our list.";
        } else if (message == "INV_D") {
            errorMessage.innerHTML = "Your are travelling to invalid place, kindly choose it from our list.";
        }
    }
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
    menuItems.children[4].children[0].src = 'images/icons/moreWhite.png';
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
            ref.children[0].src = 'images/icons/helpBlack.png';
            break;
        case 4:
            ref.children[0].src = 'images/icons/contactBlack.png';
            break;
        case 5:
            ref.children[0].src = 'images/icons/moreBlack.png';
            break;

        default:
            break;
    }
}

function expandHelpQues(ref) {
    ref.parentNode.classList.toggle('expand');
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
