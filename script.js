
const progress = (colour) => {
    return `<div class="progress">
    <svg class="elapsed" xmlns="http://www.w3.org/2000/svg" width="51" height="9" viewBox="0 0 51 9" fill="none">
      <path d="M42.7578 7L1.00001 6.99999C0.5 7 7.62939e-06 6.58577 7.62939e-06 5.99998V4.49998V2.99998C7.62939e-06 2.4142 0.5 1.99998 1.00001 1.99998L42.7535 2C43.5601 0.791038 44.937 0 46.5 0C48.4593 0 50.1262 1.25221 50.744 3C50.9098 3.46917 51 3.97405 51 4.5C51 5.02595 50.9098 5.53083 50.744 6C50.1262 7.74779 48.4593 9 46.5 9C44.9398 9 43.565 8.20599 42.7578 7Z" fill="#D9D9D9"/>
    </svg>
    <svg class="total" xmlns="http://www.w3.org/2000/svg" width="233" height="3" viewBox="0 0 233 3" fill="none">
      <path d="M233 1C233 0.5 232.5 0 232 0H0.999996C0.499999 0 0 0.5 0 1V2C0 2.5 0.499999 3 0.999996 3H232C232.5 3 233 2.5 233 2V1Z" fill="${colour}"/>
    </svg>
    </div>`;
}
const controls = `<div class="controls">
<div class="shuffle">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M14.6296 1V2.18519V3.37037L17 2.18519L14.6296 1Z" fill="#A1A1A1"/>
        <path d="M1 11.6667C1 11.6667 2.81921 11.842 3.96296 11.6667C8.82628 10.9213 7.37775 2.80018 12.2593 2.18519C13.1777 2.06948 14.6296 2.18519 14.6296 2.18519M14.6296 2.18519V1L17 2.18519L14.6296 3.37037V2.18519Z" stroke="#A1A1A1"/>
        <path d="M14.6296 12.9297V11.7446V10.5594L17 11.7446L14.6296 12.9297Z" fill="#A1A1A1"/>
        <path d="M1 2.26308C1 2.26308 2.81921 2.08779 3.96296 2.26308C8.82628 3.00842 7.37775 11.1296 12.2593 11.7446C13.1777 11.8603 14.6296 11.7446 14.6296 11.7446M14.6296 11.7446V12.9297L17 11.7446L14.6296 10.5594V11.7446Z" stroke="#A1A1A1"/>
    </svg>
</div>
<div class="prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M19 19V0L3 8.5V0H0V19H3V10.5L19 19Z" fill="#D9D9D9" />
    </svg>
</div>
<div class="pause">
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" viewBox="0 0 55 54" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M27.5 0C12.8645 7.11739e-07 1.27098 11.867 1 26.5C0.723858 41.4117 12.5858 54 27.5 54C42.4142 54 54.2761 41.4117 54 26.5C53.729 11.867 42.1355 -7.11739e-07 27.5 0ZM24 17H19V37H24V17ZM36 17H31V37H36V17Z"
            fill="#D9D9D9" />
    </svg>
</div>
<div class="next">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M0 0L0 19L16 10.5V19H19L19 0H16L16 8.5L0 0Z" fill="#D9D9D9" />
    </svg>
</div>
<div class="repeat">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
        <path d="M11.8572 1V2.71429V4.42858L15.2857 2.71429L11.8572 1Z" fill="#A1A1A1"/>
        <path d="M1.00001 10.1429C1.00001 10.1429 1.00001 7.28572 1.00001 5.57143C1.00001 4.42858 2.71427 2.71429 3.85715 2.71429C6.14285 2.71429 11.8572 2.71429 11.8572 2.71429M11.8572 2.71429V1L15.2857 2.71429L11.8572 4.42858V2.71429Z" stroke="#A1A1A1"/>
        <path d="M6.14284 14.7143V13V11.2857L2.71426 13L6.14284 14.7143Z" fill="#A1A1A1"/>
        <path d="M17 5.57143C17 5.57143 17 8.42857 17 10.1429C17 11.2857 15.2857 13 14.1428 13C11.8572 13 6.14284 13 6.14284 13M6.14284 13V14.7143L2.71426 13L6.14284 11.2857V13Z" stroke="#A1A1A1"/>
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
    ${progress(students[0].group[0].colours[0])}
    ${controls}

</div>`;
    output += `<div class="play" style="background: linear-gradient(to bottom, ${students[0].group[1].colours[0]}, ${students[0].group[1].colours[1]})">
    <div class="img">
        <img src="./images/${students[0].group[1].image}" alt="${students[1].group[0].name}" />
    </div>
    <div class="quote">
        <h3>${students[0].group[1].name}</h3>
        <p>${students[0].group[1].quote}</p>
    </div>
    ${progress(students[0].group[1].colours[0])}
    ${controls}

</div>`;


    document.querySelector('main').innerHTML = output;


}


loadHome();