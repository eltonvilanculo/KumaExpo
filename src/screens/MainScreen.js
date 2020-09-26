import React from 'react';
import { StyleSheet ,View} from 'react-native';
import { ListItem  } from 'react-native-elements'
import { Header ,Item ,Icon , Input, Content} from "native-base";



export default class MainScreen  extends React.Component{



    render(){
        
        return(

           
            <View style={styles.container}>
        

            <Header searchBar rounded style={styles.Style}>
                               
                                  <Item style={styles.InputSearch}>
                                      <Icon name="ios-search" />
                                      <Input placeholder="Pesquisar" />
                                  </Item>
                               
                             
            </Header>
          {/* <ListItem key={7777} bottomDivider>
          
          <ListItem.Content>
            <ListItem.Title>Palavra em pt</ListItem.Title>
            <ListItem.Subtitle>Wronga</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          </ListItem> */}
            </View>
        )
    }
}



// export default () => (
//   <ApplicationProvider {...eva} theme={eva.light}>
//     <MainScreen />
//   </ApplicationProvider>
// );


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
     
    },
    logo:{
        
        backgroundColor:'#FAFAFA',
        width:8
    },
    
    InputSearch :{

        backgroundColor:'#FAFAFA'
    },

    headerStyle:{
      
        flex:1,
        padding:48,
        backgroundColor:'#FAFAFA',
        alignContent:'center',
        margin:0
       }
  });