import { useEffect, useState } from "react";
import './assets/style/style.scss'
import qr from './assets/images/qr-code.png'

const App = () => {

  const [bannerClass,setBannerClass] = useState('banner')

  useEffect(()=>{
    setTimeout(()=>{
      setBannerClass(`${bannerClass} apperance`)
    },5000)
  },[])

  

  return (
    <div className="container">
      <div className="promo">
        <div className={bannerClass}>
          <h1>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО<br />МАЛЫША!<br />ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
          <img src={qr} alt="qr-code" width="126" height="126"/>
          <h2>Сканируйте QR-код<br />или нажмите ОК</h2>
          <button type="button">OK</button>
        </div>
      </div>
    </div>
  );
}
 
export default App;