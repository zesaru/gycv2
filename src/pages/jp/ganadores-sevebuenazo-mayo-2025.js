import React from "react"
import Layout from "../../components/layoutj"
import { Helmet } from "react-helmet"

const ConcursoGanadoresPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ganadores - 6to Concurso Se Ve Buenazo | G&C Corporation</title>
        <meta 
          name="description" 
          content="Conoce a los ganadores del 6to concurso Se Ve Buenazo, edición especial por el día de las madres."
        />
      </Helmet>
      <main className="contenedor py-2">
      <div className="min-h-screen bg-gradient-to-br bg-white">
        <div className="container mx-auto px-4 py-8 ">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ganadores del 6to Concurso
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-orange-600 mb-2">
              "Se Ve Buenazo"
            </div>
            <div className="text-lg text-gray-600 mb-4">
              Edición especial por el Día de las Madres
            </div>
            <div className="text-base text-gray-500 mb-6">
              第6回(母の日版)コンクール「セ・ベ・ブエナソ」の優勝者の方々の発表です！
            </div>
            <div className="p-4 mx-auto max-w-2xl rounded-r-lg">
              <p className="text-gray-700 font-medium">
                Muchas gracias por su participación
              </p>
            </div>
          </header>

          <div className="container mx-auto px-4">
            <div>
              

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-yellow-400">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-400 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      1°
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Domenica Kano
                      </h2>
                      <p className="text-gray-600">Primer Lugar</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">
                      Preparación ganadora:
                    </h3>
                    <p className="text-orange-700 font-medium text-xl">
                      "Parihuela Mellicera"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-gray-400">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-400 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      2°
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Ana Kaneshiro
                      </h2>
                      <p className="text-gray-600">Segundo Lugar</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">
                      Preparación ganadora:
                    </h3>
                    <p className="text-orange-700 font-medium text-xl">
                      "Mondonguito a la Italiana"
                    </p>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-orange-400">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-400 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      3°
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Esperia Arzola
                      </h2>
                      <p className="text-gray-600">Tercer Lugar</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-2">
                      Preparación ganadora:
                    </h3>
                    <p className="text-orange-700 font-medium text-xl">
                      "Arroz con Pato Norteño y Ceviche con Zarandajas"
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      </main>
    </Layout>
  )
}

export default ConcursoGanadoresPage