import { useSpeechSynthesis } from 'react-speech-kit';
import {useState, useEffect } from 'react';
import './App.css';

function App() {

  const matchlist=[{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"},{"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"}];

  
  const commentry={"teamA":"West Indies"
  ,"teamB":"India"
  ,"scoreA":"(48.3/50 ov) 296/5"
  ,"scoreB":""
  ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
  ,"ball":"48.3"};


  const [text,setText] = useState('hi iam what are u doing nanda');
  const {speak} = useSpeechSynthesis();

  return (
   
  <div className='body'>

  <div className='header'>
  <a className='title1' href='/' title="dumplinks.ga" >cric<span style={{color:"rgb(2, 128, 98)"}}>R</span>adio</a>
  
  </div>

  <div className="torso">

    
    <div>
  {/* <div class="matchList">
  <div class="horizontal-scroll-wrapper squares">
  <div class=" items">item 1</div>
  <div class=" items">item 2</div>
  <div class=" items">item 4</div>
  <div class=" items">item 3</div>
  <div class=" items">item 5</div>
  <div class=" items">item 6</div>
  <div class=" items">item 7</div>
  <div class=" items">item 8</div>
  <div class=" items">item 1</div>
  <div class=" items">item 1</div>
  <div class=" items">item 2</div>
  <div class=" items">item 1</div>
  <div class=" items">item 2</div>
  <div class=" items">item 4</div>
  <div class=" items">item 3</div>
  <div class=" items">item 5</div>
  <div class=" items">item 6</div>
  <div class=" items">item 7</div>
  <div class=" items">item 8</div>
  <div class=" items">item 1</div>
  <div class=" items">item 1</div>
  <div class=" items">item 2</div>
</div>


</div> */}
</div>

<div className="MatchList">
<ul className="List">
{

matchlist.map(n => {
  let temp=n.teamA+" vs "+n.teamB;
  return (
  <li class="card">
   
  <p class="cardCont">{temp}</p>  
  
  </li> 
  )
})
}
</ul>
</div>



<div className='commentryDisp'>
<div className='strip'>
  <div style={{"margin-left":"20px","color":"#fff"}}>
    <p>{commentry.teamA}:{commentry.scoreA}
    </p>
    <p>{commentry.teamB}:{commentry.scoreB}
    </p>
  </div>
  <p className='mike'>mike</p>
  <button onClick={() => {alert("iam there");speak({ text: text });}}>
          Speech
        </button>
</div>

<textarea className='screen' value={commentry.commentary}>

</textarea>

</div>




</div>
</div>
  );
}

export default App;


