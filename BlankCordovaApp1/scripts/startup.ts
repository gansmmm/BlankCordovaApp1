import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

//// Попробуйте загрузить код, определяемый платформой, из папки /merges.
//// Дополнительные сведения по адресу: http://taco.visualstudio.com/ru-ru/docs/configure-app/#Content.
//require(["./platformOverrides"],
//    () => Application.initialize(),
//    () => Application.initialize());

window.onload = () => {
    Application.initialize();
}