import React from 'react';


//////<<<<<------------------------------------------------``


const Games = () => 
{

    const fakeCards = 
    [
        { _id: 1, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 2, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 3, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 4, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 5, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 7, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 8, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 9, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 10, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 11, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 12, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 13, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 14, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 15, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 16, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 17, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 18, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
        { _id: 19, title : 'Super Mario Bros.', gender : 'Plataform', realese : '13-09-1985', price : 30000, stock : 10, url : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1612040315/Nes%20Gallery/Games/MarioBros_txmiej.jpg"  },
    ]


///////////////////////////************************////////////////////////


    return (


        <div className="row">

            {
                fakeCards.map( ( game ) => 
                {

                    return <div className="col-12 col-md-2 mb-4 cards__colCards" key={ game._id }>
                        
                        <div className="card base__pointer">

                            <div className="cardImg">
                               <img src={ game.url } className="card-img-top img-thumbnail img-fluid" alt={ game.title }/>
                            </div>
                            
                            <div className="card-body">

                                <ul className="list-group list-group-flush text-center">

                                    <li className="list-group-item">{ `$ ${game.price}` }</li>
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


export default Games
