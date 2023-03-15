import { useState } from 'react';
import { Link } from "react-router-dom"
import { IonContent, IonPage, IonRow, IonCol, IonIcon, IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';
import { IonInputCustomEvent, InputChangeEventDetail } from '@ionic/core';
import { personCircle } from 'ionicons/icons';
import OkAlert from '../components/OkAlert';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertTitle] = useState('Błąd')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URI
    })

    const loginUser = () => {
      api.post('/login', {"login": username, "password": password})
        .then((response) => console.log('Udało się'))
        .catch((error) => {
          if (error.response.code === 500) {
              setAlertMessage('Wystąpił nieoczekiwany błąd podczas logowania do aplikacji. Prosimy spróbować ponownie')
          } else {
              setAlertMessage(error.response.data?.message ?? 'Wystąpił nieoczekiwany błąd podczas logowania do aplikacji. Prosimy spróbować ponownie')
          }
          setShowAlert(true)
      })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      loginUser(); 
    }

    const onPasswordChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {
      setPassword((event.target as HTMLIonInputElement).value as string)
    }

    const onUserNameChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {
      setUsername((event.target as HTMLIonInputElement).value as string)
    }

  return (
    <IonPage>
      <form onSubmit={handleSubmit}>  
        <IonContent fullscreen>
          <OkAlert message={alertMessage} title={alertTitle} visible={showAlert} handleOnClose={() => setShowAlert(false)}></OkAlert>
          <IonRow className="ion-text-center">
              <IonCol>
                  <IonIcon icon={personCircle} className='logo'></IonIcon>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Login (email)</IonLabel>
                      <IonInput type="email" value={username} onIonChange={onUserNameChange}></IonInput>
                  </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonItem>
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput type="password" value={password} onIonChange={onPasswordChange}></IonInput>
                  </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonButton type="submit">Login</IonButton>
                  <Link to="/register">Register</Link>
              </IonCol>
          </IonRow>
        </IonContent>
      </form>
    </IonPage>
  );
};

export default Login;