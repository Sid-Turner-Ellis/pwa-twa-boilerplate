const cacheVersion = 'v3' 

self.addEventListener('install', ()=>{
  console.log('Service worker has been installed');
  self.skipWaiting()

})

self.addEventListener('activate', (e)=>{
  console.log('Service worker is being activated');

    e.waitUntil(
      caches.keys().then(cacheNameArr=> {
        const toDelete = cacheNameArr.filter(cn => cn != cacheVersion);
        return Promise.all(
          toDelete.map(cache => {
            return caches.delete(cache);
          })
        )
      })
    )


})

self.addEventListener('fetch',(e)=>{
  // make sure its not a fetch request to firestore

  e.respondWith(handleRequest(e.request))

  // function to update the cache
  // updateCache(e.request)

})


async function handleRequest(req){
  const cache = await caches.open(cacheVersion)
  const cacheRes = await cache.match(req)
  if(cacheRes){
    return cacheRes;
  }else{
    const netRes = await fetch(req);

    if(netRes.ok){
      // cache the response 
      await cache.put(req, netRes.clone())
      return netRes;
    }else{
      // return an error message or something by matching it to a 404 page
      return netRes;
    }
  }
}

async function updateCache(req){

  if(navigator.onLine){
    const res = await fetch(req);
    const cache = await caches.open(cacheVersion);

    if(res.ok){
      // add the response to the caches and return the response
      await cache.put(req, res.clone())
    }

  }
}

