import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistroScreen from "./src/screen/registro/registro";
import ListaUsuariosScreen from "./src/screen/lista-usuario/lista-usuario";
import ActualizarUsuarioScreen from "./src/screen/update/actualizar";
import { LoginUsuario } from "./src/screen/login/login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="ListaUsuarios" component={ListaUsuariosScreen} />
        <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
        <Stack.Screen
          name="ActulizarUsuarios"
          component={ActualizarUsuarioScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
