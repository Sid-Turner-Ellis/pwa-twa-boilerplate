# This setup
This was a setup i was playing with to test out PWAs and eventually wrapping them inside of a TWA so that they could be added to the play store. This technology does excite me, When i build a web app next i will definitely be implementing this. Though if the goal is to make a native app this probably isnt quite there yet. 

## Whats going on this file
1. service workers - this service worker will cache the site shell, It grabs the cache and if it doesnt exist then the site will be fetched, This allows for a really nice initial loading speed. This does require manual updates to be pushed through which i think is a safe option with an app that doesnt change too often. If i was to do this again i would probably use WorkBox.

2. Offline first db syncing.
Using pouchDB as an interface for interaction between the app and indexedDB. This would then sync with couchDB on an apache server. The beauty is that it syncs the offline database with the online one very well. Firebase could also be used for this however it doesnt allow you to choose what is saved locally so i thought it would be better to use something more barebones.

## The workflow:
1. Check if there is a local pouchDB database present
2. If not, redirect the user to a sign in page
3. On sign in, Return the data for the object or on create account, Return an empty object user object with the properties but no value
4. Have this saved directly into the state of the app
5. Whenever the state changes, Update pouchDB with the new user object
6. This will then sync with the online database which will act as a backup

##To use this:
connect your online database to sync with the local pouchDB database and your ready to go.
