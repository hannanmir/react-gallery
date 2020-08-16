import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Input extends Component{

    render() {
        return(
            <>
                <input placeholder="Path" value={this.props.newInput.path} onChange = {(event) => this.props.handleChangeFor(event, 'path')}/>
                <input placeholder="Description" value={this.props.newInput.description} onChange = {(event) => this.props.handleChangeFor(event, 'description')}/>
                <Button variant="contained" size="small" onClick={ () => this.props.addImage()}>Add Image</Button>
            </>
        )
    }
}

export default Input;
