import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { COLORS } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function EventsPage() {
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
      />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            width: "100%",
            flexDirection: "column",
            rowGap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 300,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <LinearGradient
              colors={["rgba(0,0,0,1)", "transparent"]}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 240,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 20,
                flexDirection: "column",
                alignItems: "flex-end",
                rowGap: 4,
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Tech Campus</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
                Coding Bootcamp
              </Text>
              <Text style={{ fontSize: 16, color: "#fff" }}>29.10.2023</Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              height: 300,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <LinearGradient
              colors={["rgba(0,0,0,1)", "transparent"]}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 240,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 20,
                flexDirection: "column",
                alignItems: "flex-end",
                rowGap: 4,
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Tech Campus</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
                Coding Bootcamp
              </Text>
              <Text style={{ fontSize: 16, color: "#fff" }}>29.10.2023</Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              height: 300,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <LinearGradient
              colors={["rgba(0,0,0,1)", "transparent"]}
              start={{ x: 0.5, y: 1 }}
              end={{ x: 0.5, y: 0 }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 240,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 20,
                flexDirection: "column",
                alignItems: "flex-end",
                rowGap: 4,
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Tech Campus</Text>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
                Coding Bootcamp
              </Text>
              <Text style={{ fontSize: 16, color: "#fff" }}>29.10.2023</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
