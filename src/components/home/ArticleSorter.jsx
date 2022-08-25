const ArticleSorter = ({ setSelectedSort }) => {
  const availableSorts = {
    Date: "date",
    "Number of Comments": "comment_count",
    Votes: "votes",
  };
  const availableOrders = {
    Ascending: "asc",
    Descending: "desc",
  };

  return (
    <section id="section__article-sorter">
      <select
        onChange={(event) => {
          const sort_by = availableSorts[event.target.value];
          setSelectedSort((curSort) => {
            return { ...curSort, sort_by: sort_by };
          });
        }}
        name="sort-by-selector"
      >
        {Object.keys(availableSorts).map((sort) => {
          return (
            <option key={availableSorts[sort]} value={availableSorts[sort]}>
              {sort}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => {
          const order = availableOrders[event.target.value];
          setSelectedSort((curSort) => {
            return { ...curSort, order: order };
          });
        }}
        name="order-selector"
      >
        {Object.keys(availableOrders).map((order) => {
          return (
            <option key={availableOrders[order]} value={availableOrders[order]}>
              {order}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default ArticleSorter;
