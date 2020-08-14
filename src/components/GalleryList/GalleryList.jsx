import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

class StudentList extends Component{

    render() {
        return(
            <>
                {this.props.galleryList.map( (image) => {
                    return(
                        <GalleryItem key={image.id} image={image} likeImage={this.props.likeImage} />
                    )
                })}
            </>
        )
    }
}

export default StudentList;
