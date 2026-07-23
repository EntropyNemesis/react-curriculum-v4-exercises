function SnackList() {
  const snackList = [
    { name: 'cheese with pretzels', rank: 5 },
    { name: 'berries with whipped cream', rank: 4 },
    { name: 'cashew clusters', rank: 3 },
    { name: 'chilled mango', rank: 2 },
    { name: 'chocolate', rank: 1 },
  ];

  const snackFavRanks = snackList.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {snackFavRanks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;
