function WeekDayString(props) {
    let today = new Date();
    let newDate = new Date(today);
    let addDay = props.singleDay
    newDate.setDate(today.getDate() + addDay);
    function weekday(date, format = "en-GB") {
        return date.toLocaleDateString(format, {
            weekday: "long"
        });
    }
    
    return weekday(newDate)
    
    }
    
    export default WeekDayString