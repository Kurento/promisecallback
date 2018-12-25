/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Define a callback as the continuation of a promise
 */
function promiseCallback(promise, callback, thisArg)
{
  if(callback)
  {
    function callback2(error, result)
    {
      try
      {
        return callback.call(thisArg, error, result);
      }
      catch(exception)
      {
        // Show the exception in the console with its full stack trace
        console.trace(exception);
        throw exception;
      }
    };

    promise = promise.then(callback2.bind(undefined, null), callback2);
  };

  return promise
};


module.exports = promiseCallback;
