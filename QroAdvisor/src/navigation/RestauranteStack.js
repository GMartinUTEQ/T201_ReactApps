import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {RestauranteVista} from "../vistas/Restaurante/RestauranteVista"
import {AgregaRestauranteVista} from "../vistas/Restaurante/AgregaRestauranteVista"  
import {vista} from "../utils"

const Stack = createNativeStackNavigator();

export  function RestauranteStack() {
    const Opciones = {
        title:"RestauranteStack"
    };
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Restaurante.Restaurante } 
        component={RestauranteVista} 
        options = {Opciones}
        />
        <Stack.Screen
        name={vista.Restaurante.AgregaRestaurante } 
        component={AgregaRestauranteVista} 
        options = {{title:"Nuevo Restaurante"}}
        />

        {/* 
        Aquí puedo ir añadiendo mas Screens.
        <Stack.Screen 
        name={vista.Restaurante.tab } 
        component={RestauranteVista} 
        options = {Opciones}
        /> */}

    </Stack.Navigator>
  )
}
