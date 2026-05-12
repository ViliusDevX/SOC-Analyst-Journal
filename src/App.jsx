import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          SOC Journal
        </h1>

        <p className="text-zinc-400 max-w-2xl">
          Tracking my progression towards CySA+, SOC analysis,
          incident response, and detection engineering.
        </p>
      </header>
      <main>
        <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-950">
          <h2 className="text-2xl font-semibold mb-3">
            Test #001
          </h2>

          <div className="flex gap-2 flex-wrap mb-4">
            <span className="bg-zinc-900 px-3 py-1 rounded-lg text-sm">
              TEST1
            </span>

            <span className="bg-zinc-900 px-3 py-1 rounded-lg text-sm">
              TEST2
            </span>

            <span className="bg-zinc-900 px-3 py-1 rounded-lg text-sm">
              TEST3
            </span>

            <span className="bg-zinc-900 px-3 py-1 rounded-lg text-sm">
              TEST4
            </span>
          </div>
        <p className="text-zinc-400 mb-6">
          20 practice questions and 5 SOC investigation scenarios/
        </p>

        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-80 transition cursor-pointer">
          View test
        </button>
        </div>
      </main>
    </div>
  )
}

export default App
