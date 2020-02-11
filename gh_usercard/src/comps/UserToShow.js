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



const UserToShow = props =>{

		console.log('userstoshow page scripts props',props)
			return(

				<Card className="theCard">
					<Box>
					<Figure>
					  <Image
					    width={171}
					    height={180}
					    alt="headshot"
					    src={props.picked.avatar_url  || 'null'}
					  />
					  <Figure.Caption>
					    Name: {props.picked.name  || 'null'} <br /> UserName: {props.picked.login  || 'null'}
					  </Figure.Caption>
					</Figure>

					</Box>
					<Card body style={inCardText} className="inCardText">
					
					<ul>
					<li>Location: {props.picked.location  || 'null'}</li>
					<li>Hireable: {JSON.stringify(props.picked.hireable)}</li>
					<li>Following:{props.picked.following  || 'null'}</li>
					<li>Followers:{props.picked.followers  || 'null'}</li>
					<li>Member Since:{props.picked.created_at  || 'null'}</li>
					</ul>
					<details>
					<summary>Click 2 See Followers</summary>
						<ul>
					{props.pickedOnesFollowers.map(user=>{

						return(
					<li key={user.id}><a href={user.html_url  || 'none'}>Name: {user.name  || 'none'} <br /> UserName: {user.login  || 'none'}</a></li>)}
					)}
					</ul>
					</details>
					</Card>

						<Card body style={inCardText} className="inCardText">
					
						<p>Bio: {props.picked.bio || 'none'}</p>
					</Card>


					<Box>
					<p>Last Updated:<em>{props.picked.updated_at || 'none'}</em></p>
					<p>Visit Me:<a href={props.picked.html_url || ''}>https://github.com/users/{props.picked.login || 'none'}</a></p>

					</Box>

				</Card>
				)
}





export default UserToShow