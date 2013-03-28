// Copyright 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines a Tts interface.
 *
 * All TTS engines in ChromeVox conform to the this interface.
 *
 * @author deboer@google.com (James deBoer)
 */

goog.provide('cvox.TtsInterface');

/**
 * @interface
 */
cvox.TtsInterface = function() { };

/**
 * Speaks the given string using the specified queueMode and properties.
 * @param {string} textString The string of text to be spoken.
 * @param {number=} queueMode The queue mode: cvox.AbstractTts.QUEUE_MODE_FLUSH
 *        for flush, cvox.AbstractTts.QUEUE_MODE_QUEUE for adding to queue.
 * @param {Object=} properties Speech properties to use for this utterance.
 * @return {cvox.TtsInterface} A tts object useful for chaining speak calls.
 */
cvox.TtsInterface.prototype.speak =
    function(textString, queueMode, properties) { };


/**
 * Returns true if the TTS is currently speaking.
 * @return {boolean} True if the TTS is speaking.
 */
cvox.TtsInterface.prototype.isSpeaking = function() { };


/**
 * Stops speech.
 */
cvox.TtsInterface.prototype.stop = function() { };

/**
 * Increases a TTS speech property.
 * @param {string} propertyName The name of the property to change.
 * @param {boolean} increase If true, increases the property value by one
 *     step size, otherwise decreases.
 */
cvox.TtsInterface.prototype.increaseOrDecreaseProperty =
    function(propertyName, increase) { };
