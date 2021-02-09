import React from 'react'
import { useSelector } from 'react-redux';
import { priceFormat } from '../../../Helper/helpers';
import Rate from '../games/Rate';


//////<<<<<------------------------------------------------``


const ContentGame = () => 
{

    const { activeGame } = useSelector( state => state.game );

///////////////////////////************************////////////////////////


    return (


        <div className="content__baseGame">
    
            <div className="gameBox">

                <div className="row">

                    <div className="col-md-4">

                        <div className="gameCover">

                            <img src={ activeGame[0].url } alt="Game cover" />

                            <div className="gameBoxBtnBuy">

                                <button className="gameBtnBuy base__btnGallery">Buy</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-8">

                            <div className="row">

                                <form className="btn-block">

                                    <div className="form-group">
                                        <label><small className="text-muted">Gender</small></label>
                                        <input className="form-control" defaultValue={ activeGame[0].gender } />
                                    </div>

                                    <div className="form-group">
                                        <label><small className="text-muted">Realese</small></label>
                                        <input className="form-control" defaultValue={ activeGame[0].realese } />
                                    </div>

                                    <div className="form-group">
                                        <label><small className="text-muted">Price</small></label>
                                        <input className="form-control" defaultValue={  '$ '+priceFormat( activeGame[0].price ) } />
                                    </div>


                                    <div className="form-group">
                                        <label><small className="text-muted">Stock</small></label>
                                        <input className="form-control" defaultValue={ activeGame[0].stock } />
                                    </div>


                                    <div className="form-group">
                                        <label><small className="text-muted">Rate</small></label>
                                        <div className="rateGame"><center><Rate rate={ activeGame[0].rate }/></center></div>
                                    </div>

                                </form>

                            </div>

                        </div>

                </div>
                    


                <div className="row mt-3">
                
                    <div className="col-md-12">

                        <div className="gameBoxScreenShoot">

                            <img className="gameScreenShoot img-fluid" src={ activeGame[0].url2 } alt="Screenshoot"/>

                        </div>
                        
                    </div>

                </div>



                <div className="row mt-4">

                        <div className="col-md-12">

                            <div className="gameActionsBox">

                                <button className="base__btnGallery btnActions">Update</button>

                                <button className="base__btnGallery btnActions">Delete</button>

                            </div>

                    </div>

                </div>


            </div>


        </div>
    
    );

};


//////---------------------------------------------->>>>>


export default ContentGame;
