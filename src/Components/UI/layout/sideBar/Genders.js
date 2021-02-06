import React from 'react';
import { useSelector } from 'react-redux';


//////<<<<<------------------------------------------------``


const Genders = () => 
{

    const { genders } = useSelector( state => state.gender );


///////////////////////////************************////////////////////////


    return (

        <div className="row">

            {
                genders.map( ( gender ) => 
                {
                    return <div className="col-md-12" key={ gender._id }>


                        <div className="cardGender mt-3 base__pointer">

                            <ul className="list-group list-group-flush text-center">

                                <li className="list-group-item base__btnGallery sideBar__base">{ gender.descr }</li>
                       
                                
                            </ul>

                        </div>


                    </div> 

                    
                })
            }
            
        </div>

    );


};


//////---------------------------------------------->>>>>


export default Genders;
