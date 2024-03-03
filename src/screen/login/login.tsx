import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { loginUser } from "../../services/api/api.login";
import InputField from "../../components/InputField";
import globalStyles from "../../styles/globalStyles";
import React from "react";
import PasswordInputField from "../../components/PasswordInputField";
import Toast from "react-native-toast-message";

export const LoginUsuario = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Iniciar Sesión",
    });
  }, [navigation]);

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
      Toast.show({
        type: "success",
        text1: "¡Éxito!",
        text2: "Usuario logueado correctamente",
        text2Style: {
          fontSize: 13,
        },
        topOffset: 110,
        onHide: () => {
          reset();
        },
      });

      reset();
    } catch (error) {
      console.error("Error en la aplicación:", error);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../../img/abogada.jpg")}
        style={globalStyles.backgroundImage}>
        <View style={globalStyles.containerLogin}>
          <Text style={globalStyles.title}>Iniciar Sesión</Text>

          <InputField
            control={control}
            name="correo"
            placeholder="Correo electrónico"
            rules={{ required: true }}
          />
          <PasswordInputField
            control={control}
            name="contrasena"
            placeholder="Contraseña"
            rules={{ required: true }}
          />

          <TouchableOpacity
            style={{ ...globalStyles.button, borderRadius: 10 }}
            onPress={handleSubmit(onSubmit)}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...globalStyles.registroStilo, borderRadius: 10 }}
            onPress={() => navigation.navigate("Registro")}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Registrate
            </Text>
          </TouchableOpacity>

          <View style={globalStyles.toggleContainer}>
            <Text style={globalStyles.toggleText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
