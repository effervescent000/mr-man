import type { ISaveData } from "~/types/interfaces";

const SaveRow = ({ save }: { save: ISaveData }) => {
  return (
    <div>
      <span>{save.title}</span>
    </div>
  );
};

export default SaveRow;
