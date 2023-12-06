import { SuperInput } from './SuperInput.js'
import { SuperContent } from './SuperContent.js'
import { SuperDisplay } from './SuperDisplay.js'
import { SuperForm } from './SuperForm.js'
import { SuperBoxMaker } from './SuperBoxMaker.js'
import { SuperImage } from './SuperImage.js'

const superTypes = {
  input: SuperInput,
  content: SuperContent,
  display: SuperDisplay,
  form: SuperForm,
  box: SuperBoxMaker,
  image: SuperImage
}

export default (type, options) => {
  return new superTypes[type](options)
}
