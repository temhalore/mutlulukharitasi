/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Dimensions } from 'react-native';


const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;

class Statik {
   static BASE_URL = 'https://xxxxx';
   static URL_API_SERVER = Statik.BASE_URL + '/api/v2';
   static STATIC_BASEURL = Statik.BASE_URL + '/static';
   static URLSTRING_FAQ = Statik.STATIC_BASEURL + '/FAQ.html';
   static URLSTRING_TOU = Statik.STATIC_BASEURL + '/TOU.html';

   static TASARIM_WIDHT = 360;
   static TASARIM_HEIGTH = 480;

   static CIHAZ_WIDHT = cihazWidth;
   static CIHAZ_HEIGTH = cihazHeight;

   static genislikAyarla(size) {
      var oran = (size * 100) / Statik.TASARIM_WIDHT;
      var responsiveSize = (Statik.CIHAZ_WIDHT * oran) / 100;
  
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
  
    static yukseklikAyarla(size) {
      var oran = (size * 100) / Statik.TASARIM_HEIGTH;
      var responsiveSize = (Statik.CIHAZ_HEIGTH * oran) / 100;
  
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

}

export default Statik;
