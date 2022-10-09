import React, {ReactNode, useState} from "react";

export interface CarouselSlideProps {
    readonly image: string;
    readonly title: string;
    readonly description: string;
}

export const Carousel = ({slides}: { slides: CarouselSlideProps[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const navigateToNext = () => setSelectedIndex(index => (index + 1) % slides.length);
    const navigateTo = (i: number) => setSelectedIndex(i % slides.length);

    return <div
        className="flex justify-center items-center h-full w-full flex-col text-center text-[#3A464F] cursor-pointer overflow-hidden"
        onClick={navigateToNext}>
        <CarouselContainer selectedIndex={selectedIndex}>
            {slides.map((slide) => <CarouselSlide key={slide.title}>
                <img src={slide.image}
                     alt={slide.title}
                     className="w-[140px] h-[306px]"/>
            </CarouselSlide>)}
        </CarouselContainer>
        <div className="flex space-x-4 mt-12 mb-7">
            {slides.map((slide, i) =>
                <span
                    onClick={(e) => {
                        navigateTo(i);
                        e.stopPropagation();
                    }}
                    key={slide.title}>
                <CarouselSelector active={selectedIndex === i}/>
            </span>)}
        </div>
        <CarouselContainer selectedIndex={selectedIndex}>
            {slides.map((slide) => <CarouselSlide key={slide.title}>
                <h3 className="text-2xl tracking-[1.5px] leading-8 my-5 max-w-[400px] w-fit">{slide.title}</h3>
                <p className="text-base tracking-[0.35px] leading-5 max-w-[400px] w-fit opacity-80">{slide.description}</p>
            </CarouselSlide>)}
        </CarouselContainer>
    </div>
}

const CarouselContainer = ({children, selectedIndex}: { children: ReactNode; selectedIndex: number }) =>
    <div className="w-full flex transition-all duration-300"
         style={{
             transform: `translateX(${-100 * selectedIndex}%)`
         }}>
        {children}
    </div>

const CarouselSlide = ({children}: { children: ReactNode }) =>
    <div className="flex flex-auto flex-col w-full shrink-0 justify-center items-center select-none">
        {children}
    </div>

const CarouselSelector = ({active}: { active: boolean }) =>
    <div className="relative flex justify-center items-center w-[29px] h-[29px] justify-center items-start">
        <span
            className={`absolute rounded-full w-full h-full border border-[1.5px] border-[#FF816A] ${active ? "scale-100" : "scale-0"} transition-all duration-200`}/>
        <span className={`absolute rounded-full w-[5px] h-[5px] ${active ? "bg-[#FF816A]" : "bg-[#A2BED5]"}`}/>
    </div>
