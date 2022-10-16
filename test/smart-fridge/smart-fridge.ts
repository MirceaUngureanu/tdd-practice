type Item = {
    name: string,
    expiry: string,
    condition: string
}

export class Fridge {
    items: string[] = []

    setCurrentDate(): void {

    }

    signalFridgeDoorOpened(): void {
    }

    signalFridgeDoorClosed(): void {
    }

    scanAddedItem(item: Item): void {
        this.items.push(item.name)
    }

    scanRemovedItem(): void {
        this.items.pop()
    }

    simulateDayOver(): void {
    }

    showDisplay(): void {
        if (this.items.length === 0) {
            console.log('Nothing to log')
        }

        console.log(this.items.join(', ').toString())
    }
}
