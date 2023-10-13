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
            <div className="mx-[5px] my-[3px]">
                <div
                    className="h-[150px] w-[150px] rounded-[5px] bg-cover"
                    style={{
                        backgroundImage: `url('/images/${student.image}')`,
                        backgroundPosition: student.imagePos
                            ? student.imagePos
                            : "center",
                    }}
                ></div>
                <p>{student.name}</p>
            </div>
        );

        if (index % 6 !== 5) {
            set.push(displayStudent);
            return <></>;
        } else {
            set.push(displayStudent);
            const newSet = [...set];
            set.splice(0, set.length);
            return (
                <div
                    className="flex flex-row max-w-[95%]"
                    style={{ overflowX: "auto" }}
                >
                    {newSet}
                </div>
            );
        }
    });
    return students;
}
