'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "15a66fd73c18dc72c287b9cf9c4d41bd",
"assets/assets/fonts/proxima_bold.ttf": "8ecbf86174e90b7eb6915c2ddb5d0c40",
"assets/assets/fonts/proxima_regular.ttf": "a46451a6ffb37ebed2b644ee24c3ffe0",
"assets/assets/fonts/proxima_sbold.ttf": "9e52e1a08184d9a72963135129ac77cb",
"assets/assets/images/2.0x/action_cancel.png": "ccbe72dc3c3208fa1ef45a96436d15e4",
"assets/assets/images/2.0x/action_check.png": "a10f7b83966c757cdf845ce52c5556ef",
"assets/assets/images/2.0x/action_qty.png": "f508c91cd14ac3343f4649fc6d421379",
"assets/assets/images/2.0x/action_replace.png": "4890563c0f04cfad8dc4ec167e84682b",
"assets/assets/images/2.0x/action_review.png": "8f16d13557b929e62e0aa864db94c6b5",
"assets/assets/images/2.0x/active_bottom_order.png": "7b9300a061a6f98691b082cbf6f4e185",
"assets/assets/images/2.0x/active_bottom_product_list.png": "b8635dd68c2f08cf5de2a207156c94c8",
"assets/assets/images/2.0x/arrow-left.png": "5c8c26ccd5224ea996091e6b80305b96",
"assets/assets/images/2.0x/big-store-icon.png": "cf069c104397c8e25066df9820549f9a",
"assets/assets/images/2.0x/bottom_dashboard.png": "6524cab96c8bcd5bb873b6d7ba63825b",
"assets/assets/images/2.0x/bottom_discount.png": "312b8889ef9c3831a78ffd28036c7b17",
"assets/assets/images/2.0x/bottom_discount_active.png": "a7603e2579f9fbb733ef2643642c2408",
"assets/assets/images/2.0x/bottom_order.png": "019d31d71506f5adc099a9298bd33218",
"assets/assets/images/2.0x/bottom_product_list.png": "d61a38daee795ba7b31a645155ef3d4b",
"assets/assets/images/2.0x/call.png": "fbd8a1807260ffbbce931bec0baf7ba6",
"assets/assets/images/2.0x/chat.png": "4a34b531ba3c84da7603ae3a815e772f",
"assets/assets/images/2.0x/drawer_menu.png": "188bbcaccda74df3b2a73107da14805a",
"assets/assets/images/2.0x/edit.png": "72f47fb3d93fd4baaefcf2e0c4cc920f",
"assets/assets/images/2.0x/facebook.png": "642be112750193782a4e2473a5d22be2",
"assets/assets/images/2.0x/get_started_1.png": "449c3e948f948946e6f7274495c4cac5",
"assets/assets/images/2.0x/get_started_2.png": "4d76a2f3bb54969763ea874eadfe7444",
"assets/assets/images/2.0x/get_started_3.png": "8be6022962d608ee6c652951eda9c095",
"assets/assets/images/2.0x/google-icon.png": "8d4f6f4fd6789a2cd1c52f1ef2d03c74",
"assets/assets/images/2.0x/icon_notification.png": "719a50be3d248a4c8403c36aa7bf77c4",
"assets/assets/images/2.0x/ic_bigGreyLine.png": "807d96a120e25eaa14e4f532dd0b0635",
"assets/assets/images/2.0x/ic_delete.png": "f9060387c79b0ea7a5e854a0ea7c24e5",
"assets/assets/images/2.0x/ic_down_arrow.png": "a11d0cb2198c966e2e619743df2cac12",
"assets/assets/images/2.0x/ic_eye.png": "b7d4cb5e5dd6d9d815a55176f3e3e7a8",
"assets/assets/images/2.0x/ic_filter.png": "db9e529a8a341311159b59f1f93cc084",
"assets/assets/images/2.0x/ic_no_data_found.png": "b625954e986ff2060cc97b603d0656a0",
"assets/assets/images/2.0x/ic_no_notification_found.png": "bdfca1bb485f4d1b86a48ee53ce435cb",
"assets/assets/images/2.0x/ic_no_product_found.png": "ecf1c5ab8ac598d231755fcb5f963285",
"assets/assets/images/2.0x/ic_right_arrow.png": "5610bdc1e5fb583c190a64dc1cd8e508",
"assets/assets/images/2.0x/img_active_bottom_dashboard.png": "0eef51c2b73e326e3eb7f1fb92cda4a6",
"assets/assets/images/2.0x/marker.png": "7192073d3da5239fd8d64db968aa6308",
"assets/assets/images/2.0x/menu_home.png": "f631180d8380fb9822a774f01d540e40",
"assets/assets/images/2.0x/menu_manage_assitaint.png": "6839153f942307f66604387c176b0442",
"assets/assets/images/2.0x/menu_manage_master.png": "a695c520cc434a0d9f0bc601b0c56977",
"assets/assets/images/2.0x/menu_manage_store.png": "b2818fccfeb4410ae05cf77827be92e8",
"assets/assets/images/2.0x/menu_order_history.png": "56ac6babdc89082742efdd7f9c1b0cb5",
"assets/assets/images/2.0x/menu_payment.png": "a522dd6cdda49959528dc25952cc177b",
"assets/assets/images/2.0x/menu_profile.png": "b0038d93740dd4ee887837336e6ea2a8",
"assets/assets/images/2.0x/menu_ticket.png": "a6aeddcc165c3d01678b4bbf8743f3a5",
"assets/assets/images/2.0x/offer_add.png": "008f36d0c55f46a14db969ddebeaaeae",
"assets/assets/images/2.0x/product_image_placeholder.png": "fbd023412b590748d4e63b8464d33d2f",
"assets/assets/images/2.0x/regi_grid_add.png": "9d42ecf162973e787c1cb7bbe56cbb84",
"assets/assets/images/2.0x/regi_grid_cross.png": "e530fb3cdf3ee6dc3d213eecbae25e95",
"assets/assets/images/2.0x/regi_grid_time.png": "de5429183a960cb3edbf132d5ce91554",
"assets/assets/images/2.0x/splashlogo.png": "83e81034bf7305efbcef146e628b0665",
"assets/assets/images/2.0x/store.png": "db2e4aa1e03ed5051d6706e86ace6c12",
"assets/assets/images/2.0x/upc_icon.png": "2faa0b777738d6e1399499320813a529",
"assets/assets/images/2.0x/upload.png": "c8b466e52418714f5c3ff5ad656c05c0",
"assets/assets/images/3.0x/action_cancel.png": "ddb1b1699f374a79552ec701a679ac1f",
"assets/assets/images/3.0x/action_check.png": "fd4c96e3c871167b1afa9bd51d1f5b75",
"assets/assets/images/3.0x/action_qty.png": "ea75ffd1a1685e89cdbd01befd81b246",
"assets/assets/images/3.0x/action_replace.png": "8babfefd92438f74d1d810a4ea212a5e",
"assets/assets/images/3.0x/action_review.png": "17f0eefbe65962e4759b5734283e3dea",
"assets/assets/images/3.0x/active_bottom_order.png": "451c0f9c028813e6bbe5d2a2e718bf38",
"assets/assets/images/3.0x/active_bottom_product_list.png": "aa64829361110d5497c91ed218007c88",
"assets/assets/images/3.0x/arrow-left.png": "e058ab5a878ef21f745627ba81772fd6",
"assets/assets/images/3.0x/big-store-icon.png": "d91f54e4b4b684de3852f7f04c88d054",
"assets/assets/images/3.0x/bottom_dashboard.png": "e1b18609cd938ea366f3f5141d053e00",
"assets/assets/images/3.0x/bottom_discount.png": "0c77f6bc8c98ea2274325d2e59cb1c4e",
"assets/assets/images/3.0x/bottom_discount_active.png": "dcaae554a023e6c7d7a6dfc31d0b5a6a",
"assets/assets/images/3.0x/bottom_order.png": "16dcc0bf923e66d83fdf519b7b019a5c",
"assets/assets/images/3.0x/bottom_product_list.png": "c713a3d28c31448864e570eb6b1b860a",
"assets/assets/images/3.0x/call.png": "2a32d639bf39bafc82110139f239870b",
"assets/assets/images/3.0x/chat.png": "214209258b5797c21a72168ae899cfec",
"assets/assets/images/3.0x/drawer_menu.png": "5fef63595e636485c46573885004de81",
"assets/assets/images/3.0x/edit.png": "98d21a01672d2250abf20e5eebf797e9",
"assets/assets/images/3.0x/get_started_1.png": "03dc4e5840b3060fcba1e9186c4f7189",
"assets/assets/images/3.0x/get_started_2.png": "3f9477652bd9ce800cea1d81123306e8",
"assets/assets/images/3.0x/get_started_3.png": "43c8fcf356a58035383ea6bef0b98726",
"assets/assets/images/3.0x/google-icon.png": "ead16a36ff3da8e5eee0a28c0fdb7efc",
"assets/assets/images/3.0x/icon_notification.png": "d48e5effa2753afc7f507b142ca70c8d",
"assets/assets/images/3.0x/ic_bigGreyLine.png": "8ca7779e44786f5a26eee1cfbf2b7393",
"assets/assets/images/3.0x/ic_delete.png": "9c9a8000af2e7fdc97cd5352743e3d5a",
"assets/assets/images/3.0x/ic_down_arrow.png": "6a1cb89450a2da914ca44b06988704f9",
"assets/assets/images/3.0x/ic_eye.png": "9d93f29ce443078caf260cfb397d875b",
"assets/assets/images/3.0x/ic_filter.png": "6957bc18fee9b9d9097ed7e25e8fe9f5",
"assets/assets/images/3.0x/ic_no_data_found.png": "ff542a89517ee78853de995f8e1786f4",
"assets/assets/images/3.0x/ic_no_notification_found.png": "96b9f2e5639b0b3c1ceaa808e2735655",
"assets/assets/images/3.0x/ic_no_product_found.png": "56d7c5bdddaa2ff5123982e4d5a96ec6",
"assets/assets/images/3.0x/ic_right_arrow.png": "cb601f6d78dc8cd52302bcfc904e2c26",
"assets/assets/images/3.0x/img_active_bottom_dashboard.png": "b0edb234f6b5eed529f17b2aaaaf29e2",
"assets/assets/images/3.0x/marker.png": "3c9d1d13f0244511323eeeb516e65399",
"assets/assets/images/3.0x/menu_home.png": "583c98fbf656be1351ea7e8a0e02b52f",
"assets/assets/images/3.0x/menu_manage_assitaint.png": "47f9386eb5a0c8d844e7f35a941785bd",
"assets/assets/images/3.0x/menu_manage_master.png": "507f0c42c6804f6830260a4e4fc98aa5",
"assets/assets/images/3.0x/menu_manage_store.png": "827c3acbd6e1ba902f07196574260ce4",
"assets/assets/images/3.0x/menu_order_history.png": "41590ca0424c10c60f598e737973a64e",
"assets/assets/images/3.0x/menu_payment.png": "684e2ed38077c39a195bc738910e298b",
"assets/assets/images/3.0x/menu_profile.png": "d1cc432b1ab086b08e99093fbb12eb30",
"assets/assets/images/3.0x/menu_ticket.png": "c8134a5b9076dd9cbfb336dc74a87195",
"assets/assets/images/3.0x/offer_add.png": "4cadc7364b77a646a70d065414b43c56",
"assets/assets/images/3.0x/product_image_placeholder.png": "bf6095c15a2626aeaf21a34cc1dcb0eb",
"assets/assets/images/3.0x/regi_grid_add.png": "9accd12012ff14313f94ef630dd7c55e",
"assets/assets/images/3.0x/regi_grid_cross.png": "c5ab02dc388d0f1eb2da42cc6c79181e",
"assets/assets/images/3.0x/regi_grid_time.png": "984ab978f19cfdb74921f6c89751f786",
"assets/assets/images/3.0x/splashlogo.png": "2e7f9c56df68774b74f911934afb1e47",
"assets/assets/images/3.0x/store.png": "dd09d79a668b9ed5e7e27af241e31afe",
"assets/assets/images/3.0x/upc_icon.png": "5024be2b493f060ba5b91237e857ce4e",
"assets/assets/images/3.0x/upload.png": "770bd1e82e6384bb4a5427b42abb8edc",
"assets/assets/images/action_cancel.png": "be860b1cbd23b07670ed4e0566f23391",
"assets/assets/images/action_check.png": "fea1b3fdeedd5d8b0b7873b6d24dfb89",
"assets/assets/images/action_qty.png": "2238e0ecf1e04e7fac2c46504c0a4b37",
"assets/assets/images/action_replace.png": "694810aa9b5db2ce443e8c9fd9e51ce7",
"assets/assets/images/action_review.png": "ed946fffccf8393232a6fd280aeb3d24",
"assets/assets/images/active_bottom_order.png": "8277c27fb9b1ab0791b180af8fe9d36b",
"assets/assets/images/active_bottom_product_list.png": "db81614b246fed9d43d4b05f21a37b5e",
"assets/assets/images/arrow-left.png": "b7ba6ef699ab25474339e04004c309c1",
"assets/assets/images/big-store-icon.png": "3cedeb714d7be3abbd6467180cd5567e",
"assets/assets/images/bottom_dashboard.png": "be89ac89bd6a7a33c3c1b6064e89c89c",
"assets/assets/images/bottom_discount.png": "ecfa88d9692e714ad722df8c0f49d5d9",
"assets/assets/images/bottom_discount_active.png": "052e9b264efc737c72aedd39f3701a47",
"assets/assets/images/bottom_order.png": "d2722cefcbfb8db962fef44a78634325",
"assets/assets/images/bottom_product_list.png": "7869aa4ec94a06bc54eb96034e9b2b09",
"assets/assets/images/call.png": "e51488ca2bfdc23f27c100834911db75",
"assets/assets/images/chat.png": "5001457b0adcb50c5847bb7ef1e2eb5b",
"assets/assets/images/chevron_left.svg": "646e7c01ccf238f8bd8bb5ecb1e90533",
"assets/assets/images/drawer_menu.png": "4c7f822bcd5a4591c2b628745894d8e9",
"assets/assets/images/edit.png": "b91e2caaae77c5ae783a1a6309c00347",
"assets/assets/images/facebook.png": "4cd6371a1ea0df72f9f4c21e98f150ee",
"assets/assets/images/get_started_1.png": "aa400b907af291aeefd4120b53411a50",
"assets/assets/images/get_started_2.png": "880aad1bf4b5a081b320055cdccaa0a0",
"assets/assets/images/get_started_3.png": "81b4ed66df4c2e0d74c38a6f38e72076",
"assets/assets/images/google-icon.png": "7b8b4812a5121d2b2466c7eed7056ec2",
"assets/assets/images/icon_notification.png": "831d7da67736b6853f57daec60fc0e72",
"assets/assets/images/ic_bigGreyLine.png": "9a8a6ebf5d900ef13ba145abf297e5a5",
"assets/assets/images/ic_delete.png": "9c9a8000af2e7fdc97cd5352743e3d5a",
"assets/assets/images/ic_down_arrow.png": "ebc9e8c50fd34138d8c7f1c28eeb7f1e",
"assets/assets/images/ic_eye.png": "5a32cc1471e4bcfe0f34036a13e38f33",
"assets/assets/images/ic_filter.png": "68f1d836f671b7427cb39c9464e012f8",
"assets/assets/images/ic_no_data_found.png": "abe594c55885af890cb0191b741b35e8",
"assets/assets/images/ic_no_notification_found.png": "6ec3bf22413a88f6a8876d63746b1e3a",
"assets/assets/images/ic_no_product_found.png": "5ad7834c7c304cef152af3302ff30a44",
"assets/assets/images/ic_right_arrow.png": "42b438eeae400d7c508a7b0f7c7e847d",
"assets/assets/images/img_active_bottom_dashboard.png": "7485bf9d1ff9d64a9b7ae12a490cb772",
"assets/assets/images/marker.png": "895c4a818e45994f688d845569c33bcd",
"assets/assets/images/marker.svg": "3a96bc34e1872e1213488a6b48d7f000",
"assets/assets/images/menu_home.png": "1de56369ddf4271fd054f78591af8f30",
"assets/assets/images/menu_manage_assitaint.png": "3d273a2c64673483fcf84fd8835205da",
"assets/assets/images/menu_manage_master.png": "5ebc5f2f514a65050bdc0d1648d9a151",
"assets/assets/images/menu_manage_store.png": "906fcfd3ab93545c5e16b4e6cdcf2746",
"assets/assets/images/menu_order_history.png": "d29d5aedb3d7c7e0b6728df626a586d0",
"assets/assets/images/menu_payment.png": "981021e19264c8eb7677835ea13cf433",
"assets/assets/images/menu_profile.png": "ee3e39155a8bcfd46754f26927845469",
"assets/assets/images/menu_ticket.png": "f24b0c4f07bbb8f30bd4bb443d07558d",
"assets/assets/images/mylocation_icon.svg": "0534a9d4c306d8e6e37d352a76f0c03d",
"assets/assets/images/no_internet.png": "9530f44c06dc68d5b17b0f7d6e0d73fb",
"assets/assets/images/offer_add.png": "6f6572d682daa0f45eb57230457fa06f",
"assets/assets/images/product_image_placeholder.png": "ccaa1a598da1b2a375d5bc02a8150b8f",
"assets/assets/images/regi_grid_add.png": "797f25878ba518a8e3ac17f68d0e5f04",
"assets/assets/images/regi_grid_cross.png": "2e13cd1cd5782b8b15b3e26d2af35de8",
"assets/assets/images/regi_grid_time.png": "d551ac4ca1885267118c05118bafe07e",
"assets/assets/images/splashlogo.png": "27b861870fd4851532fcca0c4a5f3968",
"assets/assets/images/store.png": "96eae9f251bb494824511ef04669676e",
"assets/assets/images/upc_icon.png": "c64c6362c4083558a8f190421baf82cf",
"assets/assets/images/upload.png": "ca9a4a3e1d78a53d53688b8be930b8f5",
"assets/assets/layer.json": "f7b577e9c147b861a48e7b359d20080d",
"assets/assets/map_style.txt": "85239e040d76ae94337b1881a10b8232",
"assets/assets/tick_appear.flr": "8ad038fb911fa44df29c003361172c53",
"assets/FontManifest.json": "d1905acb584c36f71258362625c1fc0e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "93b8d3d325a43844bb621678e1d7e6dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "2128fc7e82ad49154b13ea9216446acf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ic_launcher.png": "c700d2592acb7cec1539052622470b8c",
"ic_launcher.png": "c700d2592acb7cec1539052622470b8c",
"index.html": "254c8140e8ffa69648bf672703ba025d",
"/": "254c8140e8ffa69648bf672703ba025d",
"main.dart.js": "3a70ca9c24fb297e4b704c224e572f93",
"manifest.json": "01b44cbe06be7afcb79e81166a9e0c73",
"version.json": "044a97b1bacb3a675a80e2036f4a0fea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
