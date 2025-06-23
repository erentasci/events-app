import { Event } from "@/components/EventList/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface EventStore {
  username: string;
  setUsername: (username: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
  clearStorage: () => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username) => set({ username }),
      loading: false,
      setLoading: (loading) => set({ loading }),
      events: [],
      setEvents: (events) => set({ events }),
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      removeEvent: (id) =>
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        })),
      clearStorage: () => {
        AsyncStorage.clear();
      },
    }),
    {
      name: "eventsApp-storage",
      /*
      ALTERNATIF STORAGE 
      storage: {
        getItem: (name) => AsyncStorage.getItem(name),
        setItem: (name, value) => AsyncStorage.setItem(name, value),
        removeItem: (name) => AsyncStorage.removeItem(name),
        },       
      */
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
