                              Конспект по Wabpack

1. создаем Wabpack.Wabpack Основные файлы:
webpack.config.js - состоит из констант, их много они отвечают за всю логику
2. package.json - здесь название модулей которые подгрузятся при инстале нод модулей (npm i)
здесь ключевое слово start - благодаря ему включается Wabpack (npm start)
3. Важно создаватаь допольнительные файлы по жс scss и штмл, так как в основных файлах уже должна будет
загружатся готовая работа. 

Для файлоd JS (К основным файлам идет присоединение от черноdjго файла )
в основном прописуем ( import {имя функции,имя функции...} from './имя черновика.js';)
в черновом прописуем (export default имя функции) или (export {имя функции, имя функции});

// ==Тут прописовать линки между файлам ставить скрипты не нужно!!!!!!!!!!важно, только экспорт импорт

Для того чтобы стили в SCSS были видны в браузере нужно сделать следующие шаги:
3.1 подключаем в файле-черновике (import '../saas/style.scss');
3.2 вызываем елемент штмл с которым будем работать (const cardBox = document.querySelector (".cardBox"))
3,3  экспортируем линr в основной js (import cardBox from './st.scss');

4. Важно создать (если есть то прописать все что нужно) файл gitignore при пуше на гит чтобы вся нода не пушилась
(.idea/
node_modules/
public/*.css
public/*.js)

5. (npm i) - Обязательно делать на одном уровне с package.json
6. GIT включаем на одном уровне где package.json 