import React from 'react';
import { StyleSheet ,View,Text , ScrollView} from 'react-native';
import { ListItem  } from 'react-native-elements'
import { Header ,Item ,Icon , Input, Content} from "native-base";



export default class MainScreen  extends React.Component{
constructor(props){
    super(props)
    this.state = {
        data: [] ,
        isLoading:true

    }

}
  
     async  componentDidMount(){

        try{
        const response =  await fetch('https://api.npoint.io/bce18030bdcecac96f0d');
        const data = await response.json()
        this.setState({
            data:data , 
            isLoading:false
        })
    } catch(error){
        console.log('FETCHERROR', error)
    }
        
       }

    



    render(){
        const {data ,isLoading} = this.state ; 
      
       
        return(

           
            <View style={styles.container}>
        

            <Header searchBar rounded style={styles.Style}>
                               
                                  <Item style={styles.InputSearch}>
                                      <Icon name="ios-search" />
                                      <Input placeholder="Pesquisar" />
                                  </Item>
                               
                         
            </Header>
      
            <ScrollView>
        {data?data.map(item=>(<DataItem key={item.id} pt={item.port} rng={item.ronga} />)):<Text>hhh</Text>}  
        </ScrollView>
            </View>
            
        )
    }
}


const DataItem = ({id,pt , rng })=>(
    <ListItem key={id} bottomDivider>
          
    <ListItem.Content>
<ListItem.Title>{pt}</ListItem.Title>
      
<ListItem.Subtitle>{rng}</ListItem.Subtitle>
   
    </ListItem.Content>
   
    <ListItem.Chevron />
    
    </ListItem>

)

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