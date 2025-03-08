import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';

const index = () => {
  return (
    <View>
      <View style={style.durum1}>
        <Image style={style.iconMore} source={icons.more}></Image>
        <View style={style.durum2}>
          <Image style={style.iconFlag} source={icons.unitedkingdom}></Image>
          <Text style={style.text1}>ENGLİSH</Text>
        </View>
      </View>
      <View style={style.alan2}>
        <View style={style.profil1}></View>
        <View>
          <Text style={style.text1}>Martha Stewart</Text>
          <Text style={style.text2}>United Kıngdom</Text>
        </View>
      </View>
      <View>
        <Text style={style.text3}>Welcome Back!</Text>
      </View>
      <View>
        <Image style={style.dersicon} source={icons.ders}></Image>
      </View>
      <View>
        <Text style={style.text4}>Your courses</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', gap: 14, marginTop: 14}}></View>
        <View style={style.alan3}>
          <Text style={style.alan1Text}>Spanish</Text>
          <Text style={style.alan1Text2}>Begginer</Text>
          <View style={style.alanDaire1}></View>
        </View>
        <View style={style.alan4}>
          <Text style={style.alan1Text}>İtaliano</Text>
          <Text style={style.alan1Text2}>Begginer</Text>
          <View style={style.alanDaire2}></View>
        </View>
        <View style={style.alan5}>
          <Text style={style.alan1Text}>ENGLİSH</Text>
          <Text style={style.alan1Text2}>Begginer</Text>
          <View style={style.alanDaire3}>

          </View>
        </View>
        <View style={style.alan6}>
          <Text style={style.alan1Text}>ENGLİSH</Text>
          <Text style={style.alan1Text2}>Begginer</Text>
          <View style={style.alanDaire4}>
            <Text style={style.sayı}>45</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
