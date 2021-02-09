import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setActiveGame } from '../../../Actions/gameActions';
import { priceFormat } from '../../../Helper/helpers';
import Rate from './Rate';


//////<<<<<------------------------------------------------``


const Games = () => 
{

    const { games } = useSelector( state => state.game );

    const history = useHistory();
    const dispatch = useDispatch();
    const handleRedirectGame = ( _id ) =>
    {

        history.push( '/game' )

        const gameSelected = games.filter( ( game ) => game._id === _id );

        dispatch( setActiveGame( gameSelected ) );

    };



///////////////////////////************************////////////////////////


    return (


        <div className="row">

            {
                games.map( ( game ) => 
                {

                    return <div className="col-12 col-md-4 col-lg-3 mb-5 cards__colCards" key={ game._id }>
                        
                        <div className="card cardGame">

                            <div className="card-header bg-primary">

                              <Rate rate={ game.rate } />

                            </div>

                            <div className="cardImg">
                               <img onClick={ () => { handleRedirectGame( game._id ) } } src={ game.url } className="img-thumbnail img-fluid base__pointer" alt={ game.title }/>
                            </div>
                            
                            <div className="card-body">

                                <ul className="list-group list-group-flush text-center">

                                    <li className="list-group-item">{ `$ ${ priceFormat( game.price ) }` }</li>
                                    <li className="list-group-item"><small className="text-muted">{ `stock : ${game.stock}` }</small></li>

                                </ul>

                            </div>

                        </div>

                    </div>

                })
            }
            
        </div>

    );

};


//////---------------------------------------------->>>>>


export default Games;
