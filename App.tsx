import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";

import RegistroScreen from "./src/screen/registro/registro";
import ListaUsuariosScreen from "./src/screen/lista-usuario/lista-usuario";
import ActualizarUsuarioScreen from "./src/screen/update/actualizar";
import DetalleUsuario from "./src/screen/detalle-usuario/detalle-usuario";
import { LoginUsuario } from "./src/screen/login/login";
import { ScanQR } from "./src/screen/ScanQR/scanQR";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="ListaUsuarios" component={ListaUsuariosScreen} />
        <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
        <Stack.Screen name="DetalleUsuario" component={DetalleUsuario} />
        <Stack.Screen
          name="ActulizarUsuarios"
          component={ActualizarUsuarioScreen}
        />
        <Stack.Screen name="ScanQR" component={ScanQR} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
