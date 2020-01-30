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



}

export default Statik;
