import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadGamesByGender } from '../../../../Actions/gameActions';


//////<<<<<------------------------------------------------``


const Genders = () => 
{

    const { genders } = useSelector( state => state.gender );

    const dispatch = useDispatch();
    const handleFilterByGender = ( gender ) =>
    {
        dispatch( startLoadGamesByGender( gender ) );
    };


///////////////////////////************************////////////////////////


    return (

        <div className="row">

            {
                genders.map( ( gender ) => 
                {
                    return <div className="col-md-12" key={ gender._id }>


                        <div className="cardGender mt-3 base__pointer">
                        
                            <ul className="list-group list-group-flush text-center">

                                <li onClick={ () => { handleFilterByGender( gender.descr ) }} className="animate__animated animate__zoomIn overflow-auto list-group-item base__btnGallery sideBar_btn">{ gender.descr }</li>
                       
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
