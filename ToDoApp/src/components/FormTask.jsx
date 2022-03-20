function FormTask() {
  return (

    <div className="container mx-auto mt-10 ">
      <div className="w-3/5  sm:mx-auto ">
        <div className="min-w-min">
          <div className="bg-sky-700  py-2 mb-1">
            <h1 className="text-2xl text-white ml-5">CREATE</h1>
          </div>
          <div className="bg-sky-700 pb-12">
            <form className="mx-6 flex flex-row gap-3  justify-between content-center items-start">
              <div>
                <div>
                  <label
                    className=" block text-xl text-white py-2"
                    for="titulo"
                  >
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
                  <input
                    className="rounded-md "
                    type="text"
                    id="tag"
                    name="tag"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  className=" block text-xl py-2 text-white "
                  for="textarea"
                >
                  Descripción
                </label>
                <textarea className="rounded-md pb-7 " id="textarea"></textarea>
                <div className="absolute right-0 mt-3 bg-green-300 px-12 rounded-md">
                  <input
                    type="button"
                    className=" text-base  font-bold text-white"
                    id="enviar"
                    name="enviar"
                    value="Enviar"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormTask
