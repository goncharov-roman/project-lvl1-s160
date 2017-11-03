#!/usr/bin/env node
import gameGcdFunction from '../games/gcd';
import { gameFunction } from '..';

gameFunction('Find the greatest common divisor of given numbers\n', gameGcdFunction, 1, 30, 2);
