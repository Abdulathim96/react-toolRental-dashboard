import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function OfferViewDialog(props) {
  const { open, setOpen, offer } = props
  if (!offer) return <h1>Loading...</h1>

  return (
    <Dialog open={open} onClose={() => setOpen(false)} hideBackdrop>
      <DialogTitle>View Offer</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" color="black" fontWeight="bold">
            Title:
          </Typography>
          <Typography component="p" color="black">
            {offer.title}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Description:
          </Typography>
          <Typography component="p" color="black">
            {offer.description}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Photo:
          </Typography>
          <img src={offer.photo} width="100%" style={{ maxHeight: 200 }} />
          <Typography component="span" color="black" fontWeight="bold">
            Price:
          </Typography>
          <Typography component="p" color="black">
            {offer.price}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Phone Number:
          </Typography>
          <Typography component="p" color="black">
            {offer.phoneNumber}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Disagree</Button>
        <Button onClick={() => setOpen(false)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
