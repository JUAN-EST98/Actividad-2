import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        
      </View>

      <View style={styles.middle} />

      <View style={styles.grid}>
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  header: {
    width: 330, 
    height: 100, 
    backgroundColor: 'green',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
    marginVertical: 10, 
  },
  box: {
    flex: 1,  
    height: 120, 
    backgroundColor: 'black',
    marginHorizontal: 5, 
    borderRadius: 15,
  },
  middle: {
    width: 330,
    height: 60,  
    backgroundColor: 'maroon',
    borderRadius: 15,
    marginVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 330,
  },
  smallBox: {
    width: 100,  
    height: 80,  
    backgroundColor: 'blue',
    marginBottom: 10,
    borderRadius: 15,
  },
});

