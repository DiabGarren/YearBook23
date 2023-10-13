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
            className="flex flex-col items-center max-w-[450px] max-h-[100vh] h-[99vh] mx-[auto]"
            style={{
                fontFamily: dm_sans.style.fontFamily,
                overflowY: "auto",
                overflowX: "hidden",
            }}
        >
            <div className="mx-[auto] mt-[5px] w-[100%] max-w-[450px]">
                <h1 className="text-[2em] text-center font-[600]">
                    Curro Krugersdorp 2023
                </h1>
                <StudentSets {...setProps} />
                <div></div>
            </div>
        </main>
    );
}
