export class MarkerOnMap {
    id: number;
    lat: number;
    lng: number;
}

export class UniversityDetailOnMap {
    id: number;
    name: string;
    description: string;
    imagePath?: string;
}

/*export class UniversityFilters {
    languages: UniversityMapFilterElement[];
    activities: UniversityMapFilterElement[];
    faculties: UniversityMapFilterElement[];
}*/

export class UniversityFilters {
    id: number;
    title: string;
    content: UniversityMapFilterElement[];
}

export class UniversityMapFilterElement {
    id: number;
    content: string;
    isActive: boolean;
}

export class UniversityFilterPair {
    universityId: number;
    filterId: number;
}