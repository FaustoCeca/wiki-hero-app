import React from 'react';
import queryString from 'query-string';

import { HeroCard } from '../Hero/HeroCard';
import { getHeroByName } from '../../helpers/getHeroByName';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react/cjs/react.development';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);


  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const herosFiltered = useMemo(() => getHeroByName( q ), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    
    navigate(`?q=${searchText}`);
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search form</h4>

          <form onSubmit={ handleSearch }>
            <input 
            type="text" 
            name="searchText" 
            placeholder='Search a Hero' 
            className='form-control mt-4'
            autoComplete='off' 
            value={ searchText }
            onChange={ handleInputChange }
            />

            <button 
            type='submit'
            className='btn btn-outline-primary mt-2 '
            >
              Search
            </button>

          </form>
        </div>  

        <div className='col-7'>
            <h4>Results</h4>
            <hr />

            {
              (q === '')
                ? <div className='alert alert-info'>Search a Hero</div>
                : (herosFiltered.length === 0) 
                  && <div className='alert alert-danger'>There has no results for: { q }</div>
            } 

            {
              herosFiltered.map(hero => (
                <HeroCard 
                  key={ hero.id }
                  { ...hero }
                />
              ))
            }
        </div>
      </div>   
    </>
  )
}
