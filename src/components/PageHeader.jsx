import { Typography } from "@material-tailwind/react";

const PageHeader = ({label}) => {
    return (
        <Typography className='font-inter font-semibold text-2xl self-start'>
            {label}
        </Typography>
    );
}

export default PageHeader;