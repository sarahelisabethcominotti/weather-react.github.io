import { Card } from "@mui/material";

function CreateDays(props) {
  let today = new Date();
  let newDate = new Date(today.setHours(today.getHours() + 12));
  newDate.setDate(today.getDate() + props.i);

  function formatDate(date, format = "en-GB") {
    return date.toLocaleDateString(format, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // console.log(newDate)
  const normalDate = formatDate(newDate);

  // console.log(normalDate)

  return (
    <Card sx={{ bgcolor: "rgba(224, 247, 250, 0.7)", borderRadius: 1, my: 1 }}>
      {normalDate}
    </Card>
  );
}

export default CreateDays;
