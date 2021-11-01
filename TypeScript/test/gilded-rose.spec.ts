import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should degrade quality twice as fast as normal when item is conjured', function(){
        const gildedRose = new GildedRose([new Item('conjured', 1,50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(48);
    });

    it('should degrade quality by one for normal items', function(){
        const gildedRose = new GildedRose([new Item('foo', 1,50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(49);
    });



});