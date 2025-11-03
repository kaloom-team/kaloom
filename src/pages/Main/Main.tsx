import Header from "@/components/Header/Header";
import TitlePage from "@/components/TitlePage/TitlePage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Main() {

    return (
        <main className="relative h-screen w-screen flex flex-col bg-[url('/bg-main.png')] bg-cover bg-no-repeat bg-top">
            <Header />
            <div className="absolute bg-[#C800FF] h-screen w-screen opacity-50"></div>
            <div className="absolute h-screen w-screen flex items-center justify-center bg-black opacity-50"></div>
            <TitlePage />
            <div className="flex relative !pb-[1.5rem] !pl-[2rem] !w-[25%]">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white text-lg font-[inter]">
                            Sobre o kaloom
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                            <p className="text-base !mb-[0.2rem]">
                                O Kaloom é uma rede social que introduz a
                                interação entre Alunos e Ex-Alunos das
                                instituições de ensino estaduais Etec e Fatec.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-white text-lg font-[inter]">
                            Termos de Serviço
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                            <p className="text-base !mb-[0.2rem]">
                                Os Termos de Serviço refletem a maneira como os
                                negócios do Kaloom funcionam, ajudando a definir
                                a relação do software com você.{" "}
                                <b>
                                    <a className="underline" href="#">
                                        Clique aqui
                                    </a>{" "}
                                </b>
                                para saber mais sobre os Termos de Serviço.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-white text-lg font-[inter]">
                            Politicas de Privacidade
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                            <p className="text-base !mb-[0.2rem]">
                                Entendemos que é uma grande responsabilidade e
                                trabalhamos para proteger seus dados.{" "}
                                <b>
                                    <a href="#" className="underline">
                                        Saiba mais
                                    </a>{" "}
                                </b>
                                sobre as Politicas de Pivacidade.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
}