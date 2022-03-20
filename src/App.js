import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import DeviceDetails from './components/Details/DeviceDetails';
import Watch from './components/watch/Watch';
import Tablet from './components/tablet/Tablet';

function App() {
  return (
    <div className="App">
      <Device name="Iphone" price="100000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
