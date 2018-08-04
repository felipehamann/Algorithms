function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    let fareCost = [];

    for (let i = 0; i < cost_per_mile.length; i++) {
        fareCost.push(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]);
    }

    return fareCost;
}
