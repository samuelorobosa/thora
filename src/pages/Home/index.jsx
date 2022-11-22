import './index.css';
import { BsFillCloudSunFill, BsFillSunFill } from "react-icons/bs";

function Home(){
    return(
        <>
            <main className="container mx-auto flex flex-col justify-center w-5/6">
                <header className="mt-16">
                    <h2 className="text-6xl font-bold">London, UK</h2>
                    <h6 className="font-semibold text-2xl text-slate-300">Monday 29 August</h6>
                </header>
                <section className="relative items-center grid-rows-1 grid grid-cols-[40%_1fr_40%] mt-12">
                    <aside className="flex items-center justify-around">
                        <div> <BsFillCloudSunFill size="10em"/> </div>
                         <div className="flex flex-col">
                             <div className="text-9xl font-black">
                                 <span> 21</span>
                                 <span className="align-super font-thin">°</span>
                             </div>
                             <span className="text-2xl text-slate-300 font-semibold">Mostly sunny</span>
                         </div>
                    </aside>
                    <aside className="relative">
                        <div className="vl"></div>
                    </aside>
                    <aside className="grid grid-rows-2 grid-cols-3 gap-10">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">23<sup>°</sup></span>
                            <span className="text-base font-bold text-slate-300">High</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">7mph</span>
                            <span className="text-base font-bold text-slate-300">Wind</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">05:27</span>
                            <span className="text-base font-bold text-slate-300">Sunrise</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">14<sup>°</sup></span>
                            <span className="text-base font-bold text-slate-300">Low</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">0%</span>
                            <span className="text-base font-bold text-slate-300">Rain</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">20:57</span>
                            <span className="text-base font-bold text-slate-300">Sunset</span>
                        </div>
                    </aside>
                </section>

                <section className="mt-12 mb-12">
                    <p className="text-3xl font-bold">Today's weather</p>

                    <div className="container flex justify-around gap-5 mt-12">
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">3am</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">14<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">6am</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">16<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">9am</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">17<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">12pm</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">19<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">3pm</span>
                            <span> <BsFillSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">21<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">6pm</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">20<sup>°</sup></span>
                        </article>
                        <article className="box flex justify-around flex-col items-center">
                            <span className="text-slate-300 text-2xl font-semibold">9pm</span>
                            <span> <BsFillCloudSunFill size="4em"/> </span>
                            <span className="text-3xl text-slate-300 font-semibold">18<sup>°</sup></span>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;