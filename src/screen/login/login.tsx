import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { loginUser } from "../../services/api/api.login";
import InputField from "../../components/InputField";
import React from "react";

export const LoginUsuario = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    register,
    setValue,
    control,
    reset,
    getValues,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await loginUser(data);
      Alert.alert("usuario logueado exitosamente.");

      reset();
    } catch (error) {
      console.error("Error en la aplicación:", error);
    }
  };

  return (
    <>
      <View style={{ marginBottom: 40 }}>
        <ImageBackground
          source={require("../../img/icono.jpg")}
          style={styles.backgroundImage}></ImageBackground>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <InputField
          control={control}
          name="correo"
          placeholder="Correo electrónico"
          rules={{ required: true }}
        />
        <InputField
          control={control}
          name="contrasena"
          placeholder="Contraseña"
          rules={{ required: true }}
        />

        <Button
          title="Iniciar Sesión"
          color="#226b5e"
          onPress={handleSubmit(onSubmit)}
        />

        <View style={styles.registroStilo}>
          <Button
            title="Registrate"
            onPress={() => navigation.navigate("Registro")}
          />
        </View>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>¿Olvidaste tu contraseña?</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginTop: 140,
    backgroundColor: "#f1f1f1",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    fontStyle: "italic",
  },

  toggleContainer: {
    marginTop: 16,
    alignItems: "center",
  },

  toggleText: {
    color: "black", // Cambiado a negro para el texto principal
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
  },

  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },

  registroStilo: {
    marginTop: 10,
  },

  button: {
    backgroundColor: "#226b5e",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
