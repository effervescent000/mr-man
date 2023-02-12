// import { createCookieSessionStorage } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import SaveRow from "~/components/saves/save-row";

import { getUserSaves } from "~/models/save.server";
import { getUserId } from "~/session.server";
import type { ISaveData } from "~/types/interfaces";

// const { getSession } = createCookieSessionStorage();

export const loader = async ({ request }: LoaderArgs) => {
  // const cookie = request.headers.get("cookie");
  const userId = await getUserId(request);
  return json({ saves: await getUserSaves(userId) });
};

const SavesPage = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      {data.saves.map((save: ISaveData) => (
        <SaveRow key={save.id} save={save} />
      ))}
    </div>
  );
};

export default SavesPage;
