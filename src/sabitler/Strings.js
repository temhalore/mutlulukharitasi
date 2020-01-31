// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export const strings = new LocalizedStrings({
 "en-US":{
    konumunuz:"your location",
    sevdiceginKonumu:"her location",
    seninFotografin:"your photo",
    sevdiceginFotografi : "her photo",
    tarifButton : "get maps create",
    uygulamaPaylas : "share app",
    resmiPaylas : "shareimage",
 },
 tr:{
     konumunuz:"konumunuz str",
     sevdiceginKonumu:"sevdiceğinin konumu",
     seninFotografin:"Senin fotoğrafın",
    sevdiceginFotografi : "sevdiceğinin fotoğrafı",
    tarifButton : "yol tarifi al",
    uygulamaPaylas : "uygulamayı paylaş",
    resmiPaylas : "resmi paylaş",
 },
});