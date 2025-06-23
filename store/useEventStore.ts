import { Event } from "@/components/EventList/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface EventStore {
  username: string;
  setUsername: (username: string) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username) => set({ username }),
      events: [],
      setEvents: (events) => set({ events }),
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      removeEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
    }),
    {
      name: "eventsApp-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
