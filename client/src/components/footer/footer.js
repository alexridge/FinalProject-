import React from 'react';
import './footer.css';
import logo from '../navbar/logo-dark-removebg-preview.png'
 
const Footer = () => {
  return (
     
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
                    <p>imbusy@gmail.com</p>
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
              </div>
              {/* Colums 3 */}
              <div className='col'>
                 <ul className='list-unstyled'>
                 <h4>THE CREATORS</h4>
                     <p>Naomi</p>
                     <p>Matthew</p>
                     <p>Alex</p>
                     <p>Leon</p>
                     <p>Valerio</p>
                 </ul> 
              </div>
              {/* New column to display logo */}
              <div className='col'>
                 <ul className='list-unstyled'>
                    <div className='logo'>
                       <img src={logo} alt="logo" className="logo" />
                    </div>
                 </ul> 
             </div>
             <hr />
             <div className="copyright">
                Copyright &copy; {new Date().getFullYear()} Today in History SFP
             </div>
        </div>
    </div>
    
   )
};

export default Footer;

 