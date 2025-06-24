import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  disabled,
  addedStyles,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, addedStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
