import {Carousel, CarouselSlideProps, placeholderCarouselSlides} from '../components/carousel/carousel';
import {useGetDogsQuery} from '../store/dogs/dogs.api';
import {useMemo} from 'react';

export const App = () => {
  const {data: dogs, isFetching, isError} = useGetDogsQuery();

  const dogsSlides = useMemo(() => dogs?.map(dog => ({
    image: dog.image,
    title: dog.name,
    description: dog.temperament,
  } as CarouselSlideProps)), [dogs]);

  return <div className="flex h-screen bg-[#EEEEEE] overflow-x-hidden">
    <div className="w-full"/>
    <div className="w-[900px] h-full bg-white shrink-0">
      <Carousel
        isLoading={isFetching}
        isError={isError}
        slides={dogsSlides ?? placeholderCarouselSlides}
      />
    </div>
  </div>;
};
