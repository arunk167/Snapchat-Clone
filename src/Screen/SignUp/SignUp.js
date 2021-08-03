import React ,{useState}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonWithLoader from '../../Component/ButtonWithLoader'
import Header from '../../Component/Header'
import TextInputWithLabel from '../../Component/TextInputWithLabel'
import WrapperContainer from '../../Component/WrapperContainer'
import strings from '../../constants/lang'
import colors from '../../styles/colors'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'


const  Login=()=>{
  const [state,setState]=useState
  (
    { 
        isLoading:false,
        firstname:'',
        lastname:'',

    }
  )
   const {firstname,lastname}=state

   const updateState=(data)=>setState((state=>({...state,...data})))
return (
   <WrapperContainer >
     <Header />
     <View style={styles.container}>
       <View>
          <Text style={styles.textStyle}>{strings.WHATS_YOUR_NAME}</Text>
          <TextInputWithLabel 
                value={firstname}
                label={strings.FIRST_NAME}
                onChangeText={(firstname)=>updateState({firstname})}
                labelStyle={styles.labelStyle}
          />
          <TextInputWithLabel 
            value={lastname}
            label={strings.LAST_NAME}
            labelStyle={styles.labelStyle}
            onChangeText={(lastname)=>updateState({lastname})}
        
        />
     <Text style={styles.passwordText}>{strings.TERMS_SERVICES}</Text>
     </View>
     <View style={styles.btncontainer}>
       <ButtonWithLoader
       btnText={strings.SIGNUP}
       btnStyle={styles.btnStyle}
      
     />
     </View>
     </View>
   </WrapperContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:moderateScaleVertical(100),
    justifyContent:'space-between',
    flex:1
   
  },
  textStyle:{
   alignSelf:'center',
   fontSize:moderateScale(22),
   marginVertical:moderateScaleVertical(10)
  },
  passwordText:{
  fontSize:moderateScale(12),
 marginHorizontal:moderateScale(48),
    marginTop:moderateScaleVertical(20),
    color:colors.blackOpacity50
  },
  btnStyle:{
    backgroundColor:colors.blackOpacity20,
    marginHorizontal:moderateScale(52),
    borderRadius:moderateScale(48),
  borderWidth:0 ,
 },
 btncontainer:{
   marginBottom:moderateScaleVertical(20)
 },
 labelStyle:{
     fontSize:moderateScale(12)
 }
 
  
})
export default Login;