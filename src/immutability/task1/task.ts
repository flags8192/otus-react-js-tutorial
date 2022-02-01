export type OriginalTeam = {
  name: string;
  league: string;
  size: number;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => ({
  name: 'New York Badgers',
  league: originalTeam.league || '',
  roster: 25,
});
