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
		const maxQuality = 50;
		const minQuality = 0;
		if (item.quality >= minQuality && item.quality <= maxQuality) {
			return true;
		} else {
			throw new Error('Quality must be between 0 and 50');
		}
	}

	decreaseDayToSell(item: Item) {
		item.sellIn -= 1;
	}

	updateSulfuras(item: Item) {
		this.decreaseDayToSell(item);
		this.checkQualityIsInRange(item);
	}

	updateAgedBrie(item: Item) {
		this.decreaseDayToSell(item);
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality += 1;
		}
	}

	updateBackstagePasses(item: Item) {
		this.decreaseDayToSell(item);
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
	}

	updateConjured(item: Item) {
		this.decreaseDayToSell(item);
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality -= 2;
		}
	}

	updateStandardProduct(item: Item) {
		this.decreaseDayToSell(item);
		this.checkQualityIsInRange(item);
		if (item.quality > 0) {
			item.quality -= 1;
		}
	}

	updateQuality(): Item[] {
		this.items.forEach((item: Item) => {
			switch (item.name) {
				case 'Sulfuras, Hand of Ragnaros': this.updateSulfuras(item);
					break;
				case 'Aged brie': this.updateAgedBrie(item);
					break;
				case 'Backstage passes to a TAFKAL80ETC concert': this.updateBackstagePasses(item);
					break;
				case 'Conjured': this.updateConjured(item);
					break;
				default: this.updateStandardProduct(item);
					break;
			}
		});
		return this.items;
	}
}

