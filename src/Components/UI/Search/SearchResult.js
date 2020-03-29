import React,{ Component} from  'react';
import './SearchResult.scss'



class SearchResult extends Component{

    shoot() {
      
      }
    render(){
        let classname="searchresult ";
        if (this.props.searchquery)
        classname=classname+" hasvalue";
        return(
            <div className={classname} onClick={this.shoot} >
                {this.props.searchquery}
               
            </div>
        )
    }
}
export default SearchResult;