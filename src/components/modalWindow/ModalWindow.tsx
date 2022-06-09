import React from 'react';
import {Theme, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {useNavigate} from "react-router-dom";

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    },
}))(MuiDialogActions);

export default function ModalWindow() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(false);
        navigate("/", {state: {period: "start"}})

    };
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Ваш временный пароль - 123456
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClick}>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
