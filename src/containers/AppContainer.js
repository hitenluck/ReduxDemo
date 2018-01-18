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
        this.state={ motivationCount:0}
    }
    addMotivation(){
        this.props.addMotivation()
      
    }
    render(){
        return(
            <View>
                 <Text>{this.state.motivationCount}</Text>
                <TouchableOpacity onPress={()=>{this.addMotivation}}>
                    <Text>add</Text>
                </TouchableOpacity>
           
            </View>
        )
    }
  
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch);  
}
export default connect(()=>{return{}},mapDispatchToProps)(AppContainer); 