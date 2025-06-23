import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}
