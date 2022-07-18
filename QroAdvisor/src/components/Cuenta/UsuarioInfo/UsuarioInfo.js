import { View} from 'react-native'
import React from 'react'
import {Avatar, Text} from "react-native-elements";
import {getAuth} from "firebase/auth"
import {styles} from "./UsuarioInfo.styles";

export function UsuarioInfo() {
    const {uid, photoURL, email, displayName} = getAuth().currentUser;

    const cambiaAvatar = () => {
      console.log("Cambiar Avatar");
    }
  return (
    <View style={styles.content}>
      <Avatar 
      size="large" 
      rounded 
      containerStyle={styles.avatar}
      icon={{type:"material", name:"person"}}
      source={{uri: photoURL}}
      >
        <Avatar.Accessory size={24} onPress={cambiaAvatar}/>
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}