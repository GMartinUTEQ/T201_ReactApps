import React from 'react';
import { View, ScrollView } from 'react-native';
import {styles} from "./InvitadoVista.styles";
import {Text, Button, Image} from "react-native-elements"

export  function InvitadoVista() {

  const irALogin = () => {
    console.log("Ir a Login");
  }
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image source={require("../../../../assets/img/Logo.jpg")} style={styles.image}/>
      <Text style={styles.title}>Consultar tu perfil de QroAdvisor</Text>
      <Text style={styles.descripcion}>Describe tu restaurante favorito, 
      busca y visualiza opciones similares
      </Text>
     
      <Button 
        title="Ver tu perfil" 
        onPress={irALogin} 
        buttonStyle={styles.btnStyle} />
      
    </ScrollView>
  )
}