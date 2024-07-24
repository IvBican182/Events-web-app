

export default function Button({text, actions}: {text: any,actions: any}) {
    return (
        <button onClick={actions}>{text}</button>
    )
}