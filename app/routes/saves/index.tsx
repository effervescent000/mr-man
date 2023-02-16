import { useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";

// import { createSave, getUserSaves } from "~/models/save.server";
import type { ISaveData } from "~/types/interfaces";

import SaveRow from "~/components/saves/save-row";
// import { asStringOrUndefined } from "~/utils";
import NewSave from "~/components/saves/new-save";

export const action = async ({ request }: ActionArgs) => {
  // const userId = await getUserId(request);
  // if (!userId) return null;
  // const body = await request.formData();

  // return createSave({
  //   title: asStringOrUndefined(body.get("title")),
  //   userId,
  // });
  return null;
};

export const loader = async ({ request }: LoaderArgs) => {
  // const userId = await getUserId(request);
  // return json({ saves: await getUserSaves(userId) });
  return null;
};

const SavesPage = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <NewSave />
      {data.saves.map((save: ISaveData) => (
        <SaveRow key={save.id} save={save} />
      ))}
    </div>
  );
};

export default SavesPage;
