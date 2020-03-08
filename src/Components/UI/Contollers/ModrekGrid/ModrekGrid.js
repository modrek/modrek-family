import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemMenu from './ItemMenu';
import axios from '../../../../axios';
import qs from 'qs';


class ModrekGrid extends Component {
    state = {
        rawData: [],
        loading:false
    }

    
    componentDidMount () {
        
        this.setState( { loading:true} );

        // axios({
        //     url: this.props.url,
        //     data:JSON.stringify(this.props.data),
        //     method: 'post',
        //     // headers: {
        //     //     'Content-Type': 'application/json',
                
        //     //   },
        //     //    body: JSON.stringify(this.props.data),
        //   })
        //     .then(response => {               
        //                  this.setState( { rawData: response.data , loading:false} );
                
        //     });

//         fetch('http://localhost:64001/api/Event/GetList', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({"PageIndex":"0" ,"PageSize":"5","Expression":"111"}),
// }).then(
//     response => {               
//                 this.setState( { rawData: response.data , loading:false} );
//             } );

        axios.post(this.props.url,JSON.stringify({PageIndex:0 ,PageSize:5,Expression:"111"}))
            .then( response => {               
                this.setState( { rawData: response.data , loading:false} );
            } )
            .catch( error => {
                this.setState({error: true, loading:false});
            } );
    }

    // postSelectedHandler = ( id ) => {
    //     this.props.history.push({pathname: '/posts/' + id});
    //     this.props.history.push( '/posts/' + id );
    // }

    render () {
        const headerList = this.props.columnDefs.map((col)=>{   
            return (               
              <ItemMenu 
                key={col.headerName} 
                headerName={col.headerName}
                type={col.type}
                type={col.visible}
                type={col.searchable}>                
              </ItemMenu>
            )
        });  

        let dataList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
      
        if ( !this.state.error ) {
            dataList=
            this.props.columnDefs.map((col)=>{        
                return (     
                                      
                <div  key={col.field}>
                        {
                            this.state.rawData.map((datacol,index)=>{                      
                                  return ( <div 
                                    key={index}                             
                                    className="modrekgrid-datacol"> 
                                    {datacol[col.field]??"------------------- -----------------"}
                                    </div>)
                            })
                        }             
                        
                </div>
                )              
                });  

                if (this.state.loading )
                dataList=<p style={{ textAlign: 'center' }}>loading .....</p>;
        }

        return (
            <div className="modrekgrid">             
              <div className="modrekgrid-header">{headerList}</div> 
              <div className="modrekgrid-row">           
                {dataList}
              </div>
            </div>

        );
    }
}

export default ModrekGrid;