import {createRef} from "react";

export const useRefHook = () => {
    let ref = createRef<HTMLTextAreaElement>();

    return [ref];
}
