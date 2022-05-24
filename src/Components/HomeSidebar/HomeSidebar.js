import React from 'react';
import Footer from '../Footer/Footer';
import SidebarUser from '../SidebarUser/SidebarUser';
import UserSuggestion from '../UserSuggestion/UserSuggestion';

const HomeSidebar = () => {
    return (
        <>
            <SidebarUser />
            <UserSuggestion />
            <Footer />
        </>
    );
};

export default HomeSidebar;