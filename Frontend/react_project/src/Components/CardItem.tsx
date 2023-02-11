import { useMemo } from "react"
import { Button, Card } from "react-bootstrap"
import { ListItem, ListItemStatus } from "../types"

export interface CardItemProps {
    item: ListItem
    onAction?: () => void
}

const CardItem: React.FC<CardItemProps> = ({ item, onAction }) => {
    const btnContent = useMemo(() => {
        switch (item.status) {
            case ListItemStatus.visited: {
                return 'Not visited'
            }
            case ListItemStatus.notVisited: {
                return 'Visit'
            }
        }
    }, [item.status])

    return (
        <div
            style={{
                flexDirection: "row",
                display: "flex",
                gap: "5px"
            }}
        >
            <Card
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    top: "30%",
                    display: "flex",
                    flexDirection: "row",
                    position: "relative"
                }}
            >
                {item.text}
            </Card>
            <Button
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
                onClick={onAction}
            >
                {btnContent}
            </Button>
        </div>
    )
}

export default CardItem