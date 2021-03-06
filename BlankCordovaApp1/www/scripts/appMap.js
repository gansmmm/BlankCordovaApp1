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
var react_1 = require("react");
var React = require("react");
var L = require("leaflet");
var AppMap = /** @class */ (function (_super) {
    __extends(AppMap, _super);
    function AppMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapElement = React.createRef();
        return _this;
    }
    AppMap.prototype.componentDidMount = function () {
        var map = L.map(this.mapElement.current).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };
    AppMap.prototype.render = function () {
        return (React.createElement("div", { style: this.props.style, ref: this.mapElement }));
    };
    return AppMap;
}(react_1.Component));
exports.default = AppMap;
//# sourceMappingURL=appMap.js.map