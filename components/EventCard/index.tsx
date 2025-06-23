import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { EventCardProps } from "./types";

const EventCard: FC<EventCardProps> = ({
  id,
  imageUrl,
  title,
  date,
  location,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/event/${id}`);
      }}
      style={styles.container}
    >
      <Image
        source={{
          uri: imageUrl,
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
        style={styles.gradient}
      />

      <View style={styles.cardDetails}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
