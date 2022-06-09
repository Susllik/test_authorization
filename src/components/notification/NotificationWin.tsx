import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const NotificationWin = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Данные авторизации в системе успешно сохранены"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
};
export default NotificationWin;