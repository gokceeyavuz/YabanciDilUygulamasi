import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';

const index = () => {
  return (
    <View>
      <View style={style.alan1}>
        <View style={style.alan1Durum}>
          <Image style={style.iconBack} source={icons.back}></Image>
          <Text style={style.text1}>Lessons</Text>
          <Image style={style.iconMore} source={icons.more}></Image>
        </View>
        <View>
          <Text style={style.dilText}> Transalte these phrases to english</Text>
        </View>
        <View style={style.alan4}>
          <Text style={style.dilTex2}> Buenes noches como estuvo su dia?</Text>
        </View>
        <View style={style.durum45}>
          <View style={style.daire1}></View>
          <View style={style.daire2}></View>
          <View style={style.daire2}></View>
          <View style={style.daire2}></View>
        </View>
        <View style={style.alanAnswer}>
          <TextInput style={style.alanAnswerText}>Your Answer...</TextInput>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
