import {Button} from '@/components/ui/button';

export default function TitlePage(){
    return(
        <div className="absolute fixed inset-0 mx-auto text-white flex flex-col items-center justify-center h-screen gap-2">
            <h1 className="text-[40px] w-[400]">LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="text-[24px] w-[400]">Lorem ipsum dolor sit amet</p>
            <Button variant="outline" className='rounded-[0.5rem] w-[11.688rem] h-[2.435rem] bg-[#6C27B3] text-white border-none text-[15px]'>Vamos lá!</Button>
        </div>
    );
}