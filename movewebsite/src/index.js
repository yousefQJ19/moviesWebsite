import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { ConditionalRendering } from './Component/ConditionalRendering';
//import {RenderLIST} from "./Component/RenderingList"
import {Button} from "./Component/AddingInteractivite"


//  function Render(){
//   for (let i=0;i<100;i++){
//     <ConditionalRendering  styles={{  fontSize :"50px", } }
//       product="condra soda aslya" 
//       isTrue={true} />
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <ConditionalRendering  
    
      product="condra soda aslya" 
      styles={{ 

         fontSize :"20px" ,} }
      isTrue={true} 
    />
<ConditionalRendering  
     styles={{  fontSize :"50px"} }
    product="condra soda aslya" 
    isTrue={true} 
  />
  <ConditionalRendering  
     styles={{  fontSize :"50px", } }
    product="condra soda aslya" 
    isTrue={false} 
  />

    <RenderLIST/> */}
  
  <Button/>
  </React.StrictMode>
);

