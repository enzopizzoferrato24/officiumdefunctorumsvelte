import { l as escape_html, m as set_ssr_context, p as ssr_context, q as push, t as pop } from "./context.js";
import { clsx as clsx$1 } from "clsx";
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const INSPECT_EFFECT = 1 << 17;
const HEAD_EFFECT = 1 << 18;
const EFFECT_PRESERVED = 1 << 19;
const USER_EFFECT = 1 << 20;
const REACTION_IS_UPDATING = 1 << 21;
const ASYNC = 1 << 22;
const ERROR_VALUE = 1 << 23;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
const STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
const COMMENT_NODE = 8;
const HYDRATION_START = "[";
const HYDRATION_START_ELSE = "[!";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const UNINITIALIZED = Symbol();
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (name === "hidden" && value !== "until-found") {
    is_boolean = true;
  }
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function to_style(value, styles) {
  return value == null ? null : String(value);
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
let controller = null;
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
function await_invalid() {
  const error = new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);
  error.name = "Svelte error";
  throw error;
}
function experimental_async_ssr() {
  {
    console.warn(`https://svelte.dev/e/experimental_async_ssr`);
  }
}
class Renderer {
  /**
   * The contents of the renderer.
   * @type {RendererItem[]}
   */
  #out = [];
  /**
   * Any `onDestroy` callbacks registered during execution of this renderer.
   * @type {(() => void)[] | undefined}
   */
  #on_destroy = void 0;
  /**
   * Whether this renderer is a component body.
   * @type {boolean}
   */
  #is_component_body = false;
  /**
   * The type of string content that this renderer is accumulating.
   * @type {RendererType}
   */
  type;
  /** @type {Renderer | undefined} */
  #parent;
  /**
   * Asynchronous work associated with this renderer. `initial` is the promise from the function
   * this renderer was passed to (if that function was async), and `followup` is any any additional
   * work from `compact` calls that needs to complete prior to collecting this renderer's content.
   * @type {{ initial: Promise<void> | undefined, followup: Promise<void>[] }}
   */
  promises = { initial: void 0, followup: [] };
  /**
   * State which is associated with the content tree as a whole.
   * It will be re-exposed, uncopied, on all children.
   * @type {SSRState}
   * @readonly
   */
  global;
  /**
   * State that is local to the branch it is declared in.
   * It will be shallow-copied to all children.
   *
   * @type {{ select_value: string | undefined }}
   */
  local;
  /**
   * @param {SSRState} global
   * @param {Renderer | undefined} [parent]
   * @param {RendererType} [type]
   */
  constructor(global, parent, type) {
    this.global = global;
    this.local = parent ? { ...parent.local } : { select_value: void 0 };
    this.#parent = parent;
    this.type = type ?? parent?.type ?? "body";
  }
  /**
   * Create a child renderer. The child renderer inherits the state from the parent,
   * but has its own content.
   * @param {(renderer: Renderer) => MaybePromise<void>} fn
   * @param {RendererType} [type]
   */
  child(fn, type) {
    const child = new Renderer(this.global, this, type);
    this.#out.push(child);
    const parent = ssr_context;
    set_ssr_context({
      ...ssr_context,
      p: parent,
      c: null,
      r: child
    });
    const result = fn(child);
    set_ssr_context(parent);
    if (result instanceof Promise) {
      if (child.global.mode === "sync") {
        await_invalid();
      }
      result.catch(() => {
      });
      child.promises.initial = result;
    }
    return child;
  }
  /**
   * Create a component renderer. The component renderer inherits the state from the parent,
   * but has its own content. It is treated as an ordering boundary for ondestroy callbacks.
   * @param {(renderer: Renderer) => MaybePromise<void>} fn
   * @param {Function} [component_fn]
   * @returns {void}
   */
  component(fn, component_fn) {
    push();
    const child = this.child(fn);
    child.#is_component_body = true;
    pop();
  }
  /**
   * @param {string | (() => Promise<string>)} content
   */
  push(content) {
    if (typeof content === "function") {
      this.child(async (renderer) => renderer.push(await content()));
    } else {
      this.#out.push(content);
    }
  }
  /**
   * Compact everything between `start` and `end` into a single renderer, then call `fn` with the result of that renderer.
   * The compacted renderer will be sync if all of the children are sync and {@link fn} is sync, otherwise it will be async.
   * @param {{ start: number, end?: number, fn: (content: AccumulatedContent) => AccumulatedContent | Promise<AccumulatedContent> }} args
   */
  compact({ start, end = this.#out.length, fn }) {
    const child = new Renderer(this.global, this);
    const to_compact = this.#out.splice(start, end - start, child);
    if (this.global.mode === "sync") {
      Renderer.#compact(fn, child, to_compact, this.type);
    } else {
      this.promises.followup.push(Renderer.#compact_async(fn, child, to_compact, this.type));
    }
  }
  /**
   * @param {() => void} fn
   */
  on_destroy(fn) {
    (this.#on_destroy ??= []).push(fn);
  }
  /**
   * @returns {number[]}
   */
  get_path() {
    return this.#parent ? [...this.#parent.get_path(), this.#parent.#out.indexOf(this)] : [];
  }
  /**
   * @deprecated this is needed for legacy component bindings
   */
  copy() {
    const copy = new Renderer(this.global, this.#parent, this.type);
    copy.#out = this.#out.map((item) => item instanceof Renderer ? item.copy() : item);
    copy.promises = this.promises;
    return copy;
  }
  /**
   * @param {Renderer} other
   * @deprecated this is needed for legacy component bindings
   */
  subsume(other) {
    if (this.global.mode !== other.global.mode) {
      throw new Error(
        "invariant: A renderer cannot switch modes. If you're seeing this, there's a compiler bug. File an issue!"
      );
    }
    this.local = other.local;
    this.#out = other.#out.map((item) => {
      if (item instanceof Renderer) {
        item.subsume(item);
      }
      return item;
    });
    this.promises = other.promises;
    this.type = other.type;
  }
  get length() {
    return this.#out.length;
  }
  /**
   * Only available on the server and when compiling with the `server` option.
   * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} [options]
   * @returns {RenderOutput}
   */
  static render(component, options = {}) {
    let sync;
    const result = (
      /** @type {RenderOutput} */
      {}
    );
    Object.defineProperties(result, {
      html: {
        get: () => {
          return (sync ??= Renderer.#render(component, options)).body;
        }
      },
      head: {
        get: () => {
          return (sync ??= Renderer.#render(component, options)).head;
        }
      },
      body: {
        get: () => {
          return (sync ??= Renderer.#render(component, options)).body;
        }
      },
      then: {
        value: (
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: SyncRenderOutput) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          (onfulfilled, onrejected) => {
            {
              experimental_async_ssr();
              const result2 = sync ??= Renderer.#render(component, options);
              const user_result = onfulfilled({
                head: result2.head,
                body: result2.body,
                html: result2.body
              });
              return Promise.resolve(user_result);
            }
          }
        )
      }
    });
    return result;
  }
  /**
   * Collect all of the `onDestroy` callbacks regsitered during rendering. In an async context, this is only safe to call
   * after awaiting `collect_async`.
   *
   * Child renderers are "porous" and don't affect execution order, but component body renderers
   * create ordering boundaries. Within a renderer, callbacks run in order until hitting a component boundary.
   * @returns {Iterable<() => void>}
   */
  *#collect_on_destroy() {
    for (const component of this.#traverse_components()) {
      yield* component.#collect_ondestroy();
    }
  }
  /**
   * Performs a depth-first search of renderers, yielding the deepest components first, then additional components as we backtrack up the tree.
   * @returns {Iterable<Renderer>}
   */
  *#traverse_components() {
    for (const child of this.#out) {
      if (typeof child !== "string") {
        yield* child.#traverse_components();
      }
    }
    if (this.#is_component_body) {
      yield this;
    }
  }
  /**
   * @returns {Iterable<() => void>}
   */
  *#collect_ondestroy() {
    if (this.#on_destroy) {
      for (const fn of this.#on_destroy) {
        yield fn;
      }
    }
    for (const child of this.#out) {
      if (child instanceof Renderer && !child.#is_component_body) {
        yield* child.#collect_ondestroy();
      }
    }
  }
  /**
   * Render a component. Throws if any of the children are performing asynchronous work.
   *
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
   * @returns {AccumulatedContent}
   */
  static #render(component, options) {
    var previous_context = ssr_context;
    try {
      const renderer = Renderer.#open_render("sync", component, options);
      const content = Renderer.#collect_content([renderer], renderer.type);
      return Renderer.#close_render(content, renderer);
    } finally {
      abort();
      set_ssr_context(previous_context);
    }
  }
  /**
   * Render a component.
   *
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
   * @returns {Promise<AccumulatedContent>}
   */
  static async #render_async(component, options) {
    var previous_context = ssr_context;
    try {
      const renderer = Renderer.#open_render("async", component, options);
      const content = await Renderer.#collect_content_async([renderer], renderer.type);
      return Renderer.#close_render(content, renderer);
    } finally {
      abort();
      set_ssr_context(previous_context);
    }
  }
  /**
   * @param {(content: AccumulatedContent) => AccumulatedContent | Promise<AccumulatedContent>} fn
   * @param {Renderer} child
   * @param {RendererItem[]} to_compact
   * @param {RendererType} type
   */
  static #compact(fn, child, to_compact, type) {
    const content = Renderer.#collect_content(to_compact, type);
    const transformed_content = fn(content);
    if (transformed_content instanceof Promise) {
      throw new Error(
        "invariant: Somehow you've encountered asynchronous work while rendering synchronously. If you're seeing this, there's a compiler bug. File an issue!"
      );
    } else {
      Renderer.#push_accumulated_content(child, transformed_content);
    }
  }
  /**
   * @param {(content: AccumulatedContent) => AccumulatedContent | Promise<AccumulatedContent>} fn
   * @param {Renderer} child
   * @param {RendererItem[]} to_compact
   * @param {RendererType} type
   */
  static async #compact_async(fn, child, to_compact, type) {
    const content = await Renderer.#collect_content_async(to_compact, type);
    const transformed_content = await fn(content);
    Renderer.#push_accumulated_content(child, transformed_content);
  }
  /**
   * Collect all of the code from the `out` array and return it as a string, or a promise resolving to a string.
   * @param {RendererItem[]} items
   * @param {RendererType} current_type
   * @param {AccumulatedContent} content
   * @returns {AccumulatedContent}
   */
  static #collect_content(items, current_type, content = { head: "", body: "" }) {
    for (const item of items) {
      if (typeof item === "string") {
        content[current_type] += item;
      } else if (item instanceof Renderer) {
        Renderer.#collect_content(item.#out, item.type, content);
      }
    }
    return content;
  }
  /**
   * Collect all of the code from the `out` array and return it as a string.
   * @param {RendererItem[]} items
   * @param {RendererType} current_type
   * @param {AccumulatedContent} content
   * @returns {Promise<AccumulatedContent>}
   */
  static async #collect_content_async(items, current_type, content = { head: "", body: "" }) {
    for (const item of items) {
      if (typeof item === "string") {
        content[current_type] += item;
      } else {
        if (item.promises.initial) {
          await item.promises.initial;
        }
        for (const followup of item.promises.followup) {
          await followup;
        }
        await Renderer.#collect_content_async(item.#out, item.type, content);
      }
    }
    return content;
  }
  /**
   * @param {Renderer} tree
   * @param {AccumulatedContent} accumulated_content
   */
  static #push_accumulated_content(tree, accumulated_content) {
    for (const [type, content] of Object.entries(accumulated_content)) {
      if (!content) continue;
      const child = new Renderer(
        tree.global,
        tree,
        /** @type {RendererType} */
        type
      );
      child.push(content);
      tree.#out.push(child);
    }
  }
  /**
   * @template {Record<string, any>} Props
   * @param {'sync' | 'async'} mode
   * @param {import('svelte').Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
   * @returns {Renderer}
   */
  static #open_render(mode, component, options) {
    const renderer = new Renderer(
      new SSRState(mode, options.idPrefix ? options.idPrefix + "-" : "")
    );
    renderer.push(BLOCK_OPEN);
    if (options.context) {
      push();
      ssr_context.c = options.context;
      ssr_context.r = renderer;
    }
    component(renderer, options.props ?? {});
    if (options.context) {
      pop();
    }
    renderer.push(BLOCK_CLOSE);
    return renderer;
  }
  /**
   * @param {AccumulatedContent} content
   * @param {Renderer} renderer
   */
  static #close_render(content, renderer) {
    for (const cleanup of renderer.#collect_on_destroy()) {
      cleanup();
    }
    let head2 = content.head + renderer.global.get_title();
    const body = BLOCK_OPEN + content.body + BLOCK_CLOSE;
    for (const { hash, code } of renderer.global.css) {
      head2 += `<style id="${hash}">${code}</style>`;
    }
    return {
      head: head2,
      body
    };
  }
}
class SSRState {
  /** @readonly @type {'sync' | 'async'} */
  mode;
  /** @readonly @type {() => string} */
  uid;
  /** @readonly @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  /** @type {{ path: number[], value: string }} */
  #title = { path: [], value: "" };
  /**
   * @param {'sync' | 'async'} mode
   * @param {string} [id_prefix]
   */
  constructor(mode, id_prefix = "") {
    this.mode = mode;
    let uid = 1;
    this.uid = () => `${id_prefix}s${uid++}`;
  }
  get_title() {
    return this.#title.value;
  }
  /**
   * Performs a depth-first (lexicographic) comparison using the path. Rejects sets
   * from earlier than or equal to the current value.
   * @param {string} value
   * @param {number[]} path
   */
  set_title(value, path) {
    const current = this.#title.path;
    let i = 0;
    let l = Math.min(path.length, current.length);
    while (i < l && path[i] === current[i]) i += 1;
    if (path[i] === void 0) return;
    if (current[i] === void 0 || path[i] > current[i]) {
      this.#title.path = path;
      this.#title.value = value;
    }
  }
}
function render(component, options = {}) {
  return Renderer.render(
    /** @type {Component<Props>} */
    component,
    options
  );
}
function head(renderer, fn) {
  renderer.child((renderer2) => {
    renderer2.push(BLOCK_OPEN);
    renderer2.child(fn);
    renderer2.push(BLOCK_CLOSE);
  }, "head");
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash, directives) {
  var result = to_class(value, hash, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function slot(renderer, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(renderer, slot_props);
  }
}
function bind_props(props_parent, props_now) {
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key)?.set) {
      props_parent[key] = value;
    }
  }
}
function build_title(renderer, children) {
  const path = renderer.get_path();
  const i = renderer.length;
  renderer.child(children);
  renderer.compact({
    start: i,
    fn: ({ head: head2 }) => {
      renderer.global.set_title(head2, path);
      return { head: "", body: "" };
    }
  });
}
export {
  ASYNC as A,
  BOUNDARY_EFFECT as B,
  COMMENT_NODE as C,
  DIRTY as D,
  ERROR_VALUE as E,
  build_title as F,
  attr as G,
  HYDRATION_ERROR as H,
  INERT as I,
  attr_style as J,
  stringify as K,
  LEGACY_PROPS as L,
  MAYBE_DIRTY as M,
  clsx as N,
  ROOT_EFFECT as R,
  STATE_SYMBOL as S,
  UNOWNED as U,
  HYDRATION_END as a,
  HYDRATION_START as b,
  HYDRATION_START_ELSE as c,
  EFFECT_RAN as d,
  CLEAN as e,
  EFFECT as f,
  BLOCK_EFFECT as g,
  BRANCH_EFFECT as h,
  DESTROYED as i,
  EFFECT_TRANSPARENT as j,
  EFFECT_PRESERVED as k,
  DERIVED as l,
  INSPECT_EFFECT as m,
  UNINITIALIZED as n,
  HEAD_EFFECT as o,
  STALE_REACTION as p,
  RENDER_EFFECT as q,
  USER_EFFECT as r,
  DISCONNECTED as s,
  REACTION_IS_UPDATING as t,
  render as u,
  experimental_async_ssr as v,
  attr_class as w,
  bind_props as x,
  head as y,
  slot as z
};
