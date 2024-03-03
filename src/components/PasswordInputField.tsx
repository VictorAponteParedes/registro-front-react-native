import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/Entypo";
import globalStyles from "../styles/globalStyles";

const PasswordInputField = ({ control, name, placeholder, rules }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={!showPassword}
            placeholder={placeholder}
            style={globalStyles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor="#000"
          />
        )}
        name={name}
        rules={rules}
      />
      <TouchableOpacity
        onPress={() => setShowPassword((prev) => !prev)}
        style={{
          position: "absolute",
          top: 16,
          right: 10,
          zIndex: 1,
        }}>
        {showPassword ? (
          <Icon name="eye" solid style={{ fontSize: 24, marginRight: 8 }} />
        ) : (
          <Icon
            name="eye-with-line"
            solid
            style={{ fontSize: 24, marginRight: 8 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputField;
