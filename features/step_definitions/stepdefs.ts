import * as assert from 'assert';
import { World } from 'cucumber';
import isItFriday from '../../src/isItFriday';
import { Given, Then, When } from '../cucumber';

interface IsItFridayWorld extends World {
  today: string;
  actualAnswer?: string;
}

Given<IsItFridayWorld>('today is {string}', function(givenDay) {
  this.today = givenDay;
});

When<IsItFridayWorld>("I ask whether it's Friday yet", function() {
  this.actualAnswer = isItFriday(this.today);
});

Then<IsItFridayWorld>('I should be told {string}', function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
