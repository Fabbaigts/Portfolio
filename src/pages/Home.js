import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import hebergements from '../datas/Portfolio.json'
import Card from '../components/Cardproject'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="banner">
        <Banner h1="Chez vous, partout et ailleurs" />
      </section>
      <section className="gallery_ground">
        {hebergements.map((logement) => {
          return (
            <Card
              key={logement.id}
              title={logement.title}
              Navlink={'/logement/' + logement.id}
              imgurl={logement.cover}
            />
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default Home
