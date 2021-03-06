import React from 'react';

import AutoImageSlider from '../../components/AutoImageSlider/AutoImageSlider';
import PageLayout from '../PageLayout/PageLayout';
import InfoSection from '../../components/InfoSection/InfoSection';
import About from '../../components/About/About';

const Home = () => {



    return (
        <PageLayout>
            <div id='home'>
                <AutoImageSlider>
                    <InfoSection
                        mainTitle='ATF'
                        subTitle='Association of Tennis Friends'
                        message={'Welcome to ATF. Home of all tennis amateurs. Here you will find tournaments, opponents and new friends all united by the love of TENNIS!'}
                        slogan='Serve it, Smash it, Win it, Love it!' />
                </AutoImageSlider>
                <About />
            </div>
        </PageLayout>
    );
}

export default Home;