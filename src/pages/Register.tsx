import { InputChangeEventDetail, IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { IonInputCustomEvent } from '@ionic/core';
import { useState } from 'react';
import OkAlert from '../components/OkAlert';

const Register: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertTitle] = useState('Błąd')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isDataCorrect()) {

    } else {
      setShowAlert(true);
    }
  }

  const isDataCorrect = () => {
    return false;
  }


  const onPasswordChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {
    setPassword((event.target as HTMLIonInputElement).value as string)
  }

  const onUserNameChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {
    setUsername((event.target as HTMLIonInputElement).value as string)
  }

  const onPasswordConfirmationChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {

  }

  return (
    <IonPage>
      <form onSubmit={handleSubmit}>  
      <OkAlert message={alertMessage} title={alertTitle} visible={showAlert} handleOnClose={() => setShowAlert(false)}></OkAlert>
      <IonContent fullscreen>
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
                  <IonItem>
                      <IonLabel position="floating">Confirm password</IonLabel>
                      <IonInput type="password" value={passwordConfirmation} onIonChange={onPasswordConfirmationChange}></IonInput>
                  </IonItem>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonButton type="submit">Create account</IonButton>
                  <IonButton type="button" routerLink='/login'>Cancel</IonButton>
              </IonCol>
          </IonRow>
      </IonContent>
      </form>
    </IonPage>
  );
}

export default Register;