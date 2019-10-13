import * as assert from 'assert';
import { Given, Then, When } from 'cucumber';
import isItFriday from '../../src/isItFriday';

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
