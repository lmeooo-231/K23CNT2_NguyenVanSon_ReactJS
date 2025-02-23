import NvsClassComp from "./components/NvsClassComp";
import NvsFuncComp from "./components/NvsFuncComp";
import NvsFuncComp1 from "./components/NvsFuncComp1";
function NvsApp() {
  // object
  const users = {
    fullname:'Nguyễn Văn Sơn',
    age:20,
    phone:"0123456789"
  }
  return (
    <div className="container border mt-3">
      <h1>demo - props - state</h1>
      <hr/>
      <div className='alert alert-danger'>
          <NvsFuncComp name="Sơn Nguyễn" addres="Hà Nội" company = "devmaster" />
          <hr/>
      </div>
      <div className="alert alert-info">
        <NvsFuncComp1 renderinfo={user}/>
        <NvsClassComp/>
        {/*chuyển dữ liệu từ app -> xuống NvsClassComp */}
        <NvsClassComp renderName="K23CNT2" renderUsers={users}/>
      </div>
    </div>
  );
}

export default NvsApp;
