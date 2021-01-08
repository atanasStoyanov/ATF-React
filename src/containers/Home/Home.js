import React from 'react';
import AutoImageSlider from '../../components/AutoImageSlider/AutoImageSlider';
import PageLayout from '../PageLayout/PageLayout';
import InfoSection from '../../components/InfoSection/InfoSection';


const Home = () => {
    return (
        <PageLayout>
            <AutoImageSlider>
                <InfoSection 
                mainTitle='ATF' 
                subTitle='Association of Tennis Friends'
                message={'Welcome to ATF. Home of all tennis amateurs. Here you will find tournaments, oponents and new friends all united by the love of TENNIS!'}
                slogan='Serve it, Smash it, Win it, Love it!'/>
            </AutoImageSlider>
        </PageLayout>
    );
}

export default Home;