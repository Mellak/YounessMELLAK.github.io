'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "04403eae912f49d2e2abecb6c0f87375",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dd1b90d013c4477f5975b97ccb792be3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59976cf4e5844338ad717eb6eb5ab4f8",
".git/logs/refs/heads/master": "59976cf4e5844338ad717eb6eb5ab4f8",
".git/logs/refs/remotes/origin/master": "ccd66819fe5cf921ecaa9df2bcd62b93",
".git/objects/01/126d7552162768b6811ddfce110bf4bd2bab42": "d2214b0827074c208c91cc3a54b47d3a",
".git/objects/09/14c9742c719b8700b1e410bcb6797841e36c44": "d39df8f525c4916e159283e12967a965",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/e85eaf701958a34e26f2eb1e2705fecf5f0c37": "6b0e036402119f52ab5e31b2be346289",
".git/objects/15/62c11b4096afc466a842c8b1abe940b4e5379a": "ad108e45b61fd09accb5754326121962",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/700a35f074b6724c2ec90592ac2ed03048ad2d": "f2e1f9f6182e31f919b70e467309be55",
".git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2e/a5a6130ffde352a46c16d8771226f3dba1b415": "1ea057501f6ae90e3edf0c3411d04059",
".git/objects/31/c9ad81bcfe9cfcb18347ec0249b4ce6f3a33ec": "08c6033a1bae6f142aea74918e17bafd",
".git/objects/36/ea51e2f06ebfec8ba47610b3dfffebf62b4d72": "f28109ed893188040e426b9035e9da62",
".git/objects/3d/ecb157c8702cd109a91a8ae0a1944ef4f3465e": "15a7697ae3549c486f67e1cf69e7dd95",
".git/objects/41/27979005fd10556d2e44448a5c40cb7d75a986": "1b8fcf2be95ae25cfcfb6ae7324c67df",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/4b/e44ed6fec7d8c5ab74eca2bc3552bdeeb51dfe": "e41fc4f3fc5776c5f7086fdd7d85e3fc",
".git/objects/4d/3ce3ac8ce6593ac40ca614505ee891d3cea8f3": "62e217e4b10e62bde93be9d2f9189ce9",
".git/objects/51/c936e26257b3ea5d239840727aa7e912911ea8": "4189acca1a2b6295c3b7b34d562f6b66",
".git/objects/5a/e2ef47aca2d95f789c4636dd1141bb092545b0": "3855fdf5c1d78986dc896d58cd9a0ef2",
".git/objects/5d/bd01692ba993f3f8f11d6527b158898df1a7e1": "76062e59ed6b1cdaff699d470ea1f9fc",
".git/objects/68/ce0d0975545cfae146eb6f96d149d7da21e544": "a502ec4862d02845481bc42795acc239",
".git/objects/79/be8a87120506ee8a345e17f84c8ea8b101663e": "e93a78b3778e6e8eb185495046174d30",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcea744df871cbd6f7ebe5167c31fa59f68b07": "ba46da46a6658011ab2ce8ff8e290550",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9d/9bb323b9ca21204bd0b712903d0ef5e942e71a": "18bb0a86edf63d6e1e1def8f49629927",
".git/objects/a4/3613e6ca7759a2f4ead6c94ff6c4636c9ea4cf": "4eb940cd0b30abd801f48d234c0cfb0d",
".git/objects/a6/9f22470e6c876d3a9b2f8022d02a0cf75a2a8a": "f898c016cc1a4895901be730c1020eb6",
".git/objects/a8/96cb9c0eee4596b281729f82526f2e53784b61": "70550f3fa2b79a71b206ef93ce948ed1",
".git/objects/a9/4369857fa4c6d85a806bfd7ab4a668931961aa": "03ae9b6961f360da43fa8a79fbd80cdb",
".git/objects/a9/89eba6192322f6324f5775db5ef8416cc4fe03": "6c5c93fc52093b372971833d695ccd8c",
".git/objects/aa/b61c29c4db5ce088466c9ac83ff5a278bf292b": "135b4360c665a07604e870c0a3b0bbac",
".git/objects/ae/aa11081b9b3247578af4409ca342248a6e7e90": "da56072e6647f6bf3147c7425bae102b",
".git/objects/af/02c764dd16acabc58fb19f1d435bba17b14c4d": "6f70c6330592a5bd90cb6b00a0f3af92",
".git/objects/b4/33d1b1872490bd1f35f389efc50b8e7f9b8cef": "2d7b85832b611a51a02c78338d3e3b6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/03aca19d36d24fe83fb0781654dddfa4453f67": "776e69a307872e51bc6ab479d7e12672",
".git/objects/c0/c9d1b59577ba98cec0044ce3d8de6e7e8a5c28": "5aa865eecea5071fce479e80cbd4bd31",
".git/objects/c3/074683e6d1dd9886ce8bec89f07fa0c95239e8": "70b777f6a5a5419d82427304bc34712f",
".git/objects/c8/4dcebdbbfb99ebedd5b47b962985954c91047a": "0463cc509c306413d285274c487db4a6",
".git/objects/cb/e0fc79a7746d4c13718eb47397e5cc2ffa96c2": "ed8008922caffe0fedb84ded261bfb1f",
".git/objects/cd/d97bde6f9570ffe290ab129c318a351d7839d2": "bcd6136d14668498dc758f904ea197ac",
".git/objects/d7/252fa6a6f2e1137c07610fe97db1847ad10200": "86027e64d63c2b0e043dc5e986ec1212",
".git/objects/dd/05e6f84eae1d30bb251efb772a408ac6588af7": "edd8d1aa60dbf696fde01bade1052a8d",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/df302e082017b3b8adbf5163160fc74561d18f": "468d9cfefab8d5ae54a5b0d049c999d1",
".git/objects/ea/66bdbc33ee424e8ec622e182967eb9ed61c18b": "d89f67a6ad8838b8e9540b68907ef509",
".git/objects/f0/dbe22d47497f1a2c4bfaab9165e474f3498b73": "54a868e9881334570e7f43e1e5d83155",
".git/objects/f3/f36d5a7c4e33603e0d7deeacb749aceec7a915": "4706766c2f8930cc498c7de38495ba58",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/ff/8660fb630c92d8a1efa591d3c98c5365c23fe4": "a469206fe5ac60344a6c85836da0baf7",
".git/refs/heads/master": "8cd9579b148d7c881d5eb17f3db6f9c6",
".git/refs/remotes/origin/master": "8cd9579b148d7c881d5eb17f3db6f9c6",
"assets/AssetManifest.json": "47d72b1670a343986c56ef54a3742cab",
"assets/assets/Ard.png": "ffd2fc27f25aba05c7b9fbd613145946",
"assets/assets/Arduino.png": "8a75f0cbcc68fcf86bd2b7b6e6ec17bb",
"assets/assets/Back.mp4": "889608e027fe4e7d807d6d39b4f6d058",
"assets/assets/career.png": "d0e31768150e011a95c8a69b767df0ac",
"assets/assets/electronics.png": "6bd8798c558990b27a96194f31f34607",
"assets/assets/Graduation.png": "04f2524ac0dad9c0d3a50c7b6ff8bf6c",
"assets/assets/hptm.jpg": "be3011cf8a6c8c9705e4e468b3a5ff47",
"assets/assets/instagram.png": "f0112f7474ee916f3f46868d1784f02e",
"assets/assets/Instrument.png": "c77ff28134f523749236be579a454385",
"assets/assets/IoT.png": "d23a203c19459eb3be150b61ab594388",
"assets/assets/linkedin.png": "8d670c570e85258911a40df537ed7a6b",
"assets/assets/Me.jpg": "3088cd80489e92eee1ec39815e8568f2",
"assets/assets/medium.png": "668537e6e8e583297ef4ab31302c27cd",
"assets/assets/mri.png": "b4f7588ef085aec7f29d4aaad9d556f3",
"assets/assets/Mylogo.png": "047f34fdedad9164f5d7eddf4560b346",
"assets/assets/neuro.jpg": "8360ab62095c13b22108719fbb538426",
"assets/assets/PSP.png": "ef0f9f2f5aed7f2f4cdb6fa40a057027",
"assets/assets/smns.png": "2b9b2b816b8599fb45277d69c3f1fc86",
"assets/assets/system.jpg": "c55d9ab772f4ea1582b0449e70efc03f",
"assets/assets/twitter.png": "0ecdab90069910f56e38c1546e98658a",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/image/avatar.png": "dbc1377eefcfc8b24ededee524854318",
"assets/image/samsung.png": "07f7b1eeb87194333da33d466e1eceb7",
"assets/image/tiki.png": "f9a50be2c4c7cbae1456f7e6fc8ba708",
"assets/image/vinid.png": "e42b30b714e5e8200591cc290edd351d",
"assets/image/vti.png": "efbca4d0f40d0fac0f8b2b2b9689f568",
"assets/LICENSE": "c769950b67c8b0b6061b554c9ec0d6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0c9c00236f6e0bde1bfeb8112fd24b7a",
"main.dart.js": "dc4ad1ab46d3a7877bf9a827aa26f932",
"manifest.json": "5a2063cb8926b0c38afbbc5b0467e15e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
