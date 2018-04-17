import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: props.images,
    }
  }
  randomizeArray(array){
    const sourceArray = array.slice();
    const newArray = [];
    while(sourceArray.length){
      let randomIndex = Math.floor(Math.random()*sourceArray.length);
      newArray.push( sourceArray[randomIndex]);
      sourceArray.splice(randomIndex, 1);
    }
    return newArray;
  }
  render() {

    return (
      <div className="App">
        <ContentColumn shiftRate={.2} displaySize={5} images={this.randomizeArray(this.state.images)} />
        <ContentColumn shiftRate={.6} displaySize={5} images={this.randomizeArray(this.state.images)} />
        <ContentColumn shiftRate={.5} displaySize={5} images={this.randomizeArray(this.state.images)} />
        <ContentColumn shiftRate={.4} displaySize={5} images={this.randomizeArray(this.state.images)} />
        <ContentColumn shiftRate={.3} displaySize={5} images={this.randomizeArray(this.state.images)} />
        <div className="shadow">
          <div id="message">Four score and seven years ago</div>
        </div>
      </div>
    );
  }
}

export default App;


class ContentColumn extends Component{
  constructor(props){
    super(props);
    this.state = {
      blockHeight: 100/props.displaySize,
      position: 0,
      images: props.images
    }
    this.handleTimerUpdate = this.handleTimerUpdate.bind(this);
  }
  handleTimerUpdate(){
    let newPosition = this.state.position+this.props.shiftRate
    if(newPosition > this.itemHeight){
      newPosition = -4;
      var nextArray = this.state.images.slice();
      nextArray.push( nextArray.shift());
    } else {
      nextArray = this.state.images;
    }
    
    this.setState({
      position: newPosition,
      images: nextArray
    })

  }
  componentDidMount(){
    setInterval( this.handleTimerUpdate, 30);
    this.itemHeight = this.column.clientHeight / this.props.displaySize;
  }
  makeAllPictures(array){
    return array.map( (item, key) => this.makePicture(item, key))
  }
  makePicture(image, key){
    const styling = {
      backgroundImage: `url(images/${image})`,
      height: this.state.blockHeight + 'vh',
    }
    return (<figure className='picItem' style={styling} key={key}></figure>)
  }
  render(){
    return (
    <div className="picColumn" ref={ element => this.column=element}>
      <div className="itemContainer" style={{color:'red', 'bottom': this.state.position + 'px'}}>
        {this.makeAllPictures(this.state.images)}
      </div>
    </div>)
  }
}









