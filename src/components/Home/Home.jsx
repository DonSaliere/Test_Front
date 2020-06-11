import React from 'react'
import h from './Home.module.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className={`${h.container} ${'text-center'}`}>
      <h3>Главная страница</h3>
      </div>
    </React.Fragment >
  )
}

export default Home
