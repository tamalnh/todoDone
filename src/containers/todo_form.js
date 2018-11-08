import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addTodo} from '../store/actions'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword: ''
         }
    }

    inputHandler = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }

    inputSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.keyword)
        
    }


    render() {   
        
        return ( 
            <div className="container">
                <div className="row py-3">
                    <div className="col-sm-8 offset-sm-2">
                        <form className="form-group d-flex" onSubmit={this.inputSubmitHandler}>
                            <input type="text" 
                                className="form-control " 
                                placeholder="type here......"
                                value={this.state.keyword}
                                onChange={this.inputHandler}/>
                            <button className="btn btn-dark ml-1">+</button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addTodo: addTodo
    }, dispatch)
     
}

export default connect(null, mapDispatchToProps)(InputForm);