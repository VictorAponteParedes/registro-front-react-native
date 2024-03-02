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
import globalStyles from "../../styles/globalStyles";
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
      <ImageBackground
        source={require("../../img/abogada.jpg")}
        style={globalStyles.backgroundImage}>
        <View style={globalStyles.containerRegistro}>
          <Text style={globalStyles.title}>Registrate</Text>
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

          <TouchableOpacity
            style={{ ...globalStyles.button, borderRadius: 10 }}
            onPress={handleSubmit(onSubmit)}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Crear cuenta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...globalStyles.registroStilo, borderRadius: 10 }}
            onPress={() => navigation.navigate("ListaUsuarios")}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Lista de usuarios
            </Text>
          </TouchableOpacity>

          <View style={globalStyles.toggleContainer}>
            <Text style={globalStyles.toggleText}>
              ¿Ya tienes una cuenta?{" "}
              <Text style={globalStyles.linkText} onPress={toggleSignUp}>
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
      </ImageBackground>
    </>
  );
};

export default RegistroScreen;
