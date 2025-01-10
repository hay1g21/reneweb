import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import QuoteBlock from './components/QuoteBlock.jsx'
import ImageCard from './components/ImageCard.jsx'
function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <h3 className = "welcome">Welcome to the René Magritte Website</h3>
      <main>
        
        <p>René Magritte was an internationally acclaimed surrealist artist of all time, yet it was not until his 50s, when he was finally able to reach some form of fame and recognition for his work. René Magritte described his paintings saying, "My painting is visible images which conceal nothing; they evoke mystery and, indeed, when one sees one of my pictures, one asks oneself this simple question, 'What does that mean?' It does not mean anything, because mystery means nothing, it is unknowable."</p>
        <p>René Magritte was born in 1898, to a wealthy manufacturer father. In 1912, his mom was found drowned in the River Sambre. She had committed suicide, and the family was publicly humiliated because of it. From 1916 to 1918, Rene decided to study at the Academie des Beaux-Art, which was located in Brussels. He left the school, because he thought that it was a waste of time. All his paintings afterward reflect cubism, the movements which were introduced by Pablo Picasso and was very popular at the time. In 1922 he married Georgette, and took a number of small jobs, including painting cabbage roses for a wallpaper company, in order to be able to pay the bills.</p>

<p>During the early period of his career, shortly following his marriage, René Magritte would spend the free time that he had, creating art forms and worked on a number of pieces; it was during this time period that he realized surrealism was the art form which he most enjoyed. The Menaced Assassin was one of his earliest pieces in 1926, which showcased the surrealist style which he had been working on; The Lost Jockey was another piece that he introduced in 1925, which also showcased this art form. Over the course of his career, he produced a number of variants on this piece, and changed the format to recreate what the viewer was experiencing.</p>

<p>In 1927, René Magritte had his first one-man show, which took place at the Galerie la Centauri in Brussels. During this period of his life, he was producing nearly one piece of art work each day, which made for an extensive showing, and a variety of unique styles for visitors of the exhibit to see. But critics heaped abuse on the exhibition. Depressed by the failure, he moved to Paris, where he makes the acquaintance of works of émigré avant-garde artists: Impressionist Claude Monet, Post-impressionists Van Gogh, Paul Cezanne, and Neo-impressionist Georges Seurat.</p>
        <QuoteBlock quote="Everything we see hides another thing, we always want to see what is hidden by what we see." name="René Magritte"></QuoteBlock>
        <QuoteBlock quote="If the dream is a translation of waking life, waking life is also a translation of the dream." name="René Magritte"></QuoteBlock>
        <p>In 1927, René Magritte had his first one-man show, which took place at the Galerie la Centauri in Brussels. During this period of his life, he was producing nearly one piece of art work each day, which made for an extensive showing, and a variety of unique styles for visitors of the exhibit to see. But critics heaped abuse on the exhibition. Depressed by the failure, he moved to Paris, where he makes the acquaintance of works of émigré avant-garde artists: Impressionist Claude Monet, Post-impressionists Van Gogh, Paul Cezanne, and Neo-impressionist Georges Seurat.</p>
      </main>
      <h3>Favourite Paintings</h3>
      <div className = "imgGrid" >
        
        <ImageCard source="/thetherapist.jpg" workName="The Therapist" date="1937"></ImageCard>
        <ImageCard source="/falsemirror.jpg" workName="False Mirror" date="1928"></ImageCard>
        <ImageCard source="/sonofman.jpg" workName="Son of Man" date="1935"></ImageCard>
        
       
      </div>

      <div class = "container">
            <div class ="item item-1">Item 1</div>
            <div class ="item item-2">Item 2</div>
            <div class ="item item-3">Item 3</div>
            <div class ="item item-4">Item 4</div>
      </div>
    </>
  )
}

export default App
