import { Students } from "@/models/students";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface StudentsFilter {
    page?: number;
    limit?: number;
}

export async function getStudents(filter: StudentsFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 50;
        const skip = (page - 1) * limit;

        const students = await Students.find()
            .skip(skip)
            .limit(limit)
            .lean()
            .exec();

        const results = students.length;

        return {
            students: students,
            page,
            limit,
            results,
        };
    } catch (err) {
        return { err };
    }
}
