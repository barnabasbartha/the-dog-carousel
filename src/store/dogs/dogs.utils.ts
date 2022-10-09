import {Dog, DogResponse, DogWithImage} from './dogs.model';
import rottwei from '../../assets/rottwei.svg';
import dachsh from '../../assets/dachsh.svg';
import american_bulld from '../../assets/american_bulld.svg';
import greyh from '../../assets/greyh.svg';

export const dogsWithImage: DogWithImage[] = [
  {
    namePart: 'Rottwe',
    image: rottwei,
  },
  {
    namePart: 'Dachsh',
    image: dachsh,
  },
  {
    namePart: 'American Bulld',
    image: american_bulld,
  },
  {
    namePart: 'Greyh',
    image: greyh,
  },
];

export const mapDogResponseWithImage = (dogsWithImage: DogWithImage[], dogResponses: DogResponse[]): Dog[] =>
  dogsWithImage
    .map(dogWithImage => ({
      dogWithImage,
      dogResponse: dogResponses.find(dog => dog.name.startsWith(dogWithImage.namePart)),
    }))
    .filter(({dogResponse}) => !!dogResponse)
    .map(({dogWithImage, dogResponse}) => ({
      dogWithImage,
      dogResponse: dogResponse as DogResponse,
    }))
    .map(({dogWithImage, dogResponse}) => ({
      image: dogWithImage.image,
      name: dogResponse.name,
      temperament: dogResponse.temperament,
    } as Dog));
