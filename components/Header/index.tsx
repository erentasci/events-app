import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ title, onBackPress }) => {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons
            name="arrow-back"
            size={28}
            color="#fff"
            style={{
              fontWeight: "bold",
            }}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
