// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet>
                
            </Outlet>
            <Footer/>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;