import React from 'react';


const Section = ({hobbie}) => (
  <section>
        <ul>
          {hobbie.map(hob=> 
          <li>{hob.hobbie}</li>
        )}
        </ul>
  </section>
)
export default Section;
