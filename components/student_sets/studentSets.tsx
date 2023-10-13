/* eslint-disable react/jsx-key */
import Image from "next/image";

export default function StudentSets(props: any) {
    if (props.students && props.students.length === 0) {
        var XMLHttpRequest = require("xhr2");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `${process.env.NEXT_PUBLIC_API_URL}/students`);
        xhr.onload = () => {
            if (xhr.status === 200) {
                props.setStudents(JSON.parse(xhr.responseText).students);
            }
        };
        xhr.send();
    }

    const set: any[] = [];
    const students = props.students.map((student: any, index: number) => {
        const displayStudent = (
            <div className="mx-[5px] my-[3px] p-[10px] pb-[2px] rounded-[5px] bg-grey-dark">
                <div
                    className="h-[150px] w-[150px] rounded-[5px] bg-cover"
                    style={{
                        backgroundImage: `url('/images/${student.image}')`,
                        backgroundPosition: `center ${
                            student.imagePos ? student.imagePos : "center"
                        }`,
                    }}
                ></div>
                <p className="inline-block mt-[5px]">{student.name}</p>
                <p
                    className="inline-block w-[150px] mt-[1px] text-[.75em] text-grey"
                    style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        maxLines: "1",
                    }}
                >
                    {student.quote}
                </p>
            </div>
        );

        set.push(displayStudent);
        if (index % 6 === 5) {
            const newSet = [...set];
            set.splice(0, set.length);
            return (
                <div
                    className="flex flex-row max-w-[95%] mx-[auto] mt-[25px]"
                    style={{ overflowX: "auto" }}
                >
                    {newSet}
                </div>
            );
        }
        return <></>;
    });
    return students;
}
