
import { classname } from '@uiw/codemirror-extensions-classname';

export function lintmsg(errors, setClassNameExtension) {
    try {
        errors.forEach(error => {
            setClassNameExtension(classname({
                add: (lineNumber) => {
                    if (lineNumber === error.line) {
                        return 'errorline';
                    }
                },
            }))
        })
    } catch(err) {
        return false;
    }
}