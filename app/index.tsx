import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Tabs"
        onPress={() => {
          router.push("/(tabs)");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
