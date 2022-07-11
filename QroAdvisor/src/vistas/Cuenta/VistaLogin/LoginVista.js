import React from 'react';
import { View, ScrollView } from 'react-native';
import {Text, Image} from "react-native-elements";
import {styles} from "./LoginVista.styles";
import { useNavigation } from '@react-navigation/native';
import {vista} from "../../../utils"

export  function LoginVista() {

  const navigation = useNavigation();

  const IrARegistro = () => {
    navigation.navigate(vista.Cuenta.register)
  }

  return (
    <ScrollView>
      <Image source={require("../../../../assets/img/Logo.jpg")} 
      style={styles.image}/>
      <View style={styles.content}>
        <Text>Estamos en Login</Text>
        <Text onPress={IrARegistro} >Registrarse</Text>
      </View>
      
    </ScrollView>
  )
}