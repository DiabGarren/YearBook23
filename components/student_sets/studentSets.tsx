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
            <div>
                <div
                    className={`h-[200px] w-[200px] rounded-[10px] bg-cover bg-${
                        student.imagePos ? student.imagePos : "center"
                    }`}
                    style={{
                        backgroundImage: `url('/images/${student.image}')`,
                    }}
                ></div>
                <p>{student.name}</p>
            </div>
        );

        if (index % 7 !== 6) {
            set.push(displayStudent);
            return <></>;
        } else {
            const newSet = [...set];
            set.splice(0, set.length);
            return (
                <div
                    className="flex flex-row"
                    style={{ maxWidth: "800px", overflowX: "auto" }}
                >
                    {newSet}
                </div>
            );
        }
    });
    return students;
}
