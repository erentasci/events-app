import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#19262e", flexDirection: "column" }}
    >
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
