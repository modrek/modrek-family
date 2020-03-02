import React from 'react';
import Community from './Community'

function Communities()
{
    var Communitieslist=[
        { Id : 1,Title:"title1",Decs:"Desc1"},
        { Id : 2,Title:"title2",Decs:"Desc1"},
        { Id : 3,Title:"title3",Decs:"Desc1"},
        { Id : 4,Title:"title3",Decs:"Desc1"}
    ]
    
    var numbers = [1, 2, 3, 4, 5];   
    const Communities = Communitieslist.map((Community)=>{   
        return ( <div key={Community.Id}>
            {Community.Title}
        </div>)
    });   

    return(
        <div className="navbar-brand logo col-3 p-2 ">
            Communities
            
            {Communities}
        </div>

    )
}

export default Communities;