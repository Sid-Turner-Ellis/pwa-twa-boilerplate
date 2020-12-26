import React, {useState , useEffect} from 'react'
import PouchDB from 'pouchdb-browser'


export default function useDB() {
  const [db, setDB] = useState(new PouchDB('habits'))


  useEffect(() => {

    async function runAsyncFuntion(){
      console.log(await db.allDocs());
    }
    runAsyncFuntion()


  }, )

  useEffect(()=>{
    db.changes({
      since: 'now',
      live: true
    }).on('change', (e)=>{
      console.log(e);
    });

    const rep = PouchDB.sync('habits','http://localhost:5984/test', {
      live: true,
      retry: true
    }).on('change',(r)=>{
      console.log(r);
    })
  },[])

  return db;
}
