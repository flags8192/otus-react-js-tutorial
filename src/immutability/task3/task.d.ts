export interface Team {
    name: string;
    captain: {
        name: string;
        age: number;
    };
}
export declare const originalTeamToExpectedTeam: (team: Readonly<Team>) => Team;
