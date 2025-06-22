import { COLORS } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.main[900],
        tabBarInactiveTintColor: COLORS.gray,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => {
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
