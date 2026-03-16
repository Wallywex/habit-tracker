import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats page coming soon...</Text>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
        color: 'grey',
    },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})