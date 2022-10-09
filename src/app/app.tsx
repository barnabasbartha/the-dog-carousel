import {Carousel, CarouselSlideProps} from '../components/carousel/carousel';
import {useGetDogsQuery} from '../store/dogs/dogs.api';
import {useMemo} from 'react';

export const App = () => {
  const {data: dogs} = useGetDogsQuery();

  const dogsSlides = useMemo(() => dogs?.map(dog => ({
    image: dog.image,
    title: dog.name,
    description: dog.temperament,
  } as CarouselSlideProps)), [dogs]);

  return <div className="flex h-screen bg-[#EEEEEE] overflow-x-hidden">
    <div className="w-full"/>
    <div className="max-w-[900px] w-fit h-full bg-white shrink-0">
      <Carousel slides={dogsSlides ?? []}/>
    </div>
  </div>;
};
