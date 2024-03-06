import React, { useEffect, useState } from 'react';
import { decode } from 'js-base64';

export function Text({ id, var1 = "", var1r = "●" }) {
    var langs = JSON.parse(decode(localStorage.getItem("langs")))

    var [text, setText] = useState("")

    useEffect(() => {
        setText(langs[id].replace(var1r, var1))  // eslint-disable-next-line
    }, [langs])

    return (
        <>
            {text}
        </>
    )
}
