import React from 'react'
import {FlatList, Text,ListItem} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

// item: {name: String, phone: String, key: Number}
// renderItem = (obj) => <Row name: {obj.item.name} phone = {obj.item.phone}} />
const renderItem = (obj) => <Row {...(obj.item)} />


const ContactList = props => {
 


 return(
  <FlatList
   // renderItem = {renderItem}
      renderItem={({obj}) => <Text title={obj.title} />}

  />
 )
}


ContactList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactList