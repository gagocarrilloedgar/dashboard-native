/// <reference types="react" />
declare type Optional<T> = T | undefined;
declare type WorkoutDay = Optional<"a" | "b">;
/**
 {
     '02-18-2020': [
            {
                exercise: 'squat',
                value: 100
            },
            {
                exercise: 'bench',
                value: 200
            }
        ],
    
 }
 */
interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string;
        value: number;
    }>;
}
declare type OptionalNumber = Optional<number>;
declare class WorkoutStore {
    currenSquat: OptionalNumber;
    currentBenchPress: OptionalNumber;
    currentDeadlift: OptionalNumber;
    currentOverheadPress: OptionalNumber;
    currentBarbellRow: OptionalNumber;
    lastWorkoutType: WorkoutDay;
    history: Optional<WorkoutHistory>;
}
export declare const WorkoutStoreContext: import("react").Context<WorkoutStore>;
export {};
