import React from 'react'
import {Form,Input,Button} from'reactstrap'
import UserToShow from './UserToShow'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'







const SearchGithubUser = props =>{

console.log('search props',props)

	return (

<Container>
	{/*<div className="showCard">
			
		</div>*/}
		<UserToShow picked={props.picked} pickedOnesFollowers={props.pickedUsersFollower}/>

	<Form onSubmit={props.findUser}>

			<Input type='text' className="takeChoice" />

		 <div>
      <Button type='submit'>Find</Button>
      </div>
		</Form>

      <Button type='submit'><Link to="/">Go Back Home?</Link></Button>

</Container>
		
		)
}



export default SearchGithubUser;