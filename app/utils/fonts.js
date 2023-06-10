import {
  Poppins,
  Syncopate,
  Bai_Jamjuree,
  Bodoni_Moda,
} from 'next/font/google';

export const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const bai_jamjuree = Bai_Jamjuree({
  weight: ['200', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const bodoni_moda = Bodoni_Moda({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
