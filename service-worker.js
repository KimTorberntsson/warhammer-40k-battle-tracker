"use strict";var precacheConfig=[["/warhammer-40k-battle-tracker/index.html","3a882491a3b36bb01c7a06ad581c7e1a"],["/warhammer-40k-battle-tracker/static/css/main.eeef9d83.css","bc9f2db4d1ce14925d58418fff0ae253"],["/warhammer-40k-battle-tracker/static/js/main.d06e8279.js","70ddf908a2222cc8be13780fd7b30be9"],["/warhammer-40k-battle-tracker/static/media/adeptus-astartes.282cca70.svg","282cca70597bd538e14eae59b35f3007"],["/warhammer-40k-battle-tracker/static/media/adeptus-mechanicus.c8666fbb.svg","c8666fbba886d062d1d029e201d6de2a"],["/warhammer-40k-battle-tracker/static/media/adeptus-ministorum.78662d2d.svg","78662d2d5f37e9d9eff615e9e3caccd9"],["/warhammer-40k-battle-tracker/static/media/alpha-legion.2e8cf846.svg","2e8cf846abbb912a094427dd2b7999a7"],["/warhammer-40k-battle-tracker/static/media/angels-of-retribution.c92fdbe3.svg","c92fdbe3640b85ecbcd552a1690b8c81"],["/warhammer-40k-battle-tracker/static/media/angels-of-vengance.adf974f7.svg","adf974f783acd47e2f2d70dccb0b96d6"],["/warhammer-40k-battle-tracker/static/media/astra-militarum.6cfd9055.svg","6cfd90557cdf24931b16b67bd7423f22"],["/warhammer-40k-battle-tracker/static/media/black-legion.9d195278.svg","9d195278e9a56402375d0a38f10ae56a"],["/warhammer-40k-battle-tracker/static/media/blood-angels.a32fefbf.svg","a32fefbfafaff21e29ae1b9e571a2496"],["/warhammer-40k-battle-tracker/static/media/chaos-star.b8bd4a17.svg","b8bd4a1714e6c58487d03df4e727a516"],["/warhammer-40k-battle-tracker/static/media/crux-terminatus.e26d5ba1.svg","e26d5ba13036b6a80f1f50fd41ba5d26"],["/warhammer-40k-battle-tracker/static/media/dark-angels.79acf1f3.svg","79acf1f35e6d7abb858de28edc63edd3"],["/warhammer-40k-battle-tracker/static/media/death-guard.b2490e4a.svg","b2490e4a679191b1eaafc34da8968694"],["/warhammer-40k-battle-tracker/static/media/emperors-children.339d05f9.svg","339d05f97aa948f5c281c356dbb32d25"],["/warhammer-40k-battle-tracker/static/media/imperial-aquila.0da3abdc.svg","0da3abdcfe492c59d81cceeee9f992df"],["/warhammer-40k-battle-tracker/static/media/imperial-fists.0773413c.svg","0773413c242c2a63985fd7e7053e7860"],["/warhammer-40k-battle-tracker/static/media/inqusition.fa4e2a21.svg","fa4e2a21a3406505c7c1542b5fb4a993"],["/warhammer-40k-battle-tracker/static/media/iron-hands.3a40b8ab.svg","3a40b8ab1d58495c5dd3cd8d6669fe71"],["/warhammer-40k-battle-tracker/static/media/iron-warriors.63db5c7c.svg","63db5c7c9038d41db882f72f70d5eeb9"],["/warhammer-40k-battle-tracker/static/media/khorne-symbol.6d233528.svg","6d23352859f49eb4a71b7f41a62a8e48"],["/warhammer-40k-battle-tracker/static/media/knight-lords.ca612aeb.svg","ca612aeb1efb64157b15e78a958e244e"],["/warhammer-40k-battle-tracker/static/media/nurgle-icon.eae7c43d.svg","eae7c43d4d590c017a53a778fc1e7951"],["/warhammer-40k-battle-tracker/static/media/raven-guard.875442f5.svg","875442f509ddf377068caf89563139e9"],["/warhammer-40k-battle-tracker/static/media/salamanders.65ad4a0d.svg","65ad4a0d35553a2e61072257e2fe33dc"],["/warhammer-40k-battle-tracker/static/media/sisters-of-battle.d0ee09f0.svg","d0ee09f0d871a9eb83f8318231cb5162"],["/warhammer-40k-battle-tracker/static/media/skull.d964657d.svg","d964657d55067c005c6e0499134decb9"],["/warhammer-40k-battle-tracker/static/media/slaanesh-icon.2859ee09.svg","2859ee094aad1975ca1a51fc2a0c7396"],["/warhammer-40k-battle-tracker/static/media/space-wolfs.c8ab58ad.svg","c8ab58adf897dbc565f843ff46bdebf8"],["/warhammer-40k-battle-tracker/static/media/sword-1.4da7eb1d.svg","4da7eb1dec94d9ee37caee4836d0d2fb"],["/warhammer-40k-battle-tracker/static/media/sword-2.7023ab9c.svg","7023ab9c580c6c866734303adfa96972"],["/warhammer-40k-battle-tracker/static/media/sword-3.3520e7d7.svg","3520e7d73a15467a157796f174306a0f"],["/warhammer-40k-battle-tracker/static/media/thousand-sons.8637c177.svg","8637c17737a8efba2b6c889c2afe8284"],["/warhammer-40k-battle-tracker/static/media/tyranids.4de8546b.png","4de8546bbd5c0b62b2128e4983d3fb07"],["/warhammer-40k-battle-tracker/static/media/tzeentch-icon.77030b15.svg","77030b15a31200471db888ec881a70b8"],["/warhammer-40k-battle-tracker/static/media/ultramarines.25897e25.svg","25897e253e09bee36794204605346ca7"],["/warhammer-40k-battle-tracker/static/media/white-scars.35b2e7c1.svg","35b2e7c1d4687f7e55197dbda9b0dd4d"],["/warhammer-40k-battle-tracker/static/media/word-bearers.85266fd9.svg","85266fd921cb93e69b79df2132e26ad9"],["/warhammer-40k-battle-tracker/static/media/world-eaters.29720d42.svg","29720d42a0ff4364624d6a6d86313de6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),a=urlsToCacheKeys.has(t));var c="/warhammer-40k-battle-tracker/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});