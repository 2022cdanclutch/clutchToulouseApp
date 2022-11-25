import { StyleSheet, Text, View } from 'react-native'

type Props = {}

export default function Agenda (props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agenda</Text>
      <Text style={styles.comming_soon}>Bientôt dispo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8BC43',
    marginBottom: 60
  },
  text: {
    fontFamily: 'Poppins-SemiBoldItalic',
    textTransform: 'uppercase',
    fontSize: 40
  },
  comming_soon: {
    fontFamily: 'Poppins-SemiBoldItalic',
    textTransform: 'lowercase',
    fontSize: 20
  }
})
