import SignInfo from "../../components/SignInfo/SignInfo";

export default function Register() {
    return (
        <SignInfo
            infos={{
                title1: "Não tem conta?",
                title2: "Cadastre-se",
                info: "Crie sua conta em poucos minutos e junte-se à Kaloom para começar a explorar novas experiências.",
                styleDirection: { flexDirection: "row-reverse" },
                linkMessageInfo: {
                    linkMessage: {
                        message: "Já tem uma conta?",
                        actionMessage: "Entre",
                        link: "/login",
                    },
                },
                typeForm: "register",
            }}
        />
    );
}
