import { Btn } from "./ui/Btn"
export function Navigation (){
return (
    <nav className="flex items-center justify-around gap-40 py-5 px-40 font-[rubik]">
        <img src="/src/assets/img/logo.svg" alt="logo of Traffico" />
        <div className="flex gap-15 items-center">
            <a className="transition ease-in-out hover:underline" href="">ABOUT</a>
            <a className="transition ease-in-out hover:underline" href="">HOW TO</a>
            <a className="transition ease-in-out hover:underline" href="">FAQS</a>
        <Btn></Btn>
        </div>
        </nav> )
 }
 
