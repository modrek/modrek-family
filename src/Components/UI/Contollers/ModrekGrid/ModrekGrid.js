import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import ItemMenu from './ItemMenu';
import axios from '../../../../axios';
import ModrekButton from '../../Contollers/ModrekButton/ModrekButton';
import CRUDFrom from './CRUDFrom/CRUDFrom';



class ModrekGrid extends Component {
    state = {
        rawData: [],
        loading: false,
        new: this.props.commandlist.new,
        edit: this.props.commandlist.edit,
        details: this.props.commandlist.details,
        delete: this.props.commandlist.delete,
        shownew: false,
        showedit: false,
        showdetails: false,
        showdelete: false,
    }

    newbutton = null;
    editbutton = null;
    detailsbutton = null;
    deletbutton = null;

    componentDidMount() {

        if (this.state.new) {
            this.newbutton = <ModrekButton
                clicked={() => this.onbuttonclickhandler('shownew')}
                btnType="New">New </ModrekButton>
        }

        if (this.state.edit) {
            this.editbutton = <ModrekButton
                clicked={() => this.onbuttonclickhandler('showedit')}
                btnType="Edit">Edit </ModrekButton>
        }
        if (this.state.details) {
            this.detailsbutton = <ModrekButton
                clicked={() => this.onbuttonclickhandler('showdetails')}
                btnType="Details">Details </ModrekButton>
        }
        if (this.state.delete) {
            this.deletbutton = <ModrekButton
                clicked={() => this.onbuttonclickhandler('showdelete')}
                btnType="Delete">Delete </ModrekButton>
        }


        this.setState({ loading: true });

        axios.post(this.props.url, { PageIndex: this.props.data.PageIndex, PageSize: this.props.data.PageSize, Expression: this.props.data.Expression })
            .then(response => {
                this.setState({ rawData: response.data, loading: false });
            })
            .catch(error => {
                this.setState({ error: true, loading: false });
            });
    }

    // postSelectedHandler = ( id ) => {
    //     this.props.history.push({pathname: '/posts/' + id});
    //     this.props.history.push( '/posts/' + id );
    // }

    onbuttonclickhandler = (event) => {
        this.setState({ shownew: false, showedit: false, showdetails: false, showdelete: false, [event]: true });
    }

    oncancelclickhandler = () => {
        this.setState({ shownew: false, showedit: false, showdetails: false, showdelete: false });
    }

    render() {

        let obj = this.props.columnDefs['contoller'];
        console.log('onj', obj);
        // var result = Object.keys(obj).map(function(key) {
        //     return [Number(key), obj[key]];
        //   });
        // console.log(result);  
        const headerList = Object.keys(obj).map((col) => {
            return (
                <ItemMenu
                    key={col}
                    headerName={obj[col].label}
                    type={obj[col].elementType}
                >
                </ItemMenu>
            )
        });

        let dataList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error) {
            dataList =
                Object.keys(obj).map((col) => {
                    return (

                        <div key={col}>
                            {
                                this.state.rawData.map((datacol, index) => {
                                    return (<div
                                        key={index}
                                        className="modrekgrid-datacol">
                                        {datacol[col] ?? "------------------- -----------------"}
                                    </div>)
                                })
                            }

                        </div>
                    )
                });

            if (this.state.loading)
                dataList = <p style={{ textAlign: 'center' }}>loading .....</p>;


        }

        let commadform = null;
        if (this.state.shownew)
            commadform = <CRUDFrom
                type="New"
                columnDefs={this.props.columnDefs}
                oncancel={() => this.oncancelclickhandler}
                onsave=""></CRUDFrom>;

        if (this.state.showedit)
            commadform = <CRUDFrom
                type="Edit"
                columnDefs={this.props.columnDefs}
                oncancel={() => this.oncancelclickhandler}
                onsave=""></CRUDFrom>;

        if (this.state.showdetails)
            commadform = <CRUDFrom
                type="Details"
                columnDefs={this.props.columnDefs}
                oncancel={() => this.oncancelclickhandler}
                onsave=""></CRUDFrom>;

        if (this.state.showdelete)
            commadform = <CRUDFrom
                type="Delete"
                columnDefs={this.props.columnDefs}
                oncancel={() => this.oncancelclickhandler}
                onsave=""></CRUDFrom>;

        let gridObject = null;
        if (!commadform)
            gridObject = <>{this.newbutton} {this.editbutton}{this.detailsbutton} {this.deletbutton}
                <div className="modrekgrid-header">{headerList}</div>
                <div className="modrekgrid-row">
                    {dataList}
                </div>
                <div className="modrekgrid-footer">
                    <div style={{ width: '50%', paddingLeft: '10px' }} > paging</div>
                    <div style={{ width: '50%', paddingRight: '10px', textAlign: 'right' }} > PageIndex</div>
                </div>
            </>
        else
            gridObject = commadform;

        return (

            <div className="modrekgrid">
                {gridObject}
            </div>

        );
    }
}

export default ModrekGrid;