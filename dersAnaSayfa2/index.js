import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';

const index = () => {
  return (
    <View>
      <View style={style.alan1}>
        <View style={style.alan1Durum}>
          <Image style={style.iconBack} source={icons.back}></Image>
          <Text style={style.text1}>Curse</Text>
          <Image style={style.iconMore} source={icons.more}></Image>
        </View>
        <View>
          <Text style={style.dilText}> Spanish</Text>
        </View>
        <View style={style.secimAlani}>
          <Text style={style.secimAlaniText}>Beginner</Text>
        </View>
        <View style={style.alanDaire1}></View>
        <View style={{flexDirection: 'row', gap: 13}}>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 13}}>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 13}}>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
          <View style={style.alan3}>
            <View style={style.alan3Daire2}></View>
            <View>
              <Text style={style.alan3Daire2Text}>Basic</Text>
              <Text
                style={{alignSelf: 'center', fontSize: 8, fontWeight: '400'}}>
                1/2
              </Text>
              <View
                style={{
                  padding: 2,
                  width: 98,
                  borderRadius: 13,
                  alignSelf: 'center',
                  backgroundColor: 'grey',
                  marginTop: 11,
                }}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
