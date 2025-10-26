import { Button } from '../ui/button';


export default function Menu() {
    return (
        <div className='flex gap-[2.188rem]'>
            <a href="" className='text-white'>Home</a>
            <a href="" className='text-white'>Suporte</a>
            <a href="" className='text-white'>Contato</a>

            <div id='buttons' className='flex gap-[0.625rem]'>

                <Button variant="outline" className='rounded-[3.125rem] w-[4.688rem] h-[2.438rem] bg-[#6C27B3] text-white border-none'>Login</Button>    
                <Button variant="outline" className='rounded-[3.125rem] w-[4.688rem] h-[2.435rem] bg-[#6C27B3] text-white border-none'>Cadastro</Button>    
            </div>
        </div>
    )
}