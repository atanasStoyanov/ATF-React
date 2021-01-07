import React, {useState} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SideBar from '../../components/SideBar/SideBar';
import SideDrawerToggle from '../../components/SideDrawer/SideDrawerToggle/SideDrawerToggle'
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import SiteMain from '../../components/SiteMain/SiteMain';


const PageLayout = (props) => {
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
                {props.children}
            </SiteMain>
        </Aux>
    )
}

export default PageLayout;