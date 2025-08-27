# Excel Analytics

**Analyze Excel Like a Pro**

Excel Analytics is a MERN stack application that allows users to upload Excel files and visualize their data using various chart types, including line charts, bar graphs, and box plots. The project provides a user-friendly interface for analyzing and presenting data visually, making it easier to interpret and understand information.

## 🚀 Live Demo

Try the app here: [http://excelinsights.netlify.app/](http://excelinsights.netlify.app/)

---

## 🖼️ Preview

![Excel Analytics Screenshot](client/public/preview_screenshot.png)
*Home page with login, signup, and feature highlights.*

---

## ✨ Key Features

- **Upload Instantly:** Upload Excel files with a single click and get started right away.
- **Interactive Charting:** Visualize your data with beautiful, interactive charts.
- **Smart Summaries:** Get automatic insights and summaries from your data.
- **User Authentication:** Secure login and signup.
- **Dashboard:** Manage and view all your uploaded data and reports.
- **Profile Management:** Update your user information easily.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Material-UI, Plotly.js, xlsx
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer
- **Other:** CORS, Body-Parser

---

## 📁 Directory Structure

```
excel-analytics/
  client/   # React frontend
  server/   # Express backend
```

---

## 🚦 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

#### 1. Clone the repository

```bash
git clone <repo-url>
cd excel-analytics
```

#### 2. Install dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd ../server
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the `server/` directory with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/excel-analytics
PORT=5000
```

#### 4. Run the application

**Start the backend:**
```bash
cd server
node server.js
```

**Start the frontend:**
```bash
cd ../client
npm run dev
```

The frontend will typically run on `http://localhost:5173` and the backend on `http://localhost:5000`.

---

## 🧑‍💻 Usage

1. Sign up or log in.
2. Upload an Excel file via the dashboard.
3. View and interact with visualizations and summaries generated from your data.

---

## 📜 Scripts

### Frontend

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code

### Backend

- `node server.js` – Start backend server

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

---

## 📝 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material-UI](https://mui.com/)
- [Plotly.js](https://plotly.com/javascript/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Multer](https://github.com/expressjs/multer)
- [xlsx](https://github.com/SheetJS/sheetjs)

---


