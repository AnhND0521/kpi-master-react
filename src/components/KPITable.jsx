import { Button, Card, Typography } from "@material-tailwind/react";
import { getNumberOfFinishedTasks, calculateKpiScore } from "../utils/dataUtils";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import moment from "moment/moment";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const KPITable = ({data}) => {

    const TABLE_HEAD = ["Tên KPI", "Thời hạn", "Số nhiệm vụ", "Chỉ số KPI", "Hành động"];

    return (
        <Card className="h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-[#F0F0FF] p-4">
                            <Typography
                            color="black"
                            className="font-semibold leading-none opacity-70"
                            >
                            {head}
                            </Typography>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((kpi, index) => (
                        <tr key={kpi.id} className="even:bg-[#F9F5FF]">
                        <td className="p-4">
                            <Typography color="blue-gray" className="text-lg font-medium">
                            {kpi.name}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography color="blue-gray" className="font-normal">
                            {moment(kpi.due).format('DD/MM/YYYY')}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography color="blue-gray" className="font-normal">
                            {`${getNumberOfFinishedTasks(kpi)}/${kpi.tasks.length} nhiệm vụ`}
                            </Typography>
                        </td>
                        <td className="py-4 flex justify-start">
                            <div className="flex flex-col gap-1 items-center">
                                <Gauge width={100} height={100} value={Math.round(calculateKpiScore(kpi))} text={({value}) => `${value} %`} cornerRadius="50%" />
                                { Math.round(calculateKpiScore(kpi)) >= 110 ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <CheckBadgeIcon className="w-5" />
                                        <Typography color="green" className="text-sm font-normal">Hoàn thành xuất sắc</Typography>
                                    </div>
                                ) : Math.round(calculateKpiScore(kpi)) >= 105 ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <CheckBadgeIcon className="w-5" />
                                        <Typography color="green" className="text-sm font-normal">Hoàn thành tốt</Typography>
                                    </div>
                                ) : Math.round(calculateKpiScore(kpi)) >= 100 ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <CheckBadgeIcon className="w-5" />
                                        <Typography color="green" className="text-sm font-normal">Hoàn thành</Typography>
                                    </div>
                                ) : (<></>) }
                            </div>
                        </td>
                        <td className="p-4">
                            <Link to={`/kpi/${kpi.id}`} >
                                <Button className="bg-purple text-white">Chi tiết</Button>
                            </Link>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </Card>
    );
}

export default KPITable;