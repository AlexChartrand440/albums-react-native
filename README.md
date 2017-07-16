Albums
======

A React Native app ecommerce app to display a collection of albums available for purchase. The back end uses node/ express.

### To Run:

> Note: This was made on MacOS and has not yet been tested on Windows/ Android.

#### Requirements

- NodeJS: https://nodejs.org/en/
- Xcode: https://developer.apple.com/xcode/

#### Installation

Run the following commands in your terminal:

`$ git clone git@github.com:JonnyPickard/albums-react-native.git`

`$ cd albums-react-native`

`$ npm install`

`$ npm startServer`

Then open a seperate terminal window and in the same `/albums-react-native` directory run:

`$ npm startSimulator`

### Design

The app is centered around a scroll view containing a list of albums for purchase. This consists of the following component structure:

```
- App:  
  - Header:  
    - Title
  - AlbumList:  
    - AlbumDetail:  
      - Card:
        - CardSection // Header
            - ThumbnailImage
            - Header
        - CardSection // Image
          - AlbumImage
        - CardSection // BuyButton
          - BuyButton 
```

When the user clicks the `BuyButton` it takes them through to the relative amazon.com page.  

The data used to populate the app is mock json data and gets served via a get request to the back end server @ http://localhost:3000.

This is a mockup I made using Balsamiq:  
![Mockup]

### Finished Product

This is a screenshot of the resulting app running on the ios simulator.  
![Screenshot]

[Mockup]: https://github.com/JonnyPickard/albums-react-native/blob/master/src/docs/AlbumsMockup.png

[Screenshot]: https://github.com/JonnyPickard/albums-react-native/blob/master/src/docs/AlbumsAppScreenShot.png
