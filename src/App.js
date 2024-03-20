import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Customer from './Components/Customers/Customer';
import CustomerApi from './Components/Customers/CustomerApi';
import Goals from './Components/Goals/Goals';
import styled from 'styled-components';
import TestimonialApi from './Components/Testimonial/TestimonialApi';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="Container">
      <Header/>
      <Main/>
     <CustomerApi/>
<hr />
     <Goals/>
     <hr />
   <TestimonialApi/>
   <NewsLetter/>
   <Footer/>
    </div>
  );
}

export default App;
