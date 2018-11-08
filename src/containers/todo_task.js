import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoTask extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    renderTodo = (task) => {
        console.log(task);
        
        if(task){
            return task.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })
        }
    }
   



    render() {   
        
        return ( 
            <div className="container">
                <div className="row">
                    <ul className="list-group">
                        {this.renderTodo(this.props.task)}
                    </ul>
                </div>
            </div>
         );
    }
}
 
function mapStateToProps(state){  
    // console.log(state);
       
    return {
        task: state.add
    }
}


export default connect(mapStateToProps)(TodoTask);