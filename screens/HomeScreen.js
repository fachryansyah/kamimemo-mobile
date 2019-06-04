import React, {Component} from "react"
import {Text, View} from "react-native"
import { Container, Content, Header, Left, Body, Right, Icon, Title, Fab, Button, Card, CardItem } from 'native-base'

class HomeScreen extends Component {
	render(){
		const {navigate} = this.props.navigation
		return(
			<Container>
        <Header style={{ backgroundColor: '#F88278' }} androidStatusBarColor="#F88278">
          <Body style={{ alignItems: "center", justifyContent: "center" }}>
          	<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>KAMIMEMO</Text>
          </Body>
        </Header>
        
        <Content style={{ paddingRight: 12, paddingLeft: 12 }}>
        	<Card style={{ borderRadius: 8 }}>
		        <CardItem style={{ borderRadius: 8 }} button onPress={() => navigate("Detail")}>
			        <Body>
				        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Belanjaan hari ini</Text>
				        <Text style={{ fontSize: 12 }}>12, june 2019</Text>
			        </Body>
		        </CardItem>
		        <CardItem footer style={{ borderRadius: 8 }} button onPress={() => alert("Remove")}>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#EF2929" }}>REMOVE</Text>
            </CardItem>
	        </Card>
        </Content>

				<Fab
					active={true}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#F88278' }}
					onPress={() => navigate("Example")}>
						<Icon type="AntDesign" name="plus" />
				</Fab>
      </Container>
		)
	}
}

export default HomeScreen