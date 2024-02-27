import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { registerUser } from "../../services/api/api.registro";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../components/InputField";
import ImageInputField from "../../components/ImageInputField";
import ModalMensaje from "../../components/modal-mensaje";

const RegistroScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [usuarioCreado, setUsuarioCreado] = useState(false);
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
      await registerUser(data);
      setUsuarioCreado(true);
      reset();
    } catch (error) {
      console.error("Error en la aplicación:", error);

      if (error.response) {
        if (error.response.status === 409) {
          Alert.alert("Error: El usuario ya existe");
        } else if (error.response.data && error.response.data.message) {
          Alert.alert(`Error: ${error.response.data.message}`);
        } else {
          Alert.alert("Error en la aplicación. Por favor, intenta de nuevo.");
        }
      } else {
        Alert.alert("Error en la aplicación. Por favor, intenta de nuevo.");
      }
    }
  };

  const toggleSignUp = () => {
    navigation.navigate("LoginUsuario");
  };

  const closeModal = () => {
    setUsuarioCreado(false);
  };

  return (
    <>
      <View style={{ marginBottom: 40 }}>
        <ImageBackground
          source={require("../../img/icono.jpg")}
          style={styles.backgroundImage}></ImageBackground>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        <InputField
          control={control}
          name="nombre"
          placeholder="Nombre"
          rules={{ required: true }}
        />
        <InputField
          control={control}
          name="apellido"
          placeholder="Apellido"
          rules={{ required: true }}
        />

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
          title="Registrar"
          color="#226b5e"
          onPress={handleSubmit(onSubmit)}
        />

        <View style={styles.botonListaUsuario}>
          <Button
            title="Ver Usuarios Registrados"
            onPress={() => navigation.navigate("ListaUsuarios")}
          />
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            ¿Ya tienes una cuenta?{" "}
            <Text style={styles.linkText} onPress={toggleSignUp}>
              Inicia sesión
            </Text>
          </Text>
        </View>
        {usuarioCreado && (
          <TouchableWithoutFeedback onPress={closeModal}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ModalMensaje
                mensaje={"Usuario creado correctamente"}
                iconNombre={"star"}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  toggleContainer: {
    marginTop: 16,
    alignItems: "center",
  },

  toggleText: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
  },

  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  botonListaUsuario: {
    marginTop: 10,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#226b5e",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default RegistroScreen;
