function FormTask() {
  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex justify-center  ">
        <div className="w-3/5 min-w-fit">
          <div className="bg-sky-700  py-2 mb-1">
            <h1 className="text-2xl text-white ml-5">CREATE</h1>
          </div>
          <div className="bg-sky-700 ">
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

              <div className="">
                <label
                  className=" block text-xl py-2 text-white "
                  for="textarea"
                >
                  Descripción
                </label>
                <textarea className=" rounded-md pb-7" id="textarea"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormTask
