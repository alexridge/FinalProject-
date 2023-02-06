import React from 'react';
import './footer.css';
 
const Footer = () => {
  return (
   <body>
    <div className="main-footer">
        <div className='container'>
          <div className='row'>
              {/* Colums 1 */}
              <div className='col'>
                  <ul className='list-unstyled'> 
                    <h4> ILLEGAL ADDRESS </h4>
                    <p>342-420-6</p>
                    <p>Moscow, Russia</p>
                    <p>123 Street South North</p>
                  </ul>
              </div>
              {/* Colums 2 */}
              <div className='col'>
                  <ul className='list-unstyled'>
                      <h4>TEDDY BEARS</h4>
                      <p>Are fluffy</p>
                      <p>Brown</p>
                      <p>And with beatiful eyes</p>
                  </ul>
              </div>
              {/* Colums 3 */}
              <div className='col'>
                 <ul className='list-unstyled'>
                 <h4>The creators</h4>
                     <p>Naomi</p>
                     <p>Matthew</p>
                     <p>Alex</p>
                     <p>Leon</p>
                     <p>Valerio</p>
                 </ul> 
              </div>
          </div>
        </div>
    </div>
   </body>
  )
};

export default Footer;

 