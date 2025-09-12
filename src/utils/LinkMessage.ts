interface ILinkMessage {
    message: string;
    actionMessage: string;
    link?: string;
}

export type TLinkMessage = {
    linkMessage: ILinkMessage
}