import React, { useEffect } from 'react';
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

    useEffect( () => 
    {

        const btns = document.querySelectorAll( '.sideBar_btn' );
        const btnsArray = Array.from( btns );

        btnsArray.forEach( ( btn ) => 
        {

            btn.addEventListener( 'click', () => 
            {

                btnsArray.forEach( ( btn ) => 
                {

                    if( btn.className.includes( 'base__btnGalleryRed' ) )
                    {
                        btn.classList.remove( 'base__btnGalleryRed' );
                        btn.classList.add( 'base__btnGaller' );
                    };

                });


                btn.classList.add( 'base__btnGalleryRed' );
                btn.classList.remove( 'base__btnGaller' );

            });
                         
        });


    }, [] )


///////////////////////////************************////////////////////////


    return (

        <>

            <div className="row gender1">

                {
                    genders.map( ( gender ) => 
                    {
                        return <div className="col-md-12" key={ gender._id }>


                            <div className="cardGender mt-3 base__pointer">
                            
                                <ul className="list-group list-group-flush text-center">

                                    <li onClick={ () => { handleFilterByGender( gender.descr ) } } className="animate__animated animate__zoomIn overflow-auto list-group-item base__btnGallery sideBar_btn">{ gender.descr }</li>
                        
                                </ul>

                            </div>


                        </div> 

                        
                    })
                }
                
            </div>

            <div className="row gender2">

                <div className="col-md-12 p-3 pr-4">

                    <div className="dropdown">

                        <button className="btn btn-secondary dropdown-toggle form-control bg-primary text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Gender</button>

                        <ul className="dropdown-menu form-control" aria-labelledby="dropdownMenuButton1">

                            {
                                genders.map( ( gender ) => 
                                {
                                    return <li key={ gender._id } onClick={ () => { handleFilterByGender( gender.descr ) } } className="base__dropli form-control text-center bg-primary text-white">{ gender.descr }</li>
                                })   
                            }
                        
                        </ul>
                        
                    </div>

                </div>

            </div>

        </>
    );


};


//////---------------------------------------------->>>>>


export default Genders;
