# Brussels Rooftop Movie 🍿👀🎫

A website for the fictionnal cinema Brussels Rooftop Movies 🍿

## 🔗 Link

[https://https://brm.lou-va.com/](https://brm.lou-va.com/)

## Getting Started

The client and server run independently. The client connects to the backend via localhost. You can edit the server's URL in `/client/.env`.

### ⚙️ Prerequisites

Ensure you have `Node.js` and `npm` installed on your machine to run this project locally.

### 💾 Installation

#### 1. Clone the Repository

```sh
git clone git@github.com:louis-va/mern-template.git
```

#### 2. Install client & server dependencies

```sh
cd client/
npm install

cd server/
npm install
```

#### 3. Add `.env` variables

##### `client/.env`

```ini
VITE_API_URL='' # URL of the server. By default: http://localhost:8000
```

##### `server/.env`

```ini
PORT= # Port the server is listening at. By default 8000
DATABASE_URL='' # URL of your mongo database
JWT_SECRET='' # Secure string of characters.
COOKIE_SECRET='' # Secure string of characters.
TMDB_API_KEY='' # TMDB API Key. https://www.themoviedb.org/settings/api
RESEND_API_KEY='' # Resend API Key. https://resend.com/api-keys
```

### 🚀 Execution

#### Run client & server

```sh
cd client/
npm run dev

cd server/
npm run dev
```

### 🚚 Production

#### Build and Run Client & Server

```sh
cd client/
npm run build
npm run preview

cd server/
npm run build
npm run start
```

#### Docker Compose

You can also run the server with docker on port 8000.

```sh
docker compose up -d
```

#### Deployment

During deployment, in `/client/.env.production`, set `VITE_API_URL` as your database URL. Additionally, configure the `allowedOrigins` in `/server/index.ts` to allow your client's URL to connect to the server.

### 🌐 Ports

**Client**: http://localhost:3000 <br>
**Server**: http://localhost:8000

You can modify the port values in `/server/.env` and `/client/vite.config.ts`. If you change the client's port, remember to update `allowedOrigins` in `/server/index.ts` with the new port.

## 👀 Model

![Screen shot version desktop header](client/src/assets/img/maquette-1.jpg)
![Screen shot version desktop liste films](client/src/assets/img/maquette-2.jpg)
![Screen shot version desktop authentification](client/src/assets/img/maquette-3.jpg)
![Screen shot version page film ](client/src/assets/img/maquette-4.jpg)
![Screen shot exemples desktop reservation](client/src/assets/img/maquette-5.jpg)
![Screen shot exemples desktop footer](client/src/assets/img/maquette-6.jpg)
