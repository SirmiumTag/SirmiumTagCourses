import React, { Component } from 'react'
import './App.css';
import Wallpaper from './Wallpaper.png';
import AdSense from 'react-adsense';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div  >
            <img className="bck" src={Wallpaper}/>
            <AdSense.Google
  client='ca-pub-3668151765421542'
  slot='7806394673'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
            <div className="space">

         </div>

        </div>  );
    }
}
 
export default Footer;