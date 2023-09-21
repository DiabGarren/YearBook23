
const progress = (colour, elapsed) => {
    return `
    <svg class="elapsed" xmlns="http://www.w3.org/2000/svg" width="260" height="9" viewBox="0 0 260 9" fill="none">
        <rect x="0" y="3" width="${elapsed}" height="3" rx="1.5" fill="white" />
        <rect x="${elapsed}" y="3" width="${260 - elapsed}" height="3" rx="1.5" fill="${colour}" />
        <circle cx="${elapsed + 4.5}" cy="4.5" r="4.5" fill="white" />
    </svg>
    `;
}
const controls = `<div class="controls">
<div class="shuffle">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M14.6296 1V2.18519V3.37037L17 2.18519L14.6296 1Z" fill="#A1A1A1"/>
        <path d="M14.6296 12.9297V11.7446V10.5594L17 11.7446L14.6296 12.9297Z" fill="#A1A1A1"/>
        <path d="M1 2.26308C1 2.26308 2.81921 2.08779 3.96296 2.26308C8.82628 3.00842 7.37775 11.1296 12.2593 11.7446C13.1777 11.8603 14.6296 11.7446 14.6296 11.7446M14.6296 11.7446V12.9297L17 11.7446L14.6296 10.5594V11.7446ZM1 11.6667C1 11.6667 2.81921 11.842 3.96296 11.6667C8.82628 10.9213 7.37775 2.80018 12.2593 2.18519C13.1777 2.06948 14.6296 2.18519 14.6296 2.18519M14.6296 2.18519V1L17 2.18519L14.6296 3.37037V2.18519Z" stroke="#A1A1A1"/>
    </svg>
</div>
<div class="prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M19 19V0L3 8.5V0H0V19H3V10.5L19 19Z" fill="#A1A1A1" />
    </svg>
</div>
<div class="pause">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" viewBox="0 0 55 54" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M27.5 0C12.8645 7.11739e-07 1.27098 11.867 1 26.5C0.723858 41.4117 12.5858 54 27.5 54C42.4142 54 54.2761 41.4117 54 26.5C53.729 11.867 42.1355 -7.11739e-07 27.5 0ZM24 17H19V37H24V17ZM36 17H31V37H36V17Z"
            fill="#D9D9D9" />
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5047 0C11.8692 7.11739e-07 0.275707 11.867 0.00472517 26.5C-0.271417 41.4117 11.5905 54 26.5047 54C41.419 54 53.2809 41.4117 53.0047 26.5C52.7337 11.867 41.1403 -7.11739e-07 26.5047 0ZM35.5 26.5L20 17.5V35.5L35.5 26.5Z" fill="#D9D9D9"/>
    </svg>
</div>
<div class="next">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M0 0L0 19L16 10.5V19H19L19 0H16L16 8.5L0 0Z" fill="#A1A1A1" />
    </svg>
</div>
<div class="repeat">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M6.14284 14.7143V13V11.2857L2.71426 13L6.14284 14.7143Z" fill="#A1A1A1"/>
        <path d="M11.8572 2.71429V1L15.2857 2.71429L11.8572 4.42858V2.71429Z" fill="#A1A1A1"/>
        <path d="M1 10.1429C1 10.1429 1 7.28572 1 5.57143C1 4.42858 2.71426 2.71429 3.85715 2.71429C6.14284 2.71429 11.8572 2.71429 11.8572 2.71429M11.8572 2.71429V1L15.2857 2.71429L11.8572 4.42858V2.71429ZM17 5.57143V10.1429C17 11.2857 15.2857 13 14.1429 13H6.14284M6.14284 13V14.7143L2.71426 13L6.14284 11.2857V13Z" stroke="#A1A1A1"/>
    </svg>
</div>
</div>`;

const loadHome = async () => {
    const data = await fetch("./data.json");
    const students = await data.json();
    console.log(students);

    let output = '';
    students.forEach(group => {
        output += `<div class="cards"><h1>${group.name}</h1><div class="scroll">`
        group.group.forEach(student => {
            output += `
            <div class="card">
            <img src="./images/${student.image}" alt="${student.name}"/>
            </div>`
        });
        output += `</div></div>`
    });

    output += `<div class="play" style="background: linear-gradient(to bottom, ${students[0].group[0].colours[0]}, ${students[0].group[0].colours[1]})">
    <div class="img">
        <img src="./images/${students[0].group[0].image}" alt="${students[0].group[0].name}" />
    </div>
    <div class="quote">
        <h3>${students[0].group[0].name}</h3>
        <p>${students[0].group[0].quote}</p>
    </div>
    <div class="progress">
        <svg class="elapsed" xmlns="http://www.w3.org/2000/svg" width="260" height="9" viewBox="0 0 260 9" fill="none">
            
            
            
        </svg>
    </div>
    ${controls}

</div>`;
    document.querySelector('main').innerHTML = output;
    playSong(document.querySelector('.elapsed'), students[0].group[0].colours[0]);
}

const playSong = (progress, colour) => {
    let sBar = `<rect x="0" y="3" width="0" height="3" rx="1.5" fill="white" />`;
    let eBar = `<rect x="0" y="3" width="260" height="3" rx="1.5" fill="${colour}" />`;
    let circle = `<circle cx="4.5" cy="4.5" r="4.5" fill="white" />`;

    progress.innerHTML = sBar + eBar + circle;
    
    const time = Math.ceil(Math.random() * (60 - 30) + 30);
    const scale = (260 / time);
    let elapsed = 0;
    let timer = setInterval(() => {
        elapsed++;
                
        sBar = `<rect x="0" y="3" width="${elapsed*scale}" height="3" rx="1.5" fill="white" />`;
        eBar = `<rect x="${elapsed*scale}" y="3" width="${260 - elapsed*scale}" height="3" rx="1.5" fill="${colour}" />`;
        circle = `<circle cx="${elapsed*scale}" cy="4.5" r="4.5" fill="white" />`;
        progress.innerHTML = sBar + eBar + circle;

        if (elapsed == time) {
            clearInterval(timer);
        }
    }, 1000,);
}


loadHome();
