import FormTask from '../components/FormTask'
import Navbar from '../components/Navbar'
import Tareas from '../components/Tareas'

function Home() {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <FormTask />
      <Tareas/>
    </div>
  )
}

export default Home
