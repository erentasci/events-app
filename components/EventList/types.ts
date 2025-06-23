export type Event = {
  id: string;
  image: string;
  title: string;
  datetime: string;
  location: string;
};

export interface EventListProps {
  events: Event[];
}
