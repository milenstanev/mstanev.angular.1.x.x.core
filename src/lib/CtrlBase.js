//region CtrlBase
function make$Inject(args) {
  this.constructor.$inject.map((item, index) => {
    this[item] = args[index];
  })
}

export default class CtrlBase {
  constructor(...args) {
    this.constructor.init.call(this, args)
  }

  static init(args) {
    make$Inject.call(this, args)
  }

  $onDestroy() {
    if(this.hasOwnProperty('onDestroy') && typeof this.onDestroy === 'function') {
      onDestroy();
    }
  }
}
//endregion
