# 📝 Multi-Page Blog App

> A full-featured blog app frontend built with React,
> demonstrating prop drilling, destructuring, React Router, API handling, and Custom Hooks.

## 📸 Screenshots

![Home Page](image.png)
![Article Page](image-1.png)
![Responsive Design](image-2.png)

---

## ✨ Features

* 📖 Browse blog articles from the DEV.to API
* 🔀 Dynamic routing using React Router DOM
* 📄 Click on any article card to read the full article
* ⚡ Reusable custom hook for API fetching
* 📱 Fully responsive design
* 🎨 Modern blog-style UI

---

## 🛠️ Tech Stack

| Technology          | Purpose      |
| ------------------- | ------------ |
| React 18            | UI Library   |
| React Router DOM v6 | Navigation   |
| Axios               | API Requests |
| Tailwind CSS        | Styling      |
| Vite                | Build Tool   |

---

## 🌐 API Used

DEV.to Articles API

https://dev.to/api/articles

---

## ⚙️ Run Locally

```bash
git clone https://github.com/Abhisheksingh10734/Multi-Page-Blog-App.git

cd Multi-Page-Blog-App

npm install

npm run dev
```

---

## 📁 Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── UseFetch.jsx
├── index.css
└── components/
    ├── Navbar/
    │   ├── Navbar.jsx
    │   ├── Left/
    │   │   └── Logo.jsx
    │   └── Right/
    │       ├── RightNav.jsx
    │       ├── NavLink.jsx
    │       └── ThemeBtn.jsx
    │
    └── Posts/
        ├── AllPosts.jsx
        ├── PostDetails.jsx
        └── PostHead/
            └── PostHead.jsx
```

---

## 🧠 What I Learned

* Creating reusable Custom Hooks
* Parameterized Routing
* Prop Drilling
* API Handling with Axios
* Component Reusability
* Navigation using React Router
* Conditional Rendering
* Responsive UI Design
