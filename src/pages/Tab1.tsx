import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
import Connection from '../components/mqtt_connect';

const mqttOptions = {
  host: 'wss://w33.kynoci.com',
  port: 15676,
  protocol: 'wss',
  username: 'babi',
  password: 'chu',
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Connection />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
