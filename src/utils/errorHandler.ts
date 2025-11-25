export class handlerError extends Error {

    constructor(message: string) {
        super(message)
        this.name = "Handler Error"
    }
}