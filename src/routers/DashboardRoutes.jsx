import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { HeroScreen } from '../components/Hero/HeroScreen';
import { Navbar } from '../components/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>

        <Routes>
            <Route path='/' element= {<MarvelScreen />} />

            <Route path='marvel' element= {<MarvelScreen />} />
            <Route path='dc' element= {<DcScreen />}/>

            <Route path='search' element= {<SearchScreen />}/>
            <Route path='hero/:heroId' element= {<HeroScreen />}/>
        </Routes>

        </div>
    </>
  )
}
