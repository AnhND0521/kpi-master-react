import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography, Card, Button } from "@material-tailwind/react";
import PageHeader from "../../components/PageHeader";
import Wrapper from "../../components/Wrapper";
import { useState } from "react";
import { getCurrentKpis, getPastKpis, getNumberOfFinishedTasks, calculateKpiScore, loadData } from "../../utils/dataUtils";
import moment from "moment";
import { Gauge } from "@mui/x-charts";
import KPITable from "../../components/KPITable";
import { ArrowDownOnSquareIcon, ArrowPathIcon, DocumentDuplicateIcon, PlusIcon } from "@heroicons/react/24/outline";
import AddKPI from "./AddKPI";
import ImportKPIDialog from "../../components/ImportKPIDialog";

const KPIListPage = (props) => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const [currentKpis, setCurrentKpis] = useState(getCurrentKpis());
    const [pastKpis, setPastKpis] = useState(getPastKpis());

    const [openAddKPI, setOpenAddKPI] = useState(false);
    const [openImportKPI, setOpenImportKPI] = useState(false);

    const handleSync = () => {
      loadData();
      setCurrentKpis(getCurrentKpis());
    }

    return (
        <div className="w-4/5">
        <Wrapper tab={1}>
            <PageHeader label={'KPI của bạn'} />

            <div className="flex justify-start gap-4">
                <Button className="bg-purple w-56 flex gap-2 justify-center items-center" onClick={() => setOpenAddKPI(true)}>
                    <PlusIcon className="w-5" />
                    Tạo KPI mới
                </Button>
                <Button className="bg-purple w-56 flex gap-2 justify-center items-center">
                    <DocumentDuplicateIcon className="w-5" />
                    Thêm từ mẫu có sẵn
                </Button>
                <Button className="bg-purple w-56 flex gap-2 justify-center items-center" onClick={() => setOpenImportKPI(true)}>
                    <ArrowDownOnSquareIcon className="w-5" />
                    Nhập từ bên ngoài
                </Button>
            </div>
            
            <div className="flex items-center justify-between w-full">
                <Typography variant="h5" className="font-medium mt-4">KPI hiện tại ({currentKpis.length})</Typography>
                <div className='flex items-center gap-2 cursor-pointer' onClick={handleSync}>
                    <ArrowPathIcon className='w-6'/>
                    <Typography className='text-sm font-normal font-regular font-inter'>Đồng bộ</Typography>
                </div>
            </div>
            <KPITable data={currentKpis} />
            
            <Typography variant="h5" className="font-medium mt-4">KPI đã kết thúc ({pastKpis.length})</Typography>
            <KPITable data={pastKpis} />
        </Wrapper>
        <AddKPI open={openAddKPI} setOpen={setOpenAddKPI} setCurrentKpis={setCurrentKpis} setPastKpis={setPastKpis} />
        <ImportKPIDialog open={openImportKPI} setOpen={setOpenImportKPI} setCurrentKpis={setCurrentKpis} />
        </div>
    );
}

export default KPIListPage;