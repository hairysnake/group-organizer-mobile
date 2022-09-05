import { IonContent, IonPage, IonRow, IonCol, IonIcon, IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  
    let email: string = '';
    let password: string = '';

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URI
    })

    const handleLogin = () => {
        axios.post('/login', {
            user: email
            , password: password
        }).catch((reason) => {
            console.log(reason);
        })
    }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="ion-text-center">
            <IonCol>
                <IonIcon icon={personCircle} className='logo'></IonIcon>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Login (email)</IonLabel>
                    <IonInput type="email" value={email}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={password}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonButton expand="block" onClick={handleLogin}>
                    Login
                </IonButton>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
