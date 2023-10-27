import { $e } from './SuperElement'

/**
 * @class Used to create form components
 * @extends $e
 */
export function $f () {
  $e.call(this, 'form')
}

$f.prototype = Object.create($e.prototype)
/**
 *gets data from the form
 * @param {string} name - gets the name filled in on the form
 */
$f.prototype.getValue = function (name) {
  const formData = new FormData(this.element)

  return formData.get(name)
}
