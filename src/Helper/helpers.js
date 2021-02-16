
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


const dateFormat = ( date = '' ) =>
{
    let arrD = date.split( '-' );

    arrD = [ arrD[2], arrD[1], arrD[0] ];

    return arrD.join( '-' );
};


const lockUpdate = () =>
{
    document.getElementById( 'iGender' ).setAttribute( 'disabled', true );

    document.getElementById( 'iRelease2' ).setAttribute( 'hidden', true );
    document.getElementById( 'iRelease' ).removeAttribute( 'hidden' );
    document.getElementById( 'iRelease3' ).setAttribute( 'hidden', true );

    document.getElementById( 'iRate2' ).setAttribute( 'hidden', true );
    document.getElementById( 'iRate' ).removeAttribute( 'hidden' );

    document.getElementById( 'bUpdate3' ).setAttribute( 'hidden', true );
    document.getElementById( 'bUpdate2' ).setAttribute( 'hidden', true );
    document.getElementById( 'bUpdate' ).removeAttribute( 'hidden' );

    document.getElementById( 'btnSearch' ).removeAttribute( 'disabled' );
    document.getElementById( 'search' ).removeAttribute( 'disabled' );
    
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


export { priceFormat, capitalLetter, lockUpdate, swalMsg, dateFormat };

