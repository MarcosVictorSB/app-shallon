import { Request, Response } from "express";
import { HttpResponse, HttpStatusCode } from "../../../protocols";
import AttendantService from "../service/attendant-service";


const service = new AttendantService();
export default class AttendantController {
    async getAttendants(request: Request, response: Response): Promise<any> {
        try {
            const attendants = await service.getAttendants();
            return response.status(HttpStatusCode.OK).json({ body: attendants})
        } catch (error) {
            return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ body: error})
        }    
    }
}