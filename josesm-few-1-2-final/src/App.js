import logo from './logo.svg';

import Heading from './Heading.js';
import './App.css';
import MetalMeta from './MetalMeta';
import Band from './Band.js';
import data from './metal.json';
import BandList from './BandList'
import Likes from './Like.js'

function App(props) {
  return (
      <div>
        <Heading/>
        <MetalMeta/>
        <BandList/>
        <Likes/>
      </div>
    
  );
}

export default App;
