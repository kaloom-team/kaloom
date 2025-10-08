import SignInfo from "../../components/SignInfo/SignInfo"

export default function Login() {
    return (
        <div>
            <SignInfo
                infos={{
                    info: "Explore recursos, conecte-se com a comunidade e aproveite ao máximo sua experiência com a Kaloom.",
                    title1: "Olá,",
                    title2: "bem-vindo",
                    linkMessageInfo: {
                        linkMessage: {
                            message: "Não tem uma conta?",
                            actionMessage: "Cadastre-se",
                            link: "/register",
                        },
                    },
                    typeForm: "login",
                }}
            />
        </div>
    );
}