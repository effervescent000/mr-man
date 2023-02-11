import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      Nothing here yet
      {/* spooky */}
    </div>
  );
}
