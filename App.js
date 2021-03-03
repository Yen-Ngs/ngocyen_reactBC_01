import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import BaiTapLayout from './BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './StateReact/DemoState';
import BaiTapChonXe from './StateReact/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRender  from './RenderWithMap/BaiTapRender';
import DemoProps from './Props/DemoProps'
import DemoQLSP from './Props/DemoQLSP/DemoQLSP';
// import moduleName from './DemoRedux/BTGioHangRedux'
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';
import BTXucXac from './DemoRedux/BTGioHangRedux/BTGameXucXac/BTXucXac';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRender/> */}
      {/* <DemoProps/> */}
      {/* <DemoQLSP/> */}
      {/* <BTGioHangRedux /> */}
      <BTXucXac/>
    </div>
  );
}

export default App;
