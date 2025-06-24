import events from "@/assets/data/events.json";
import Button from "@/components/Button";
import Header from "@/components/Header";

import { COLORS } from "@/constants/Colors";
import { useEventStore } from "@/store/useEventStore";
import { formatDate } from "@/utils";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const EventDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setAttentedEvents, attentedEvents, removeAttentedEvent } =
    useEventStore();

  const event = events.find((event) => event.id.toString() === id);
  const isAttented = attentedEvents.find((e) => e.id === event?.id.toString());

  const handleAttendEvent = () => {
    if (isAttented) {
      removeAttentedEvent(event?.id.toString() ?? "");
    } else {
      if (event) {
        setAttentedEvents({ ...event, id: event.id.toString() });
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          COLORS.welcomeBackground.primary,
          COLORS.welcomeBackground.secondary,
        ]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={StyleSheet.absoluteFill}
      />
      <Header title="Event Details" onBackPress />
      <View style={styles.eventDetailContainer}>
        <View style={styles.eventDetailContentContainer}>
          <Image
            source={{
              uri: event?.image,
            }}
            style={styles.image}
          />

          <Text style={styles.title}>{event?.title}</Text>
          <View style={styles.subInfoContainer}>
            <View style={styles.infoBox}>
              <Entypo name="location-pin" size={24} color={COLORS.main[800]} />
              <Text style={styles.infoText}>{event?.location}</Text>
            </View>
            <View style={styles.infoBox}>
              <MaterialIcons
                name="date-range"
                size={24}
                color={COLORS.main[800]}
              />
              <Text style={styles.infoText}>
                {formatDate(event?.datetime ?? "")}
              </Text>
            </View>
          </View>
          <Text style={styles.description}>{event?.description}</Text>
        </View>
        <Button
          text={isAttented ? "Cancel" : "I'm going"}
          onPress={handleAttendEvent}
          addedStyles={{
            backgroundColor: isAttented ? "#8e0e0e" : COLORS.main[800],
            marginBottom: height * 0.02,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  button: {
    width: width * 0.8,
    backgroundColor: COLORS.main[700],
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  eventDetailContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    gap: 30,
  },

  eventDetailContentContainer: {
    flex: 1,
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: width * 0.8,
    height: height * 0.2,
    borderRadius: 16,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.main[950],
  },
  subInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.main[800],
    textAlign: "center",
    lineHeight: 20,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.main[800],
  },
});
