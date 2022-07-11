import { View } from 'react-native'
import React, {useState} from 'react'
import {Input, Icon, Button} from "react-native-elements"
import { styles } from './FormRegistro.styles'
import { initialValues, validationSchema} from "./FormRegistro.data"
import { useFormik } from "formik"


export function FormRegistro() {

  const [MuestraContra, setMuestraContra] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("formulario enviado");
      console.log(formValue)
    }
  });

 const MuestraOcultaContra = () => setMuestraContra((prevState) => !prevState)
  
  return (
    <View style={styles.content}>
      <Input placeholder="Correo electrónico" containerStyle={styles.input} 
        rightIcon={
            <Icon type="material-community" name="at" iconStyle={styles.icon}/>
        }
        onChangeText={text => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input 
        placeholder='Contraseña' containerStyle={styles.input} 
        secureTextEntry={MuestraContra ? false: true}
        rightIcon={
            <Icon type="material-community" 
              name={MuestraContra ? "eye-off-outline":"eye-outline"}
              iconStyle={styles.icon}
              onPress={MuestraOcultaContra}/>
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input 
        placeholder='Repetir contraseña'  containerStyle={styles.input}  secureTextEntry={MuestraContra ? false: true}
        rightIcon={
            <Icon type="material-community" 
            name={MuestraContra ? "eye-off-outline":"eye-outline"}
            iconStyle={styles.icon}
            onPress={MuestraOcultaContra}/>
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
    <Button 
      title="Unirse"  containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={formik.handleSubmit}/>
    </View>
  )
}