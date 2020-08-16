import React, { Component } from 'react';
import Likes from '../Likes/Likes.jsx';

class GalleryItem extends Component{
    state = {
        display: false
    }

    clickImage = () => {
        this.setState({
            display: !this.state.display,
        })
    }

    render() {
        if (this.state.display === true) {
            return(
                <div className="pic">
                    <div>
                        <img src={this.props.image.path} alt={this.props.image.description} onClick={ () => this.clickImage()}/>
                        <h2><span>{this.props.image.description}</span></h2>
                    </div>
                    <Likes image={this.props.image} likeImage={this.props.likeImage} deleteImage={this.props.deleteImage} />
                </div>
            )
        } else {
            return(
                <div className="pic">
                    <div>
                        <img src={this.props.image.path} alt={this.props.image.description} onClick={ () => this.clickImage()}/>
                    </div>
                    <Likes image={this.props.image} likeImage={this.props.likeImage} deleteImage={this.props.deleteImage} />
                </div>
            )
        }   
    }
}

export default GalleryItem;
