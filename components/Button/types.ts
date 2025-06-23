import { TouchableOpacityProps } from "react-native";

export type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;
