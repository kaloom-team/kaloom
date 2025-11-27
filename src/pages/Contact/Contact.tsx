export default function Contact(){
    return(
        <main className="flex justify-between h-screen bg-(--bg-home) h-full">
            <div className="text-white w-[17.188rem] !px-[0.7rem] !py-[1.563rem] flex flex-col gap-[0.625rem]">
                <h1 className="text-[2rem]">Fale Conosco</h1>
                <form action="" className="flex justify-start gap-8 margin-0 pt-50">
                    <input type="text" name="" id="" placeholder="Nome"/>
                    <input type="text" name="" id="" placeholder="Número do Contato"/>
                    <input type="email" name="" id="" placeholder="Email"/>
                    <input type="button" value="Entre em Contato" />
                </form>
            </div>
        </main>
    );
}