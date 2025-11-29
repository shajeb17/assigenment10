import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DetailsCard from './DetailsCard';
import Counter from './Counter';
import Story from './Story';
import Card from './Card';

const Home = () => {
    let [data,myData]=useState()
    useEffect(()=>{
      fetch("http://localhost:3000/alluser")
      .then(result=>result.json())
      .then(res=>myData(res))
    },[])
   
    
    return (
        <div className='w-full'>
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
            <div className='w-13/15 m-auto grid grid-cols-3 space-x-5 space-y-5 my-10'>
               {data?.map(result=>
                <Card key={result._id} habit={result}></Card>
               )}
            </div>
           <DetailsCard></DetailsCard>
           <Counter></Counter>
           <Story></Story>
        </div>
    );
};

export default Home;