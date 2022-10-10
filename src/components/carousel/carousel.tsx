import {ReactNode, useMemo, useState} from 'react';

export interface CarouselSlideProps {
    readonly image: string;
    readonly title: string;
    readonly description: string;
}

export const Carousel = ({
  slides,
  isLoading,
  isError
}: { slides: CarouselSlideProps[], isLoading: boolean, isError: boolean }) => {
  const isLoaded = useMemo(() => !isLoading && !isError, [isLoading, isError]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigateToNext = () => setSelectedIndex(index => (index + 1) % slides.length);
  const navigateTo = (i: number) => setSelectedIndex(i % slides.length);

  return <div
    className={`flex justify-center items-center h-full w-full flex-col text-center text-[#3A464F] overflow-hidden ${isLoaded ? 'cursor-pointer' : ''}`}
    onClick={() => isLoaded && navigateToNext()}>
    <CarouselContainer selectedIndex={selectedIndex}>
      {slides.map((slide, i) => <CarouselSlide key={i}>
        {isLoaded
          ? <img src={slide.image}
            alt={slide.title}
            className="w-[140px] h-[306px]"/>
          : <ImageFallback isLoading={isLoading} isError={isError}/>}
      </CarouselSlide>)}
    </CarouselContainer>
    <div className="flex space-x-4 mt-12 mb-7">
      {slides.map((slide, i) =>
        <span
          onClick={(e) => {
            if (isLoaded) {
              navigateTo(i);
              e.stopPropagation();
            }
          }}
          key={i}>
          <CarouselSelector
            active={selectedIndex === i}
            isLoaded={isLoaded}/>
        </span>)}
    </div>
    <CarouselContainer selectedIndex={selectedIndex}>
      {slides.map((slide, i) => <CarouselSlide key={i}>
        <h3 className={`text-2xl tracking-[1.5px] leading-8 my-5 max-w-[400px] w-fit ${isLoading || isError ? 'skeleton-loading w-32' : ''} ${isError ? 'skeleton-error' : ''}`}>{slide.title}</h3>
        <p className={`text-base tracking-[0.35px] leading-5 max-w-[400px] w-fit opacity-80 ${isLoading || isError ? 'skeleton-loading w-1/2 h-12' : ''} ${isError ? 'skeleton-error' : ''}`}>{slide.description}</p>
      </CarouselSlide>)}
    </CarouselContainer>
  </div>;
};

const CarouselContainer = ({children, selectedIndex}: { children: ReactNode; selectedIndex: number }) =>
  <div className="w-full flex transition-all duration-300"
    style={{
      transform: `translateX(${-100 * selectedIndex}%)`
    }}>
    {children}
  </div>;

const CarouselSlide = ({children}: { children: ReactNode }) =>
  <div className="flex flex-auto flex-col w-full shrink-0 justify-center items-center select-none">
    {children}
  </div>;

const CarouselSelector = ({active, isLoaded}: { active: boolean, isLoaded: boolean }) =>
  <div className="relative flex justify-center items-center w-[29px] h-[29px] justify-center items-start">
    <span
      className={`absolute rounded-full w-full h-full border border-[1.5px] ${isLoaded ? 'border-[#FF816A]' : 'border-[#DDDDDD]'} ${active ? 'scale-100' : 'scale-0'} transition-all duration-200`}/>
    <span
      className={`absolute rounded-full w-[5px] h-[5px] ${active && isLoaded ? 'bg-[#FF816A]' : isLoaded ? 'bg-[#CACACA]' : 'bg-[#DDDDDD]'}`}/>
  </div>;

const ImageFallback = ({isLoading, isError}: { isLoading: boolean, isError: boolean }) => <div
  className={`w-[280px] h-[306px] mb-2 ${isLoading || isError ? 'skeleton-loading' : ''} ${isError ? 'skeleton-error' : ''}`}></div>;

export const placeholderCarouselSlides: CarouselSlideProps[] = [
  {
    image: '',
    title: '',
    description: '',
  },
  {
    image: '',
    title: '',
    description: '',
  },
  {
    image: '',
    title: '',
    description: '',
  },
];
