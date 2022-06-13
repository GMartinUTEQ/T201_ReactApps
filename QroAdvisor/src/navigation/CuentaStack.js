import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CuentaVista }  from "../vistas/CuentaVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Cuenta.Cuenta } 
        component={CuentaVista} 
        options = {{title:"Cuenta"}}
        />
    </Stack.Navigator>
  )
}