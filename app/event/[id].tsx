import Header from "@/components/Header";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const EventDetail = () => {
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
      <Header title="Event Details" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 20,
          marginTop: 20,
          gap: 30,
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          }}
          style={{
            width: "90%",
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
          Food Truck Festival
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: COLORS.main[800],
          }}
        >
          Enjoy local eats from a variety of food trucks.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({});
