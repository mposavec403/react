import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

// item: {name: String, phone: String, key: Number}
// renderItem = (obj) => <Row name: {obj.item.name} phone = {obj.item.phone}} />
const renderItem = (obj) => <Row {...(obj.item)} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactList = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

    const section = Object.keys(contactsByLetter).sort().map(letter => ({
      title: letter,
      data: contactsByLetter[letter],
    }))

 return(
  <SectionList
    renderItem = {renderItem}
    renderSectionHeader = {renderSectionHeader}
    sections = {section}
  />
 )
}


ContactList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactList