export declare type OriginalTeam = {
    name: string;
    league: string;
    size: number;
};
export declare type ExpectedTeam = {
    name: string;
    league: string;
    roster: number;
};
export declare const originalTeamToExpectedTeam: (originalTeam: OriginalTeam) => ExpectedTeam;
