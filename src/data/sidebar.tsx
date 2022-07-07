import {
  AiOutlineAreaChart,
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineRead,
  AiOutlineShoppingCart,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import { BsCalendar3, BsChatDots } from "react-icons/bs";
export const sidebarData = [
  {
    id: 1,
    category: "Dashboard",
    items: [
      {
        id: 1,
        title: "chart status",
        icon: <AiOutlineAreaChart />,
        sub: null,
      },
      {
        id: 2,
        title: "users",
        icon: <AiOutlineTeam />,
        sub: null,
      },
      {
        id: 3,
        title: "news",
        icon: <AiOutlineRead />,
        sub: null,
      },
      {
        id: 4,
        title: "eCommerce",
        icon: <AiOutlineShoppingCart />,
        sub: [
          {
            id: 1,
            title: "Products",
          },
          {
            id: 2,
            title: "New Product",
          },
          {
            id: 3,
            title: "Orders",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Apps",
    items: [
      {
        id: 1,
        title: "Mail",
        icon: <AiOutlineMail />,
        sub: null,
      },
      {
        id: 2,
        title: "ToDo",
        icon: <AiOutlineCheckCircle />,
        sub: null,
      },
      {
        id: 3,
        title: "Chats",
        icon: <BsChatDots />,
        sub: null,
      },
      {
        id: 4,
        title: "Calendar",
        icon: <BsCalendar3 />,
        sub: null,
      },
    ],
  },
  {
    id: 3,
    category: "Management",
    items: [
      {
        id: 1,
        title: "Admins",
        icon: <AiOutlineUser />,
        sub: [
          {
            id: 1,
            title: "Add Admin",
          },
        ],
      },
    ],
  },
];
