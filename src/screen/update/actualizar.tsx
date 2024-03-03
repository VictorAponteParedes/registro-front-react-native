import React, { useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { updateUser } from "../../services/api/api.registro";
import globalStyles from "../../styles/globalStyles";
import ImageInputField from "../../components/ImageInputField";
import Toast from "react-native-toast-message";

const ActualizarUsuarioScreen: React.FC = ({ route, navigation }) => {
  const { control, handleSubmit, setValue } = useForm();
  const { usuario } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Actualizar usuarios",
    });
  }, [navigation]);

  useEffect(() => {
    if (usuario) {
      const {
        correo: usuarioCorreo,
        nombre: usuarioNombre,
        apellido: usuarioApellido,
        contrasena: usuarioContrasena,
      } = usuario;

      setValue("nombre", usuarioNombre || "");
      setValue("apellido", usuarioApellido || "");
      setValue("correo", usuarioCorreo || "");
      setValue("contrasena", usuarioContrasena || "");
    }
  }, [usuario, setValue]);

  const onSubmit = async (data) => {
    try {
      const usuarioActualizado = {
        _id: usuario._id,
        correo: data.correo,
        nombre: data.nombre,
        apellido: data.apellido,
      };

      await updateUser(usuarioActualizado);
      Toast.show({
        type: "success",
        text1: "¡Éxito!",
        text2: "Usuario actualizado correctamente.",
        text2Style: {
          fontSize: 13,
        },
        topOffset: 110,
      });

      navigation.navigate("ListaUsuarios");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      Alert.alert("Error al actualizar usuario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <ImageBackground
      source={require("../../img/abogada.jpg")}
      style={globalStyles.backgroundImage}>
      <View style={globalStyles.containerLogin}>
        <Text style={globalStyles.title}>Editar Usuario</Text>

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
          name="nombre"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={globalStyles.input}
              placeholder="Apellido"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
          name="apellido"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={globalStyles.input}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
          name="correo"
          defaultValue=""
        />

        <TouchableOpacity
          style={{ ...globalStyles.button, borderRadius: 10 }}
          onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
            Actualizar Usuario
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...globalStyles.registroStilo, borderRadius: 10 }}
          onPress={() => {
            navigation.navigate("ListaUsuarios");
          }}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ActualizarUsuarioScreen;
