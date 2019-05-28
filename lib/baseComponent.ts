import { Component as InfernoComponent, VNode } from 'inferno';
export default class BaseComponent extends InfernoComponent {

  constructor(props?, context?) {
    super(props, context);
  }

  public bind = (fn, context: any = this, ...extraArgs) => {
    return fn.bind ? fn.bind(context, ...extraArgs) : (...args) => fn.call(context, ...extraArgs, ...args);
  }

}