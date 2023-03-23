import IAgenda from "./interfaces/IAgenda";

// src/Quadra.ts
abstract class Quadra { 
    protected abstract reservar<T>(param: Date):IAgenda<T>
}

export default Quadra;