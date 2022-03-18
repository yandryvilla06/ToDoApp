function Navbar(){


    return(
    
        <div className="flex justify-between content-center self-center flex-row  items-center gap-1 bg-violet-200  p-6 shadow-md shadow-slate-400 ml-1 ">
            <div>
               <h1 className="text-violet-700  text-xl sm:text-2xl font-bold ml-4">ToDoApp</h1>
            </div>
            <div>
                <h2 className="text-sm  sm:text-xl text-white font-bold mr-4">Aplicación para la gestion de proyectos</h2>
            </div>


        </div>

    )
}

export default Navbar;