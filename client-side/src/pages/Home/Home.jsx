import React from 'react';
import Hero from './Hero';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DetailsCard from './DetailsCard';
import Counter from './Counter';
import Story from './Story';

const Home = () => {
    return (
        <div>
           <div>
            <Carousel showThumbs={false}>
                <div>
                  <Hero></Hero>
                </div>
                <div>
                    <Hero></Hero>
                </div>
                <div>
                     <Hero></Hero>
                </div>
            </Carousel>
           </div>

           <DetailsCard></DetailsCard>
           <Counter></Counter>
           <Story></Story>
        </div>
    );
};

export default Home;