import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  alan1: {
    width: windowWidth * 1,
    height: windowWidth * 0.98,
    backgroundColor: '#FFAC2A',
    borderBottomLeftRadius: 123,
    borderBottomRightRadius: 123,
  },
  alan1Durum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  iconBack: {
    width: 28,
    height: 23,
    tintColor: 'white',
    justifyContent: 'flex-start',
  },
  text1: {
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
  },
  iconMore: {
    width: 28,
    height: 23,
    tintColor: 'white',
    marginTop: 10,
    marginRight: 12,
  },
  dilText: {
    fontSize: 37,
    fontWeight: 'bold',
    marginTop: 76,
    color: 'white',
    marginLeft: 16,
  },
  secimAlani: {
    padding: 13,
    width: 154,
    borderRadius: 26,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 23,
  },
  secimAlaniText: {
    color: '#FFAC2A',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },
  alanDaire1: {
    borderRadius: 34,
    width: 25,
    padding: 37,
    backgroundColor: '#FEB829',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 19,
    marginRight: 38,
  },
  alan3: {
    width: windowWidth * 0.47,
    height: windowWidth * 0.35,
    borderRadius: 14,
    marginTop: 21,
    marginLeft: 12,
    backgroundColor: 'white',
  },
  alan3Daire2:{
    padding:29,
    width:23,
    borderRadius:27,
    backgroundColor:'grey',
    alignSelf:'center',
    marginTop:18,

  },
  alan3Daire2Text:{
    fontSize:15,
    fontWeight:'400',
    color:'black',
    alignSelf:'center',
    marginTop:11,
  }
});
