import { IState } from '@src/model';
import { createGameField } from '@src/utils/createGameField';

const INIT_GAME_LEVEL = '1';
const INIT_GAME_FIELD_SIZE = 9;
const INIT_GAME_FIELD_PERCENT_FILLED = 10;

export const initialState: IState = {
  gameLevel: INIT_GAME_LEVEL,
  gameFieldSize: INIT_GAME_FIELD_SIZE,
  gameFieldPercentFilled: INIT_GAME_FIELD_PERCENT_FILLED,
  gameFieldData: createGameField(INIT_GAME_FIELD_SIZE ** 2, INIT_GAME_FIELD_PERCENT_FILLED),
  selectedCells: {},
};
