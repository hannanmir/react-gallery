
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# React Gallery

## Description

_Duration: Weekend Rush_

This app is a react based image gallery. Users can upload images and provides descriptions and the app will display the images in a neat and ordered fashion. Further functionality includes the ability to like images and the amount of likes are shown for each image. Users can also choose to delete an and it will be removed. This application is a fullstack full CRUD development.

## Screen Shot

![Screenshot](https://github.com/hannanmir/react-gallery/blob/master/public/images/Screenshot.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Sweetalert](https://sweetalert.js.org/)
- [Material-UI](https://material-ui.com/)


## Installation

1. Create a database named `react_gallery`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Use the input fields to add images.
2. Include the absolute URL and a description for each image.
3. Images are displayed with the most recent at the top.
4. Click on an image to see the description.
5. Hit the "Like" button to like the image. The total likes are displayed below the image.
6. Hit the "Delete" button to remove an image.


## Built With

- React
- Node.js
- Postgres
- Axios
- Sweetalert
- Material-UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to my instrucors [Dane Smith](https://github.com/DoctorHowser) and [Kris Szafranski](https://github.com/kdszafranski).

## Support
If you have suggestions or issues, please email me at [hannanmir2@gmail.com](mailto:hannanmir2@gmail.com).