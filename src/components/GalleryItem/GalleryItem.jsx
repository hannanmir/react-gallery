import React, { Component } from 'react';
import Likes from '../Likes/Likes.jsx';

class GalleryItem extends Component{

    render() {
        return(
            <div className="pic">
                <div>
                    <img src={this.props.image.path} alt={this.props.image.description}/>
                </div>
                <Likes image={this.props.image} likeImage={this.props.likeImage}/>
            </div>
        )
    }
}

export default GalleryItem;
