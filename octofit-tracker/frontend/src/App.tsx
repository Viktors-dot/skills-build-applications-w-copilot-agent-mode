import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-badge">Multi-tier fitness platform</div>
        <h1>OctoFit Tracker</h1>
        <p className="hero-copy">
          A modern app scaffold for logging workouts, organizing teams, and tracking
          competitive progress from a React 19 presentation tier to an Express API.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <Link className="btn btn-light btn-lg" to="/">
            Frontend ready
          </Link>
          <a className="btn btn-outline-light btn-lg" href="http://localhost:8000/health">
            API health check
          </a>
        </div>
      </section>

      <section className="feature-grid" aria-label="Platform highlights">
        <article className="feature-card">
          <h2>Authentication</h2>
          <p>Profiles and secure sign-in flows can land here next.</p>
        </article>
        <article className="feature-card">
          <h2>Activity logging</h2>
          <p>Capture workouts, progress, and recovery in one data model.</p>
        </article>
        <article className="feature-card">
          <h2>Teams and leaderboards</h2>
          <p>Coordinate competitions and surface rankings in real time.</p>
        </article>
      </section>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="page-shell">
      <section className="hero-panel text-center">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>Route not found</h1>
        <p className="hero-copy">
          The requested route is not part of this starter yet, but the app shell is
          ready for the next screens.
        </p>
        <Link className="btn btn-light btn-lg" to="/">
          Go home
        </Link>
      </section>
    </main>
  )
}

export default App
