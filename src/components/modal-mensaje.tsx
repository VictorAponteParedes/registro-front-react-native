import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

const ModalMensaje = ({ mensaje, iconNombre }) => {
  return (
    <View style={globalStyles.outerContainer}>
      <View style={globalStyles.containerModal}>
        {iconNombre && (
          <Ionicons
            name={iconNombre}
            size={24}
            color="white"
            style={globalStyles.icon}
          />
        )}
        <Text style={globalStyles.successText}>{mensaje}</Text>
      </View>
    </View>
  );
};

export default ModalMensaje;
