import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { router } from 'expo-router'

interface Props {
  label: string
}

const handlePress = (): void => {
  router.push('/memo/list')
}

const Button = (props: Props): JSX.Element => {
  const { label } = props
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
