const formatCurrentDate = () => {
    const currentDate = new Date();
    const monthNames = 
    [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return formattedDate;
}

document.getElementById("date").textContent = formatCurrentDate();
