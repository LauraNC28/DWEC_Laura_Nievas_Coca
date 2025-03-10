//Exercise 1: Creating Date Objects

    //Create a Date object for your birthday (include year, month, day, hours, minutes, and seconds).
    const birthday = new Date(2004, 2, 28, 14, 30, 0); // Año, mes, día, hora, minutos, segundos
    console.log(birthday); 

    //Create a Date object with only the year, month, and day (no hours or minutes) and display the date.
    const fechaSimple = new Date(2004, 2, 28); 
    console.log(fechaSimple);

    //Create a Date object using the number of milliseconds since January 1, 1970, to represent the date January 1, 2020.
    const fechaMiliseg = new Date(1577836800000); // Milisegundos para 2020-01-01 00:00:00
    console.log(fechaMiliseg);


//Exercise 2: Outputting Dates in Different Formats

    //Create a Date object for December 25, 2024, at 6:30 PM.
    const nocheBuena = new Date(2024, 11, 25, 18, 30, 0); 
    console.log(nocheBuena);

    //Create a Date object with the current date and time.
    const ahora = new Date();
    console.log(ahora); // Fecha y hora actuales

    //Use toLocaleString with a set of custom options to display the date in the format "day of the week, day of the month of year, hour:minute:second" (in Spanish).
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const fechaFormateada = now.toLocaleString("es-ES", options);
    console.log(fechaFormateada);


//Exercise 3: Adjusting Dates

    //Create a Date object with the current date.
    const currentDate = new Date();
    console.log("Fecha actual:", currentDate);

        //Adjust the date to be the 1st of January of the following year.
        const nextYear = new Date(currentDate);
        nextYear.setFullYear(currentDate.getFullYear() + 1);
        nextYear.setMonth(0); // Enero
        nextYear.setDate(1); // Primer día

        //Adjust the time to 12:00 PM.
        nextYear.setHours(12, 0, 0); // 12:00 PM
        console.log("1 de enero del próximo año a las 12:00 PM:", nextYear);

        //Adjust the month to the previous month.
        const previousMonth = new Date(currentDate);
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        console.log("Mes anterior:", previousMonth);

    //Create a Date object with the current date.
    const adjustedDate = new Date(currentDate);

        //Subtract 10 days from the date.
        adjustedDate.setDate(adjustedDate.getDate() - 10);

        //Add 2 hours to the current time.
        adjustedDate.setHours(adjustedDate.getHours() + 2);

        //Change the day of the month to 15.
        adjustedDate.setDate(15);


//Exercise 4: Comparing Dates

    //Create two Date objects with different dates.
    const date1 = new Date(2024, 11, 25); 
    const date2 = new Date(2023, 10, 15);

    console.log("Fecha 1:", date1);
    console.log("Fecha 2:", date2);
    console.log("¿Fecha 1 es mayor que Fecha 2?", date1 > date2);

    //Create two dates with the same values but in different time zones using toLocaleString with the timeZone option.
    const dateInUTC = new Date("2024-12-25T12:00:00Z"); // Fecha en UTC
    const dateInLocalTime = dateInUTC.toLocaleString("es-ES", { timeZone: "America/Mexico_City" });
    const dateInTokyoTime = dateInUTC.toLocaleString("es-ES", { timeZone: "Asia/Tokyo" });

    console.log("Fecha en zona horaria UTC:", dateInUTC);
    console.log("Fecha en zona horaria de Ciudad de México:", dateInLocalTime);
    console.log("Fecha en zona horaria de Tokio:", dateInTokyoTime);


//Exercise 5: Date Validation

    //Create a Date object with an invalid date (for example, February 31st).
    const invalidDate = new Date(2024, 1, 31); 
    console.log("Fecha inválida:", invalidDate);

    if (isNaN(invalidDate)) {
        console.log("La fecha no es válida.");
    } else {
        console.log("La fecha es válida:", invalidDate);
    }

    //Create a function that receives a date in text format and returns a Date object with the corresponding date.
    function parseDate(dateString) {
        const parsedDate = new Date(dateString);
    
        if (isNaN(parsedDate)) {
            return "La fecha proporcionada no es válida.";
        }
        return parsedDate;
    }


//Exercise 6: Date and Time with Time Zones
    
    //Create a Date object with the current date.
    const currentDate2 = new Date();

        //Display the date in both local and UTC formats.
        console.log("Fecha actual (local):", currentDate2.toString());
        console.log("Fecha actual (UTC):", currentDate2.toUTCString());

    //Create a Date object for January 1, 2023, at 12:00 PM.
    const specificDate = new Date(2023, 0, 1, 12, 0, 0); // Mes 0 = enero

        //Display the time in the local time zone.
        console.log("Fecha específica (local):", specificDate.toString());

        //Use the timeZoneName option to show the full time zone name.
        const options2 = { timeZoneName: "long" };
        console.log("Fecha específica con zona horaria:", specificDate.toLocaleString("es-ES", options2));


//Exercise 7: Using Intl.DateTimeFormat to Format Dates

    //Use Intl.DateTimeFormat to format July 4, 2023, showing only the weekday, month, and year.
    const specificDate2 = new Date(2023, 6, 4); 
    const options3 = { weekday: "long", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("es-ES", options3);
    console.log("Fecha formateada (día, mes, año):", formatter.format(specificDate2));

    //Use Intl.DateTimeFormat to format the current date with an option that displays the date and time in short format.
    const currentDate3 = new Date();
    const options4 = { dateStyle: "short", timeStyle: "short" };
    const formatter2 = new Intl.DateTimeFormat("es-ES", options4);
    console.log("Fecha y hora actual (formato corto):", formatter2.format(currentDate3));

