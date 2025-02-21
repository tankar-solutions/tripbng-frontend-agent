import React from 'react';
import { Container } from '../ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Button from '../ui/button';
import Link from 'next/link';
import { Icons } from '../icons';

const SliderHolidayData = [
  {
    title: "Ahmedabad",
    image: "/images/place1.png",
    price: 6000,
  },
  {
    title: "Jaipur",
    image: "/images/place2.png",
    price: 15000,
  },
  {
    title: "Udaipur",
    image: "/images/place3.png",
    price: 15000,
  },
  {
    title: "Nainital",
    image: "/images/place4.png",
    price: 30000,
  },
  {
    title: "Kochi",
    image: "/images/place5.png",
    price: 15000,
  },
];

export default function HotelSlider() {
  return (
    <Container>
      <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
        <div className='flex flex-col md:w-1/3 lg:w-1/4'>
          <div className='mb-4'>
            <h2 className='text-2xl md:text-5xl font-semibold mb-2 text-blue'>
              Top Hotels Deals
            </h2>
            <p className='text-sm md:text-base font-light'>
              Book hotels worldwide at affordable rates with ease.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button className='text-sm md:text-base'>
              Domestic
            </Button>
            <Button className='text-sm md:text-base' color="outline_yellow">
              International
            </Button>
          </div>
          <Link href={"/"} className='flex items-center gap-3 text-yellow font-light mt-3'>
            Explore All
            {Icons.arrowRight}
          </Link>
        </div>
        <div className='md:w-2/3 lg:w-3/4'>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {SliderHolidayData.map((item, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                  <div className='bg-[#115794] rounded-md pb-3'>
                    <div className='relative aspect-w-16 aspect-h-9 mb-3'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        objectFit='cover'
                        className='rounded-md w-full'
                        width={300}
                        height={100}
                      />
                    </div>
                    <div className='flex justify-between items-center bg-[#115794] px-3'>
                      <h3 className='text-white text-sm md:text-base'>{item.title}</h3>
                      <p className='text-yellow text-sm md:text-base'>₹{item.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
