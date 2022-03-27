import { HttpStatusCode } from "../protocols";


export const customError = {
    customer: {
        failedToFetchAllCustomer: {
            statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: 'Falha no banco de dados.'
        },
        invalidParams: {
            statusCode: HttpStatusCode.BAD_REQUEST,
            message: 'Paramentros invalidos'
        }
    }
}