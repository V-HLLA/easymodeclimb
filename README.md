# 🧠 EasymodeClimb

_EasymodeClimb is a League of Legends companion tool that recommends champions that are easy to play and strong in the current meta._

> “What champ should I play to climb — without needing insane mechanics?”

---

## 🔧 Tech Stack

| Layer    | Tech                                | Why?                                     |
| -------- | ----------------------------------- | ---------------------------------------- |
| Frontend | Next.js 14 + App Router             | Modern, SEO-friendly, flexible           |
| UI       | Tailwind CSS + shadcn/ui            | Fast styling and solid component library |
| Backend  | Next.js Route Handlers              | Built-in API handling                    |
| Database | PostgreSQL + Prisma                 | Relational, powerful querying            |
| Scraper  | Python (requests/BS4 or Playwright) | Great for headless scraping              |
| Charts   | Recharts or TanStack Charts         | For win rate history and stats           |
| Hosting  | Vercel + Railway                    | Simple and scalable deployment           |

---

## ✅ MVP Features Checklist

### 🧭 Core Pages

- [ ] `/` - Home Page (intro + top champs preview)
- [ ] `/recomended-champions` - Champion Explorer with sorting/filtering
- [ ] `/leaderboard` - Easy Champs Leaderboard
- [ ] `/404` - Custom Not Found Page

---

### 🏆 Easy Champs Leaderboard

- [ ] Build “Easy Score” algorithm
- [ ] Sort champions based on score
- [ ] Add tags:

  - [ ] Beginner Friendly
  - [ ] Safe Pick
  - [ ] Low Ban Rate

  ### 🗃️ Database (PostgreSQL + Prisma)

- [ ] Define schema:
  - [ ] Champion
  - [ ] ChampionStats (by patch)
- [ ] Seed with initial data from scraper
- [ ] Write queries for API consumption

---

### 📡 API Routes (Next.js Route Handlers)

- [ ] `/api/champions` – All champions w/ filters
- [ ] `/api/champions/[slug]` – Stats for one champ
- [ ] `/api/leaderboard` – Ranked “easy” champs

---

### 🎨 UI/UX

- [ ] Use Tailwind + shadcn/ui components
- [ ] Mobile-responsive layout
- [ ] Loading skeletons
- [ ] Light/dark mode (optional)

---
