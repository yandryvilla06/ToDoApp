


function CardDone() {

    var fecha=new Date;
    fecha= fecha.toLocaleDateString() + "  "+ fecha.getHours()+":"+fecha.getMinutes();
 

    return (
      <div className="max-w-sm  mx-4   bg-white  rounded-3xl  ">
        <h1 className="font-semibold px-3 mt-4">Component Card</h1>
        <div class=" pt-4 pb-2 px-3">
          <span class="inline-block bg-green-400 rounded-full px-3 py-1  mr-2 mb-2">
            bajo
          </span>
          
        </div>
        <p className="px-3 py-2">
          Maquetación y lógica del componente para el visitando de las Card
        </p>

        <span class="inline-block  float-right bg-green-400 rounded-full px-3 py-1  mr-2 mb-2" id="fecha" >
         {fecha}
        </span>
  
        <button className="w-full bg-orange-400 rounded-b-3xl text-white text-xl font-bold py-1">
          Done
        </button>
      </div>
    )
  }
  
  export default CardDone;

  