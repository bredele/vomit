/**
 * Transform dependencies.
 */

var Stream = require('stream')
var Emitter = require('emitter');


/**
 * Expose 'transform'
 */

module.exports = transform;


/**
 * Transform a function into a duplex stream.
 *
 * @param {Function} fn
 * @param {Function} end
 * @param {Object} opts
 * @return {Stream}
 * @api public
 */

function transform (fn, end, opts) {
  write = function (data) { this.queue(fn(data)); };
  end = end || function () { this.queue(null) };

  var ended = false;
  var destroyed = false;
  var buffer = [];
  var _ended = false;
  var stream = function(data) {
    return fn(data);
  };
  Stream.call(stream);
  Emitter(stream);
  stream.pipe = Stream.prototype.pipe;

  stream.readable = stream.writable = true;
  stream.paused = false;

  stream.autoDestroy = !(opts && opts.autoDestroy === false);

  stream.write = function (data) {
    write.call(this, data);
    return !stream.paused;
  };

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift();
      if(null === data) return stream.emit('end');
      else stream.emit('data', data);
    }
  }

  stream.queue = stream.push = function (data) {
    if(_ended) return stream;
    if(data === null) _ended = true;
    buffer.push(data);
    drain();
    return stream;
  }

  stream.on('end', function () {
    stream.readable = false;
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy();
      })
  });

  function _end () {
    stream.writable = false;
    end.call(stream);
    if(!stream.readable && stream.autoDestroy)
      stream.destroy();
  }

  stream.end = function (data) {
    if(ended) return;
    ended = true;
    if(arguments.length) stream.write(data);
    _end();
    return stream;
  };

  stream.destroy = function () {
    if(destroyed) return;
    destroyed = true;
    ended = true;
    buffer.length = 0;
    stream.writable = stream.readable = false;
    stream.emit('close');
    return stream;
  }

  stream.pause = function () {
    if(stream.paused) return;
    stream.paused = true;
    return stream;
  };

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false;
      stream.emit('resume');
    }
    drain();
    if(!stream.paused)
      stream.emit('drain');
    return stream;
  };
  return stream;
};
