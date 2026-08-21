// Quick reminder: map returns a new array.
// I keep forgetting this when switching between map and forEach.

const users = [
  { id: 1, name: 'Alex', role: 'admin', age: 29 },
  { id: 2, name: 'Taylor', role: 'editor', age: 24 },
  { id: 3, name: 'Jordan', role: 'user', age: 31 },
  { id: 4, name: 'Casey', role: 'admin', age: 19 }
];

// 1. Extract only user names
const userNames = users.map(user => user.name);
console.log('User names:', userNames);

// 2. Filter adult admins
const adultAdmins = users.filter(user => user.role === 'admin' && user.age >= 21);
console.log('Adult admins:', adultAdmins);

// 3. Compute average age with reduce
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
const avgAge = totalAge / users.length;
console.log('Average age:', avgAge);

// 4. Index array by ID into an object/lookup table
const usersById = users.reduce((lookup, user) => {
  lookup[user.id] = user;
  return lookup;
}, {});
console.log('Lookup by ID (id=3):', usersById[3]);
