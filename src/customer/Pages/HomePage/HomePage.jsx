import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosal'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens.kurta'


const HomePage = () => {
  return (
    <div>
     <MainCrosel/>


      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shirt"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Men's T-Shirts"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Pants"}/>
      <HomeSectionCarosel data={mens_kurta}
      sectionName={"Women's Saree"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Drees"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Tops "}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Jackets"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Shoes"}/>
      <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Bags"}/>
      
      </div>
    </div>
  )
}

export default HomePage
