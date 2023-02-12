import type { ISaveData } from "~/types/interfaces";

const SaveRow = ({ save }: { save: ISaveData }) => {
  return (
    <div>
      Save <span>{save.id}</span>
    </div>
  );
};

export default SaveRow;
