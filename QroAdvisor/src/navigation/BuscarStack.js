import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BuscarVista }  from "../vistas/BuscarVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function BuscarStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Buscar.Buscar } 
        component={BuscarVista} 
        options = {{title:"Buscar"}}
        />
    </Stack.Navigator>
  )
}