import './App.css'
import Button from './components/button.jsx'
import Product from "./components/Product.jsx";
import Tile from './components/Tile.jsx'
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
function App() {
  return (
      <>
          <header>
      <h1>Handbags & Purses</h1>

 <nav>
 <Button
 buttontext={"to the collection"}/>
   <Button
       buttontext={"shop all bags"}/>
   <Button
       bla={"disabled"}
       buttontext={"pre-orders"}/>
   </nav>
          </header>
<main>
    <Product
        bestseller={"Best Seller"}
        image={bag_1}
        name={"The handy bag"}
        price={"€400,-"}/>
    <Product
        bestseller={"Best Seller"}
        image={bag_2}
        name={"The stylish bag"}
        price={"€250,-"}/>
    <Product
        bestseller={"Best Seller"}
        image={bag_3}
        name={"The simple bag"}
        price={"€300,-"}/>
    <Product
        bestseller={"Best Seller"}
        image={bag_4}
        name={"The trendy bag"}
        price={"€150,-"}/>
</main>
      <footer>
<Tile
    title={"The brand"}
    children={"blablabla"}
    />
          <Tile
              image={brand}
              />

          {/*<section>*/}
          {/*    <h2>The brand</h2>*/}
          {/*    <p>blablabla</p>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <img src={brand}/>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <img src={our_story}/>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*    <h2>Our story</h2>*/}
          {/*    <p>blablabla</p>*/}
          {/*</section>*/}


      </footer>
      </>
  )
}

export default App
