import React, { Component } from 'react'

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        var data = localStorage.getItem('Details')
        if (data){
            data = JSON.parse(data)
            this.setState({data : data})
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.data.length > 0 ? 
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Shop Name</th>
                                <th>Status</th>
                            </tr>
                            {
                                this.state.data.map((item) => {
                                    return <tr>
                                        <td>{item['Name']}</td>
                                        <td>{item['shop']}</td>
                                        <td>{item['status']}</td>
                                    </tr>
                                })
                            }


                        </table> :
                        <h1>No Data </h1>
                }
                
            </div>
        )
    }
}
export default View