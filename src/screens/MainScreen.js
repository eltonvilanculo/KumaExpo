import React from 'react';
import { StyleSheet ,View,Text , ScrollView} from 'react-native';
import { ListItem  } from 'react-native-elements'
import { Header ,Item ,Icon , Input, Content} from "native-base";



export default class MainScreen  extends React.Component{
 wordResultAux =[] ; 
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
            isLoading:false,
            value:''
        })
        this.wordResultAux = data ; 
        
    } catch(error){
       
        console.log('FETCHERROR', error)
    }
        
       }

       handleIput=(e)=>{
        
        //    console.log('writing',e)
           this.setState({value:e})
           this.setState({data:this.checkWords(e)})
           console.log('dataList -> ' ,this.state.wordList)
        
        //   console.log('result search ->',this.checkWords(e)) 
    
        }
    
        checkWords(word){
    
            // const array =  this.state.wordList ; 
            // const array =  ['a' ,'asas' , 'vddd' , 'www' , 'ssss' , 'wert'] ; 
    
            return this.wordResultAux.filter(searchResut=>searchResut.port.toLowerCase().indexOf(word.toLowerCase()) > -1)
    
        }

        render(){
        const {data ,isLoading} = this.state ; 
      
       if(isLoading){
         console.log('Loading...')
       }
        return(

           
            <View style={styles.container}>
        

            <Header searchBar rounded style={styles.Style}>
                               
                                  <Item style={styles.InputSearch}>
                                      <Icon name="ios-search" />
                                      <Input placeholder="Pesquisar" onChangeText={this.handleIput} value={this.state.value} />
                                  </Item>
                               
                         
            </Header>
      
            <ScrollView>
        {data?data.map(item=>(
        <DataItem key={item.id} pt={item.port} rng={item.ronga}  onPress={()=>this.props.navigation.navigate('DetailScreen' , {data:item})}/>
        )):<Text>hhh</Text>}  
        </ScrollView>
            </View>
            
        )
    }
}


const DataItem = ({id,pt , rng ,onPress})=>(
    <ListItem key={id} bottomDivider onPress={onPress}>
          
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