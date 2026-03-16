import React, { createContext, useContext, useMemo, useState } from "react";

export type Habit = {
  id: string;
  name: string;
  completed: boolean;
};

type HabitsContextValue = {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  toggleHabit: (id: string) => void;
};

const HabitsContext = createContext<HabitsContextValue | undefined>(undefined);

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const value = useMemo(
    () => ({
      habits,
      addHabit,
      toggleHabit,
    }),
    [habits]
  );

  return <HabitsContext.Provider value={value}>{children}</HabitsContext.Provider>;
}

export function useHabits() {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error("useHabits must be used within HabitsProvider");
  }
  return context;
}