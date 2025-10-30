import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
    <Navbar />
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-35 lg:py-40">
      <div className="sm:mb-8 sm:flex sm:justify-center">
        <div className="hidden relative rounded-full px-3 py-1 text-sm/5 sm:text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Bismillahirrohmanirrohim <a href="#" className="font-semibold text-indigo-600"><span aria-hidden="true" className="absolute inset-0"></span>Selanjutnya <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mt-1 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Panti Asuhan NU</h1>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-700 sm:text-5xl">Bintan Sa'adillah Al-Rasyid</h1>
        <p className="mt-8 text-sm/5 font-medium text-pretty text-gray-500 sm:text-xl/8">Jl. Krapyak Wetan, b Gg. Bougenville No.127, Krapyak Wetan, Panggungharjo, Kec. Sewon, Kabupaten Bantul,<br></br> Daerah Istimewa Yogyakarta 55188</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-full border border-indigo-600 px-8 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden">Hubungi kami</a>
          <a href="#" className="text-sm/6 font-semibold font-medium text-indigo-600">Selengkapnya <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
    </div>
  </div>
      <section>
        <div className="bg-black text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Tentang kami</h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Ajaran : Ahli sunnah waljama'ah
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">Berbagai kegiatan keagamaan berbasiskan pembelajaran pesantren salaf.</p>
              <a href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now</a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img className="inlineBlock mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/>
                </div>
                <div>
                  <img className="inlineBlock mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/>
                </div>
                <div>
                  <img className="inlineBlock mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/>
                </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
    <Footer />
    </>
  )
}

export default Home
