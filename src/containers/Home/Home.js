import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SideBar from '../../components/SideBar/SideBar';
import SiteMain from '../../components/SiteMain/SiteMain';
import AutoImageSlider from '../../components/AutoImageSlider/AutoImageSlider';
import SideDrawerToggle from '../../components/SideDrawer/SideDrawerToggle/SideDrawerToggle'
import SideDrawer from '../../components/SideDrawer/SideDrawer';


const Home = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideBar(!showSideBar);
    }

    const sideDrawerClosedHandler = () => {
        setShowSideBar(false);
    }

    return (
        <Aux>
            <SideBar />
            <SideDrawer open={showSideBar} drawerClosed={sideDrawerClosedHandler}/>
            <SideDrawerToggle clicked={sideDrawerToggleHandler} />
            <SiteMain>
                <AutoImageSlider />
            </SiteMain>
        </Aux>
    );
}

export default Home;