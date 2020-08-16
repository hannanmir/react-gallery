import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import Input from '../Input/Input.jsx';

class App extends Component {
  state ={
    galleryList: [],
    newInput: {},
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

  handleChangeFor = (event, propertyToChange) => {
    this.setState({
        newInput: {
            ...this.state.newInput,
            [propertyToChange]: event.target.value, 
        }
    })
  }

  addImage = () => {
    axios.post('/gallery', this.state.newInput)
    .then( () => {
      this.setState({
        newInput: {
          path: '',
          description: '',
        },
      })
      this.getGallery();
    }).catch( (error) => {
      console.log('error in POST', error);
    })
  }

  deleteImage = (id) => {
    axios.delete(`/gallery/${id}`)
    .then( () => {
      this.getGallery();
    }).catch( (error) => {
      console.log('error in DELETE', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><i>Galerie des Chats</i></h1>
          <p className="App-title1">(Click images for descriptions)</p>
        </header>
        <Input newInput={this.state.newInput} addImage={this.addImage} handleChangeFor={this.handleChangeFor} />
        <br/>
        <GalleryList galleryList={this.state.galleryList} likeImage={this.likeImage} deleteImage={this.deleteImage} />
      </div>
    );
  }
}

export default App;
