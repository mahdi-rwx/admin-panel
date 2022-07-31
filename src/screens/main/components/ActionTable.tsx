import React from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineMore } from "react-icons/ai";
import List from "../../../components/list/List";
import Paper from "../../../components/paper/Paper";
import Popover from "../../../components/popover/Popover";
import PopoverContent from "../../../components/popover/PopoverContent";
import PopoverToggle from "../../../components/popover/PopoverToggle";

const ActionTable = ({id}:any) => {
  const listActionData = [
    {
      id: 1,
      content: (
        <p className="flex justify-between items-center">
          <AiOutlineDelete />
          <span>Delete</span>
        </p>
      ),
      set: () => console.log(`delete => ${id}`),
    },
    {
      id: 2,
      content: (
        <p className="flex justify-between items-center">
          <AiOutlineEdit />
          <span>Update</span>
        </p>
      ),
      set: () => console.log(`Update => ${id}`),
    },
  ];
  return (
    <Popover>
      <PopoverToggle>
        <span className="cursor-pointer">
          <AiOutlineMore />
        </span>
      </PopoverToggle>
      <PopoverContent>
        <Paper className="absolute z-50 left-0">
          <List data={listActionData} />
        </Paper>
      </PopoverContent>
    </Popover>
  );
};

export default ActionTable;
