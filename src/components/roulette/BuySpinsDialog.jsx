import { Button, Card, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";

const BuySpinsDialog = (props) => {
    const { open, handleOpen, handleCancel, handleBuy } = props;

    const items = [
        {
            spins: 10,
            originalPrice: "29.999",
            discountPrice: "14.999"
        },
        {
            spins: 20,
            originalPrice: "59.999",
            discountPrice: "29.999"
        },
        {
            spins: 50,
            originalPrice: "149.999",
            discountPrice: "74.999"
        },
        {
            spins: 100,
            originalPrice: "299.999",
            discountPrice: "149.999"
        },
        {
            spins: 500,
            originalPrice: "1.499.999",
            discountPrice: "749.999"
        },
        {
            spins: 1000,
            originalPrice: "2.999.999",
            discountPrice: "1.499.999"
        }
    ];

    return (
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
            <Typography className="text-lg font-inter font-medium">Bạn đã hết lượt quay. Bạn có muốn mua thêm lượt quay?</Typography>
        </DialogHeader>
        <DialogBody className="grid grid-cols-3 gap-5 mb-2">
            { items.map(i => (
                <Card className="flex flex-col gap-2 items-center bg-[#d6f0f7] py-3">
                <Typography className="font-semibold text-lg">{i.spins} lượt quay</Typography>
                <Button className="bg-purple py-1" onClick={() => handleBuy(i.spins)}>
                    <Typography className="text-xs line-through">{i.originalPrice} VNĐ</Typography>
                    <Typography>{i.discountPrice} VNĐ</Typography>
                </Button>
            </Card>
            ))}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            className="text-purple w-full text-base"
            onClick={handleCancel}
          >
            <span>Không, cảm ơn</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
}

export default BuySpinsDialog;