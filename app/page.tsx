"use client";
import StudentSets from "@/components/student_sets/studentSets";
import { useState } from "react";

export default function Home() {
    const [students, setStudents] = useState([]);
    const setProps = {
        students,
        setStudents,
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10 max-w-[400px]">
            <StudentSets {...setProps} />
        </main>
    );
}
