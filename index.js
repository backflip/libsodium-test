// @ts-check
import sodium from "libsodium-wrappers";

class MyPlugin {
  #sodiumIsReady = false;

  /**
   * Check if libsodium.js is ready
   *
   * Do it only once as it does some calculations:
   * https://github.com/jedisct1/libsodium.js/blob/e14d775b6669613906395c82293bd3955d08028c/wrapper/wrap-template.js#L8
   *
   * @returns
   */
  async isReady() {
    if (!this.#sodiumIsReady) {
      await sodium.ready;

      this.#sodiumIsReady = true;
    }

    return;
  }

  /**
   * Exemplary plugin method
   *
   * @returns {Promise<Uint8Array>}
   */
  async myMethod() {
    await this.isReady();

    const key = sodium.crypto_secretstream_xchacha20poly1305_keygen();

    return key;
  }
}

export default MyPlugin;
