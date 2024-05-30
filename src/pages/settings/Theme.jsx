import { Breadcrumbs, Option, Select, Spinner, Switch, Typography } from "@material-tailwind/react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ThemeColor from "../../components/ThemeColor";
import { useState } from "react";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

const Theme = () => {
    const colors = ['#7E56DA', '#800080', '#0000FF', '#008000', '#FF0000', '#98E8C1', '#FFC0CB'];
    const [selectedColor, setSelectedColor] = useState('#7E56DA');

    return (
        <Wrapper tab={4}>
                <div className='flex gap-4 items-center'>
                    <BackButton to='/settings'/>
                    <Breadcrumbs>
                        <Link to="/settings" className="opacity-60">
                            Cài đặt
                        </Link>
                        <Link to="#">
                            Chủ đề
                        </Link>
                    </Breadcrumbs>
                </div>
                <PageHeader label={'Chủ đề'} />
                <div className="flex flex-col gap-4 items-start mt-4">
                    <Typography variant="h5">
                        Màu
                    </Typography>
                    <div className="flex items-start justify-start gap-12 w-2/3">
                        {
                            colors.map(color => (
                                <ThemeColor value={color} selected={color === selectedColor} handleSelect={() => setSelectedColor(color)} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex gap-10 items-center mt-10">
                    <Typography variant="h5">
                        Chế độ tối
                    </Typography>
                    <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                        <input defaultChecked id="switch-6" type="checkbox"
                            class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-indigo-500 peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500" />
                        <label htmlFor="switch-6"
                            class="before:content[''] absolute top-2/4 left-3 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-indigo-500 peer-checked:before:bg-indigo-500">
                            <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                            data-ripple-dark="true"></div>
                        </label>
                        </div>
                    </div>            
                </div>
                <div className="flex flex-col gap-4 items-start mt-10 w-1/3">
                    <Typography variant="h5">
                        Font chữ
                    </Typography>
                    <Select label="Font" value="Inter">
                        <Option value="arial">Arial</Option>
                        <Option value="inter">Inter</Option>
                        <Option value="roboto">Roboto</Option>
                    </Select>
                    <Select label="Kích cỡ" value={'Vừa'}>
                        <Option value="small">Nhỏ</Option>
                        <Option value="medium">Vừa</Option>
                        <Option value="large">Lớn</Option>
                    </Select>
                </div>
        </Wrapper>
    );
}

export default Theme;