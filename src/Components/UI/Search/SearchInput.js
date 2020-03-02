import React, { Component } from 'react';
import Auxi from '../../../Hoc/Auxi';
import SearchResult from '../Search/SearchResult'


class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = ({searchquery: ""});
      }

    render() {
        
        this.handleChange = e => {

          this.setState({searchquery: e.target.value});
          };
        

        return(
                <Auxi>
                <form className="form-inline" action="/action_page.php">
                    <input className="form-control col-10 mr-sm-2" type="search" placeholder="Search" 
                        onChange={(e) => {this.handleChange(e)}} ref={(input)=>  input}/>
                    {/* <button className="btn btn-success" type="submit">Search</button> */}
                </form>
                <SearchResult searchquery={this.state.searchquery} />
            </Auxi>
            )
      }
}


export default SearchInput;