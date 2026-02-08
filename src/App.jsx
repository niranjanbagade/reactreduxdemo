import { Counter } from './features/counter/Counter'
import { UserProfile } from './features/user/UserProfile'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Redux Demo</h1>
        <p>Modern State Management with Redux Toolkit</p>
      </header>
      <main className="app-content">
        <section className="demo-section">
          <Counter />
        </section>
        <section className="demo-section">
          <UserProfile />
        </section>
      </main>
      <footer className="app-footer">
        <p>Built with React + Redux Toolkit + Vite</p>
      </footer>
    </div>
  )
}

export default App
