import React from 'react'
import styled from 'styled-components'
import {Card} from 'reactstrap'
import Figure from 'react-bootstrap/Figure'

const Box = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-color:#8d2f23;
font-weight:bolder;
font-size:1.5rem;
padding:20px 0px;
-webkit-text-fill-color:azure;
  border-radius:0%;
color:azure;
`;




const Image = styled.img`
width:200px;
height:200px;
border-radius:100%;
border:double  #561e18;
`;




const inCardText ={
color:"azure",
backgroundColor:"#212027",
  borderRadius:'0%',
}



const GithubUser = props =>{


			return(

				<Card className="theCard">
					<Box>
					<Figure>
					  <Image
					    width={171}
					    height={180}
					    alt="171x180"
					    src={props.singleCard.avatar_url}
					  />
					  <Figure.Caption>
					    Name: {props.singleCard.name} <br /> UserName: {props.singleCard.login}
					  </Figure.Caption>
					</Figure>

					</Box>
					<Card body style={inCardText} className="inCardText">
					
					<ul>
					<li>Location: {props.singleCard.location}</li>
					<li>Hireable: {JSON.stringify(props.singleCard.hireable)}</li>
					<li>Following:{props.singleCard.following}</li>
					<li>Followers:{props.singleCard.followers}</li>
					<li>Member Since:{props.singleCard.created_at}</li>
					</ul>
					<details>
					<summary>Click 2 See Followers</summary>
						<ul>
					{props.followers.map(user=>{

						return(
					<li key={user.id}><a href={user.html_url}>Name: {user.name} <br /> UserName: {user.login}</a></li>)}
					)}
					</ul>
					</details>
					</Card>

						<Card body style={inCardText} className="inCardText">
					
						<p>Bio: {props.singleCard.bio}</p>
					</Card>


					<Box>
					<p>Last Updated:<em>{props.singleCard.updated_at}</em></p>
					<p>Visit Me:<a href={props.singleCard.html_url}>https://github.com/users/guytonoriji</a></p>

					</Box>

				</Card>
				)
}





export default GithubUser