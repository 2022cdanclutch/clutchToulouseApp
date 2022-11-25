import { StyleSheet, Text, View } from 'react-native'

type Props = {}

export default function Map (props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA4E74',
    marginBottom: 60
  },
  text: {
    fontFamily: 'Poppins-SemiBoldItalic',
    textTransform: 'uppercase',
    fontSize: 40,
    color: '#ff0000'
  }
})
