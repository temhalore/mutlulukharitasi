/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Dimensions,StyleSheet } from 'react-native';

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;

class Statik {
   static BASE_URL = 'https://xxxxx';
   static URL_API_SERVER = Statik.BASE_URL + '/api/v2';
   static STATIC_BASEURL = Statik.BASE_URL + '/static';
   static URLSTRING_FAQ = Statik.STATIC_BASEURL + '/FAQ.html';
   static URLSTRING_TOU = Statik.STATIC_BASEURL + '/TOU.html';

   static TASARIM_WIDHT = 375;
   static TASARIM_HEIGTH = 677;

   static CIHAZ_WIDHT = cihazWidth;
   static CIHAZ_HEIGTH = cihazHeight;

 
  
    //gelen style listi birleştirerek döner
    static getStyleBirlestir(styleList) {
      return StyleSheet.flatten(styleList);
    }

    static getResponsiveStyle(styleName,size) {
      var responsiveSize = Statik.yukseklikAyarla(size);
      var newStyle={};

      if (styleName==="height") {
        newStyle = { height: responsiveSize,}; 
      }
      if (styleName==="width") {
        newStyle = { width: responsiveSize,}; 
      }
      if (styleName==="marginBottom") {
        newStyle = { marginBottom: responsiveSize,}; 
      }
      if (styleName==="marginTop") {
        newStyle = { marginTop: responsiveSize,}; 
      }
      if (styleName==="borderWidth") {
        newStyle = { borderWidth: responsiveSize,}; 
      }
     

      // height: 200,
      // width: 150,
      // marginBottom: 280,
      // marginTop: 10,
      // borderWidth: 2,


      return newStyle;
    }
    

    //cihaz yüksekliğini baz alarak hesaplama yapar dikey değerler için kullan
    static yukseklikAyarla(styleName,size) {
      var oran = ((size * 100) / Statik.TASARIM_HEIGTH)/100;
      var responsiveSize = oran  * Statik.CIHAZ_HEIGTH ;
  
      console.log(
        'yukseklikAyarla::: size:',
        size,
        'oran:',
        oran,
        'cihazHeight:',
        Statik.TASARIM_HEIGTH,
        'responsiveSize:',
        responsiveSize,
      );
      return responsiveSize;
       
    }

 //cihaz genişliğini baz alarak hesaplama yapar dikey değerler için kullan
    static genislikAyarla(size) {
      var oran = ((size * 100) / Statik.TASARIM_WIDHT)/100;
      var responsiveSize = (Statik.CIHAZ_WIDHT * oran) ;
  
      console.log(
        'genislikAyarla::: size:',
        size,
        'oran:',
        oran,
        'tasarımWidht:',
        Statik.TASARIM_WIDHT,
        'responsiveSize:',
        responsiveSize,
      );    

      return responsiveSize;
    }
}

export default Statik;
