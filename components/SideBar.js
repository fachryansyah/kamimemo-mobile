import React, {Component} from "react"
import {View} from "react-native"
import { Container, Button, Content, Text, Icon, Thumbnail, Grid, Col, Header, Body } from 'native-base'

class SideBar extends Component {
	render(){
		return(
			<Container>
				<Header span style={{ backgroundColor: '#F88278' }} androidStatusBarColor="#F88278">
					<Body>
						<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>MY PROFILE</Text>
					</Body>
				</Header>
        <Content>
          <View style={{ padding: 18}}>
          	<Grid style={{ marginTop: 10 }}>
          		<Col size={1}>
          			<Thumbnail large source={{ uri: "https://ui-avatars.com/api/?name=John+Doe&size=128" }} />
          		</Col>
          		<Col size={2}>
          			<Text style={{ fontSize: 20, color: "#555753", fontWeight: "bold", marginTop: 16 }}>Jhon Doe</Text>
          			<Text style={{ fontSize: 12, color: "#888A85" }}>jhondoe1337@gmail.com</Text>
          		</Col>
          	</Grid>
          	<Button bordered danger full rounded style={{ marginTop: 18 }}>
	            <Text>LOGOUT</Text>
	          </Button>
          </View>
        </Content>
      </Container>
		)
	}
}

export default SideBar