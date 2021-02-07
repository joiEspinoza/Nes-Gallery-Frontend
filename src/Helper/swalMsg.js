

const swalMsg = ( response = {} ) =>
{

    if( !response.errors )
    {

        return response.msg;
    
    }
    else if( response.errors.password )
    {

        return response.errors.password.msg;

    }
    else if( response.errors.email )
    {
        
        return response.errors.email.msg;

    }
    else if( response.errors.userName )
    {
        
        return response.errors.userName.msg;

    }
    else if( response.errors.title )
    {

        return response.errors.title.msg;

    }
    else if( response.errors.gender )
    {

        return response.errors.gender.msg;

    }
    else if( response.errors.realese )
    {

        return response.errors.realese.msg;

    }
    else if( response.errors.price )
    {

        return response.errors.price.msg;

    }
    else if( response.errors.stock )
    {

        return response.errors.stock.msg;

    }
    else if( response.errors.rate )
    {

        return response.errors.rate.msg;

    }
    else if( response.errors.url )
    {

        return response.errors.url.msg;

    }
    else if( response.errors.url2 )
    {

        return response.errors.url2.msg;

    };

};


//////---------------------------------------------->>>>>

export { swalMsg };