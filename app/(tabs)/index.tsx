import EventList from "@/components/EventList";
import { Event } from "@/components/EventList/types";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const EVENTS = require("@/assets/data/events.json");

  const filteredEvents = EVENTS.filter((event: Event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <EventList events={filteredEvents} />
    </SafeAreaView>
  );
}
