"use client";
import StudentSets from "@/components/student_sets/studentSets";
import { useState } from "react";
import { dm_sans } from "@/utils/fonts";
import HomePagePlayBar from "@/components/play_bar/homePage";
import RecentlyPlayed from "@/components/recently_played/recentlyPlayed";
import PlayScreen from "@/components/play_screen/playScreen";

export default function Home() {
    const [students, setStudents] = useState([
        {
            _id: "6529b2e5947f5b88ef88620d",
            name: "Jason",
            quote: "Child of The King of Kings",
            image: "jason.jpg",
            imagePos: "top",
            colours: ["#fefefe", "#223454"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88620e",
            name: "Owen",
            quote: "Never back down, NEVER WHAT??",
            image: "owen.jpg",
            colours: ["#dd6068", "#332d31"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88620f",
            name: "Christo",
            quote: "Lonely at the top but crowded at the bottom",
            image: "christo.jpg",
            colours: ["#9c9c9a", "#343434"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886210",
            name: "Bilal",
            quote: "I am way cuter in person",
            image: "bilal.jpg",
            colours: ["#f0e4ca", "#192b0a"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886211",
            name: "Aiza",
            quote: "I had to put my grades up for adoption because I couldn't raise them",
            image: "aiza.jpg",
            colours: ["#46382a", "#3d332b"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886212",
            name: "Sophia",
            quote: "What even is school?",
            image: "unknown.jpg",
            colours: ["#e4e6e7", "#242526"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886213",
            name: "Abby",
            quote: "The OG's since 05",
            image: "abby.jpg",
            colours: ["#cfd2cb", "#b1a99b"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886214",
            name: "Ahmad",
            quote: "The OG's since 05",
            image: "ahmad.jpg",
            colours: ["#101417", "#25273c"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886215",
            name: "Lesedi",
            quote: "I NEVER LOSE I EITHER WIN OR LEARN",
            image: "lesedi.jpg",
            imagePos: "top",
            colours: ["#040605", "#1c2319"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886216",
            name: "Bafentswe(BEEF)",
            quote: "I WILL BE THERE NO MATTER WHAT",
            image: "beef.jpg",
            colours: ["#160c00", "#291e0b"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886217",
            name: "Iphapeng",
            quote: "I WIL LOVE IT,AND I THINK I WILL DESERVE IT ",
            image: "iphapeng.jpg",
            colours: ["#9dadbb", "#382a22"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886218",
            name: "Mulondi",
            quote: "Just finished my 12yr sentence ",
            image: "Molondi.jpg",
            colours: ["#4e3e3f", "#271f1d"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886219",
            name: "Lauren",
            quote: "See you all from the billboards",
            image: "lauren.jpg",
            imagePos: "top",
            colours: ["#fefefe", "#b38e74"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621a",
            name: "Megan ",
            quote: "When you being real, you ain't worried 'bout who fake- Megan Thee Stalion",
            image: "megan.jpg",
            imagePos: "-52px",
            colours: ["#ce7aa6", "#261c23"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621b",
            name: "Willo",
            quote: "Vroom Vroom so let's ride ",
            image: "willo2.jpg",
            imagePos: "top",
            colours: ["#585b52", "#1f1309"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621c",
            name: "Chloe",
            quote: "And with that, it all comes to an end. All the moments we spent together will now live on as memories and our future will now become our present...",
            image: "chloe2.jpg",
            imagePos: "-23px",
            colours: ["#5a613f", "#3e0c17"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621d",
            name: "Khanyi",
            quote: "Nothing lasts forever but atleast we got these memories- J Cole",
            image: "khanyi2.jpg",
            imagePos: "top",
            colours: ["#e7e5d8", "#352218"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621e",
            name: "Ruben",
            quote: "Shoot for the moon; if you miss you will die in space, which is cool ",
            image: "ruben.jpg",
            imagePos: "top",
            colours: ["#6b8458", "#272946"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88621f",
            name: "Keagan",
            quote: "Kiki ki Ra EY EY EY- Danny Ricc",
            image: "Keagan.png",
            imagePos: "-15px",
            colours: ["#101a0d", "#988221"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886220",
            name: "Nalize",
            quote: "KIKI AY -Max Verstappen  ",
            image: "nalize.jpg",
            imagePos: "bottom",
            colours: ["#53743a", "#242631"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886221",
            name: "Mckayla",
            quote: "love anyway ",
            image: "mckayla.jpg",
            imagePos: "bottom",
            colours: ["#4d5c7c", "#4b4a49"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886222",
            name: "KC",
            quote: "School is important, but swimming's importanter...eat pasta to swim fasta",
            image: "kc.jpg",
            colours: ["#eaede6", "#676c33"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886223",
            name: "Waden",
            quote: "All shots you don't take, you miss. DONT HAVE GWABS",
            image: "waden.jpg",
            colours: ["#c0ddef", "#727371"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886224",
            name: "Neo",
            quote: "Don't stop until you're proud",
            image: "neo.jpg",
            colours: ["#001d3f", "#d3b7a1"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886225",
            name: "Tshego",
            quote: "y'all went to high school, i went to school high ",
            image: "tshego.jpg",
            colours: ["#8d5e4b", "#b25948"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886226",
            name: "Lethabo",
            quote: "They say cheating doesnt get you anywhere but look at me now ",
            image: "lethabo.jpg",
            colours: ["#668cbb", "#5b493d"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886227",
            name: "Tumi",
            quote: "No such thing as a life that's better than yours",
            image: "tumi.jpg",
            colours: ["#b4b49e", "#494249"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886228",
            name: "Palesa",
            quote: "The best oppurtunities are the ones you create for yourself ",
            image: "palesa.jpg",
            colours: ["#6a8ea8", "#bb7036"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886229",
            name: "Aiden",
            quote: "How long is a metre",
            image: "aiden.jpg",
            colours: ["#bbbb10", "#4b3ac6"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622a",
            name: "Alomaine",
            quote: "Patrolling the Mojave almost makes you wish for a nuclear winter ",
            image: "alomaine.jpg",
            colours: ["#bec0bd", "#ac8773"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622b",
            name: "Arthur",
            quote: "Why have a real girlfriend when I can just 3D print one",
            image: "Arthur.jgp",
            colours: ["#e4e6e7", "#242526"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622c",
            name: "Keamo",
            quote: "not bad at all, i'd rate it a 20/23",
            image: "keamo.jpg",
            colours: ["#999c95", "#b16e45"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622d",
            name: "Kea",
            quote: "Who put mu future in MY hands? Like why would you do tha?",
            image: "kea.jpg",
            colours: ["#e5e5ed", "#495e71"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622e",
            name: "Nae Nae ",
            quote: "Maths core was my biggest mistake",
            image: "Nae Nae.jpg",
            colours: ["#191b1a", "#d79f89"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef88622f",
            name: "Karabo",
            quote: "Im not sleeping i promise",
            image: "unknown.jpg",
            colours: ["#e4e6e7", "#242526"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886230",
            name: "Kyla",
            quote: "Just finished my 12yr sentence",
            image: "kyla.jpg",
            imagePos: "top",
            colours: ["#6b764c", "#8a1412"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886231",
            name: "Sihle",
            quote: "Loving is never a waste",
            image: "sihle.jpg",
            colours: ["#6da9f0", "#b2bf67"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886232",
            name: "Damian",
            quote: "I was almost arrested for being too 'quirky'",
            image: "damian.jpg",
            imagePos: "top",
            colours: ["#e1d7ce", "#221914"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886233",
            name: "Christian",
            quote: "The Shop is my top priority",
            image: "christian.jpg",
            colours: ["#857e70", "#302f3f"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886234",
            name: "Leo",
            quote: "I love two things, passing and blondes",
            image: "leo.jpg",
            imagePos: "top",
            colours: ["#773c2e", "#da966f"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886235",
            name: "Reality",
            quote: "Word of the day, Learn from yesterday, Live for today, Hope for tomorrow bro",
            image: "reality.jpg",
            colours: ["#523128", "#975e4c"],
            playing: false,
        },
        {
            _id: "6529b2e5947f5b88ef886236",
            name: "Taine",
            quote: "Did i even go to this school ",
            image: "unknown.jpg",
            colours: ["#e4e6e7", "#242526"],
            playing: false,
        },
    ]);
    const [playing, setPlaying] = useState(false);
    const props = {
        students,
        setStudents,
        playing,
        setPlaying,
    };

    let display = (
        <>
            <div className="mx-[10px] mt-[20px] mb-[10px]">
                <h1 className="text-[2em] font-[600] leading-[30px]">
                    Good morning
                </h1>
                <h2 className="text-[1.5em] font-[500]">Class of 2023</h2>
            </div>
            <RecentlyPlayed />
            <StudentSets {...props} />
            <HomePagePlayBar />
        </>
    );

    if (playing) {
        display = <PlayScreen {...props} />;
    }

    return (
        <main
            className="flex flex-col items-center max-w-[450px] mx-[auto]"
            style={{
                fontFamily: dm_sans.style.fontFamily,
            }}
        >
            <div className="relative mx-[auto] w-[100%] max-w-[450px]">
                {display}
            </div>
        </main>
    );
}
