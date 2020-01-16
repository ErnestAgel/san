/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/sanarchives/2018/03/index.html","e6bcd678372bcedacbe67082e761196a"],["/sanarchives/2018/03/page/2/index.html","2b5f6aac95ccc23abfd9b505b7ea9db9"],["/sanarchives/2018/03/page/3/index.html","3a345cad5591fed5cdc83f6517ebdfc1"],["/sanarchives/2018/06/index.html","5491fdee80f855b7bc52c28d2cef76fe"],["/sanarchives/2018/10/index.html","cc394f9fd7d6964b5cd774eaaf5c8a1c"],["/sanarchives/2018/11/index.html","4af2f32712cd8cf37d65e120cc4ee745"],["/sanarchives/2018/12/index.html","a711768d30eca5ab8d11fe1cfb6dbbf0"],["/sanarchives/2018/index.html","641fbb875751a60cd15acba0b152577e"],["/sanarchives/2018/page/2/index.html","095dbdaa4313a94e265b46dd3eb22813"],["/sanarchives/2018/page/3/index.html","960272dea6f52855201d8d55b52d6e69"],["/sanarchives/2018/page/4/index.html","a2b0df21e60a82d658c7f8d2db91e450"],["/sanarchives/2018/page/5/index.html","11f85300c08963ac729e3c65b1f5843b"],["/sanarchives/2019/02/index.html","02a41270e59deec27232dcc0d64e2978"],["/sanarchives/2019/02/page/2/index.html","ae0e16d62bc3316e7029ebd307557134"],["/sanarchives/2019/03/index.html","361474364a4a1b2820a2d0147e203c31"],["/sanarchives/2019/04/index.html","93568870de819ac0bc8ecabc6381f832"],["/sanarchives/2019/06/index.html","a13555a00fe7f9edc10e835821c7ede0"],["/sanarchives/2019/index.html","4428e02c8acf4166be86a60b5c397033"],["/sanarchives/2019/page/2/index.html","91878f17b005a2c526cb80927865fd95"],["/sanarchives/2019/page/3/index.html","8bfe36a662e3ecf3cac44a787907ff0e"],["/sanarchives/2020/01/index.html","b4b2912f72a79679c791231748c0e7d0"],["/sanarchives/2020/index.html","5f375cfd2c47b3118a649b96c4f3fb99"],["/sanarchives/index.html","f38b257383eb05b218f84c72ee00527a"],["/sanarchives/page/2/index.html","8b3087d2032aa42101d1c371ed6e3b79"],["/sanarchives/page/3/index.html","203fec99b068b9de2b3679822eb499f3"],["/sanarchives/page/4/index.html","c858f8a2bf63d993113d7ba2e80d9f9f"],["/sanarchives/page/5/index.html","a25e6aff2fa58d1f2453ae3c1f252d4f"],["/sanarchives/page/6/index.html","67892becfb31dc7a7c14994bff71348d"],["/sanarchives/page/7/index.html","6258dd541c06b6ea518dc3e183f54ada"],["/sancategories/doc/index.html","16c3c464543f7f6428c579b68f1ea015"],["/sancategories/practice/index.html","2d36ff629f40110c25fffe6168ee33c0"],["/sancategories/practice/page/2/index.html","6dc06e7201d27fc6c6cace3cffa507a4"],["/sancategories/practice/page/3/index.html","75ae838bd89e5da690e192a94e57a710"],["/sancategories/practice/page/4/index.html","5676d3d2cc76d18333c3b394bc74b0f2"],["/sancategories/tutorial/index.html","65b187a46250684fff7fa82d5490c116"],["/sancategories/tutorial/page/2/index.html","7df3a32a0739f5423a2624c7649c8a77"],["/sancategories/tutorial/page/3/index.html","70500dbb5de2888b788dc6991738e369"],["/sancategories/tutorial/page/4/index.html","6acd3cc8b573f8649614220057111ac7"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","0571a8ba6f9364b70777ded914a0a50e"],["/sancss/style.css","a097fb6f4a2e28e9bb40cd883982c54d"],["/sandoc/api/index.html","4c6fea0bd97712341712c4c71e400609"],["/sandoc/main-members/index.html","4ed2a2d565a88640ad76548a4c1b6c2b"],["/sanen/doc/api/index.html","3f754593362d2ab59caa29185bd4b280"],["/sanen/doc/main-members/index.html","1463533f5347db6d6023e76fe8e50256"],["/sanen/example/index.html","361f7a75627ca0f2c621ac7e6cc6531f"],["/sanen/index.html","f28a1fba0a4554e81bc7a2dd72006349"],["/sanen/practice/array-deep-updates-trigger-view/index.html","0a21afe36acaa6951b6940e04ca066ab"],["/sanen/practice/auto-camel/index.html","65804ce40a9bbc6a2ac63944e4a0c190"],["/sanen/practice/can-we-use-dom/index.html","986687be2f65ee0b9da6bb2fb5fb5165"],["/sanen/practice/child-to-grandparent/index.html","539f9d6fb93857685b45c469bdf574d3"],["/sanen/practice/child-to-parent/index.html","7df2c57d4d9c558a62f00858f8be4447"],["/sanen/practice/data-invalid/index.html","2ed53d7cd926956e336a2fe00e8914f7"],["/sanen/practice/data-valid/index.html","35ea73dcd0d7a0e83b8f9864b5af9378"],["/sanen/practice/dynamic-parent-child/index.html","3c45aca39d6ccacc9021a5f1da75744b"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","4062d7afe1143a07581c84aa3e175294"],["/sanen/practice/index.html","60d0180c2a9f31d10c466c977dbf88f9"],["/sanen/practice/parent-to-child/index.html","11744e81869eaa92c05e4547259ed2dc"],["/sanen/practice/position-absolute-dom/index.html","5287e012caf9a234066e06ed5e5c1955"],["/sanen/practice/question-and-answer/index.html","fa12259ea512d9925312d24b5109d581"],["/sanen/practice/san-router-spa/index.html","09ed9bb2985873ea2bc421b784da6eb9"],["/sanen/practice/san-store-spa/index.html","240eb0deecb4b9512780674cda1182d7"],["/sanen/practice/traverse-object/index.html","f4caac6cb0658b04d788ff9c12205b4d"],["/sanen/tutorial/background/index.html","f5f4ff935a28831ae4a86a2ef0d89a90"],["/sanen/tutorial/component/index.html","44b461692959ac2db682ca9b7f1e9149"],["/sanen/tutorial/data-checking/index.html","1ef6842ae7de51d42c5cbb420710b8e3"],["/sanen/tutorial/data-method/index.html","339a6ab533c1b5c4dc6bc6b6ce40dea2"],["/sanen/tutorial/event/index.html","285321a54ddbadb7d22c59998019bc0e"],["/sanen/tutorial/for/index.html","6506a0f8337f4011cefe83bc58224a17"],["/sanen/tutorial/form/index.html","a75be10721593e35270d5b07b166e08e"],["/sanen/tutorial/if/index.html","3bef4f76466858bea5e83f834d8a1cef"],["/sanen/tutorial/reverse-flag/index.html","b4125925ebcf02230552ae8a9b6c8d8e"],["/sanen/tutorial/reverse/index.html","0fe0b5b4fdf358ab1d7fd8031a4ee99a"],["/sanen/tutorial/setup/index.html","4e5aceadd2c669b4a531ec2035321a4f"],["/sanen/tutorial/slot/index.html","1b39e33a10a4757b54d56fb570a1caf8"],["/sanen/tutorial/ssr/index.html","a823d15781cf56150c565ffced104e34"],["/sanen/tutorial/start/index.html","3ba182ddf356a0db77b42d42473611a1"],["/sanen/tutorial/style/index.html","fd1e2f8f95bc05c229eed0b50adcffad"],["/sanen/tutorial/template/index.html","949695d42f2f7a052ee540c8504bc0ca"],["/sanen/tutorial/transition/index.html","67b8a761f8816c1955f5cc6c3c399c97"],["/sanexample/index.html","6bbda2914e7778d8061ae133dcfdd6cd"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","0eb04725ea89cdc8bd27e9e7aefadd4c"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","536985cb34cdea52711130cb34549ace"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","308fbab8ee958359c56a3a1f8b640eee"],["/sanpage/3/index.html","676bbf608ea803858000038a6ed2dfc1"],["/sanpage/4/index.html","2ab4b616c87cf2a260608e4cdb320050"],["/sanpage/5/index.html","d542186780613ee91974775754574126"],["/sanpage/6/index.html","ed3dd360442fe4b6b6f34d1b4b6c68fc"],["/sanpage/7/index.html","570b5c6b301ee13b9e84991793e83d3c"],["/sanpractice/array-deep-updates-trigger-view/index.html","1928f56023c78f150002d9efcb028efa"],["/sanpractice/auto-camel/index.html","4e369eb36b8775ce5615e1636395a515"],["/sanpractice/can-we-use-dom/index.html","4c51fc8928134bc7e2585a45f7ce20cb"],["/sanpractice/child-to-grandparent/index.html","cd79fdb8724c9f72348aa36d7118e338"],["/sanpractice/child-to-parent/index.html","b5d932eea85a5d6bfe6f68e5c3502f03"],["/sanpractice/data-invalid/index.html","552af961c314e564044eec74c21821e9"],["/sanpractice/data-valid/index.html","79a90155d4ed900fb91b8eba13b1bf46"],["/sanpractice/dynamic-parent-child/index.html","ae839ee89f2f2aab8aa4b1b6fc3b2914"],["/sanpractice/how-to-show-or-hide-an-element/index.html","cea540ffe88a5712c60ddcddf24db61f"],["/sanpractice/ie-compatibility/index.html","6652f232a88dd5554c22d5e65edc603e"],["/sanpractice/index.html","a9e683a85b0a7c1d01d6dc5696124923"],["/sanpractice/parent-to-child/index.html","0f26547a7bfa32c7fc07c28b0eb4ccc9"],["/sanpractice/position-absolute-dom/index.html","9cd88c34d02aeaa141233e0a0baac90f"],["/sanpractice/question-and-answer/index.html","c1ae899ef58bb4f2ca9f944cda20fb53"],["/sanpractice/san-router-spa/index.html","d22af827a02cc174691bc8d91febdb2f"],["/sanpractice/san-store-spa/index.html","52d0e7681182da257b9a930c25cf0a33"],["/sanpractice/traverse-object/index.html","cf34aa204b202709006fab8cd37331b6"],["/santutorial/background/index.html","4ff19c8e9767bb490c63ea8a246bd65d"],["/santutorial/component/index.html","f697d02acb12e532d209d9fe47953dfa"],["/santutorial/data-checking/index.html","199818d15bea47be15c73b1b7ca6b479"],["/santutorial/data-method/index.html","3f30b0cfa339fbcce310048dcedef337"],["/santutorial/event/index.html","734248c492a659b178fdcf3d955dca12"],["/santutorial/for/index.html","06922f52137eb1d481156da91dcf64ea"],["/santutorial/form/index.html","c39f0baf900d56dab7a625fa81b1216a"],["/santutorial/if/index.html","3746fc878d6f1518e526eb56529796f5"],["/santutorial/reverse-flag/index.html","2a23fa27453a9c3bd742af805c034ce7"],["/santutorial/reverse/index.html","7d5307cf00683893052bd2a691308016"],["/santutorial/setup/index.html","c913c7daec9db8ea0931204e4f5530f1"],["/santutorial/slot/index.html","c86ffff42711da10067b6b618ca62150"],["/santutorial/ssr/index.html","6b3fdb5d7d07afd0ce69409e7d42d7e9"],["/santutorial/start/index.html","3ac471a6a574e29d7babdc0842271f28"],["/santutorial/style/index.html","f7af259a6612e9e759a0d8d52ec20230"],["/santutorial/template/index.html","3e5c5183ad67cf5122d9ef03bd504649"],["/santutorial/transition/index.html","24a2b0b48aa9384dfff31442a17e4346"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







