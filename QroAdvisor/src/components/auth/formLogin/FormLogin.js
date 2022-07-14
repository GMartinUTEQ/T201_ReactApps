import { View, Text } from 'react-native'
import React from 'react'
import {Input, Icon, Button} from "react-native-elements"
import { styles } from './FormLogin.styles'


export function FormLogin() {
  return (
    <View style={styles.content}>
      <Input 
        placeholder='Correo electrónico' 
        containerStyle={styles.input}
        rightIcon={
            <Icon 
                type="material-community" 
                name="at" 
                iconStyle={styles.icon}/>}
        />
      <Input 
        placeholder='Contraseña' 
        containerStyle={styles.input} 
        secureTextEntry={true}
        rightIcon={
            <Icon 
                type="material-community" 
                name="eye-outline" 
                iconStyle={styles.icon}/>}
        />
      <Button 
        title="Iniciar sesión" 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn} />
    </View>
  )
}