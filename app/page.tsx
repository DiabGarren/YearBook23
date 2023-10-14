"use client";
import StudentSets from "@/components/student_sets/studentSets";
import { useState } from "react";
import { dm_sans } from "@/utils/fonts";
import HomePagePlayBar from "@/components/play_bar/homePage";
import RecentlyPlayed from "@/components/recently_played/recentlyPlayed";

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
                <RecentlyPlayed />
                <StudentSets {...setProps} />
                <HomePagePlayBar />
            </div>
        </main>
    );
}
