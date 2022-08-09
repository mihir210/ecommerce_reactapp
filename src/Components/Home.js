import React from 'react';
import video from '../pictures/main_video.mp4';
function Home() {
  return (
   <>
   <div className="container-fluid mt-5">
        <table>
            <th>
                <video src={video}className='vide' loop autoPlay muted/>
                    
            </th> 
        </table>
    </div>

    <div>
        <table>
            <th>
                <img src={require('../pictures/omen15.png')} alt="Omen 15" className="omen15_img"/>
            </th>
            <th>
                <h1 className="omen15_font">OMEN 15 LAPTOP</h1>
                <br/>
                <button className="add_cart" type="button">SHOP NOW</button>
            </th>
        </table>
    </div>
   </>
  );
}

export default Home;
