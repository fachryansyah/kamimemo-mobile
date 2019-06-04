import React, {Component} from "react"
import {View, Text, Dimensions} from "react-native"
import { Container, Header, Body, Content, Textarea, Form } from "native-base";

class DetailScreen extends Component {
	render(){
		return(
			<Container>
        <Header style={{ backgroundColor: '#F88278' }} androidStatusBarColor="#F88278">
          <Body style={{ alignItems: "center", justifyContent: "center" }}>
          	<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>Belanjaan hari ini</Text>
          </Body>
        </Header>

        <Content padder enableAutomaticScroll={false}>
          <Form>
            <Textarea bordered placeholder="Textarea" style={{ height: Dimensions.get("window").height - 110 }} />
          </Form>
        </Content>
      </Container>
		)
	}
}

export default DetailScreen