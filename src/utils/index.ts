import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
   return twMerge(clsx(args));
}

export const numberFormatter = (value: number | string | undefined | null) => {
   if (!value) return 0;
   const num = Number(value);
   return new Intl.NumberFormat('en-US').format(num);
};
