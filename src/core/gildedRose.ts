export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	checkQualityIsInRange(item: Item): boolean {
		if (item.quality >= 0 && item.quality <= 50) {
			return true;
		} else {
			throw new Error('Quality must be between 0 and 50');
		}
	}

	decreaseDayToSell(item: Item) {
		item.sellIn -= 1;
	}

	updateSulfuras(item: Item) {
		this.checkQualityIsInRange(item);
		this.decreaseDayToSell(item);
	}

	updateAgedBrie(item: Item) {
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality += 1;
		}
		this.decreaseDayToSell(item);
	}

	updateBackstagePasses(item: Item) {
		this.checkQualityIsInRange(item);
		if (item.sellIn > 0 && item.sellIn <= 5) {
			item.quality += 3;
		}
		if (item.sellIn > 5 && item.sellIn <= 10) {
			item.quality += 2;
		}
		if (item.sellIn <= 0) {
			item.quality = 0;
		}
		this.decreaseDayToSell(item);
	}

	updateConjured(item: Item) {
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality -= 2;
		}
		this.decreaseDayToSell(item);
	}

	updateStandardProduct(item: Item) {
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality -= 1;
		}
		this.decreaseDayToSell(item);
	}

	updateQuality(): Item[] {
		this.items.forEach((item: Item) => {
			switch (item.name) {
				case 'Sulfuras, Hand of Ragnaros':
					this.updateSulfuras(item);
					break;
				case 'Aged brie':
					this.updateAgedBrie(item);
					break;
				case 'Backstage passes to a TAFKAL80ETC concert':
					this.updateBackstagePasses(item);
					break;
				default:
					this.updateStandardProduct(item);
					break;
			}
		});
		return this.items;
	}
}

