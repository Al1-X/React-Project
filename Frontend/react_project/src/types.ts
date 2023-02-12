export interface ListItem {
    text: string;
    status: ListItemStatus;
}

export const enum ListItemStatus {
    visited = "visited",
    notVisited = "notVisited",
}

export interface restaurantResponse {
    id?: string,
    name: string,
    location?: any,
    dishes?: [],
    beverages?: [],
    restaurantPartnerships?: []
}