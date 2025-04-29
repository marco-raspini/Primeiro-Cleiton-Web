import './App.css'
import Header from './header.jsx'
import MenuEsquerdo from './MenuEsquerdo.jsx'
import MenuDireito from './MenuDireito.jsx'

function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="header">
            <Header/>
          </div>
          <div className="midPage">
            <div className="item item-1">
              <MenuEsquerdo/>
            </div>
            <div className="item item-2">
              <MenuDireito/>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
