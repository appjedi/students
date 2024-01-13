function timeConversion(s) {
    //const [time, modifier] = s.split(' ');
    let [hours, minutes, seconds] = s.split(':');
    let militaryHours = parseInt(hours, 10);
    const t = minutes;
    let iMinutes = parseInt(t, 10);

    if (militaryHours < 0 || militaryHours > 12)
        return;
    if (iMinutes < 0 || iMinutes > 59)
        return;
    const modifier = (seconds + "").substring(2);
    seconds = (seconds + "").substring(0, 2);
    // Convert to 24-hour format
    //minutes = parseInt(minutes);
    if (modifier === 'PM' && militaryHours !== 12) {
        militaryHours += 12;
    } else if (modifier === 'AM' && militaryHours === 12) {
        militaryHours = 0;
    }

    // Format the result
    const militaryTime = `${String(militaryHours).padStart(2, '0')}:${minutes}:${seconds}`;

    return militaryTime;
}
const s = "12:01:00AM";
const result = timeConversion(s);
console.log(result);