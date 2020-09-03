import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import Map from './view/Mpa'
import Location from './view/Location'

const { width } = Dimensions.get('window')

class App extends React.PureComponent {
  state = {
    menu: [{ id: 1, type: 1, name: '位置' }, { id: 2, type: 2, name: '地图' }],
    type: 1,
  }
  swtchTab = (type) => {
    this.setState({ type })
  }
  render() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <View style={styles.menuBox}>
          {this.state.menu.map(m => (
            <TouchableOpacity
              style={styles.menuItem}
              key={m.id}
              activeOpacity={1}
              onPress={() => this.swtchTab(m.type)}
            >
              <Text style={[styles.menuText, this.state.type === m.type ? styles.acMenuText : null]}>{m.name}</Text>
              <View style={[styles.line, this.state.type === m.type ? styles.AcLine : null]} />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          {this.state.type === 1 ? <Location/> : <Map/>}
        </View>
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  menuBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    justifyContent: 'space-between'
  },
  menuItem: {
    paddingTop: 8,
    paddingBottom: 4,
    width: (width/2),
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingVertical: px2dp(8)
  },
  menuText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  },
  acMenuText: {
    color: '#000',
    fontWeight: '600'
  },
  line: {
    marginTop: 6,
    width: 32,
    height: 2,
    borderRadius: 4
  },
  AcLine: {
    backgroundColor: '#000'
  },
})