import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Likes extends Component{

    render() {
        if (this.props.image.likes === 0) {
            return(
                <div>
                    <Button variant="contained" size="small" color="primary" startIcon={<FavoriteIcon />}onClick={ () => this.props.likeImage(this.props.image.id)}>Like</Button>
                    <Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={ () => this.props.deleteImage(this.props.image.id)}>Delete</Button>
                    <p>No one likes this photo T_T</p>
                </div>
            )
        }else if (this.props.image.likes === 1) {
            return(
                <div>
                    <Button variant="contained" size="small" color="primary" startIcon={<FavoriteIcon />}onClick={ () => this.props.likeImage(this.props.image.id)}>Like</Button>
                    <Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={ () => this.props.deleteImage(this.props.image.id)}>Delete</Button>
                    <p>{this.props.image.likes} person likes this photo!</p>
                </div>
            )
        }else {
            return(
                <div>
                    <Button variant="contained" size="small" color="primary" startIcon={<FavoriteIcon />}onClick={ () => this.props.likeImage(this.props.image.id)}>Like</Button>
                    <Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={ () => this.props.deleteImage(this.props.image.id)}>Delete</Button>
                    <p>{this.props.image.likes} people like this photo!</p>
                </div>
            )
        }
    }
}

export default Likes;
