import { Calculator } from "./components/Calculator";
import { Header } from "./components/Header";


export default function App(){

  return(
      <main className=" bg-main-bg transition 5s ease-in w-full  h-screen flex flex-col items-center justify-center">
      <Header/>
      <Calculator/>
      </main>
  )
}