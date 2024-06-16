import WeekDayString from "./WeekdayString";
function CardTab(props) {
  
  return (
    <li className="nav-item" role="presentation">
        <WeekDayString singleDay={props.day} /> 
    </li>
  );
}

export default CardTab;