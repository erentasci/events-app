import Button from "@/components/Button";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

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
      <KeyboardAvoidingView
        keyboardVerticalOffset={120}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image
          source={require("@/assets/images/welcome-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Welcome to Your Events App!</Text>
        <Text style={styles.subtitle}>
          Discover, join, and enjoy events that match your vibe.
        </Text>
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#888"
          style={styles.nameInput}
        />
        <Button text="Continue" onPress={() => router.push("/(tabs)")} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: { width: 270, height: 270, resizeMode: "contain" },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.main[950],
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.main[900],
    marginVertical: 16,
    marginHorizontal: 30,
    lineHeight: 25,
  },
  nameInput: {
    width: "100%",
    backgroundColor: "#fff",
    color: COLORS.main[800],
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 16,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
