'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "42406389d4fed657b5f6d8d5f482d1e8",
"index.html": "3b01f01e520c572fe9aa63278dd95684",
"/": "3b01f01e520c572fe9aa63278dd95684",
"main.dart.js": "384e0c634e4d4b8ee69d730ae20865e6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2e6c9cdb3c79cb3f779f5132ad93f36",
".git/config": "c281353298f252251e8ad3c86f4a7fd4",
".git/objects/59/ffa057047bfc14627844673589483a7862a075": "4554f1d085ab70b57e78899a772b5dd7",
".git/objects/92/e60937c3c94b052f3a40e6874fad3c2da94bdb": "2c6263dd5fd59df20489ab1aa716f6ab",
".git/objects/68/a6372615a91fa8d8f7a14f261de5af446cc681": "446f428017c67b3fe18b36a095599e7d",
".git/objects/3b/0d35b6d22d834b3be9814322eee63e54834f0a": "8d5ed6c1db086a606590bd7f74cd67ad",
".git/objects/6a/248f0dbde8e584a069c88eedd99cd7f30704ee": "0d346f0ea59cf2d352ee494ddf2f706f",
".git/objects/6a/a0549d1b2e65ec38a0fa7edeaf1e8a08516ee9": "a7729c62990e31f0191072177974c82d",
".git/objects/35/a17ed41b5864d6a5c3dfb7a9275ab38a0ca371": "96f2a38ad52f75d02f671bebe160d167",
".git/objects/35/45c46c6a31a2e3ad032cdebdafc1041a60e11b": "b5640c44e48bca7893acb5b2672541ee",
".git/objects/69/b462e201ec7b8d7b6eb5c75fe3bfe983077912": "e5d702300a70dd7292a839a9b30ef3fb",
".git/objects/56/de07a35892f74dd68cefcd517bbc477197f6ac": "115c012f72dc85669d6b2f357d10f72d",
".git/objects/51/88778b9b89841847669161056e7c6ab870b8be": "78f1297a9a0cf0bbb74e45ec772b9917",
".git/objects/51/2d95341a2cfced74535bc8c6420e5dc99c1121": "a988583546a7e9c2586f3650ea6e236f",
".git/objects/3d/c3e3d2cfa727f0b522d00ae0f17c3f6faf4816": "fa0580c5e59d2b262317c9b092387f72",
".git/objects/0b/8980d68b0361bd4015b285a532c964a5c59d26": "bca8331a5045c6002c12799bc90d255f",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/9c/cbe02a458bef56f8f5a7efc5219e0dc00f63fb": "169704c9ca23de231ed4d07b125c0ca6",
".git/objects/a4/286a4cb27b36fd185f29391f1369326566e5a2": "d61b1322e2174ce4ca66f51947ee7658",
".git/objects/b5/fb17ef1e4798ff691f111ddb2d32e847fe4c21": "c7f96302e89bfa3c7088f9efabf70146",
".git/objects/b2/afcdb0220cc5df8ceada342bccb6febdf3c510": "af1181d92c1ccd4e98a95d28bacf16d1",
".git/objects/b2/003a66b4974975a4cf807fd925e17d1f5dd427": "09a74e655f2c9d1b48a052de4a2804f6",
".git/objects/d9/04eea476ccb409f0aaeb223781e2fb568b6cce": "efbc81cd1a10ee21301dcaa992469c1a",
".git/objects/ac/a7790a3690c05146a7b1f7952bc7771e4a838e": "393cf7ba558c2d8ea42ad77576fc8b5d",
".git/objects/d0/2afc471ff622a1b5bea06f8f132e26e277b5a2": "cde375db147291aa1b4b9b25c838b31c",
".git/objects/be/3d3f346a6fa90fd31696fe7e47f202aab8c92c": "91faf2f15792243e81f59df9c8eb4449",
".git/objects/a2/b2e44ef23e0f6b1781feaadaea907f8919a98a": "5352bac28a72891996269b7edcb098ce",
".git/objects/bd/b13a236851f0c36f7a89280f6f74cd0c0b69a9": "78d81bd507d06068cf045b2ad2ee030a",
".git/objects/d1/3029fc9b2ef96ec2315107837f7629c0e2809a": "ea07ccf6abdd8b724568100916b8efb3",
".git/objects/d1/7235c724b5ad71ed47062f58a5eae51bb8b8d9": "10e621d4d1b68cb83be88778667fc434",
".git/objects/d8/e5dd620aba20a3140f6bc952058323287aba11": "f230542795956b826c45491001948b09",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/d1f530a35fed021037eeeae8aa1626937f8b22": "efdfd5ef4675bc1e1d4bf0ff855cbfda",
".git/objects/ee/cc8444526bc054aa94a6bfe98e7c465cbcabab": "1379b302d50a0038a29b4fd4809a54f5",
".git/objects/c9/ebb481288b6ac3608c0a55ed676bbb6ce4a474": "695288eae3b3a4d999426f3c25fad1c5",
".git/objects/e3/c428165e3fba8eac9a7ca0999e37c5f1dd3d88": "0a9731687c849a85274631518d007777",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/fb/03dc392fe874557c6f432350a3d82d4b19797d": "fb4a53f4f4690138a3246bf7353333b4",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/27/3722f57a93b1dd6c5f3ca39ed9a7fdfccab38b": "c24145c9d697c7119610e01f947f0acd",
".git/objects/pack/pack-c988f504b211a2d36fdd6d66cd3b883a2eba2ebc.pack": "1a719e9b6560fe8b83567af8f96de5c9",
".git/objects/pack/pack-c988f504b211a2d36fdd6d66cd3b883a2eba2ebc.idx": "dabb671e67eb562ca2b2eb59afcdc20f",
".git/objects/80/4aab68dad0f2183bf254685022e4405a5a5275": "d558773e9271c74799068a9d46594b05",
".git/objects/1a/80c5261fe4b8193ebc0ca310d247f9c84f06df": "f42e6568fc23991a8106cb60ef4370a6",
".git/objects/28/98fea3c892abe1eade2555f0f117dabca16d57": "e3b25be031a0d7a891f445ff3f5e7601",
".git/objects/8a/ebef8481b03546f57702c0a3a95af2cb5602f9": "19cabc5a0e1af21c5ae32f93e682e416",
".git/objects/8a/63ffdc1527eeb54297ecdbc8ddc8a19082ddb0": "8711e00df13f6839bedaa00d9f6c3139",
".git/objects/86/0dc28f867e5e1df502a5fbdeb4f65f4028ec9a": "756a87c4f8d1f8375e34ddba40ea32ce",
".git/objects/44/482978035b8d2c653b3acc4f8d94d2d137d40f": "395401bfcecbfe46bc8a542ef790960f",
".git/objects/2f/7e0cee72c45e9db2584bff707b02e5eea407ce": "6c30695bba35fccb92509ae0ba29cc76",
".git/objects/6b/4029d4815838f73cc94c6017c5641956d4ae00": "199b6f74ee8fda9fa67c9be62d44a2ab",
".git/objects/07/bed8d73152cf53623bb4f7037e406129a42f27": "9b4ffc5f5fc79cc558767bcee50438fe",
".git/objects/07/c6df948388b0cd79d8eb6e3f5dd91232075dac": "04b2550047531f50c21db10bc34ec030",
".git/objects/09/4e11cfff0485ccb59e194d1ad8101cf534d97e": "fd7a240f78ddd34dffbdaa7bf87307e0",
".git/objects/98/6ecc76574d0bac3533df8e5ee520bb09bdc724": "6a6f90d853bcf82873fac7acc2d4672a",
".git/objects/3f/6f1ce1b853820d9e7afac3ab60682787268836": "4e847d0fb3c9a583e58bab937fff1b98",
".git/objects/06/20433c0cd72b7897b9abeb55b323d35d09a4a7": "15422b7cbe2808b55fdd82d1696bb57e",
".git/objects/39/1fd49bfccafd63ce16983775a0eab89038b5c1": "97a72d699133af1123b8770d3a18c445",
".git/objects/97/2d5ef8b6f10a89b902c898c914e5184ce30ced": "28ca6684657f378c679d7bbea5390d8f",
".git/objects/0f/f8b67b6b622b184ff31bbd6b6d64ebda500868": "a5cfe5393d655fdd942eb6e9b9bfff26",
".git/objects/64/4908a6e51b3f055a0d844015785d4dbb2f53fa": "5ecd2f427f8ca2b0aa26b767cdd8d80f",
".git/objects/b1/7d6a7930be6e97da65b0766aa89893ea80a3a4": "535c4f4efb6a17923cadade8496ca5e7",
".git/objects/db/b3c5469b686a49d50bd8480e5bd83712933789": "462fa54ce8b58fa76f825edf2e75e431",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/cc/78315dc4f3db3ed67dce56c033d2b6fca9a046": "a6ded7f5227133182231b3816c92162e",
".git/objects/f0/f07a8460a068b65633e6e6d8cca42b1dddd3c7": "85c72be332ecf8485dab8b2e9b530f33",
".git/objects/e8/573027e72b6193bd8381a103e7d52aca13b950": "5e1850f1b0093f8afb161b216bd7781a",
".git/objects/fa/ea8097ef5fe727c2a8fe0bdc8a9627735db7cd": "37c574fdbeb028132ffc288a981ad6a1",
".git/objects/e9/6ad3e9440f459689b5f5f750100f37398b172f": "1ce15b6212340063a215a3c1bc281a6d",
".git/objects/f8/d227cd7c9c3735c796c41bb77a8d1203a23f07": "503772121f10f98ec9dea6943f3393ca",
".git/objects/2c/9d1c73ef402ed04454f809c3f5b5ead5ca375c": "8bad6a808857d82ab89c69e7a55c08e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/c6fba85861f722cbed81c276063bf1d9e61d24": "f6dc485907c9ff2b5b229b92d7114372",
".git/objects/48/281c48d878d75232650214de4bd67240b76d19": "b41fe3e57b0a15918d5fef27c299924e",
".git/objects/70/11d97a3e171c633f23858a59b65403d07e18a7": "da7944f963fbe040e2372fb09166529b",
".git/objects/4a/566f4e1255ae8a88068447fb68aeec3e84184d": "9535f92f7cfb27f60909c526e2c58abc",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/0fe93cd475fac9a6228d6437bf55f4c11ee08c": "759bca94e9af74d8584f4ea20eabd736",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/1d/ef11cc670bf9bdab054c3a103bb22f021689ce": "9c672c2baf0d130a2734a076563ef1ca",
".git/objects/71/127ea5a27adcfe24e2bff957c49cd4fae58e87": "bb01cd825194f6958e9dae69a331a7d1",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/82/b94e4c63cdb58e2f002a30cfe10d9dd6ac7bbd": "98f4f45517dc7c80fe4392599c4237ec",
".git/objects/82/5d26f96a495cab4e079c6bc090d7ec4250cc68": "ccfdbb8cd716b09c5e88a55d12af65e8",
".git/objects/7f/f24f4ddc2baf0d32e5ee6e4f14aba42c922d2a": "3bf61fee3939787c1ab9014d214a9cc2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4164220150112263a6620791d0b64714",
".git/logs/refs/heads/master": "4164220150112263a6620791d0b64714",
".git/logs/refs/remotes/origin/HEAD": "6bd504efbf5b5bc9372074d05ca21dfc",
".git/logs/refs/remotes/origin/master": "04488a64eaa741e2cffa17d959693d96",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "667e12aa14bbd9cc9fb178adfd739e9f",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "667e12aa14bbd9cc9fb178adfd739e9f",
".git/index": "d83d56c8c425c2e47a36b50ea74e68a6",
".git/packed-refs": "55a4a25ce5e3976c984433de57395927",
".git/COMMIT_EDITMSG": "178651280a3d2cfdeb876c9538679e56",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "9cb6b0c6e928ec04a8bb783e4aab9ab4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
