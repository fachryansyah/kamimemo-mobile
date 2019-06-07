import React, {Component} from "react"
import {View, Text, Dimensions} from "react-native"
import { 
	Container,
	Header,
	Body,
	Right,
	Content,
	Button,
	Icon,
	Textarea,
	Form,
	Item,
	Input,
	Toast,
	Root
} from "native-base"

class AddScreen extends Component {
	render(){
		return(
			<Root>
				<Container>
	        <Header style={{ backgroundColor: '#F88278' }} androidStatusBarColor="#F88278">
	          <Body style={{ alignItems: "center", justifyContent: "center" }}>
	          	<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>Buat catatan baru</Text>
	          </Body>
	          <Right>
	          	<Button transparent>
	              <Icon type="AntDesign" name='save' />
	            </Button>
	          </Right>
	        </Header>

	        <Content padder enableAutomaticScroll={false}>
	          <Form>
		          <Item regular>
		            <Input placeholder='Regular Textbox' />
		          </Item>
	            <Textarea bordered placeholder="Textarea" style={{ height: Dimensions.get("window").height - 110 }} />
	          </Form>
	        </Content>
			  </Container>
			</Root>
		)
	}
}

export default AddScreen