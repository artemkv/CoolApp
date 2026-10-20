import { IonContent, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='cool'>Hello Cool</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
