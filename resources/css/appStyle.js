import { StyleSheet } from "react-native";

export const appStyles=StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
  	},
  	texto:{
  		color:'red',
  		fontSize:20,
        fontWeight:'bold'
  	},
  	titulo:{
  		color:'#3498db',
  		fontSize:15
  	},
    logo:{
        width:200,
        height:200
    },
    btn:{
    	padding:50
    }
});