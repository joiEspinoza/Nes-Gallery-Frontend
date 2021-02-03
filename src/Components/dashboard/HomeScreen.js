import React from 'react';
import Content from '../UI/Content';
import SideBar from '../UI/SideBar';


//////<<<<<------------------------------------------------``


const HomeScreen = () => 
{

    return (


        <div className="row base__bRow">

            <div className="col-md-12">

                <div className="row">

                    <div className="col-md-2 base__paddingLR0">

                        <SideBar/>

                    </div>

                    <div className="col-md-10 base__paddingLR0">

                        <Content/>

                    </div>

                </div>

            </div>
            
        </div>
        

    );

};


//////---------------------------------------------->>>>>


export default HomeScreen;
