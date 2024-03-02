import React, { useState } from "react";
import { Button, Text, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import globalStyles from "../styles/globalStyles";

const ImageInputField = ({ onImageSelected }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log("Imagen seleccionada:", result.assets[0].uri);
        setImage(result.assets[0].uri);
        onImageSelected(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
    }
  };

  return (
    <View style={globalStyles.input}>
      <TouchableOpacity onPress={pickImage}>
        <View style={globalStyles.buttonContainer}>
          {!image && (
            <>
              <Icon name="image" size={20} color="#226b5e" />
              <Text style={globalStyles.buttonText}>Seleccionar Imagen</Text>
            </>
          )}
          {image && (
            <>
              <Icon name="image" size={20} color="#226b5e" />
              <Text style={globalStyles.buttonText}>Imagen Seleccionada</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageInputField;
