import React from "react";
import { View, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";
import globalStyles from "../styles/globalStyles";

const InputField = ({ control, name, placeholder, rules }) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
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
  );
};

export default InputField;
