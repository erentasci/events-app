import { Ionicons } from "@expo/vector-icons";

type IoniconName = keyof typeof Ionicons.glyphMap;

export interface HeaderProps {
  title: string;
  onBackPress?: boolean;
  rightAction?: boolean;
  onRightActionPress?: () => void;
  rightActionIcon?: IoniconName;
}
