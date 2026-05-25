# MovieHub

Веб-приложение для поиска, фильтрации и управления избранными фильмами. Построено на React, Redux и Vite.

## 🚀 Функциональность

- 🔍 **Поиск фильмов** - поиск в реальном времени по названиям
- 🎬 **Фильтрация по жанрам** - выбор фильмов по категориям (Экшен, Комедия, Драма, Хоррор, Фантастика)
- ⭐ **Избранное** - добавление/удаление фильмов в избранное
- 📱 **Адаптивный дизайн** - работает на всех устройствах

## 🛠️ Технологический стек

- **React** 19.2.4 - библиотека для UI
- **Vite** 8.0.0 - сборщик проекта
- **Redux Toolkit** 2.12.0 - управление состоянием
- **React Router** 7.15.1 - маршрутизация
- **Axios** 1.16.1 - HTTP клиент
- **React Query** 5.100.14 - управление асинхронными данными
- **ESLint** - проверка кода

## 📋 Требования

- Node.js 16+
- npm или yarn

## ⚙️ Установка

```bash
# Клонируйте репозиторий
git clone <repository-url>

# Перейдите в директорию проекта
cd moviehub

# Установите зависимости
npm install

# Создайте файл .env из .env.example
cp .env.example .env
```

## 🏃 Запуск

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build

# Проверка кода линтером
npm lint

# Превью production сборки
npm run preview
```

## 📁 Структура проекта

```
src/
├── app/                 # Приложение и провайдеры
│   ├── App.jsx
│   ├── providers/       # Redux provider
│   └── store/           # Redux store конфигурация
├── entities/            # Бизнес-сущности
│   └── movie/           # Фильмы
│       ├── model/       # Redux слайс и селекторы
│       ├── movieApi/    # API функции
│       └── ui/          # MovieCard компонент
├── features/            # Функциональность
│   ├── addToFavorites/  # Кнопка добавления в избранное
│   ├── filterByGenre/   # Фильтрация по жанрам
│   └── searchMovie/     # Поиск фильмов
├── pages/               # Страницы
│   ├── HomePage/
│   └── FavoritesPage/
├── shared/              # Общие ресурсы
│   └── api/             # Axios instance
└── widgets/             # Комплексные компоненты
    ├── Header/
    ├── Hero/
    ├── MovieList/
    ├── Sidebar/
    ├── FavoritesMovieList/
    └── FavoritesEmpty/
```

## 🔗 API

Приложение использует MockAPI для демонстрации:
- `GET /movies` - получить список фильмов
- `PUT /movies/:id` - обновить статус избранного

## 📝 Лицензия

MIT

## 👨‍💻 Автор

Azamat Bondiany
