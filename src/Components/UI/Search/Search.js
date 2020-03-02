import React from 'react';
import Auxi from '../../../Hoc/Auxi';
import SearchInput from '../Search/SearchInput'
import SearchResult from '../Search/SearchResult'

function Search()
{
    return(
        <div className="Search-input col-9 p-2">
            <SearchInput/>
            <SearchResult />
        </div>
    )
}


export default Search;