import { 
  branco, 
  preto, 
  laranja, 
  azulA, 
  azulB, 
  azulPastelA, 
  azulPastelB, 
  azulPastelC
 } from './variables';

export const lightTheme = {
  body: azulPastelC,
  bgcCard: azulPastelB,
  colorFontCard: preto,
  btnCard: azulPastelA,
  colorBtnCard: branco,

  bgcModal: azulPastelC,
  bgcStatus: azulA,
};


export const darkTheme = {
  body: azulA,
  bgcCard: azulB,
  colorFontCard: branco,
  btnCard: laranja,
  colorBtnCard: azulA,

  bgcModal: azulA,
  bgcStatus: azulB,
};