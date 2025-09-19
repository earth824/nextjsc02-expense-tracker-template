export default function TransactionItem() {
  return (
    <div className="flex justify-between items-center border not-last:border-b-0 p-3">
      <div className="flex items-center gap-3">
        {/* <Avatar className="size-12">
          <AvatarImage  />
        </Avatar> */}
        <div className="leading-tight">
          <h2 className="font-bold">Dtac</h2>
          <span className="text-xs text-muted-foreground">05 May 2025</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <Badge>Expense</Badge> */}
        <span className="w-30 text-right truncate">&#3647; 1,000.00</span>
        {/* <TransactionItemAction /> */}
      </div>
    </div>
  );
}
