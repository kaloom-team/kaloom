export function Home() {
    return (
        <main className="flex justify-center h-screen bg-(--bg-home) h-full !px-[0.313rem] !py-[1.25rem]">
            <div className="border-[#543366] border-r-[0.063rem] w-[17.188rem] !px-[0.7rem] !py-[1.563rem] flex flex-col gap-[0.625rem]">
                <div className="flex flex-col gap-[1.563rem]">
                    <h1 className="text-white text-[2.5rem] font-kaloom">
                        kaloom
                    </h1>
                </div>
                <div className="h-[17rem] flex flex-col justify-between rounded-[0.625rem] overflow-hidden border-[#543366] border-[0.063rem]">
                    <div className="relative h-[58px] bg-[#D9D9D9]">
                        <div className="absolute w-[4rem] h-[4rem] top-7 left-4 border-[#543366] border-[0.125rem] rounded-[2.188rem]"></div>
                    </div>

                    <div id="infos" className="!mx-5 flex flex-col !py-3">
                        <div className="flex flex-col gap-[0.5rem]">
                            <h3 className="text-white font-[inter] text-[1.5rem]">
                                André Melchior
                            </h3>
                            <p className="text-white font-[inter] text-[0.75rem]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit...
                            </p>
                            <p className="text-white font-[inter] text-[0.75rem] !mt-[0.5rem] opacity-60">
                                São Paulo
                            </p>
                            <div className="flex">
                                <img src="" alt="" />
                                <p className="text-white font-[inter] text-[0.75rem] !mt-[0.5rem]">
                                    Fatec Diadema
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[44rem]"></div>
            <div className="border-[#543366] border-l-[0.063rem] w-[20rem]"></div>
        </main>
    );
}
