import './App.css'
import Header from './header.jsx'
import MenuEsquerdo from './MenuEsquerdo.jsx'
import MenuDireito from './MenuDireito.jsx'


function App() {
  return (
    <>
      <body>
        <div class="container">
          <div class="header">
            <Header></Header>
          </div>
          <div class="midPage">
            <div class="item item-1">
              <MenuEsquerdo></MenuEsquerdo>
            </div>
            <div class="item item-2">
              <MenuDireito></MenuDireito>
            </div>
          </div>
        </div>
      </body >
    </>
  )
}

export default App
