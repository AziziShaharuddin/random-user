const NameListTable = ({ data, handleViewItem }) => {
  const sx = {
    th: "py-3 px-8 min-w-[200px] text-base",
    td: "py-10 px-8 min-w-[200px] my-[8px] text-kira-grayText capitalize border-transparent group-hover/card:border-kira-primary",
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="text-left bg-transparent text-kira-grayText">
            <th className={`${sx.th}`}>Date</th>
            <th className={`${sx.th}`}>Name</th>
            <th className={`${sx.th}`}>Gender</th>
            <th className={`${sx.th}`}>Country</th>
            <th className={`${sx.th} text-right`}>Email</th>
          </tr>
        </thead>
        <tbody className="py-6">
          {data?.map((user, index) => {
            const date = new Date(user?.dob?.date);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(date);
            return (
              <tr
                key={index}
                className={`group/card cursor-pointer rounded-[10px] bg-kira-white shadow-md hover:outline-[10px] hover:transition-all hover:duration-200`}
                onClick={() => handleViewItem(user)}
              >
                <td
                  className={`${sx.td} border-2 border-r-0 rounded-tl-[10px] rounded-bl-[10px]`}
                >
                  {formattedDate}
                </td>
                <td
                  className={`${sx.td} group-hover/card:text-kira-primary font-semibold border-y-2 border-x-0 text-kira-darkText`}
                >
                  {user?.name?.first} {user?.name?.last}
                </td>
                <td
                  className={`${sx.td} group-hover/card:text-kira-darkText border-y-2 border-x-0 `}
                >
                  {user?.gender}
                </td>
                <td
                  className={`${sx.td} text-kira-darkText border-y-2 border-x-0 `}
                >
                  {user?.location?.country}
                </td>
                <td
                  className={`${sx.td} rounded-tr-[10px] rounded-br-[10px] text-right normal-case border-2 border-l-0`}
                >
                  {user?.email}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NameListTable;
