import React from 'react'
import PropTypes from 'prop-types'
import Text from './TextIcon.styles'

const TextIcon = ({ icon, text }) => (
  <Text gutterBottom variant="body1">
    {icon} <span>{text}</span>
  </Text>
)

TextIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextIcon
