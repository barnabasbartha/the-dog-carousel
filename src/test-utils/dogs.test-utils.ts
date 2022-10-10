import {CarouselSlideProps} from '../components/carousel/carousel';
import rottwei from '../assets/rottwei.svg';
import dachsh from '../assets/dachsh.svg';
import american_bulld from '../assets/american_bulld.svg';
import greyh from '../assets/greyh.svg';

export const mockDogSlides: CarouselSlideProps[] = [
  {
    image: rottwei,
    title: 'Rottweiler',
    description: 'Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous',
  },
  {
    image: dachsh,
    title: 'Dachshund',
    description: 'It is missing from the API yet we still love it.',
  },
  {
    image: american_bulld,
    title: 'American Bulldog',
    description: 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant',
  },
  {
    image: greyh,
    title: 'Greyhound',
    description: 'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered',
  },
];
