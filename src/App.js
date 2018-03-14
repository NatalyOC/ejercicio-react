import React from 'react';
import Header from './components/Header';
import Section from './components/Section'

const Hobbies=[{hobbie:'musica'},{hobbie:'leer'}];


const App = () => (
  <div>
    <Header/>
    <Section hobbie={Hobbies}/>
  </div>
)

export default App;

