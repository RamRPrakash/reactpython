import React , {Component} from 'react'
import Button from './../Components/Button'
import Textbox from './../Components/Textbox'

class Create extends  Component{
    constructor(props){
        super(props);
        this.state = {
            Name : '', 
            shop : '', 
            status : ''
        }
    }
    setvalues=(e, field)=>{
        if(field === 'Name'){
            this.setState({
                Name : e.target.value
            })
        }
        else if(field === 'Shop'){
            this.setState({
                shop : e.target.value
            })
        }
        else if(field === 'Status'){
            this.setState({
                status : e.target.value
            })
        }

    }
    submit=()=>{
        var data = {
            Name: this.state.Name,
            shop: this.state.shop,
            status: this.state.status
        }
        if (this.state.Name === ''){
            alert('Enter name')
        } else if (this.state.shop === ''){
            alert('Enter shop name')
        } else if (this.state.status === ''){
            alert('Enter status')
        }else{

            var local = localStorage.getItem('Details')
            var Total = []
            if(local){
                local = JSON.parse(local)
                Total  = [...local]
            }
            Total.push(data)
            localStorage.setItem('Details' , JSON.stringify(Total))
            alert('Details registered Successfully !!')
            this.setState({
                Name: '',
                shop: '',
                status: ''
            })
        }
    }
    render(){
        return (
            <div>
                <div style={{display : 'flex' , width : '100%'}}>
                    <h4 style={{ width: '15%' }}> Name  </h4> <Textbox placeholder="Name" value={this.state.Name} onChange={(e)=>{this.setvalues(e , 'Name')}}/>
              </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <h4 style={{ width: '15%' }}> Shop Name  </h4>  <Textbox placeholder="Shop Name" value={this.state.shop} onChange={(e) => { this.setvalues(e, 'Shop') }}/>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <h4 style={{ width: '15%' }}> Status  </h4>   <Textbox placeholder="Status" value={this.state.status} onChange={(e) => { this.setvalues(e, 'Status') }}/>
                </div>
                <div>
                    <Button btnName="Submit" onClick={this.submit}/>
                </div>
            </div>
        )
    }
}
export default Create