import React from 'react';
import Header from './components/Header';
import Section from './components/Section'

const Hobbies=[{hobbie:'musica'}];


const App = () => (
  <div>
    <Header/>
    <Section hobbie={Hobbies[0]}/>
  </div>
)

export default App;

