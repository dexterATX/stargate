import { ReactNode } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

declare const Carousel: React.FC<CarouselProps>;
export default Carousel;

