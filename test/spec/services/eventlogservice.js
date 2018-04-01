'use strict';

describe('Service: eventlogservice', function () {

  // load the service's module
  beforeEach(module('eventsApp'));

  // instantiate service
  var eventlogservice;
  beforeEach(inject(function (_eventlogservice_) {
    eventlogservice = _eventlogservice_;
  }));

  it('should do something', function () {
    expect(!!eventlogservice).toBe(true);
  });

});
