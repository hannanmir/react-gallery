import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

class App extends Component {
  state ={
    galleryList: [],
  }

  componentDidMount() {
    console.log('App Mounted');
    this.getGallery();
  }
  
  getGallery = () => {
    axios.get('/gallery')
    .then( (response) => {
      console.log(response.data);
      this.setState({
        galleryList: response.data
      })
    }).catch( (error) => {
      console.log('error in get galleryList', error);
    }) 
  }

  likeImage = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then( () => {
      this.getGallery();
    }).catch( (error) => {
      console.log('error in PUT', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i>Galerie de Chats</i></h1>
          <p className="App-title1">(Click images for descriptions)</p>
        </header>
        <br/>
        <GalleryList galleryList={this.state.galleryList} likeImage={this.likeImage} />
      </div>
    );
  }
}

export default App;
