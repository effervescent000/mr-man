import { Form } from "@remix-run/react";

const NewSave = () => {
  return (
    <div>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Create save file</button>
      </Form>
    </div>
  );
};

export default NewSave;
