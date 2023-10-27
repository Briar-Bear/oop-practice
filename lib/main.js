import { $e } from '../src/SuperElement'
import { $i } from '../src/SuperInput'
import { $c } from '../src/SuperContent'
import { $d } from '../src/SuperDisplay'
import { $ev } from '../src/SuperEvent'
import { $f } from '../src/SuperForm'
import { $bm } from '../src/SuperBoxMaker'
import { $img } from '../src/SuperImage'

const superTypes = {
  element: $e,
  input: $i,
  content: $c,
  display: $d,
  event: $ev,
  form: $f,
  box: $bm,
  image: $img
}

export default (type, options) => {
  return new superTypes[type](options)
}
