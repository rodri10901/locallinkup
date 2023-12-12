import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="listingCreateBy" source="listingCreateBy" />
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
      </SimpleForm>
    </Edit>
  );
};
