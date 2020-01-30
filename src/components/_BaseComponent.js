import React, {Component} from 'react';
import Statik from '../sabitler/Statik';

class _BaseComponent extends React.Component {
  genislikAyarla(size) {
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

  yukseklikAyarla(size) {
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

export default _BaseComponent;
