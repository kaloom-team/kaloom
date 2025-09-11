import SignInfo from "../../components/SignInfo/SignInfo";

export default function Register() {
    return (
        <SignInfo
            infos={{ 
                title1:"Não tem conta?",
                title2:"Cadastre-se",
                info: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit",
                styleDirection: { flexDirection: "row-reverse" },
                linkMessage: {message: "Já tem uma conta?", actionMessage: "Entre", link: "#"}
            }}
        />
    );
}
