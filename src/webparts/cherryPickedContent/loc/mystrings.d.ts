declare interface ICherryPickedContentWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  LibraryPickerLabel: string;
  LibraryItemPickerLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'CherryPickedContentWebPartStrings' {
  const strings: ICherryPickedContentWebPartStrings;
  export = strings;
}
