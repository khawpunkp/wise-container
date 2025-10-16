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

export const openNewTab = (url: string) => {
   window.open(url, '_blank', 'noopener');
};

export const clickTel = (tel: string) => {
   window.open(`tel:${tel}`);
};

export const clickMail = (mail: string) => {
   window.open(`mailto:${mail}`);
};

export const clickLine = () => {
   window.open(`https://line.me/ti/p/%40wisecontainer`, '_blank', 'noopener');
};
