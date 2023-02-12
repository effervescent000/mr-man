import { Form } from "@remix-run/react";

import SubmitButton from "../form-components/submit-button";
import TextInput from "../form-components/text-input";

const NewSave = () => {
  return (
    <div>
      <Form method="post">
        <TextInput name="title" datacy="new-save-title" />
        <SubmitButton>Create save file</SubmitButton>
      </Form>
    </div>
  );
};

export default NewSave;
