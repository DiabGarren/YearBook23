"use client";
import StudentSets from "@/components/student_sets/studentSets";
import { useState } from "react";
import { dm_sans } from "@/utils/fonts";

export default function Home() {
    const [students, setStudents] = useState([]);
    const setProps = {
        students,
        setStudents,
    };

    return (
        <main
            className="flex flex-col items-center max-w-[450px] mx-[auto]"
            style={{
                fontFamily: dm_sans.style.fontFamily,
            }}
        >
            <div className="relative mx-[auto] mt-[15px] w-[100%] max-w-[450px]">
                <div className="mx-[10px] mb-[10px]">
                    <h1 className="text-[2em] font-[600] leading-[30px]">
                        Good morning
                    </h1>
                    <h2 className="text-[1.5em] font-[500]">Class of 2023</h2>
                </div>
                <StudentSets {...setProps} />
                <div className="sticky bottom-[0px] w-[100%] bg-[#282828] pb-[20px]">
                    <div
                        className="grid p-[8px] pr-[15px] items-center"
                        style={{ gridTemplateColumns: "60px 1fr 20px" }}
                    >
                        <div className="bg-[url('/images/Class2023.jpg')] w-[50px] h-[50px] bg-center bg-cover rounded-[5px]"></div>
                        <div>
                            <h2 className="text-[1em]">Class of 2023</h2>
                            <h3 className="text-[.8em] text-grey-light">
                                Curro Krugersdorp High School
                            </h3>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="19"
                            viewBox="0 0 17 19"
                            fill="none"
                        >
                            <path d="M0 0L0 19L17 9.5L0 0Z" fill="#d9d9d9" />
                        </svg>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="3"
                            fill="none"
                        >
                            <rect width="100%" height="1.5" fill="#525252" />
                            <rect width="80%" height="2" fill="#d9d9d9" />
                        </svg>
                    </div>
                    <div className=" grid grid-cols-3 items-center justify-items-center pt-[12px]">
                        <div className="flex flex-col w-[100%] items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                            >
                                <path
                                    d="M0 3.5V15H6V10H8V15H14V3.5L7 0L0 3.5Z"
                                    fill="#f1f1f1"
                                />
                            </svg>
                            <h3>Home</h3>
                        </div>
                        <div className="flex flex-col w-[100%] items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                            >
                                <path
                                    d="M14 15L10.9687 11M10.9687 11C9.91104 11.9335 8.52167 12.5 7 12.5C3.68629 12.5 1 9.81371 1 6.5C1 3.18629 3.68629 0.5 7 0.5C10.3137 0.5 13 3.18629 13 6.5C13 8.29204 12.2144 9.90058 10.9687 11Z"
                                    stroke="#9d9d9d"
                                    stroke-linecap="round"
                                />
                            </svg>
                            <h3 className="text-[#9d9d9d]">Search</h3>
                        </div>
                        <div className="flex flex-col w-[100%] items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M2.5 14H0.5V0.5H2.5V14Z"
                                    fill="#9d9d9d"
                                />
                                <path d="M6 14H4V0.5H6V14Z" fill="#9d9d9d" />
                                <path
                                    d="M11.5 14L7.64815 1L9.5 0.5L13.3519 13.5L11.5 14Z"
                                    fill="#9d9d9d"
                                />
                            </svg>
                            <h3 className="text-[#9d9d9d]">Your Library</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
