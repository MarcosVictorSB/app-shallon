import db from "../../../models";


export default class AttendantRepository {
    async getAttendants(): Promise<any>{
        try {
            return await db.Attendant.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }
}