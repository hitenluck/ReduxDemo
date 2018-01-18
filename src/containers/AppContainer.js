import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect } from 'react-redux'
import {ActionCreators} from '../actions'
import {bindActionCreators} from  'redux'
class AppContainer extends Component{
    constructor(props){
        super(props);

    }
    addMotivation(){
        this.props.addMotivation()

    }
    subMotivation(){
        this.props.subMotivation()

    }
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                 <Text>{this.props.motivationCount}</Text>
                <TouchableOpacity style={{height:30,width:160,borderWidth:1,justifyContent: 'center',
                  alignItems: 'center'
                }} onPress={()=>{this.addMotivation()}}>
                    <Text>add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{height:30,width:160,borderWidth:1,justifyContent: 'center',
                  alignItems: 'center'
                }} onPress={()=>{this.subMotivation()}}>
                    <Text>sub</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch);
}
export default connect((state)=>{return{motivationCount:state.motivationCount}},mapDispatchToProps)(AppContainer);
