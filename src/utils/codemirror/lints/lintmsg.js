

export function lintmsg(errors, setClassNameExtension) {
    try {
        errors.forEach(error => {
            setClassNameExtension({
                add: (lineNumber) => {
                    if (lineNumber === error.line) {
                        return 'errorline';
                    }
                },
            })
        })
    } catch(err) {
        return false;
    }
}