import {
  Given as CucumberGiven,
  StepDefinitionOptions,
  Then as CucumberThen,
  When as CucumberWhen,
  World,
} from 'cucumber';

type ICucumberGiven = typeof CucumberGiven;

type StepDefinition = <W extends World>(
  pattern: Parameters<ICucumberGiven>[0],
  stepDefinition: (this: W, ...args: any[]) => void,
  options?: StepDefinitionOptions,
) => ReturnType<ICucumberGiven>;

export const Given: StepDefinition = (pattern, stepDefinition, options) =>
  options
    ? CucumberGiven(pattern, options, stepDefinition)
    : CucumberGiven(pattern, stepDefinition);
export const When: StepDefinition = (pattern, stepDefinition, options) =>
  options
    ? CucumberWhen(pattern, options, stepDefinition)
    : CucumberGiven(pattern, stepDefinition);
export const Then: StepDefinition = (pattern, stepDefinition, options) =>
  options
    ? CucumberThen(pattern, options, stepDefinition)
    : CucumberGiven(pattern, stepDefinition);
