export default class GameParams {
    public static getInstance(): GameParams
    {
        return GameParams.instance;
    }

    private static instance: GameParams = new GameParams();

    public lives: number = 10;
    public width: number = 320;
    public height: number = 480;

    constructor() {
        if (GameParams.instance) {
            throw new Error("Error: Instantiation failed: Use GameParams.getInstance() instead of new.");
        }
        GameParams.instance = this;
    }
}
