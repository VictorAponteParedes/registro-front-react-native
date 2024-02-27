import React, { useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { updateUser } from "../../services/api/api.registro";
import ImageInputField from "../../components/ImageInputField";

const ActualizarUsuarioScreen: React.FC = ({ route, navigation }) => {
  const { control, handleSubmit, setValue } = useForm();
  const { usuario } = route.params;

  useEffect(() => {
    if (usuario) {
      const {
        correo: usuarioCorreo,
        nombre: usuarioNombre,
        apellido: usuarioApellido,
        contrasena: usuarioContrasena,
        imagen: usuarioImange,
      } = usuario;

      setValue("nombre", usuarioNombre || "");
      setValue("apellido", usuarioApellido || "");
      setValue("correo", usuarioCorreo || "");
      setValue("contrasena", usuarioContrasena || "");
      setValue("imagen", usuarioImange || "");
    }
  }, [usuario, setValue]);

  const onSubmit = async (data) => {
    try {
      const usuarioActualizado = {
        _id: usuario._id,
        correo: data.correo,
        nombre: data.nombre,
        apellido: data.apellido,
        imagen: data.imagen,
      };

      await updateUser(usuarioActualizado);
      Alert.alert("Usuario actualizado correctamente.");

      navigation.navigate("ListaUsuarios");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      Alert.alert("Error al actualizar usuario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuario</Text>

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
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
            style={styles.input}
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
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
        name="correo"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field }) => (
          <ImageInputField
            onImageSelected={(imageUri) => {
              field.onChange(imageUri);
              setValue("imagen", imageUri);
            }}
          />
        )}
        name="imagen"
        rules={{ required: true }}
      />
      <Button
        title="Actualizar Usuario"
        color="#226b5e"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});

export default ActualizarUsuarioScreen;
