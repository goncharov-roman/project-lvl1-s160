#!/usr/bin/env node
import gameBalanceFunction from '../games/balance';
import { gameFunction } from '..';

gameFunction('Balance the given number.\n', gameBalanceFunction, 100, 9999, 1);
