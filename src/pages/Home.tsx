import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="Home"></Header>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
