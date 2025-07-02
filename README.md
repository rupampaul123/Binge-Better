# 🎬 Binge Better

> Discover movies effortlessly with a sleek, responsive UI powered by React and the TMDb API.

**Binge Better** is a modern movie discovery app that allows users to search for movies, browse trending titles, and view detailed movie information — all in a minimal and fast interface.

[🌐 Live Demo](https://binge-better.vercel.app/)  
[📦 GitHub Repo](https://github.com/your-username/binge-better)

---

## 📸 Screenshots

| Home | Search | 
|------|--------|
| (![image](https://github.com/user-attachments/assets/b6c54e49-27d4-48ac-98de-400f9236ec8a) | (![image](https://github.com/user-attachments/assets/f1d2bb94-eda3-46a4-b198-5d90448e9210)



---

## 🚀 Features

- 🔍 **Instant Search** – Search any movie by title
- 📈 **Trending Feed** – Display trending or popular titles
- 📄 **Movie Details Page** – Overview, ratings, posters, and more
- 📱 **Responsive Design** – Mobile and desktop friendly
- 🎭 **Fallback UI** – Placeholder images for missing posters
- ⚡ **Fast & Lightweight** – Built with clean React components

---

## 🧰 Tech Stack

| Tool/Library | Purpose |
|--------------|---------|
| **React** | Frontend framework |
| **React Router DOM** | Routing for pages |
| **TMDb API** | Movie data source |
| **Tailwind CSS / SCSS** | Styling (based on what you used) |
| **Vite** | Fast dev environment |
| **Vercel** | Deployment |

---

## 🔧 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/binge-better.git
cd binge-better

# 2. Install dependencies
npm install

# 3. Add your TMDb API key
# Create a .env file in the root directory:

# 4. Start the app
npm run dev
```

## 📁 Folder Structure

```bash
binge-better/
├── public/                      # Static assets and index.html
│
├── src/
│   ├── assets/                  # Images, icons, fonts
│   │   └── logo.png
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/                   # Route-based views
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   └── MovieDetails.jsx
│   │
│   ├── utils/                   # Helper functions, constants
│   │   └── api.js
│   │
│   ├── App.jsx                  # Root component with routes
│   ├── main.jsx                 # ReactDOM.render and setup
│   └── index.css                # Global styles

```



## 📌 Future Improvements


🎬 Filter by genres, language, or release date

🧾 Pagination or infinite scroll

💾 Add to Watchlist (localStorage or Firebase)

🌓 Dark Mode toggle

🧪 Unit testing with React Testing Library

## 🙋‍♂️ Author
Made with ❤️ by Rupam Paul
