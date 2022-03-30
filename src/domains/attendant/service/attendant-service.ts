import AttendantRepository from "../repository/attendant-repository"

const repository = new AttendantRepository()

export default class AttendantService {
    async getAttendants(): Promise<any> {
        try {
            return await repository.getAttendants();
        } catch (error) {
            throw new Error(error);
        }
    }
}