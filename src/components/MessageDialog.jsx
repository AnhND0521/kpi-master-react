import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";

const MessageDialog = (props) => {
    const { message, open, handleOpen, handleConfirm } = props;

    return (
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
            <Typography className="text-lg font-inter font-medium">{ message }</Typography>
        </DialogHeader>
        <DialogFooter>
          <Button variant="gradient" className="bg-purple" onClick={handleConfirm}>
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
}

export default MessageDialog;