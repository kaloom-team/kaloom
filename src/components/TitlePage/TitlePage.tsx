import {Button} from '@/components/ui/button';

export default function TitlePage(){
    return(
        <div className="relative fixed inset-0 mx-auto text-white flex flex-col items-center justify-center h-screen gap-2">
            <h1 className="text-[2.5rem] w-[400] uppercase">Lorem ipsum dolor sit amet</h1>
            <p className="text-[1.5rem] w-[400]">Lorem ipsum dolor sit amet</p>
            <a href='/login'>
                <Button variant="outline" className='rounded-[0.313rem] w-[11.688rem] h-[2.255rem] bg-[#6C27B3] text-white border-none text-[15px] cursor-pointer uppercase font-bold !mt-[0.4rem]'>Vamos lá!</Button>
            </a>
        </div>
    );
}