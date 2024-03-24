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
import globalStyles from "../../styles/globalStyles";

const ListaUsuariosScreen: React.FC = ({ route, navigation }) => {
  const [usuarios, setUsuarios] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Lista de usuarios",
    });
  }, [navigation]);

  const fetData = async () => {
    try {
      const response = await obtenerUsuarios();
      setUsuarios(response);
    } catch (e) {
      console.log("Error al obtener los usuarios: ", e);
    }
  };

  useEffect(() => {
    fetData();
    const focusSubscription = navigation.addListener("focus", () => {
      fetData();
    });

    return () => {
      focusSubscription();
    };
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../../img/abogada.jpg")}
      style={globalStyles.backgroundImage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 w-96 py-3">
          {usuarios.length > 0 ? (
            usuarios.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("DetalleUsuario", {
                    usuario: item,
                  });
                }}>
                <View className="bg-white w-96 h-28 border border-green-700 rounded-xl py-2 px-5 my-2">
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
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>No hay usuarios registrados.</Text>
          )}
        </View>
        <View className="flex-1 w-96 ">
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
            <Text
              // className="text-white text-center"
              style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
              Atras
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ListaUsuariosScreen;
