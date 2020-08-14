import React, { Component } from 'react';

class Likes extends Component{

    render() {
        if (this.props.image.likes === 0) {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <h4>No one likes this photo T_T
                    <br/> Be the first!</h4>
                </div>
            )
        }else if (this.props.image.likes === 1) {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <h4>{this.props.image.likes} person likes this photo</h4>
                </div>
            )
        }else {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <h4>{this.props.image.likes} people like this photo</h4>
                </div>
            )
        }
    }
}

export default Likes;
