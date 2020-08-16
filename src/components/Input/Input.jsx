import React, { Component } from 'react';

class Input extends Component{

    render() {
        return(
            <>
                <input placeholder="Path" value={this.props.newInput.path} onChange = {(event) => this.props.handleChangeFor(event, 'path')}/>
                <input placeholder="Description" value={this.props.newInput.description} onChange = {(event) => this.props.handleChangeFor(event, 'description')}/>
                <button onClick={ () => this.props.addImage()}>Add Image</button>
            </>
        )
    }
}

export default Input;
