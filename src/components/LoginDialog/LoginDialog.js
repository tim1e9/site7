import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import authService from '../../services/authService';


export default function LoginDialog({
  displayLoginDialog,  // Boolean - display the login dialog
  dialogDismissed // Function - callback when the dialog has been dismissed
}) {

    const [xUserId, setXUserId] = React.useState('');
    const [xPassword, setXPassword] = React.useState('');
  
    const handleDialogClose = () => {
      dialogDismissed(null);
    };
  
    const handleLogin = async () => {
      console.log(`User ID: ${xUserId} Password: ${xPassword}`);

      try {
        const rc = await authService.loginUser(xUserId, xPassword);
        console.log("Results: " + JSON.stringify(rc));
        dialogDismissed(rc);
      } catch(exc) {
        alert(exc.message || JSON.stringify(exc));
        dialogDismissed(null);
      }
    };
  
    return(
        <div>
            <Dialog open={displayLoginDialog} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please log in, yo...
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="userid"
                    label="User Id"
                    type="text"
                    value={xUserId}
                    onInput={e => setXUserId(e.target.value)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    value={xPassword}
                    onInput={e => setXPassword(e.target.value)}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}