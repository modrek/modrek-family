import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemMenu from './ItemMenu';
import axios from '../../../../axios';
import qs from 'qs';


class ModrekGrid extends Component {
    state = {
        rawData: [],
        loading: false
    }


    componentDidMount() {

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

    render() {

        const headerList = this.props.columnDefs.map((col) => {
            return (
                <ItemMenu
                    key={col.headerName}
                    headerName={col.headerName}
                    type={col.type}
                >
                </ItemMenu>
            )
        });

        let dataList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error) {
            dataList =
                this.props.columnDefs.map((col) => {
                    return (

                        <div key={col.field}>
                            {
                                this.state.rawData.map((datacol, index) => {
                                    return (<div
                                        key={index}
                                        className="modrekgrid-datacol">
                                        {datacol[col.field] ?? "------------------- -----------------"}
                                    </div>)
                                })
                            }

                        </div>
                    )
                });

            if (this.state.loading)
                dataList = <p style={{ textAlign: 'center' }}>loading .....</p>;
        }

        return (
            <div className="modrekgrid">
                <div className="modrekgrid-header">{headerList}</div>
                <div className="modrekgrid-row">
                    {dataList}
                </div>
                <div className="modrekgrid-footer">
                    <div style={{ width: '50%', paddingLeft: '10px' }} > paging</div>
                    <div style={{ width: '50%', paddingRight: '10px', textAlign: 'right' }} > PageIndex</div>
                </div>
            </div>

        );
    }
}

export default ModrekGrid;