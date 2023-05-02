import React from 'react'
import {TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconUrl}
      style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn