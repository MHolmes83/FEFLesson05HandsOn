const formatCurrentDate = () => {
    // Get current date
    const currentDate = new Date();

    // Define month names array
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Format date as "05 July 2023"
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    return formattedDate;
}

// Call the function and place the formatted date in the document
document.getElementById("date").textContent = formatCurrentDate();
