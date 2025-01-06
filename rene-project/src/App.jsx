import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import QuoteBlock from './components/QuoteBlock.jsx'
function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <main>
        <h3>Welcome to the René Magritte Website</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id quisquam nemo pariatur, nisi cumque expedita deserunt adipisci voluptatem tempora ab modi illo molestiae aut! Autem quae hic sequi omnis.</p>
        <QuoteBlock quote="Everything we see hides another thing, we always want to see what is hidden by what we see." name="René Magritte"></QuoteBlock>
        <QuoteBlock quote="If the dream is a translation of waking life, waking life is also a translation of the dream." name="René Magritte"></QuoteBlock>
      </main>
    </>
  )
}

export default App
