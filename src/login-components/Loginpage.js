import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';

class Loginpage extends Component {
    constructor(props){
    super(props);
    this.state={
        redirect:false
    }
}
    logout = async (e) =>{
        e.preventDefault()
        this.setState({
            redirect:true
        })
    }
    render(){
        if(this.state.redirect){
           return <Redirect to="/login"/>
        }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/login"}>GB-GCGC</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                            <button type="submit" className="btn btn-danger" onClick={this.logout}>Logout</button>
                 </div>
            </nav>
            <div className='centered'>
                <h3>
                    {this.props.value}
                </h3>
            </div>
        </div>
    )
    }
}
export default Loginpage;