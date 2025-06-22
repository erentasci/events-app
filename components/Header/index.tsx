import Ionicons from "@expo/vector-icons/Ionicons";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
