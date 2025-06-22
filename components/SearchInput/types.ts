import { TextInputProps } from "react-native";

export type SearchInputProps = {
  placeholderText: string;
  placeholderTextColor: string;
  iconName: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
  iconColor: string;
} & TextInputProps;
