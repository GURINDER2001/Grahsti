import React, { useContext, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const Register = (props) => {
  return (
    <ScrollView style={{backgroundColor:"red"}}>

    <Text>Open up App. Register for grahsti your app!</Text>
    <View style={{ marginTop: 15 }}>
        <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('login') }} >
          <Text style={{ textAlign: 'center' }}>Already User? <Text style={{ fontWeight: '700', color: 'yellow' }}>Login</Text></Text>
         </TouchableWithoutFeedback>
     </View>
  </ScrollView>
  )
}

export default Register