import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the Silk Road breathtaking scenery of Kyrgyzstan'
              label='Adventure'
              path='/aboutkr'
            />
            <CardItem
              src='images/peak-chok-tal.jpg'
              text='If mountains are your thing, then Kyrgyzstan is your place'
              label='Magnificent'
              path='/aboutkr'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='See the brightest milky way in the sky'
              label='Mystery'
              path='/aboutkr'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Travel through crystal clear turquoise lakes'
              label='Legend'
              path='/aboutkr'
            />
            <CardItem
              src='images/img-8.jpg'
              text="Let's explore the traditions of eagle hunting"
              label='Adrenaline'
              path='/aboutkr'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;