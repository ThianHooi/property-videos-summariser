import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSearchGoogleMapsUrl = (
  propertyName: string,
  location: string
) => {
  const encodedPropertyName = encodeURIComponent(propertyName);
  const encodedLocation = encodeURIComponent(location);
  return `https://www.google.com/maps/search/?api=1&query=${encodedPropertyName} ${encodedLocation}`;
};
