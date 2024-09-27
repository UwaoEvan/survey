export function inputTypeMapper(inputType: string): string {
  switch (inputType) {
    case "radio":
      return "Radio Button";
    case "checkbox":
      return "Checkbox";
    case "dropdown":
      return "Dropdown";
    default:
      return "radio";
  }
}

export const inputTypeValues = [
  {
    name: "radio",
    value: "Single Choice",
  },
  {
    name: "checkbox",
    value: "Multiple Choice",
  },
  {
    name: "dropdown",
    value: "Dropdown",
  },
];
