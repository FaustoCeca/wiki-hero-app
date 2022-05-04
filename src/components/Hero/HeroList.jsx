import React from 'react';
import 'animate.css';
import { HeroCard } from './HeroCard';

import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { useMemo } from 'react/cjs/react.development';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);   //Return implicito

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInUp'>
      {/* <a href="holajose.com"></a> */}
            {
                heroes.map(hero => (
                    <HeroCard 
                      key={hero.id} 
                      { ...hero }
                    />       
                ))
            }
    </div>
  )
}
