#!/usr/bin/env node
import gameEvenFunction from '../games/even';
import { gameFunction } from '..';

gameFunction('Answer "yes" if number is even otherwise answer "no"\n', gameEvenFunction, 0, 100, 1);
