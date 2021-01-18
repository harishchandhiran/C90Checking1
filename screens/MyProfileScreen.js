import * as React from 'react'
import { View,Text,TextInput,TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

export default class MyProfileScreen extends React.Component {
    render(){
        return (
            <View>
                <Header 
                   centerComponent={{ text: "My Profile", style: { color: '#ADD3D0', fontSize:26,fontWeight:"600", fontStyle: 'italic' } }}
                   backgroundColor="#153250" />
            </View>
        )
    }
}