import { BackpackOutlined, EmojiEventsOutlined, ListAlt, MenuBookOutlined, School } from "@mui/icons-material";

const CountData = [
  {
    icon: <BackpackOutlined sx={{ py: 2, width: "2em", height:"2em" }} />,
    name: "STUDENTS ENROLLED",
    count: "399+",
    border: "0px 1px 0px 0px",
  },
  {
    icon: <EmojiEventsOutlined sx={{ py: 2, width: "2em",height:"2em" }} />,
    name: "WINNING AWARD",
    count: "289+",
    border: "0px 1px 0px 0px",
  },
  {
    icon: <MenuBookOutlined sx={{ py: 2, width: "2em",height:"2em" }} />,
    name: "ACADEMIC PROGRAMS",
    count: "350+",
    border: "0px 1px 0px 0px",
  },
  {
    icon: <School sx={{ py: 2, width: "2em",height:"2em" }} />,
    name: "ONLINE INSTRUCTOR",
    count: "235+",
    border: "0px 0px 0px 0px",
  },
];

const CardData = [
  {
    img: require("./assests/graduation.png"),
    text1: "4000",
    text2: "Online Courses",
    text3: "For Mentorship & Coding Buddy",
    color: "#2d69f0",
  },
  {
    img: require("./assests/graduation.png"),
    text1: "4000",
    text2: "Online Courses",
    text3: "For Mentorship & Coding Buddy",
    color: "#DD246E",
  },
  {
    img: require("./assests/graduation.png"),
    text1: "4000",
    text2: "Online Courses",
    text3: "For Mentorship & Coding Buddy",
    color: "#8007E6",
  },
  {
    img: require("./assests/graduation.png"),
    text1: "4000",
    text2: "Online Courses",
    text3: "For Mentorship & Coding Buddy",
    color: "#0CAE74",
  },
  
];

const CardData2 = [
  {
    icon: <ListAlt sx={{ width: "40px", height: "40px", color: "primary.main" }} />,
    text1:"Drag & Drop Page Builder",
    text2:"Elementor helps drag and drop for frontend and backend.",

  },
  {
    icon: <ListAlt sx={{ width: "40px", height: "40px", color: "primary.main" }} />,
    text1:"Drag & Drop Page Builder",
    text2:"Elementor helps drag and drop for frontend and backend.",

  },
  {
    icon: <ListAlt sx={{ width: "40px", height: "40px", color: "primary.main" }} />,
    text1:"Drag & Drop Page Builder",
    text2:"Elementor helps drag and drop for frontend and backend.",

  },

];

const CardData3 =
[
    {
    text1:"Great Work",
    text2:" “I think Educrat is the best theme I ever seen this year. Amazing" +
    "design, easy to customize and a design quality superlative account on,"+
    "its cloud platform for the optimized performance” ",
    name:"Ronalds Richard",
},
{
    text1:"Great Work",
    text2:" “I think Educrat is the best theme I ever seen this year. Amazing" +
    "design, easy to customize and a design quality superlative account on,"+
    "its cloud platform for the optimized performance” ",
    name:"Ronalds Richard",
},
{
    text1:"Great Work",
    text2:" “I think Educrat is the best theme I ever seen this year. Amazing" +
    "design, easy to customize and a design quality superlative account on,"+
    "its cloud platform for the optimized performance” ",
    name:"Ronalds Richard",
},
{
    text1:"Great Work",
    text2:" “I think Educrat is the best theme I ever seen this year. Amazing" +
    "design, easy to customize and a design quality superlative account on,"+
    "its cloud platform for the optimized performance” ",
    name:"Ronalds Richard",
},
];


export { CountData, CardData, CardData2, CardData3 };
