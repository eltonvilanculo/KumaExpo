import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    
} from 'react-native';


import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text ,Card } from '@ui-kitten/components';
import { Left } from 'native-base';




export default class DetailScreen extends React.Component{

    state = {
        word: this.props.route.params.data 
    }


    render() {
        // console.log(this.props.navigation.getParam('possibleFriends', 'defaultValue'))
      const {word} = this.state ; 
      console.log('data->' ,word)
        return(
         
                <ApplicationProvider {...eva} theme={eva.light}>
                    <MainContentScreen meaning={word.ronga} original={word.port}/>
      
                </ApplicationProvider>

        )
    }

}

const Header = ({original , meaning}) => (
    <View>
      <Text category='h6'>{original}</Text>
<Text category='s1'>Em Ronga  , {meaning}</Text>
    </View>
  )

const MainContentScreen = (props)=>(

  
  
    <Card style={styles.card} >
  
  <Header original={props.original} meaning={props.meaning} />
 

      <Text style={{marginTop:9}}>
    
        Popularmente conhecida como noite ,  período tarde do dia . usado principalmente na zona sul . 
        Ex: Hi Ussiko Masseve ...

      </Text>

      <Text category='p2'>
        Por Elton Vilanculo : 28/02/2017 18:30 min
      </Text>
    </Card>
) ;

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 1,
      marginLeft:0
   
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
  })