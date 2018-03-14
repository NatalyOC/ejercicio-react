import React from 'react';
import Header from './components/Header';
import Section from './components/Section'

const Hobbies=[{hobbie:'musica'}];
//const ArtistaDefault = [{name : 'lulu', bio : 'programo, aprendo y desaprendo lo mas rápido que puedo, mientras menos tech mas sugar', url : 'lulu.jpg' , canciones : ['js', 'react', 'jquery']}];

const App = () => (
  <div>
    <Header/>
    <Section hobbie={Hobbies[0]}/>
  </div>
)

export default App;

