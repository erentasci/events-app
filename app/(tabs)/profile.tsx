import EventList from "@/components/EventList";
import Header from "@/components/Header";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
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
      <Header title="Profile" />
      <View style={{ padding: 20, gap: 10 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: "#fff",
            textAlign: "left",
          }}
        >
          Welcome, Eren 🤩
        </Text>
        <Text
          style={{
            color: COLORS.main[800],
          }}
        >
          You can view and manage your events here:
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <EventList events={require("@/assets/data/events.json")} />
      </View>
    </SafeAreaView>
  );
}
