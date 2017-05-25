import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

let countReducer = (state=0,action) => {//第二步：定义Reducer执行函数
    switch(action.type){
    case "add":
        state += 1; 
        break;
    case "substrat":
        state -=  1;
        break;
    default:
        break
    }
    return state;
}

let store = createStore(countReducer);//第三步：创建Store对象


let addCount = ()=>{//加法操作
    store.dispatch({
        type:"add",
        payload:"每次加1"
    })
}

let subStractCount= () => {//减法操作
   store.dispatch({
        type:"substrat",
        payload:"每次减1"
    })
}


const render = () => {
    ReactDOM.render(//第一步：定义组件
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={addCount} style={{padding:"5px 15px",margin:"0 10px 0 0"}}>+</button>
                <button onClick={subStractCount} style={{padding:"5px 15px",margin:"0 10px 0 0"}}>-</button>
            </div>,
            document.getElementById("redux")
        )    
}

store.subscribe(render)//第四步：创建监听器，监听到状态修改后就重新渲染界面
render()//初始化渲染

