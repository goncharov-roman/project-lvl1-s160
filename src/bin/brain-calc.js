#!/usr/bin/env node
import gameCalcFunction from '../games/calc';
import { gameFunction } from '..';

gameFunction('What is the result of the expression?\n', gameCalcFunction, 0, 21, 3);
