import React from 'react';
import PropTypes from 'prop-types';
import HomepageData from '../components/homepageData'
import './homepage.css';
import Navbar from '../components/navbar/navbar';
import homepageData from '../components/homepageData';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>error on homepageData.</h1>;
    }

    return this.props.children; 
  }
}


const homepage= () => {
  // console.log('it has loaded');
  // console.log(HomepageData)

window.addEventListener('load', homepage);

return(
  <div className='whole-app'>
  <Navbar/>
  <div className='window'>
     <div className='whole-window'>
 
    <p> Homepage in pages loading</p>
    <div>
    <ErrorBoundary>
     <HomepageData/>
    </ErrorBoundary>
    </div>
  </div>
  </div>
  </div>
)
};

export default homepage;
