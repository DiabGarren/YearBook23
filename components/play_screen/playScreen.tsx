export default function PlayScreen(props: any) {
    let playing: {
        _id: string;
        name: string;
        quote: string;
        image: string;
        imagePos: string;
        colours: string[];
    } = {
        _id: "",
        name: "",
        quote: "",
        image: "",
        imagePos: "",
        colours: [""],
    };
    props.students.forEach((student: any) => {
        if (student.playing) {
            playing = student;
        }
    });
    return (
        <div
            className="h-[88vh]"
            style={{
                background: `linear-gradient(to bottom, ${playing.colours[0]}, ${playing.colours[1]}`,
            }}
        >
            <div
                className="grid h-[70px] items-center px-[15px]"
                style={{
                    gridTemplateColumns: "50px 1fr 50px",
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.7))",
                }}
            >
                <button
                    onClick={() => {
                        props.setStudents(
                            props.students.map((student: any) => {
                                if (student.playing) student.playing = false;
                                return student;
                            })
                        );
                        props.setPlaying(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="11"
                        viewBox="0 0 19 11"
                        fill="none"
                    >
                        <path
                            d="M1 1L9.5 10L18 1"
                            stroke="#ffffff"
                            strokeLinecap={"round"}
                            strokeWidth={"2"}
                        />
                    </svg>
                </button>
                <h1 className="text-center">{playing.name}</h1>
            </div>
            <div className="mx-[15px]">
                <div
                    className="w-[100%] mx-auto bg-cover rounded-[10px]"
                    style={{
                        backgroundImage: `url('/images/${playing.image}')`,
                        aspectRatio: "1/1",
                        backgroundPosition: `center ${
                            playing.imagePos ? playing.imagePos : "center"
                        }`,
                    }}
                ></div>
                <h2 className="mt-[20px] text-[1.7em] font-[700]">
                    {playing.name}
                </h2>
                <p className="text-[.95em] text-grey-light-1">
                    {playing.quote}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="10"
                    fill="none"
                    className="mt-[15px]"
                >
                    <rect y="2.5" width="100%" height="4" fill="#636363" />
                    <rect
                        y="2.5"
                        width="80%"
                        height="4"
                        rx="2"
                        ry="2"
                        fill="#d9d9d9"
                    />
                    <circle cx="80%" cy="5" r="5" fill="#d9d9d9" />
                </svg>
                <div
                    className="grid"
                    style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                >
                    <p className="text-grey-light text-[.8em]">2:46</p>
                    <p className="col-[3] text-right text-grey-light text-[.8em]">
                        3:38
                    </p>
                </div>
                <div
                    className="grid items-center justify-items-center mt-[20px]"
                    style={{ gridTemplateColumns: "40px 1fr 60px 1fr 40px" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="20"
                        viewBox="0 0 25 20"
                        fill="none"
                    >
                        <path
                            d="M19.1996 2V3.58257V5.16515L22.3647 3.58257L19.1996 2Z"
                            fill="#d9d9d9"
                        />
                        <path
                            d="M19.1996 17.9297V16.3472V14.7646L22.3647 16.3472L19.1996 17.9297Z"
                            fill="#d9d9d9"
                        />
                        <path
                            d="M1 3.68659C1 3.68659 3.42918 3.45253 4.95643 3.68659C11.4504 4.68183 9.51619 15.526 16.0344 16.3472C17.2608 16.5017 19.1996 16.3472 19.1996 16.3472M19.1996 16.3472V17.9297L22.3647 16.3472L19.1996 14.7646V16.3472ZM1 16.2432C1 16.2432 3.42918 16.4772 4.95643 16.2432C11.4504 15.2479 9.51619 4.40377 16.0344 3.58257C17.2608 3.42807 19.1996 3.58257 19.1996 3.58257M19.1996 3.58257V2L22.3647 3.58257L19.1996 5.16515V3.58257Z"
                            stroke="#d9d9d9"
                            stroke-width="2"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <path
                            d="M28 28V0L4.42105 12.5263V0H0V28H4.42105V15.4737L28 28Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="63"
                        viewBox="0 0 62 63"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M30.9222 0C13.8474 8.30362e-07 0.321658 13.8448 0.0055127 30.9167C-0.316653 48.3136 13.5222 63 30.9222 63C48.3221 63 62.161 48.3136 61.8388 30.9167C61.5227 13.8448 47.997 -8.30362e-07 30.9222 0ZM41.4167 30.9167L23.3333 20.4167V41.4167L41.4167 30.9167Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <path
                            d="M0 0L0 28L23.5789 15.4737V28H28L28 0H23.5789L23.5789 12.5263L0 0Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                    >
                        <path
                            d="M7.64284 19.7143V17.5V15.2857L3.21426 17.5L7.64284 19.7143Z"
                            fill="#d9d9d9"
                        />
                        <path
                            d="M15.0238 4.21429V2L19.4524 4.21429L15.0238 6.42858V4.21429Z"
                            fill="#d9d9d9"
                        />
                        <path
                            d="M1 13.8095C1 13.8095 1 10.1191 1 7.90477C1 6.42858 3.21426 4.21429 4.69048 4.21429C7.64283 4.21429 15.0238 4.21429 15.0238 4.21429M15.0238 4.21429V2L19.4524 4.21429L15.0238 6.42858V4.21429ZM21.6667 7.90476V13.8095C21.6667 15.2857 19.4524 17.5 17.9762 17.5H7.64284M7.64284 17.5V19.7143L3.21426 17.5L7.64284 15.2857V17.5Z"
                            stroke="#d9d9d9"
                            stroke-width="2"
                        />
                    </svg>
                </div>
            </div>
            {/* <div
                className="absolute bottom-0 h-[70px] w-[100%]"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(18, 18, 18,0), rgba(18, 18, 18,.7))",
                }}
            ></div> */}
        </div>
    );
}
