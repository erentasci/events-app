import EventList from "@/components/EventList";
import { Event } from "@/components/EventList/types";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { COLORS } from "@/constants/Colors";
import { useEventStore } from "@/store/useEventStore";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

export default function EventsPage() {
  const { searchQuery, setSearchQuery, loading, setLoading } = useEventStore();

  const EVENTS = require("@/assets/data/events.json");

  const filteredEvents = EVENTS.filter((event: Event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.main[950]}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <EventList events={filteredEvents} />
      )}
    </SafeAreaView>
  );
}
