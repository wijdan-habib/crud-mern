import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainComp from './components/MainComp'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComp/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path='update-user/:id' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
