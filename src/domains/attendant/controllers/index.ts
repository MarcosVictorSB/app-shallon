import { Request, Response } from "express";
export default class AttendantController {
  getAttendants(request: Request, response: Response) {
    response.status(200).json({ message: 'nova rota'})
  }
}