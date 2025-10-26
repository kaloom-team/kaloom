import Header from "@/components/Header/Header";
import TitlePage from "@/components/TitlePage/TitlePage";

export default function Main() {
    return (
        <div className="relative h-screen w-screen flex flex-col bg-[url('/bg-main.png')] bg-cover bg-no-repeat bg-top">
            <Header />
            <div className="absolute bg-[#C800FF] h-screen w-screen opacity-50"></div>
            <div className="absolute h-screen w-screen flex items-center justify-center bg-black opacity-50">
            </div>
            <TitlePage />
        </div>
    );
}