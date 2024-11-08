export type Direction = "up" | "down";

export enum Sections {
  Home = 0,
  Works = 1,
  Experience = 2,
  Contact = 3,
}

export type Section = {
  content: React.ReactNode;
  title: string;
};

export type SectionContextType = {
  sectionIndex: number;
  subsectionIndex: number;
  setSectionIndex: (index: number) => void;
  handleScroll: (event: WheelEvent) => void;
  scrollDirection: Direction;
  setSubsectionIndex: (index: number) => void;
};

export type SectionColors = {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
};

export type SectionWithIndex = {
  title: string;
  index: number;
};
