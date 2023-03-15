import { IonAlert } from "@ionic/react"

type AlertParams = {
    message: string,
    title: string,  
    visible: boolean,
    handleOnClose: () => void
}

export default function OkAlert({message, title, visible, handleOnClose} : AlertParams) {

  return (
    <div>
      <IonAlert
            isOpen={visible}
            onDidDismiss={() => handleOnClose()}
            header={title}
            subHeader=""
            message={message}
            buttons={['OK']}
        />
    </div>
  )
}
