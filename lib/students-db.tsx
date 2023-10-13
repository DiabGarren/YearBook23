import { Students } from "@/models/students";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface UsersFilter {
    page?: number;
    limit?: number;
}

export async function getStudents(filter: UsersFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
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

export async function createStudent(
    name: string,
    quote: string,
    image: string,
    colours: string[]
) {
    try {
        await connectDb();

        const students = await Students.create({
            name: name,
            quote: quote,
            image: image,
            colours: colours,
        });

        return {
            students,
        };
    } catch (err) {
        return { err };
    }
}

export async function getStudent(id: string) {
    try {
        await connectDb();
        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Student not found" };
        }

        const students = await Students.findById(parsedId).lean().exec();
        if (students) {
            return { students };
        } else {
            return { error: "Student not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function updateStudent(
    id: string,
    {
        name,
        quote,
        image,
        colors,
    }: { name: string; quote: string; image: string; colors: string[] }
) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Student not found" };
        }

        const students = await Students.findByIdAndUpdate(
            parsedId,
            { name, quote, image, colors },
            { new: true }
        )
            .lean()
            .exec();
        if (students) {
            return { students };
        } else {
            return { error: "Student not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function deleteStudent(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Student not found" };
        }

        const students = await Students.findByIdAndDelete(parsedId).exec();

        if (students) {
            return {};
        } else {
            return { error: "Student not found" };
        }
    } catch (err) {
        return { err };
    }
}
