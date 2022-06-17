import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 練習一
/*
root.render(
  <div>
    <App/>
  </div>
);
*/

// 練習二
/*
const getValue=(event)=>{
  console.log(event.target.value)
}
root.render(
  <div>按下以取得數值 
    <button value={true} onClick={getValue}>按下以取得數值 </button>
  </div>
);
*/

// 練習三
/*
ReactDOM.render(
  <div>按下以取得數值 
    <button value={true} onClick={getValue}>按下以取得數值 </button>
  </div>,
  document.getElementById('root')
);
*/

// 練習四
/*
function Progress(){
  const barWidth="50%";
  return(
      <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}
root.render(
  <div>
      <Progress/>
  </div>
);
*/

// 練習五
/*
ReactDOM.render(
  <div>
      <App name="我的名字"/>
      <div id="show-area"></div> 
  </div>,
  document.getElementById('root')
);
*/

// 練習六
ReactDOM.render(
  <div>
      <App> 在index.js中設定文字 </App>
  </div>
);

reportWebVitals();
