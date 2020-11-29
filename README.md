# Mobs Project

[Видеопрезентация проекта](https://www.youtube.com/watch?v=1YHSzK1BT7E&t=1800s&ab_channel=ElbrusCodingBootcamp)

MOBS — карта-путеводитель по скрытым местам Москвы. Чтобы открыть новые места на карте, нужно посетить уже доступные бары и рестораны, или попросить друга прислать приглашение. 

Наше приложение поможет Вам:
Узнать «секретные места», куда можно забрести разве что в поисках МФЦ или ремонта обуви.
Найти локации, которые Вы вряд ли встретите на KudaGo или TripAdvisor.

**Список технологий, которые использовались при разработке:**

Node.js
React
Redux
Redux Saga
Redux Toolkit
React Router
Yandex Maps
MongoDB
ExpressJS

**Порядок запуска:**
открыть в терминале каталог server (cd server/) и набрать команду **npm i**
скопировать файл .env.example, переименовать его в .env:
PORT=3000
DB=mongodb+srv://Mobs:202020@cluster0.cjbm5.mongodb.net/Mobs?retryWrites=true&w=majority
SESSION_SECRET=bb2d22249e41717ea591d63ec4fef82c244fcd63630738dd35d3448c500a86c59e38f7b619845fb6d04f3f47721d6a53affd9c463baea0f14906e89f61ecdf5b
набрать команду **npm start**

открыть новую копию терминала, перейти в папку client (cd client/) и набрать команду **npm i**
набрать команду **npm start**
