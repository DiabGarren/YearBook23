"use client";
import { Students } from "@/app/layout";
import { dm_sans } from "@/utils/fonts";
import { useState } from "react";

export default function Playing({ params }: { params: any }) {
    const [students, setStudents] = useState(Students);
    const setProps = {
        students,
        setStudents,
    };

    let student:
        | {
              _id: string;
              name: string;
              quote: string;
              image: string;
              imagePos: string;
              colours: string[];
          }
        | {
              _id: string;
              name: string;
              quote: string;
              image: string;
              colours: string[];
              imagePos?: undefined;
          } = {
        _id: "",
        name: "",
        quote: "",
        image: "",
        imagePos: "",
        colours: [""],
    };
    students.forEach((students) => {
        if (students._id === params.id) {
            student = students;
        }
    });
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
            </div>
        </main>
    );
}
