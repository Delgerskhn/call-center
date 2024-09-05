import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeText(text: string): string {
  text = text.replaceAll("1", "нэг ");
  text = text.replaceAll("2", "хоёр ");
  text = text.replaceAll("3", "гурав ");
  text = text.replaceAll("4", "дөрөв ");
  text = text.replaceAll("5", "тав ");
  text = text.replaceAll("6", "зургаа ");
  text = text.replaceAll("7", "долоо ");
  text = text.replaceAll("8", "найм ");
  text = text.replaceAll("9", "ес ");
  text = text.replaceAll("0", "тэг ");
  return text;
}
