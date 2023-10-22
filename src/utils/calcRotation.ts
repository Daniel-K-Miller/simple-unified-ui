import { Direction } from "@enums/direction";

export function calcRotation(
	startDirection: Direction,
	endDirection: Direction
) {
	const order: Array<Direction> = [
		Direction.UP,
		Direction.RIGHT,
		Direction.DOWN,
		Direction.LEFT,
	];

	let stepsToDirection = 0;

	// symbolises 90 degrees
	const degreesPerDirection = 90;

	let endDirectionFound = false;

	// set to starting index
	let curIndex = order.indexOf(startDirection);

	while (!endDirectionFound) {
		// if start === end exit
		if (order[curIndex] === endDirection) {
			endDirectionFound = true;
			break;
		}

		// update index for this iteration
		if (curIndex + 1 > order.length - 1) curIndex = 0;
		else curIndex++;

		stepsToDirection++;

		if (order[curIndex] === endDirection) endDirectionFound = true;

		// fallback timeout to prevent infinte loop
		if (stepsToDirection === 10) endDirectionFound = true;
	}

	return degreesPerDirection * stepsToDirection;
}
