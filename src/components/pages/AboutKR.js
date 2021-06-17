import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function AboutKR() {
  return (
    <div className='cards aboutkr'>
      <h1>About Kyrgyzstan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='“The Most Beautiful Country in the World”: Kyrgyzstan’s natural splendour'
              label='My Kyrgyzstan'
              path='/geninfo'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Welcome:)'
              path='/visa'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Mountains and valleys are the main components of the relief of Kyrgyzstan'
              label='Epic Mountains'
              path='/slides'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Lakes in Kyrgyzstan are unique and remarkably beautiful'
              label='Mystery Waters'
              path='/water'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Save wonderful natural landscapes, flora and fauna of the country'
              label='Wonderful Parks'
              path='/parks'
            />
            <CardItem
              src='images/img-6.jpg'
              text='How beautiful is our native land'
              label='Bloom city'
              path='/cities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='The long history of Kyrgyzstan conceals many secrets'
              label='Unique'
              path='/attractions'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Hospitality, kindness and openness are the main qualities of the nation.'
              label='Nomad People'
              path='/traditions'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Kyrgyzstan, due to its location in the heart of Central Asia, always had the utmost importance on the Silk Road'
              label='Great Silk Road'
              path='/kgonsilk'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutKR;