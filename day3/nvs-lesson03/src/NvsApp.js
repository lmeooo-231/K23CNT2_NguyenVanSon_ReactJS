import NvsjsxExpression from "./components/NvsjsxExpression";
import NvsFunComp from "./components/NvsFuncComp";
import NvsClassComp from "./components/NvsClassComp";
function NvsApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>react js lesson3 - Nguyễn Văn Sơn</h1>

        <NvsjsxExpression />
        <hr/>
        {/*sử dụng function component*/}
        <NvsFunComp/>
        {/*sử dụng class components */}
        <NvsClassComp></NvsClassComp>
    </div>
  );
}

export default NvsApp;
