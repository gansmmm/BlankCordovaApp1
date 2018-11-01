"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application = require("./application");
//// Попробуйте загрузить код, определяемый платформой, из папки /merges.
//// Дополнительные сведения по адресу: http://taco.visualstudio.com/ru-ru/docs/configure-app/#Content.
//require(["./platformOverrides"],
//    () => Application.initialize(),
//    () => Application.initialize());
window.onload = function () {
    Application.initialize();
};
//# sourceMappingURL=startup.js.map