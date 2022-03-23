export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    INTERNAL_SERVER_ERROR = 500
}

export type HttpResponse = {
    statusCode: number,
    body: any;
}