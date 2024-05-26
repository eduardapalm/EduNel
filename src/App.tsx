// import AboutUs from "./components/AboutUs";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-50 via-color-3 via-85% to-slate-100 pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden w-full h-full">
        <header>
          <Header />
        </header>
        <body>
          <Banner />
          <main>
            {/* <Services /> */}
            <AboutUs />
          </main>
        </body>
      </div>
    </>
  );
}
