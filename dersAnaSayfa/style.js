import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  durum1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  iconMore: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    marginLeft: 11,
  },

  durum2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  iconFlag: {
    width: 31,
    height: 31,
  },
  text1: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
    marginTop: 6,
    marginRight: 8,
  },
  alan2: {
    flexDirection: 'row',
    marginTop: 58,
    gap: 47,
  },
  profil1: {
    padding: 25,
    borderRadius: 30,
    backgroundColor: 'black',
    marginLeft: 15,
  },
  text2: {
    fontSize: 13,
    fontWeight: '600',
    color: 'black',
  },
  text3: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 46,
    marginLeft: 15,
  },
  dersicon: {
    width: windowWidth * 0.89,
    height: windowWidth * 0.7,
    borderRadius: 18,
    shadowOpacity: 5,
    shadowOffset: 12,
    alignSelf: 'center',
    margin: 15,
  },
  text4: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 26,
    marginLeft: 10,
  },
  alan3: {
    width: windowWidth * 0.37,
    height: windowWidth * 0.35,
    borderRadius: 14,
    marginTop: 21,
    marginLeft: 12,
    backgroundColor: '#F38D10',
  },
  alan4: {
    width: windowWidth * 0.37,
    height: windowWidth * 0.35,
    borderRadius: 14,
    marginTop: 21,
    marginLeft: 12,
    backgroundColor: '#07C851',
  },
  alan5: {
    width: windowWidth * 0.37,
    height: windowWidth * 0.35,
    borderRadius: 14,
    marginTop: 21,
    marginLeft: 12,
    backgroundColor: '#04A1DB',
  },
  alan6: {
    width: windowWidth * 0.37,
    height: windowWidth * 0.35,
    borderRadius: 14,
    marginTop: 21,
    marginLeft: 12,
    backgroundColor: '#B694F9',
  },
  alan1Text: {
    fontSize: 23,
    fontWeight: '600',
    color: 'white',
    marginTop: 13,
    marginLeft: 12,
  },
  alan1Text2: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    marginLeft: 12,
  },
  alanDaire1: {
    borderRadius: 23,
    width: 25,
    padding: 24,
    backgroundColor: '#FEAC35',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  alanDaire2: {
    borderRadius: 23,
    width: 25,
    padding: 24,
    backgroundColor: '#00CA58',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  alanDaire3: {
    borderRadius: 23,
    width: 25,
    padding: 24,
    backgroundColor: '#08A6DF',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  alanDaire4: {
    borderRadius: 23,
    width: 25,
    padding: 24,
    backgroundColor: '#B694F9',
    borderRightWidth: 2,
    borderRightColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 14,
    marginRight: 14,
  },
  sayı:{
    fontSize:8,
    fontWeight:'600',
    color:'white',
    textAlign:'center',
    alignSelf:'center',
  }
});
