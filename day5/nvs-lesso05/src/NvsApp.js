import React, { Component } from 'react';
import NvsFuncCompEvent1 from './components/NvsFuncCompEvent1';
import NvsClassCompEvent1 from './components/NvsClassCompEvent1';
import NvsFuncCompEventProps from './components/NvsFuncCompEventProps';
import NvsClassCompEventProps from './components/NvsClassCompEventProps';
class NvsApp extends Component {
  render() {
    return(
      <div className='container border mt-3'>
          <h1>K23CNT2 - Nguyễn Văn Sơn - event and form</h1>
          <hr/>
          <div>
            <h2>function component - event</h2>
            <NvsFuncCompEvent1/>
          </div>
          <hr/>
          <div>
            <h2>class  component - event</h2>
            <NvsClassCompEvent1/>
          </div>
          <hr/>
          <div>
            <h2>function component - event,props</h2>
            <NvsFuncCompEventProps nvsRenderName="Nguyễn Văn Sơn"/>
          </div>
          <hr/>
          <div>
            <h2>class component - event,props</h2>
            <NvsClassCompEventProps nvsRenderTitle = "welcome"/>
          </div>
      </div>
    )
  }
}

export default NvsApp;