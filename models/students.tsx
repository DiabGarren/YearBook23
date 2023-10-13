import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<StudentsClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc._id;
    }
})
@post<StudentsClass[]>(/^find/, function (docs) {
    // @ts-ignore
    if (this.op === "find") {
        docs.forEach((doc) => {
            doc.id = doc._id.toString();
            doc._id = doc.id;
        });
    }
})
@ModelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "students",
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
class StudentsClass {
    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Students = getModelForClass(StudentsClass);
export { Students, StudentsClass };
