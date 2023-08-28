import { useContext } from "react";
import { RewardContext } from "./RewardContext";

export const useReward = () => {
    const context = useContext(RewardContext);

    if (!context) {
        throw new Error('useReward must be within a RewardProvider')
    }

    return context
}