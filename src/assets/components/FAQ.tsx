function FAQ () {
    return (
        <section className="bg-[url(/asstets/img/Rectangle faq.png)] mb-10" >
            <article className="flex gap-10 justify-center">
                <div className="flex flex-col gap-5 justify-center w-[40%]">
                    <p className="text-xl text-orange font-bold">FAQ</p>
                    <h2 className="text-5xl font-[display] text-brown">Questions and Answers on Professional Traffic Permits:</h2>
                </div>
                <div className="h-[50%] w-[40%]">
                    <img className="object-cover" src="/src/assets/img/faq.person.png" alt="a person thinking" />
                </div>
                
            </article>

            <article className="grid grid-cols-2 gap-5 p-10 text-brown">
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>What is a professional traffic permit?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>How to check the traffic condition?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>What are the requirements for a professional traffic permit?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>Are there professional traffic permit training courses at a distance?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>When is a professional traffic permit needed?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>Where to look for a traffic permit?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>Are there differences between a traffic permit and a professional traffic permit?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                <div className="bg-background1 shadow p-5 flex justify-between items-center transition ease-in-out hover:shadow-2xl">
                    <p>How much does a commercial traffic permit cost for goods?</p>
                    <button className="cursor-pointer transition ease-in-out hover:animate-ping "><img src="/src/assets/img/+.svg" alt="symbol of a plus" /></button>
                </div>
                
            </article>

        </section>
    )
}

export default FAQ