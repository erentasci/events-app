import { TextInputProps } from "react-native";

export interface SearchInputProps extends TextInputProps {
  placeholderText: string;
  placeholderTextColor: string;
  iconName: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
  iconColor: string;
}
