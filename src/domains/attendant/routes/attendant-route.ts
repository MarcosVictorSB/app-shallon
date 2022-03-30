import { Router } from "express";
import AttendantController from '../controllers';

const attendantRouter = Router();

const controller = new AttendantController();


attendantRouter 
  .get('/api/v1/attendants/', controller.getAttendants)


export default attendantRouter;