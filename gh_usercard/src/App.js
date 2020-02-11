import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubUser from './comps/GithubUser'
import SearchGithubUser from './comps/SearchGithubUser'
import {Container, Button} from 'reactstrap'
import {Route,Link} from 'react-router-dom'







class App extends React.Component{
    constructor(){
      super()
      this.state={
        ghUser:'',
        followers:[],
        pickedUser:'',
        pickedUsersFollower:[],
      }


    }



    componentDidMount(){



          axios.get("https://api.github.com/users/guytonoriji").then(pingBack=>{

                console.log('getting my card',pingBack)
                this.setState({
                  ghUser:pingBack.data
                })

          }).then(more=>{



              axios.get("https://api.github.com/users/guytonoriji/followers").then(pingBack=>{

                // console.log('getting my follows',pingBack)
                this.setState({
                  followers:pingBack.data
                })

          }).catch(err=> console.log(err))
           

          }).catch(err=> console.log(err))
    }





    componentDidUpdate(prevProps,prevState){

    }





FindUser = (e) =>{
  e.preventDefault()

  const theChoice = document.querySelector('.takeChoice')
console.log('finding users...',theChoice.value)



          axios.get(`https://api.github.com/users/${theChoice.value}`).then(userChoice=>{

                console.log('getting clients choice',userChoice)
                this.setState({
                  pickedUser:userChoice.data
                })

                 axios.get(`https://api.github.com/users/${theChoice.value}/followers`).then(userChoice=>{

                console.log('getting clients choices followers',userChoice)
                this.setState({
                  pickedUsersFollower:userChoice.data
                })

                        })

          }).catch(err=>{
              this.setState({
              pickedUser:'sorry I cant find that user'
              })

           console.log(err)})
}




render(){


      console.log('rendering..')
    
  return (
    <Container className="App">


      <Route exact path="/">
      <GithubUser singleCard={this.state.ghUser} followers={this.state.followers} />
      <div>
      <Button><Link to="/search">Search Users Instead? </Link></Button>
      </div>
      </Route>


      <Route exact path="/search">
      <SearchGithubUser findUser={this.FindUser} picked={this.state.pickedUser} pickedUsersFollower={this.state.pickedUsersFollower}/> 
      </Route>


      
    </Container> 
  );
  }
}

export default App;
