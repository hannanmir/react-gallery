import React, { Component } from 'react';

class Likes extends Component{

    render() {
        if (this.props.image.likes === 0) {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <p>No one likes this photo T_T</p>
                </div>
            )
        }else if (this.props.image.likes === 1) {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <p>{this.props.image.likes} person likes this photo!</p>
                </div>
            )
        }else {
            return(
                <div>
                    <button onClick={ () => this.props.likeImage(this.props.image.id)}>Like</button>
                    <p>{this.props.image.likes} people like this photo!</p>
                </div>
            )
        }
    }
}

export default Likes;
