// Основные сведения о пустом шаблоне см. в следующей документации:
// http://go.microsoft.com/fwlink/?LinkID=397705
// Для отладки кода на странице загрузите его в cordova-simulate либо в эмулятор или на устройство Android: запустите приложение, задайте точки останова. 
// , а затем запустите "window.location.reload()" в консоли JavaScript.
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var appMap_1 = require("./appMap");
var React = require("react");
function initialize() {
    document.addEventListener('deviceready', onDeviceReady, false);
}
exports.initialize = initialize;
function onDeviceReady() {
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
    navigator.geolocation.getCurrentPosition(function (x) { return console.log(JSON.stringify(x.coords)); });
    //// TODO: Платформа Cordova загружена. Выполните здесь инициализацию, которая требуется Cordova.
    //var parentElement = document.getElementById('deviceready');
    //var listeningElement = parentElement.querySelector('.listening');
    //var receivedElement = parentElement.querySelector('.received');
    //listeningElement.setAttribute('style', 'display:none;');
    //receivedElement.setAttribute('style', 'display:block;');
    ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
}
function onPause() {
    // TODO: Это приложение приостановлено. Сохраните здесь состояние приложения.
}
function onResume() {
    // TODO: Это приложение активировано повторно. Восстановите здесь состояние приложения.
}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            return React.createElement("div", { style: { width: "100%", "height": "100%" } },
                React.createElement(appMap_1.default, { style: { width: "100%", "height": "100%" } }));
        };
        return _this;
    }
    return App;
}(React.Component));
//# sourceMappingURL=application.js.map