# 🧠 EasymodeClimb

You can view the live version of the website by clicking the image below:
[![Site Preview](./public/preview.jpg)](https://easymode-climb.vercel.app/)

_EasymodeClimb is a League of Legends companion tool that recommends champions that are easy to play and strong in the current meta._

> “What champ should I play to climb — without needing insane mechanics that is strong in the current meta?”

## 🔧 Tech Stack

| Layer    | Tech                     | Why?                                     |
| -------- | ------------------------ | ---------------------------------------- |
| Frontend | Next.js 15 + App Router  | Modern, SEO-friendly, flexible           |
| UI       | Tailwind CSS + shadcn/ui | Fast styling and solid component library |
| Backend  | Next.js Route Handlers   | Built-in API handling                    |
| Database | PostgreSQL Neon          | Relational                               |
| Scraper  | (Playwright)             | For scraping                             |
| Hosting  | Vercel                   | Deployment                               |

---

## ✅ MVP Features Checklist

### 🧭 Core Pages

- [x] `/` - Home Page (intro + why pick easy champions)
- [x] `/easy-recomended-champions` - Champion Explorer with sorting/filtering
- [x] `/404` - Custom Not Found Page

---

### 🗃️ Database (PostgreSQL)

- [x] Define schema:
  - [x] Champion
  - [x] ChampionStats
- [x] Seed with initial data from scraper
- [x] Write queries for API consumption

---

### 📡 API Routes (Next.js Route Handlers)

- [x] `/api/champions` – All champions
- [x] `/api/easychampions` – Ranked “easy” champs

---

### 🎨 UI/UX

- [x] Use Tailwind + shadcn/ui components
- [x] Mobile-responsive layout
- [x] Loading
- [x] Light/dark mode

---
