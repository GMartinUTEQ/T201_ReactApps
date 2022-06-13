import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PuntuacionVista }  from "../vistas/PuntuacionVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function PuntuacionStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Puntuacion.Puntuacion } 
        component={PuntuacionVista} 
        options = {{title:"Puntuación"}}
        />
    </Stack.Navigator>
  )
}