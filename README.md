## Подготовка:
Необходимо глобально установить следующие пакеты: 
- webpack
- eslint
- json-server
- nodemon

делается это командой  
sudo npm install -g ИМЯ_ПАКЕТА

Также локально необходимо установить модули, находясь в директории проекта
- npm install 

## Для загрузки приложения в браузере  запустить 2 скрипта :
1) npm run server  (сервер аутентификации)
2) npm run start   (SPA в браузере)
// toDo  надо в один скрипт объединить

## По желанию
Запуск сервера с фейковыми данными страницы, просто чтобы увидеть рабочий сервер, но страницу на фронте не сделал для этих данных
- npm run server2


## Баг
Баг с версией less версией 3.0.0 при внедрении ant-design, сделал даунгрейд версии модуля
https://github.com/ant-design/ant-design/issues/7927
