import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to conditionally join tailwind classes
 * Combines clsx (for conditional class joining) with tailwind-merge (for proper handling of tailwind classes)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}