import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setActiveGame, setSpliceGames } from '../../../Actions/gameActions';
import Pagination from './Pagination';
import Rate from './Rate';


//////<<<<<------------------------------------------------``


const Games = () => 
{

    const { games, spliceGames } = useSelector( state => state.game );


    const dispatch = useDispatch();
    useEffect( () => 
    {
        const initCopyGames = [ ...games ];
        dispatch( setSpliceGames( initCopyGames.splice( 0, 12 ) ) );

    }, [ dispatch, games ] );


    const history = useHistory();
    const handleRedirectGame = ( _id ) =>
    {

        history.push( '/game' )

        const gameSelected = games.filter( ( game ) => game._id === _id );

        dispatch( setActiveGame( gameSelected ) );

    };

 

///////////////////////////************************////////////////////////


    return (

        <>

            <div className="row">
                
                {
                    spliceGames &&
                    
                    spliceGames.map( ( game ) => 
                    {

                        return <div className="col-12 col-md-4 col-lg-3 mb-5 cards__colCards" key={ game._id }>
                            
                            <div className="card cardGame animate__animated animate__flipInY">

                                <div className="card-header bg-primary">

                                    <Rate rate={ game.rate } />

                                </div>

                                <div className="cardImg">

                                    <img onClick={ () => { handleRedirectGame( game._id ) } } src={ game.url } className="img-thumbnail img-fluid base__pointer" alt={ game.title }/>
                                
                                </div>
                                
                                <div className="card-body">

                                    <ul className="list-group list-group-flush text-center">

                                        <li className="list-group-item cardRelease"><small>{ game.release }</small></li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                        

                    })
                }

            </div>
            
            <div className="row pagination">

                <div className="col-md-12">

                   
                   <Pagination games={ games } />
             

                </div>

            </div>
        
        </>
    );

};


//////---------------------------------------------->>>>>


export default Games;
