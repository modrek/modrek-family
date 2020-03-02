import React from 'react';
import Auxi from '../../../Hoc/Auxi';
import SearchInput from '../Search/SearchInput'


function Search()
{
    return(
        <div className="Search-input col-10 p-2">
            <SearchInput/>
            {/* <SearchResult /> */}
        </div>
    )
}


export default Search;