

export abstract class Nodo {
    public ID: string = "test";
    public childs: Nodo[] = [];

    public OnInit(): void {
        this.initTree();
    };

    public initTree(): void {
        for (let i = 0; i < this.childs.length; i++) {
            const element = this.childs[i];
            element.OnInit();
        }
    }

}
