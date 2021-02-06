import React from 'react';
import { useSelector } from 'react-redux';
import { priceFormat } from '../../../Helper/helpers';
import Rate from './Rate';


//////<<<<<------------------------------------------------``


const Games = () => 
{

    const fakeCards = 
    [
        { _id: 1, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 0, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg", url2 : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612558465/Nes%20Gallery/Games/Super%20Mario%20Bros./mario1_sqj4vg.jpg"  },
        { _id: 2, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 3, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 4, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 5, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 6, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 7, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 8, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 9, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 10, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 11, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 12, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 13, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 14, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 15, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 16, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 17, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 18, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 19, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 20, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 21, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 22, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 23, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 24, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
        { _id: 25, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, rate : 2, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/Super%20Mario%20Bros./MarioBros_txmiej.jpg"  },
    ]

    const { games } = useSelector( state => state.game );



///////////////////////////************************////////////////////////


    return (


        <div className="row">

            {
                fakeCards.map( ( game ) => 
                {

                    return <div className="col-12 col-md-4 col-lg-3 mb-5 cards__colCards" key={ game._id }>
                        
                        <div className="card cardGame base__pointer">

                            <div className="card-header bg-primary">

                              <Rate rate={ game.rate } />

                            </div>

                            <div className="cardImg">
                               <img src={ game.url } className="img-thumbnail img-fluid" alt={ game.title }/>
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
