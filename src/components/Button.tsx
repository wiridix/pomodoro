import React, { FormEvent } from 'react'
import {Button} from "@mui/material"

interface Props{
    _callback: (e:FormEvent)=>void,
    children: JSX.Element | string,
}

export const ButtonCall = ({_callback,children}:Props) => {
    return (
        <Button variant='contained' size="large" onClick={_callback}>{children}</Button>
    )
}
