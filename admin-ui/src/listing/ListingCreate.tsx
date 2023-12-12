import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
