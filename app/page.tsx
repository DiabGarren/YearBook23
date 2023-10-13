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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <StudentSets {...setProps} />
        </main>
    );
}
