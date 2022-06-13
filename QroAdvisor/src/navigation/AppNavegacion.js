import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import {RestauranteStack} from "./RestauranteStack";
import {FavoritoStack} from "./FavoritoStack";
import { PuntuacionStack } from "./PuntuacionStack";
import { BuscarStack } from "./BuscarStack";
import { CuentaStack } from "./CuentaStack";
import {vista} from "../utils";


const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return(
        <Tab.Navigator 
        screenOptions={({route}) => ({
            headerShown:false,
            tabBarActiveTintColor: "#224e79",
            tabBarInactiveTintColor: "#7c7c7c",
            showIcon: true,
            tabBarIcon: ({ color, size}) => screenOptions(route, color, size),
        })}>
            <Tab.Screen 
                name={vista.Restaurante.tab} 
                component={RestauranteStack} 
                options={{title: "Restaurante"}}
            />
            <Tab.Screen 
                name={vista.Favoritos.tab} 
                component={FavoritoStack}  
                options={{title: "Favoritos"}}
            />
            <Tab.Screen 
                name={vista.Puntuacion.tab} 
                component={PuntuacionStack}  
                options={{title: "Puntación"}}/>
            <Tab.Screen 
                name={vista.Buscar.tab} 
                component={BuscarStack}  
                options={{title: "Buscar"}}/>
            <Tab.Screen 
                name={vista.Cuenta.tab} 
                component={CuentaStack}  
                options={{title: "Cuenta"}}/>

        </Tab.Navigator>
    );
}

function screenOptions (route, color, size){
    let iconName;
    if(route.name === vista.Restaurante.tab)
        iconName = "compass-outline";
    
    if(route.name === vista.Favoritos.tab)
        iconName = "heart-outline";
    
    if(route.name === vista.Puntuacion.tab)
        iconName = "star-outline";

    if(route.name === vista.Buscar.tab)
        iconName = "magnify";
    
    if(route.name === vista.Cuenta.tab)
        iconName = "home-outline";

    return(
       <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}
