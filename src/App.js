import React,{Component,Suspense}from"react";import"./App.css";import Particles from"react-particles-js";

const Navigation=React.lazy(()=>import("./components/Navigation/Navigation")),Logo=React.lazy(()=>import("./components/Logo/Logo")),ImageLinkForm=React.lazy(()=>import("./components/ImageLinkForm/ImageLinkForm")),Rank=React.lazy(()=>import("./components/Rank/Rank")),FaceDetect=React.lazy(()=>import("./components/FaceDetect/FaceDetect")),SignIn=React.lazy(()=>import("./components/SignIn/SignIn")),Register=React.lazy(()=>import("./components/Register/Register"));

const initialState={input:"",imageUrl:"",boxes:[],route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}};

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }
  calculateFaceLocations = data => {const image = document.getElementById('inputimage');const width = Number(image.width);const height = Number(image.height);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  };
  displayFaceBoxes = boxes => {
    this.setState({ boxes: boxes });
  };
  loadUser= data => {
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined: data.joined
    }})
  }
  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input:this.state.input })
    };
    fetch('https://face-recognition-app-backend.herokuapp.com/imageurl',requestOptions)
    .then(response => response.json())
    .then(response=>{
      if(response){
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id:this.state.user.id })
        };
        fetch('https://face-recognition-app-backend.herokuapp.com/image',requestOptions)
        .then(response => response.json())
        .then(count=>{
            if(count){
              this.setState(Object.assign(this.state.user,{entries:count}))
            }
        })
        .catch(console.log)
      }
      this.displayFaceBoxes(this.calculateFaceLocations(response))
    })
    .catch(err=>console.log(err))
  };
  onInputChange = event => this.setState({ input: event.target.value });
  onRouteChange = route => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
      this.setState({initialState})
    } else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  render() {
    const {isSignedIn,route,boxes,imageUrl} = this.state
    return (
      <div className="App"> <Particles className="particles" params={{"particles":{"number":{"value": 150}, "size":{"value": 3}}, "interactivity":{"events":{"onhover":{"enable": true, "mode": "repulse"}}}}}/> <Suspense fallback={<div>Chargement...</div>}> <Navigation isSignedIn={isSignedIn}onRouteChange={this.onRouteChange}/>{route==='home' ? <div> <Logo/> <Rank name={this.state.user.name}entries={this.state.user.entries}/> <ImageLinkForm onInputChange={this.onInputChange}onSubmit={this.onSubmit}/> <FaceDetect boxes={boxes}imageUrl={imageUrl}/> </div>: route==='signin' ? <SignIn loadUser={this.loadUser}onRouteChange={this.onRouteChange}/> : <Register loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>}</Suspense></div>
    );
  }
}

export default App;