function FormTask() {
  return (
    <div className="w-full sm:w-4/5  sm:mx-auto ">
      <div className="bg-sky-700  py-2 mb-1">
        <h1 className="text-2xl text-white ml-5">CREATE</h1>
      </div>
      <div className="bg-sky-700 pb-10 ">
        <form className="mx-6 flex flex-row justify-between content-between gap-2">
          <div>
            <div>
              <label className=" block text-xl text-white py-2" for="titulo">
                Título
              </label>
              <input
                className="rounded-md"
                type="text"
                id="titulo"
                name="titulo"
              />
            </div>
            <div>
              <label className="block text-xl text-white py-2" for="titulo">
                Tags
              </label>
              <input className="rounded-md " type="text" id="tag" name="tag" />
            </div>
          </div>

          <div className="">
            <label className=" block text-xl py-2 text-white " for="textarea">
              Descripción
            </label>
            <textarea className="rounded-md pb-7 " id="textarea"></textarea>
            <div className="mt-3 relative">
              <input
                type="button"
                className=" text-base  absolute right-0 font-bold text-white bg-green-300 px-12 rounded-md"
                id="enviar"
                name="enviar"
                value="Enviar"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormTask
