import './App.css';
import react,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Speech from './Speech';
import Sidebar from "./Sidebar";
import Commentary from "./Commentary";
import {matches} from "./constants";
import { v4 as uuid } from 'uuid';




class App extends Component{

    constructor() {
        super();
        const uid = uuid();
        const uniqueid = uid.slice(0,8)

        this.state = {
            isLoaded:false,
            matches: matches,
            uuid: uniqueid,
            group: uniqueid+"-group",
            instance:uniqueid+"-instance",
            current: {"teams":matches[0].teams,"details":matches[0].details,"matchId":matches[0].matchId,"comm":{}},
        }



        this.onMatchSelect = this.onMatchSelect.bind(this)
        this.createConsumer = this.createConsumer.bind(this)
        this.ListenComm = this.ListenComm.bind(this);

        const promises = [this.createConsumer()];
        Promise.all(promises).then(() => {
            console.log("Consumer created successfully!")
        })
    }

    createConsumer() {
        return fetch(`http://localhost:38082/consumers/${this.state.group}`,{
            method:"POST",
            headers: { 'Content-Type': 'application/vnd.kafka.json.v2+json' },
            body:JSON.stringify({
                "name": this.state.instance,
                "format": "json",
                "auto.offset.reset": "largest",
                "auto.commit.enable": "true"
            })
        })
            .then(res=>res.json())
            .then(
                    (result) => {
                        console.log(result);
                        },
                    (error) => {
                        // console.log(error);
                        this.setState({error});
                    }
                )
    }

    componentDidMount() {
        fetch("http://localhost:9900/matches/list")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        matches: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    async ListenComm(matchId){
        fetch(`http://localhost:38082/consumers/${this.state.group}/instances/${this.state.instance}/subscription`,{
            method: "POST",
            headers: { 'Content-Type': 'application/vnd.kafka.json.v2+json' },
            body:JSON.stringify({
                "topics":[matchId]
            })
        }).then(
            (result)=>{
                console.log(result)
            },
            (error) => {
                this.setState({error})
            }
        )

        console.log("subscription created successful")

    }

    onMatchSelect(selection) {
        this.ListenComm(selection.matchId)
        this.setState({current: selection})
    }

    async listenCommentary(selection){

    }

    render() {
      return (
          <div className='body'>
              <Navbar bg="dark" variant="dark" className="navmod">
                  <Container className="containermod">
                      <Navbar.Brand href="#home">
                          <img
                              alt=""
                              src="/logo.png"
                              width="150"
                              height="50"
                              className="d-inline-block align-top"
                          />{' '}
                      </Navbar.Brand>
                  </Container>
              </Navbar>
              <div className="match-content">
                  <Sidebar matches={this.state.matches} matchSelect={this.onMatchSelect}/>
                  <Commentary selection={this.state.current}/>
              </div>
          </div>
      )
  }
}

// function App() {
//
//   const matchlist=[{"teamA":"West Indies"
//   ,"teamB":"India"
//   ,"scoreA":"(48.3/50 ov) 296/5"
//   ,"scoreB":""
//   ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
//   ,"ball":"48.3"}];
//
//
//   const commentry={"teamA":"West Indies"
//   ,"teamB":"India"
//   ,"scoreA":"(48.3/50 ov) 296/5"
//   ,"scoreB":""
//   ,"commentary":"Thakur to Hope, 1 run. Yorker at fifth, nailed it. Dug out to cover."
//   ,"ball":"48.3"};
//
//
//
//   return (
//
//   <div className='body'>
//
//   <div className='header'>
//   <a className='title1' href='/' title="dumplinks.ga" >cric<span style={{color:"rgb(2, 128, 98)"}}>R</span>adio</a>
//
//   </div>
//
//   <div className="torso">
//
//
//     <div>
//   {/* <div class="matchList">
//   <div class="horizontal-scroll-wrapper squares">
//   <div class=" items">item 1</div>
//   <div class=" items">item 2</div>
//   <div class=" items">item 4</div>
//   <div class=" items">item 3</div>
//   <div class=" items">item 5</div>
//   <div class=" items">item 6</div>
//   <div class=" items">item 7</div>
//   <div class=" items">item 8</div>
//   <div class=" items">item 1</div>
//   <div class=" items">item 1</div>
//   <div class=" items">item 2</div>
//   <div class=" items">item 1</div>
//   <div class=" items">item 2</div>
//   <div class=" items">item 4</div>
//   <div class=" items">item 3</div>
//   <div class=" items">item 5</div>
//   <div class=" items">item 6</div>
//   <div class=" items">item 7</div>
//   <div class=" items">item 8</div>
//   <div class=" items">item 1</div>
//   <div class=" items">item 1</div>
//   <div class=" items">item 2</div>
// </div>
//
//
// </div> */}
// </div>
//
// <div className="MatchList">
// <ul className="List">
// {
//
// matchlist.map(n => {
//   let temp=n.teamA+" vs "+n.teamB;
//   return (
//   <li class="card">
//
//   <p class="cardCont">{temp}</p>
//
//   </li>
//   )
// })
// }
// </ul>
// </div>
//
//
//
// <div className='commentryDisp'>
// <div className='strip'>
//   <div style={{"margin-left":"20px","color":"#fff"}}>
//     <p>{commentry.teamA}:{commentry.scoreA}
//     </p>
//     <p>{commentry.teamB}:{commentry.scoreB}
//     </p>
//   </div>
//   <p className='mike'>mike</p>
//
// </div>
//
// <textarea className='screen' value={commentry.commentary}/>
//
//   <div className="App">
//     <Speech/>
//   </div>
//
//
// </div>
//
//
//
//
// </div>
// </div>
//   );
// }

export default App;


