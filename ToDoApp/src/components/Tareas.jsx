import CardDone from "./CardDone"
import CardToDo from "./CardToDo"


function Tareas() {
  return (
    <div className="w-full sm:w-4/5   mt-6 mx-auto">
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <div className="bg-sky-700 py-2 mb-1">
            <h1 className="text-2xl text-white ml-5">TO-DO</h1>
          </div>
          <div className="flex flex-col  justify-center content-center items-center  gap-5 bg-sky-700 py-6">
            
            <CardToDo/>
            <CardToDo/>
            <CardToDo/>


          </div>
        </div>

        <div>
          <div className="bg-sky-700 py-2 mb-1">
            <h1 className="text-2xl text-white ml-5">DONE</h1>
          </div>
          <div className="flex flex-col  justify-center content-center items-center  gap-5 bg-sky-700 py-6">
            <CardDone/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tareas
