

export default function Button({text, actions}: {text: string,actions: any}) {
    return (
        <button onClick={actions}>{text}</button>
    )
}