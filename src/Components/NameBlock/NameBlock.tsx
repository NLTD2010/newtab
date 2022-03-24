import "./NameBlock.css";
import Typography from "@mui/material/Typography";

interface Props {
  name: string;
}

const NameBlock: React.FC<Props> = ({ name }) => {
  const date = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };

  return (
    <div className="sidebar">
      <Typography variant="h5" color="whitesmoke">
        Bạn có khỏe không 😀, <br />
        {name}?
      </Typography>
      <Typography variant="h5">
        Hôm nay là
        <span className="text-label">
          {" "}
          {new Date().toLocaleString("vi-vn", { weekday: "long" })},
        </span>
        <div className="text-label">
          {date.toLocaleDateString()},{" "}
          {date.toLocaleString("vi-VN", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
      </Typography>
    </div>
  );
};

export default NameBlock;
