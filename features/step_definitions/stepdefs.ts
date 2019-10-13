import * as assert from 'assert';
import { Given, Then, When, World } from 'cucumber';
import isItFriday from '../../src/isItFriday';

interface IsItFridayWorld extends World {
  today: string;
  actualAnswer?: string;
}

type IsItFridayGiven = (this: IsItFridayWorld, givenDay: string) => void;

Given('today is {string}', function(givenDay) {
  this.today = givenDay;
} as IsItFridayGiven);

type IsItFridayWhen = (this: IsItFridayWorld) => void;

When("I ask whether it's Friday yet", function() {
  this.actualAnswer = isItFriday(this.today);
} as IsItFridayWhen);

type IsItFridayThen = (this: IsItFridayWorld, expectedAnswer: string) => void;

Then('I should be told {string}', function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
} as IsItFridayThen);
