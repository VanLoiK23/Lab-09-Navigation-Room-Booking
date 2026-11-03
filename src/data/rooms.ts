export type Room = {
  id: string;
  name: string;
  building: string;
  capacity: number;
  equipment: string;
  floor: number;
};

export const rooms: Room[] = [
  {
    id: "a201",
    name: "A201",
    building: "Block A",
    capacity: 30,
    equipment: "Projector",
    floor: 2,
  },
  {
    id: "a305",
    name: "A305",
    building: "Block A",
    capacity: 45,
    equipment: "Smart TV",
    floor: 3
  },
  {
    id: "b202",
    name: "B202",
    building: "Block B",
    capacity: 60,
    equipment: "Projector + Microphone",
    floor: 2
  },
  {
    id: "c101",
    name: "C101",
    building: "Block C",
    capacity: 25,
    equipment: "Whiteboard",
    floor: 1
  },
];
