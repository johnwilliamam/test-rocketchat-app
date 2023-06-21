'use client'
import { useEffect, useState } from 'react';
import { RealTimeAPI } from 'rocket.chat.realtime.api.rxjs';
import styles from './page.module.css';
 

export default function Home() {
  const [name, setName] = useState()

  // socketInitialize()
  const ws = new RealTimeAPI('ws://localhost:3000/websocket')
  ws.connectToServer()
  // ws.keepAlive().subscribe()
  const auth = ws.login('john.william', 'JWAM@2505')

  useEffect(() => {
    async function websocket(){
      ws.subscribe(
        (data)=>console.log('DATA', data),
        (error)=>console.log('ERR', error),
        ()=>console.log('completed')
      )
      ws.onMessage((message) => {
        console.log('MESSAGE', message)
      })
    
    }
    websocket()
  })
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>Mensagem: {name} </div>
      </div>
    </main>
  )
}
