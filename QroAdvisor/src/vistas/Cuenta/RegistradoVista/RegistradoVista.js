import React from 'react'
import { View } from 'react-native'
import {Button} from "react-native-elements"
import {UsuarioInfo} from "../../../components/Cuenta";
import {styles} from "./RegistradoVista.styles";
import { getAuth, signOut} from "firebase/auth";
import { async } from '@firebase/util';


export function RegistradoVista() {

  const salir = async () => {
    const auth = getAuth();
    await signOut(auth);
  }
  return (
    <View >
      <UsuarioInfo/>

      <Button 
        title="Cerrar Sesión" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnTextStyle}
        onPress={salir}
        />
    </View>
  )
}