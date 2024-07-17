import NavBar from './components/NavBar/navbar'
import Footer from './components/Footer/footer';
import RoutesApp from './routes/routes';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <RoutesApp/>
      <Footer />
    </div>
  )

}

export default App
