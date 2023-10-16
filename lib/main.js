import { SuperElement } from "../src/SuperElement";
import { SuperInput } from "../src/SuperInput";
import { SuperContent } from "../src/SuperContent";
import { SuperDisplay } from "../src/SuperDisplay";
import { SuperEvent } from "../src/SuperEvent";
import { SuperForm } from "../src/SuperForm";
import { SuperBoxMaker } from "../src/SuperBoxMaker";
import { SuperImage } from "../src/SuperImage";

const superTypes = {
    input: SuperInput,
    element: SuperElement,
    content: SuperContent,
    display: SuperDisplay,
    event: SuperEvent,
    form: SuperForm,
    image: SuperImage,
    box: SuperBoxMaker
}

export default (type, options) => {
        return new superTypes[type](options) 
    }