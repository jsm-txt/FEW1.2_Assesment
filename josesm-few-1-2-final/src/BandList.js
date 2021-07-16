import Band from './Band.js';
import data from './metal.json';
import Likes from './Like.js';
import './BandList.css';

function BandList() {
    const Blist = data.map(({ band_name, fans, formed, origin,split }, i) => {
        return (
            <div id="card">
            <Band
              id = {i}
              band_name = {band_name}
              formed = {formed}
              origin = {origin}
              fans = {fans}
              split ={split}
            />
            
            </div>
          )
        })
        return(
          <div className="CardList">
            {Blist}
            

          </div>
        )
        }

export default BandList