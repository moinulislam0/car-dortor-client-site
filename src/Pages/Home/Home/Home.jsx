import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import Services from '../../services/Services';
import Footer from '../../Shared/Footer/Footer';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;