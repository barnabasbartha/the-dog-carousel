import React from 'react';
import {Carousel} from "./components/carousel/carousel";
import goodBoy from "./assets/good-boy.svg";

export const App = () =>
    <div className="flex h-screen bg-[#EEEEEE] overflow-x-hidden">
        <div className="w-full"/>
        <div className="max-w-[900px] w-fit h-full bg-white shrink-0">
            <Carousel
                slides={[
                    {
                        image: goodBoy,
                        title: 'Dogs are extremely cute animals',
                        description: 'Doggo ipsum much ruin diet heckin good boys very good spot long',
                    },
                    {
                        image: goodBoy,
                        title: 'Pets and companions',
                        description: 'Woofer long doggo long woofer maximum borkdrive, big ol doge',
                    },
                    {
                        image: goodBoy,
                        title: 'Do you like fun? Well, you might also like dogs',
                        description: 'Doggorino big ol heckin good boys waggy wags what a nice floof fluffer',
                    },
                ]}
            />
        </div>
    </div>;
