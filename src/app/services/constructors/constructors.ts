export interface Constructors {
    MRData: MRData;
}

export interface MRData {
    xmlns:            string;
    series:           string;
    url:              string;
    limit:            string;
    offset:           string;
    total:            string;
    constructorTable: ConstructorTable;
}

export interface ConstructorTable {
    constructors: Constructor[];
}

export interface Constructor {
    constructorID: string;
    url:           string;
    name:          string;
    nationality:   string;
}

