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
            <div className="absolute h-screen w-screen flex items-center justify-center bg-black opacity-50">
            </div>
            <TitlePage />
            <div className="flex relative !pb-[1.5rem] !pl-[2rem] !w-[25%]">
                <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
                >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Sobre o kaloom</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                    <p>
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                    </p>
                    <p>
                        Key features include advanced processing capabilities, and an
                        intuitive user interface designed for both beginners and experts.
                    </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">Termos de Serviço</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                    <p>
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                    </p>
                    <p>
                        All orders are carefully packaged and fully insured. Track your
                        shipment in real-time through our dedicated tracking portal.
                    </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">Politicas</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                    <p>
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                    </p>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
}