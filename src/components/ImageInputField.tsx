import React, { useState } from "react";
import { Button, Text, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        setImage(result.assets[0].uri);
        onImageSelected(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
    }
  };

  return (
    <View style={styles.input}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.buttonContainer}>
          {!image && (
            <>
              <Icon name="image" size={20} color="#226b5e" />
              <Text style={styles.buttonText}>Seleccionar Imagen</Text>
            </>
          )}
          {image && (
            <>
              <Icon name="image" size={20} color="#226b5e" />
              <Text style={styles.buttonText}>Imagen Seleccionada</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  input: {
    marginBottom: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
    color: "#ccc",
  },
};

export default ImageInputField;
