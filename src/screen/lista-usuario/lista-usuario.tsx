import React, { useState, useEffect } from "react";
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
import { deleteUser, obtenerUsuarios } from "../../services/api/api.registro";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles/globalStyles";

const ListaUsuariosScreen: React.FC = ({ route, navigation }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await obtenerUsuarios();
        setUsuarios(response);
      } catch (e) {
        console.log("Error al obtener los usuarios: ", e);
      }
    };
    fetData();
  }, []);

  const handleDeleteUser = async (userId: any) => {
    try {
      await deleteUser(userId);
      Alert.alert("Usuario eliminado correctamente.");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      Alert.alert("Error al eliminar usuario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <ImageBackground
      source={require("../../img/abogada.jpg")}
      style={globalStyles.backgroundImage}>
      <ScrollView>
        <View style={globalStyles.containerListaUsuario}>
          <Text style={globalStyles.title}>Lista de Usuarios Registrados</Text>

          {usuarios.length > 0 ? (
            usuarios.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("DetalleUsuario", {
                    usuario: item,
                  });
                }}>
                <View style={globalStyles.usuarioItem}>
                  <View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}>
                      {item.imagen && (
                        <Image
                          source={{ uri: item.imagen }}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            marginRight: 8,
                          }}
                        />
                      )}
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}>
                      <Icon name="user" solid style={{ marginRight: 8 }} />
                      <Text>{`${item.nombre} ${item.apellido}`}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}>
                      <Icon name="envelope" solid style={{ marginRight: 8 }} />
                      <Text>{`${item.correo}`}</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        ...globalStyles.button,
                        borderRadius: 10,
                        marginTop: 20,
                      }}
                      onPress={() => {
                        navigation.navigate("ActulizarUsuarios", {
                          usuario: item,
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
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>No hay usuarios registrados.</Text>
          )}

          <TouchableOpacity
            style={{ ...globalStyles.button, borderRadius: 10 }}
            onPress={() => navigation.navigate("Registro")}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Registro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...globalStyles.registroStilo, borderRadius: 10 }}
            onPress={() => {
              navigation.navigate("Registro");
            }}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Atras
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ListaUsuariosScreen;
