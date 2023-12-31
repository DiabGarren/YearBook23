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
                } block my-[3px] pt-[10px] pb-[0px] bg-grey-dark cursor-pointer`}
                style={{
                    background: `linear-gradient(to bottom, ${student.colours[0]}, ${student.colours[1]})`,
                    borderRadius: "10px 10px 12px 12px",
                }}
                onClick={() => {
                    props.setStudents(
                        props.students.map((s: any, i: number) => {
                            if (i === index) {
                                s.playing = true;
                            } else {
                                s.playing = false;
                            }
                            props.setPlaying(true);
                            return s;
                        })
                    );
                }}
            >
                <div
                    className="h-[150px] w-[150px] mx-[10px] rounded-[5px] bg-cover"
                    style={{
                        backgroundImage: `url('/images/${student.image}')`,
                        backgroundPosition: `center ${
                            student.imagePos ? student.imagePos : "center"
                        }`,
                    }}
                ></div>
                <div
                    className="px-[10px] pb-[10px]"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 100%)",
                        borderRadius: "0 0 10px 10px",
                    }}
                >
                    <p className="inline-block mt-[5px]">{student.name}</p>
                    <p
                        className="block w-[150px] mt-[1px] text-[.75em] text-grey"
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
