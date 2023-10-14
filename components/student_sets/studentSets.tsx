/* eslint-disable react/jsx-key */

const headers = [
    "Jump back in",
    "Made For You",
    "Your top mixes",
    "Episodes for you",
    "Best of artists",
    "Editor's Picks",
    "Made For Us",
];

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
            <div
                className={`${
                    index === 0
                        ? "ml-[10px] mr-[5px]"
                        : index % 6 === 5
                        ? "ml-[5px] mr-[10px]"
                        : "mx-[5px]"
                } my-[3px] p-[10px] pb-[2px] rounded-[10px] bg-grey-dark`}
                style={{
                    background: `linear-gradient(to bottom, ${student.colours[0]}, ${student.colours[1]})`,
                }}
            >
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
                <div>
                    <h2 className="text-[1.3em] font-[700] px-[10px] mb-[2px]">
                        {headers[index % 5]}
                    </h2>
                    <div
                        className="flex flex-row max-w-[100%] mx-[auto] mb-[20px]"
                        style={{ overflowX: "auto" }}
                    >
                        {newSet}
                    </div>
                </div>
            );
        }
        return <></>;
    });
    return students;
}
