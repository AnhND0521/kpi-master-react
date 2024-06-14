import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getCurrentKpis, saveKpi } from "../utils/dataUtils";
import { Link } from "react-router-dom";

const ImportKPIDialog = ({ open, setOpen, setCurrentKpis }) => {
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);

  const getClipboardContent = async () => {
    try {
      window.focus();
      const text = await navigator.clipboard.readText();
      console.log("Copied Text:", text);
      setURL(text);
      // You can use the text variable for further processing
    } catch (err) {
      console.error("Failed to access clipboard:", err);
      // Handle permission denied or other errors
    }
  };

  useEffect(() => {
    getClipboardContent();
  }, [open]);

  const handleSubmit = (e) => {
    const kpi = {
      name: "Nhập từ Google Calendar",
      description: "",
      due: new Date("2024-06-30"),
      repeat: 0,
      weights: {
        quantity: 50,
        quality: 25,
        time: 25,
      },
      tasks: [
        {
          name: "Dạy UI/UX",
          date: new Date("2024-05-16"),
          start: "9:20",
          end: "11:45",
          status: 2,
          repeat: 0,
          noti: 1,
          priority: 2,
          quality: 5,
        },
        {
          name: "Dạy hệ tương tác",
          date: new Date("2024-05-13"),
          start: "12:30",
          end: "14:00",
          status: 1,
          repeat: 0,
          noti: 1,
          priority: 2,
          quality: 5,
          completed: new Date("2024-05-13T13:59:00.000Z"),
        },
        {
          name: "Dạy công nghệ phần mềm",
          date: new Date("2024-05-14"),
          start: "15:05",
          end: "17:30",
          status: 1,
          repeat: 0,
          noti: 1,
          priority: 2,
          quality: 5,
          completed: new Date("2024-05-14T16:45:00.000Z"),
        },
        {
          name: "Chấm bài sinh viên",
          date: new Date("2024-05-15"),
          start: "17:30",
          end: "19:00",
          status: 2,
          repeat: 0,
          noti: 2,
          priority: 2,
          quality: 5,
        },
        {
          name: "Soạn đề thi cuối kỳ",
          date: new Date("2024-05-20"),
          start: "12:30",
          end: "14:00",
          status: 1,
          repeat: 0,
          noti: 1,
          priority: 2,
          quality: 5,
          completed: new Date("2024-05-20T13:59:00.000Z"),
        },
        {
          name: "Dạy IT4321",
          date: new Date("2024-05-25"),
          start: "8:25",
          end: "11:45",
          status: 0,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
        },
        {
          name: "Dạy IT1234",
          date: new Date("2024-05-22"),
          start: "14:10",
          end: "15:50",
          status: 0,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
        },
        {
          name: "Chấm bài",
          date: new Date("2024-05-29"),
          start: "11:45",
          end: "15:00",
          status: 1,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
          completed: new Date("2024-05-24T15:59:00.000Z"),
        },
        {
          name: "Soạn giáo án",
          date: new Date("2024-06-02"),
          start: "8:25",
          end: "12:30",
          status: 0,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
        },
        {
          name: "Lên kế hoạch giảng dạy",
          date: new Date("2024-06-05"),
          start: "14:30",
          end: "16:30",
          status: 0,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
        },
        {
          name: "Họp bộ môn",
          date: new Date("2024-06-06"),
          start: "9:30",
          end: "11:30",
          status: 0,
          repeat: 0,
          noti: 0,
          priority: 2,
          quality: 5,
        },
      ],
    };
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      saveKpi(kpi);
      setCurrentKpis(getCurrentKpis());
    }, 2000);
  };

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
      <DialogHeader className="justify-between">
        <Typography variant="h5">Nhập KPI</Typography>
        <XMarkIcon
          className="w-5 cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        />
      </DialogHeader>
      <DialogBody className="text-black px-6 py-10 pt-0">
        <form
          className="flex flex-col items-start gap-6 w-full"
          onSubmit={handleSubmit}
        >
          <Typography className="text-base font-normal">
            Hãy nhập URL dẫn đến dự án của bạn. Hệ thống sẽ tự động đồng bộ dữ
            liệu từ nguồn đó.
          </Typography>
          <div className="w-full">
            <Input
              type="text"
              label="URL"
              value={url}
              onChange={({ target }) => setURL(target.value)}
              required
            />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Được hỗ trợ: <Link className="text-purple">Google Calendar</Link>,{" "}
              <Link className="text-purple">Notion</Link>,{" "}
              <Link className="text-purple">Jira</Link>
            </Typography>
          </div>
          <Button
            className="bg-purple w-full flex justify-center items-center gap-4"
            type="submit"
            loading={loading}
          >
            Nhập
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default ImportKPIDialog;
