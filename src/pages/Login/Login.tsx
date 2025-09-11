import SignInfo from "../../components/SignInfo/SignInfo"

export default function Login() {
    return (
        <div>
            <SignInfo 
                infos={
                    {
                        info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
                        title1: "Olá,",
                        title2: "bem-vindo",
                        linkMessage: {message: "Não tem uma conta?", actionMessage: "Cadastre-se", link: "#"}
                    }
                }
            />
        </div>
    )
}