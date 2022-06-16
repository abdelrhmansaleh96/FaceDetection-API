import React, { Component } from "react";
import Clarifai from 'clarifai';
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import Rank from "./component/Rank/Rank";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./component/imageLinkForm/ImageLinkForm";
import SignIn from './component/SignIn/SignIn';
import Register from './component/Register/Register';
import "./App.css";

const app = new Clarifai.App({
  apiKey: "444b3c7b18f24d46b9e0d1a43d094bdf",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box:{},
      route:'signin'
    };
  }

  getBoundingBox=(data)=>{
    const image=document.getElementById('image');
    const height=Number(image.height);
    const width=Number(image.width);
    const box=data.outputs[0].data.regions[0].region_info.bounding_box;
    const newBox={
      left: box.left_col * width,
      top: box.top_row * height,
      right: width - (box.right_col * width),
      bottom: height - (box.bottom_row * height)
    };
    this.setState({box:newBox})
  }
  
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response)=>this.getBoundingBox(response))}

  onFormClick=(x)=>{
    this.setState({route:x})
  }

  render(){
    return (
      <div className="App">
        { (this.state.route==='signin')?
        <SignIn onFormClick={this.onFormClick}/>
        :
        (this.state.route==='register')?
        <Register onFormClick={this.onFormClick}/>
        :
        <div>
          <Navigation onFormClick={this.onFormClick}/>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
          
        </div>
        }

  
      </div>
    );
  }
}
      
export default App;
