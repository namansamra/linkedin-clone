import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { persist } from 'zustand/middleware';
export const useGlobalStore = create(
  devtools(
    persist(
      (set, get) => ({
        appState: {
          userInfo: null,
        },

        setUserInfo: (data) => {
          set(
            produce((state) => {
              state.appState.userInfo = data;
            })
          );
        },
        setHello: (data) => {
          set(
            produce((state) => {
              state.appState.userInfo = data;
            })
          );
        },
        resetStore: () => {
          set(
            produce((state) => {
              state.appState.userInfo = null;
            })
          );
        },
      }),
      {
        name: 'zustand-store',
        version: 1,
        // merge: (persistedState, currentState) => {
        //   console.log(persistedState, currentState);
        //   let obj = {
        //     ...JSON.parse(JSON.stringify(persistedState)),
        //     ...JSON.parse(JSON.stringify(currentState)),
        //   };
        //   console.log(obj);
        //   return obj;
        // },
      }
    )
  )
);
