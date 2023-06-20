'use client'
import { socketInitialize } from '@/services/socket';
import { driver } from '@rocket.chat/sdk';
import { useState } from 'react';
import styles from './page.module.css';


export default async function Home() {
  const [name, setName] = useState()
  async function listenMessage() {
    // connect the processMessages callback
    const msgloop = await driver.reactToMessages(async (err, message, messageOptions) => {
        if (!err) {
            // filter our own message
            // if (message.u._id === myuserid) return;
            // can filter further based on message.rid
            // const roomname = await driver.getRoomName(message.rid);
            // if (message.msg.toLowerCase().startsWith(BOTNAME)) {
            //   const response = message.u.username + 
            //         ', how can ' + BOTNAME + ' help you with ' +
            //         message.msg.substr(BOTNAME.length + 1);
            //   const sentmsg = await driver.sendToRoom(response, roomname);
            console.log(message)
            setName(message.msg)
        }
    });
    console.log('connected and waiting for messages');
  
    // when a message is created in one of the ROOMS, we 
    // receive it in the processMesssages callback
  
    // greets from the first room in ROOMS 
    // const sent = await driver.sendToRoom( BOTNAME + ' is listening ...',ROOMS[0]);
    // console.log('Greeting message sent');
  
    // callback for incoming messages filter and processing
  }
  
  const init = await socketInitialize();
  console.log(init)
  await listenMessage()
  // const msg = await listenMessage()
  // console.log(msg)
  
  // useEffect(() => {
  //   async function messages(){
  //     console.log('MSG', msg)
  //   }
  //   messages()
  // })
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
