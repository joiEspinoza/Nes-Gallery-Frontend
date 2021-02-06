import React from 'react';
import { useLocation } from 'react-router';
import BoxLogin from './BoxLogin';
import BoxRegister from "./BoxRegister";


//////<<<<<------------------------------------------------``


function ContentAuth() 
{

    const location = useLocation();


///////////////////////////************************////////////////////////


    return (

            <>

                { 
                    location.pathname === '/login' && <div className="content__baseLogin">
                    
                        <BoxLogin/>
                    
                    </div> 
                }

                { 
                    location.pathname === '/register' && <div className="content__baseRegister">
                        
                        <BoxRegister/>
                        
                    </div> 
                }

            </>
    );

};


//////---------------------------------------------->>>>>


export default ContentAuth;
