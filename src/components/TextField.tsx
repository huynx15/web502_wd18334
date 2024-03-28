import React from "react";
type Props = {
    type?: string,
    placeholder: string,
    value?: string,
    onChange?: (value: string) => void
}
const TextField = ({ onChange, ...props }: Props) => {
    return (
        <input {...props} onChange={(e) => onChange && onChange(e.target.value)} />
    );
}
export default TextField;