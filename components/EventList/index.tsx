import { formatDate } from "@/utils";
import React, { FC } from "react";
import { FlatList, Text } from "react-native";
import EventCard from "../EventCard";
import eventListStyles from "./styles";
import { EventListProps } from "./types";

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <FlatList
      contentContainerStyle={eventListStyles.container}
      data={events}
      renderItem={({ item }) => (
        <EventCard
          id={item.id}
          imageUrl={item.image}
          title={item.title}
          date={formatDate(item.datetime)}
          location={item.location}
          onPress={() => console.log(`Pressed ${item.id}`)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={eventListStyles.text}>No events</Text>
      )}
      ListHeaderComponent={() => (
        <Text style={eventListStyles.text}>
          {events.length > 0 && `${events.length} events going on`}
        </Text>
      )}
    />
  );
};

export default EventList;
