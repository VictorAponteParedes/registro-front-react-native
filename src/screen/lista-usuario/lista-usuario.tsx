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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { deleteUser, obtenerUsuarios } from "../../services/api/api.registro";
import { useNavigation } from "@react-navigation/native";

const ListaUsuariosScreen: React.FC = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigation = useNavigation();

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Usuarios Registrados</Text>

        {usuarios.length > 0 ? (
          usuarios.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log("Este usuario es: ", item.nombre, item.apellido);
              }}>
              <View style={styles.usuarioItem}>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                    <Text>{`${item.nombre} ${item.apellido}`}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="envelope" solid style={{ marginRight: 8 }} />
                    <Text>{`${item.correo}`}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}>
                  <View>
                    <Button
                      color="blue"
                      title="Actualizar"
                      onPress={() => {
                        navigation.navigate("ActulizarUsuarios", {
                          usuario: item,
                        });
                      }}
                    />
                  </View>
                  <View>
                    <Button
                      color="#ff5c5c"
                      title="Eliminar"
                      onPress={() => {
                        handleDeleteUser(item._id);
                        navigation.navigate("ListaUsuarios");
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No hay usuarios registrados.</Text>
        )}

        <View>
          <Button
            color="#226b5e"
            title="Registro"
            onPress={() => navigation.navigate("Registro")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  usuarioItem: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#226b5e",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  botonEliminar: {
    backgroundColor: "#ffcccc",
  },
});

export default ListaUsuariosScreen;
