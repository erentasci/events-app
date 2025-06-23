import EventList from "@/components/EventList";
import Header from "@/components/Header";
import { COLORS } from "@/constants/colors";
import { useEventStore } from "@/store/useEventStore";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
  const { username, clearStorage, attentedEvents } = useEventStore();

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
      <Header
        title="Profile"
        rightAction
        rightActionIcon="exit-outline"
        onRightActionPress={clearStorage}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Welcome, {username} 🤩</Text>
        <Text style={styles.subtitle}>
          You can view and manage your events here:
        </Text>
      </View>
      <EventList events={attentedEvents} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: { padding: 20, gap: 10 },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: "left",
  },
  subtitle: {
    color: COLORS.main[800],
  },
});
