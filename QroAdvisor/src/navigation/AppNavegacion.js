import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import {RestauranteVista} from "../vistas/RestauranteVista";
import {FavoritosVista} from "../vistas/FavoritosVista";
import { PuntuacionVista } from "../vistas/PuntuacionVista";
import { BuscarVista } from "../vistas/BuscarVista";
import {CuentaVista} from "../vistas/CuentaVista";

const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return(
        <Tab.Navigator screenOptions={({ route}) => ({
            tabBarActiveTintColor: "#00a688",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size}) => {
                screenOptions(route, color, size)
            },
        })}>
            <Tab.Screen name="Restaurante" component={RestauranteVista} />
            <Tab.Screen name="Favoritos" component={FavoritosVista} />
            <Tab.Screen name="Puntuacióan" component={PuntuacionVista} />
            <Tab.Screen name="Buscar" component={BuscarVista} />
            <Tab.Screen name="Cuenta" component={CuentaVista} />
        </Tab.Navigator>
    );
}

function screenOptions (route, color, size){
    let iconName;
    if(route.name === "Restaurante"){
        iconName = "compass";
    }

    if(route.name === "Favoritos"){
        iconName = "heart-outlined";
    }

    if(route.name === "Puntuacion"){
        iconName = "star-outline";
    }

    if(route.name === "Buscar"){
        iconName = "magnify";
    }

    if(route.name === "Cuenta"){
        iconName = "home-outline";
    }

    return(
        
        <Icon type="material-community" name= {iconName} color = {color} size={size} />
    )
}
