# EnglishHub 🌍

**EnglishHub** is a modern web application that curates high-quality, free English learning resources into one accessible place. Whether you're practicing listening, improving your grammar, or expanding your vocabulary — EnglishHub helps you find the right tools fast.

---

## 🚀 Live Demo

[👉 Visit EnglishHub](https://englishhub.com)

---

## 📚 Features

- 🔎 **Search and Filter**: Quickly find resources by keyword or category
- ⭐ **Favorites**: Save your favorite tools for easy access (stored locally)
- 🏷️ **Categories**: Browse by skill — Grammar, Listening, Vocabulary, etc.
- ⚡ **Featured Resources**: Highlighted high-quality tools
- 🧠 **No login required**: Everything works instantly
- 🎧 **Podcast and Video resources** included
- 🖼️ **Locally hosted images** for speed and reliability

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [styled-components](https://styled-components.com/)
- **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git + GitHub
- **Branch Strategy**: `develop` → PRs → `main`

---

## 🗂️ Folder Structure

```
.
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks (favorites, filtering, etc.)
├── data/               # Static resource data
├── styles/             # Global and component styles
├── public/images/      # Thumbnails and favicons
├── app/                # Next.js app structure
```

---

## 🧪 Testing

Run all tests:

```bash
npm test
```

Check coverage:

```bash
npm run test -- --coverage
```

---

## 🌐 SEO & Metadata

Includes dynamic metadata using Next.js `metadata` object:

- `title`, `description`, `keywords`
- Open Graph tags for rich link previews
- Twitter meta tags
- Favicon and OG image support

---

## 💡 Future Improvements

- 🔐 Optional user login with Firebase
- 📊 Resource analytics (most visited, most favorited)
- 🌍 Multi-language interface (English/Spanish)
- 🧩 Admin panel to manage resources

---

## 👤 Author

Made with ❤️ by [Bryan Alba](https://www.linkedin.com/in/bryanalba/)
