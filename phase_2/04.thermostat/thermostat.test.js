const Thermostat = require("./thermostat.js");

describe("Temperature", () => {
  it("returns 20 degrees as the temp", () => {
    const temp = new Thermostat();
    expect(temp.getTemperature()).toBe(`Current temperature: ${20}`);
  });

  it("returns 22 degrees as the temp increased by 2", () => {
    const temp = new Thermostat();
    temp.up();
    temp.up();
    expect(temp.getTemperature()).toBe(`Current temperature: ${22}`);
  });

  it("returns 21 degrees as the temp decreased by 1", () => {
    const temp = new Thermostat();
    temp.up();
    temp.up();
    temp.down();
    expect(temp.getTemperature()).toBe(`Current temperature: ${21}`);
  });

  it("returns 10 degrees as the temp as temperature dropped by 10", () => {
    const temp = new Thermostat();
    temp.up();
    for (let i = 0; i < 11; i++) {
      temp.down();
    }
    expect(temp.getTemperature()).toBe(`Current temperature: ${10}`);
  });

  it("returns power saving mode on as true ", () => {
    const temp = new Thermostat();
    expect(temp.setPowerSavingMode(false)).toEqual(false);
  });

  it("returns temperature as 25 degrees if power saving mode is on", () => {
    const temp = new Thermostat();
    temp.setPowerSavingMode(true);
    for (let i = 0; i < 20; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toEqual(
      `Power Saving mode is on, temperature capped at: ${25} degrees`
    );
  });

  it("returns temperature as 32 degrees if power saving mode is off", () => {
    const temp = new Thermostat();
    temp.setPowerSavingMode(false);
    for (let i = 0; i < 20; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toEqual(
      `Power Saving mode is off, maximum temperature is: ${32} degrees`
    );
  });

  it("returns the temperature when power saving mode is off", () => {
    const temp = new Thermostat();
    temp.setPowerSavingMode(false);
    for (let i = 0; i < 7; i++) {
      temp.up();
    }
    expect(temp.getTemperature()).toEqual(`Current temperature: ${27}`);
  });

  it("returns the temperature when power saving mode is off", () => {
    const temp = new Thermostat();
    temp.setPowerSavingMode(false);
    for (let i = 0; i < 7; i++) {
      temp.up();
    }
    temp.reset();
    expect(temp.getTemperature()).toEqual(`Current temperature: ${20}`);
  });
});
