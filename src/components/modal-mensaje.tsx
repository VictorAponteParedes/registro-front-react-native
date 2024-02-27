import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ModalMensaje = ({ mensaje, iconNombre }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {iconNombre && (
          <Ionicons
            name={iconNombre}
            size={24}
            color="white"
            style={styles.icon}
          />
        )}
        <Text style={styles.successText}>{mensaje}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 35,
    borderRadius: 8,
  },
  icon: {
    marginBottom: 8,
  },
  successText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ModalMensaje;
