

// InputSystem take cares of listingin to inputs and key events
export class InputSystem {
    public static readonly KeyMap: Map<number,string> = 

    public startListening(): void {
        window.addEventListener("keydown", ({ keyCode }) => {
            console.log(keyCode);
        })
    }
}