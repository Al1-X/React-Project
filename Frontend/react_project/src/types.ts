export interface ListItem {
    text: string;
    status: ListItemStatus;
}

export const enum ListItemStatus {
    visited = "visited",
    notVisited = "notVisited",
}