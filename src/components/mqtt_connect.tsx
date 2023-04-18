import { IonContent, IonTitle } from '@ionic/react';
import { Client, Message } from 'paho-mqtt';
import { useState } from 'react';

const Connection: React.FC = () => {
  const [destinationName, setDestinationLight] = useState('');
// domian, port, path , id
  const client = new Client("w33.kynoci.com", Number(15676), '/ws', "");
    
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived_light;
    
  client.connect({ 
    userName: "babi",
    password: "chu",
    useSSL: true,
    onSuccess: onConnect
  });
    
  function onConnect() {
    console.log('Success to connect mqtt');
    client.subscribe('vega1/#')
  }
  //output error
  function onConnectionLost(responseObject: { errorCode: number; errorMessage: any; }) {
    if (responseObject.errorCode !== 0) {
      const name = (`onConnectionLost: ${responseObject.errorMessage}`);
      setDestinationLight(name);
      //console.log(`onConnectionLost: ${responseObject.errorMessage}`);
    }
  }

  //if loop to catch the topic you want
  function onMessageArrived_light(message: {
    destinationName: any; payloadString: any; 
  }) {
    if(message.destinationName == "vega1/light"){
      const name = message.payloadString;
      setDestinationLight(name);
    }
  }
    
  return (
    <>
      <IonTitle size="large">Light = {destinationName}</IonTitle>
    </>
  );
}

export default Connection;