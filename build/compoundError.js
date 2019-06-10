"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("source-map-support/register");

function indentAll(lines) {
  return lines.split('\n').map(x => '    ' + x).join('\n');
}
/**
 * An error that encapsulates more than one error, to support soft-assertions from Jasmine
 * even though Allure's API assumes one error-per test
 */


class CompoundError extends Error {
  constructor(...innerErrors) {
    const message = ['CompoundError: One or more errors occurred. ---'].concat(innerErrors.map(x => {
      if (x.stack) return `${indentAll(x.stack)}\n--- End of stack trace ---`;else return `   ${x.message}\n--- End of error message ---`;
    })).join('\n');
    super(message);
    this.innerErrors = innerErrors;
  }

}

exports.default = CompoundError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb3VuZEVycm9yLmpzIl0sIm5hbWVzIjpbImluZGVudEFsbCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJ4Iiwiam9pbiIsIkNvbXBvdW5kRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiaW5uZXJFcnJvcnMiLCJtZXNzYWdlIiwiY29uY2F0Iiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JDLEdBQWxCLENBQXNCQyxDQUFDLElBQUksU0FBU0EsQ0FBcEMsRUFBdUNDLElBQXZDLENBQTRDLElBQTVDLENBQVA7QUFDSDtBQUVEOzs7Ozs7QUFJZSxNQUFNQyxhQUFOLFNBQTRCQyxLQUE1QixDQUFrQztBQUM3Q0MsRUFBQUEsV0FBVyxDQUFDLEdBQUdDLFdBQUosRUFBaUI7QUFDeEIsVUFBTUMsT0FBTyxHQUFHLENBQUMsaURBQUQsRUFDWkMsTUFEWSxDQUNMRixXQUFXLENBQUNOLEdBQVosQ0FBZ0JDLENBQUMsSUFBSTtBQUN4QixVQUFJQSxDQUFDLENBQUNRLEtBQU4sRUFBYSxPQUFRLEdBQUVaLFNBQVMsQ0FBQ0ksQ0FBQyxDQUFDUSxLQUFILENBQVUsOEJBQTdCLENBQWIsS0FDSyxPQUFRLE1BQUtSLENBQUMsQ0FBQ00sT0FBUSxnQ0FBdkI7QUFDUixLQUhNLENBREssRUFJUkwsSUFKUSxDQUlILElBSkcsQ0FBaEI7QUFNQSxVQUFNSyxPQUFOO0FBQ0EsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSDs7QUFWNEMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbmRlbnRBbGwobGluZXMpIHtcbiAgICByZXR1cm4gbGluZXMuc3BsaXQoJ1xcbicpLm1hcCh4ID0+ICcgICAgJyArIHgpLmpvaW4oJ1xcbicpXG59XG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBlbmNhcHN1bGF0ZXMgbW9yZSB0aGFuIG9uZSBlcnJvciwgdG8gc3VwcG9ydCBzb2Z0LWFzc2VydGlvbnMgZnJvbSBKYXNtaW5lXG4gKiBldmVuIHRob3VnaCBBbGx1cmUncyBBUEkgYXNzdW1lcyBvbmUgZXJyb3ItcGVyIHRlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvciguLi5pbm5lckVycm9ycykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gWydDb21wb3VuZEVycm9yOiBPbmUgb3IgbW9yZSBlcnJvcnMgb2NjdXJyZWQuIC0tLSddLlxuICAgICAgICAgICAgY29uY2F0KGlubmVyRXJyb3JzLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeC5zdGFjaykgcmV0dXJuIGAke2luZGVudEFsbCh4LnN0YWNrKX1cXG4tLS0gRW5kIG9mIHN0YWNrIHRyYWNlIC0tLWBcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBgICAgJHt4Lm1lc3NhZ2V9XFxuLS0tIEVuZCBvZiBlcnJvciBtZXNzYWdlIC0tLWBcbiAgICAgICAgICAgIH0pKS5qb2luKCdcXG4nKVxuXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvcnMgPSBpbm5lckVycm9yc1xuICAgIH1cbn1cbiJdfQ==