import React from 'react';
import PropTypes from 'prop-types';


//////<<<<<------------------------------------------------``


const Rate = ( { rate } ) => 
{


    return (


        <>

            { 
               
               rate === 0 &&   <div className="ml-3">
                                   <span className="cardRate" hidden={ true }>■</span> 
                                   <span className="cardRate" hidden={ false }>▪</span> 
                                   <span className="cardRate" hidden={ true } >■</span> 
                                   <span className="cardRate" hidden={ false }>▪</span> 
                                   <span className="cardRate" hidden={ true } >■</span> 
                                   <span className="cardRate" hidden={ false }>▪</span> 
                               </div>

            
            }

            { 
               
                rate === 1 &&   <div>
                                    <span className="cardRate" hidden={ false }><i className="fab fa-fort-awesome"></i></span> 
                                    <span className="cardRate" hidden={ true }>▪</span> 
                                    <span className="cardRate" hidden={ true } ><i className="fab fa-fort-awesome"></i></span> 
                                    <span className="cardRate" hidden={ false }>▪</span> 
                                    <span className="cardRate" hidden={ true } ><i className="fab fa-fort-awesome"></i></span> 
                                    <span className="cardRate" hidden={ false }>▪</span> 
                                </div>

             
            }

            { 
               
               rate === 2 &&   <div>
                                   <span className="cardRate" hidden={ false }><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ true }>▪</span> 
                                   <span className="cardRate" hidden={ false } ><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ true }>▪</span> 
                                   <span className="cardRate" hidden={ true } ><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ false }>▪</span> 
                               </div>

           }

            { 
               
               rate === 3 &&   <div>
                                   <span className="cardRate" hidden={ false }><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ true }>▣</span> 
                                   <span className="cardRate" hidden={ false } ><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ true }>▣</span> 
                                   <span className="cardRate" hidden={ false } ><i className="fab fa-fort-awesome"></i></span> 
                                   <span className="cardRate" hidden={ true }>▣</span> 
                               </div>

           }

        </> 


    );

};


//////---------------------------------------------->>>>>


Rate.propTypes = 
{
    rate: PropTypes.number.isRequired
}


export default Rate;






