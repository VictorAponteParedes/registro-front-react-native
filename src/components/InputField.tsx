import React from "react";
import { View, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";

const InputField = ({ control, name, placeholder, rules }) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        </View>
      )}
      name={name}
      rules={rules}
    />
  );
};

const styles = {
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
};

export default InputField;
