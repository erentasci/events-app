import events from "@/assets/data/events.json";
import Header from "@/components/Header";
import { COLORS } from "@/constants/colors";
import { formatDate } from "@/utils";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const EventDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const event = events.find((event) => event.id.toString() === id);

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
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 20,
          gap: 30,
        }}
      >
        <Image
          source={{
            uri: event?.image,
          }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 16,
            resizeMode: "cover",
          }}
        />

        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: COLORS.main[950],
          }}
        >
          {event?.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Entypo name="location-pin" size={24} color={COLORS.main[800]} />
            <Text
              style={{
                fontSize: 13,
                color: COLORS.main[800],
              }}
            >
              {event?.location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <MaterialIcons
              name="date-range"
              size={24}
              color={COLORS.main[800]}
            />
            <Text
              style={{
                fontSize: 13,
                color: COLORS.main[800],
              }}
            >
              {formatDate(event?.datetime ?? "")}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: COLORS.main[800],
            textAlign: "center",
            lineHeight: 20,
          }}
        >
          {event?.description}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I'm Going</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: COLORS.main[700],
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
