import React from 'react'
import PropsTypes from 'prop-types'
import './style.css'

const MoiveCard = (props) => {
  return (<div className='moiveCard'>
    <h3>{props.title}</h3>
    <span>{props.desc}</span>
  </div>)
}

MoiveCard.propsTypes = {
  title: PropsTypes.string.isRequired,
  desc: PropsTypes.string.isRequired
}

MoiveCard.defaultProps = {
  title: 'default title',
  desc: 'default desc'
}
export default MoiveCard
