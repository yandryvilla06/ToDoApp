import FormTask from '../components/FormTask'
import Navbar from '../components/Navbar'
import Tareas from '../components/Tareas'

function Home() {
  return (
    <div className=" bg-gray-300">
       <Navbar />
      <div className="container mx-auto mt-10">
          <FormTask />
          <Tareas/>

      </div>
   
    </div>
  )
}

export default Home
