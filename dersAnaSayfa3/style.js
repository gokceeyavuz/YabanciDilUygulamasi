import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  alan1: {
    width: windowWidth * 1,
    height: windowWidth * 0.98,
    backgroundColor: '#1791DE',
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
  alan4: {
    width: windowWidth * 0.92,
    height: windowWidth * 0.6,
    borderRadius: 17,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 65,
  },
  dilTex2: {
    fontSize: 45,
    fontWeight: '300',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'black',
    marginTop: 37,
  },
  durum45: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 13,
    justifyContent: 'center',
  },
  daire1: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#1791DE',
  },
  daire2: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  alanAnswer: {
    alignSelf: 'center',
    width: windowWidth * 0.92,
    height: windowWidth * 0.4,
    backgroundColor: 'white',
    borderRadius: 13,
    marginTop: 14,
  },
  alanAnswerText: {
    color: 'grey',
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    margin:14,
  },
});
