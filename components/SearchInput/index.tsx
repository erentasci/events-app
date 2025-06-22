import Ionicons from "@expo/vector-icons/Ionicons";
import React, { FC } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { SearchInputProps } from "./types";

const SearchInput: FC<SearchInputProps> = ({
  placeholderText,
  placeholderTextColor,
  iconName,
  iconColor,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={iconName}
        size={22}
        color={iconColor}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
