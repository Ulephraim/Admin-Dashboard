/** @format */

import React from 'react';
import { StatCards } from './StatCards';
import { ActivityGraph } from './ActivityGraph';
import { RecentTransactions } from './RecentTransactions';
import { UsageRadar } from './UsageRadar';

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};
