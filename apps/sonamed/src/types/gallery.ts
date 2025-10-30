export type ImageCategory =
  | 'sonia'
  | 'nina'
  | 'team'
  | 'office'
  | 'wizualizacja'
  | 'all';

export interface GalleryImage {
  src: string;
  alt: string;
  category: ImageCategory;
  width: number;
  height: number;
  orientation: 'horizontal' | 'vertical';
  description?: string;
}
