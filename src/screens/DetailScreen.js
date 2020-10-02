import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native';



export default class DetailScreen extends React.Component{



    render() {
        // console.log(this.props.navigation.getParam('possibleFriends', 'defaultValue'))
      const word = this.props.route.params  ; 
        return(

            <View>
                <Text>{JSON.stringify(word)}</Text>
            </View>

        )
    }

}

