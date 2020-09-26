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
        console.log('detail',this.props.route.params.data.id)
        return(

            <View>
                <Text>Main Screen</Text>
            </View>

        )
    }

}

