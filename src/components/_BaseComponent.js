import React, {Component} from 'react';
import Statik from '../sabitler/Statik';
//çalışmıyooooorrr
class _BaseComponent extends Component {

  genislikAyarla(size) {
    var oran = (size * 100) / Statik.TASARIM_WIDHT / 100;
    var responsiveSize = Statik.CIHAZ_WIDHT * oran;

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

  yukseklikAyarla(size) {
    var oran = (size * 100) / Statik.TASARIM_HEIGTH / 100;
    var responsiveSize = oran * Statik.CIHAZ_HEIGTH;

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

export default _BaseComponent;
