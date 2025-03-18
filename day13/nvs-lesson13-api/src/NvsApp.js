import React from 'react';
import NvsReadApiLocal from './components/NvsReadApiLocal';
import NvsReadMockAPI from './components/NvsReadMockApi';
import NvsCreateMockAPI from './components/NvsCreateMockApi';

export default function NvsApp() {
  return (
    <div>
      <h1>reactjs-api-Nguyễn Văn Sơn</h1>
      <hr/>
      <NvsReadApiLocal/>
      <hr/>
      <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
      <NvsReadMockAPI/>
      <NvsCreateMockAPI/>
    </div>
  );
};

