import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de conversão de moedas', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});