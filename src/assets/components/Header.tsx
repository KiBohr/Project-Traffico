import { Btn } from "./ui/Btn"
import { Btn2 } from "./ui/Btn2"
import { Navigation } from "./navigation"
export function Header () {
    return (
        <header className="text-white font-[display] h-[100vh] mb-50">
            <div className="relative">
                <div className="absolute z-1">
                    <Navigation></Navigation>
                </div>
                <div className="absolute z-1 top-36 left-40 flex flex-col gap-10 justify-center">
                    <h1 className="text-6xl w-[40%]">Your awesome traffic permit consultant.</h1>
                    <Btn2></Btn2>
                </div>
                    <div className="h-[70%] w-[80%] absolute top-0 left-0 z-0"><img className="object-cover " src="/src/assets/img/header_bg.png" alt="a background with two people" /></div>
                            
                    <div className="absolute top-130 left-0 h-[25%] w-[35%] "><img src="/src/assets/img/kleinerLKW.png" alt="an orange truck" />
                </div>
            </div>
        </header>
    )
}