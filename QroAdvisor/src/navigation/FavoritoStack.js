import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritosVista }  from "../vistas/FavoritosVista";
import {vista} from "../utils";

const Stack = createNativeStackNavigator();

export function FavoritoStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name={vista.Favoritos.Favoritos } 
        component={FavoritosVista} 
        options = {{title:"Favoritos"}}
        />
    </Stack.Navigator>
  )
}