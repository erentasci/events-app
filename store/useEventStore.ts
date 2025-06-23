import { Event } from "@/components/EventList/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface EventStore {
  username: string;
  setUsername: (username: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  attentedEvents: Event[];
  setAttentedEvents: (newEvent: Event) => void;
  removeAttentedEvent: (id: string) => void;
  clearAttentedEvents: () => void;
  clearStorage: () => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (username) => set({ username }),
      loading: false,
      setLoading: (loading) => set({ loading }),
      attentedEvents: [],
      setAttentedEvents: (newEvent) =>
        set((state) => ({
          attentedEvents: [...state.attentedEvents, newEvent],
        })),
      removeAttentedEvent: (id) => {
        set((state) => ({
          attentedEvents: state.attentedEvents.filter(
            (event) => event.id !== id
          ),
        }));
      },
      clearAttentedEvents: () => {
        set({ attentedEvents: [] });
      },
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
