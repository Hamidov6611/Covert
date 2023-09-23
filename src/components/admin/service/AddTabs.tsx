import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./service.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../../service/auth";
import { toast } from "react-toastify";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface formType {
  name: string;
  content: string;
}
 
export interface serviceType {
  content: string,
  id: number,
  name: string,
  img: string,
  visible: boolean,
  translations: {
    en: formType;
    fi: formType;
    nl: formType;
    ru: formType;
  };
}

interface addService {
    setOpen: (value: boolean) => void;
    getData: () => void
  }
  

export default function AddServiseTabs({setOpen, getData}: addService) {
  const [value, setValue] = useState(0);
  const [img, setImg] = useState<string | ArrayBuffer | null>();

  const [data, setData] = useState({
    ru_name: "",
    en_name: "",
    fi_name: "",
    gl_name: "",
    ru_content: "",
    en_content: "",
    fi_content: "",
    gl_content: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  const imgURL = (e: any) => {
    const reader = new FileReader();

    reader.onload = () => {
      const url: string | ArrayBuffer | null = reader.result;
      setImg(url);
    };

    reader.readAsDataURL(e);
  };
  const ImageChange = (e: any) => {
    imgURL(e.target.files[0]);
  };

  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const token: string | undefined = Cookies.get(`token`);
      const postData: serviceType = {
        img: img,
        translations: {
          en: {
            name: data.en_name,
            content: data.en_content,
          },
          fi: {
            name: data.fi_name,
            content: data.fi_name,
          },
          nl: {
            name: data.gl_name,
            content: data.gl_content,
          },
          ru: {
            name: data.ru_name,
            content: data.ru_content,
          },
        },
      };
      await axios.post(`${BASE_URL}/a_api/admin_panel/service_get_post_views/`, postData,);
      getData()
      toast.success("Услуга успешно добавлена")
      setOpen(false)
    } catch (error) {
      toast.error("Услуга не добавлен")
      console.log(error);
    
    }
  };


  return (
    <form onSubmit={submitData}>
      <Box sx={{ width: "100%" }}>
        <p className="text-lightGreey flex w-[100%] justify-center mb-4 md:font-semibold md:text-[28px]">
          Добавить Услуги
        </p>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <label htmlFor="fileInput" className="custom-file-upload">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => ImageChange(e)}
            />
            <span>Выберите файл</span>
          </label>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Русский" {...a11yProps(0)} />
            <Tab label="Английский" {...a11yProps(1)} />
            <Tab label="Голландский" {...a11yProps(2)} />
            <Tab label="Финский" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TextField
            id="outlined-basic"
            label="Имя (ru)"
            variant="outlined"
            sx={{ width: "100%" }}
            name="ru_name"
            value={data.ru_name}
            onChange={handleInputChange}
            required
          />

          <TextField
            id="outlined-multiline-static"
            label="Content (ru)"
            multiline
            rows={8}
            defaultValue=""
            sx={{ width: "100%", marginTop: "40px" }}
            name="ru_content"
            value={data.ru_content}
            onChange={handleInputChange}
            required
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TextField
            id="outlined-basic"
            label="Имя (en)"
            variant="outlined"
            sx={{ width: "100%" }}
            name="en_name"
            value={data.en_name}
            onChange={handleInputChange}
            required
          />

          <TextField
            id="outlined-multiline-static"
            label="Content (en)"
            multiline
            rows={8}
            defaultValue=""
            sx={{ width: "100%", marginTop: "40px" }}
            name="en_content"
            value={data.en_content}
            onChange={handleInputChange}
            required
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TextField
            id="outlined-basic"
            label="Имя (gl)"
            variant="outlined"
            sx={{ width: "100%" }}
            name="gl_name"
            value={data.gl_name}
            onChange={handleInputChange}
            required
          />

          <TextField
            id="outlined-multiline-static"
            label="Content (gl)"
            multiline
            rows={8}
            defaultValue=""
            sx={{ width: "100%", marginTop: "40px" }}
            name="gl_content"
            value={data.gl_content}
            onChange={handleInputChange}
            required
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <TextField
            id="outlined-basic"
            label="Имя (fr)"
            variant="outlined"
            sx={{ width: "100%" }}
            name="fi_name"
            value={data.fi_name}
            onChange={handleInputChange}
            required
          />

          <TextField
            id="outlined-multiline-static"
            label="Content (fr)"
            multiline
            rows={8}
            defaultValue=""
            sx={{ width: "100%", marginTop: "40px" }}
            name="fi_content"
            value={data.fi_content}
            onChange={handleInputChange}
            required
          />
        </CustomTabPanel>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Button 
          onClick={() => setOpen(false)}
          sx={{ background: "red" }} type="button" variant="contained">
            Закрывать
          </Button>
          <Button
            sx={{ background: "green" }}
            type="submit"
            variant="contained"
          >
            Добавлять
          </Button>
        </Box>
      </Box>
    </form>
  );
}
