import {useState} from "react";
import "./Image.css";

function Image() {
  const [state, setState] = useState(
    "https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg"
  );

  const updateToAngular = () => {
    setState(
      "https://icon-library.com/images/angularjs-icon/angularjs-icon-8.jpg"
    );
  };

  const updateToReact = () => {
    setState(
      "https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg"
    );
  };
    
    return(
        <div className="image-container">
            <img src={state} width={300}height={300}></img> 
                 <br/>
                 <br/>
                <button onClick={updateToReact}> React JS </button>
                <button onClick={updateToAngular} >Angular JS</button>

                </div>
    );
}

export default Image;