/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image ,StyleSheet} from 'react-native';

const { width, height } = Dimensions.get("window");

class Form extends Component {
    render() {
        return (
            // bu kod aşağıdaki ile aynı width ve height değişken isimlerinde aynı kullanım olduğundan eşlemeye gerek yok  
            //    <ImageBackground style={{width: width, height :  height}} source={require('../img/bg.png')}></ImageBackground>
            <ImageBackground style={{ width, height, alignItems: "center", justifyContent: "center" }} source={require('../img/bg.png')}>
                <Image source={require("../img/logo.png")}>

                </Image>

<View style={styles.buton1}>
    <Text>buton 1</Text>
<Image source={require("../img/button.png")}>

                </Image>
</View>

            </ImageBackground>

            //    <View>
            //         <Text>merhaba burası form aaaa</Text>
            //    </View>

        );
    }
}


const styles = StyleSheet.create({
    buton1: {
      marginTop:10,
      borderRadius:10,
      width:200,
      height:30,
      backgroundColor:'white',

    },
  });

export default Form;