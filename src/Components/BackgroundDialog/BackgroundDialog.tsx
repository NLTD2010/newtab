import { useState, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./BackgroundDialog.css";

const backgroundList = [
  {
    description: "big ngu",
    image: "/wallpapers/12-4.jpg",
  },
  {
    description: "Monetary",
    image: "/wallpapers/37-2.jpg",
  },
  {
    description: "mojave",
    image: "/wallpapers/4-2.jpg",
  },
  {
    description: "Catalina",
    image: "/wallpapers/24-5.jpg",
  },
  {
    description: "Lake",
    image: "/wallpapers/53.jpg",
  },
  {
    description: "Forest",
    image: "/wallpapers/40.jpg",
  },
  {
    description: "Girl",
    image: "/wallpapers/43.jpg",
  },
  {
    description: "Girl in the dark",
    image: "/wallpapers/49.jpg",
  },
  {
    description: "Wolf",
    image: "/wallpapers/44.jpg",
  },
];

interface Props {
  setBackground: Dispatch<SetStateAction<string>>;
}

const BackgroundDialog: React.FC<Props> = ({ setBackground }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (image: string) => {
    handleClose();
    setBackground(image);
    localStorage.setItem("background", image);
  };

  return (
    <div className="BackgroundButton">
      <br />
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Background
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>chọn hình nền</DialogTitle>
        <List sx={{ pt: 0 }}>
          {backgroundList.map(({ description, image }) => (
            <ListItem
              button
              onClick={() => handleListItemClick(image)}
              key={description}
            >
              <ListItemAvatar>
                <Avatar src={image} />
              </ListItemAvatar>
              <ListItemText primary={description} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default BackgroundDialog;
