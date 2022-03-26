/**
 * Ansteuerung NeoPixel LED-Streifen
 */
/**
 * die drei ersten LEDs von LED Streifen werden auf Grün, Gelb und Rot gesetzt
 */
basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
/**
 * Die eingestellten drei Farben werden nun über den LED Streifen "geschoben". Es entsteht ein dauerhaftes Lauflicht mit den drei Farben
 */
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
