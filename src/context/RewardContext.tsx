import { createContext, useState } from "react";
import { nanoid } from "nanoid";

interface RewardContextProps {
  rewards: Reward[];
  addReward: (text: string, weight: number) => void;
  deleteReward: (id: string) => void;
  editReward: (id: string, text: string) => void;
  updateReward: (id: string, weight: number) => void;
}

export interface Reward {
  _id: string;
  name: string;
  weight: number;
  img: number;
}

export const RewardContext = createContext<RewardContextProps | undefined>(
  undefined
);

export const RewardProvider = (props: { children: React.ReactNode }) => {
  const [rewards, setRewards] = useState<Reward[]>([
    {
        "_id" : nanoid(),
        "name" : "Good",
        "weight" : 1,
        "img" : 1,
    },
    {
        "_id" : nanoid(),
        "name" : "Bad",
        "weight" : -1,
        "img" : 1,
    }
  ]);

  const addReward = (text: string, weight: number) => {
    const newReward: Reward = {
      _id: nanoid(),
      name: text,
      weight,
      img: 1,
    };

    setRewards([...rewards, newReward]);
  };

  const deleteReward = (id: string) => {
    setRewards((prevRewards) =>
      prevRewards.filter((reward) => reward._id !== id)
    );
  };

  const editReward = (id: string, name: string) => {
    setRewards((prevRewards) => {
      return prevRewards.map((reward) => {
        if (reward._id === id) {
          return { ...reward, name };
        }
        return reward;
      });
    });
  };

  const updateReward = (id: string, weight: number) => {
    setRewards((prevReward) => {
      return prevReward.map((reward) => {
        if (reward._id === id) {
          return {
            ...reward,
            weight,
          };
        }
        return reward;
      });
    });
  };

  const value: RewardContextProps = {
    rewards,
    addReward,
    deleteReward,
    editReward,
    updateReward,
  };

  return (
    <RewardContext.Provider value={value}>
      {props.children}
    </RewardContext.Provider>
  );
};
