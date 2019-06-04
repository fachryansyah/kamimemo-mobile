import React, {Component} from "react"
import {Text, View} from "react-native"
import SideBar from "../components/SideBar"
import {
	Container,
	Content,
	Header,
	Left,
	Body,
	Right,
	Icon,
	Title,
	Subtitle,
	Fab,
	Button,
	Card,
	CardItem,
	Toast,
	Root,
	ActionSheet,
	Drawer
} from 'native-base'

var BUTTONS = [
	{
		text: "Delete",
		icon: "remove",
		iconColor: "#F88278"
	},
	{
		text: "Cancel",
	}
]

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class HomeScreen extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	button: ""
    };
  }
	render(){
		const {navigate} = this.props.navigation
		return(
			<Root>
				<Drawer ref={(ref) => {this.drawer = ref}} content={<SideBar />}>
					<Container>
		        <Header style={{ backgroundColor: '#F88278' }} androidStatusBarColor="#F88278">
		        	<Left>
			        	<Button transparent onPress={() => this.drawer._root.open()}>
		              <Icon type="Entypo" name="menu" />
		            </Button>
		        	</Left>
		          <Body>
		          	<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>KAMIMEMO</Text>
		          </Body>
		          <Right />
		        </Header>
		        
		        <Content style={{ paddingRight: 12, paddingLeft: 12 }}>
		        	<Card style={{ borderRadius: 8 }}>
				        <CardItem style={{ borderRadius: 8 }} button onPress={() => navigate("Detail")}>
					        <Body>
						        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Belanjaan hari ini</Text>
						        <Text style={{ fontSize: 12 }}>12, june 2019</Text>
					        </Body>
				        </CardItem>
				        <CardItem footer style={{ borderRadius: 8 }} button  onPress={() => ActionSheet.show({
				        	options: BUTTONS,
				        	cancelButtonIndex: CANCEL_INDEX,
				        	destructiveButtonIndex: DESTRUCTIVE_INDEX,
				        	title: "TESTING"
				        },
				        buttonIndex => {
				        	if (typeof BUTTONS[buttonIndex] !== "undefined") {
				        		alert(BUTTONS[buttonIndex].text)
				        	}else if(typeof BUTTONS[buttonIndex] == "undefined"){
				        		alert("ActionSheet closed")
				        	}
				        }
				        )}>
		              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#EF2929" }}>REMOVE</Text>
		            </CardItem>
			        </Card>
		        </Content>

						<Fab
							active={true}
		          direction="up"
		          containerStyle={{ }}
		          style={{ backgroundColor: '#F88278' }}
							onPress={() => navigate("Add")}>
								<Icon type="AntDesign" name="plus" />
						</Fab>
		      </Container>
	      </Drawer>
			</Root>
		)
	}
}

export default HomeScreen