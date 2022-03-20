import Footer from '../components/Footer'
import FormTask from '../components/FormTask'
import Navbar from '../components/Navbar'
import Tareas from '../components/Tareas'

function Home() {
  return (
    <div>
       <Navbar />
      <div className="container mx-auto py-12">
          <FormTask />
          <Tareas/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home
