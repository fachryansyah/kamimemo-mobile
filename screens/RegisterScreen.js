import React, {Component} from "react"
import {View, TouchableOpacity} from "react-native"
import { 
  Button,
  Icon,
  Form,
  Item,
  Input,
  Toast,
  Text,
} from "native-base"

class RegisterScreen extends Component {
  render(){
    return(
      <View style={{ flex:1, alignItems: "center", justifyContent: "center", paddingRight: 12, paddingLeft: 12 }}>
        <Text style={{ fontSize: 24, color: "#2E3436" }}>Register to </Text>
        <Text style={{ fontSize: 36, color: "#F88278", marginBottom: 32, fontWeight: "bold" }}>Kamimemo</Text>

        <Item rounded>
          <Icon active type="AntDesign" name='user' style={{ color: "#F88278" }} />
          <Input placeholder='Jhon Doe'/>
        </Item>
        <Item rounded style={{ marginTop: 12 }}>
          <Icon active type="MaterialIcons" name='email' style={{ color: "#F88278" }} />
          <Input placeholder='jhondoe1337@email.com'/>
        </Item>
        <Item rounded style={{ marginTop: 12 }}>
          <Icon active type="MaterialCommunityIcons" name='onepassword' style={{ color: "#F88278" }} />
          <Input placeholder='*******'/>
        </Item>
        <Button rounded block style={{ marginTop: 24, backgroundColor: "#F88278" }}>
          <Text style={{ color: "#fff" }}>Sign In</Text>
        </Button>
        
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>don't have account? </Text>
          <TouchableOpacity onPress={() => alert("REgister")}>
            <View>
              <Text style={{ color: "#F88278" }}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default RegisterScreen