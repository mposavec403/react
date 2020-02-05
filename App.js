import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, View, Text, SectionList } from 'react-native';
import Constants  from 'expo-constants'

import contacts, {compareNames} from './contacts'
import Row from './Row'
import ContactList from './ContactList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

   toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  handleNameChange = name => {
    this.setState({name})
  }

   handlePhoneChange = phone => {
    this.setState({phone})
  }


sort = () => this.setState(prevState => ({contacts: [...prevState.contacts].sort(compareNames)}))



  render() {
    if (this.state.showForm) return <AddContactForm />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort}/>
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && <ContactList contacts = {this.state.contacts} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});