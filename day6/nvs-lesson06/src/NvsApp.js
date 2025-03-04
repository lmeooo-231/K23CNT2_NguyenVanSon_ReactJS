import React, { Component } from 'react';
import NvsRenderCondition from './components/NvsRenderCondition';
import NvsRenderList from './components/NvsRenderList';
import NvsRenderListStudent from './components/NvsRenderListStudent';

class NvsApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1>Nguyễn Văn Sơn - Lesson07 - Render condition - Render List Key</h1>
          <NvsRenderCondition />

          <NvsRenderList />

          <NvsRenderListStudent />
      </div>
    );
  }
}

export default NvsApp;