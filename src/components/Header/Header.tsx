import Menu from "../Menu/Menu";

export default function Header() {
    return (
        <>
            <header className="!px-[4rem] m-5 w-full h-[9rem] flex flex-row items-center justify-between z-10 p-4">
                <h1 className="text-white text-[2.5rem] font-kaloom">kaloom</h1>
                <div className="h-[2.67rem] flex flex-row justify-between">
                    <Menu />
                </div>
            </header>
        </>
    );
 }