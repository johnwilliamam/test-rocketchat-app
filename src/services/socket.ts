import { driver } from "@rocket.chat/sdk";

export async function socketInitialize() {
    const HOST = 'http://localhost:3000';
    const USER = 'john.william';
    const PASS = 'JWAM@2505';
    const BOTNAME = 'easybot';  // name  bot response to
    const SSL = false;  // server uses https ?
    const ROOMS = ['GENERAL', 'myroom1'];
    var myuserid;

    try {
        const conn = await driver.connect({ host: HOST, useSsl: SSL })
        console.log('connect')
        myuserid = await driver.login({ username: USER, password: PASS });
        console.log('joined rooms');
        // set up subscriptions - rooms we are interested in listening to
        const subscribed = await driver.subscribeToMessages();
        console.log('subscribed');
    } catch (err) { }

}

export async function listenMessage() {
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