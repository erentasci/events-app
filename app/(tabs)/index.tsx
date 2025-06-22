import EventList from "@/components/EventList";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet } from "react-native";

export default function EventsPage() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[
          COLORS.welcomeBackground.primary,
          COLORS.welcomeBackground.secondary,
        ]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={StyleSheet.absoluteFill}
      />
      <Header title="Events" />
      <SearchInput
        placeholderText="Search for events"
        placeholderTextColor={COLORS.gray}
        iconName="search"
        iconColor={COLORS.gray}
      />
      <EventList events={require("@/assets/data/events.json")} />
    </SafeAreaView>
  );
}
