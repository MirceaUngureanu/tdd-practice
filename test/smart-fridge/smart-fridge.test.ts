import {Fridge} from "./smart-fridge";

const warn = jest.spyOn(console, "log")

describe('Smart Fridge', () => {
    const fridge = new Fridge()

    // beforeAll(() => {
    //     // GIVEN
    // });

    it('should set current date', function () {
        const date = "18/10/2021"
        const result = fridge.setCurrentDate(date)

        expect(result).toBe(date)
    });

    it('should notify if fridge door is open', function () {
        const result = fridge.signalFridgeDoorOpened()

        expect(result).toBe(true)
    });

    it('should notify if fridge door is closed', function () {
        const result = fridge.signalFridgeDoorClosed()

        expect(result).toBe(false)
    });

    // it('should return scanned items', function () {
    //     const item = {
    //         name: "Milk",
    //         expiry: "21/10/21",
    //         condition: "sealed"
    //     }
    //     const result = fridge.scanAddedItem(item)
    //     const expected = [
    //         item
    //     ]
    //
    //     expect(result).toBe(expected)
    // });

    it('should log correctly if showDisplay is called without any interactions with the fridge', function () {
        const fridge = new Fridge()

        fridge.showDisplay()

        expect(warn).toBeCalledWith('Nothing to log')
    });

    it('should log correctly if showDisplay is called after adding an item to the fridge', function () {
        const fridge = new Fridge()

        const item = {
            name: "Milk",
            expiry: "21/10/21",
            condition: "sealed"
        }
        fridge.scanAddedItem(item)
        fridge.showDisplay()

        expect(warn).toBeCalledWith('Milk')
    });

    it('should show correct items after adding multiple items to the fridge', function () {
        const fridge = new Fridge()

        const item1 = {
            name: "Milk",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const item2 = {
            name: "Beef",
            expiry: "21/10/21",
            condition: "sealed"
        }

        fridge.scanAddedItem(item1)
        fridge.scanAddedItem(item2)
        fridge.showDisplay()

        expect(warn).toBeCalledWith('Milk, Beef')
    });

    it('should show correct items after removing the last item', function () {
        const fridge = new Fridge()

        const item1 = {
            name: "Milk",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const item2 = {
            name: "Beef",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const removeItem = {
            name: "Beef"
        }

        fridge.scanAddedItem(item1)
        fridge.scanAddedItem(item2)
        fridge.scanRemovedItem()
        fridge.showDisplay()

        expect(warn).toBeCalledWith('Milk')
    });

    it('should show correct items after removing random item', function () {
        const fridge = new Fridge()

        const item1 = {
            name: "Milk",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const item2 = {
            name: "Beef",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const item3 = {
            name: "Chicken",
            expiry: "21/10/21",
            condition: "sealed"
        }
        const removeItem = {
            name: "Beef"
        }

        fridge.scanAddedItem(item1)
        fridge.scanAddedItem(item2)
        fridge.scanRemovedItem()
        fridge.showDisplay()

        expect(warn).toBeCalledWith('Milk')
    });


    describe('UAT', () => {
        it.skip('should display correct information after a user interacts with the fridge', function () {
            // Given
            fridge.setCurrentDate("18/10/2021")
            // WHEN
            fridge.signalFridgeDoorOpened()
            fridge.scanAddedItem({name: "Milk", expiry: "21/10/21", condition: "sealed"})
            fridge.scanAddedItem({name: "Cheese", expiry: "18/11/21", condition: "sealed"})
            fridge.scanAddedItem({name: "Beef", expiry: "20/10/21", condition: "sealed"})
            fridge.scanAddedItem({name: "Lettuce", expiry: "22/10/21", condition: "sealed"})
            fridge.signalFridgeDoorClosed()

            fridge.simulateDayOver()

            fridge.signalFridgeDoorOpened()
            fridge.signalFridgeDoorClosed()

            fridge.signalFridgeDoorOpened()
            fridge.signalFridgeDoorClosed()

            fridge.signalFridgeDoorOpened()
            fridge.scanRemovedItem({name: "Milk"})
            fridge.signalFridgeDoorClosed()

            fridge.signalFridgeDoorOpened()
            fridge.scanAddedItem({name: "Milk", expiry: "26/10/21", condition: "opened"})
            fridge.scanAddedItem({name: "Peppers", expiry: "23/10/21", condition: "opened"})
            fridge.signalFridgeDoorClosed()

            fridge.simulateDayOver()

            fridge.signalFridgeDoorOpened()
            fridge.scanRemovedItem({name: "Beef"})
            fridge.scanRemovedItem({name: "Lettuce"})
            fridge.signalFridgeDoorClosed()

            fridge.signalFridgeDoorOpened()
            fridge.scanAddedItem({name: "Lettuce", expiry: "22/10/21", condition: "opened"})
            fridge.signalFridgeDoorClosed()

            fridge.signalFridgeDoorOpened()
            fridge.signalFridgeDoorClosed()

            fridge.simulateDayOver()

            fridge.showDisplay()

            const expected = [
                'EXPIRED: Milk',
                'Lettuce: 0 days remaining',
                'Peppers: 1 day remaining',
                'Cheese: 31 days remaining',
            ]

            // THEN
            expect(warn).toBeCalledWith(expected);
        });
    })
})