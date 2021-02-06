
const priceFormat = ( price ) =>
{

    price = String( price );

    const pArr = price.split( "" );

    if( pArr.length === 5 )
    {
        pArr.splice( 2,0,"." );
    };
 
    return pArr.join( "" );

};


const capitalLetter = ( string = "" ) =>
{
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};


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
    else if( response.errors.categoryName )
    {

        return response.errors.categoryName.msg;

    }
    else if( response.errors.categoryColor )
    {

        return response.errors.categoryColor.msg;

    }
    else if( response.errors.userCreatorId )
    {

        return response.errors.userCreatorId.msg;

    }
    else if( response.errors.postTitle )
    {

        return response.errors.postTitle.msg;

    }
    else if( response.errors.postBody )
    {

        return response.errors.postBody.msg;

    };

};


//////---------------------------------------------->>>>>


export { priceFormat, capitalLetter, swalMsg };

