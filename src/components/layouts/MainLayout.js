import React from 'react';
import Header from '../BookingHeader';

const MainLayout =({children}) =>{
    return(
        <>
        <div>
            <Header/>
            
        </div>
        <main>{children}</main>
        </>
    )
}

export default MainLayout;