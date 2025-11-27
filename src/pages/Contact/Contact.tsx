import { Button } from "@/components/ui/button";

export default function Contact(){
    let name = " ";

    for (let i = 0; i < 50; i++) {
        name += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }
    let number = " ";

    for (let i = 0; i < 50; i++) {
        number += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }
    let email = " ";

    for (let i = 0; i < 50; i++) {
        email += String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }
    
    return(
        <main className="flex justify-between h-screen bg-(--bg-home) h-full">
            <div className="text-white w-[40rem] !px-[0.7rem] !py-[1.563rem] flex flex-col gap-[4rem]">
                <div className="text-[2rem] gap-2">
                    <h1>Fale Conosco</h1>
                    <br />
                    <p className="text-[1rem]">Estamos aqui para ajudar, entre em contato para enviar suas sugestões e dúvidas. Nossa equipe responderá o mais rápido possível!</p>
                </div>
                <form action="" className="flex justify-start gap-2">
                    <label htmlFor={name}>Nome:</label>
                    <input type="text" name="" id={name} className="focus:outline-none focus:ring-0 border-none"/>
                    <label htmlFor={number} className="">Número:</label>
                    <input type="text" name="" id={number} className="focus:outline-none focus:ring-0 border-none"/>
                    <label htmlFor={email}>Email:</label>
                    <input type="email" name="" id={email} className="focus:outline-none focus:ring-0 border-none"/>
                </form>
                <form action="">
                    <Button variant="outline"
                    className="rounded-[0.313rem] w-[11.688rem] h-[2.255rem] bg-[#240046]">
                        Entre em Contato
                    </Button>
                </form>
            </div>
        </main>
    );
}