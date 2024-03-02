import React, { useState, useEffect, useId } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import InputField from "../../components/InputField";

import globalStyles from "../../styles/globalStyles";
import { useForm } from "react-hook-form";
import { deleteUser, updateUser } from "../../services/api/api.registro";

const DetalleUsuario: React.FC = ({ route, navigation }) => {
  const { control, handleSubmit, setValue } = useForm();
  const { usuario } = route.params;

  const handleDeleteUser = async (userId: any) => {
    try {
      await deleteUser(userId);
      Alert.alert("Usuario eliminado correctamente.");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      Alert.alert("Error al eliminar usuario. Por favor, intenta de nuevo.");
    }
  };

  const handleUpdateUser = async (userId: any) => {
    try {
      await updateUser(userId);
      Alert.alert("Usuario actualizado correctamente.");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      Alert.alert("Error al actualizar usuario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <>
      <View style={styles.imagenContainer}>
        <View style={globalStyles.containerRegistro}>
          {usuario.imagen && (
            <Image source={{ uri: usuario.imagen }} style={styles.imagen} />
          )}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={globalStyles.input}>{usuario.nombre}</Text>
            <Text style={globalStyles.input}>{usuario.apellido}</Text>
            <Text style={globalStyles.input}>{usuario.correo}</Text>
          </View>
          <TouchableOpacity
            style={{ ...globalStyles.button, borderRadius: 10 }}
            onPress={() => {
              navigation.navigate("ActulizarUsuarios", {
                usuario: usuario._id,
              });
            }}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
              }}>
              Actualizar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...globalStyles.button,
              borderRadius: 10,
              backgroundColor: "#ff5c5c",
            }}
            onPress={() => {
              handleDeleteUser(usuario._id);
              navigation.navigate("ListaUsuarios");
            }}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
              }}>
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagenContainer: {
    justifyContent: "center",
    width: "100%",
  },
  imagen: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    marginBottom: 10,
    // zIndex: 4,
  },
  informacionContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detalleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  detalleTexto: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DetalleUsuario;
