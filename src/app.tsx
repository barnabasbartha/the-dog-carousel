import {Carousel} from './components/carousel/carousel';
import rottwei from './assets/rottwei.svg';
import dachsh from './assets/dachsh.svg';
import american_bulld from './assets/american_bulld.svg';
import greyh from './assets/greyh.svg';

export const App = () =>
  <div className="flex h-screen bg-[#EEEEEE] overflow-x-hidden">
    <div className="w-full"/>
    <div className="max-w-[900px] w-fit h-full bg-white shrink-0">
      <Carousel
        slides={[
          {
            image: rottwei,
            title: 'Dogs are extremely cute animals',
            description: 'Doggo ipsum much ruin diet heckin good boys very good spot long',
          },
          {
            image: dachsh,
            title: 'Pets and companions',
            description: 'Woofer long doggo long woofer maximum borkdrive, big ol doge',
          },
          {
            image: american_bulld,
            title: 'Do you like fun? Well, you might also like dogs',
            description: 'Doggorino big ol heckin good boys waggy wags what a nice floof fluffer',
          },
          {
            image: greyh,
            title: 'Do you like fun? Well, you might also like dogs',
            description: 'Doggorino big ol heckin good boys waggy wags what a nice floof fluffer',
          },
        ]}
      />
    </div>
  </div>;
