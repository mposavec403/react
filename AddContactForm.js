import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default class AddContactForm extends React.Component {
  static proTypes = {
    addContact: PropTypes.func, 
  }

state = {
  name: '',
  phone: '',
}

  render(){
    return (
      <View style = {{paddingTop: 20}}>
        <TextInput style = {styles.input} 
        value = {this.state.name}
        onChangeText = {this.handleNameChange} />
        <TextInput style = {styles.input} 
        value = {this.state.phone}
        onChangeText = {this.handleNameChange} 
        keyboardType = 'numeric'
        />
        <Button title = "Add Contact" />
      </View>
    )
  }
}