/* eslint-disable react/jsx-key */
const recent = [
    { name: "Spirit Week", image: "Class2023.jpg" },
    { name: "Valediction", image: "valediction.jpg" },
    { name: "40 days", image: "40Days.jpg" },
    { name: "Last photo day", image: "lastPhotoDay.jpg" },
    { name: "Leroy", image: "leroy.jpg" },
    { name: "First Team Rugby", image: "firstTeam.jpg" },
];

export default function RecentlyPlayed() {
    const recentlyPlayed = recent.map((recent) => {
        return (
            <div className="flex bg-grey-dark items-center p-[5px] m-[3px] rounded-[10px]">
                <div
                    className={`w-[50px] h-[50px] bg-center bg-cover rounded-[5px] mr-[8px]`}
                    style={{
                        backgroundImage: `url('/images/${recent.image}')`,
                    }}
                ></div>
                <h2 className="text-[.9em]">{recent.name}</h2>
            </div>
        );
    });
    return (
        <div className="grid grid-cols-2 max-w-[95%] mx-[auto] mb-[20px]">
            {recentlyPlayed}
        </div>
    );
}
