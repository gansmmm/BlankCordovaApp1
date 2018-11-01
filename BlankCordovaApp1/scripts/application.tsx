// Основные сведения о пустом шаблоне см. в следующей документации:
// http://go.microsoft.com/fwlink/?LinkID=397705
// Для отладки кода на странице загрузите его в cordova-simulate либо в эмулятор или на устройство Android: запустите приложение, задайте точки останова. 
// , а затем запустите "window.location.reload()" в консоли JavaScript.
"use strict";
import * as ReactDOM from "react-dom";
import AppMap from "./appMap";
import React = require("react");


export function initialize(): void {
    document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady(): void {
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
    navigator.geolocation.getCurrentPosition(x => console.log(JSON.stringify(x.coords)));
    //// TODO: Платформа Cordova загружена. Выполните здесь инициализацию, которая требуется Cordova.
    //var parentElement = document.getElementById('deviceready');
    //var listeningElement = parentElement.querySelector('.listening');
    //var receivedElement = parentElement.querySelector('.received');
    //listeningElement.setAttribute('style', 'display:none;');
    //receivedElement.setAttribute('style', 'display:block;');

    ReactDOM.render(<App />, document.getElementById("app"));
}

function onPause(): void {
    // TODO: Это приложение приостановлено. Сохраните здесь состояние приложения.
}

function onResume(): void {
    // TODO: Это приложение активировано повторно. Восстановите здесь состояние приложения.
}

class App extends React.Component {
    render = () =>
        <div style={{ width: "100%", "height": "100%" }}>
            <AppMap style={{ width: "100%", "height": "100%" }} />
        </div>;
}