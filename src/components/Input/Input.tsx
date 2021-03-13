import React, {useState} from 'react'

type InputProps = {
    placeholder: string,
    iconName: string,
    onKeyPress: (value: string) => void
}

const Input: React.FC<InputProps> = ({placeholder, iconName, onKeyPress}) => {
    const [value, setValue] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    const pressKeyHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'enter') onKeyPress(value)
    }

    return (
        <div className="input-field">
            <i className="material-icons prefix">{iconName}</i>
            <input onKeyPress={pressKeyHandler} value={value} onChange={changeHandler} id={`input-${placeholder}-${Date.now()}`} type="text"
                   className="validate"/>
            <label htmlFor="icon_prefix">{placeholder}</label>
        </div>
    )
}

export default Input