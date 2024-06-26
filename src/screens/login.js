import React, { useContext, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { color } from '../../bootstrap';
// import OtpInput from '../components/common/otpInput';
// import { validator } from '../validator';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import axios from 'axios';
// import { DOMAIN_URL } from '../constants';
import { AuthContext } from '../../context';
const Login = (props) => {
  const [otpField, setOtpField] = useState(false)
  const [otpValue, setOtpValue] = useState('')
  // input values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile_no, setMobile_no] = useState()


  // const { signIn } = useContext(AuthContext)
  function getOtp() {
    // let a = validator('email','abc@ab.com')
    // console.log(a);
    //TODO: validations on each key here
    let data = {
      name: name,
      mobile_no: mobile_no,
      email: email,
      type: 'Login'
    }
    console.log(data);
    // return;
    // axios.post(DOMAIN_URL + '/getOtp', data).then(res => {
    //   setOtpField(true)
    // }).catch(error => {
    //   // toast.error(<ToasterBody title="OTP Request Failed" body={error.response.data.message} />)
    //   console.log(error);
    // })
  }

  function resendOtp() {
    //TODO: validations on each key here
    let data = {
      name: name,
      mobile_no: mobile_no,
      email: email,
      type: 'resend'
    }
    // axios.post(DOMAIN_URL + '/getOtp', data).then(res => {
    //   // toast.success(<ToasterBody title="OTP Resent" body={'We have resent the otp.'} />)
    // }).catch(error => {
    //   // toast.error(<ToasterBody title="OTP Request Failed" body={error.response.data.message} />)
    //   console.log(error);
    // })
  }

  function onLogin() {
    console.log("Logined");
    //TODO: validations on each key here
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }


    let dateTime = year + '-' + month + '-' + dt;
    let data = {
      name: name,
      mobile_no: mobile_no,
      email: email,
      // first_visit: localStorage.getItem('first_visit'),FIXME: first install date if avaialable
      first_visit: dateTime,
      otp: otpValue
    }
    // console.log(data);
    // axios.post(DOMAIN_URL + '/Login', data).then(response => {
    //   console.log(response);
    //   //set activeuser in asyncStorage
    //   let user = response.data.data;
    //   signIn(user)

    //   // TODO: add toaster
    //   // toast.success(<ToasterBody title="Registration Successful" body={'You have successfully Logined in to Acadmoney.'} />)
    //   // props.dispatch(saveUser(user));
    //   // route.push(location.state.redirectUrl)

    //   // props.dispatch(hideAuthModal())
    //   // if (route.pathname.includes('chapter'))
    //   //     route.reload(window.location.pathname)
    // }).catch(error => {
    //   console.log(error);
    //   if (error.response)
    //     console.log(error.response);
    //   // toast.error(<ToasterBody title="User Registration failed" body={error.response.data.message} />)
    // })
  }
  return (
    <ScrollView style={{backgroundColor:"blue"}}>
      <Text>Open up App. login for grahsti your app!</Text>
      <View style={{ marginTop: 15 }}>
          <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('register') }} >
            <Text style={{ textAlign: 'center' }}>NO User? <Text style={{ fontWeight: '700', color: 'red' }}>Register</Text></Text>
           </TouchableWithoutFeedback>
       </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: 170,
    height: 40,
    resizeMode: 'contain',
  }
});

export default Login