const defaultOptions = {
    cycle: false
};

let _options = {};

/**
 * Retrieves the value for an option key.
 *
 * @param key Key of the option
 * @returns {*} Value of the option
 */
export function getOption(key) {
    return _options[key];
}

/**
 * Extends `defaultOptions` by the specified ones.
 * @param options
 */
export function setOptions(options = {}) {
    _options = {
        ...defaultOptions,
        ...options
    }
}