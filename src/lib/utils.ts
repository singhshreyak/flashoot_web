import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Aceternity UI utilities
export const generateRandomString = (length: number = 5) => {
  return Math.random().toString(36).substring(2, length + 2);
};

export function moveItemInArray<T>(arr: T[], from: number, to: number) {
  const copy = [...arr];
  const item = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export function addItemInArray<T>(arr: T[], item: T, position: number) {
  const copy = [...arr];
  copy.splice(position, 0, item);
  return copy;
}

export const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};