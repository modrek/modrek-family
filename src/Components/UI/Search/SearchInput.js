import React from  'react';
import Auxi from '../../../Hoc/Auxi';

function SearchInput()
{
    function handleChange (e) {
        console.log('handle change called')
      }
    return(
        <Auxi>
            <form className="form-inline" action="/action_page.php">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" 
                    onChange={(e) => {handleChange(e)}} ref={(input)=>  input}/>
                <button className="btn btn-success" type="submit">Search</button>
            </form>
        </Auxi>
    )
}

export default SearchInput;