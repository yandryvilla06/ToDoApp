function CardToDo(){

     var fecha=new Date;
     fecha= fecha.toLocaleDateString() + "  "+ fecha.getHours()+":"+fecha.getMinutes();
     

    
    return (

        <div className="max-w-sm  mx-4   bg-white  rounded-3xl  ">
        <h1 className="font-semibold px-3 mt-4">Creación del header</h1>
        <div class=" pt-4 pb-2 px-3">
          <span class="inline-block bg-red-500 rounded-full px-3 py-1  mr-2 mb-2">
            urgente
          </span>
          <span class="inline-block bg-blue-300 rounded-full px-3 py-1  mr-2 mb-2">
            dev
          </span>
          
        </div>
         <p className="px-3 py-2">
          Creación de la barra de navegación y gestion de los diferentes enlaces dentro de la página
        </p>

        <span class="inline-block  float-right bg-green-400 rounded-full px-3 py-1  mr-2 mb-2" id="fecha" >
          {fecha}
         </span>

          <button className="w-full bg-green-400 rounded-b-3xl text-white text-xl font-bold py-1">T0-DO</button>
        
      </div>

    );

}


export default CardToDo;