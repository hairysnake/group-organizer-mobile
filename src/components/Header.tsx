import PropTypes from 'prop-types'
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

type HeaderParams = {
    title: string
}

export default function Header({title}: HeaderParams) {
  return (
    <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
    </IonHeader>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}