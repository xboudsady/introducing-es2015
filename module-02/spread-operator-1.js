'use strict';

const originalFlavors = ['Choclate', 'Vanilla', 'Tomator'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Superman'];

const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);