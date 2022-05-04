import React from 'react';
import 'animate.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useMemo } from 'react/cjs/react.development';
import { getHeroById } from '../../helpers/getHeroById';


export const HeroScreen = () => {

  const { heroId } = useParams();

  const hero = useMemo(() => {
    return getHeroById(heroId);
  }, [heroId]) 

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1, {replace: true});    //El -1 en el navigate significa que vaya a la pagina anterior, simple
  }

  if(!hero) {
    return <Navigate to='/' />
  }

  const {id, alter_ego,characters , first_appearance, publisher, superhero} = hero;
  const imagePath = `/assets/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
          <img
           src={imagePath} 
           alt={superhero} 
           className='img-thumbnail animate__animated animate__fadeInLeft' 
          />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {alter_ego}
          </li>

          <li className='list-group-item'>
            <b>Publisher:</b> {publisher}
          </li>

          <li className='list-group-item'>
            <b>First Appereance</b> {first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Back
        </button>
      </div>
    </div>
  )
}
