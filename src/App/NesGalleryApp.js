import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../Router/AppRouter';
import { store } from '../Store/store';


//////<<<<<------------------------------------------------``


const NesGalleryApp = () => 
{

    return (

        <Provider store={ store }>

            <AppRouter/>
            
        </Provider>
    );

};


//////---------------------------------------------->>>>>


export default NesGalleryApp;
