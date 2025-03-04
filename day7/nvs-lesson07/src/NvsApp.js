import React, { Component } from 'react';
import NvsLoginControl from './components/NvsLoginControl';
import NvsRenderList from './components/NvsRenderList';
import NvsRenderListStudent from './components/NvsRenderListStudent';
import NvsRenderListProduct from './components/NvsRenderListProducts';

class NvsApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Nguyễn Văn Sơn - Render condition, List key</h1>
          <hr/>
          <NvsLoginControl/>

          <NvsRenderList/>

          <NvsRenderListStudent/>

          <NvsRenderListProduct/>
      </div>
    );
  }
}

export default NvsApp;