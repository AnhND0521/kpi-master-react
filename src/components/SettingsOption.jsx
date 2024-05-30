import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SettingsOption = (props) => {
    const { icon, optionName, control, to } = props;
    return (
        <Link to={to} className="w-full">
            <Card className="bg-[#E8DBFC]/[.3] hover:bg-[#E8DBFD]/[0.5]">
                <CardBody className="flex justify-start items-center p-2 gap-2">
                    {icon}
                    <div className="flex justify-between items-center w-full">
                        <Typography className="text-md font-inter font-medium">{optionName}</Typography>
                        <div className="inline">{ control ? control : <ChevronRightIcon className="w-8"/> }</div>
                    </div>
                </CardBody>
            </Card>
        </Link>
    );
}

export default SettingsOption;