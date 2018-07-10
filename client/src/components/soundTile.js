import React from 'react';

class SoundTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.hideGraph, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.hide, false);
  }
}

export default SoundTile;
