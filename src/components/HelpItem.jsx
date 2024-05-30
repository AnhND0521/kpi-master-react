import { Card, CardBody, Typography } from "@material-tailwind/react";

const HelpItem = (props) => {
    const { icon, label } = props;
    return (
        <Card className="bg-[#E8DBFC]/[.3] cursor-pointer hover:bg-[#E8DBFD]/[0.5]">
            <CardBody className="flex flex-col items-center gap-2 p-5">
                {icon}
                <Typography className="text-md font-medium">{label}</Typography>
            </CardBody>
        </Card>
    );
}

export default HelpItem;